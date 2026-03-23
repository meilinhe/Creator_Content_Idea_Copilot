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
      <h2>Select Your Growth Path</h2>

      <div className="pillar-zone">
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

      <div className="path-tree">
        <svg className="connectors" viewBox="0 0 1000 110" preserveAspectRatio="none" aria-hidden>

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

          {/* left branch */}
          <path
            d="M500 5 L240 46"
            className="line"
            stroke="url(#leftBranch)"
          />

          {/* center branch */}
          <path
            d="M500 5 L500 46"
            className="line"
            stroke="url(#centerBranch)"
          />

          {/* right branch */}
          <path
            d="M500 5 L760 46"
            className="line"
            stroke="url(#rightBranch)"
          />

          {/* endpoints */}
          <circle cx="240" cy="46" r="6" fill="#6E8FF5" filter="url(#nodeGlow)" />
          <circle cx="500" cy="46" r="6" fill="#4F7DF3" filter="url(#nodeGlow)" />
          <circle cx="760" cy="46" r="6" fill="#8A5CF6" filter="url(#nodeGlow)" />

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
