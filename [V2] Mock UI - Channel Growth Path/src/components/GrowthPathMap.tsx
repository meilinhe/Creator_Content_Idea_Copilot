import { useState } from 'react';

export type GrowthPath = {
  name: string;
  score: number;
  potential: string;
  signal: string;
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
          <path d="M500 10 C390 45 300 95 180 170" className="line line-left" />
          <path d="M500 10 C500 45 500 95 500 170" className="line line-center" />
          <path d="M500 10 C610 45 700 95 820 170" className="line line-right" />
        </svg>

        <div className="paths-grid">
          {paths.map((path) => (
            <article key={path.name} className="path-card">
              <span className="chip">{path.signal}</span>

              <div className="path-head">
                <h4>{path.name}</h4>
                <span className="score">{path.score}</span>
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
