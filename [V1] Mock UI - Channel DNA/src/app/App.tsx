export default function App() {
  const signalBars = [68, 82, 56, 91, 73, 64, 88, 79];

  return (
    <div className="size-full bg-slate-100 p-6">
      <div className="mx-auto flex h-full w-full max-w-[1280px] aspect-[4/3] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-6 py-3">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Creator Intelligence</div>
            <h1 className="text-lg font-semibold text-slate-900">Channel DNA</h1>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 font-medium text-emerald-700">
              Strategy Score 86
            </span>
            <span>Updated 2h ago</span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-12 gap-4 overflow-hidden p-4">
          <section className="col-span-12 grid grid-cols-12 gap-3 rounded-xl border border-slate-200 bg-gradient-to-r from-[#355dff] via-[#5452f4] to-[#7647e8] p-4 text-white shadow-lg">
            <div className="col-span-5 flex flex-col justify-between">
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/70">Primary insight</p>
                <h2 className="text-xl font-semibold leading-tight">
                  Affordable laptop decision content is your growth engine.
                </h2>
                <p className="text-sm text-white/85">
                  Comparison + buyer intent formats convert 2.3x better than general tech commentary.
                </p>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs">
                <span className="rounded-md border border-white/30 bg-white/15 px-2 py-1">Best lane: Budget laptop comparisons</span>
                <span className="rounded-md border border-white/25 bg-white/10 px-2 py-1">Next test: Student setup bundles</span>
              </div>
            </div>

            <div className="col-span-4 rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between text-xs text-white/75">
                <span>Topic signal intensity</span>
                <span>8-week</span>
              </div>
              <div className="flex h-24 items-end gap-2">
                {signalBars.map((bar, idx) => (
                  <div key={idx} className="flex-1">
                    <div
                      className="w-full rounded-sm bg-gradient-to-t from-white/45 to-white"
                      style={{ height: `${bar}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-white/60">
                <span>General</span>
                <span>Buyer intent</span>
              </div>
            </div>

            <div className="col-span-3 grid grid-rows-3 gap-2 text-slate-900">
              {[
                { label: 'Core Clarity', value: 'High', detail: '+18% vs last month' },
                { label: 'Expansion Readiness', value: 'Medium+', detail: '2 adjacent clusters' },
                { label: 'Content Waste', value: '19%', detail: '-4 pts after pruning' },
              ].map((metric) => (
                <div key={metric.label} className="rounded-lg border border-white/30 bg-white px-3 py-2">
                  <div className="text-[11px] uppercase tracking-wide text-slate-500">{metric.label}</div>
                  <div className="text-base font-semibold text-slate-900">{metric.value}</div>
                  <div className="text-[11px] text-slate-500">{metric.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="col-span-12 grid grid-cols-12 gap-3 rounded-xl border border-indigo-200 bg-indigo-50/40 p-3">
            <div className="col-span-6 rounded-lg border border-indigo-300 bg-white p-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.16em] text-indigo-500">Recommended next move</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Run a 21-day Budget Tech Growth Sprint</h3>
              <p className="mt-1 text-sm text-slate-600">
                Publish one comparison, one student decision guide, and one rapid trend test each week.
              </p>
              <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#4F7FFF] via-[#6A5AF9] to-[#8A51EF] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
                Open Growth Map
              </button>
            </div>

            <div className="col-span-6 grid grid-cols-3 gap-2">
              {[
                { title: 'Core Reinforcement', note: 'Repeat budget laptop showdown format', tone: 'blue' },
                { title: 'Safe Expansion', note: 'Bridge into student productivity kits', tone: 'violet' },
                { title: 'Trend Probe', note: 'Test low-cost AI study tools weekly', tone: 'emerald' },
              ].map((path) => (
                <div
                  key={path.title}
                  className={`rounded-lg border p-3 ${
                    path.tone === 'blue'
                      ? 'border-blue-200 bg-blue-50/70'
                      : path.tone === 'violet'
                        ? 'border-violet-200 bg-violet-50/70'
                        : 'border-emerald-200 bg-emerald-50/70'
                  }`}
                >
                  <div className="text-xs font-semibold text-slate-800">{path.title}</div>
                  <div className="mt-1 text-[11px] leading-relaxed text-slate-600">{path.note}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="col-span-8 rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-3 flex items-end justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900">How Your Topics Actually Work</h3>
                <p className="text-xs text-slate-500">Reach potential (Y) vs audience loyalty (X)</p>
              </div>
              <div className="text-[11px] text-slate-500">Bubble size = conversion impact</div>
            </div>

            <div className="relative h-[255px] rounded-lg border border-slate-200 bg-slate-50">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                {Array.from({ length: 16 }).map((_, idx) => (
                  <div key={idx} className="border border-slate-200/70" />
                ))}
              </div>
              <div className="absolute inset-y-0 left-1/2 w-px bg-slate-300" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-slate-300" />

              <div className="absolute left-4 top-3 rounded bg-blue-100 px-2 py-1 text-[10px] font-medium text-blue-700">Core Growth Drivers</div>
              <div className="absolute right-4 top-3 rounded bg-emerald-100 px-2 py-1 text-[10px] font-medium text-emerald-700">Audience Builders</div>
              <div className="absolute left-4 bottom-3 rounded bg-violet-100 px-2 py-1 text-[10px] font-medium text-violet-700">Reach Boosters</div>
              <div className="absolute right-4 bottom-3 rounded bg-amber-100 px-2 py-1 text-[10px] font-medium text-amber-700">Low Leverage</div>

              <div className="absolute left-[20%] top-[22%] rounded-full bg-blue-600 px-3 py-1 text-[11px] font-medium text-white shadow">Best laptops under $500</div>
              <div className="absolute left-[28%] top-[35%] rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-[10px] text-blue-700">Budget laptop comparison 2026</div>
              <div className="absolute right-[18%] top-[24%] rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-medium text-white shadow">Student laptop buying guide</div>
              <div className="absolute right-[24%] top-[40%] rounded-full border border-emerald-300 bg-emerald-100 px-2.5 py-1 text-[10px] text-emerald-700">Campus setup checklist</div>
              <div className="absolute left-[16%] bottom-[26%] rounded-full border border-violet-300 bg-violet-100 px-2.5 py-1 text-[10px] text-violet-700">Amazon tech under $30</div>
              <div className="absolute left-[30%] bottom-[14%] rounded-full border border-violet-300 bg-violet-100 px-2.5 py-1 text-[10px] text-violet-700">Cheap AI gadgets review</div>
              <div className="absolute right-[18%] bottom-[22%] rounded-full border border-amber-300 bg-amber-100 px-2.5 py-1 text-[10px] text-amber-700">Weekly tech news reaction</div>
              <div className="absolute right-[24%] bottom-[10%] rounded-full border border-amber-300 bg-amber-100 px-2.5 py-1 text-[10px] text-amber-700">Accessory teardown deep dive</div>

              <div className="absolute -left-7 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] tracking-wide text-slate-500">Reach</div>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] tracking-wide text-slate-500">Loyalty</div>
            </div>
          </section>

          <section className="col-span-4 rounded-xl border border-slate-200 bg-slate-50/80 p-4">
            <h3 className="text-base font-semibold text-slate-900">Things You Might Be Misreading</h3>
            <p className="mt-1 text-xs text-slate-500">Diagnosis panel from recent topic behavior</p>

            <div className="mt-3 space-y-3">
              <div className="rounded-lg border border-violet-200 bg-white p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-violet-600">Undervalued Opportunities</span>
                  <span className="text-[10px] text-slate-500">Demand rising</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="font-medium text-slate-800">Student laptop buying guide</div>
                    <div className="text-slate-600">Historically underproduced, but high intent comments and saves.</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">Cheap AI study tools</div>
                    <div className="text-slate-600">Search momentum up while your channel coverage is still low.</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-amber-200 bg-white p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-amber-600">Narrow Wins</span>
                  <span className="text-[10px] text-slate-500">High engagement, small reach</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="font-medium text-slate-800">Detailed gadget teardown</div>
                    <div className="text-slate-600">Strong core audience response, but weak new viewer conversion.</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">Accessory deep dives</div>
                    <div className="text-slate-600">Reliable watch time in niche pockets, limited discovery upside.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
