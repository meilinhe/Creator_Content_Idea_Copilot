export type GrowthPath = {
  name: string;
  score: number;
  potential: string;
  signal: string;
  position: 'left' | 'right' | 'top-right';
};

type GrowthPathMapProps = {
  paths: GrowthPath[];
};

const GrowthPathMap = ({ paths }: GrowthPathMapProps) => {
  return (
    <section className="map section-card">
      <h2>Choose Your Growth Path</h2>
      <div className="map-canvas">
        <svg className="connectors" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden>
          <path d="M500 260 C430 260 350 260 265 300" className="line line-left" />
          <path d="M500 260 C570 260 650 250 740 240" className="line line-right" />
          <path d="M500 260 C560 210 640 160 740 130" className="line line-top-right" />
        </svg>

        <div className="channel-node">Your Channel</div>

        {paths.map((path) => (
          <article key={path.name} className={`path-node ${path.position}`}>
            <div className="path-header">
              <h3>{path.name}</h3>
              <span className="score">{path.score}</span>
            </div>
            <p>{path.potential}</p>
            <span className="chip">{path.signal}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GrowthPathMap;
