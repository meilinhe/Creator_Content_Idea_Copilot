type PathExplanationCardProps = {
  title: string;
  body: string;
};

const PathExplanationCard = ({ title, body }: PathExplanationCardProps) => {
  return (
    <article className="explanation-card section-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
};

export default PathExplanationCard;
