import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleUserRound,
  Compass,
  Layers3,
  Sparkles,
  TrendingUp,
  Youtube,
} from 'lucide-react'

const scoreRings = [
  { label: 'Channel Focus', score: 82, status: 'High', color: 'from-violet-400 to-violet-600' },
  { label: 'Audience Alignment', score: 76, status: 'Good', color: 'from-cyan-400 to-teal-500' },
  { label: 'Growth Opportunity', score: 91, status: 'Very High', color: 'from-amber-300 to-amber-500' },
]

const nextVideoIdeas = [
  'Best Budget Laptops Under $600',
  'Student Laptop Buying Guide',
  'Why Cheap Laptops Fail',
]

export default function CreatorContentStrategyCopilotMock() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-8 text-slate-100">
      <div className="pointer-events-none absolute -left-20 -top-16 h-80 w-80 rounded-full bg-violet-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -top-12 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute left-6 top-6 h-28 w-28 rounded-full border border-violet-300/20" />
      <div className="pointer-events-none absolute right-10 top-10 h-24 w-24 rounded-full border border-cyan-300/20" />
      <div className="pointer-events-none absolute left-20 top-14 h-2 w-2 rounded-full bg-violet-300/70" />
      <div className="pointer-events-none absolute left-28 top-20 h-px w-14 bg-violet-300/30" />
      <div className="pointer-events-none absolute right-20 top-14 h-2 w-2 rounded-full bg-cyan-200/70" />
      <div className="pointer-events-none absolute right-28 top-20 h-px w-14 bg-cyan-200/30" />

      <main className="relative mx-auto flex aspect-[4/3] w-full max-w-[1440px] flex-col rounded-[30px] border border-white/10 bg-gradient-to-b from-slate-900 via-[#0b1533] to-slate-950 p-8 shadow-[0_30px_100px_rgba(8,12,30,0.85)]">
        <header className="space-y-5 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-500/15 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-100 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            <Sparkles className="h-3.5 w-3.5" /> AI-POWERED ANALYSIS
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-tight text-white md:text-6xl">
            Your Channel’s DNA.
            <br />
            Decoded by AI.
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-slate-300 md:text-base">
            We analyzed your channel’s content and market trends to reveal what’s working, what’s missing, and your smartest next move.
          </p>
        </header>

        <section className="mt-6 flex items-stretch justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div className="flex min-w-0 flex-1 gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/20 ring-1 ring-white/20">
              <CircleUserRound className="h-8 w-8 text-slate-100" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-lg font-semibold text-white">Alex Tech Reviews</p>
              <p className="text-sm text-slate-400">@AlexTechReviews · 127K subscribers</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1"><BarChart3 className="h-3.5 w-3.5 text-violet-300" />245 videos analyzed</span>
                <span className="inline-flex items-center gap-1"><Activity className="h-3.5 w-3.5 text-cyan-300" />Last 18 months of content</span>
                <span className="inline-flex items-center gap-1"><Compass className="h-3.5 w-3.5 text-emerald-300" />Market signals active</span>
                <span className="inline-flex items-center gap-1"><Youtube className="h-3.5 w-3.5 text-rose-300" />YouTube + Google Trends</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {scoreRings.map((item) => (
              <div key={item.label} className="w-32 rounded-xl border border-white/10 bg-slate-900/60 p-3 text-center">
                <div className={`mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br ${item.color} text-lg font-bold text-slate-950 shadow-md`}>
                  {item.score}
                </div>
                <p className="mt-2 text-xs font-medium text-slate-200">{item.label}</p>
                <p className="text-[11px] text-slate-400">{item.status}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 flex flex-1 gap-5">
          <div className="flex flex-[1.35] flex-col gap-5">
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h2 className="text-lg font-semibold text-white">Channel DNA Map</h2>
              <p className="mt-1 text-xs text-slate-400">We mapped your topics by audience interest vs. channel coverage.</p>

              <div className="relative mt-4 h-[430px] rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <div className="absolute inset-4 rounded-lg border border-white/5" />
                <div className="absolute inset-x-4 top-1/2 h-px bg-white/10" />
                <div className="absolute inset-y-4 left-1/2 w-px bg-white/10" />

                <p className="absolute left-6 top-6 text-[11px] font-medium text-slate-300">Overused Topics</p>
                <p className="absolute left-6 top-10 text-[10px] text-slate-500">You post a lot about these</p>
                <p className="absolute right-6 top-6 text-[11px] font-medium text-slate-300">Core Content</p>
                <p className="absolute right-6 top-10 text-[10px] text-slate-500">Your audience loves these</p>
                <p className="absolute left-6 bottom-8 text-[11px] font-medium text-slate-300">Low Value Topics</p>
                <p className="absolute left-6 bottom-4 text-[10px] text-slate-500">Low interest & low coverage</p>
                <p className="absolute right-6 bottom-8 text-[11px] font-medium text-amber-200">Hidden Opportunities</p>
                <p className="absolute right-6 bottom-4 text-[10px] text-slate-500">High interest, less coverage from you</p>

                <div className="absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-[0.12em] text-slate-400">Channel Coverage</div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.12em] text-slate-400">Audience Interest</div>
                <div className="absolute bottom-5 left-8 text-[10px] text-slate-500">Low</div>
                <div className="absolute bottom-5 right-8 text-[10px] text-slate-500">High</div>

                <div className="absolute left-[22%] top-[28%] grid h-16 w-16 place-items-center rounded-full border border-violet-300/40 bg-violet-500/30 text-xs font-medium text-violet-100">Tech News</div>
                <div className="absolute left-[62%] top-[30%] grid h-16 w-16 place-items-center rounded-full border border-emerald-200/40 bg-emerald-500/30 text-[11px] font-medium text-emerald-100">Cheap Accessories</div>
                <div className="absolute left-[66%] top-[19%] grid h-20 w-20 place-items-center rounded-full border border-cyan-200/50 bg-teal-400/35 text-xs font-semibold text-cyan-50">Budget Phones</div>

                <div className="absolute left-[58%] top-[56%] grid h-24 w-24 place-items-center rounded-full border border-amber-200/60 bg-amber-400/35 text-center text-xs font-semibold text-amber-50 shadow-[0_0_24px_rgba(251,191,36,0.45)] ring-4 ring-amber-200/20">
                  Laptop
                  <br />
                  Comparisons
                </div>
                <div className="absolute left-[63%] top-[52%] rounded-full border border-amber-200/40 bg-amber-300/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-100">
                  Hidden Opportunity
                </div>

                <div className="absolute left-[73%] top-[66%] grid h-12 w-12 place-items-center rounded-full border border-amber-100/40 bg-amber-500/25 text-[10px] font-medium text-amber-100">AI Tools</div>
                <div className="absolute left-[24%] top-[73%] h-5 w-5 rounded-full bg-slate-400/40" />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-lg font-semibold text-white">Opportunity Signals</h3>
              <p className="mt-1 text-xs text-slate-400">Market data that reveals what’s trending and what your audience wants next.</p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <article className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
                  <p className="text-xs font-medium text-violet-200">Market Trend</p>
                  <p className="mt-2 text-sm text-slate-200">“Budget laptops”</p>
                  <p className="text-xs text-slate-400">Search demand</p>
                  <p className="text-sm font-semibold text-emerald-300">+38% this month</p>
                  <svg className="mt-3 h-10 w-full" viewBox="0 0 120 35" fill="none">
                    <path d="M3 28C17 26 28 24 40 20C52 16 61 19 72 14C88 7 99 9 117 3" stroke="#a78bfa" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                </article>

                <article className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
                  <p className="text-xs font-medium text-cyan-200">Audience Signal</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">Viewers who watch <span className="font-semibold text-cyan-100">Budget Phones</span> also watch <span className="font-semibold text-cyan-100">Laptop Reviews</span></p>
                  <div className="relative mt-3 h-10">
                    <div className="absolute left-5 top-1 h-8 w-8 rounded-full border border-cyan-300/40 bg-cyan-500/20" />
                    <div className="absolute left-10 top-1 h-8 w-8 rounded-full border border-violet-300/40 bg-violet-500/20" />
                    <p className="absolute left-0 top-10 text-[10px] text-slate-400">Budget Phones</p>
                    <p className="absolute right-0 top-10 text-[10px] text-slate-400">Laptop Reviews</p>
                  </div>
                  <p className="mt-5 text-xs font-semibold text-emerald-300">76% audience overlap</p>
                </article>

                <article className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
                  <p className="text-xs font-medium text-amber-200">Channel Gap</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">Top competing channels posted <span className="font-semibold text-amber-100">12 laptop videos</span> in the last 90 days</p>
                  <div className="mt-3 flex h-12 items-end gap-2">
                    <div className="w-6 rounded-t bg-violet-300/75" style={{ height: '100%' }} />
                    <div className="w-6 rounded-t bg-cyan-300/70" style={{ height: '75%' }} />
                    <div className="w-6 rounded-t bg-slate-400/70" style={{ height: '25%' }} />
                  </div>
                  <div className="mt-1 flex gap-2 text-[10px] text-slate-400">
                    <span className="w-6 text-center">A:12</span>
                    <span className="w-6 text-center">B:9</span>
                    <span className="w-6 text-center">You:3</span>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <aside className="w-[33%] rounded-2xl border border-violet-300/25 bg-gradient-to-br from-violet-900/35 via-slate-900/80 to-slate-900/70 p-5 shadow-[0_0_40px_rgba(124,58,237,0.2)]">
            <h3 className="text-xl font-semibold text-white">Recommended Next Move</h3>
            <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-slate-400">Topic</p>
            <p className="mt-1 text-3xl font-semibold leading-tight text-white">Budget Laptop Comparisons</p>

            <div className="mt-3 inline-flex items-center rounded-full border border-emerald-300/30 bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
              Safe Expansion
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />Strong audience overlap</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />High search growth</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />Low coverage on your channel</li>
            </ul>

            <div className="mt-5 rounded-xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Next Video Ideas</p>
              <div className="mt-3 space-y-2">
                {nextVideoIdeas.map((idea) => (
                  <p key={idea} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200">{idea}</p>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:brightness-110">
                Evaluate This Idea <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5">
                <Layers3 className="h-4 w-4" /> Adjust Channel Strategy <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-slate-400">Explore idea-level scoring or shift to a broader growth path.</p>
            </div>
          </aside>
        </section>

        <footer className="mt-3 text-center text-xs text-slate-500">
          Analysis based on your channel data + YouTube search trends + competing channels
        </footer>
      </main>

      <div className="pointer-events-none absolute right-12 top-[56%] text-[10px] uppercase tracking-[0.12em] text-violet-200/70">
        <span className="inline-flex items-center gap-1 rounded-full border border-violet-200/20 bg-violet-500/10 px-2 py-1"><TrendingUp className="h-3 w-3" /> AI Confidence: High</span>
      </div>
    </div>
  )
}
