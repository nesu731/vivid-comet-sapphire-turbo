let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let droneOsc: OscillatorNode | null = null;
let droneOsc2: OscillatorNode | null = null;
let droneGain: GainNode | null = null;
let muted = false;

function ensure() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.14;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

export function unlockAudio() {
  ensure();
}

export function isMuted() {
  return muted;
}

export function setMuted(next: boolean) {
  muted = next;
  if (master && ctx) {
    master.gain.setTargetAtTime(next ? 0 : 0.14, ctx.currentTime, 0.05);
  }
}

export function startDrone() {
  const c = ensure();
  if (!c || !master || droneOsc) return;
  droneGain = c.createGain();
  droneGain.gain.value = 0.22;
  droneGain.connect(master);
  droneOsc = c.createOscillator();
  droneOsc.type = "sine";
  droneOsc.frequency.value = 55;
  droneOsc.connect(droneGain);
  droneOsc2 = c.createOscillator();
  droneOsc2.type = "triangle";
  droneOsc2.frequency.value = 82.5;
  const g2 = c.createGain();
  g2.gain.value = 0.08;
  droneOsc2.connect(g2);
  g2.connect(droneGain);
  droneOsc.start();
  droneOsc2.start();
}

export function playTick() {
  const c = ensure();
  if (!c || !master || muted) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "square";
  o.frequency.value = 880;
  g.gain.value = 0.04;
  o.connect(g);
  g.connect(master);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.06);
  o.stop(c.currentTime + 0.07);
}

export function playUnlock() {
  const c = ensure();
  if (!c || !master || muted) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "sawtooth";
  o.frequency.setValueAtTime(220, c.currentTime);
  o.frequency.exponentialRampToValueAtTime(660, c.currentTime + 0.18);
  g.gain.value = 0.07;
  o.connect(g);
  g.connect(master);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.28);
  o.stop(c.currentTime + 0.3);
}

export function playHeart() {
  const c = ensure();
  if (!c || !master || muted) return;
  const thump = (t: number, f: number) => {
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(f, t);
    o.frequency.exponentialRampToValueAtTime(40, t + 0.12);
    g.gain.setValueAtTime(0.16, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
    o.connect(g);
    g.connect(master!);
    o.start(t);
    o.stop(t + 0.15);
  };
  thump(c.currentTime, 90);
  thump(c.currentTime + 0.16, 70);
}

export function playGlitch() {
  const c = ensure();
  if (!c || !master || muted) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "square";
  o.frequency.setValueAtTime(140, c.currentTime);
  o.frequency.exponentialRampToValueAtTime(40, c.currentTime + 0.2);
  g.gain.value = 0.05;
  o.connect(g);
  g.connect(master);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.22);
  o.stop(c.currentTime + 0.24);
}

export function buzz(pattern: number | number[] = 24) {
  try {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  } catch {
    /* ignore */
  }
}
