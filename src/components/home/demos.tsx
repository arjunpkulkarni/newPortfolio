"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/utils";

// Small looping product demos for the experience cards. Each one scales with its
// container (sizes are in cqw), so it reads like a video at any width.

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

function Frame({
  frameRef,
  bg,
  title,
  dark,
  children,
}: {
  frameRef: RefObject<HTMLDivElement>;
  bg: string;
  title: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      ref={frameRef}
      className="relative aspect-[2/1] w-full overflow-hidden [container-type:inline-size]"
      style={{ background: bg }}
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-x-[5%] inset-y-[7%] flex flex-col overflow-hidden rounded-[1.4cqw] shadow-[0_2cqw_5cqw_-2cqw_rgba(0,0,0,0.35)] ring-1",
          dark ? "bg-[#0b0b0c] text-white ring-white/10" : "bg-white text-[#141414] ring-black/5"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-[0.7cqw] border-b px-[1.6cqw] py-[1cqw]",
            dark ? "border-white/10" : "border-black/5"
          )}
        >
          <span className="h-[0.9cqw] w-[0.9cqw] rounded-full bg-[#ff5f57]" />
          <span className="h-[0.9cqw] w-[0.9cqw] rounded-full bg-[#febc2e]" />
          <span className="h-[0.9cqw] w-[0.9cqw] rounded-full bg-[#28c840]" />
          <span className="ml-[0.8cqw] text-[length:1.6cqw] font-medium opacity-70">{title}</span>
          <span className="ml-auto rounded-full border border-current px-[0.8cqw] text-[length:1cqw] uppercase tracking-wider opacity-40">
            demo
          </span>
        </div>
        <div className="relative min-h-0 flex-1 p-[2cqw] text-[length:1.85cqw] leading-[1.4]">{children}</div>
      </div>
    </div>
  );
}

const Label = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn("text-[length:1.25cqw] font-medium uppercase tracking-[0.12em] opacity-45", className)}>
    {children}
  </p>
);

const Check = ({ ok }: { ok: boolean }) => (
  <span className={cn("ml-auto shrink-0 font-semibold", ok ? "text-emerald-600" : "text-red-500")}>
    {ok ? "✓" : "✗"}
  </span>
);

/* Breken: rebuild the system, grow state at 4,000x, explore, reproduce, draft a PR. */
export function BrekenDemo() {
  const { ref, step } = useLoop(10, 1000);
  const day = Math.min(730, 40 + step * 78);
  const log: [string, string, "ok" | "fail" | "pr"][] = [
    ["rebuild", "payments · mail · db · queue answered in sandbox", "ok"],
    ["grow", "accounts, records, open sessions from use", "ok"],
    ["explore", "retry after timeout", "ok"],
    ["explore", "lost response mid-checkout", "ok"],
    ["explore", "clock jump during renewal", "fail"],
    ["reproduce", "a retry charges once · 3/3 vs control", "fail"],
    ["fix", "draft PR: idempotency key on retry", "pr"],
  ];
  return (
    <Frame frameRef={ref} dark bg="linear-gradient(135deg,#0b0b0c,#25252d)" title="breken · simulation">
      <div className="grid h-full grid-cols-[34%_1fr] gap-[1.6cqw] font-mono">
        <div className="flex flex-col gap-[1.2cqw]">
          <div className="rounded-[0.8cqw] border border-white/10 p-[1.2cqw]">
            <Label>clock</Label>
            <p className="text-[length:2.6cqw] font-semibold">4,000×</p>
            <p className="tabular-nums text-white/60">day {day} / 730</p>
            <div className="mt-[0.8cqw] h-[0.5cqw] rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#4f8cff] transition-all duration-700"
                style={{ width: `${(day / 730) * 100}%` }}
              />
            </div>
          </div>
          <div className="space-y-[0.6cqw] rounded-[0.8cqw] border border-white/10 p-[1.2cqw]">
            <Label>population</Label>
            {["impatient admin · bulk edits", "new user · two tabs", "agent · refunds from inbox"].map((p, i) => (
              <p key={p} className="flex items-center gap-[0.7cqw] text-white/75">
                <span
                  className={cn(
                    "h-[0.8cqw] w-[0.8cqw] shrink-0 rounded-full bg-emerald-400 transition-opacity",
                    (step + i) % 3 === 0 ? "opacity-100" : "opacity-30"
                  )}
                />
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-[0.9cqw]">
          {log.map(([kind, text, state], i) => (
            <Show key={i} on={step > i}>
              <p className="flex items-center gap-[1cqw]">
                <span
                  className={cn(
                    "w-[11cqw] shrink-0",
                    state === "fail" ? "text-red-400" : state === "pr" ? "text-[#4f8cff]" : "text-emerald-400"
                  )}
                >
                  {kind}
                </span>
                <span className="min-w-0 truncate text-white/80">{text}</span>
                <span
                  className={cn(
                    "ml-auto shrink-0",
                    state === "fail" ? "text-red-400" : state === "pr" ? "text-[#4f8cff]" : "text-emerald-400"
                  )}
                >
                  {state === "ok" ? "✓" : state === "fail" ? "✗" : "PR"}
                </span>
              </p>
            </Show>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* IBM: compose a Mellea skill (instruct, requirements, validate, repair), then run it. */
export function IbmDemo() {
  const { ref, step } = useLoop(11, 1000);
  const blocks = ["instruct", "requirements", "validate", "repair"];
  const checks: [string, number, boolean][] = [
    ["≤ 3 sentences", 5, true],
    ["names the affected service", 6, true],
    ["cites the ticket id", 7, step > 8],
  ];
  return (
    <Frame frameRef={ref} bg="linear-gradient(135deg,#dfe8ff,#f3f6ff)" title="mellea · skill compiler">
      <Label>skill: summarize_ticket</Label>
      <div className="mt-[0.8cqw] flex items-center gap-[0.8cqw]">
        {blocks.map((b, i) => (
          <div key={b} className="flex items-center gap-[0.8cqw]">
            <Show on={step > i}>
              <span className="inline-block rounded-[0.7cqw] border border-[#0f62fe]/30 bg-[#0f62fe]/10 px-[1.2cqw] py-[0.6cqw] font-medium text-[#0f62fe]">
                {b}
              </span>
            </Show>
            {i < blocks.length - 1 && (
              <span className={cn("transition-opacity", step > i + 1 ? "opacity-50" : "opacity-0")}>→</span>
            )}
          </div>
        ))}
      </div>
      <Show on={step > 3} className="mt-[1.6cqw] rounded-[0.9cqw] border border-black/10 p-[1.4cqw]">
        <Label>run</Label>
        <p className="mt-[0.4cqw] text-black/70">&ldquo;Summarize ticket #4821 for the on-call engineer.&rdquo;</p>
        <div className="mt-[0.8cqw] space-y-[0.5cqw]">
          {checks.map(([text, at, ok]) => (
            <Show key={text} on={step > at}>
              <p className="flex items-center gap-[0.8cqw]">
                <span className="opacity-50">requirement</span>
                {text}
                {text === "cites the ticket id" && step > 8 && (
                  <span className="rounded-full bg-amber-100 px-[0.8cqw] text-[length:1.1cqw] text-amber-700">repaired</span>
                )}
                <Check ok={ok} />
              </p>
            </Show>
          ))}
        </div>
      </Show>
      <Show on={step > 9} className="absolute bottom-[1.8cqw] left-[1.8cqw]">
        <span className="rounded-full bg-emerald-50 px-[1.2cqw] py-[0.4cqw] font-medium text-emerald-700">
          ✓ skill composed into the agent workflow
        </span>
      </Show>
    </Frame>
  );
}

/* FitFo: share a fitness video, get a structured workout, ask the creator coach. */
export function FitfoDemo() {
  const { ref, step } = useLoop(13, 1000);
  const rows: [string, string][] = [
    ["Bench Press", "4 × 8"],
    ["Incline DB Press", "3 × 10"],
    ["Cable Fly", "3 × 12"],
    ["Dips", "3 × AMRAP"],
  ];
  const parsing = step >= 1 && step <= 2;
  return (
    <Frame frameRef={ref} bg="linear-gradient(135deg,#fff0e8,#ffcfb8)" title="fitfo">
      <div className="grid h-full grid-cols-[52%_1fr] gap-[1.6cqw]">
        <div>
          <Show on={step > 0}>
            <p className="truncate rounded-full bg-black/5 px-[1.2cqw] py-[0.5cqw] text-black/60">
              shared · tiktok.com/@creator/video/…
            </p>
          </Show>
          <div className="mt-[0.8cqw] h-[0.6cqw] rounded-full bg-black/5">
            <div
              className="h-full rounded-full bg-[#f05a3c] transition-all duration-1000"
              style={{ width: step >= 3 ? "100%" : parsing ? `${step * 45}%` : "0%" }}
            />
          </div>
          <p className={cn("mt-[0.4cqw] text-[length:1.2cqw] text-black/50 transition-opacity", parsing ? "opacity-100" : "opacity-0")}>
            reading audio + on-screen text…
          </p>
          <Show on={step > 2} className="mt-[0.6cqw] rounded-[1cqw] bg-[#141414] p-[1.3cqw] text-white">
            <p className="font-semibold">Push Day <span className="font-normal text-white/50">· from video</span></p>
            <div className="mt-[0.6cqw] space-y-[0.45cqw]">
              {rows.map(([name, sets], i) => (
                <Show key={name} on={step > 3 + i}>
                  <p className="flex justify-between border-t border-white/10 pt-[0.45cqw]">
                    <span>{name}</span>
                    <span className="text-[#ff8a6b]">{sets}</span>
                  </p>
                </Show>
              ))}
            </div>
          </Show>
        </div>
        <div className="flex flex-col gap-[0.9cqw] rounded-[1cqw] bg-black/[0.03] p-[1.2cqw]">
          <Label>creator coach</Label>
          <Show on={step > 7} className="self-end">
            <p className="rounded-[1cqw] rounded-br-[0.3cqw] bg-[#f05a3c] px-[1.1cqw] py-[0.6cqw] text-white">form cue for bench?</p>
          </Show>
          <Show on={step > 8}>
            <p className="rounded-[1cqw] rounded-bl-[0.3cqw] bg-white px-[1.1cqw] py-[0.6cqw] shadow-sm">
              Pin your shoulder blades and drive your feet into the floor. <span className="font-semibold text-[#f05a3c]">[1]</span>
            </p>
          </Show>
          <Show on={step > 9}>
            <p className="text-[length:1.15cqw] text-black/50">[1] cited from the creator&apos;s own video</p>
          </Show>
        </div>
      </div>
    </Frame>
  );
}

/* Handshake (Kubricks): ingest video, extract frames, transcribe, flag model errors vs gold. */
export function HandshakeDemo() {
  const { ref, step } = useLoop(11, 1000);
  const frames = 10;
  const lines = ["00:08  add two cups of flour", "00:21  whisk until smooth", "00:41  a pinch of sugar"];
  return (
    <Frame frameRef={ref} bg="linear-gradient(135deg,#f3ffd2,#d9f590)" title="kubricks · video eval">
      <Label>frames</Label>
      <div className="relative mt-[0.5cqw] flex gap-[0.5cqw]">
        {Array.from({ length: frames }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-[4.2cqw] flex-1 rounded-[0.5cqw] transition-colors duration-500",
              i < step * 2 ? "bg-[#1f2a0a]/80" : "bg-black/5"
            )}
          />
        ))}
        <div
          className="absolute -top-[0.4cqw] h-[5cqw] w-[0.25cqw] bg-[#b4e33d] transition-all duration-1000"
          style={{ left: `${Math.min(100, step * 20)}%` }}
        />
      </div>
      <div className="mt-[1.2cqw] grid grid-cols-[42%_1fr] gap-[1.6cqw]">
        <div className="space-y-[0.4cqw] font-mono">
          <Label className="font-sans">whisper transcript</Label>
          {lines.map((l, i) => (
            <Show key={l} on={step > 1 + i}>
              <p className="truncate text-black/70">{l}</p>
            </Show>
          ))}
        </div>
        <div className="space-y-[0.6cqw]">
          <Label>model vs gold</Label>
          <Show on={step > 5}>
            <p className="flex items-center gap-[0.8cqw]">
              <span className="opacity-60">00:41 adds</span> salt <span className="opacity-40">vs</span> sugar
              <span className="ml-auto rounded-full bg-red-100 px-[0.8cqw] text-red-600">hallucination</span>
            </p>
          </Show>
          <Show on={step > 6}>
            <p className="flex items-center gap-[0.8cqw]">
              <span className="opacity-60">order</span> whisk → flour
              <span className="ml-auto rounded-full bg-amber-100 px-[0.8cqw] text-amber-700">temporal error</span>
            </p>
          </Show>
          <Show on={step > 7}>
            <p className="flex items-center gap-[0.8cqw]">
              <span className="opacity-60">00:08 adds</span> flour
              <span className="ml-auto rounded-full bg-emerald-100 px-[0.8cqw] text-emerald-700">matches gold</span>
            </p>
          </Show>
        </div>
      </div>
    </Frame>
  );
}

/* SideShift: messaging served from cache (DB load drops ~95%), then an in-app contract signature. */
export function SideshiftDemo() {
  const { ref, step } = useLoop(11, 1000);
  const msgs: [string, boolean][] = [
    ["Can you cover Saturday's shift?", false],
    ["Yes, 9am works", true],
    ["Sending the agreement now", false],
  ];
  const cached = step > 4;
  return (
    <Frame frameRef={ref} bg="linear-gradient(135deg,#eef0f4,#d9dee7)" title="sideshift">
      <div className="grid h-full grid-cols-[46%_1fr] gap-[1.6cqw]">
        <div className="flex flex-col gap-[0.8cqw]">
          <Label>messages</Label>
          {msgs.map(([m, mine], i) => (
            <Show key={m} on={step > i} className={mine ? "self-end" : "self-start"}>
              <p className={cn("rounded-[1cqw] px-[1.1cqw] py-[0.6cqw]", mine ? "bg-[#141414] text-white" : "bg-black/5")}>{m}</p>
            </Show>
          ))}
          <Show on={step > 3} className="self-start">
            <p className="rounded-[1cqw] border border-black/10 px-[1.1cqw] py-[0.6cqw]">📄 Shift agreement</p>
          </Show>
        </div>
        <div className="flex flex-col gap-[1.2cqw]">
          <div className="rounded-[0.9cqw] border border-black/10 p-[1.2cqw]">
            <Label>db reads / min</Label>
            <div className="mt-[0.6cqw] flex h-[7cqw] items-end gap-[1.4cqw]">
              <div className="flex h-full w-[5cqw] flex-col justify-end">
                <div className="h-full rounded-t-[0.5cqw] bg-black/20" />
              </div>
              <div className="flex h-full w-[5cqw] flex-col justify-end">
                <div
                  className={cn("rounded-t-[0.5cqw] transition-all duration-1000", cached ? "bg-emerald-500" : "bg-black/20")}
                  style={{ height: cached ? "5%" : "100%" }}
                />
              </div>
              <p className={cn("text-[length:1.3cqw] transition-opacity", cached ? "opacity-100" : "opacity-0")}>
                <span className="block text-[length:2.2cqw] font-semibold text-emerald-600">−95%</span>
                Redis + TanStack Query cache
              </p>
            </div>
          </div>
          <Show on={step > 5} className="rounded-[0.9cqw] border border-black/10 p-[1.2cqw]">
            <Label>shift agreement · sign in app</Label>
            <svg viewBox="0 0 200 40" className="mt-[0.4cqw] h-[4cqw] w-full">
              <path
                d="M5 30 C 25 5, 35 35, 55 18 S 85 30, 100 14 S 130 34, 150 16 S 180 26, 195 12"
                fill="none"
                stroke="#141414"
                strokeWidth="2.5"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray={1}
                strokeDashoffset={step > 6 ? 0 : 1}
                style={{ transition: "stroke-dashoffset 1.2s ease" }}
              />
            </svg>
            <p className={cn("font-medium text-emerald-600 transition-opacity", step > 7 ? "opacity-100" : "opacity-0")}>✓ signed by both sides</p>
          </Show>
        </div>
      </div>
    </Frame>
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

/* Curator: role agents in one workspace streaming tool calls across tenants. */
export function CuratorDemo() {
  const { ref, step } = useLoop(9, 1100);
  const calls: [string, string, string][] = [
    ["sales", 'search_catalog("linen midi dress")', "24 items"],
    ["ops", "update_inventory(SKU-221, −3)", "ok"],
    ["support", "draft_reply(order #1043)", "ok"],
    ["ops", "sync_storefront()", "ok"],
  ];
  const activeAgent = calls[Math.min(calls.length - 1, Math.max(0, step - 1))][0];
  return (
    <Frame frameRef={ref} bg="linear-gradient(135deg,#dcefff,#a9d4ff)" title="curator · workspace">
      <div className="flex items-center gap-[0.8cqw]">
        {["Brand A", "Brand B"].map((t, i) => (
          <span
            key={t}
            className={cn(
              "rounded-full px-[1.1cqw] py-[0.3cqw] transition-colors",
              (step > 5 ? 1 : 0) === i ? "bg-[#1e88e5] text-white" : "bg-black/5 text-black/50"
            )}
          >
            {t}
          </span>
        ))}
        <span className="ml-auto flex items-center gap-[0.6cqw] text-black/50">
          <span className="h-[0.8cqw] w-[0.8cqw] animate-pulse rounded-full bg-emerald-500" /> websocket · streaming
        </span>
      </div>
      <div className="mt-[1.4cqw] grid grid-cols-[24%_1fr] gap-[1.6cqw]">
        <div className="space-y-[0.7cqw]">
          <Label>agents</Label>
          {["sales", "ops", "support"].map((a) => (
            <p
              key={a}
              className={cn(
                "rounded-[0.7cqw] px-[1cqw] py-[0.5cqw] capitalize transition-colors",
                step > 0 && activeAgent === a ? "bg-[#1e88e5]/15 font-medium text-[#1e6fc0]" : "bg-black/[0.03] text-black/60"
              )}
            >
              {a} agent
            </p>
          ))}
        </div>
        <div className="space-y-[0.8cqw] font-mono">
          <Label className="font-sans">tool calls</Label>
          {calls.map(([agent, call, result], i) => (
            <Show key={call} on={step > i}>
              <p className="flex items-center gap-[1cqw]">
                <span className="w-[7.5cqw] shrink-0 text-[#1e6fc0]">{agent}</span>
                <span className="min-w-0 truncate">{call}</span>
                <span className="ml-auto shrink-0 text-emerald-600">{result === "ok" ? "✓" : result}</span>
              </p>
            </Show>
          ))}
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

/* AbbVie: ETL over 120K+ oncology reports into FAISS, then a semantic query returns ranked trials. */
export function AbbvieDemo() {
  const { ref, step } = useLoop(12, 1000);
  const ingested = Math.min(120, step * 30);
  const query = "EGFR-mutant NSCLC · second line";
  const typed = query.slice(0, Math.max(0, Math.min(query.length, (step - 4) * 12)));
  const hits: [string, string, number][] = [
    ["NCT-0421", "Osimertinib after progression, phase II", 0.94],
    ["NCT-1187", "EGFR TKI + chemo combination", 0.89],
    ["RPT-55302", "Resistance mechanisms, T790M", 0.83],
  ];
  return (
    <Frame frameRef={ref} bg="linear-gradient(135deg,#e6e9f2,#bcc4da)" title="oncology search · R&D">
      <div className="grid h-full grid-cols-[30%_1fr] gap-[1.6cqw]">
        <div className="flex flex-col gap-[0.9cqw]">
          <Label>etl</Label>
          {["extract pdfs", "chunk + clean", "embed", "index faiss"].map((s, i) => (
            <p key={s} className="flex items-center gap-[0.8cqw]">
              <span
                className={cn(
                  "h-[0.9cqw] w-[0.9cqw] shrink-0 rounded-full transition-colors duration-500",
                  step > i ? "bg-[#071d49]" : "bg-black/10"
                )}
              />
              <span className={cn("transition-opacity", step > i ? "opacity-100" : "opacity-40")}>{s}</span>
            </p>
          ))}
          <div className="mt-auto rounded-[0.8cqw] border border-black/10 p-[1cqw]">
            <p className="text-[length:2.4cqw] font-semibold tabular-nums text-[#071d49]">{ingested}K+</p>
            <p className="text-black/50">reports indexed</p>
          </div>
        </div>
        <div className="flex flex-col gap-[1.1cqw]">
          <div className="flex items-center gap-[1cqw] rounded-[0.9cqw] border border-black/10 px-[1.4cqw] py-[0.9cqw]">
            <span className="opacity-40">search</span>
            <span className="font-medium">
              {typed}
              <span
                className={cn(
                  "ml-[0.2cqw] inline-block h-[1.8cqw] w-[0.15cqw] translate-y-[0.3cqw] bg-black",
                  step > 3 && typed.length < query.length ? "animate-pulse" : "opacity-0"
                )}
              />
            </span>
            <Show on={step > 7} className="ml-auto">
              <span className="rounded-full bg-[#071d49] px-[0.9cqw] text-white">~3× faster</span>
            </Show>
          </div>
          <div className="space-y-[0.8cqw]">
            {hits.map(([id, title, score], i) => (
              <Show key={id} on={step > 6 + i}>
                <div className="flex items-center gap-[1cqw] rounded-[0.8cqw] bg-black/[0.03] px-[1.2cqw] py-[0.6cqw]">
                  <span className="shrink-0 whitespace-nowrap font-mono text-[#071d49]">{id}</span>
                  <span className="min-w-0 truncate">{title}</span>
                  <span className="ml-auto shrink-0 tabular-nums opacity-60">{score.toFixed(2)}</span>
                </div>
              </Show>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* Rumor: event search misses, then the same search hits Redis and latency drops ~85%. */
export function RumorDemo() {
  const { ref, step } = useLoop(11, 1000);
  const cached = step > 5;
  const events: [string, string][] = [
    ["Rooftop set · DJ Kova", "tonight · 0.4 mi"],
    ["Warehouse open air", "fri · 1.2 mi"],
    ["Late-night jazz", "sat · 0.8 mi"],
  ];
  const query = cached ? "rooftop tonight" : "rooftop tonight".slice(0, Math.min(15, step * 6));
  return (
    <Frame frameRef={ref} dark bg="linear-gradient(135deg,#141414,#3a3a3f)" title="rumor · event search">
      <div className="grid h-full grid-cols-[46%_1fr] gap-[1.6cqw]">
        <div className="flex flex-col gap-[0.8cqw]">
          <div className="rounded-full bg-white/10 px-[1.4cqw] py-[0.7cqw] text-white/80">⌕ {query}</div>
          {events.map(([name, meta], i) => (
            <Show key={name} on={(step > 2 + i && step < 6) || step > 6}>
              <div className="flex items-center gap-[1cqw] rounded-[0.9cqw] bg-white/[0.06] px-[1.2cqw] py-[0.7cqw]">
                <span className="h-[3cqw] w-[3cqw] shrink-0 rounded-[0.6cqw] bg-gradient-to-br from-fuchsia-500 to-amber-400" />
                <span className="min-w-0">
                  <span className="block truncate">{name}</span>
                  <span className="block text-[length:1.3cqw] text-white/50">{meta}</span>
                </span>
              </div>
            </Show>
          ))}
        </div>
        <div className="flex flex-col gap-[1.2cqw] font-mono">
          <Label className="font-sans">request</Label>
          <p className="flex items-center gap-[1cqw]">
            <span className="text-white/50">GET /events/search</span>
            <span
              className={cn(
                "ml-auto rounded-full px-[0.8cqw] transition-colors",
                step < 2 ? "opacity-0" : cached ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
              )}
            >
              {cached ? "redis hit" : "cache miss"}
            </span>
          </p>
          <div>
            <Label className="font-sans">latency</Label>
            <div className="mt-[0.6cqw] h-[1.4cqw] rounded-full bg-white/10">
              <div
                className={cn("h-full rounded-full transition-all duration-700", cached ? "bg-emerald-400" : "bg-amber-400")}
                style={{ width: step < 2 ? "0%" : cached ? "15%" : "100%" }}
              />
            </div>
            <p className="mt-[0.5cqw] tabular-nums text-white/70">{step < 2 ? "—" : cached ? "62 ms" : "410 ms"}</p>
          </div>
          <Show on={step > 6} className="mt-auto">
            <p className="font-sans">
              <span className="block text-[length:2.6cqw] font-semibold text-emerald-400">−85%</span>
              <span className="text-white/60">search latency · 50K+ users</span>
            </p>
          </Show>
        </div>
      </div>
    </Frame>
  );
}
