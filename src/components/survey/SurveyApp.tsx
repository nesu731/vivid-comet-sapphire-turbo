import { useCallback, useEffect, useMemo, useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";
import {
  DEEP_QUESTIONS,
  SURFACE_QUESTIONS,
  WHISPERS,
  type Option,
  type Question,
} from "@/data/survey";
import { EndingFlow } from "./EndingFlow";
import { WatcherLayer } from "./WatcherLayer";
import { buzz, isMuted, playGlitch, playTick, playUnlock, setMuted, startDrone, unlockAudio } from "@/lib/audio";

type Phase = "cover" | "quiz" | "deep" | "end";

const STORAGE = "habit-survey-v1";

function loadClicks(): number {
  try {
    return Number(localStorage.getItem(STORAGE) || "0");
  } catch {
    return 0;
  }
}

function bumpClicks() {
  try {
    const n = loadClicks() + 1;
    localStorage.setItem(STORAGE, String(n));
    return n;
  } catch {
    return 0;
  }
}

export function SurveyApp() {
  const [phase, setPhase] = useState<Phase>("cover");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [unlocked, setUnlocked] = useState<Record<string, boolean>>({});
  const [lastPick, setLastPick] = useState<Record<string, string>>({});
  const [whisper, setWhisper] = useState<string | null>(null);
  const [whisperKey, setWhisperKey] = useState(0);
  const [deepUnlocks, setDeepUnlocks] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [muted, setMutedUi] = useState(false);
  const [remembered, setRemembered] = useState(false);

  useEffect(() => {
    setRemembered(loadClicks() > 0);
  }, []);

  const list: Question[] = phase === "deep" ? DEEP_QUESTIONS : SURFACE_QUESTIONS;
  const q = list[index];
  const total = list.length;

  const showWhisper = useCallback((text?: string) => {
    const msg =
      text || WHISPERS[Math.floor(Math.random() * WHISPERS.length)];
    setWhisper(msg);
    setWhisperKey((k) => k + 1);
    window.setTimeout(() => setWhisper((cur) => (cur === msg ? null : cur)), 2800);
  }, []);

  const enterDeep = useCallback(() => {
    setGlitch(true);
    window.setTimeout(() => {
      setGlitch(false);
      setPhase("deep");
      setIndex(0);
      showWhisper("你不该点进来。但你点了。");
    }, 420);
  }, [showWhisper]);

  const pick = (opt: Option) => {
    if (!q) return;
    bumpClicks();
    const prev = lastPick[q.id];
    if (prev === opt.id) {
      setUnlocked((u) => ({ ...u, [q.id]: true }));
      setDeepUnlocks((n) => n + 1);
      playUnlock();
      buzz([40, 60, 80]);
      showWhisper("同一选项点两次，就是答应我了。");
      return;
    }
    setLastPick((p) => ({ ...p, [q.id]: opt.id }));
    setAnswers((a) => ({ ...a, [q.id]: opt.id }));
    playTick();
    buzz(opt.hidden || opt.trap ? [50, 40, 90] : 18);
    if (opt.trap) {
      playGlitch();
      enterDeep();
    }
  };

  const next = () => {
    if (!q) return;
    if (!answers[q.id]) {
      showWhisper("空着也是一种答案。我不喜欢。");
      return;
    }
    if (index + 1 >= total) {
      if (phase === "quiz" && deepUnlocks >= 2) {
        enterDeep();
        return;
      }
      setPhase("end");
      return;
    }
    setIndex((i) => i + 1);
  };

  const options = useMemo(() => {
    if (!q) return [];
    return unlocked[q.id] ? [...q.options, ...q.hiddenOptions] : q.options;
  }, [q, unlocked]);

  const deadClick = useCallback(
    (msg?: string) => {
      bumpClicks();
      playTick();
      buzz(12);
      showWhisper(msg);
    },
    [showWhisper],
  );

  const onStageClick = (e: MouseEvent) => {
    const el = e.target as HTMLElement | null;
    if (!el) return;
    if (el.closest("button, a, input, textarea, label")) return;
    deadClick();
  };

  const deep = phase === "deep" || phase === "end";

  return (
    <div
      className={cn(
        "relative min-h-dvh overflow-x-hidden bg-ink text-paper",
        glitch && "contrast-150 saturate-200",
      )}
      onClick={onStageClick}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,230,0,0.03) 3px, rgba(255,230,0,0.03) 4px)",
        }}
      />
      <WatcherLayer
        deep={deep}
        onIdle={() => showWhisper("你的光标停太久了。是在想我吗。")}
        onHide={() => showWhisper("不要逃到别的软件去。")}
        onEye={() => {
          buzz([20, 40, 80]);
          playUnlock();
          showWhisper("别装没看见右下角。我一直在看。");
        }}
      />

      {whisper ? (
        <div
          key={whisperKey}
          className="fixed top-16 left-1/2 z-50 w-[min(92vw,28rem)] -translate-x-1/2 border border-yellow bg-ink px-4 py-3 text-center text-sm text-yellow"
          style={{ pointerEvents: "none" }}
        >
          {whisper}
        </div>
      ) : null}

      <header className="relative z-10 flex items-center justify-between px-5 py-4">
        <button
          type="button"
          className="font-display text-sm tracking-wide text-yellow"
          onClick={() => deadClick("标题只是包装。大事在后面。")}
        >
          生活小习惯摸底
        </button>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-xs text-muted"
            onClick={() => {
              const next = !isMuted();
              setMuted(next);
              setMutedUi(next);
            }}
          >
            {muted ? "声音关" : "声音开"}
          </button>
          <button
            type="button"
            className="tabular-nums text-xs text-muted"
            onClick={() => deadClick("进度不是按钮。但你点了。我记下了。")}
          >
            {phase === "cover"
              ? "00"
              : phase === "end"
                ? "完"
                : `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`}
          </button>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-xl px-5 pb-24 pt-6">
        {phase === "cover" ? (
          <Cover
            remembered={remembered}
            onStart={() => {
              unlockAudio();
              startDrone();
              playTick();
              setPhase("quiz");
              if (remembered) {
                showWhisper("刷新也没用。我会记得你点过哪里。");
              }
            }}
            onDead={deadClick}
          />
        ) : null}

        {phase === "quiz" || phase === "deep" ? (
          q ? (
            <QuestionCard
              q={q}
              deep={phase === "deep"}
              options={options}
              selected={answers[q.id]}
              onPick={pick}
              onNext={next}
              onEnd={() => setPhase("end")}
              isLast={index + 1 >= total}
              onDead={deadClick}
            />
          ) : null
        ) : null}

        {phase === "end" ? (
          <EndingFlow
            deep={Object.keys(answers).some((k) => ["stay", "only", "watch"].includes(k))}
            hiddenCount={Object.keys(unlocked).length}
            answerCount={Object.keys(answers).length}
            onDead={deadClick}
          />
        ) : null}
      </main>

      <button
        type="button"
        className="fixed bottom-4 left-5 z-20 text-[11px] text-muted"
        onClick={() =>
          deadClick("这里什么也没有，但我早就猜到你会这样子了哦？")
        }
      >
        空白处也请勿乱点
      </button>
    </div>
  );
}

function Cover({
  remembered,
  onStart,
  onDead,
}: {
  remembered: boolean;
  onStart: () => void;
  onDead: (m?: string) => void;
}) {
  return (
    <section className="flex flex-col gap-8">
      <p className="text-xs tracking-[0.25em] text-blue">ANONYMOUS · 2 MIN</p>
      <h1 className="font-display text-3xl leading-tight text-paper sm:text-4xl">
        关于你最近状态的
        <br />
        几道小事
      </h1>
      <p className="max-w-sm text-sm leading-relaxed text-muted">
        匿名。没有标准答案。大概两分钟。
        请认真作答。我们会核对。手机打开会震动。电脑也能填。
      </p>
      {remembered ? (
        <p className="text-sm text-red">你回来了。答案还在。我还在。</p>
      ) : null}
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={onStart}
          className="h-12 w-full rounded-md bg-red px-6 text-sm font-medium text-paper"
        >
          开始填
        </button>
        <button
          type="button"
          onClick={() => onDead("角落也要检查吗。真可爱。")}
          className="h-12 w-full rounded-md border border-line bg-ink-2 px-6 text-sm text-muted"
        >
          我再看看说明
        </button>
      </div>
      <p className="text-xs text-muted">
        本问卷用于了解作息、回复习惯与独处方式。
        <button
          type="button"
          className="ml-1 text-yellow underline-offset-2 hover:underline"
          onClick={() => onDead("我不是问卷。问卷是包装。")}
        >
          细则
        </button>
      </p>
    </section>
  );
}

function QuestionCard({
  q,
  deep,
  options,
  selected,
  onPick,
  onNext,
  onEnd,
  isLast,
  onDead,
}: {
  q: Question;
  deep: boolean;
  options: Option[];
  selected?: string;
  onPick: (o: Option) => void;
  onNext: () => void;
  onEnd: () => void;
  isLast: boolean;
  onDead: (m?: string) => void;
}) {
  return (
    <section className="flex flex-col gap-6">
      <button
        type="button"
        className="self-start text-xs text-blue"
        onClick={() => onDead("这道题你已经有答案了。装不知道给谁看。")}
      >
        {q.aside}
      </button>
      <h2
        className={cn(
          "font-display text-2xl leading-snug",
          deep ? "text-red" : "text-paper",
        )}
      >
        {q.prompt}
      </h2>
      <ul className="flex flex-col gap-2">
        {options.map((opt) => {
          const on = selected === opt.id;
          const hidden = Boolean(opt.hidden || opt.trap);
          return (
            <li key={opt.id}>
              <button
                type="button"
                onClick={() => onPick(opt)}
                onPointerDown={() => {
                  if (hidden) {
                    buzz([60, 40, 90]);
                  }
                }}
                className={cn(
                  "flex min-h-12 w-full items-center justify-between rounded-md border px-4 py-3 text-left text-sm",
                  on
                    ? hidden
                      ? "border-yellow bg-yellow text-yellow-ink"
                      : "border-red bg-red text-paper"
                    : hidden
                      ? "border-yellow/60 bg-ink-2 text-yellow"
                      : "border-line bg-ink-2 text-paper",
                )}
              >
                <span>{opt.label}</span>
                <span className="text-[10px] tracking-widest text-muted">
                  {on ? "已选 · 再点一次" : hidden ? "未登记" : "选"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          className="text-xs text-muted"
          onClick={onEnd}
        >
          提前交卷
        </button>
        <button
          type="button"
          onClick={onNext}
          className="h-12 min-w-28 rounded-md bg-blue px-6 text-sm font-medium text-paper"
        >
          {isLast ? "交卷 · 看结局" : "下一题"}
        </button>
      </div>
    </section>
  );
}

