export default function App() {
  const heroMetrics = [
    { label: 'Core clarity', value: 'High', detail: '+18% vs last month' },
    { label: 'Expansion readiness', value: 'Medium+', detail: '2 adjacent clusters' },
    { label: 'Content waste', value: '19%', detail: '-4 pts after pruning' },
  ];

  return (
    <div className="size-full bg-slate-100 p-5">
      <div className="mx-auto flex h-full w-full max-w-[1280px] aspect-[4/3] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
        <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/90 px-5 py-2.5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Creator Intelligence</p>
            <h1 className="text-lg font-semibold tracking-tight text-slate-900">Channel DNA</h1>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
              Strategy Score 86
            </span>
            <span>Updated 2h ago</span>
          </div>
        </div>

        <main className="grid flex-1 grid-rows-[auto_auto_1fr] gap-3 p-3.5">
          <section className="grid grid-cols-12 gap-3 rounded-2xl bg-gradient-to-r from-[#2747db] via-[#4d44e1] to-[#6b3fdb] px-4 py-3.5 text-white shadow-[0_16px_36px_rgba(50,46,150,0.35)]">
            <div className="col-span-4 flex flex-col justify-between gap-3">
              <div className="space-y-2">
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/70">Primary Insight</p>
                <h2 className="text-[25px] font-semibold leading-[1.1] tracking-tight">
                  Affordable laptop decision content is your growth engine.
                </h2>
                <p className="text-sm leading-snug text-white/85">
                  Comparison and buyer-intent formats convert much better than broad tech commentary.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] font-medium">
                <span className="rounded-md border border-white/30 bg-white/12 px-2.5 py-1">Best lane: Budget laptop comparisons</span>
                <span className="rounded-md border border-white/25 bg-white/10 px-2.5 py-1">Next test: Student setup bundles</span>
              </div>
            </div>

            <div className="col-span-5 rounded-xl border border-white/20 bg-slate-900/20 p-3 backdrop-blur-[2px]">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Topic signal map</h3>
                <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] text-white/80">
                  8-week pattern
                </span>
              </div>

              <div className="relative h-[170px] overflow-hidden rounded-lg border border-white/15 bg-gradient-to-br from-[#1a2f98]/70 to-[#35186e]/60 p-2.5">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 opacity-35">
                  {Array.from({ length: 30 }).map((_, index) => (
                    <div key={index} className="border border-white/10" />
                  ))}
                </div>

                <div className="relative z-10 space-y-2 pt-1">
                  {[82, 66, 90, 58, 74].map((width, idx) => (
                    <div key={idx} className="relative h-5 rounded-md border border-white/10 bg-white/5 px-1.5 py-1">
                      <div
                        className="h-full rounded-sm bg-gradient-to-r from-cyan-300/80 via-blue-300/80 to-violet-300/80"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute right-5 top-12 rounded-full border border-cyan-200/60 bg-cyan-300/20 px-2 py-0.5 text-[10px] font-medium text-cyan-100">
                  Buyer intent
                </div>
                <div className="absolute left-5 top-[102px] rounded-full border border-violet-200/60 bg-violet-300/20 px-2 py-0.5 text-[10px] font-medium text-violet-100">
                  Repeat viewers
                </div>
                <div className="absolute right-9 bottom-5 rounded-full border border-blue-200/60 bg-blue-300/20 px-2 py-0.5 text-[10px] font-medium text-blue-100">
                  Discovery spikes
                </div>

                <div className="absolute left-[43%] top-[78px] rounded-md border border-emerald-200/70 bg-emerald-300/25 px-2 py-1 text-[10px] font-semibold text-emerald-100 shadow-sm">
                  Winning zone
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                  {[1, 1, 1, 1, 1, 1].map((_, idx) => (
                    <span
                      key={idx}
                      className="size-1.5 rounded-full bg-white/70"
                      style={{ opacity: 0.35 + idx * 0.1 }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-3 right-3 flex items-end gap-1">
                  {[8, 11, 9, 15, 12].map((bar, idx) => (
                    <span key={idx} className="w-1 rounded-sm bg-white/50" style={{ height: `${bar}px` }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-3 grid gap-2">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-white/25 bg-white/95 px-3 py-2 text-slate-900 shadow-[0_3px_10px_rgba(15,23,42,0.12)]"
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">{metric.label}</p>
                  <div className="mt-0.5 flex items-end justify-between">
                    <p className="text-[19px] font-semibold leading-none tracking-tight">{metric.value}</p>
                    <p className="text-[10px] font-medium text-slate-500">{metric.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-12 gap-3 rounded-xl bg-gradient-to-r from-indigo-50 via-white to-violet-50 p-3">
            <div className="col-span-7 rounded-xl border border-indigo-200/80 bg-white px-4 py-3 shadow-[0_8px_20px_rgba(99,102,241,0.14)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-600">Recommended Next Move</p>
              <h3 className="mt-1.5 text-[22px] font-semibold leading-tight tracking-tight text-slate-900">
                Run a 21-day Budget Tech Growth Sprint
              </h3>
              <p className="mt-1.5 text-sm leading-snug text-slate-600">
                Publish one comparison, one student decision guide, and one rapid trend test each week.
              </p>
              <button className="mt-3.5 inline-flex items-center rounded-lg bg-gradient-to-r from-[#3f6fff] via-[#5d59f6] to-[#7f4eea] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(79,70,229,0.35)]">
                Open Growth Map
              </button>
            </div>

            <div className="col-span-5 grid grid-rows-3 gap-2">
              {[
                { title: 'Core Reinforcement', note: 'Repeat budget laptop showdown format' },
                { title: 'Safe Expansion', note: 'Bridge into student productivity kits' },
                { title: 'Trend Probe', note: 'Test low-cost AI study tools weekly' },
              ].map((card) => (
                <div key={card.title} className="rounded-lg bg-white/80 px-3 py-2.5 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.25)]">
                  <p className="text-xs font-semibold text-slate-800">{card.title}</p>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">{card.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid min-h-0 grid-cols-12 gap-3">
            <div className="col-span-7 flex min-h-0 flex-col rounded-xl bg-white p-3 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.24)]">
              <div className="mb-2 flex items-end justify-between">
                <div>
                  <h3 className="text-[20px] font-semibold leading-none tracking-tight text-slate-900">How Your Topics Actually Work</h3>
                  <p className="mt-1 text-xs text-slate-500">Reach potential (Y) vs audience loyalty (X)</p>
                </div>
                <p className="text-[11px] text-slate-500">Bubble size = conversion impact</p>
              </div>

              <div className="relative flex-1 rounded-lg bg-slate-50/80 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.3)]">
                <div className="absolute inset-3 overflow-hidden rounded-md">
                  <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 opacity-60">
                    {Array.from({ length: 25 }).map((_, idx) => (
                      <div key={idx} className="border border-slate-200/80" />
                    ))}
                  </div>
                  <div className="absolute inset-y-0 left-1/2 w-px bg-slate-300" />
                  <div className="absolute inset-x-0 top-1/2 h-px bg-slate-300" />

                  <div className="absolute left-3 top-3 text-[10px] font-medium text-blue-600">Core Growth Drivers</div>
                  <div className="absolute right-3 top-3 text-[10px] font-medium text-emerald-600">Audience Builders</div>
                  <div className="absolute left-3 bottom-3 text-[10px] font-medium text-violet-600">Reach Boosters</div>
                  <div className="absolute right-3 bottom-3 text-[10px] font-medium text-amber-600">Low Leverage</div>

                  <div className="absolute left-[18%] top-[20%] rounded-full bg-blue-600 px-3.5 py-1.5 text-[11px] font-semibold text-white shadow">
                    Best laptops under $500
                  </div>
                  <div className="absolute left-[26%] top-[34%] rounded-full border border-blue-300 bg-blue-100 px-3 py-1 text-[10px] font-medium text-blue-700">
                    Budget laptop comparison 2026
                  </div>

                  <div className="absolute right-[14%] top-[24%] rounded-full bg-emerald-600 px-3.5 py-1.5 text-[11px] font-semibold text-white shadow">
                    Student laptop buying guide
                  </div>
                  <div className="absolute right-[21%] top-[38%] rounded-full border border-emerald-300 bg-emerald-100 px-2.5 py-1 text-[10px] font-medium text-emerald-700">
                    Campus setup checklist
                  </div>

                  <div className="absolute left-[14%] bottom-[28%] rounded-full border border-violet-300 bg-violet-100 px-2.5 py-1 text-[10px] font-medium text-violet-700">
                    Amazon tech under $30
                  </div>
                  <div className="absolute left-[24%] bottom-[15%] rounded-full border border-violet-300 bg-violet-100/90 px-2.5 py-1 text-[10px] text-violet-700">
                    Cheap AI gadgets review
                  </div>

                  <div className="absolute right-[14%] bottom-[24%] rounded-full border border-amber-300 bg-amber-100 px-2.5 py-1 text-[10px] font-medium text-amber-700">
                    Weekly tech news reaction
                  </div>
                  <div className="absolute right-[18%] bottom-[11%] rounded-full border border-amber-300 bg-amber-100/90 px-2.5 py-1 text-[10px] text-amber-700">
                    Accessory teardown deep dive
                  </div>
                </div>

                <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] tracking-wide text-slate-500">Reach</div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] tracking-wide text-slate-500">Loyalty</div>
              </div>
            </div>

            <div className="col-span-5 flex min-h-0 flex-col rounded-xl bg-gradient-to-b from-slate-50 to-slate-100/70 p-3 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.28)]">
              <h3 className="text-[20px] font-semibold leading-none tracking-tight text-slate-900">Things You Might Be Misreading</h3>
              <p className="mt-1 text-xs text-slate-500">Diagnosis panel from recent topic behavior</p>

              <div className="mt-2.5 grid flex-1 grid-rows-2 gap-2">
                <div className="rounded-lg bg-white px-3 py-2.5 shadow-[inset_0_0_0_1px_rgba(167,139,250,0.35)]">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-600">Undervalued Opportunities</p>
                    <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] font-medium text-violet-600">Demand rising</span>
                  </div>
                  <div className="space-y-2 text-[11px] leading-snug text-slate-600">
                    <div>
                      <p className="font-semibold text-slate-800">Student laptop buying guide</p>
                      <p>Historically underproduced, but intent signals are strong.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Cheap AI study tools</p>
                      <p>Search momentum is up while channel coverage is still low.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white px-3 py-2.5 shadow-[inset_0_0_0_1px_rgba(251,191,36,0.35)]">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-600">Narrow Wins</p>
                    <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-600">
                      High engagement, small reach
                    </span>
                  </div>
                  <div className="space-y-2 text-[11px] leading-snug text-slate-600">
                    <div>
                      <p className="font-semibold text-slate-800">Detailed gadget teardown</p>
                      <p>Strong core audience response, weak new viewer conversion.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Accessory deep dives</p>
                      <p>Reliable watch time in niche pockets, limited discovery reach.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
