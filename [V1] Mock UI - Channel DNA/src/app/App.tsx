export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-[1280px] aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="h-full overflow-y-auto p-6 text-slate-900">
          <div className="space-y-5">
            <section className="rounded-2xl border border-slate-800/10 bg-gradient-to-br from-[#0f1f4f] via-[#3f47a7] to-[#6d49bf] p-5 text-white shadow-lg">
              <div className="grid grid-cols-[1.15fr_1fr_0.85fr] gap-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">Intelligence View</p>
                      <h1 className="text-2xl font-semibold leading-tight">Channel DNA</h1>
                    </div>
                    <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] text-white/80">
                      Updated 2h ago
                    </span>
                  </div>

                  <div>
                    <p className="text-sm text-white/80">Affordable tech growth model</p>
                    <p className="mt-2 text-lg font-medium leading-snug">
                      Your highest-confidence growth path is budget laptop comparisons + student buying intent.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="rounded-lg border border-white/20 bg-white/10 px-3 py-2">
                      <p className="text-white/70">Primary signal</p>
                      <p className="mt-1 text-sm text-white">Price-led guides convert best</p>
                    </div>
                    <div className="rounded-lg border border-white/20 bg-white/10 px-3 py-2">
                      <p className="text-white/70">Next move</p>
                      <p className="mt-1 text-sm text-white">Expand student workflow angles</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/20 bg-[#0e1640]/35 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-wide text-white/70">Topic Signal Mix</p>
                    <p className="text-[11px] text-cyan-200">Contribution score</p>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: 'Budget laptop comparisons', value: 92, color: 'bg-cyan-300' },
                      { label: 'Student laptop guides', value: 81, color: 'bg-blue-300' },
                      { label: 'Cheap AI study tools', value: 66, color: 'bg-violet-300' },
                      { label: 'Amazon tech under $30', value: 54, color: 'bg-fuchsia-300' },
                      { label: 'Weekly news reaction', value: 24, color: 'bg-slate-300' },
                    ].map((item) => (
                      <div key={item.label} className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-white/80">
                          <span>{item.label}</span>
                          <span>{item.value}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/15">
                          <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    { label: 'Growth fit', value: '8.7 / 10', note: '+1.8 vs channel avg' },
                    { label: 'Subscriber efficiency', value: '42 subs / 10k', note: 'Top quartile topic set' },
                    { label: 'Content waste risk', value: '17%', note: 'Down from 23%' },
                    { label: 'Expansion readiness', value: 'Medium+', note: '2 safe adjacent lanes' },
                  ].map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-white/20 bg-white/10 px-3 py-2.5">
                      <p className="text-[11px] uppercase tracking-wide text-white/65">{metric.label}</p>
                      <p className="mt-1 text-lg font-semibold leading-none">{metric.value}</p>
                      <p className="mt-1 text-[11px] text-white/70">{metric.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#7658ff]/20 bg-gradient-to-r from-[#eef2ff] via-white to-[#f4f0ff] p-4 shadow-sm">
              <div className="grid grid-cols-[1.2fr_1fr] gap-4">
                <div className="rounded-xl border border-[#7358ff]/20 bg-white p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#5f5dd8]">Recommended Next Move</p>
                  <h2 className="mt-2 text-xl font-semibold leading-tight text-slate-900">Launch a 3-video student laptop decision sprint.</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Pair one comparison, one buyer framework, and one setup guide to convert intent while expanding reach.
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <button className="rounded-lg bg-gradient-to-r from-[#4F7FFF] to-[#7B5FFF] px-4 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90">
                      Open Growth Map
                    </button>
                    <button className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                      Generate Brief
                    </button>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2.5 text-xs">
                    <div className="rounded-md bg-blue-50 px-2.5 py-2 text-blue-900">
                      <p className="font-medium">Projected lift</p>
                      <p className="mt-1 text-blue-700">+19% watch-time quality</p>
                    </div>
                    <div className="rounded-md bg-violet-50 px-2.5 py-2 text-violet-900">
                      <p className="font-medium">Risk level</p>
                      <p className="mt-1 text-violet-700">Low-to-medium</p>
                    </div>
                    <div className="rounded-md bg-emerald-50 px-2.5 py-2 text-emerald-900">
                      <p className="font-medium">Time to signal</p>
                      <p className="mt-1 text-emerald-700">2 publishing cycles</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  {[
                    {
                      title: 'Core reinforcement',
                      body: 'Repeat best laptop-under-budget format with clearer buyer segmentation.',
                    },
                    {
                      title: 'Safe expansion',
                      body: 'Bridge into student desk + productivity tech where intent already overlaps.',
                    },
                    {
                      title: 'Fast trend probe',
                      body: 'Test one cheap AI tools video with strict retention checkpoint after 72 hours.',
                    },
                  ].map((path, index) => (
                    <div
                      key={path.title}
                      className={`rounded-xl border p-3 ${
                        index === 0
                          ? 'border-blue-200 bg-blue-50/80'
                          : index === 1
                            ? 'border-violet-200 bg-violet-50/70'
                            : 'border-emerald-200 bg-emerald-50/70'
                      }`}
                    >
                      <p className="text-sm font-medium capitalize text-slate-900">{path.title}</p>
                      <p className="mt-1 text-xs text-slate-600">{path.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-end justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Evidence Map</p>
                  <h3 className="text-lg font-semibold">How Your Topics Actually Work</h3>
                </div>
                <p className="text-xs text-slate-500">Y-axis: Reach potential · X-axis: Audience loyalty</p>
              </div>

              <div className="relative h-[300px] rounded-xl border border-slate-200 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:25%_25%] bg-white">
                <div className="absolute inset-y-0 left-1/2 w-px bg-slate-300" />
                <div className="absolute inset-x-0 top-1/2 h-px bg-slate-300" />

                <p className="absolute left-3 top-3 text-[11px] font-medium text-blue-700">Core Growth Drivers</p>
                <p className="absolute right-3 top-3 text-[11px] font-medium text-emerald-700">Audience Builders</p>
                <p className="absolute left-3 bottom-3 text-[11px] font-medium text-violet-700">Reach Boosters</p>
                <p className="absolute right-3 bottom-3 text-[11px] font-medium text-orange-700">Low Leverage</p>

                <div className="absolute left-[18%] top-[18%] rounded-md border border-blue-300 bg-blue-100 px-2.5 py-1.5 text-xs font-medium text-blue-900 shadow-sm">
                  Best laptops under $500
                </div>
                <div className="absolute left-[31%] top-[29%] rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-[11px] text-blue-800">
                  Budget laptop comparison 2026
                </div>
                <div className="absolute right-[15%] top-[26%] rounded-md border border-emerald-300 bg-emerald-100 px-2.5 py-1.5 text-xs font-medium text-emerald-900">
                  Student laptop buying guide
                </div>
                <div className="absolute right-[24%] top-[40%] rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] text-emerald-800">
                  Student desk setup tech
                </div>
                <div className="absolute left-[10%] bottom-[18%] rounded-md border border-violet-300 bg-violet-100 px-2 py-1 text-[11px] font-medium text-violet-900">
                  Cheap AI gadgets review
                </div>
                <div className="absolute left-[24%] bottom-[29%] rounded-md border border-violet-200 bg-violet-50 px-2 py-1 text-[11px] text-violet-800">
                  Amazon tech under $30
                </div>
                <div className="absolute right-[10%] bottom-[15%] rounded-md border border-orange-300 bg-orange-100 px-2 py-1 text-[11px] text-orange-900">
                  Weekly tech news reaction
                </div>
                <div className="absolute right-[19%] bottom-[29%] rounded-md border border-orange-200 bg-orange-50 px-2 py-1 text-[11px] text-orange-800">
                  Accessory teardown deep dives
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Things Your Channel Might Be Misreading</h3>
                <p className="text-xs text-slate-500">Diagnosis panel</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-violet-200 bg-white p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-violet-700">Undervalued Opportunities</p>
                  <div className="mt-2 divide-y divide-violet-100">
                    <div className="py-2">
                      <p className="text-sm font-medium text-slate-900">Student laptop buying guide</p>
                      <p className="text-xs text-slate-600">Underperformed historically, but category demand is climbing in adjacent channels.</p>
                    </div>
                    <div className="py-2">
                      <p className="text-sm font-medium text-slate-900">Cheap AI study tools</p>
                      <p className="text-xs text-slate-600">Low archive depth; search momentum and intent quality both rising.</p>
                    </div>
                    <div className="py-2">
                      <p className="text-sm font-medium text-slate-900">Refurb laptop buyer checklist</p>
                      <p className="text-xs text-slate-600">Strong value signal for budget-first audience with limited direct competition.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-orange-200 bg-white p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-orange-700">Narrow Wins</p>
                  <div className="mt-2 divide-y divide-orange-100">
                    <div className="py-2">
                      <p className="text-sm font-medium text-slate-900">Detailed gadget teardown</p>
                      <p className="text-xs text-slate-600">Excellent engagement depth, but audience size too narrow for channel-level growth.</p>
                    </div>
                    <div className="py-2">
                      <p className="text-sm font-medium text-slate-900">Accessory comparison deep dives</p>
                      <p className="text-xs text-slate-600">Reliable returning viewers, limited discovery and weak subscriber pull.</p>
                    </div>
                    <div className="py-2">
                      <p className="text-sm font-medium text-slate-900">Weekly general tech takes</p>
                      <p className="text-xs text-slate-600">Easy to produce but attracts broad, low-intent traffic that rarely converts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
