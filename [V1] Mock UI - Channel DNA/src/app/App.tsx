export default function App() {
  const heroStats = [
    { label: 'Core clarity', value: 'High', detail: '+18% vs last month' },
    { label: 'Expansion readiness', value: 'Medium+', detail: '2 adjacent clusters' },
    { label: 'Content waste', value: '19%', detail: '-4 pts after pruning' },
  ];

  const signalTracks = [
    { label: 'Comparison lane', width: '88%' },
    { label: 'Buyer guides', width: '72%' },
    { label: 'Deal stacks', width: '54%' },
    { label: 'Trend probes', width: '63%' },
    { label: 'News reactions', width: '36%' },
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
          <section className="col-span-12 grid grid-cols-12 gap-3 rounded-2xl bg-gradient-to-r from-[#1d46d9] via-[#3f47de] to-[#5a34cc] p-3.5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_30px_rgba(56,45,156,0.25)]">
            <div className="col-span-4 flex flex-col justify-between pr-1">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">PRIMARY INSIGHT</p>
                <h2 className="text-[26px] font-semibold leading-[1.08]">
                  Affordable laptop
                  <br />
                  decision content is
                  <br />
                  your growth engine.
                </h2>
                <p className="text-[12px] leading-snug text-white/85">
                  Comparison and buyer-intent formats convert much better than broad tech commentary.
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                <span className="rounded-md border border-white/30 bg-white/15 px-2 py-1">Best lane: Budget laptop comparisons</span>
                <span className="rounded-md border border-white/25 bg-white/10 px-2 py-1">Next test: Student setup bundles</span>
              </div>
            </div>

            <div className="col-span-5 rounded-xl border border-white/20 bg-[#ffffff14] p-3 backdrop-blur-sm">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xs font-medium text-white/90">Topic signal map</h3>
                <span className="rounded-full border border-white/25 bg-white/10 px-2 py-0.5 text-[10px] text-white/75">8-week pattern</span>
              </div>

              <div className="relative h-[174px] overflow-hidden rounded-lg border border-white/15 bg-[#0f1e6b]/25 px-3 py-2.5">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:48px_36px]" />

                <div className="relative z-10 space-y-2.5 pt-1">
                  {signalTracks.map((track) => (
                    <div key={track.label} className="space-y-1">
                      <div className="h-[7px] rounded-full bg-white/15">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#8bb5ff] via-[#9ba3ff] to-[#c2b4ff]" style={{ width: track.width }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute right-3 top-[34px] rounded-full border border-cyan-200/50 bg-cyan-300/15 px-2 py-0.5 text-[10px] font-medium text-cyan-100">
                  Buyer intent
                </div>
                <div className="absolute left-3 top-[104px] rounded-full border border-violet-200/50 bg-violet-300/15 px-2 py-0.5 text-[10px] font-medium text-violet-100">
                  Repeat viewers
                </div>
                <div className="absolute right-8 bottom-4 rounded-full border border-indigo-200/55 bg-indigo-200/20 px-2 py-0.5 text-[10px] font-medium text-indigo-100">
                  Discovery spikes
                </div>

                <div className="absolute left-[40%] top-[48%] rounded-md border border-emerald-200/45 bg-emerald-300/20 px-2 py-1 text-[10px] font-semibold text-emerald-100">
                  Winning zone
                </div>

                <div className="absolute bottom-3 left-[58%] size-1.5 rounded-full bg-cyan-100" />
                <div className="absolute bottom-8 left-[67%] size-1 rounded-full bg-violet-100" />
                <div className="absolute right-[18%] top-[56%] size-1.5 rounded-full bg-emerald-100" />
                <div className="absolute left-[22%] top-[38%] size-1 rounded-full bg-blue-100" />
                <div className="absolute left-[71%] top-[24%] size-1 rounded-full bg-fuchsia-100" />
              </div>
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
            <div className="col-span-7 rounded-xl border border-indigo-200/70 bg-white/90 p-4 shadow-[0_6px_16px_rgba(80,70,180,0.12)]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-500">RECOMMENDED NEXT MOVE</p>
              <h3 className="mt-1 text-[22px] font-semibold leading-tight text-slate-900">Run a 21-day Budget Tech Growth Sprint</h3>
              <p className="mt-2 text-[13px] leading-snug text-slate-600">
                Publish one comparison, one student decision guide, and one rapid trend test each week.
              </p>
              <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#3f6cff] via-[#5c5bfa] to-[#7a47e8] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(79,92,250,0.35)]">
                Open Growth Map
              </button>
            </div>

            <div className="col-span-5 grid grid-rows-3 gap-2">
              {[
                { title: 'Core Reinforcement', note: 'Repeat budget laptop showdown format' },
                { title: 'Safe Expansion', note: 'Bridge into student productivity kits' },
                { title: 'Trend Probe', note: 'Test low-cost AI study tools weekly' },
              ].map((path) => (
                <div key={path.title} className="rounded-xl bg-white/72 px-3 py-2.5 ring-1 ring-indigo-100/80">
                  <div className="text-[12px] font-semibold text-slate-800">{path.title}</div>
                  <div className="mt-0.5 text-[11px] leading-snug text-slate-600">{path.note}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="col-span-7 rounded-2xl bg-white p-3 ring-1 ring-slate-200/90">
            <div className="mb-2.5 flex items-end justify-between">
              <div>
                <h3 className="text-[18px] font-semibold leading-none text-slate-900">How Your Topics Actually Work</h3>
                <p className="mt-1 text-[11px] text-slate-500">Reach potential (Y) vs audience loyalty (X)</p>
              </div>
              <div className="text-[10px] text-slate-500">Bubble size = conversion impact</div>
            </div>

            <div className="relative h-[230px] overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:56px_44px]" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-slate-300/80" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-slate-300/80" />

              <div className="absolute left-3 top-2 text-[10px] font-medium uppercase tracking-[0.1em] text-blue-700/75">Core Growth Drivers</div>
              <div className="absolute right-3 top-2 text-[10px] font-medium uppercase tracking-[0.1em] text-emerald-700/75">Audience Builders</div>
              <div className="absolute left-3 bottom-2 text-[10px] font-medium uppercase tracking-[0.1em] text-violet-700/75">Reach Boosters</div>
              <div className="absolute right-3 bottom-2 text-[10px] font-medium uppercase tracking-[0.1em] text-amber-700/75">Low Leverage</div>

              <div className="absolute left-[18%] top-[23%] rounded-full bg-blue-600 px-4 py-1.5 text-[11px] font-semibold text-white shadow">Best laptops under $500</div>
              <div className="absolute left-[23%] top-[36%] rounded-full border border-blue-300 bg-blue-100 px-3 py-1 text-[10px] font-medium text-blue-700">Budget laptop comparison 2026</div>

              <div className="absolute right-[15%] top-[24%] rounded-full bg-emerald-600 px-3.5 py-1.5 text-[11px] font-semibold text-white shadow">Student laptop buying guide</div>
              <div className="absolute right-[20%] top-[37%] rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-[10px] font-medium text-emerald-700">Campus setup checklist</div>

              <div className="absolute left-[13%] bottom-[25%] rounded-full border border-violet-300 bg-violet-100 px-3 py-1 text-[10px] font-medium text-violet-700">Amazon tech under $30</div>
              <div className="absolute left-[24%] bottom-[13%] rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] text-violet-600">Cheap AI gadgets review</div>

              <div className="absolute right-[12%] bottom-[23%] rounded-full border border-amber-300 bg-amber-100 px-2.5 py-1 text-[10px] font-medium text-amber-700">Weekly tech news reaction</div>
              <div className="absolute right-[18%] bottom-[11%] rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-[10px] text-amber-600">Accessory teardown deep dive</div>

              <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] tracking-wide text-slate-500">Reach</div>
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[10px] tracking-wide text-slate-500">Loyalty</div>
            </div>
          </section>

          <section className="col-span-5 rounded-2xl bg-[linear-gradient(170deg,rgba(99,102,241,0.11),rgba(255,255,255,0.95))] p-3 ring-1 ring-indigo-100/90">
            <h3 className="text-[18px] font-semibold leading-none text-slate-900">Things You Might Be Misreading</h3>
            <p className="mt-1 text-[11px] text-slate-500">Diagnosis panel from recent topic behavior</p>

            <div className="mt-2.5 space-y-2.5">
              <div className="rounded-xl bg-white/92 p-3 ring-1 ring-violet-200/80">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-700">UNDERVALUED OPPORTUNITIES</span>
                  <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] text-violet-700">Demand rising</span>
                </div>
                <div className="space-y-2 text-[11px] leading-snug">
                  <div>
                    <div className="font-semibold text-slate-800">Student laptop buying guide</div>
                    <div className="text-slate-600">Historically underproduced, but intent signals are strong.</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Cheap AI study tools</div>
                    <div className="text-slate-600">Search momentum is up while channel coverage is still low.</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white/92 p-3 ring-1 ring-amber-200/85">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-700">NARROW WINS</span>
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] text-amber-700">High engagement, small reach</span>
                </div>
                <div className="space-y-2 text-[11px] leading-snug">
                  <div>
                    <div className="font-semibold text-slate-800">Detailed gadget teardown</div>
                    <div className="text-slate-600">Strong core audience response, weak new viewer conversion.</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Accessory deep dives</div>
                    <div className="text-slate-600">Reliable watch time in niche pockets, limited discovery reach.</div>
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
