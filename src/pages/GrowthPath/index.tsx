import type { CSSProperties } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

type GrowthPath = {
  name: string;
  score: number;
  potential: string;
  signal: string;
  signalTone: 'blue' | 'green' | 'purple';
  ringColor: string;
  topics: string[];
  explanation: string;
};

type Pillar = {
  title: string;
  audience: string;
};

type Point = {
  x: number;
  y: number;
};

type ConnectorLayout = {
  width: number;
  height: number;
  start: Point;
  junction: Point;
  ends: Point[];
};

const paths: GrowthPath[] = [
  {
    name: 'Double Down',
    score: 86,
    potential: 'High Potential',
    signal: 'Audience Overlap',
    signalTone: 'blue',
    ringColor: '#4F7DF3',
    topics: ['Best laptops under $500', 'Cheap student gadgets', 'Budget gaming laptops'],
    explanation: 'The safest way to grow your channel. Proven success in budget tech reviews.',
  },
  {
    name: 'Adjacent Expansion',
    score: 78,
    potential: 'Strong Potential',
    signal: 'Topic Demand',
    signalTone: 'green',
    ringColor: '#22C55E',
    topics: ['AI tools for students', 'Productivity apps for college', 'Budget home office setup'],
    explanation: 'Topics your audience already watches. Tap into student productivity trends.',
  },
  {
    name: 'Trend Opportunity',
    score: 65,
    potential: 'Moderate Potential',
    signal: 'Trend Momentum',
    signalTone: 'purple',
    ringColor: '#8A5CF6',
    topics: ['AI laptops under $800', 'Best AI tools for students', 'Cheap coding laptops'],
    explanation: 'Fast-rising topics in your niche. AI tech for students is on the rise.',
  },
];

const pillars: Pillar[] = [
  {
    title: 'Budget Tech Reviews',
    audience: 'Budget-conscious students',
  },
  {
    title: 'Cheap Gaming Setups',
    audience: 'Beginner PC gamers',
  },
  {
    title: 'Student Productivity Tech',
    audience: 'College productivity seekers',
  },
];

const fallbackLayout: ConnectorLayout = {
  width: 1000,
  height: 110,
  start: { x: 500, y: 5 },
  junction: { x: 500, y: 27 },
  ends: [
    { x: 240, y: 46 },
    { x: 500, y: 46 },
    { x: 760, y: 46 },
  ],
};

const signalToneClasses: Record<GrowthPath['signalTone'], string> = {
  blue: 'bg-[#ebf2ff] text-[#3562d0] border-[#d6e4ff]',
  green: 'bg-[#eaf9ef] text-[#198248] border-[#d0f0dc]',
  purple: 'bg-[#f3ecff] text-[#7346d8] border-[#e5d7ff]',
};

export default function GrowthPathPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [connectorLayout, setConnectorLayout] = useState<ConnectorLayout>(fallbackLayout);

  const treeRef = useRef<HTMLDivElement>(null);
  const pillarZoneRef = useRef<HTMLDivElement>(null);
  const pathCardRefs = useRef<Array<HTMLElement | null>>([]);

  const prev = () => setActiveIndex((current) => (current - 1 + pillars.length) % pillars.length);
  const next = () => setActiveIndex((current) => (current + 1) % pillars.length);

  useLayoutEffect(() => {
    const treeElement = treeRef.current;
    const pillarElement = pillarZoneRef.current;

    if (!treeElement || !pillarElement || paths.length === 0) {
      return;
    }

    const updateConnectorLayout = () => {
      const treeRect = treeElement.getBoundingClientRect();
      const pillarRect = pillarElement.getBoundingClientRect();
      const endpointRects = pathCardRefs.current.map((node) => node?.getBoundingClientRect() ?? null);

      if (endpointRects.some((rect) => !rect)) {
        return;
      }

      const startPoint = {
        x: pillarRect.left + pillarRect.width / 2 - treeRect.left,
        y: pillarRect.bottom - treeRect.top,
      };

      const endPoints = endpointRects.map((rect) => ({
        x: rect!.left + rect!.width / 2 - treeRect.left,
        y: rect!.top - treeRect.top,
      }));

      const junctionPoint = {
        x: startPoint.x,
        y: startPoint.y + 22,
      };

      const maxY = Math.max(startPoint.y, ...endPoints.map((point) => point.y));

      setConnectorLayout({
        width: treeRect.width,
        height: Math.max(1, maxY + 10),
        start: startPoint,
        junction: junctionPoint,
        ends: endPoints,
      });
    };

    updateConnectorLayout();

    const resizeObserver = new ResizeObserver(() => {
      updateConnectorLayout();
    });

    resizeObserver.observe(treeElement);
    resizeObserver.observe(pillarElement);
    pathCardRefs.current.forEach((node) => {
      if (node) {
        resizeObserver.observe(node);
      }
    });

    window.addEventListener('resize', updateConnectorLayout);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateConnectorLayout);
    };
  }, []);

  return (
    <div className="mock-page-body text-slate-700">
      <div className="flex h-full w-full flex-col gap-2">
        <h1 className="text-[52px] font-bold leading-[1.0] tracking-tight text-slate-800">
          Your Growth Paths.
          <span className="ml-3 bg-gradient-to-r from-[#4F7DF7] via-[#7C6BFF] to-[#A855F7] bg-clip-text text-transparent">
            Unlocked.
          </span>
        </h1>

        <header className="rounded-3xl border border-[#e5eaf5] bg-white px-[18px] py-[14px] shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <p className="max-w-[860px] text-[16px] text-slate-600">
              We analyzed your channel performance and market trends to identify the clearest ways your
              channel can grow next.
            </p>
            <div className="ai-badge">
              <Sparkles className="h-3.5 w-3.5" />
              AI-POWERED ANALYSIS
            </div>
          </div>
        </header>

        <section className="rounded-[20px] border border-[#e5eaf5] bg-white p-5 shadow-sm">
          <h2 className="text-center text-[clamp(1.35rem,1.75vw,1.75rem)] text-slate-900">Select Your Growth Path</h2>

          <div
            ref={pillarZoneRef}
            className="relative z-[1] mx-auto mt-[10px] max-w-[720px] overflow-visible rounded-[18px] border border-[#e2e8f5] bg-gradient-to-br from-[#fcfdff] to-[#f7f9ff] p-[14px] text-center"
          >
            <div className="eyebrow">Your Content Pillars</div>

            <div className="mt-2 flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Previous pillar"
                className="h-9 w-9 rounded-full border border-[#d7deec] bg-white text-[#4f7df3]"
                onClick={prev}
              >
                ←
              </button>

              <article className="min-w-[min(520px,72vw)] rounded-2xl border border-[#e2e8f5] bg-white p-[14px] shadow-sm">
                <h4 className="text-[1.1rem] text-[#2d4fae]">{pillars[activeIndex].title}</h4>
                <p className="mt-2 flex flex-wrap items-center justify-center gap-2 text-[0.97rem]">
                  <span className="font-semibold text-[#4f7df3]">Core Audience</span>
                  <span className="inline-flex items-center rounded-full border border-[#d9e5ff] bg-[#eef3ff] px-[10px] py-1 text-[0.82rem] font-medium text-slate-700">
                    {pillars[activeIndex].audience}
                  </span>
                </p>
              </article>

              <button
                type="button"
                aria-label="Next pillar"
                className="h-9 w-9 rounded-full border border-[#d7deec] bg-white text-[#4f7df3]"
                onClick={next}
              >
                →
              </button>
            </div>

            <div className="mt-[9px] flex justify-center gap-2" role="tablist" aria-label="Pillar indicators">
              {pillars.map((pillar, index) => (
                <button
                  key={pillar.title}
                  type="button"
                  aria-label={`Show ${pillar.title}`}
                  className={`h-2 rounded-full border-0 bg-[#cdd6ea] ${index === activeIndex ? 'w-[22px] bg-gradient-to-r from-[#4f7df3] to-[#8a5cf6]' : 'w-2'}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          <div ref={treeRef} className="relative z-[3] -mt-[18px] pt-[78px]">
            <svg
              className="pointer-events-none absolute left-0 top-0 z-20 h-40 w-full"
              viewBox={`0 0 ${connectorLayout.width} ${connectorLayout.height}`}
              preserveAspectRatio="none"
              style={{ height: `${connectorLayout.height}px` }}
              aria-hidden
            >
              <defs>
                <linearGradient id="leftBranch" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4F7DF3" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#6E8FF5" stopOpacity="0.45" />
                </linearGradient>

                <linearGradient id="rightBranch" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6E8FF5" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#8A5CF6" stopOpacity="0.45" />
                </linearGradient>

                <filter id="nodeGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {connectorLayout.ends.map((point, index) => (
                <path
                  key={`branch-line-${paths[index]?.name ?? index}`}
                  d={`M${connectorLayout.start.x} ${connectorLayout.start.y} L${point.x} ${point.y}`}
                  className="fill-none stroke-[7] stroke-linecap-round opacity-45"
                  stroke={
                    index === 0
                      ? 'url(#leftBranch)'
                      : index === 1
                        ? 'rgba(79,125,243,0.45)'
                        : 'url(#rightBranch)'
                  }
                />
              ))}

              {connectorLayout.ends.map((point, index) => (
                <circle
                  key={`branch-end-${paths[index]?.name ?? index}`}
                  cx={point.x}
                  cy={point.y}
                  r="6"
                  fill={index === 0 ? '#6E8FF5' : index === 1 ? '#4F7DF3' : '#8A5CF6'}
                  filter="url(#nodeGlow)"
                />
              ))}
            </svg>

            <div className="relative z-[1] grid grid-cols-3 items-stretch gap-[15px]">
              {paths.map((path, pathIndex) => (
                <article
                  key={path.name}
                  ref={(node) => {
                    pathCardRefs.current[pathIndex] = node;
                  }}
                  className="flex flex-col gap-1.5 rounded-2xl border border-[#e2e8f5] bg-white p-[15px] shadow-sm"
                >
                  <span
                    className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${signalToneClasses[path.signalTone]}`}
                  >
                    <span className="text-[0.66rem]" aria-hidden>
                      ✦
                    </span>
                    {path.signal}
                  </span>

                  <div className="mb-0.5 flex items-start justify-between gap-3">
                    <div className="flex min-w-0 flex-col justify-start">
                      <h4 className="text-[0.98rem] leading-[1.15] text-slate-900">{path.name}</h4>
                      <p className="mt-2 text-[0.88rem] font-semibold leading-[1.1]" style={{ color: path.ringColor }}>
                        {path.potential}
                      </p>
                    </div>

                    <div
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-full"
                      style={{
                        '--score': `${path.score}%`,
                        '--ring-color': path.ringColor,
                        background: 'conic-gradient(var(--ring-color) var(--score), #e9eef9 0)',
                      } as CSSProperties}
                    >
                      <span className="grid h-[38px] w-[38px] place-items-center rounded-full border border-[#eef2fa] bg-white text-[0.78rem] font-bold text-slate-800">
                        {path.score}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#e3e8f3] bg-[#fafbff] p-[9px]">
                    <p className="text-[0.8rem] font-bold text-[#2d4fae]">Suggested Topics</p>
                    <div className="mt-2 grid grid-cols-1 gap-2">
                      {path.topics.map((topic) => (
                        <span
                          key={topic}
                          className="w-full rounded-full border border-[#d9dfec] bg-[#f1f3f9] px-3 py-[7px] text-[0.84rem] text-slate-700"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button type="button" className="primary-btn w-full self-stretch">
                    Focus on this path
                  </button>

                  <p className="mt-auto text-[0.84rem] text-slate-500">{path.explanation}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[20px] border border-[#e5eaf5] bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[1.35rem] text-slate-900">Ready to explore new ideas?</h2>
            <div className="flex items-center gap-2">
              <button type="button" className="primary-btn alt-gradient">
                Evaluate New Topic Idea
              </button>
              <button type="button" className="primary-btn alt-gradient">
                Improve a Topic Idea
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
