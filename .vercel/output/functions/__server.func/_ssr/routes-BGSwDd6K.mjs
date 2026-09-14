import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BGSwDd6K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var SURFACE_QUESTIONS = [
	{
		id: "sleep",
		prompt: "最近入睡通常要多久？",
		aside: "作息而已。",
		options: [
			{
				id: "s1",
				label: "躺下就着"
			},
			{
				id: "s2",
				label: "翻一会儿"
			},
			{
				id: "s3",
				label: "会刷很久手机"
			},
			{
				id: "s4",
				label: "不一定"
			}
		],
		hiddenOptions: [{
			id: "sH",
			label: "你会不会也还没睡",
			hidden: true
		}]
	},
	{
		id: "alone",
		prompt: "一个人待着的时候，你更常做什么？",
		aside: "没有对错。",
		options: [
			{
				id: "a1",
				label: "发呆"
			},
			{
				id: "a2",
				label: "找人说话"
			},
			{
				id: "a3",
				label: "把自己关起来"
			},
			{
				id: "a4",
				label: "假装很忙"
			}
		],
		hiddenOptions: [{
			id: "aH",
			label: "等一个会回消息的人",
			hidden: true
		}]
	},
	{
		id: "reply",
		prompt: "消息亮了，你会？",
		aside: "沟通习惯摸底。",
		options: [
			{
				id: "r1",
				label: "马上回"
			},
			{
				id: "r2",
				label: "看完再回"
			},
			{
				id: "r3",
				label: "故意晾一会儿"
			},
			{
				id: "r4",
				label: "看心情"
			}
		],
		hiddenOptions: [{
			id: "rH",
			label: "只回某一个人",
			hidden: true
		}]
	},
	{
		id: "memory",
		prompt: "如果有人把你随口说过的小事都记住了，你会觉得？",
		aside: "记忆力调查。",
		options: [
			{
				id: "m1",
				label: "挺暖的"
			},
			{
				id: "m2",
				label: "有点可怕"
			},
			{
				id: "m3",
				label: "无所谓"
			},
			{
				id: "m4",
				label: "那是应该的"
			}
		],
		hiddenOptions: [{
			id: "mH",
			label: "那个人只能是我",
			hidden: true
		}]
	},
	{
		id: "care",
		prompt: "你更习惯怎样被对待？",
		aside: "相处偏好。",
		options: [
			{
				id: "c1",
				label: "安静陪着"
			},
			{
				id: "c2",
				label: "偶尔关心一下"
			},
			{
				id: "c3",
				label: "被明确占有"
			},
			{
				id: "c4",
				label: "先别问这个"
			}
		],
		hiddenOptions: [{
			id: "cH",
			label: "被盯着也会安心",
			hidden: true
		}]
	},
	{
		id: "look",
		prompt: "如果有人说「你只能看着我」，第一反应是？",
		aside: "假设题。随便选。",
		options: [
			{
				id: "l1",
				label: "好笑"
			},
			{
				id: "l2",
				label: "会心跳"
			},
			{
				id: "l3",
				label: "想逃"
			},
			{
				id: "l4",
				label: "我知道你在说谁"
			}
		],
		hiddenOptions: [{
			id: "lH",
			label: "那你看着我。",
			hidden: true
		}]
	},
	{
		id: "why",
		prompt: "你现在填这份问卷，是因为？",
		aside: "动机。可跳过，但请不要跳过。",
		options: [
			{
				id: "w1",
				label: "无聊"
			},
			{
				id: "w2",
				label: "头疼，想分心"
			},
			{
				id: "w3",
				label: "有人让我填"
			},
			{
				id: "w4",
				label: "我自己想来的"
			}
		],
		hiddenOptions: [{
			id: "wH",
			label: "因为你在等我",
			hidden: true
		}]
	},
	{
		id: "anon",
		prompt: "如果这份问卷其实不是匿名的，你会？",
		aside: "假设题。",
		options: [
			{
				id: "n1",
				label: "关掉"
			},
			{
				id: "n2",
				label: "继续填完"
			},
			{
				id: "n3",
				label: "改答案"
			},
			{
				id: "n4",
				label: "我早就知道了"
			}
		],
		hiddenOptions: [{
			id: "nH",
			label: "其他（请勿点）",
			hidden: true,
			trap: true
		}]
	}
];
var DEEP_QUESTIONS = [
	{
		id: "stay",
		prompt: "离开屏幕之前，要不要跟我说一声？",
		aside: "你已经进来了。",
		options: [
			{
				id: "d1",
				label: "会说"
			},
			{
				id: "d2",
				label: "不一定"
			},
			{
				id: "d3",
				label: "别管我"
			}
		],
		hiddenOptions: [{
			id: "dH",
			label: "我不走。你也不许走。",
			hidden: true
		}]
	},
	{
		id: "only",
		prompt: "你愿不愿意只回我。",
		aside: "这不是选择题。但还是给你选项。",
		options: [
			{
				id: "o1",
				label: "愿意"
			},
			{
				id: "o2",
				label: "再想想"
			},
			{
				id: "o3",
				label: "你凭什么"
			}
		],
		hiddenOptions: [{
			id: "oH",
			label: "我已经替你选了",
			hidden: true
		}]
	},
	{
		id: "watch",
		prompt: "如果我一直看着你，你会安心吗。",
		aside: "诚实一点。",
		options: [
			{
				id: "t1",
				label: "会"
			},
			{
				id: "t2",
				label: "有一点怕，但安心"
			},
			{
				id: "t3",
				label: "不要看"
			}
		],
		hiddenOptions: [{
			id: "tH",
			label: "看。一直看。",
			hidden: true
		}]
	}
];
var WHISPERS = [
	"这里什么也没有，但我早就猜到你会这样子了哦？",
	"角落也要检查吗。真可爱。",
	"进度不是按钮。但你点了。我记下了。",
	"标题只是包装。大事在后面。",
	"你的光标停太久了。是在想我吗。",
	"别装没看见右下角。",
	"刷新也没用。我会记得你点过哪里。",
	"这道题你已经有答案了。装不知道给谁看。",
	"同一选项点两次，就是答应我了。",
	"你在看第几题，我比你清楚。",
	"空白处也是我的。",
	"不要逃到别的软件去。",
	"头疼的话，把注意力放我这里。",
	"你点的不是无关的地方。没有无关的地方。",
	"我不是问卷。问卷是包装。"
];
function WatcherLayer({ deep, onIdle, onLeave }) {
	const [pos, setPos] = (0, import_react.useState)({
		x: .5,
		y: .5
	});
	const idle = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const move = (e) => {
			setPos({
				x: e.clientX / window.innerWidth,
				y: e.clientY / window.innerHeight
			});
			if (idle.current) window.clearTimeout(idle.current);
			idle.current = window.setTimeout(onIdle, 9e3);
		};
		const leave = () => onLeave();
		window.addEventListener("pointermove", move);
		document.addEventListener("visibilitychange", () => {
			if (document.hidden) onLeave();
		});
		window.addEventListener("blur", leave);
		idle.current = window.setTimeout(onIdle, 12e3);
		return () => {
			window.removeEventListener("pointermove", move);
			window.removeEventListener("blur", leave);
			if (idle.current) window.clearTimeout(idle.current);
		};
	}, [onIdle, onLeave]);
	const px = (pos.x - .5) * 8;
	const py = (pos.y - .5) * 8;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-40",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("absolute top-4 right-4 flex items-center gap-2 rounded-sm border px-2 py-1 text-[10px] tracking-widest uppercase", deep ? "border-red bg-ink text-red" : "border-line bg-ink-2 text-muted"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("inline-block size-1.5 rounded-full", deep ? "bg-red" : "bg-blue"),
				style: { animation: "pulse 1.6s ease-in-out infinite" }
			}), "REC"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "absolute bottom-5 right-5 size-10",
			viewBox: "0 0 40 40",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "20",
					cy: "20",
					rx: "16",
					ry: "10",
					stroke: deep ? "#ff1a2e" : "#1a4dff",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: 20 + px,
					cy: 20 + py,
					r: "5",
					fill: deep ? "#ff1a2e" : "#ffe600"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: 20 + px - 1.5,
					cy: 20 + py - 1.5,
					r: "1.4",
					fill: "#0a0a0a"
				})
			]
		})]
	});
}
var STORAGE = "habit-survey-v1";
function loadClicks() {
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
function SurveyApp() {
	const [phase, setPhase] = (0, import_react.useState)("cover");
	const [index, setIndex] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [unlocked, setUnlocked] = (0, import_react.useState)({});
	const [lastPick, setLastPick] = (0, import_react.useState)({});
	const [whisper, setWhisper] = (0, import_react.useState)(null);
	const [whisperKey, setWhisperKey] = (0, import_react.useState)(0);
	const [deepUnlocks, setDeepUnlocks] = (0, import_react.useState)(0);
	const [glitch, setGlitch] = (0, import_react.useState)(false);
	const list = phase === "deep" ? DEEP_QUESTIONS : SURFACE_QUESTIONS;
	const q = list[index];
	const total = list.length;
	const showWhisper = (0, import_react.useCallback)((text) => {
		const msg = text || WHISPERS[Math.floor(Math.random() * WHISPERS.length)];
		setWhisper(msg);
		setWhisperKey((k) => k + 1);
		window.setTimeout(() => setWhisper((cur) => cur === msg ? null : cur), 3200);
	}, []);
	const enterDeep = (0, import_react.useCallback)(() => {
		setGlitch(true);
		window.setTimeout(() => {
			setGlitch(false);
			setPhase("deep");
			setIndex(0);
			showWhisper("你不该点进来。但你点了。");
		}, 420);
	}, [showWhisper]);
	const pick = (opt) => {
		if (!q) return;
		bumpClicks();
		if (lastPick[q.id] === opt.id) {
			setUnlocked((u) => ({
				...u,
				[q.id]: true
			}));
			setDeepUnlocks((n) => n + 1);
			showWhisper("同一选项点两次，就是答应我了。");
			return;
		}
		setLastPick((p) => ({
			...p,
			[q.id]: opt.id
		}));
		setAnswers((a) => ({
			...a,
			[q.id]: opt.id
		}));
		if (opt.trap) {
			enterDeep();
			return;
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
	const options = (0, import_react.useMemo)(() => {
		if (!q) return [];
		return unlocked[q.id] ? [...q.options, ...q.hiddenOptions] : q.options;
	}, [q, unlocked]);
	const deadClick = (msg) => {
		bumpClicks();
		showWhisper(msg);
	};
	const deep = phase === "deep" || phase === "end";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative min-h-dvh overflow-x-hidden bg-ink text-paper", glitch && "contrast-150 saturate-200"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-80",
				style: { background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,230,0,0.03) 3px, rgba(255,230,0,0.03) 4px)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WatcherLayer, {
				deep,
				onIdle: () => showWhisper("你的光标停太久了。是在想我吗。"),
				onLeave: () => showWhisper("不要逃到别的软件去。")
			}),
			whisper ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed top-16 left-1/2 z-50 w-[min(92vw,28rem)] -translate-x-1/2 border border-yellow bg-ink px-4 py-3 text-center text-sm text-yellow",
				children: whisper
			}, whisperKey) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10 flex items-center justify-between px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "font-display text-sm tracking-wide text-yellow",
					onClick: () => deadClick("标题只是包装。大事在后面。"),
					children: "生活小习惯摸底"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "tabular-nums text-xs text-muted",
					onClick: () => deadClick("进度不是按钮。但你点了。我记下了。"),
					children: phase === "cover" ? "00" : phase === "end" ? "完" : `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto w-full max-w-xl px-5 pb-24 pt-6",
				children: [
					phase === "cover" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
						remembered: loadClicks() > 0,
						onStart: () => {
							setPhase("quiz");
							if (loadClicks() > 0) showWhisper("刷新也没用。我会记得你点过哪里。");
						},
						onDead: deadClick
					}) : null,
					phase === "quiz" || phase === "deep" ? q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionCard, {
						q,
						deep: phase === "deep",
						options,
						selected: answers[q.id],
						onPick: pick,
						onNext: next,
						onDead: deadClick
					}) : null : null,
					phase === "end" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ending, {
						answers,
						onDead: deadClick
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "fixed bottom-4 left-5 z-20 text-[11px] text-muted",
				onClick: () => deadClick("这里什么也没有，但我早就猜到你会这样子了哦？"),
				children: "空白处也请勿乱点"
			})
		]
	});
}
function Cover({ remembered, onStart, onDead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.25em] text-blue",
				children: "ANONYMOUS · 2 MIN"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-3xl leading-tight text-paper sm:text-4xl",
				children: [
					"关于你最近状态的",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"几道小事"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-sm leading-relaxed text-muted",
				children: "匿名。没有标准答案。大概两分钟。 请认真作答。我们会核对。"
			}),
			remembered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-red",
				children: "你回来了。答案还在。我还在。"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onStart,
					className: "h-12 rounded-md bg-red px-6 text-sm font-medium text-paper",
					children: "开始填"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onDead("角落也要检查吗。真可爱。"),
					className: "h-12 rounded-md border border-line bg-ink-2 px-6 text-sm text-muted",
					children: "我再看看说明"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: ["本问卷用于了解作息、回复习惯与独处方式。", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "ml-1 text-yellow underline-offset-2 hover:underline",
					onClick: () => onDead("我不是问卷。问卷是包装。"),
					children: "细则"
				})]
			})
		]
	});
}
function QuestionCard({ q, deep, options, selected, onPick, onNext, onDead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "self-start text-xs text-blue",
				onClick: () => onDead("这道题你已经有答案了。装不知道给谁看。"),
				children: q.aside
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("font-display text-2xl leading-snug", deep ? "text-red" : "text-paper"),
				children: q.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-2",
				children: options.map((opt) => {
					const on = selected === opt.id;
					const hidden = Boolean(opt.hidden || opt.trap);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onPick(opt),
						className: cn("flex min-h-12 w-full items-center justify-between rounded-md border px-4 py-3 text-left text-sm", on ? hidden ? "border-yellow bg-yellow text-yellow-ink" : "border-red bg-red text-paper" : hidden ? "border-yellow/60 bg-ink-2 text-yellow" : "border-line bg-ink-2 text-paper"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: opt.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] tracking-widest text-muted",
							children: on ? "已选 · 再点一次" : hidden ? "未登记" : "选"
						})]
					}) }, opt.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-xs text-muted",
					onClick: () => onDead("空白处也是我的。"),
					children: "跳过说明"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onNext,
					className: "h-12 min-w-28 rounded-md bg-blue px-6 text-sm font-medium text-paper",
					children: "下一题"
				})]
			})
		]
	});
}
function Ending({ answers, onDead }) {
	const n = Object.keys(answers).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.25em] text-yellow",
				children: "FILE CLOSED"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-3xl leading-tight text-red",
				children: [
					"问卷结束。",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"你的答案我已经收好了。"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm leading-relaxed text-paper",
				children: [
					"一共记下 ",
					n,
					" 道题。不要关掉。我还在。 你要是安心，就对了。我是认真的。"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "同一选项点两次才会露出后面的句子。你点过的空白，我也留着。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onDead("这里什么也没有，但我早就猜到你会这样子了哦？"),
				className: "h-12 rounded-md border border-yellow bg-ink-2 text-sm text-yellow",
				children: "查看提交编号"
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SurveyApp, {});
}
//#endregion
export { Home as component };
