import type { GrowthPath } from './GrowthPathMap';

type TopicPathCardProps = {
  path: GrowthPath;
  topics: string[];
};

const TopicPathCard = ({ path, topics }: TopicPathCardProps) => {
  return (
    <article className="topic-card section-card">
      <div className="card-head">
        <h3>{path.name}</h3>
        <span className="score">{path.score}</span>
      </div>
      <p className="potential">{path.potential}</p>
      <div className="topics-block">
        <h4>Suggested Topics</h4>
        <ul>
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
      <button type="button" className="primary-btn">
        Focus on this path
      </button>
    </article>
  );
};

export default TopicPathCard;
