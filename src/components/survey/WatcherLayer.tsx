import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  deep: boolean;
  onIdle: () => void;
  onHide: () => void;
  onEye: () => void;
};

export function WatcherLayer({ deep, onIdle, onHide, onEye }: Props) {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  const idle = useRef<number | null>(null);
  const idleFn = useRef(onIdle);
  const hideFn = useRef(onHide);
  idleFn.current = onIdle;
  hideFn.current = onHide;

  useEffect(() => {
    const move = (e: PointerEvent) => {
      setPos({
        x: e.clientX / Math.max(window.innerWidth, 1),
        y: e.clientY / Math.max(window.innerHeight, 1),
      });
      if (idle.current) window.clearTimeout(idle.current);
      idle.current = window.setTimeout(() => idleFn.current(), 9000);
    };
    const onVis = () => {
      if (document.hidden) hideFn.current();
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    idle.current = window.setTimeout(() => idleFn.current(), 14000);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("visibilitychange", onVis);
      if (idle.current) window.clearTimeout(idle.current);
    };
  }, []);

  const px = (pos.x - 0.5) * 8;
  const py = (pos.y - 0.5) * 8;

  return (
    <div className="fixed inset-0 z-40" aria-hidden style={{ pointerEvents: "none" }}>
      <div
        className={cn(
          "absolute top-4 right-4 flex items-center gap-2 rounded-sm border px-2 py-1 text-[10px] tracking-widest uppercase",
          deep ? "border-red bg-ink text-red" : "border-line bg-ink-2 text-muted",
        )}
      >
        <span
          className={cn("inline-block size-1.5 rounded-full", deep ? "bg-red" : "bg-blue")}
          style={{ animation: "pulse 1.6s ease-in-out infinite" }}
        />
        REC
      </div>
      <button
        type="button"
        className="absolute bottom-5 right-5 size-12"
        style={{ pointerEvents: "auto" }}
        onClick={onEye}
        aria-label="眼睛"
      >
        <svg className="size-10" viewBox="0 0 40 40" fill="none">
          <ellipse
            cx="20"
            cy="20"
            rx="16"
            ry="10"
            stroke={deep ? "#ff1a2e" : "#1a4dff"}
            strokeWidth="1.5"
          />
          <circle cx={20 + px} cy={20 + py} r="5" fill={deep ? "#ff1a2e" : "#ffe600"} />
          <circle cx={20 + px - 1.5} cy={20 + py - 1.5} r="1.4" fill="#0a0a0a" />
        </svg>
      </button>
    </div>
  );
}
