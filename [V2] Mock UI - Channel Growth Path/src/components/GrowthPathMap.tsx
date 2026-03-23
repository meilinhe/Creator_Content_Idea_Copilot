import type { CSSProperties } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

export type GrowthPath = {
  name: string;
  score: number;
  potential: string;
  signal: string;
  signalTone: 'blue' | 'green' | 'purple';
  ringColor: string;
  topics: string[];
  explanation: string;
};

type GrowthPathMapProps = {
  paths: GrowthPath[];
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
  ends: Point[];
};

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
  ends: [
    { x: 240, y: 46 },
    { x: 500, y: 46 },
    { x: 760, y: 46 },
  ],
};

const GrowthPathMap = ({ paths }: GrowthPathMapProps) => {
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

      const maxY = Math.max(startPoint.y, ...endPoints.map((point) => point.y));

      setConnectorLayout({
        width: treeRect.width,
        height: Math.max(1, maxY + 10),
        start: startPoint,
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
  }, [paths.length]);

  return (
    <section className="analysis-module section-card">
      <h2>Select Your Growth Path</h2>

      <div ref={pillarZoneRef} className="pillar-zone">
        <div className="eyebrow">Your Content Pillars</div>

        <div className="pillar-carousel">
          <button type="button" aria-label="Previous pillar" className="arrow-btn" onClick={prev}>
            ←
          </button>
          <article className="pillar-card">
            <h4>{pillars[activeIndex].title}</h4>
            <p className="pillar-audience-row">
              <span className="audience-label">Core Audience</span>
              <span className="audience-pill">{pillars[activeIndex].audience}</span>
            </p>
          </article>
          <button type="button" aria-label="Next pillar" className="arrow-btn" onClick={next}>
            →
          </button>
        </div>

        <div className="dots" role="tablist" aria-label="Pillar indicators">
          {pillars.map((pillar, index) => (
            <button
              key={pillar.title}
              type="button"
              aria-label={`Show ${pillar.title}`}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <div ref={treeRef} className="path-tree">
        <svg
          className="connectors"
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

            <linearGradient id="centerBranch" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F7DF3" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#4F7DF3" stopOpacity="0.45" />
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
              className="line"
              stroke={index === 0 ? 'url(#leftBranch)' : index === 1 ? 'url(#centerBranch)' : 'url(#rightBranch)'}
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

        <div className="paths-grid">
          {paths.map((path, pathIndex) => (
            <article
              key={path.name}
              ref={(node) => {
                pathCardRefs.current[pathIndex] = node;
              }}
              className="path-card"
            >
              <span className={`chip chip-${path.signalTone}`}>
                <span className="chip-icon" aria-hidden>
                  ✦
                </span>
                {path.signal}
              </span>

              <div className="path-head">
                <h4>{path.name}</h4>
                <div
                  className="score-ring"
                  style={
                    {
                      '--score': `${path.score}%`,
                      '--ring-color': path.ringColor,
                    } as CSSProperties
                  }
                >
                  <span>{path.score}</span>
                </div>
              </div>

              <p className="potential" style={{ color: path.ringColor }}>
                {path.potential}
              </p>

              <div className="topics-subcard">
                <p className="topics-label">Suggested Topics</p>
                <div className="topic-bubbles">
                  {path.topics.map((topic) => (
                    <span key={topic} className="topic-bubble">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <button type="button" className="primary-btn path-focus-btn">
                Focus on this path
              </button>

              <p className="explanation">{path.explanation}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthPathMap;
