import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleUserRound,
  Compass,
  Sparkles,
  Youtube,
} from 'lucide-react';

type ScoreItem = {
  label: string;
  score: number;
  status: string;
  color: string;
};

const scoreRings: ScoreItem[] = [
  { label: 'Channel Focus', score: 82, status: 'High', color: '#4F7DF7' },
  { label: 'Audience Alignment', score: 76, status: 'Good', color: '#7C98FA' },
  { label: 'Growth Opportunity', score: 91, status: 'Very High', color: '#16A34A' },
];

const nextVideoIdeas = [
  'Best Budget Laptops Under $600',
  'Student Laptop Buying Guide',
  'Why Cheap Laptops Fail',
];

function ScoreRing({ score, label, status, color }: ScoreItem) {
  const size = 72;
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-center shadow-sm">
      <div className="relative mx-auto h-[72px] w-[72px]">
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
        <div className="absolute inset-0 flex items-center justify-center text-[24px] font-bold leading-none text-slate-800">
          {score}
        </div>
      </div>
      <p className="mt-1 text-[14px] font-semibold leading-tight text-slate-700">{label}</p>
      <p className="text-[13px] font-medium" style={{ color }}>
        {status}
      </p>
    </div>
  );
}

function TopicBubble({
  className,
  label,
  color,
}: {
  className: string;
  label?: string;
  color: string;
}) {
  return (
    <div
      className={`absolute grid place-items-center rounded-full border text-center font-semibold leading-tight transition duration-200 hover:scale-105 hover:shadow-md ${className}`}
      style={{ backgroundColor: `${color}22`, borderColor: `${color}66`, color }}
    >
      {label}
    </div>
  );
}

export default function ChannelDNAPage() {
  return (
    <div className="mock-page-body text-slate-700">
      <main className="flex h-full w-full flex-col gap-2 rounded-[24px] border border-slate-200 bg-[#F7F8FB] p-5 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
        <h1 className="text-[50px] font-bold leading-[1.0] tracking-tight text-slate-800">
          Your Channel’s DNA.
          <span className="ml-3 bg-gradient-to-r from-[#4F7DF7] via-[#7C6BFF] to-[#A855F7] bg-clip-text text-transparent">
            Decoded by AI.
          </span>
        </h1>

        <header className="rounded-3xl border border-slate-200 bg-white px-5 py-3.5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <p className="max-w-5xl text-[16px] leading-relaxed text-slate-600">
              We analyzed your channel’s content and market trends to reveal what’s working,
              what’s missing, and your smartest next move.
            </p>

            <div className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4F7DF7] to-[#8B5CF6] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white">
              <Sparkles className="h-3.5 w-3.5" />
              AI-POWERED ANALYSIS
            </div>
          </div>
        </header>

        <section className="grid grid-cols-[1.58fr_1fr] gap-3 rounded-3xl border border-slate-200 bg-white p-3.5 shadow-sm">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4F7DF7]/20 to-[#8B5CF6]/20 ring-1 ring-[#4F7DF7]/15">
              <CircleUserRound className="h-7 w-7 text-[#4F7DF7]" />
            </div>

            <div className="space-y-1">
              <p className="text-[22px] font-bold leading-none text-slate-800">Alex Tech Reviews</p>
              <p className="text-[15px] text-slate-500">@AlexTechReviews · 127K subscribers</p>

              <div className="space-y-3 flex flex-wrap items-center gap-x-4 gap-y-2 pt-0.5 text-[14px] font-medium text-slate-600">
                <div className="inline-flex items-center gap-2">
                  <span className="rounded-full border border-[#F59E0B]/35 bg-[#F59E0B]/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
                    Core niche
                  </span>
                  <span className="text-slate-700">Budget Tech</span>
                </div>

                <div className="space-y-3 inline-flex items-center gap-2">
                  <span className="rounded-full border border-[#4F7DF7]/35 bg-[#4F7DF7]/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#4F7DF7]">
                    Best expansion area
                  </span>
                  <span className="text-slate-700">Laptops</span>
                </div>
              </div>

              <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <BarChart3 className="h-3.5 w-3.5 text-[#4F7DF7]" />
                  245 videos analyzed
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-[#8B5CF6]" />
                  Last 18 months of content
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Compass className="h-3.5 w-3.5 text-[#16A34A]" />
                  Market signals active
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Youtube className="h-3.5 w-3.5 text-[#F59E0B]" />
                  YouTube + Google Trends
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {scoreRings.map((item) => (
              <ScoreRing key={item.label} {...item} />
            ))}
          </div>
        </section>

        <section className="grid flex-1 grid-cols-[1.48fr_0.95fr] gap-3">
          <div className="flex flex-col gap-2.5">
            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <h2 className="text-[25px] font-semibold text-slate-800">Channel DNA Map</h2>
              <p className="text-[16px] text-slate-500">
                We mapped your topics by audience interest vs. channel coverage.
              </p>

              <div className="relative mt-2.5 h-[292px] rounded-2xl border border-slate-200 bg-slate-50">
                <div className="absolute left-[84px] top-4 bottom-10 right-4 rounded-xl border border-slate-200" />
                <div className="absolute left-[84px] right-4 top-[calc(50%-3px)] h-px bg-slate-200" />
                <div className="absolute left-[calc(50%+40px)] top-4 bottom-10 w-px bg-slate-200" />
                <p className="absolute left-[84px] top-6 text-[13px] font-semibold text-blue-700">Overused Topics</p>
                <p className="absolute left-[84px] top-10 text-[12px] text-slate-500">You post a lot about these</p>

                <p className="absolute right-6 top-6 text-[13px] font-semibold text-blue-500">Core Content</p>
                <p className="absolute right-6 top-10 text-[12px] text-slate-500">Your audience loves these</p>

                <p className="absolute left-[84px] bottom-14 text-[13px] font-semibold text-red-500">Low Value Topics</p>
                <p className="absolute left-[84px] bottom-10 text-[12px] text-slate-500">Low interest & low coverage</p>

                <p className="absolute right-6 bottom-14 text-[13px] font-semibold text-yellow-700">Hidden Opportunity</p>
                <p className="absolute right-6 bottom-10 text-[12px] text-slate-500">High interest, less coverage from you</p>

                <div className="absolute left-2 top-4 bottom-10 w-[64px]">
                  <div className="absolute left-1/2 top-[20px] -translate-x-1/2 -rotate-90 whitespace-nowrap text-[11px] uppercase tracking-[0.12em] text-slate-400">
                    High
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[12px] uppercase tracking-[0.12em] text-slate-500">
                    Channel Coverage
                  </div>
                  <div className="absolute left-1/2 bottom-[14px] -translate-x-1/2 -rotate-90 whitespace-nowrap text-[11px] uppercase tracking-[0.12em] text-slate-400">
                    Low
                  </div>
                </div>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[12px] uppercase tracking-[0.12em] text-slate-500">
                  Audience Interest
                </div>
                <div className="absolute bottom-3 left-[84px] text-[11px] text-slate-400">Low</div>
                <div className="absolute bottom-3 right-8 text-[11px] text-slate-400">High</div>

                <TopicBubble
                  className="left-[18%] top-[24%] h-[74px] w-[74px] text-[12px]"
                  label="Tech News"
                  color="#8B5CF6"
                />

                <TopicBubble
                  className="left-[62%] top-[22%] h-[74px] w-[74px] text-[11px]"
                  label="Cheap Accessories"
                  color="#16A34A"
                />

                <TopicBubble
                  className="left-[69%] top-[12%] h-[86px] w-[86px] text-[13px]"
                  label="Budget Phones"
                  color="#0EA5E9"
                />

                <div className="absolute left-[64%] top-[49%] grid h-[104px] w-[104px] place-items-center rounded-full border-2 border-[#F59E0B]/55 bg-[#F59E0B]/12 text-center text-[14px] font-bold leading-tight text-amber-700 shadow-[0_8px_24px_rgba(245,158,11,0.22)] ring-4 ring-[#F59E0B]/20 transition duration-200 hover:scale-105 hover:shadow-lg">
                  Laptop
                  <br />
                  Comparisons
                </div>

                <TopicBubble
                  className="left-[78%] top-[64%] h-[58px] w-[58px] text-[10px]"
                  label="AI Tools"
                  color="#F59E0B"
                />

                <div className="absolute left-[40%] top-[68%] h-4 w-4 rounded-full bg-slate-300" />
              </div>
            </div>

            <section className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <h3 className="text-[22px] font-semibold text-slate-800">Opportunity Signals</h3>
              <p className="text-[14px] text-slate-500">
                Market data that reveals what’s trending and what your audience wants next.
              </p>

              <div className="mt-2.5 grid grid-cols-3 gap-2">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[15px] font-semibold text-[#8B5CF6]">Market Trend</p>
                  <p className="mt-1.5 text-[14px] text-slate-700">“Budget laptops”</p>
                  <p className="text-[12px] text-slate-500">Search demand</p>
                  <p className="text-[14px] font-semibold text-emerald-600">+38% this month</p>

                  <div className="mt-2 flex justify-left">
                    <svg className="h-9 w-[124px]" viewBox="0 0 120 35" fill="none">
                      <path
                        d="M3 28C17 26 28 24 40 20C52 16 61 19 72 14C88 7 99 9 117 3"
                        stroke="#8B5CF6"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[15px] font-semibold text-[#4F7DF7]">Audience Signal</p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                    Viewers who watch <span className="font-semibold text-slate-800">Budget Phones</span> also watch{' '}
                    <span className="font-semibold text-slate-800">Laptop Reviews</span>
                  </p>

                  <p className="mt-1 text-[14px] font-semibold text-emerald-600">76% audience overlap</p>

                  <div className="mt-2 flex justify-center">
                    <div className="relative h-9 w-[88px]">
                      <div className="absolute left-[14px] top-0 h-9 w-9 rounded-full border border-[#4F7DF7]/30 bg-[#4F7DF7]/20" />
                      <div className="absolute left-[36px] top-0 h-9 w-9 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/20" />
                    </div>
                  </div>

                  <div className="mt-1 flex justify-between text-[10px] text-slate-500">
                    <span>Budget Phones</span>
                    <span>Laptop Reviews</span>
                  </div>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[15px] font-semibold text-[#F59E0B]">Channel Gap</p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                    Top competing channels posted <span className="font-semibold text-slate-800">12 laptop videos</span> in the last 90 days
                  </p>

                  <div className="mt-6 flex justify-center">
                    <div className="flex h-11 items-end gap-2">
                      <div className="w-5 rounded-t bg-[#4F7DF7]" style={{ height: '100%' }} />
                      <div className="w-5 rounded-t bg-[#8B5CF6]" style={{ height: '75%' }} />
                      <div className="w-5 rounded-t bg-slate-400" style={{ height: '25%' }} />
                    </div>
                  </div>

                  <div className="mt-1 flex justify-center gap-2 text-[10px] text-slate-500">
                    <span className="w-5 text-center">A:12</span>
                    <span className="w-5 text-center">B:9</span>
                    <span className="w-5 text-center">You:3</span>
                  </div>
                </article>
              </div>
            </section>
          </div>

          <aside className="flex h-full flex-col rounded-3xl border border-[#C7D2FE] bg-gradient-to-b from-[#EEF2FF] to-white p-[18px] shadow-sm">
            <h3 className="text-[27px] font-semibold leading-tight text-slate-800">Recommended Next Move</h3>

            <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">TOPIC</p>
            <p className="mt-1 text-[33px] font-bold leading-[1.08] text-slate-800">Budget Laptop Comparisons</p>

            <div className="mt-3 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[13px] font-semibold text-emerald-700">
              Safe Expansion
            </div>

            <ul className="mt-4 space-y-2 text-[15px] text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600" />
                Strong audience overlap
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600" />
                High search growth
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600" />
                Low coverage on your channel
              </li>
            </ul>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white/90 p-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">NEXT VIDEO IDEAS</p>
              <div className="mt-2.5 space-y-2">
                {nextVideoIdeas.map((idea) => (
                  <p
                    key={idea}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-[14px] font-medium text-slate-700"
                  >
                    {idea}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4F7DF7] to-[#8B5CF6] px-4 py-3.5 text-[16px] font-semibold text-white transition hover:brightness-105">
                Evaluate This Idea <ArrowRight className="h-4.5 w-4.5" />
              </button>

              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-4 py-3.5 text-[16px] font-semibold text-slate-700 transition hover:bg-slate-50">
                Adjust Channel Strategy <ArrowRight className="h-4.5 w-4.5" />
              </button>

              <p className="text-[13px] text-slate-500">
                Explore idea-level scoring or shift to a broader growth path.
              </p>
            </div>
          </aside>
        </section>
      </main>

    </div>
  );
}
