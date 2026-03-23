import { useState } from 'react';

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

const ChannelPillarCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((current) => (current - 1 + pillars.length) % pillars.length);
  const next = () => setActiveIndex((current) => (current + 1) % pillars.length);

  return (
    <section className="pillar-wrapper section-card">
      <div className="eyebrow">Your Channel</div>
      <h2>Active Content Pillars</h2>
      <div className="pillar-carousel">
        <button type="button" aria-label="Previous pillar" className="arrow-btn" onClick={prev}>
          ←
        </button>
        <article className="pillar-card">
          <h3>{pillars[activeIndex].title}</h3>
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
    </section>
  );
};

export default ChannelPillarCarousel;
