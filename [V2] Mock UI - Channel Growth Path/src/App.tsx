type Pillar = {
  rank: number;
  label: string;
  rankingLabel: string;
  name: string;
  description: string;
  coreAudience: string;
  channelShare: string;
  audienceFit: string;
  subscriberPull: string;
  footerNote: string;
};

const pillars: Pillar[] = [
  {
    rank: 1,
    label: 'Primary Content Pillar',
    rankingLabel: 'Pillar 1 of 3',
    name: 'Budget Tech Reviews',
    description:
      'Affordable laptops, accessories, and practical tech buying guides.',
    coreAudience: 'Budget-conscious students and entry-level buyers',
    channelShare: '42%',
    audienceFit: '91',
    subscriberPull: 'High',
    footerNote: 'This is the clearest pillar defining your channel today.',
  },
  {
    rank: 2,
    label: 'Secondary Content Pillar',
    rankingLabel: 'Pillar 2 of 3',
    name: 'Student Productivity Tech',
    description:
      'Apps, desk tools, and simple systems that help students study and work better.',
    coreAudience: 'College students looking for practical productivity tools',
    channelShare: '31%',
    audienceFit: '84',
    subscriberPull: 'Medium',
    footerNote: 'A strong adjacent pillar with consistent audience overlap.',
  },
  {
    rank: 3,
    label: 'Supporting Content Pillar',
    rankingLabel: 'Pillar 3 of 3',
    name: 'Budget Gaming Setup',
    description:
      'Entry-level gaming gear, setup recommendations, and cheap performance upgrades.',
    coreAudience: 'Beginner PC gamers with limited budgets',
    channelShare: '19%',
    audienceFit: '76',
    subscriberPull: 'Medium-Low',
    footerNote:
      'A recurring pillar, but less central than your top two categories.',
  },
];

const selectedPillar = pillars[0];

const interpretationCards = [
  {
    title: 'What defines your channel',
    body: 'Your channel is primarily defined by practical, low-cost tech advice rather than broad tech commentary. Viewers come for decision help, not general news.',
  },
  {
    title: 'Who responds most strongly',
    body: 'Students and first-time buyers respond best to content that helps them compare options, avoid bad purchases, and stretch a limited budget.',
  },
  {
    title: 'What this means strategically',
    body: 'Your strongest identity is “practical budget tech guide.” Secondary pillars can support growth, but the main pillar still anchors channel trust.',
  },
];

const evidenceChips = [
  'Video metadata',
  'Topic clusters',
  'Subscriber conversion',
  'Audience overlap',
  'Performance patterns',
];

const headerSignals = ['Topic Clustering', 'Audience Mapping', 'Performance Signals'];

function App() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800 sm:px-8">
      <main className="mx-auto w-full max-w-5xl space-y-6">
        <section className="card flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Channel DNA Dashboard</h1>
            <p className="text-sm leading-6 text-slate-600 sm:text-base">
              AI analyzed your channel structure to identify the content pillars that define your audience and shape your growth potential.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {headerSignals.map((signal) => (
              <span key={signal} className="signal-chip">
                {signal}
              </span>
            ))}
          </div>
        </section>

        <section className="card flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Analyzed Channel</p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">Max Tech Finds</h2>
            <p className="text-slate-600">Consumer Tech / Budget Reviews</p>
          </div>
          <div className="flex flex-wrap gap-2 text-slate-600">
            <span className="strip-pill">124 videos</span>
            <span className="strip-pill">2.8M total views</span>
            <span className="strip-pill">Last 12 months analyzed</span>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <article className="card p-0">
            <div className="border-b border-slate-200 px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-600">
                  {selectedPillar.label}
                </span>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                  {selectedPillar.rankingLabel}
                </span>
              </div>
            </div>

            <div className="space-y-6 px-6 py-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-slate-900">{selectedPillar.name}</h3>
                <p className="max-w-2xl text-slate-600">{selectedPillar.description}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="metric-card sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Core Audience</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-700">{selectedPillar.coreAudience}</p>
                </div>
                <div className="metric-card">
                  <p className="metric-label">Channel Share</p>
                  <p className="metric-value">{selectedPillar.channelShare}</p>
                </div>
                <div className="metric-card">
                  <p className="metric-label">Audience Fit</p>
                  <p className="metric-value">{selectedPillar.audienceFit}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
                  Subscriber Pull: {selectedPillar.subscriberPull}
                </div>
                <p className="text-sm text-slate-500">{selectedPillar.footerNote}</p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <button className="nav-arrow" aria-label="Previous pillar">
                  ←
                </button>
                <div className="flex items-center gap-2">
                  {pillars.map((pillar, index) => (
                    <span
                      key={pillar.rank}
                      className={`h-2.5 w-2.5 rounded-full ${
                        index === 0 ? 'bg-brand-600' : 'bg-slate-300'
                      }`}
                      aria-label={`Pillar ${pillar.rank}`}
                    />
                  ))}
                </div>
                <button className="nav-arrow" aria-label="Next pillar">
                  →
                </button>
              </div>
            </div>
          </article>

          <aside className="card">
            <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">
              Content Pillar Ranking
            </h4>
            <div className="mt-4 space-y-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.rank}
                  className={`rounded-xl border p-3 transition ${
                    pillar.rank === 1
                      ? 'border-brand-200 bg-brand-50/70'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                        pillar.rank === 1
                          ? 'bg-brand-600 text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {pillar.rank}
                    </span>
                    <p className="font-medium text-slate-800">{pillar.name}</p>
                  </div>
                  <p className="pl-8 text-xs text-slate-600">
                    Channel Share {pillar.channelShare} · Audience Fit {pillar.audienceFit}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {interpretationCards.map((card) => (
            <article key={card.title} className="card">
              <h5 className="text-base font-semibold text-slate-900">{card.title}</h5>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.body}</p>
            </article>
          ))}
        </section>

        <section className="card flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-600">AI reasoning signals</p>
          <div className="flex flex-wrap gap-2">
            {evidenceChips.map((chip) => (
              <span key={chip} className="signal-chip">
                {chip}
              </span>
            ))}
          </div>
        </section>

        <section className="card space-y-4 text-center">
          <h6 className="text-xl font-semibold text-slate-900">Ready to turn channel insight into strategy?</h6>
          <p className="mx-auto max-w-3xl text-sm leading-6 text-slate-600">
            Use your Channel DNA to explore where your channel should grow next, or test whether a specific video idea fits your strongest audience signals.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button className="cta-primary">Explore Growth Paths</button>
            <button className="cta-secondary">Evaluate a Video Idea</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
