import type { CSSProperties } from 'react';
import { useState } from 'react';

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

const GrowthPathMap = ({ paths }: GrowthPathMapProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((current) => (current - 1 + pillars.length) % pillars.length);
  const next = () => setActiveIndex((current) => (current + 1) % pillars.length);

  return (
    <section className="analysis-module section-card">
      <h2>Choose Your Growth Path</h2>
      <p className="analysis-subtitle">This channel → these 3 growth directions</p>

      <div className="pillar-zone">
        <div className="eyebrow">Your Channel</div>
        <h3>Active Content Pillars</h3>

        <div className="pillar-carousel">
          <button type="button" aria-label="Previous pillar" className="arrow-btn" onClick={prev}>
            ←
          </button>
          <article className="pillar-card">
            <h4>{pillars[activeIndex].title}</h4>
            <p>
              <span>Core Audience:</span> {pillars[activeIndex].audience}
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

      <div className="path-tree">
        <svg className="connectors" viewBox="0 0 1000 210" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="leftBranch" x1="500" y1="10" x2="180" y2="170" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4F7DF3" />
              <stop offset="100%" stopColor="#6E8FF5" />
            </linearGradient>
            <linearGradient id="centerBranch" x1="500" y1="10" x2="500" y2="170" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4F7DF3" />
              <stop offset="100%" stopColor="#4F7DF3" />
            </linearGradient>
            <linearGradient id="rightBranch" x1="500" y1="10" x2="820" y2="170" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6E8FF5" />
              <stop offset="100%" stopColor="#8A5CF6" />
            </linearGradient>
            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path d="M500 10 C390 38 300 92 180 170" className="line" stroke="url(#leftBranch)" />
          <path d="M500 10 C500 35 500 92 500 170" className="line" stroke="url(#centerBranch)" />
          <path d="M500 10 C610 38 700 92 820 170" className="line" stroke="url(#rightBranch)" />

          <circle cx="180" cy="170" r="5" fill="#6E8FF5" filter="url(#nodeGlow)" />
          <circle cx="500" cy="170" r="5" fill="#4F7DF3" filter="url(#nodeGlow)" />
          <circle cx="820" cy="170" r="5" fill="#8A5CF6" filter="url(#nodeGlow)" />
        </svg>

        <div className="paths-grid">
          {paths.map((path) => (
            <article key={path.name} className="path-card">
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

              <p className="potential">{path.potential}</p>

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

              <button type="button" className="primary-btn">
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
