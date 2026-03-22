export default function App() {
  const heroStats = [
    { label: 'Core clarity', value: 'High', detail: '+18% vs last month' },
    { label: 'Expansion readiness', value: 'Medium+', detail: '2 adjacent clusters' },
    { label: 'Content waste', value: '19%', detail: '-4 pts after pruning' },
  ];

  const portfolioRows = [
    {
      label: 'Conversion drivers',
      width: '85%',
      topic: 'Budget laptop comparisons',
      fillClass: 'from-sky-400 via-blue-400 to-indigo-400',
    },
    {
      label: 'Loyalty builders',
      width: '68%',
      topic: 'Student laptop buying guide',
      fillClass: 'from-indigo-400 via-violet-400 to-violet-500',
    },
    {
      label: 'Discovery reach',
      width: '52%',
      topic: 'Cheap AI study tools',
      fillClass: 'from-cyan-400 via-sky-400 to-blue-400',
    },
    {
      label: 'Low-leverage topics',
      width: '24%',
      topic: 'Weekly tech news reaction',
      fillClass: 'from-slate-400 via-slate-500 to-slate-500',
    },
  ];

  return (
    <div className="size-full bg-slate-100 p-5">
      <div className="mx-auto flex aspect-[4/3] w-full max-w-[1280px] flex-col overflow-hidden rounded-[22px] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.14)]">
        <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/85 px-5 py-2.5">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Creator Intelligence</div>
            <h1 className="text-lg font-semibold text-slate-900">Channel DNA</h1>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700">
              Strategy Score 86
            </span>
            <span>Updated 2h ago</span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-12 gap-3 p-3.5">
          <section className="col-span-12 grid grid-cols-12 gap-3 rounded-2xl bg-gradient-to-r from-[#1d46d9] via-[#3f47de] to-[#5a34cc] p-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_30px_rgba(56,45,156,0.25)]">
            <div className="col-span-4 flex flex-col justify-between pr-1">
              <div className="space-y-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">PRIMARY INSIGHT</p>
                <h2 className="text-[25px] font-semibold leading-[1.08]">
                  Affordable laptop
                  <br />
                  decision content is
                  <br />
                  your growth engine.
                </h2>
                <p className="text-[12px] leading-snug text-white/85">
                  Comparison and buyer-intent formats convert better than broad commentary.
                </p>
              </div>
              <div className="mt-3 space-y-2">
                <div className="rounded-lg border border-white/30 bg-white/18 px-3 py-2.5 shadow-sm">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">Best lane</div>
                  <div className="mt-0.5 text-[15px] font-semibold leading-tight text-white">Budget laptop comparisons</div>
                </div>
                <div className="rounded-lg border border-white/30 bg-white/15 px-3 py-2.5 shadow-sm">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">Next test</div>
                  <div className="mt-0.5 text-[15px] font-semibold leading-tight text-white">Student setup bundles</div>
                </div>
              </div>
            </div>

            <div className="col-span-5 rounded-xl border border-white/20 bg-[#ffffff14] p-3 backdrop-blur-sm">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h3 className="text-[13px] font-semibold text-white">Topic portfolio overview</h3>
                  <p className="text-[11px] text-white/75">What your channel wins with overall</p>
                </div>
                <span className="rounded-full border border-white/25 bg-white/10 px-2 py-0.5 text-[10px] text-white/80">Last 8 weeks</span>
              </div>

              <div className="space-y-2.5 rounded-lg border border-white/15 bg-[#0f1e6b]/20 p-2.5">
                {portfolioRows.map((row) => (
                  <div key={row.label} className="grid grid-cols-[1.35fr_2.2fr_1.8fr] items-center gap-2">
                    <div className="text-[11px] font-medium text-white/92">{row.label}</div>
                    <div className="h-2 rounded-full bg-white/18">
                      <div className={`h-full rounded-full bg-gradient-to-r ${row.fillClass}`} style={{ width: row.width }} />
                    </div>
                    <div className="justify-self-end rounded-full border border-white/25 bg-white/15 px-2 py-0.5 text-[10px] font-medium text-white/90">
                      {row.topic}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-[10px] text-white/65">Stronger bar = stronger channel contribution</p>
            </div>

            <div className="col-span-3 grid gap-2">
              {heroStats.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-white/22 bg-white/96 px-3 py-2 text-slate-900 shadow-sm">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">{metric.label}</div>
                  <div className="mt-0.5 text-lg font-semibold leading-none text-slate-900">{metric.value}</div>
                  <div className="mt-1 text-[11px] text-slate-500">{metric.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="col-span-12 grid grid-cols-12 gap-3 rounded-2xl bg-[linear-gradient(120deg,rgba(72,93,255,0.14),rgba(121,90,255,0.07),rgba(255,255,255,0.8))] p-3">
            <div className="col-span-7 rounded-xl border border-indigo-200/70 bg-white/92 p-3.5 shadow-[0_6px_16px_rgba(80,70,180,0.12)]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-500">RECOMMENDED NEXT MOVE</p>
              <h3 className="mt-1 text-[22px] font-semibold leading-tight text-slate-900">Run a 21-day Budget Tech Growth Sprint</h3>
              <p className="mt-2 text-[13px] leading-snug text-slate-600">
                Publish one comparison, one student decision guide, and one trend test each week.
              </p>
              <button className="mt-3 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#3f6cff] via-[#5c5bfa] to-[#7a47e8] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(79,92,250,0.35)]">
                Open Growth Map
              </button>
            </div>

            <div className="col-span-5 grid grid-rows-3 gap-2">
              {[
                {
                  label: 'CORE REINFORCEMENT',
                  title: 'Repeat budget laptop showdown format',
                  cardClass: 'bg-blue-50/80 ring-blue-100',
                  labelClass: 'text-blue-700/80',
                },
                {
                  label: 'SAFE EXPANSION',
                  title: 'Bridge into student productivity kits',
                  cardClass: 'bg-violet-50/80 ring-violet-100',
                  labelClass: 'text-violet-700/80',
                },
                {
                  label: 'TREND PROBE',
                  title: 'Test low-cost AI study tools weekly',
                  cardClass: 'bg-cyan-50/80 ring-cyan-100',
                  labelClass: 'text-cyan-700/80',
                },
              ].map((path) => (
                <div key={path.label} className={`rounded-xl px-3.5 py-3 ring-1 ${path.cardClass}`}>
                  <div className={`text-[10px] uppercase tracking-[0.16em] ${path.labelClass}`}>{path.label}</div>
                  <div className="mt-1 text-[16px] font-semibold leading-tight text-slate-900">{path.title}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="col-span-7 rounded-2xl bg-white p-3 ring-1 ring-slate-200/90">
            <div className="mb-2.5 flex items-start justify-between">
              <div>
                <h3 className="text-[19px] font-semibold leading-none text-slate-900">How Your Topics Actually Work</h3>
                <p className="mt-1 text-[11px] text-slate-500">Topic performance map</p>
              </div>
            </div>

            <div className="mb-2 flex flex-wrap gap-1.5 text-[10px]">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">X-axis: Viewer loyalty →</span>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">Y-axis: Growth potential ↑</span>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">Bubble size: Conversion impact</span>
            </div>

            <div className="relative h-[230px] overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200">
              <div className="absolute left-7 right-6 bottom-8 top-5">
                <div className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.12em] text-slate-500">High growth potential</div>
                <div className="absolute -right-1 bottom-0 text-[10px] uppercase tracking-[0.12em] text-slate-500">High loyalty</div>
                <div className="absolute -left-1 bottom-0 text-[10px] uppercase tracking-[0.12em] text-slate-500">Low / Low</div>

                <div className="absolute inset-0">
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-300" />
                  <div className="absolute bottom-0 top-0 left-1/2 w-px bg-slate-300" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[12px] text-slate-500">→</div>
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 text-[12px] text-slate-500">↑</div>
                </div>

                <div className="absolute left-2 top-1 text-[10px] font-medium uppercase tracking-[0.12em] text-blue-700/70">Core Growth Drivers</div>
                <div className="absolute right-2 top-1 text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-700/70">Audience Builders</div>
                <div className="absolute left-2 bottom-1 text-[10px] font-medium uppercase tracking-[0.12em] text-violet-700/70">Reach Boosters</div>
                <div className="absolute right-2 bottom-1 text-[10px] font-medium uppercase tracking-[0.12em] text-amber-700/70">Low Leverage</div>

                <div className="absolute left-[18%] top-[22%] flex h-[72px] w-[72px] items-center justify-center rounded-full bg-blue-600 px-2 text-center text-[10px] font-semibold leading-tight text-white shadow-md">
                  Budget laptop comparisons
                </div>
                <div className="absolute right-[14%] top-[24%] flex h-[62px] w-[62px] items-center justify-center rounded-full bg-emerald-600 px-2 text-center text-[10px] font-semibold leading-tight text-white shadow-sm">
                  Student laptop buying guide
                </div>
                <div className="absolute left-[22%] bottom-[18%] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-violet-500 px-2 text-center text-[9px] font-semibold leading-tight text-white shadow-sm">
                  Cheap AI study tools
                </div>
                <div className="absolute right-[18%] bottom-[20%] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-amber-500 px-1.5 text-center text-[8px] font-semibold leading-tight text-white shadow-sm">
                  Weekly tech news reaction
                </div>
              </div>
            </div>
          </section>

          <section className="col-span-5 rounded-2xl bg-[linear-gradient(170deg,rgba(99,102,241,0.11),rgba(255,255,255,0.95))] p-3 ring-1 ring-indigo-100/90">
            <h3 className="text-[18px] font-semibold leading-none text-slate-900">Things You Might Be Misreading</h3>
            <p className="mt-1 text-[11px] text-slate-500">Recent diagnosis signals</p>

            <div className="mt-2.5 space-y-2">
              <div className="rounded-xl bg-white/92 p-2.5 ring-1 ring-violet-200/80">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-700">UNDERVALUED OPPORTUNITIES</span>
                  <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] text-violet-700">Demand rising</span>
                </div>
                <div className="text-[14px] font-semibold leading-tight text-slate-800">Student laptop buying guide</div>
                <div className="mt-1 text-[11px] text-slate-600">High intent signals, low channel coverage.</div>
              </div>

              <div className="rounded-xl bg-white/92 p-2.5 ring-1 ring-amber-200/85">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-700">NARROW WINS</span>
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] text-amber-700">High engagement, small reach</span>
                </div>
                <div className="text-[14px] font-semibold leading-tight text-slate-800">Detailed gadget teardown</div>
                <div className="mt-1 text-[11px] text-slate-600">Strong core response, weak new viewer conversion.</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
