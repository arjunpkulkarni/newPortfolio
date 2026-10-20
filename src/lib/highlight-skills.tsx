import { Fragment } from "react";
import { DATA } from "@/data/resume";
import { CASE_STUDIES } from "@/data/case-studies";

// Generic tags that read as normal words in a sentence; never bold these.
const SKIP = new Set([
  "Product",
  "Growth",
  "Leadership",
  "Fundraising",
  "Go-to-Market",
  "Architecture",
  "Performance",
  "Scalability",
  "Applied Research",
  "System Design",
  "Enterprise Architecture",
  "Remediation",
  "Simulation",
  "Evals",
  "Linear",
]);

function collectSkills(): string[] {
  const terms = new Set<string>();
  const add = (s?: string) => {
    const t = s?.trim();
    if (t && t.length > 1 && !SKIP.has(t)) terms.add(t);
  };
  Object.values(DATA.skills).forEach((group) => (group as readonly string[]).forEach(add));
  const roles: any[] = [...DATA.work, ...DATA.research, ...DATA.clubs];
  roles.forEach((r) => (r.tasks ?? []).forEach((t: any) => (t.skills ?? []).forEach(add)));
  CASE_STUDIES.forEach((c) => c.stack.forEach(add));
  return Array.from(terms);
}

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");

// Longest terms first so "Next.js API Routes" wins over "Next.js".
const SKILL_RE = new RegExp(
  `(?<![A-Za-z0-9])(${collectSkills()
    .sort((a, b) => b.length - a.length)
    .map(escape)
    .join("|")})(?![A-Za-z0-9+])`,
  "g"
);

// Renders text with every known skill or tool name in bold.
export function HighlightSkills({ text }: { text?: string }) {
  if (!text) return null;
  const parts = text.split(SKILL_RE);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-foreground">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
