import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleUserRound,
  Compass,
  Sparkles,
  TrendingUp,
  Youtube,
} from 'lucide-react'

type ScoreItem = {
  label: string
  score: number
  status: string
  color: string
}

const scoreRings: ScoreItem[] = [
  { label: 'Channel Focus', score: 82, status: 'High', color: '#4F7DF7' },
  { label: 'Audience Alignment', score: 76, status: 'Good', color: '#8B5CF6' },
  { label: 'Growth Opportunity', score: 91, status: 'Very High', color: '#16A34A' },
]

const nextVideoIdeas = [
  'Best Budget Laptops Under $600',
  'Student Laptop Buying Guide',
  'Why Cheap Laptops Fail',
]

function ScoreRing({ score, label, status, color }: ScoreItem) {
  const size = 86
  const stroke = 8
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - score / 100)

  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
      <div className="mx-auto h-[86px] w-[86px]">
        <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full -rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="#E2E8F0" strokeWidth={stroke} fill="none" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="-mt-[56px] text-[24px] font-bold text-slate-800">{score}</div>
      </div>
      <p className="mt-1 text-[14px] font-semibold text-slate-700">{label}</p>
      <p className="text-[13px] text-slate-500">{status}</p>
    </div>
  )
}

function TopicBubble({
  className,
  label,
  color,
}: {
  className: string
  label?: string
  color: string
}) {
  return (
    <div
      className={`absolute grid place-items-center rounded-full border text-center font-semibold transition duration-200 hover:scale-105 hover:shadow-md ${className}`}
      style={{ backgroundColor: `${color}22`, borderColor: `${color}66`, color }}
    >
      {label}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F6F8] p-5 text-slate-700 md:p-8">
      <main className="mx-auto flex aspect-[4/3] w-full max-w-[1440px] flex-col gap-4 rounded-[28px] border border-slate-200 bg-[#F7F8FB] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
        <header className="rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4F7DF7] to-[#8B5CF6] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white">
            <Sparkles className="h-3.5 w-3.5" /> AI-POWERED ANALYSIS
          </div>
          <h1 className="mt-3 text-5xl font-bold leading-[1.04] tracking-tight text-slate-800">
            Your Channel’s DNA.
            <span className="block bg-gradient-to-r from-[#4F7DF7] to-[#8B5CF6] bg-clip-text text-transparent">Decoded by AI.</span>
          </h1>
          <p className="mt-2 max-w-4xl text-[18px] leading-relaxed text-slate-600">
            We analyzed your channel’s content and market trends to reveal what’s working, what’s missing, and your smartest next move.
          </p>
        </header>

        <section className="grid grid-cols-[1.6fr_1fr] gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4F7DF7]/20 to-[#8B5CF6]/20 ring-1 ring-[#4F7DF7]/15">
              <CircleUserRound className="h-8 w-8 text-[#4F7DF7]" />
            </div>
            <div className="space-y-1">
              <p className="text-[24px] font-bold leading-none text-slate-800">Alex Tech Reviews</p>
              <p className="text-[15px] text-slate-500">@AlexTechReviews · 127K subscribers</p>
              <p className="text-[14px] font-medium text-slate-600">Core niche: Budget Tech · Best expansion area: Laptops</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-slate-600">
                <span className="inline-flex items-center gap-1.5"><BarChart3 className="h-3.5 w-3.5 text-[#4F7DF7]" />245 videos analyzed</span>
                <span className="inline-flex items-center gap-1.5"><Activity className="h-3.5 w-3.5 text-[#8B5CF6]" />Last 18 months of content</span>
                <span className="inline-flex items-center gap-1.5"><Compass className="h-3.5 w-3.5 text-[#16A34A]" />Market signals active</span>
                <span className="inline-flex items-center gap-1.5"><Youtube className="h-3.5 w-3.5 text-[#F59E0B]" />YouTube + Google Trends</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {scoreRings.map((item) => (
              <ScoreRing key={item.label} {...item} />
            ))}
          </div>
        </section>

        <section className="grid flex-1 grid-cols-[1.5fr_1fr] gap-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-[26px] font-semibold text-slate-800">Channel DNA Map</h2>
            <p className="text-[16px] text-slate-500">We mapped your topics by audience interest vs. channel coverage.</p>

            <div className="relative mt-4 h-[355px] rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="absolute inset-4 rounded-xl border border-slate-200" />
              <div className="absolute inset-x-4 top-1/2 h-px bg-slate-200" />
              <div className="absolute inset-y-4 left-1/2 w-px bg-slate-200" />

              <p className="absolute left-6 top-6 text-[13px] font-semibold text-slate-700">Overused Topics</p>
              <p className="absolute left-6 top-10 text-[12px] text-slate-500">You post a lot about these</p>
              <p className="absolute right-6 top-6 text-[13px] font-semibold text-slate-700">Core Content</p>
              <p className="absolute right-6 top-10 text-[12px] text-slate-500">Your audience loves these</p>
              <p className="absolute left-6 bottom-6 text-[13px] font-semibold text-slate-700">Low Value Topics</p>
              <p className="absolute left-6 bottom-2 text-[12px] text-slate-500">Low interest & low coverage</p>

              <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[12px] uppercase tracking-[0.12em] text-slate-500">Channel Coverage</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[12px] uppercase tracking-[0.12em] text-slate-500">Audience Interest</div>
              <div className="absolute bottom-6 left-8 text-[12px] text-slate-500">Low</div>
              <div className="absolute bottom-6 right-8 text-[12px] text-slate-500">High</div>

              <TopicBubble className="left-[22%] top-[24%] h-20 w-20 text-[13px]" label="Tech News" color="#8B5CF6" />
              <TopicBubble className="left-[62%] top-[30%] h-[78px] w-[78px] text-[12px]" label="Cheap Accessories" color="#16A34A" />
              <TopicBubble className="left-[67%] top-[15%] h-[92px] w-[92px] text-[14px]" label="Budget Phones" color="#0EA5E9" />

              <div className="absolute left-[58%] top-[56%] grid h-[110px] w-[110px] place-items-center rounded-full border-2 border-[#F59E0B]/55 bg-[#F59E0B]/12 text-center text-[14px] font-bold text-amber-700 shadow-[0_8px_24px_rgba(245,158,11,0.22)] ring-4 ring-[#F59E0B]/20 transition duration-200 hover:scale-105 hover:shadow-lg">
                Laptop
                <br />
                Comparisons
              </div>
              <div className="absolute left-[63%] top-[52%] rounded-full border border-[#F59E0B]/35 bg-[#F59E0B]/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
                Hidden Opportunity
              </div>

              <TopicBubble className="left-[76%] top-[66%] h-14 w-14 text-[11px]" label="AI Tools" color="#F59E0B" />
              <div className="absolute left-[23%] top-[72%] h-5 w-5 rounded-full bg-slate-300" />
            </div>
          </div>

          <aside className="rounded-3xl border border-[#C7D2FE] bg-gradient-to-b from-[#EEF2FF] to-white p-6 shadow-sm">
            <h3 className="text-[28px] font-semibold leading-tight text-slate-800">Recommended Next Move</h3>
            <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">TOPIC</p>
            <p className="mt-1 text-[35px] font-bold leading-[1.08] text-slate-800">Budget Laptop Comparisons</p>

            <div className="mt-3 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[13px] font-semibold text-emerald-700">
              Safe Expansion
            </div>

            <ul className="mt-4 space-y-2.5 text-[16px] text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-600" />Strong audience overlap</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-600" />High search growth</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-600" />Low coverage on your channel</li>
            </ul>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white/90 p-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">NEXT VIDEO IDEAS</p>
              <div className="mt-2.5 space-y-2">
                {nextVideoIdeas.map((idea) => (
                  <p key={idea} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-[15px] font-medium text-slate-700">
                    {idea}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4F7DF7] to-[#8B5CF6] px-4 py-3.5 text-[16px] font-semibold text-white transition hover:brightness-105">
                Evaluate This Idea <ArrowRight className="h-4.5 w-4.5" />
              </button>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-4 py-3.5 text-[16px] font-semibold text-slate-700 transition hover:bg-slate-50">
                Adjust Channel Strategy <ArrowRight className="h-4.5 w-4.5" />
              </button>
              <p className="text-[13px] text-slate-500">Explore idea-level scoring or shift to a broader growth path.</p>
            </div>
          </aside>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-[24px] font-semibold text-slate-800">Opportunity Signals</h3>
          <p className="text-[16px] text-slate-500">Market data that reveals what’s trending and what your audience wants next.</p>

          <div className="mt-3.5 grid grid-cols-3 gap-3">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-[15px] font-semibold text-[#8B5CF6]">Market Trend</p>
              <p className="mt-2 text-[16px] text-slate-700">“Budget laptops”</p>
              <p className="text-[14px] text-slate-500">Search demand</p>
              <p className="text-[17px] font-semibold text-emerald-600">+38% this month</p>
              <svg className="mt-2.5 h-12 w-full" viewBox="0 0 120 35" fill="none">
                <path d="M3 28C17 26 28 24 40 20C52 16 61 19 72 14C88 7 99 9 117 3" stroke="#8B5CF6" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-[15px] font-semibold text-[#4F7DF7]">Audience Signal</p>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                Viewers who watch <span className="font-semibold text-slate-800">Budget Phones</span> also watch <span className="font-semibold text-slate-800">Laptop Reviews</span>
              </p>
              <div className="relative mt-3 h-11">
                <div className="absolute left-8 top-1 h-9 w-9 rounded-full border border-[#4F7DF7]/30 bg-[#4F7DF7]/20" />
                <div className="absolute left-14 top-1 h-9 w-9 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/20" />
              </div>
              <div className="mt-0.5 flex justify-between text-[12px] text-slate-500">
                <span>Budget Phones</span>
                <span>Laptop Reviews</span>
              </div>
              <p className="mt-1 text-[15px] font-semibold text-emerald-600">76% audience overlap</p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-[15px] font-semibold text-[#F59E0B]">Channel Gap</p>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                Top competing channels posted <span className="font-semibold text-slate-800">12 laptop videos</span> in the last 90 days
              </p>
              <div className="mt-3 flex h-14 items-end gap-2">
                <div className="w-7 rounded-t bg-[#4F7DF7]" style={{ height: '100%' }} />
                <div className="w-7 rounded-t bg-[#8B5CF6]" style={{ height: '75%' }} />
                <div className="w-7 rounded-t bg-slate-400" style={{ height: '25%' }} />
              </div>
              <div className="mt-1 flex gap-2 text-[12px] text-slate-500">
                <span className="w-7 text-center">A:12</span>
                <span className="w-7 text-center">B:9</span>
                <span className="w-7 text-center">You:3</span>
              </div>
            </article>
          </div>
        </section>

        <footer className="pt-1 text-center text-[14px] text-slate-500">
          Analysis based on your channel data + YouTube search trends + competing channels
        </footer>
      </main>

      <div className="pointer-events-none absolute right-8 top-6 text-[12px] uppercase tracking-[0.12em] text-slate-500">
        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
          <TrendingUp className="h-3.5 w-3.5 text-[#4F7DF7]" /> AI Confidence: High
        </span>
      </div>
    </div>
  )
}
