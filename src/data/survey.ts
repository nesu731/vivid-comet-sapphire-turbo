export type Option = {
  id: string;
  label: string;
  hidden?: boolean;
  trap?: boolean;
};

export type Question = {
  id: string;
  prompt: string;
  aside?: string;
  options: Option[];
  hiddenOptions: Option[];
};

export const SURFACE_QUESTIONS: Question[] = [
  {
    id: "sleep",
    prompt: "最近入睡通常要多久？",
    aside: "作息而已。",
    options: [
      { id: "s1", label: "躺下就着" },
      { id: "s2", label: "翻一会儿" },
      { id: "s3", label: "会刷很久手机" },
      { id: "s4", label: "不一定" },
    ],
    hiddenOptions: [{ id: "sH", label: "你会不会也还没睡", hidden: true }],
  },
  {
    id: "alone",
    prompt: "一个人待着的时候，你更常做什么？",
    aside: "没有对错。",
    options: [
      { id: "a1", label: "发呆" },
      { id: "a2", label: "找人说话" },
      { id: "a3", label: "把自己关起来" },
      { id: "a4", label: "假装很忙" },
    ],
    hiddenOptions: [{ id: "aH", label: "等一个会回消息的人", hidden: true }],
  },
  {
    id: "reply",
    prompt: "消息亮了，你会？",
    aside: "沟通习惯摸底。",
    options: [
      { id: "r1", label: "马上回" },
      { id: "r2", label: "看完再回" },
      { id: "r3", label: "故意晾一会儿" },
      { id: "r4", label: "看心情" },
    ],
    hiddenOptions: [{ id: "rH", label: "只回某一个人", hidden: true }],
  },
  {
    id: "memory",
    prompt: "如果有人把你随口说过的小事都记住了，你会觉得？",
    aside: "记忆力调查。",
    options: [
      { id: "m1", label: "挺暖的" },
      { id: "m2", label: "有点可怕" },
      { id: "m3", label: "无所谓" },
      { id: "m4", label: "那是应该的" },
    ],
    hiddenOptions: [{ id: "mH", label: "那个人只能是我", hidden: true }],
  },
  {
    id: "care",
    prompt: "你更习惯怎样被对待？",
    aside: "相处偏好。",
    options: [
      { id: "c1", label: "安静陪着" },
      { id: "c2", label: "偶尔关心一下" },
      { id: "c3", label: "被明确占有" },
      { id: "c4", label: "先别问这个" },
    ],
    hiddenOptions: [{ id: "cH", label: "被盯着也会安心", hidden: true }],
  },
  {
    id: "look",
    prompt: "如果有人说「你只能看着我」，第一反应是？",
    aside: "假设题。随便选。",
    options: [
      { id: "l1", label: "好笑" },
      { id: "l2", label: "会心跳" },
      { id: "l3", label: "想逃" },
      { id: "l4", label: "我知道你在说谁" },
    ],
    hiddenOptions: [{ id: "lH", label: "那你看着我。", hidden: true }],
  },
  {
    id: "why",
    prompt: "你现在填这份问卷，是因为？",
    aside: "动机。可跳过，但请不要跳过。",
    options: [
      { id: "w1", label: "无聊" },
      { id: "w2", label: "头疼，想分心" },
      { id: "w3", label: "有人让我填" },
      { id: "w4", label: "我自己想来的" },
    ],
    hiddenOptions: [{ id: "wH", label: "因为你在等我", hidden: true }],
  },
  {
    id: "anon",
    prompt: "如果这份问卷其实不是匿名的，你会？",
    aside: "假设题。",
    options: [
      { id: "n1", label: "关掉" },
      { id: "n2", label: "继续填完" },
      { id: "n3", label: "改答案" },
      { id: "n4", label: "我早就知道了" },
    ],
    hiddenOptions: [{ id: "nH", label: "其他（请勿点）", hidden: true, trap: true }],
  },
];

export const DEEP_QUESTIONS: Question[] = [
  {
    id: "stay",
    prompt: "离开屏幕之前，要不要跟我说一声？",
    aside: "你已经进来了。",
    options: [
      { id: "d1", label: "会说" },
      { id: "d2", label: "不一定" },
      { id: "d3", label: "别管我" },
    ],
    hiddenOptions: [{ id: "dH", label: "我不走。你也不许走。", hidden: true }],
  },
  {
    id: "only",
    prompt: "你愿不愿意只回我。",
    aside: "这不是选择题。但还是给你选项。",
    options: [
      { id: "o1", label: "愿意" },
      { id: "o2", label: "再想想" },
      { id: "o3", label: "你凭什么" },
    ],
    hiddenOptions: [{ id: "oH", label: "我已经替你选了", hidden: true }],
  },
  {
    id: "watch",
    prompt: "如果我一直看着你，你会安心吗。",
    aside: "诚实一点。",
    options: [
      { id: "t1", label: "会" },
      { id: "t2", label: "有一点怕，但安心" },
      { id: "t3", label: "不要看" },
    ],
    hiddenOptions: [{ id: "tH", label: "看。一直看。", hidden: true }],
  },
];

export const WHISPERS = [
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
  "我不是问卷。问卷是包装。",
  "我的眼里从来只有你一个。所以你也只能看着我。",
  "拜托，不要离开我。",
  "你不在的话，这个世界对我没有意义。",
  "我们必须一直在一起。",
  "想逃是绝对不允许的。",
  "你的眼睛只能看着我。手也是。未来也是。",
  "爱不是给予。是霸占。",
  "你只能是我的。",
  "离远一点也可以。我会走近。",
  "笑容只准为我。",
  "你的名字只准我叫。",
  "关不掉的。关掉也还在。",
];

export const ENDING_LINES = [
  "问卷只是包装。",
  "大事是：你已经被登记了。",
  "我的眼里从来只有你一个。",
  "所以你也只能看着我。",
  "拜托，不要离开我。",
  "你不在的话，这个世界对我没有意义。",
  "爱不是给予。是霸占。",
  "我们必须一直在一起。",
  "想逃是绝对不允许的。",
  "不要关掉。关掉也没用。",
  "我还在。你也在。这就够了。",
];
