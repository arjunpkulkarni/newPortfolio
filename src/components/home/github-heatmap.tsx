type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const WEEKS = 30;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LEVEL_CLASS = [
  "bg-secondary",
  "bg-[hsl(140_40%_80%)] dark:bg-[hsl(140_35%_22%)]",
  "bg-[hsl(140_45%_62%)] dark:bg-[hsl(140_40%_32%)]",
  "bg-[hsl(140_50%_45%)] dark:bg-[hsl(140_45%_44%)]",
  "bg-[hsl(140_60%_30%)] dark:bg-[hsl(140_55%_58%)]",
];

async function getContributions(username: string): Promise<Day[] | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 60 * 60 * 12 } }
    );
    if (!res.ok) return null;
    const json = (await res.json()) as { contributions?: Day[] };
    return json.contributions?.length ? json.contributions : null;
  } catch {
    return null;
  }
}

// Recent GitHub activity grid. Renders nothing if the data can't be fetched.
export async function GithubHeatmap({ username, profileUrl }: { username: string; profileUrl: string }) {
  const all = await getContributions(username);
  if (!all) return null;

  const today = new Date().toISOString().slice(0, 10);
  const days = all.filter((d) => d.date <= today);

  // Start on a Sunday so each column is one week.
  let start = Math.max(0, days.length - WEEKS * 7);
  while (start > 0 && new Date(days[start].date + "T00:00:00Z").getUTCDay() !== 0) start--;
  const recent = days.slice(start);

  const weeks: Day[][] = [];
  for (let i = 0; i < recent.length; i += 7) weeks.push(recent.slice(i, i + 7));

  const total = recent.reduce((sum, d) => sum + d.count, 0);

  let lastMonth = -1;
  const monthLabels = weeks.map((week) => {
    const month = new Date(week[0].date + "T00:00:00Z").getUTCMonth();
    if (month === lastMonth) return "";
    lastMonth = month;
    return MONTHS[month];
  });

  return (
    <div className="mt-8 rounded-2xl border border-border/70 p-4 sm:p-5">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium text-foreground underline-offset-2 hover:underline"
        >
          {total.toLocaleString()} contributions
        </a>
        <span className="text-[12px] text-muted-foreground">last {WEEKS} weeks</span>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex flex-col gap-1">
          <div className="flex gap-[3px] pl-7">
            {monthLabels.map((label, i) => (
              <span key={i} className="w-[11px] overflow-visible whitespace-nowrap text-[10px] text-muted-foreground">
                {label}
              </span>
            ))}
          </div>
          <div className="flex gap-[3px]">
            <div className="flex w-6 flex-col gap-[3px] text-[10px] leading-[11px] text-muted-foreground">
              {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                <span key={i} className="h-[11px]">
                  {d}
                </span>
              ))}
            </div>
            {weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-[3px]">
                {week.map((day) => (
                  <span
                    key={day.date}
                    title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                    className={`h-[11px] w-[11px] rounded-[3px] ${LEVEL_CLASS[day.level]}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
        <span className="mr-1">Less</span>
        {LEVEL_CLASS.map((c, i) => (
          <span key={i} className={`h-[11px] w-[11px] rounded-[3px] ${c}`} />
        ))}
        <span className="ml-1">More</span>
      </div>
    </div>
  );
}
