import { useEffect, useRef, useState } from "react";
import { ENDING_LINES } from "@/data/survey";
import { buzz, playGlitch, playHeart, playUnlock } from "@/lib/audio";
import { cn } from "@/lib/utils";

type Props = {
  deep: boolean;
  hiddenCount: number;
  answerCount: number;
  onDead: (m?: string) => void;
};

export function EndingFlow({ deep, hiddenCount, answerCount, onDead }: Props) {
  const [stage, setStage] = useState<"pulse" | "letter" | "lock">("pulse");
  const [hits, setHits] = useState(0);
  const [synced, setSynced] = useState(0);
  const [line, setLine] = useState(0);
  const [typed, setTyped] = useState("");
  const [big, setBig] = useState(false);
  const [held, setHeld] = useState(0);
  const holdTimer = useRef<number | null>(null);

  useEffect(() => {
    if (stage !== "pulse") return;
    const id = window.setInterval(() => setBig((b) => !b), 480);
    return () => window.clearInterval(id);
  }, [stage]);

  useEffect(() => {
    if (stage !== "letter") return;
    const full = ENDING_LINES[line] ?? "";
    setTyped("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) window.clearInterval(id);
    }, 42);
    return () => window.clearInterval(id);
  }, [stage, line]);

  useEffect(() => {
    if (stage !== "lock") return;
    const id = window.setInterval(() => {
      playHeart();
      buzz(24);
    }, 1400);
    return () => window.clearInterval(id);
  }, [stage]);

  const goLetter = () => {
    playUnlock();
    playGlitch();
    setStage("letter");
  };

  const tapPulse = () => {
    playHeart();
    buzz([30, 40, 50]);
    setHits((h) => {
      const next = h + 1;
      if (big) setSynced((s) => s + 1);
      if (next >= 6) goLetter();
      return next;
    });
  };

  if (stage === "pulse") {
    return (
      <section className="flex flex-col items-center gap-8 pt-6">
        <p className="text-xs tracking-[0.25em] text-blue">结局校准</p>
        <h2 className="font-display text-2xl text-paper">先把心跳对齐。</h2>
        <p className="max-w-xs text-center text-sm text-muted">
          圆圈胀起来时点它。六次。手机的话会跟着震。
        </p>
        <button
          type="button"
          onClick={tapPulse}
          className={cn(
            "size-36 rounded-full bg-red shadow-[0_0_40px_#ff1a2e] transition-transform duration-500",
            big ? "scale-110" : "scale-95",
          )}
          aria-label="对齐心跳"
        />
        <p className="tabular-nums text-sm text-yellow">{hits} / 6</p>
        <button type="button" className="text-xs text-muted" onClick={goLetter}>
          已经对齐了。给我看结局。
        </button>
      </section>
    );
  }

  if (stage === "letter") {
    const full = ENDING_LINES[line] ?? "";
    const done = typed.length >= full.length;
    return (
      <section className="flex min-h-[60vh] flex-col justify-between gap-8">
        <p className="text-xs tracking-[0.25em] text-red">
          私密档案 · {line + 1}/{ENDING_LINES.length}
        </p>
        <p className="font-display text-3xl leading-snug text-paper">{typed || " "}</p>
        <button
          type="button"
          onClick={() => {
            buzz(18);
            playHeart();
            if (!done) {
              setTyped(full);
              return;
            }
            if (line + 1 < ENDING_LINES.length) setLine((n) => n + 1);
            else setStage("lock");
          }}
          className="h-12 w-full rounded-md bg-yellow text-sm font-medium text-yellow-ink"
        >
          {done ? (line + 1 < ENDING_LINES.length ? "下一句" : "收下结局") : "跳过打字"}
        </button>
      </section>
    );
  }

  const title = deep
    ? "你误入了。也留下了。"
    : hiddenCount >= 3
      ? "你比你以为的更听话。"
      : "问卷结束。档案没有结束。";

  const startHold = () => {
    if (holdTimer.current) window.clearInterval(holdTimer.current);
    holdTimer.current = window.setInterval(() => {
      setHeld((v) => {
        const n = Math.min(100, v + 4);
        if (n >= 100) {
          if (holdTimer.current) window.clearInterval(holdTimer.current);
          playUnlock();
          buzz([40, 80, 120, 80]);
        }
        return n;
      });
    }, 40);
  };
  const stopHold = () => {
    if (holdTimer.current) window.clearInterval(holdTimer.current);
    if (held < 100) setHeld(0);
  };

  return (
    <section className="flex flex-col gap-6">
      <p className="text-xs tracking-[0.25em] text-yellow">FILE LOCKED</p>
      <h2 className="font-display text-3xl leading-tight text-red">{title}</h2>
      <p className="text-sm leading-relaxed text-paper">
        记下 {answerCount} 道题，翻出 {hiddenCount} 句不该出现的话。
        心跳对齐 {synced} 次。编号 NES-{String(1000 + hiddenCount * 17 + answerCount).slice(-4)}。
      </p>
      <p className="font-display text-lg text-yellow">
        {held >= 100 ? "好。你答应了。我不会放。" : "按住下面。直到我说可以。"}
      </p>
      <button
        type="button"
        onPointerDown={startHold}
        onPointerUp={stopHold}
        onPointerLeave={stopHold}
        onPointerCancel={stopHold}
        className="relative h-14 w-full overflow-hidden rounded-md border border-red bg-ink-2 text-sm text-paper"
      >
        <span
          className="absolute inset-y-0 left-0 bg-red"
          style={{ width: `${held}%`, opacity: 0.85 }}
        />
        <span className="relative">{held >= 100 ? "已登记。只准看着我。" : "按住 · 答应我"}</span>
      </button>
      <button
        type="button"
        onClick={() => {
          buzz([40, 80, 40]);
          onDead("关不掉。我早就猜到你会按这个。");
        }}
        className="h-12 w-full rounded-md border border-line bg-ink-2 text-sm text-muted"
      >
        关闭问卷
      </button>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="h-12 w-full rounded-md bg-blue text-sm text-paper"
      >
        再填一次（我会记得）
      </button>
    </section>
  );
}
