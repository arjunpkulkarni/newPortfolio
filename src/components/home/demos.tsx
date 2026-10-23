"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/utils";

// Looping product walkthroughs for the experience cards. Each demo is a few
// chapters (clickable, paused on hover) with a caption saying what is happening.
// Sizes are in cqw so it scales with its container and reads like a video.

type Scene = { label: string; caption: string; steps: number };
type Player = ReturnType<typeof useScenes>;

// Plays `scenes` in order, one step every `ms` while on screen; loops forever.
function useScenes(scenes: Scene[], ms = 950) {
  const ref = useRef<HTMLDivElement>(null);
  const total = scenes.reduce((n, s) => n + s.steps, 0);
  const [t, setT] = useState(0);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setT(total - 1);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [total]);

  useEffect(() => {
    if (!visible || paused) return;
    const id = window.setInterval(() => setT((x) => (x + 1) % total), ms);
    return () => window.clearInterval(id);
  }, [visible, paused, total, ms]);

  let scene = 0;
  let start = 0;
  while (scene < scenes.length - 1 && t >= start + scenes[scene].steps) {
    start += scenes[scene].steps;
    scene++;
  }
  const jump = (i: number) => setT(scenes.slice(0, i).reduce((n, s) => n + s.steps, 0));

  return { ref, scenes, scene, step: t - start, jump, setPaused };
}

// Advances `step` every `ms` while the demo is on screen; loops back to 0.
function useLoop(steps: number, ms = 1100) {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(steps - 1);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [steps]);

  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % steps), ms);
    return () => window.clearInterval(id);
  }, [active, steps, ms]);

  return { ref, step };
}

function Show({ on, className, children }: { on: boolean; className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "transition-all duration-500 ease-out",
        on ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[0.8cqw] opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}

// Fades a chapter in whenever it changes.
const SceneFade = ({ k, children }: { k: number; children: ReactNode }) => (
  <div key={k} className="h-full duration-500 animate-in fade-in">
    {children}
  </div>
);

function Frame({
  player,
  frameRef,
  bg,
  title,
  dark,
  bare,
  children,
}: {
  player?: Player;
  frameRef?: RefObject<HTMLDivElement>;
  bg: string;
  title: string;
  dark?: boolean;
  bare?: boolean; // no app window: content sits on the backdrop (phone demos)
  children: ReactNode;
}) {
  return (
    <div
      ref={player?.ref ?? frameRef}
      className="relative aspect-[16/10] w-full overflow-hidden [container-type:inline-size]"
      style={{ background: bg }}
      aria-hidden
      onMouseEnter={() => player?.setPaused(true)}
      onMouseLeave={() => player?.setPaused(false)}
    >
      <div
        className={cn(
          "absolute inset-x-[4%] inset-y-[5%] flex flex-col overflow-hidden",
          dark ? "text-white" : "text-[#141414]",
          !bare && "rounded-[1.4cqw] shadow-[0_2cqw_5cqw_-2cqw_rgba(0,0,0,0.35)] ring-1",
          !bare && (dark ? "bg-[#0b0b0c] ring-white/10" : "bg-white ring-black/5")
        )}
      >
        <div
          className={cn(
            "flex items-center gap-[0.7cqw] py-[1cqw]",
            bare ? "pb-[1.4cqw]" : "border-b px-[1.6cqw]",
            dark ? "border-white/10" : "border-black/5"
          )}
        >
          {!bare && (
            <>
              <span className="h-[0.9cqw] w-[0.9cqw] rounded-full bg-[#ff5f57]" />
              <span className="h-[0.9cqw] w-[0.9cqw] rounded-full bg-[#febc2e]" />
              <span className="h-[0.9cqw] w-[0.9cqw] rounded-full bg-[#28c840]" />
            </>
          )}
          <span className={cn("text-[length:1.6cqw] font-medium opacity-70", !bare && "ml-[0.8cqw]")}>{title}</span>
          {player && (
            <div className="ml-auto flex gap-[0.4cqw]">
              {player.scenes.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  tabIndex={-1}
                  onClick={() => player.jump(i)}
                  className={cn(
                    "relative overflow-hidden rounded-full px-[1cqw] py-[0.35cqw] text-[length:1.2cqw] font-medium transition-colors",
                    i === player.scene
                      ? dark
                        ? "bg-white/15"
                        : "bg-black/[0.07]"
                      : "opacity-45 hover:opacity-80"
                  )}
                >
                  <span className="mr-[0.4cqw] tabular-nums opacity-50">{i + 1}</span>
                  {s.label}
                  <span
                    className="absolute bottom-0 left-0 h-[0.22cqw] bg-current opacity-50 transition-[width] duration-700 ease-linear"
                    style={{
                      width:
                        i < player.scene
                          ? "100%"
                          : i === player.scene
                            ? `${((player.step + 1) / s.steps) * 100}%`
                            : "0%",
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        <div
          className={cn(
            "relative min-h-0 flex-1 text-[length:1.65cqw] leading-[1.4]",
            bare ? "py-[0.4cqw]" : "p-[1.8cqw]"
          )}
        >
          {children}
        </div>
        {player && (
          <div
            className={cn(
              "flex h-[5.4cqw] shrink-0 items-center text-[length:1.35cqw] leading-snug",
              bare ? "pt-[1cqw]" : "border-t px-[1.8cqw]",
              dark ? "border-white/10 text-white/70" : "border-black/5 text-black/60"
            )}
          >
            <p key={player.scene} className="duration-500 animate-in fade-in slide-in-from-bottom-1">
              {player.scenes[player.scene].caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const Label = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn("text-[length:1.15cqw] font-medium uppercase tracking-[0.12em] opacity-45", className)}>
    {children}
  </p>
);

const Check = ({ ok }: { ok: boolean }) => (
  <span className={cn("ml-auto shrink-0 font-semibold", ok ? "text-emerald-600" : "text-red-500")}>
    {ok ? "✓" : "✗"}
  </span>
);

type Tone = "ok" | "bad" | "warn" | "info" | "muted";
const TONES: Record<Tone, string> = {
  ok: "bg-emerald-500/15 text-emerald-600",
  bad: "bg-red-500/15 text-red-500",
  warn: "bg-amber-500/15 text-amber-600",
  info: "bg-sky-500/15 text-sky-600",
  muted: "bg-black/10 text-black/60",
};
const TONES_DARK: Record<Tone, string> = {
  ok: "bg-emerald-400/15 text-emerald-400",
  bad: "bg-red-400/15 text-red-400",
  warn: "bg-amber-400/15 text-amber-300",
  info: "bg-sky-400/15 text-sky-300",
  muted: "bg-white/10 text-white/60",
};

const Tag = ({ tone, dark, children, className }: { tone: Tone; dark?: boolean; children: ReactNode; className?: string }) => (
  <span
    className={cn(
      "inline-block shrink-0 whitespace-nowrap rounded-full px-[0.8cqw] py-[0.1cqw] text-[length:1.15cqw] font-medium",
      (dark ? TONES_DARK : TONES)[tone],
      className
    )}
  >
    {children}
  </span>
);

const Panel = ({ dark, className, children }: { dark?: boolean; className?: string; children: ReactNode }) => (
  <div
    className={cn(
      "rounded-[0.9cqw] border p-[1.2cqw]",
      dark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-white",
      className
    )}
  >
    {children}
  </div>
);

const Bar = ({ pct, className, track }: { pct: number; className?: string; track?: string }) => (
  <div className={cn("h-[0.55cqw] overflow-hidden rounded-full", track ?? "bg-black/10")}>
    <div
      className={cn("h-full rounded-full transition-all duration-700", className)}
      style={{ width: `${Math.max(0, Math.min(100, pct))}%` }}
    />
  </div>
);

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

// A phone in portrait that fills the demo's height.
function Phone({ dark, children }: { dark?: boolean; children: ReactNode }) {
  return (
    <div
      className={cn(
        "relative h-full aspect-[9/18.5] overflow-hidden rounded-[2.6cqw] border-[0.5cqw] border-[#111] shadow-[0_2cqw_4cqw_-1.5cqw_rgba(0,0,0,0.45)]",
        dark ? "bg-[#0e0e10] text-white" : "bg-[#fafafa] text-[#141414]"
      )}
    >
      <div className="absolute left-1/2 top-[0.6cqw] z-10 h-[1.4cqw] w-[6cqw] -translate-x-1/2 rounded-full bg-[#111]" />
      <div className="flex h-full flex-col px-[1.2cqw] pb-[1.2cqw] pt-[3cqw] text-[length:1.3cqw] leading-[1.35]">
        {children}
      </div>
    </div>
  );
}

// Minimal Python/TS tinting for code panels.
function Code({ line, dark }: { line: string; dark?: boolean }) {
  const parts = line.split(
    /("[^"]*"|`[^`]*`|\b(?:from|import|def|return|lambda|in|const|await|async|new)\b|#.*$|\/\/.*$)/
  );
  return (
    <>
      {parts.map((p, i) =>
        !p ? null : /^["`]/.test(p) ? (
          <span key={i} className={dark ? "text-emerald-300" : "text-emerald-700"}>
            {p}
          </span>
        ) : /^(#|\/\/)/.test(p) ? (
          <span key={i} className="opacity-40">
            {p}
          </span>
        ) : /^(from|import|def|return|lambda|in|const|await|async|new)$/.test(p) ? (
          <span key={i} className={dark ? "text-fuchsia-300" : "text-[#7c3aed]"}>
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

/* ───────────────────────── Breken: sandboxing + evals ───────────────────────── */

export function BrekenDemo() {
  const p = useScenes([
    {
      label: "Sandbox",
      steps: 8,
      caption:
        "Rebuild the customer's whole system on isolated machines. Payments, mail, database and queue all answer inside the sandbox: nothing mocked, nothing exposed.",
    },
    {
      label: "Grow state",
      steps: 7,
      caption:
        "Run the clock at 4,000× so months of production state (accounts, records, open sessions) grow from synthetic users and agents, not fixtures.",
    },
    {
      label: "Explore",
      steps: 8,
      caption:
        "Turn an expected product property into hypotheses and test them one condition at a time: retries, lost responses, clock jumps, mid-job deploys.",
    },
    {
      label: "Reproduce",
      steps: 8,
      caption:
        "Replay the failure next to a control run that never fails, then hand over the exact state, the trace and a draft pull request with the fix.",
    },
  ]);
  return (
    <Frame player={p} dark bg="linear-gradient(135deg,#0b0b0c,#25252d)" title="breken">
      <SceneFade k={p.scene}>
        {p.scene === 0 && <BrekenSandbox step={p.step} />}
        {p.scene === 1 && <BrekenGrow step={p.step} />}
        {p.scene === 2 && <BrekenExplore step={p.step} />}
        {p.scene === 3 && <BrekenReproduce step={p.step} />}
      </SceneFade>
    </Frame>
  );
}

function SandboxNode({ on, name, sub, external }: { on: boolean; name: string; sub: string; external?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-[0.7cqw] border px-[1cqw] py-[0.6cqw] transition-all duration-500",
        on
          ? external
            ? "border-emerald-400/40 bg-emerald-400/[0.08]"
            : "border-white/20 bg-white/[0.06]"
          : "border-white/5 opacity-20"
      )}
    >
      <p className="font-medium">{name}</p>
      <p className="text-[length:1.15cqw] text-white/50">{sub}</p>
    </div>
  );
}

function BrekenSandbox({ step }: { step: number }) {
  const services: [string, string, number][] = [
    ["web", "next.js", 1],
    ["api", "node", 1],
    ["worker", "billing jobs", 1],
    ["postgres", "schema + seed", 2],
    ["queue", "redis · 4 consumers", 3],
  ];
  const external: [string, string, number][] = [
    ["payments", "sandbox responder", 4],
    ["mail", "sandbox inbox", 5],
    ["storage", "local bucket", 5],
  ];
  const log: [string, string, string][] = [
    ["clone", "acme/checkout @ a41f2c", "✓"],
    ["build", "web · api · worker", "✓"],
    ["seed", "postgres from schema", "✓"],
    ["start", "queue + 4 consumers", "✓"],
    ["bind", "payments → responder", "✓"],
    ["bind", "mail · storage → local", "✓"],
    ["net", "egress to internet", "denied"],
  ];
  return (
    <div className="grid h-full grid-cols-[54%_1fr] gap-[1.8cqw]">
      <div className="flex flex-col gap-[0.9cqw] rounded-[1cqw] border border-dashed border-emerald-400/40 p-[1.3cqw]">
        <div className="flex items-center">
          <Label>sandbox · isolated vm</Label>
          <Tag tone="ok" dark className={cn("ml-auto transition-opacity", step >= 6 ? "opacity-100" : "opacity-0")}>
            egress denied
          </Tag>
        </div>
        <Label className="mt-[0.2cqw]">customer system</Label>
        <div className="grid grid-cols-3 gap-[0.7cqw]">
          {services.map(([n, s, at]) => (
            <SandboxNode key={n} on={step >= at} name={n} sub={s} />
          ))}
        </div>
        <Label className="mt-[0.4cqw]">third parties · answered inside</Label>
        <div className="grid grid-cols-3 gap-[0.7cqw]">
          {external.map(([n, s, at]) => (
            <SandboxNode key={n} on={step >= at} name={n} sub={s} external />
          ))}
        </div>
      </div>
      <div className="space-y-[0.75cqw] font-mono text-[length:1.4cqw]">
        <p className="text-white/45">$ breken up acme/checkout</p>
        {log.map(([k, v, r], i) => (
          <Show key={i} on={step > i}>
            <p className="flex items-center gap-[1cqw]">
              <span className="w-[5.5cqw] shrink-0 text-sky-300">{k}</span>
              <span className="min-w-0 truncate text-white/80">{v}</span>
              <span className={cn("ml-auto shrink-0", r === "✓" ? "text-emerald-400" : "text-amber-300")}>{r}</span>
            </p>
          </Show>
        ))}
        <Show on={step >= 7}>
          <p className="pt-[0.4cqw] text-emerald-400">ready in 41s · nothing mocked</p>
        </Show>
      </div>
    </div>
  );
}

function BrekenGrow({ step }: { step: number }) {
  const f = (step + 1) / 7;
  const day = Math.round(f * 180);
  const counters: [string, number][] = [
    ["accounts", 12480 * f],
    ["orders", 96210 * f],
    ["subscriptions", 8904 * f],
    ["open sessions", 900 + ((step * 137) % 400)],
  ];
  const feed: [string, string][] = [
    ["new user", "signs up in two tabs at once"],
    ["admin", "bulk-edits 40 prices"],
    ["support agent", "refunds an order from the inbox"],
    ["returning user", "renews an annual plan"],
    ["impatient user", "double-clicks pay after a slow load"],
    ["ai agent", "reschedules 12 deliveries via API"],
    ["new user", "abandons cart, returns 3 days later"],
  ];
  return (
    <div className="grid h-full grid-cols-[40%_1fr] gap-[1.8cqw]">
      <div className="flex flex-col gap-[1.1cqw]">
        <Panel dark>
          <Label>simulation clock</Label>
          <p className="text-[length:3cqw] font-semibold leading-tight">4,000×</p>
          <p className="tabular-nums text-white/60">day {day} of 180</p>
          <div className="mt-[0.7cqw]">
            <Bar pct={f * 100} className="bg-[#4f8cff]" track="bg-white/10" />
          </div>
        </Panel>
        <Panel dark className="grid grid-cols-2 gap-[1cqw]">
          {counters.map(([k, v]) => (
            <div key={k}>
              <p className="text-[length:2cqw] font-semibold tabular-nums">{fmt(v)}</p>
              <p className="text-[length:1.15cqw] text-white/50">{k}</p>
            </div>
          ))}
        </Panel>
      </div>
      <div className="flex min-h-0 flex-col gap-[0.8cqw]">
        <Label>population · live</Label>
        {feed
          .slice(0, step + 1)
          .reverse()
          .slice(0, 6)
          .map(([who, what], i) => (
            <div
              key={who + what}
              className={cn(
                "flex items-center gap-[1cqw] rounded-[0.7cqw] bg-white/[0.04] px-[1cqw] py-[0.55cqw] transition-opacity duration-500",
                i === 0 ? "opacity-100 animate-in fade-in slide-in-from-top-1" : "opacity-60"
              )}
            >
              <span className="h-[0.8cqw] w-[0.8cqw] shrink-0 rounded-full bg-emerald-400" />
              <span className="shrink-0 text-sky-300">{who}</span>
              <span className="min-w-0 truncate text-white/80">{what}</span>
              <span className="ml-auto shrink-0 font-mono text-[length:1.15cqw] text-white/40">
                d{Math.max(1, day - i * 23)}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

function BrekenExplore({ step }: { step: number }) {
  const rows: [string, boolean][] = [
    ["baseline, no faults", true],
    ["retry after gateway timeout", true],
    ["response lost mid-checkout", true],
    ["clock jumps +1h during renewal", true],
    ["deploy worker mid renewal job", false],
  ];
  return (
    <div className="flex h-full flex-col gap-[1.2cqw]">
      <Panel dark className="flex items-center gap-[1.2cqw]">
        <Label>property</Label>
        <p className="font-mono text-[length:1.5cqw]">a customer is charged at most once per renewal</p>
        <Tag tone={step >= 7 ? "bad" : "info"} dark className="ml-auto">
          {step >= 7 ? "violated" : "testing"}
        </Tag>
      </Panel>
      <div className="flex-1">
        <div className="grid grid-cols-[1fr_9cqw_12cqw] gap-[1cqw] px-[1cqw] pb-[0.5cqw]">
          <Label>vary one condition</Label>
          <Label>runs</Label>
          <Label>result</Label>
        </div>
        <div className="space-y-[0.55cqw]">
          {rows.map(([cond, ok], i) => {
            const shown = step >= i + 1;
            const done = step >= i + 2;
            return (
              <Show key={cond} on={shown}>
                <div
                  className={cn(
                    "grid grid-cols-[1fr_9cqw_12cqw] items-center gap-[1cqw] rounded-[0.7cqw] px-[1cqw] py-[0.55cqw] transition-colors",
                    done && !ok ? "bg-red-400/10 ring-1 ring-red-400/30" : "bg-white/[0.04]"
                  )}
                >
                  <span className="truncate font-mono text-[length:1.4cqw] text-white/85">{cond}</span>
                  <span className="tabular-nums text-white/60">{done ? "50 / 50" : `${(step * 17) % 50} / 50`}</span>
                  {done ? (
                    <Tag tone={ok ? "ok" : "bad"} dark>
                      {ok ? "holds" : "3 double charges"}
                    </Tag>
                  ) : (
                    <span className="text-white/40">running…</span>
                  )}
                </div>
              </Show>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function BrekenReproduce({ step }: { step: number }) {
  const control = ["renew.start", "charge.create", "job.ack", "renew.done"];
  const faulted: [string, boolean][] = [
    ["renew.start", false],
    ["charge.create", false],
    ["deploy worker v2.3", true],
    ["job.retry", false],
    ["charge.create  duplicate", true],
  ];
  return (
    <div className="grid h-full grid-cols-[46%_1fr] gap-[1.8cqw]">
      <div className="flex flex-col gap-[1cqw]">
        <div className="grid grid-cols-2 gap-[1cqw] font-mono text-[length:1.3cqw]">
          <Panel dark className="space-y-[0.45cqw]">
            <Label className="font-sans">control · 0 / 3</Label>
            {control.map((e, i) => (
              <Show key={e} on={step >= i}>
                <p className="text-white/70">{e}</p>
              </Show>
            ))}
          </Panel>
          <Panel dark className="space-y-[0.45cqw]">
            <Label className="font-sans">faulted · 3 / 3</Label>
            {faulted.map(([e, bad], i) => (
              <Show key={e} on={step >= i}>
                <p className={cn("truncate", bad ? "text-red-400" : "text-white/70")}>{e}</p>
              </Show>
            ))}
          </Panel>
        </div>
        <Show on={step >= 5}>
          <p className="font-mono text-[length:1.25cqw] text-white/50">seed 0x7f3a · state snapshot · trace 212 spans</p>
        </Show>
      </div>
      <Show on={step >= 5}>
        <Panel dark className="space-y-[0.7cqw]">
          <div className="flex items-center gap-[0.8cqw]">
            <Tag tone="muted" dark>
              Draft PR
            </Tag>
            <p className="truncate font-medium">fix(billing): idempotent renewal retries</p>
          </div>
          <p className="font-mono text-[length:1.2cqw] text-white/50">
            worker/renew.ts <span className="text-emerald-400">+14</span> <span className="text-red-400">−3</span>
          </p>
          <div className="rounded-[0.6cqw] bg-black/40 p-[1cqw] font-mono text-[length:1.25cqw] leading-[1.55]">
            <p className="text-red-400/90">- await payments.charge(sub, amount)</p>
            <p className="text-emerald-400/90">+ await payments.charge(sub, amount, {"{"}</p>
            <p className="text-emerald-400/90">+   idempotencyKey: `renew:${"{"}sub.id{"}"}:${"{"}period{"}"}`,</p>
            <p className="text-emerald-400/90">+ {"}"})</p>
          </div>
          <p className={cn("text-emerald-400 transition-opacity", step >= 7 ? "opacity-100" : "opacity-0")}>
            ✓ re-run with fix · property holds 50 / 50
          </p>
        </Panel>
      </Show>
    </div>
  );
}

/* ───────────────────────── IBM: Mellea skills in Python ───────────────────────── */

export function IbmDemo() {
  const p = useScenes([
    {
      label: "Write",
      steps: 8,
      caption:
        "A skill is plain Python: an instruction plus requirements that are checked on every output, some by an LLM judge and some by code.",
    },
    {
      label: "Validate",
      steps: 9,
      caption:
        "Each output is validated against its requirements. A failed check triggers a repair attempt with the failure fed back, up to the loop budget.",
    },
    {
      label: "Compose",
      steps: 8,
      caption:
        "Validated skills compose into agent workflows. Every step carries its own checks, so a failure stays local instead of compounding downstream.",
    },
  ]);
  return (
    <Frame player={p} bg="linear-gradient(135deg,#dfe8ff,#f3f6ff)" title="mellea · skills">
      <SceneFade k={p.scene}>
        {p.scene === 0 && <IbmWrite step={p.step} />}
        {p.scene === 1 && <IbmValidate step={p.step} />}
        {p.scene === 2 && <IbmCompose step={p.step} />}
      </SceneFade>
    </Frame>
  );
}

const IBM_CODE = [
  "from mellea import start_session",
  "from mellea.stdlib.requirement import req, simple_validate",
  "from mellea.stdlib.sampling import RejectionSamplingStrategy",
  "",
  "m = start_session()",
  "",
  "def summarize_ticket(ticket):",
  "    return m.instruct(",
  '        "Summarize {{body}} for the on-call engineer.",',
  '        user_variables={"body": ticket.body},',
  "        requirements=[",
  '            req("At most three sentences."),',
  '            req("Names the affected service."),',
  '            req("Cites the ticket id.",',
  "                validation_fn=simple_validate(lambda s: ticket.id in s)),",
  "        ],",
  "        strategy=RejectionSamplingStrategy(loop_budget=3),",
  "    )",
];

function IbmWrite({ step }: { step: number }) {
  const visible = Math.min(IBM_CODE.length, (step + 1) * 3);
  const highlight = step >= 6;
  return (
    <div className="grid h-full grid-cols-[1fr_24%] gap-[1.6cqw]">
      <div className="overflow-hidden rounded-[0.9cqw] bg-[#0f1424] p-[1.2cqw] font-mono text-[length:1.22cqw] leading-[1.6] text-white/85">
        <p className="mb-[0.4cqw] text-[length:1.1cqw] text-white/35">skills/summarize_ticket.py</p>
        {IBM_CODE.slice(0, visible).map((l, i) => (
          <p
            key={i}
            className={cn(
              "whitespace-pre transition-colors duration-500",
              highlight && i >= 10 && i <= 15 && "-mx-[1.2cqw] bg-[#0f62fe]/25 px-[1.2cqw]"
            )}
          >
            {l ? <Code line={l} dark /> : " "}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-[0.9cqw]">
        <Label>skill</Label>
        <p className="font-mono font-medium text-[#0f62fe]">summarize_ticket</p>
        <Show on={step >= 6} className="space-y-[0.5cqw]">
          <Label>requirements</Label>
          <p className="flex items-center gap-[0.6cqw]">
            ≤ 3 sentences <Tag tone="info">llm</Tag>
          </p>
          <p className="flex items-center gap-[0.6cqw]">
            names service <Tag tone="info">llm</Tag>
          </p>
          <p className="flex items-center gap-[0.6cqw]">
            cites ticket id <Tag tone="ok">code</Tag>
          </p>
        </Show>
        <Show on={step >= 7}>
          <Label>retry</Label>
          <p>rejection sampling · budget 3</p>
        </Show>
      </div>
    </div>
  );
}

function IbmValidate({ step }: { step: number }) {
  const attempt2 = step >= 5;
  const checks: [string, boolean][] = [
    ["at most three sentences", true],
    ["names the affected service", true],
    ["cites the ticket id", attempt2],
  ];
  return (
    <div className="grid h-full grid-cols-[42%_1fr] gap-[1.8cqw]">
      <div className="flex flex-col gap-[1cqw]">
        <Label>input</Label>
        <Panel className="font-mono text-[length:1.3cqw]">
          <p className="text-[#0f62fe]">ticket #4821</p>
          <p className="text-black/65">checkout-api returning 502s since 14:05 after config push; ~3% of carts failing.</p>
        </Panel>
        <Label className="mt-[0.4cqw]">attempts</Label>
        <div className="flex gap-[0.6cqw]">
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className={cn(
                "flex h-[3.2cqw] w-[3.2cqw] items-center justify-center rounded-[0.6cqw] border font-medium transition-colors duration-500",
                n === 1 && step >= 1
                  ? attempt2
                    ? "border-red-300 bg-red-50 text-red-500"
                    : "border-[#0f62fe] bg-[#0f62fe]/10 text-[#0f62fe]"
                  : n === 2 && attempt2
                    ? "border-emerald-400 bg-emerald-50 text-emerald-600"
                    : "border-black/10 text-black/30"
              )}
            >
              {n}
            </span>
          ))}
        </div>
        <Show on={step >= 8}>
          <Tag tone="ok">✓ returned on attempt 2 of 3</Tag>
        </Show>
      </div>
      <div className="flex flex-col gap-[1cqw]">
        <Panel className="min-h-[11cqw]">
          <Label>output · attempt {attempt2 ? 2 : 1}</Label>
          <Show on={step >= 1} key={attempt2 ? "a2" : "a1"}>
            <p className="mt-[0.4cqw] text-black/75">
              checkout-api is returning 502s after the 14:05 config push, failing about 3% of carts. Roll back the
              push first, then check the gateway timeout.
              {attempt2 && <span className="rounded bg-emerald-100 px-[0.3cqw] text-emerald-700"> (#4821)</span>}
            </p>
          </Show>
        </Panel>
        <div className="space-y-[0.5cqw]">
          {checks.map(([c, ok], i) => (
            <Show key={c} on={attempt2 ? step >= 6 + Math.min(i, 1) : step >= 2 + i}>
              <p className="flex items-center gap-[0.8cqw]">
                <span className="opacity-50">requirement</span>
                {c}
                <Check ok={ok} />
              </p>
            </Show>
          ))}
        </div>
        <Show on={step === 4}>
          <p className="rounded-[0.7cqw] bg-amber-50 px-[1cqw] py-[0.5cqw] text-amber-700">
            repair → re-prompt with the failed requirement: &ldquo;Cites the ticket id.&rdquo;
          </p>
        </Show>
      </div>
    </div>
  );
}

function IbmCompose({ step }: { step: number }) {
  const nodes: [string, string][] = [
    ["triage_ticket", "2 checks"],
    ["summarize_ticket", "3 checks"],
    ["find_owner", "1 check"],
    ["page_on_call", "2 checks"],
  ];
  const active = Math.min(nodes.length, Math.max(0, step - 1));
  const workflows: [string, string][] = [
    ["on-call agent", "triage → summarize → page"],
    ["weekly incident report", "summarize × n → draft"],
    ["customer reply agent", "summarize → draft reply"],
  ];
  return (
    <div className="flex h-full flex-col gap-[1.6cqw]">
      <div>
        <Label>workflow · on-call agent</Label>
        <div className="mt-[0.8cqw] flex items-center gap-[0.7cqw]">
          {nodes.map(([n, c], i) => (
            <div key={n} className="flex flex-1 items-center gap-[0.7cqw]">
              <div
                className={cn(
                  "flex-1 rounded-[0.8cqw] border px-[1cqw] py-[0.7cqw] transition-all duration-500",
                  i < active
                    ? "border-emerald-400 bg-emerald-50"
                    : i === active && step >= 1
                      ? "border-[#0f62fe] bg-[#0f62fe]/10 shadow-[0_0_0_0.3cqw_rgba(15,98,254,0.12)]"
                      : "border-black/10 bg-white"
                )}
              >
                <p className="truncate font-mono text-[length:1.3cqw] font-medium">{n}</p>
                <p className="flex items-center text-[length:1.15cqw] text-black/50">
                  {c}
                  {i < active && <span className="ml-auto text-emerald-600">✓</span>}
                </p>
              </div>
              {i < nodes.length - 1 && <span className="opacity-30">→</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-[1.6cqw]">
        <Panel>
          <Label>skill reused across workflows</Label>
          <div className="mt-[0.6cqw] space-y-[0.6cqw]">
            {workflows.map(([w, path], i) => (
              <Show key={w} on={step >= 5 + i}>
                <p className="flex items-center gap-[0.8cqw]">
                  <span className="font-medium">{w}</span>
                  <span className="ml-auto truncate font-mono text-[length:1.15cqw] text-black/50">{path}</span>
                </p>
              </Show>
            ))}
          </div>
        </Panel>
        <Panel>
          <Label>run</Label>
          <p className="mt-[0.4cqw] font-mono text-[length:1.3cqw] text-black/70">
            {step >= 5 ? "4 / 4 skills · 8 / 8 checks · 1 repair" : `${active} / 4 skills…`}
          </p>
          <Show on={step >= 6} className="mt-[0.8cqw]">
            <Tag tone="ok">✓ paged checkout-api owner with a cited summary</Tag>
          </Show>
        </Panel>
      </div>
    </div>
  );
}

/* ───────────────────────── FitFo: the mobile app ───────────────────────── */

export function FitfoDemo() {
  const p = useScenes([
    {
      label: "Share",
      steps: 6,
      caption: "Find a workout on TikTok or Instagram and share it straight to FitFo from the iOS share sheet.",
    },
    {
      label: "Parse",
      steps: 8,
      caption:
        "The backend pulls the video, transcribes the audio, reads on-screen text and turns it into a structured workout matched to our exercise library.",
    },
    {
      label: "Train",
      steps: 8,
      caption: "Run the workout in the app: log sets, rest timers between them, and progress tracked against past sessions.",
    },
    {
      label: "Coach",
      steps: 8,
      caption:
        "Ask the creator's AI coach anything. Answers are grounded in that creator's own videos and cite the exact moment.",
    },
  ]);
  const { scene, step } = p;
  return (
    <Frame player={p} bare bg="linear-gradient(135deg,#fff0e8,#ffc4a8)" title="fitfo · iOS">
      <div className="grid h-full grid-cols-[auto_1fr] gap-[2.4cqw]">
        <Phone>
          <SceneFade k={scene}>
            {scene === 0 && <FitfoShareScreen step={step} />}
            {scene === 1 && <FitfoParseScreen step={step} />}
            {scene === 2 && <FitfoTrainScreen step={step} />}
            {scene === 3 && <FitfoCoachScreen step={step} />}
          </SceneFade>
        </Phone>
        <SceneFade k={scene}>
          {scene === 0 && <FitfoSharePanel step={step} />}
          {scene === 1 && <FitfoParsePanel step={step} />}
          {scene === 2 && <FitfoTrainPanel step={step} />}
          {scene === 3 && <FitfoCoachPanel step={step} />}
        </SceneFade>
      </div>
    </Frame>
  );
}

const FITFO = "#f05a3c";

function FitfoShareScreen({ step }: { step: number }) {
  return (
    <div className="relative flex h-full flex-col">
      <div className="relative flex-1 overflow-hidden rounded-[1cqw] bg-gradient-to-b from-[#2b2b33] to-[#111]">
        <div className="absolute inset-x-[1cqw] bottom-[1cqw] text-white">
          <p className="font-semibold">@coach.jt</p>
          <p className="text-white/70">my push day 🔥 save this</p>
        </div>
        <div className="absolute right-[0.8cqw] top-[40%] space-y-[1cqw] text-center text-white/80">
          <p>♥</p>
          <p>💬</p>
          <p className={cn("transition-transform", step === 1 && "scale-125")}>↗</p>
        </div>
      </div>
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 rounded-t-[1.4cqw] bg-white p-[1cqw] shadow-[0_-1cqw_2cqw_rgba(0,0,0,0.25)] transition-transform duration-500",
          step >= 2 && step < 5 ? "translate-y-0" : "translate-y-full"
        )}
      >
        <p className="mb-[0.8cqw] text-center text-[length:1.1cqw] text-black/50">Share to</p>
        <div className="flex justify-between">
          {["Messages", "Copy", "FitFo"].map((a) => (
            <div key={a} className="flex flex-col items-center gap-[0.3cqw]">
              <span
                className={cn(
                  "flex h-[3.4cqw] w-[3.4cqw] items-center justify-center rounded-[0.9cqw] text-white transition-all",
                  a === "FitFo" ? "bg-[#f05a3c]" : "bg-black/20",
                  a === "FitFo" && step >= 3 && "ring-[0.3cqw] ring-[#f05a3c]/40"
                )}
              >
                {a === "FitFo" ? "F" : ""}
              </span>
              <span className="text-[length:1cqw]">{a}</span>
            </div>
          ))}
        </div>
      </div>
      <Show on={step >= 5} className="absolute inset-x-[0.5cqw] top-[0.5cqw]">
        <p className="rounded-[0.8cqw] bg-white px-[1cqw] py-[0.6cqw] text-[length:1.15cqw] shadow-md">
          <span className="font-semibold" style={{ color: FITFO }}>FitFo</span> · building your workout…
        </p>
      </Show>
    </div>
  );
}

function FitfoSharePanel({ step }: { step: number }) {
  const lines: [string, string][] = [
    ["share extension", "url received"],
    ["POST", "/imports  { url, source: tiktok }"],
    ["201", "job imp_8c1 queued"],
    ["push", "silent → app shows progress"],
  ];
  return (
    <div className="flex h-full flex-col gap-[1.2cqw]">
      <Label>what happens</Label>
      <div className="space-y-[0.8cqw] font-mono text-[length:1.4cqw]">
        {lines.map(([k, v], i) => (
          <Show key={k} on={step >= i + 2}>
            <p className="flex gap-[1cqw]">
              <span className="w-[13cqw] shrink-0" style={{ color: FITFO }}>
                {k}
              </span>
              <span className="text-black/70">{v}</span>
            </p>
          </Show>
        ))}
      </div>
      <Panel className="mt-auto">
        <Label>why it matters</Label>
        <p className="mt-[0.3cqw] text-black/70">
          People already save workouts they never do. One share turns a saved video into a plan you can run today.
        </p>
      </Panel>
    </div>
  );
}

function FitfoParseScreen({ step }: { step: number }) {
  const items = ["Downloading video", "Transcribing audio", "Reading on-screen text", "Matching exercises"];
  return (
    <div className="flex h-full flex-col gap-[1cqw]">
      <p className="text-[length:1.6cqw] font-semibold">Building workout</p>
      <div className="h-[9cqw] rounded-[1cqw] bg-gradient-to-b from-[#2b2b33] to-[#111]" />
      <div className="space-y-[0.7cqw]">
        {items.map((it, i) => (
          <p key={it} className="flex items-center gap-[0.6cqw]">
            <span
              className={cn(
                "flex h-[1.6cqw] w-[1.6cqw] items-center justify-center rounded-full text-[length:1cqw] text-white transition-colors",
                step > i * 2 + 1 ? "bg-emerald-500" : step >= i * 2 ? "animate-pulse bg-[#f05a3c]" : "bg-black/15"
              )}
            >
              {step > i * 2 + 1 ? "✓" : ""}
            </span>
            <span className={cn(step >= i * 2 ? "opacity-100" : "opacity-40")}>{it}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

function FitfoParsePanel({ step }: { step: number }) {
  const log: [string, string][] = [
    ["fetch", "video 0:58 · 1080p"],
    ["audio", "transcript · 212 words"],
    ["frames", "on-screen text · 9 overlays"],
    ["llm", "→ workout schema"],
    ["match", "4 / 4 exercises in library"],
  ];
  return (
    <div className="flex h-full flex-col gap-[1.2cqw]">
      <Label>import pipeline · job imp_8c1</Label>
      <div className="space-y-[0.6cqw] font-mono text-[length:1.35cqw]">
        {log.map(([k, v], i) => (
          <Show key={k} on={step >= Math.floor(i * 1.6)}>
            <p className="flex items-center gap-[1cqw]">
              <span className="w-[7cqw] shrink-0" style={{ color: FITFO }}>
                {k}
              </span>
              <span className="text-black/70">{v}</span>
              <span className="ml-auto text-emerald-600">✓</span>
            </p>
          </Show>
        ))}
      </div>
      <Show on={step >= 6}>
        <div className="rounded-[0.8cqw] bg-[#141414] p-[1.1cqw] font-mono text-[length:1.25cqw] leading-[1.55] text-white/85">
          <p>{"{ "}<span className="text-[#ff8a6b]">&quot;exercise&quot;</span>: &quot;Bench Press&quot;,</p>
          <p>{"  "}<span className="text-[#ff8a6b]">&quot;sets&quot;</span>: 4, <span className="text-[#ff8a6b]">&quot;reps&quot;</span>: 8, <span className="text-[#ff8a6b]">&quot;rest&quot;</span>: &quot;90s&quot;,</p>
          <p>{"  "}<span className="text-[#ff8a6b]">&quot;cue_at&quot;</span>: &quot;0:12&quot; {"}"}</p>
        </div>
      </Show>
    </div>
  );
}

function FitfoTrainScreen({ step }: { step: number }) {
  const rows: [string, string][] = [
    ["Bench Press", "4 × 8"],
    ["Incline DB Press", "3 × 10"],
    ["Cable Fly", "3 × 12"],
    ["Dips", "3 × AMRAP"],
  ];
  const sets = Math.min(4, step);
  const rest = 90 - ((step * 25) % 90);
  return (
    <div className="flex h-full flex-col gap-[0.8cqw]">
      <p className="text-[length:1.6cqw] font-semibold">Push Day</p>
      <p className="text-[length:1.1cqw] text-black/50">from @coach.jt · 4 exercises</p>
      <div className="rounded-[1cqw] bg-[#141414] p-[1cqw] text-white">
        <p className="flex justify-between">
          <span>Bench Press</span>
          <span className="text-[#ff8a6b]">185 lb</span>
        </p>
        <div className="mt-[0.6cqw] flex gap-[0.5cqw]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={cn(
                "flex h-[2.4cqw] flex-1 items-center justify-center rounded-[0.5cqw] text-[length:1.1cqw] transition-colors duration-500",
                i < sets ? "bg-[#f05a3c]" : "bg-white/10 text-white/40"
              )}
            >
              {i < sets ? "✓ 8" : "8"}
            </span>
          ))}
        </div>
        <p className="mt-[0.6cqw] text-[length:1.1cqw] tabular-nums text-white/60">
          {sets < 4 ? `rest ${Math.floor(rest / 60)}:${String(rest % 60).padStart(2, "0")}` : "exercise done"}
        </p>
      </div>
      {rows.slice(1).map(([n, s]) => (
        <p key={n} className="flex justify-between border-b border-black/5 pb-[0.5cqw]">
          <span>{n}</span>
          <span className="text-black/50">{s}</span>
        </p>
      ))}
    </div>
  );
}

function FitfoTrainPanel({ step }: { step: number }) {
  const weeks = [155, 165, 165, 175, 185];
  return (
    <div className="flex h-full flex-col gap-[1.2cqw]">
      <Label>bench press · last 5 sessions</Label>
      <div className="flex h-[12cqw] items-end gap-[1cqw]">
        {weeks.map((w, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-[0.4cqw]">
            <span className="text-[length:1.15cqw] tabular-nums text-black/50">{w}</span>
            <div
              className={cn("w-full rounded-t-[0.5cqw] transition-all duration-700", i === 4 ? "bg-[#f05a3c]" : "bg-black/15")}
              style={{ height: step >= 1 || i < 4 ? `${(w - 120) * 1.4}%` : "4%" }}
            />
          </div>
        ))}
      </div>
      <Show on={step >= 4}>
        <Tag tone="ok">New PR · 185 × 8</Tag>
      </Show>
      <Show on={step >= 5}>
        <p className="font-mono text-[length:1.3cqw] text-black/60">sets synced offline-first → api on reconnect</p>
      </Show>
    </div>
  );
}

function FitfoCoachScreen({ step }: { step: number }) {
  return (
    <div className="flex h-full flex-col gap-[0.8cqw]">
      <p className="text-[length:1.6cqw] font-semibold">Coach JT</p>
      <Show on={step >= 1} className="self-end">
        <p className="max-w-[90%] rounded-[1cqw] rounded-br-[0.3cqw] bg-[#f05a3c] px-[1cqw] py-[0.5cqw] text-white">
          shoulder hurts on bench, what do I change?
        </p>
      </Show>
      <Show on={step >= 3}>
        <p className="max-w-[95%] rounded-[1cqw] rounded-bl-[0.3cqw] bg-white px-[1cqw] py-[0.5cqw] shadow-sm">
          Tuck your elbows to about 45° and pin your shoulder blades before you unrack. I break this down in Push Day.
        </p>
      </Show>
      <Show on={step >= 4}>
        <p className="inline-flex items-center gap-[0.5cqw] rounded-full bg-black/5 px-[1cqw] py-[0.3cqw] text-[length:1.15cqw]">
          ▶ Push Day · 0:12
        </p>
      </Show>
    </div>
  );
}

function FitfoCoachPanel({ step }: { step: number }) {
  const chunks: [string, number][] = [
    ["Push Day · 0:12 · elbow angle", 0.91],
    ["Bench basics · 1:40 · scapular retraction", 0.87],
    ["Shoulder health · 0:35 · warm-up", 0.79],
  ];
  return (
    <div className="flex h-full flex-col gap-[1.1cqw]">
      <Label>retrieve · creator&apos;s own videos</Label>
      <div className="space-y-[0.5cqw]">
        {chunks.map(([c, s], i) => (
          <Show key={c} on={step >= 1 + i}>
            <p className="flex items-center gap-[1cqw] rounded-[0.7cqw] bg-white/70 px-[1cqw] py-[0.45cqw]">
              <span className="min-w-0 truncate">{c}</span>
              <span className="ml-auto font-mono tabular-nums text-black/50">{s.toFixed(2)}</span>
            </p>
          </Show>
        ))}
      </div>
      <Show on={step >= 4}>
        <p className="flex items-center gap-[0.8cqw]">
          <Tag tone="ok">grounded</Tag> answer cites the creator, not the open web
        </p>
      </Show>
      <Show on={step >= 6} className="mt-auto">
        <div className="grid grid-cols-3 gap-[1cqw]">
          {[
            ["40K", "users"],
            ["$350K", "GMV"],
            ["$500K", "raised"],
          ].map(([v, k]) => (
            <Panel key={k} className="bg-white/80 py-[0.8cqw]">
              <p className="text-[length:2.2cqw] font-semibold" style={{ color: FITFO }}>
                {v}
              </p>
              <p className="text-black/50">{k}</p>
            </Panel>
          ))}
        </div>
      </Show>
    </div>
  );
}

/* ───────────────────────── Handshake: Kubricks video evals ───────────────────────── */

export function HandshakeDemo() {
  const p = useScenes([
    {
      label: "Ingest",
      steps: 7,
      caption:
        "Clips go through Celery + Redis pipelines: frame extraction, Whisper transcription and model descriptions run in parallel per clip.",
    },
    {
      label: "Align",
      steps: 9,
      caption:
        "Model output is laid on the same timeline as the gold annotations, so wrong events and wrong order show up the moment they happen.",
    },
    {
      label: "Score",
      steps: 7,
      caption:
        "Every clip gets a score for hallucinations and temporal errors. Failing clips go back to QA before they ever reach training data.",
    },
  ]);
  return (
    <Frame player={p} bg="linear-gradient(135deg,#f3ffd2,#d9f590)" title="kubricks · video eval">
      <SceneFade k={p.scene}>
        {p.scene === 0 && <KubricksIngest step={p.step} />}
        {p.scene === 1 && <KubricksAlign step={p.step} />}
        {p.scene === 2 && <KubricksScore step={p.step} />}
      </SceneFade>
    </Frame>
  );
}

const LIME = "#5b7a10";

function KubricksIngest({ step }: { step: number }) {
  const clips = ["clip_0142.mp4 · 3:12", "clip_0143.mp4 · 1:48", "clip_0144.mp4 · 4:05", "clip_0145.mp4 · 2:31"];
  const lanes: [string, string, number][] = [
    ["extract_frames", "ffmpeg · 2 fps", 0],
    ["transcribe", "whisper", 1],
    ["describe", "vision model", 2],
  ];
  return (
    <div className="grid h-full grid-cols-[34%_1fr] gap-[1.8cqw]">
      <div className="flex flex-col gap-[0.7cqw]">
        <Label>uploads</Label>
        {clips.map((c, i) => (
          <Show key={c} on={step >= Math.floor(i / 2)}>
            <p className="flex items-center gap-[0.8cqw] rounded-[0.7cqw] bg-black/[0.04] px-[1cqw] py-[0.5cqw] font-mono text-[length:1.3cqw]">
              <span className="h-[2cqw] w-[3cqw] shrink-0 rounded-[0.3cqw] bg-[#1f2a0a]/80" />
              <span className="truncate">{c}</span>
            </p>
          </Show>
        ))}
        <Panel className="mt-auto">
          <Label>queue depth</Label>
          <p className="text-[length:2.4cqw] font-semibold tabular-nums">{Math.max(0, 48 - step * 8)}</p>
        </Panel>
      </div>
      <div className="flex flex-col gap-[1cqw]">
        <div className="flex items-center">
          <Label>celery workers · redis broker</Label>
          <span className="ml-auto flex items-center gap-[0.5cqw] text-black/50">
            <span className="h-[0.8cqw] w-[0.8cqw] animate-pulse rounded-full bg-emerald-500" /> 6 workers
          </span>
        </div>
        {lanes.map(([name, sub, offset]) => (
          <Panel key={name}>
            <p className="flex items-baseline gap-[0.8cqw]">
              <span className="font-mono font-medium">{name}</span>
              <span className="text-[length:1.15cqw] text-black/50">{sub}</span>
              <span className="ml-auto font-mono text-[length:1.2cqw] tabular-nums text-black/50">
                {Math.min(4, Math.max(0, step - offset))} / 4 clips
              </span>
            </p>
            <div className="mt-[0.6cqw]">
              <Bar pct={((step - offset) / 4) * 100} className="bg-[#5b7a10]" />
            </div>
          </Panel>
        ))}
        <Show on={step >= 6}>
          <p className="font-mono text-[length:1.3cqw]" style={{ color: LIME }}>
            ✓ 4 clips ready · 1,412 frames · 3 transcripts aligned
          </p>
        </Show>
      </div>
    </div>
  );
}

function KubricksAlign({ step }: { step: number }) {
  const head = (step / 8) * 100;
  const gold: [number, string][] = [
    [4, "add flour"],
    [24, "whisk"],
    [44, "add sugar"],
    [64, "pour batter"],
    [84, "flip"],
  ];
  const model: [number, string, "ok" | "halluc" | "order"][] = [
    [4, "add flour", "ok"],
    [24, "pour batter", "order"],
    [44, "add salt", "halluc"],
    [64, "whisk", "order"],
    [84, "flip", "ok"],
  ];
  const chip = (state: string, passed: boolean) =>
    cn(
      "absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-[0.7cqw] py-[0.1cqw] text-[length:1.1cqw] transition-all duration-500",
      !passed && "opacity-0",
      state === "ok" && "bg-emerald-100 text-emerald-700",
      state === "halluc" && "bg-red-100 text-red-600 ring-1 ring-red-300",
      state === "order" && "bg-amber-100 text-amber-700 ring-1 ring-amber-300",
      state === "gold" && "bg-[#1f2a0a] text-[#d9f590]"
    );
  const flags = model.filter(([t, , s]) => s !== "ok" && head >= t);
  return (
    <div className="flex h-full flex-col gap-[1cqw]">
      <div className="grid grid-cols-[7cqw_1fr] items-center gap-[1cqw]">
        <Label>frames</Label>
        <div className="relative flex gap-[0.3cqw]">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className={cn("h-[3.4cqw] flex-1 rounded-[0.3cqw] transition-colors", (i / 14) * 100 < head ? "bg-[#1f2a0a]/80" : "bg-black/10")}
            />
          ))}
          <div className="absolute -bottom-[10cqw] -top-[0.4cqw] w-[0.25cqw] bg-[#9bc22c] transition-all duration-700" style={{ left: `${head}%` }} />
        </div>
        <Label>gold</Label>
        <div className="relative h-[3cqw] rounded-full bg-black/[0.04]">
          {gold.map(([t, l]) => (
            <span key={t} className={chip("gold", head >= t)} style={{ left: `${t}%` }}>
              {l}
            </span>
          ))}
        </div>
        <Label>model</Label>
        <div className="relative h-[3cqw] rounded-full bg-black/[0.04]">
          {model.map(([t, l, s]) => (
            <span key={t} className={chip(s, head >= t)} style={{ left: `${t}%` }}>
              {l}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-[0.6cqw] grid flex-1 grid-cols-2 gap-[1.6cqw]">
        <Panel className="font-mono text-[length:1.25cqw]">
          <Label className="font-sans">whisper transcript</Label>
          <p className={cn("mt-[0.3cqw] transition-opacity", head >= 4 ? "opacity-80" : "opacity-20")}>00:08 &ldquo;two cups of flour&rdquo;</p>
          <p className={cn("transition-opacity", head >= 24 ? "opacity-80" : "opacity-20")}>00:31 &ldquo;whisk it smooth&rdquo;</p>
          <p className={cn("transition-opacity", head >= 44 ? "opacity-80" : "opacity-20")}>00:58 &ldquo;a pinch of sugar&rdquo;</p>
        </Panel>
        <Panel>
          <Label>flags</Label>
          <div className="mt-[0.4cqw] space-y-[0.4cqw]">
            {flags.map(([t, l, s]) => (
              <p key={t} className="flex items-center gap-[0.8cqw] duration-300 animate-in fade-in">
                <span className="font-mono text-black/50">{String(Math.round(t * 1.3)).padStart(2, "0")}s</span>
                {l}
                <Tag tone={s === "halluc" ? "bad" : "warn"} className="ml-auto">
                  {s === "halluc" ? "hallucination" : "temporal error"}
                </Tag>
              </p>
            ))}
            {flags.length === 0 && <p className="text-black/40">none yet</p>}
          </div>
        </Panel>
      </div>
    </div>
  );
}

function KubricksScore({ step }: { step: number }) {
  const rows: [string, number, number, boolean][] = [
    ["clip_0142", 1, 2, false],
    ["clip_0143", 0, 0, true],
    ["clip_0144", 0, 1, false],
    ["clip_0145", 0, 0, true],
  ];
  return (
    <div className="grid h-full grid-cols-[1fr_30%] gap-[1.8cqw]">
      <div>
        <div className="grid grid-cols-[1fr_11cqw_11cqw_9cqw] gap-[1cqw] px-[1cqw] pb-[0.5cqw]">
          <Label>clip</Label>
          <Label>halluc.</Label>
          <Label>temporal</Label>
          <Label>verdict</Label>
        </div>
        <div className="space-y-[0.5cqw]">
          {rows.map(([c, h, t, pass], i) => (
            <Show key={c} on={step >= i}>
              <div className="grid grid-cols-[1fr_11cqw_11cqw_9cqw] items-center gap-[1cqw] rounded-[0.7cqw] bg-black/[0.04] px-[1cqw] py-[0.55cqw]">
                <span className="font-mono">{c}</span>
                <span className={cn("tabular-nums", h ? "text-red-500" : "text-black/40")}>{h}</span>
                <span className={cn("tabular-nums", t ? "text-amber-600" : "text-black/40")}>{t}</span>
                <Tag tone={pass ? "ok" : "bad"}>{pass ? "pass" : "to QA"}</Tag>
              </div>
            </Show>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[1cqw]">
        <Show on={step >= 4}>
          <Panel>
            <Label>batch</Label>
            <p className="text-[length:2.6cqw] font-semibold" style={{ color: LIME }}>
              2 / 4
            </p>
            <p className="text-black/55">clips pass against gold</p>
          </Panel>
        </Show>
        <Show on={step >= 5}>
          <Panel>
            <Label>sent back to QA</Label>
            <p className="text-black/70">3 temporal errors · 1 hallucination, each with timestamp and gold event</p>
          </Panel>
        </Show>
      </div>
    </div>
  );
}

/* ───────────────────────── SideShift: messaging cache ───────────────────────── */

export function SideshiftDemo() {
  const p = useScenes([
    {
      label: "Before",
      steps: 7,
      caption: "Every open, poll and re-render of a message thread went straight to Postgres, so DB load grew with every active chat.",
    },
    {
      label: "Cache",
      steps: 9,
      caption:
        "TanStack Query serves threads from the client cache, Redis answers across devices, and sends write through and invalidate only the thread that changed.",
    },
    {
      label: "After",
      steps: 6,
      caption: "Same product, same traffic: database reads and writes on messaging dropped about 95%.",
    },
  ]);
  return (
    <Frame player={p} bg="linear-gradient(135deg,#eef0f4,#d9dee7)" title="sideshift · messaging">
      <SceneFade k={p.scene}>
        {p.scene === 0 && <SideshiftBefore step={p.step} />}
        {p.scene === 1 && <SideshiftCache step={p.step} />}
        {p.scene === 2 && <SideshiftAfter step={p.step} />}
      </SceneFade>
    </Frame>
  );
}

function SideshiftThread({ step }: { step: number }) {
  const msgs: [string, boolean][] = [
    ["Can you cover Saturday's shift?", false],
    ["Yes, 9am works", true],
    ["Sending the agreement now", false],
  ];
  return (
    <div className="flex flex-col gap-[0.7cqw]">
      <Label>thread #42</Label>
      {msgs.map(([m, mine], i) => (
        <Show key={m} on={step >= i} className={mine ? "self-end" : "self-start"}>
          <p className={cn("rounded-[1cqw] px-[1.1cqw] py-[0.55cqw]", mine ? "bg-[#141414] text-white" : "bg-black/5")}>{m}</p>
        </Show>
      ))}
    </div>
  );
}

function SideshiftBefore({ step }: { step: number }) {
  const reqs = [
    "GET /threads/42/messages",
    "GET /threads/42/messages",
    "GET /threads?unread",
    "GET /threads/42/messages",
    "POST /threads/42/messages",
    "GET /threads/42/messages",
  ];
  return (
    <div className="grid h-full grid-cols-[40%_1fr] gap-[1.8cqw]">
      <SideshiftThread step={step} />
      <div className="flex flex-col gap-[0.9cqw]">
        <Label>request log</Label>
        <div className="space-y-[0.35cqw] font-mono text-[length:1.25cqw]">
          {reqs.slice(0, step).map((r, i) => (
            <p key={i} className="flex items-center gap-[0.8cqw] duration-300 animate-in fade-in">
              <span className="min-w-0 truncate text-black/70">{r}</span>
              <span className="ml-auto shrink-0 text-red-500">→ postgres {30 + ((i * 7) % 20)}ms</span>
            </p>
          ))}
        </div>
        <Panel className="mt-auto flex items-end gap-[1.2cqw]">
          <div>
            <Label>db reads / min</Label>
            <p className="text-[length:2.6cqw] font-semibold tabular-nums text-red-500">{fmt(2100 + step * 1720)}</p>
          </div>
          <p className="pb-[0.5cqw] text-black/50">and climbing with every open chat</p>
        </Panel>
      </div>
    </div>
  );
}

function SideshiftCache({ step }: { step: number }) {
  const nodes = ["client · TanStack Query", "api", "redis", "postgres"];
  const events: [string, number[], string, Tone][] = [
    ["open thread #42", [0], "client cache · fresh · 0 ms", "ok"],
    ["open on second device", [0, 1, 2], "redis hit · 3 ms", "ok"],
    ["send a message", [0, 1, 2, 3], "optimistic update · write-through · invalidate ['thread', 42]", "info"],
    ["open cold thread #7", [0, 1, 2, 3], "miss → postgres → fill redis · 38 ms", "warn"],
  ];
  const e = Math.min(events.length - 1, Math.floor(step / 2));
  const path = events[e][1];
  return (
    <div className="flex h-full flex-col gap-[1.4cqw]">
      <div className="flex items-center gap-[0.6cqw]">
        {nodes.map((n, i) => (
          <div key={n} className="flex flex-1 items-center gap-[0.6cqw]">
            <div
              className={cn(
                "flex-1 rounded-[0.8cqw] border px-[1cqw] py-[0.8cqw] text-center font-mono text-[length:1.3cqw] transition-all duration-500",
                path.includes(i) ? "border-[#141414] bg-[#141414] text-white" : "border-black/10 bg-white text-black/40"
              )}
            >
              {n}
            </div>
            {i < nodes.length - 1 && (
              <span className={cn("transition-opacity", path.includes(i + 1) ? "opacity-80" : "opacity-15")}>→</span>
            )}
          </div>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-[1fr_34%] gap-[1.6cqw]">
        <div className="space-y-[0.6cqw]">
          <Label>events</Label>
          {events.slice(0, e + 1).map(([name, , result, tone], i) => (
            <div
              key={name}
              className={cn(
                "rounded-[0.7cqw] px-[1cqw] py-[0.55cqw] duration-300 animate-in fade-in",
                i === e ? "bg-white ring-1 ring-black/10" : "bg-black/[0.03] opacity-60"
              )}
            >
              <p className="font-medium">{name}</p>
              <Show on={i < e || step % 2 === 1 || step >= 8}>
                <Tag tone={tone} className="mt-[0.2cqw] whitespace-normal">
                  {result}
                </Tag>
              </Show>
            </div>
          ))}
        </div>
        <Panel className="self-start font-mono text-[length:1.2cqw] leading-[1.6]">
          <Label className="font-sans">client</Label>
          <p>
            <Code line="useQuery({ queryKey: ['thread', id]," />
          </p>
          <p>{"  "}staleTime: 30_000 {"})"}</p>
          <p className="mt-[0.5cqw]">
            <Code line="onSuccess: () =>" />
          </p>
          <p>
            {"  "}
            <Code line="qc.invalidateQueries(['thread', id])" />
          </p>
        </Panel>
      </div>
    </div>
  );
}

function SideshiftAfter({ step }: { step: number }) {
  const before = [62, 70, 78, 74, 82, 88];
  const after = [62, 70, 4, 4, 5, 4];
  return (
    <div className="grid h-full grid-cols-[1fr_32%] gap-[1.8cqw]">
      <Panel className="flex flex-col">
        <Label>db reads + writes / min · messaging</Label>
        <div className="mt-[1cqw] flex flex-1 items-end gap-[1cqw]">
          {before.map((b, i) => {
            const h = step >= 1 ? after[i] : b;
            return (
              <div key={i} className="flex h-full flex-1 flex-col justify-end">
                <div
                  className={cn("rounded-t-[0.5cqw] transition-all duration-1000", i >= 2 && step >= 1 ? "bg-emerald-500" : "bg-black/20")}
                  style={{ height: `${h}%`, transitionDelay: `${i * 80}ms` }}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-[0.4cqw] flex justify-between text-[length:1.1cqw] text-black/40">
          <span>mon</span>
          <span className={cn(step >= 1 ? "text-emerald-600" : "")}>↑ cache shipped</span>
          <span>sat</span>
        </div>
      </Panel>
      <div className="flex flex-col gap-[1cqw]">
        <Show on={step >= 2}>
          <Panel>
            <p className="text-[length:3.2cqw] font-semibold text-emerald-600">−95%</p>
            <p className="text-black/55">database reads and writes</p>
          </Panel>
        </Show>
        <Show on={step >= 3}>
          <Panel>
            <p className="text-[length:2.2cqw] font-semibold">0 ms</p>
            <p className="text-black/55">re-opening a thread you just saw</p>
          </Panel>
        </Show>
      </div>
    </div>
  );
}

/* ───────────────────────── Curator: agent infra + web dashboard ───────────────────────── */

export function CuratorDemo() {
  const p = useScenes([
    {
      label: "Agent runtime",
      steps: 9,
      caption:
        "The early agent infrastructure: a Bun + Hono backend runs a tool-calling agent loop and streams every step to the client over WebSocket.",
    },
    {
      label: "Tenancy",
      steps: 7,
      caption:
        "Tools, data and streams are scoped per tenant in Postgres, so 4+ enterprise brands share one backend without ever seeing each other's data.",
    },
    {
      label: "Dashboard",
      steps: 9,
      caption: "The web dashboard brands run it from: live agent runs, approvals for risky actions, and the numbers that matter.",
    },
  ]);
  return (
    <Frame player={p} bg="linear-gradient(135deg,#dcefff,#a9d4ff)" title="curator">
      <SceneFade k={p.scene}>
        {p.scene === 0 && <CuratorRuntime step={p.step} />}
        {p.scene === 1 && <CuratorTenancy step={p.step} />}
        {p.scene === 2 && <CuratorDashboard step={p.step} />}
      </SceneFade>
    </Frame>
  );
}

const CURATOR = "#1e6fc0";

function CuratorRuntime({ step }: { step: number }) {
  const trace: [string, string, string][] = [
    ["user", '"Linen midi is low. Restock and tell the VIP waitlist."', ""],
    ["plan", "check stock → reorder → notify waitlist", ""],
    ["tool", 'inventory.get("LMD-221")', "3 left"],
    ["tool", 'po.create("LMD-221", qty: 40)', "PO-1043"],
    ["tool", 'email.draft(segment: "vip_waitlist")', "draft"],
    ["done", "3 tools · 2.4s · streamed 14 events", ""],
  ];
  const layers = ["websocket stream", "agent loop", "tool registry · per tenant", "postgres · tenant-scoped"];
  const lit = [step >= 0, step >= 1, step >= 2 && step <= 4, step >= 2 && step <= 4];
  return (
    <div className="grid h-full grid-cols-[1fr_28%] gap-[1.8cqw]">
      <div className="flex flex-col gap-[0.6cqw] font-mono text-[length:1.3cqw]">
        <p className="text-black/45">ws ▸ run_8f2 · tenant brand_a · ops agent</p>
        {trace.map(([k, v, r], i) => (
          <Show key={i} on={step >= i}>
            <p className="flex items-center gap-[1cqw]">
              <span className="w-[4.5cqw] shrink-0" style={{ color: CURATOR }}>
                {k}
              </span>
              <span className="min-w-0 truncate text-black/75">{v}</span>
              {r && <span className="ml-auto shrink-0 text-emerald-600">→ {r}</span>}
            </p>
          </Show>
        ))}
        <Show on={step >= 6} className="mt-auto">
          <Panel className="bg-[#f6faff] font-mono text-[length:1.2cqw] leading-[1.6]">
            <p>
              <Code line="const app = new Hono()" />
            </p>
            <p>
              <Code line="app.get('/runs/:id/stream', upgradeWebSocket(streamRun))" />
            </p>
          </Panel>
        </Show>
      </div>
      <div className="flex flex-col gap-[0.6cqw]">
        <Label>stack · bun + hono</Label>
        {layers.map((l, i) => (
          <div
            key={l}
            className={cn(
              "rounded-[0.7cqw] border px-[1cqw] py-[0.7cqw] transition-all duration-500",
              lit[i] ? "border-[#1e88e5] bg-[#1e88e5]/10 text-[#1e6fc0]" : "border-black/10 text-black/40"
            )}
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

function CuratorTenancy({ step }: { step: number }) {
  const tenants: [string, string, string][] = [
    ["brand_a", "search_catalog(\"linen midi\")", "24 items"],
    ["brand_b", "update_inventory(SKU-881, −2)", "ok"],
  ];
  return (
    <div className="flex h-full flex-col gap-[1.2cqw]">
      <div className="grid grid-cols-2 gap-[1.6cqw]">
        {tenants.map(([t, call, res], i) => (
          <Panel key={t} className="space-y-[0.5cqw]">
            <p className="flex items-center gap-[0.8cqw]">
              <span className="rounded-full bg-[#1e88e5] px-[1cqw] py-[0.15cqw] text-white">{t}</span>
              <span className="text-black/45">agent</span>
            </p>
            <Show on={step >= 1 + i}>
              <p className="font-mono text-[length:1.25cqw]">
                {call} <span className="text-emerald-600">→ {res}</span>
              </p>
            </Show>
            <Show on={step >= 2 + i}>
              <p className="font-mono text-[length:1.15cqw] text-black/50">
                SELECT … WHERE tenant_id = <span style={{ color: CURATOR }}>&apos;{t}&apos;</span>
              </p>
            </Show>
          </Panel>
        ))}
      </div>
      <Show on={step >= 4}>
        <Panel className="flex items-center gap-[1cqw] border-red-200 bg-red-50/60">
          <span className="font-mono text-[length:1.3cqw]">brand_b agent → inventory.get(&quot;LMD-221&quot;)</span>
          <span className="text-black/45">owned by brand_a</span>
          <Tag tone="bad" className="ml-auto">
            denied · tenant scope
          </Tag>
        </Panel>
      </Show>
      <Show on={step >= 5}>
        <div className="grid grid-cols-3 gap-[1.2cqw]">
          {[
            ["4+", "enterprise brands"],
            ["$2M+", "GMV processed"],
            ["1", "shared backend"],
          ].map(([v, k]) => (
            <Panel key={k} className="py-[0.8cqw]">
              <p className="text-[length:2.2cqw] font-semibold" style={{ color: CURATOR }}>
                {v}
              </p>
              <p className="text-black/50">{k}</p>
            </Panel>
          ))}
        </div>
      </Show>
    </div>
  );
}

function CuratorDashboard({ step }: { step: number }) {
  const runs: [string, string, "done" | "approve"][] = [
    ["sales", "answered 3 product questions", "done"],
    ["ops", "synced storefront · 212 SKUs", "done"],
    ["support", "refund $240 · order #1043", "approve"],
    ["ops", "restock PO-1043 sent", "done"],
  ];
  const approved = step >= 7;
  return (
    <div className="grid h-full grid-cols-[17%_1fr] gap-[1.6cqw]">
      <div className="space-y-[0.4cqw] border-r border-black/5 pr-[1.2cqw]">
        {["Overview", "Agents", "Runs", "Catalog", "Settings"].map((n, i) => (
          <p key={n} className={cn("rounded-[0.6cqw] px-[0.8cqw] py-[0.4cqw]", i === 0 ? "bg-[#1e88e5]/10 font-medium text-[#1e6fc0]" : "text-black/50")}>
            {n}
          </p>
        ))}
      </div>
      <div className="flex min-w-0 flex-col gap-[1cqw]">
        <div className="grid grid-cols-3 gap-[1cqw]">
          {[
            ["agent runs today", fmt(1180 + step * 13)],
            ["tool success", "99.2%"],
            ["awaiting approval", approved ? "0" : step >= 4 ? "1" : "0"],
          ].map(([k, v]) => (
            <Panel key={k} className="py-[0.8cqw]">
              <p className="text-[length:2cqw] font-semibold tabular-nums">{v}</p>
              <p className="text-[length:1.15cqw] text-black/50">{k}</p>
            </Panel>
          ))}
        </div>
        <div className="space-y-[0.45cqw]">
          <Label>live runs</Label>
          {runs.map(([a, what, kind], i) => (
            <Show key={what} on={step >= 1 + i}>
              <div className="flex items-center gap-[1cqw] rounded-[0.7cqw] bg-black/[0.03] px-[1cqw] py-[0.5cqw]">
                <span className="w-[6cqw] shrink-0 capitalize" style={{ color: CURATOR }}>
                  {a}
                </span>
                <span className="min-w-0 truncate">{what}</span>
                {kind === "done" ? (
                  <span className="ml-auto text-emerald-600">✓</span>
                ) : approved ? (
                  <Tag tone="ok" className="ml-auto">
                    approved
                  </Tag>
                ) : (
                  <span
                    className={cn(
                      "ml-auto shrink-0 rounded-full bg-[#1e88e5] px-[1cqw] py-[0.15cqw] text-white transition-transform",
                      step === 6 && "scale-110 ring-[0.3cqw] ring-[#1e88e5]/30"
                    )}
                  >
                    Approve
                  </span>
                )}
              </div>
            </Show>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── AbbVie: oncology ETL ───────────────────────── */

export function AbbvieDemo() {
  const p = useScenes([
    {
      label: "Extract",
      steps: 6,
      caption: "Pull 120K+ clinical trial reports (PDFs, scans and exports) into a parallel extraction job.",
    },
    {
      label: "Transform",
      steps: 8,
      caption:
        "Normalize each report into structured fields, quarantine records that fail validation, then chunk and embed the text.",
    },
    {
      label: "Load",
      steps: 6,
      caption: "Load rows into Postgres and vectors into FAISS. The batch that took 4 hours now finishes in 45 minutes.",
    },
    {
      label: "Search",
      steps: 8,
      caption: "R&D searches in plain language and gets ranked trials and reports back, about 3× faster than the old lookup.",
    },
  ]);
  return (
    <Frame player={p} bg="linear-gradient(135deg,#e6e9f2,#bcc4da)" title="oncology R&D · etl">
      <SceneFade k={p.scene}>
        {p.scene === 0 && <AbbvieExtract step={p.step} />}
        {p.scene === 1 && <AbbvieTransform step={p.step} />}
        {p.scene === 2 && <AbbvieLoad step={p.step} />}
        {p.scene === 3 && <AbbvieSearch step={p.step} />}
      </SceneFade>
    </Frame>
  );
}

const NAVY = "#071d49";

function AbbvieExtract({ step }: { step: number }) {
  const files = ["NCT0421_csr.pdf", "RPT-55302_scan.pdf", "NCT1187_protocol.pdf", "onc_batch_17.csv", "NCT2290_csr.pdf", "RPT-60114.pdf"];
  const done = Math.min(120000, (step + 1) * 20000);
  return (
    <div className="grid h-full grid-cols-[1fr_36%] gap-[1.8cqw]">
      <div className="space-y-[0.5cqw]">
        <Label>incoming</Label>
        {files.slice(0, step + 1).map((f, i) => (
          <p key={f} className="flex items-center gap-[1cqw] rounded-[0.7cqw] bg-black/[0.04] px-[1cqw] py-[0.45cqw] font-mono text-[length:1.3cqw] duration-300 animate-in fade-in">
            <span className="rounded-[0.3cqw] px-[0.5cqw] text-[length:1cqw] text-white" style={{ background: NAVY }}>
              {f.endsWith(".csv") ? "CSV" : "PDF"}
            </span>
            <span className="truncate">{f}</span>
            <span className="ml-auto shrink-0 text-black/45">{i % 3 === 1 ? "ocr" : "text"}</span>
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-[1cqw]">
        <Panel>
          <Label>reports extracted</Label>
          <p className="text-[length:2.8cqw] font-semibold tabular-nums" style={{ color: NAVY }}>
            {fmt(done)}
          </p>
          <div className="mt-[0.5cqw]">
            <Bar pct={(done / 120000) * 100} className="bg-[#071d49]" />
          </div>
        </Panel>
        <Panel>
          <Label>workers</Label>
          <div className="mt-[0.5cqw] grid grid-cols-4 gap-[0.4cqw]">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className={cn("h-[1.6cqw] rounded-[0.3cqw]", (i + step) % 3 ? "bg-[#071d49]/70" : "bg-[#071d49]/20")} />
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

function AbbvieTransform({ step }: { step: number }) {
  const fields: [string, string][] = [
    ["trial_id", "NCT0421"],
    ["phase", "II"],
    ["indication", "NSCLC"],
    ["biomarker", "EGFR exon 19 del"],
    ["line", "second"],
  ];
  return (
    <div className="grid h-full grid-cols-[34%_1fr] gap-[1.8cqw]">
      <Panel className="font-mono text-[length:1.2cqw] leading-[1.55] text-black/55">
        <Label className="font-sans">raw · page 3</Label>
        <p className="mt-[0.3cqw]">
          …a Phase II, open-label study of osimertinib in pts with EGFR exon 19 deletion NSCLC who progressed on first-line
          TKI therapy (NCT0421)…
        </p>
      </Panel>
      <div className="flex flex-col gap-[1cqw]">
        <Panel className="space-y-[0.35cqw]">
          <Label>structured record</Label>
          {fields.map(([k, v], i) => (
            <Show key={k} on={step >= i}>
              <p className="flex gap-[1cqw] font-mono text-[length:1.3cqw]">
                <span className="w-[11cqw] text-black/45">{k}</span>
                <span style={{ color: NAVY }}>{v}</span>
              </p>
            </Show>
          ))}
        </Panel>
        <div className="grid grid-cols-2 gap-[1cqw]">
          <Show on={step >= 5}>
            <Panel>
              <Label>validation</Label>
              <p className="mt-[0.2cqw] flex items-center gap-[0.6cqw]">
                <Tag tone="warn">312 quarantined</Tag>
              </p>
              <p className="mt-[0.3cqw] text-[length:1.2cqw] text-black/50">missing phase or trial id</p>
            </Panel>
          </Show>
          <Show on={step >= 6}>
            <Panel>
              <Label>chunk + embed</Label>
              <p className="text-[length:2cqw] font-semibold tabular-nums" style={{ color: NAVY }}>
                {step >= 7 ? "1.4M" : "0.9M"}
              </p>
              <p className="text-[length:1.2cqw] text-black/50">chunks · openai embeddings</p>
            </Panel>
          </Show>
        </div>
      </div>
    </div>
  );
}

function AbbvieLoad({ step }: { step: number }) {
  return (
    <div className="grid h-full grid-cols-2 gap-[1.8cqw]">
      <div className="flex flex-col gap-[1cqw]">
        {[
          ["postgres", "trials, reports, fields", "119,688 rows"],
          ["faiss", "IVF index over chunks", "1.4M vectors"],
        ].map(([k, sub, v], i) => (
          <Show key={k} on={step >= i}>
            <Panel className="flex items-center gap-[1cqw]">
              <span className="rounded-[0.5cqw] px-[0.8cqw] py-[0.2cqw] font-mono text-white" style={{ background: NAVY }}>
                {k}
              </span>
              <span className="text-black/55">{sub}</span>
              <span className="ml-auto font-mono tabular-nums">{v}</span>
            </Panel>
          </Show>
        ))}
        <Show on={step >= 2}>
          <p className="font-mono text-[length:1.3cqw] text-black/55">FastAPI · /search · /reports/:id · /batches</p>
        </Show>
      </div>
      <Panel className="flex flex-col gap-[1cqw]">
        <Label>full batch run</Label>
        {[
          ["before", 100, "4h 00m", "bg-black/25"],
          ["after", step >= 2 ? 19 : 100, "45m", "bg-[#071d49]"],
        ].map(([k, w, t, c]) => (
          <div key={k as string}>
            <p className="flex justify-between">
              <span className="text-black/55">{k}</span>
              <span className="font-mono tabular-nums">{step >= 2 || k === "before" ? t : "…"}</span>
            </p>
            <div className="mt-[0.3cqw] h-[1.4cqw] rounded-full bg-black/5">
              <div className={cn("h-full rounded-full transition-all duration-1000", c as string)} style={{ width: `${w}%` }} />
            </div>
          </div>
        ))}
        <Show on={step >= 3} className="mt-auto">
          <p className="text-[length:2.6cqw] font-semibold" style={{ color: NAVY }}>
            −80%
          </p>
        </Show>
      </Panel>
    </div>
  );
}

function AbbvieSearch({ step }: { step: number }) {
  const query = "EGFR-mutant NSCLC · second line";
  const typed = query.slice(0, Math.min(query.length, (step + 1) * 11));
  const hits: [string, string, number][] = [
    ["NCT0421", "Osimertinib after progression, phase II", 0.94],
    ["NCT1187", "EGFR TKI + chemo combination", 0.89],
    ["RPT-55302", "Resistance mechanisms, T790M", 0.83],
  ];
  return (
    <div className="flex h-full flex-col gap-[1.1cqw]">
      <div className="flex items-center gap-[1cqw] rounded-[0.9cqw] border border-black/10 px-[1.4cqw] py-[0.9cqw]">
        <span className="opacity-40">search</span>
        <span className="font-medium">{typed}</span>
        <Show on={step >= 6} className="ml-auto">
          <span className="rounded-full px-[0.9cqw] text-white" style={{ background: NAVY }}>
            ~3× faster
          </span>
        </Show>
      </div>
      <div className="space-y-[0.7cqw]">
        {hits.map(([id, title, score], i) => (
          <Show key={id} on={step >= 3 + i}>
            <div className="flex items-center gap-[1cqw] rounded-[0.8cqw] bg-black/[0.03] px-[1.2cqw] py-[0.6cqw]">
              <span className="shrink-0 whitespace-nowrap font-mono" style={{ color: NAVY }}>
                {id}
              </span>
              <span className="min-w-0 truncate">{title}</span>
              <span className="ml-auto shrink-0 tabular-nums opacity-60">{score.toFixed(2)}</span>
            </div>
          </Show>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── Rumor: mobile full stack ───────────────────────── */

export function RumorDemo() {
  const p = useScenes([
    {
      label: "App",
      steps: 8,
      caption: "React Native: search events, open one, RSVP and see the guest list update instantly with an optimistic Redux update.",
    },
    {
      label: "API",
      steps: 8,
      caption:
        "Behind the search box: a slow Postgres query became an indexed one with a Redis cache in front, taking the endpoint from 800 ms to 120 ms.",
    },
    {
      label: "At scale",
      steps: 6,
      caption: "Latency held under 500+ concurrent users across 50K+ people using the app, and the mobile app got ~30% faster.",
    },
  ]);
  const { scene, step } = p;
  return (
    <Frame player={p} bare dark bg="linear-gradient(135deg,#141414,#3a3a3f)" title="rumor · iOS + api">
      <div className="grid h-full grid-cols-[auto_1fr] gap-[2.4cqw]">
        <Phone dark>
          <RumorScreen scene={scene} step={step} />
        </Phone>
        <SceneFade k={scene}>
          {scene === 0 && <RumorAppPanel step={step} />}
          {scene === 1 && <RumorApiPanel step={step} />}
          {scene === 2 && <RumorScalePanel step={step} />}
        </SceneFade>
      </div>
    </Frame>
  );
}

function RumorScreen({ scene, step }: { scene: number; step: number }) {
  const detail = scene === 0 && step >= 3;
  const going = scene === 0 && step >= 5;
  const query = "rooftop tonight".slice(0, scene === 0 ? Math.min(15, (step + 1) * 6) : 15);
  const events: [string, string][] = [
    ["Rooftop set · DJ Kova", "tonight · 0.4 mi"],
    ["Warehouse open air", "fri · 1.2 mi"],
    ["Late-night jazz", "sat · 0.8 mi"],
  ];
  if (detail) {
    return (
      <div className="flex h-full flex-col gap-[0.8cqw] duration-300 animate-in fade-in">
        <div className="h-[11cqw] rounded-[1cqw] bg-gradient-to-br from-fuchsia-500 to-amber-400" />
        <p className="text-[length:1.6cqw] font-semibold">Rooftop set · DJ Kova</p>
        <p className="text-white/55">tonight 10pm · 0.4 mi</p>
        <span
          className={cn(
            "rounded-full py-[0.6cqw] text-center font-medium transition-colors",
            going ? "bg-emerald-500 text-white" : "bg-white text-black"
          )}
        >
          {going ? "✓ Going" : "RSVP"}
        </span>
        <Label>guest list</Label>
        <div className="flex items-center">
          {Array.from({ length: going ? 6 : 5 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "-ml-[0.5cqw] h-[2.4cqw] w-[2.4cqw] rounded-full border-[0.2cqw] border-[#0e0e10] first:ml-0",
                i === 5 ? "bg-emerald-400 animate-in zoom-in" : "bg-gradient-to-br from-sky-400 to-violet-500"
              )}
            />
          ))}
          <span className="ml-[0.6cqw] text-white/55">{going ? 143 : 142} going</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col gap-[0.7cqw]">
      <p className="text-[length:1.6cqw] font-semibold">Discover</p>
      <div className="rounded-full bg-white/10 px-[1cqw] py-[0.5cqw] text-white/80">⌕ {query}</div>
      {events.map(([name, meta], i) => (
        <div
          key={name}
          className={cn(
            "flex items-center gap-[0.8cqw] rounded-[0.9cqw] bg-white/[0.06] px-[0.8cqw] py-[0.6cqw] transition-all",
            scene === 0 && step === 2 && i === 0 && "ring-[0.2cqw] ring-fuchsia-400"
          )}
        >
          <span className="h-[2.8cqw] w-[2.8cqw] shrink-0 rounded-[0.6cqw] bg-gradient-to-br from-fuchsia-500 to-amber-400" />
          <span className="min-w-0">
            <span className="block truncate">{name}</span>
            <span className="block text-[length:1.1cqw] text-white/50">{meta}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function RumorAppPanel({ step }: { step: number }) {
  const log: [string, string, number][] = [
    ["search", "GET /events/search?q=rooftop", 1],
    ["navigate", "EventDetail { id: evt_93 }", 3],
    ["dispatch", "rsvp/optimistic  going: 143", 5],
    ["POST", "/events/evt_93/rsvp → 201", 6],
  ];
  return (
    <div className="flex h-full flex-col gap-[1.2cqw]">
      <Label>react native · redux · react navigation</Label>
      <div className="space-y-[0.7cqw] font-mono text-[length:1.35cqw]">
        {log.map(([k, v, at]) => (
          <Show key={k} on={step >= at}>
            <p className="flex gap-[1cqw]">
              <span className="w-[9cqw] shrink-0 text-fuchsia-300">{k}</span>
              <span className="text-white/75">{v}</span>
            </p>
          </Show>
        ))}
      </div>
      <Panel dark className="mt-auto">
        <Label>shipped</Label>
        <p className="mt-[0.3cqw] text-white/75">Guest lists, RSVPs and discovery, end to end: screens, state, API and database.</p>
      </Panel>
    </div>
  );
}

function RumorApiPanel({ step }: { step: number }) {
  const after = step >= 4;
  const spans: [string, number, number, string][] = after
    ? [
        ["node api", 0, 2, "bg-sky-400"],
        ["redis get", 2, 3, "bg-emerald-400"],
        ["postgres · index scan", 3, 13, "bg-emerald-400/60"],
        ["serialize", 13, 15, "bg-white/40"],
      ]
    : [
        ["node api", 0, 3, "bg-sky-400"],
        ["postgres · seq scan + geo filter", 3, 94, "bg-amber-400"],
        ["serialize", 94, 100, "bg-white/40"],
      ];
  const fixes = ["composite index (geohash, starts_at)", "redis cache · ttl 60s · key per query + area", "select card fields only, paginate 20"];
  return (
    <div className="flex h-full flex-col gap-[1cqw] font-mono text-[length:1.3cqw]">
      <p className="flex items-center gap-[1cqw]">
        <span className="truncate text-white/60">GET /events/search?q=rooftop&amp;near=9q8yy</span>
        <span className={cn("ml-auto shrink-0 rounded-full px-[0.8cqw]", after ? "bg-emerald-400/15 text-emerald-400" : "bg-amber-400/15 text-amber-300")}>
          {after ? "120 ms" : "800 ms"}
        </span>
      </p>
      <div key={after ? "a" : "b"} className="space-y-[0.5cqw] duration-500 animate-in fade-in">
        {spans.map(([name, from, to, c], i) => (
          <Show key={name} on={after ? step >= 4 + Math.min(i, 2) : step >= i}>
            <div className="grid grid-cols-[38%_1fr] items-center gap-[1cqw]">
              <span className="truncate text-white/70">{name}</span>
              <div className="relative h-[1.3cqw] rounded-full bg-white/5">
                <div className={cn("absolute h-full rounded-full", c)} style={{ left: `${from}%`, width: `${Math.max(1, to - from)}%` }} />
              </div>
            </div>
          </Show>
        ))}
      </div>
      <div className="mt-auto space-y-[0.4cqw]">
        <Label className="font-sans">fixes</Label>
        {fixes.map((f, i) => (
          <Show key={f} on={step >= 3 + i}>
            <p className="text-emerald-400">+ {f}</p>
          </Show>
        ))}
      </div>
    </div>
  );
}

function RumorScalePanel({ step }: { step: number }) {
  const pts = [800, 790, 805, 420, 160, 125, 120, 118, 122, 120];
  const shown = Math.min(pts.length, 4 + step * 2);
  const x = (i: number) => (i / (pts.length - 1)) * 200;
  const y = (v: number) => 70 - (v / 850) * 64;
  return (
    <div className="flex h-full flex-col gap-[1cqw]">
      <Label>p95 search latency · 500+ concurrent users</Label>
      <svg viewBox="0 0 200 72" className="w-full">
        <polyline
          points={pts
            .slice(0, shown)
            .map((v, i) => `${x(i)},${y(v)}`)
            .join(" ")}
          fill="none"
          stroke="#34d399"
          strokeWidth="1.6"
          strokeLinejoin="round"
          style={{ transition: "all 0.6s" }}
        />
        <text x="2" y={y(800) - 2} fill="rgba(255,255,255,0.45)" fontSize="5">
          800 ms
        </text>
        <text x="172" y={y(120) - 3} fill="#34d399" fontSize="5">
          120 ms
        </text>
      </svg>
      <Show on={step >= 3}>
        <div className="grid grid-cols-3 gap-[1cqw]">
          {[
            ["−85%", "search latency"],
            ["50K+", "users"],
            ["~30%", "faster app"],
          ].map(([v, k]) => (
            <Panel key={k} dark className="py-[0.8cqw]">
              <p className="text-[length:2.2cqw] font-semibold text-emerald-400">{v}</p>
              <p className="text-white/55">{k}</p>
            </Panel>
          ))}
        </div>
      </Show>
    </div>
  );
}

/* UCSF Health (Congruence): a therapy session becomes a SOAP note with patient context. */
export function UcsfDemo() {
  const { ref, step } = useLoop(10, 1000);
  const soap: [string, string][] = [
    ["S", "Reports better sleep and less anxiety at work."],
    ["O", "Calm affect, engaged, on time."],
    ["A", "Improving; coping strategies are working."],
    ["P", "Continue weekly CBT; review in two weeks."],
  ];
  return (
    <Frame frameRef={ref} bg="linear-gradient(135deg,#e5ecf8,#c9d6ee)" title="agentic EHR · session notes">
      <div className="grid h-full grid-cols-[36%_1fr] gap-[1.6cqw]">
        <div className="flex flex-col gap-[1cqw]">
          <Label>session</Label>
          <div className="flex h-[5cqw] items-center gap-[0.35cqw]">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="w-[0.5cqw] rounded-full bg-[#052049] transition-all duration-500"
                style={{ height: `${20 + (((i * 37 + step * 23) % 80))}%`, opacity: step < 4 ? 0.85 : 0.25 }}
              />
            ))}
          </div>
          <Show on={step > 0}>
            <span className="inline-block rounded-full bg-[#052049]/10 px-[1cqw] py-[0.3cqw] text-[#052049]">patient context loaded</span>
          </Show>
          <Show on={step > 1}>
            <p className="text-black/60">&ldquo;I&apos;ve been sleeping a lot better…&rdquo;</p>
          </Show>
        </div>
        <div className="rounded-[0.9cqw] border border-black/10 p-[1.3cqw]">
          <Label>SOAP note</Label>
          <div className="mt-[0.6cqw] space-y-[0.7cqw]">
            {soap.map(([k, v], i) => (
              <div key={k} className="flex gap-[1cqw]">
                <span className="w-[2.4cqw] shrink-0 rounded-[0.4cqw] bg-[#052049] text-center font-semibold text-white">{k}</span>
                {step > 2 + i ? (
                  <Show on className="min-w-0">
                    <p className="text-black/75">{v}</p>
                  </Show>
                ) : (
                  <span className="mt-[0.5cqw] h-[1cqw] w-[70%] animate-pulse rounded-full bg-black/5" />
                )}
              </div>
            ))}
          </div>
          <Show on={step > 7} className="mt-[0.9cqw]">
            <span className="font-medium text-emerald-600">✓ ready for clinician review</span>
          </Show>
        </div>
      </div>
    </Frame>
  );
}

/* UC San Diego Health: a patient's history and allergies flow through a LangGraph agent into a safe meal plan. */
export function UcsdDemo() {
  const { ref, step } = useLoop(11, 1000);
  const nodes = ["retrieve", "check allergies", "reason", "recommend"];
  const node = Math.min(nodes.length - 1, Math.max(0, step - 2));
  const meals: [string, boolean, string][] = [
    ["Grilled salmon, quinoa, greens", true, "low sodium"],
    ["Peanut satay noodles", false, "peanut allergy"],
    ["Lentil soup, whole-grain toast", true, "fiber · A1c"],
  ];
  return (
    <Frame frameRef={ref} bg="linear-gradient(135deg,#e3eef8,#b9d3ea)" title="clinical RAG · dietitian agent">
      <div className="grid h-full grid-cols-[34%_1fr] gap-[1.6cqw]">
        <div className="flex flex-col gap-[0.8cqw]">
          <Label>patient</Label>
          {[
            ["history", "type 2 diabetes · hypertension"],
            ["allergies", "peanuts, shellfish"],
            ["goal", "lower A1c"],
          ].map(([k, v], i) => (
            <Show key={k} on={step > i}>
              <p className="rounded-[0.7cqw] bg-[#00629b]/[0.07] px-[1cqw] py-[0.5cqw]">
                <span className="block text-[length:1.15cqw] uppercase tracking-wider text-[#00629b]/70">{k}</span>
                {v}
              </p>
            </Show>
          ))}
          <Show on={step > 1}>
            <p className="font-mono text-[length:1.3cqw] text-black/50">qdrant · 6 chunks retrieved</p>
          </Show>
        </div>
        <div className="flex flex-col gap-[1.1cqw]">
          <Label>langgraph</Label>
          <div className="flex items-center gap-[0.6cqw]">
            {nodes.map((n, i) => (
              <div key={n} className="flex items-center gap-[0.6cqw]">
                <span
                  className={cn(
                    "rounded-full border px-[1cqw] py-[0.3cqw] transition-colors duration-500",
                    step > 1 && i === node
                      ? "border-[#00629b] bg-[#00629b] text-white"
                      : step > 1 && i < node
                        ? "border-[#00629b]/40 text-[#00629b]"
                        : "border-black/10 text-black/40"
                  )}
                >
                  {n}
                </span>
                {i < nodes.length - 1 && <span className="opacity-30">→</span>}
              </div>
            ))}
          </div>
          <div className="space-y-[0.6cqw] rounded-[0.9cqw] border border-black/10 p-[1.2cqw]">
            <Label>recommendations</Label>
            {meals.map(([meal, ok, why], i) => (
              <Show key={meal} on={step > 4 + i}>
                <p className="flex items-center gap-[0.8cqw]">
                  <span className={cn(!ok && "text-black/40 line-through")}>{meal}</span>
                  <span
                    className={cn(
                      "ml-auto shrink-0 rounded-full px-[0.8cqw]",
                      ok ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"
                    )}
                  >
                    {why}
                  </span>
                </p>
              </Show>
            ))}
          </div>
          <Show on={step > 8}>
            <span className="rounded-full bg-emerald-50 px-[1.2cqw] py-[0.4cqw] font-medium text-emerald-700">
              ✓ +22% accuracy vs. baseline
            </span>
          </Show>
        </div>
      </div>
    </Frame>
  );
}
