import Header from './components/Header';
import ChannelPillarCarousel from './components/ChannelPillarCarousel';
import GrowthPathMap, { type GrowthPath } from './components/GrowthPathMap';
import TopicPathCard from './components/TopicPathCard';
import PathExplanationCard from './components/PathExplanationCard';
import NextStepCTA from './components/NextStepCTA';

const paths: GrowthPath[] = [
  {
    name: 'Double Down',
    score: 86,
    potential: 'High Potential',
    signal: 'Audience Overlap',
    position: 'left',
  },
  {
    name: 'Adjacent Expansion',
    score: 78,
    potential: 'Strong Potential',
    signal: 'Topic Demand',
    position: 'right',
  },
  {
    name: 'Trend Opportunity',
    score: 65,
    potential: 'Moderate Potential',
    signal: 'Trend Momentum',
    position: 'top-right',
  },
];

const topicsByPath: Record<string, string[]> = {
  'Double Down': ['Best laptops under $500', 'Cheap student gadgets', 'Budget gaming laptops'],
  'Adjacent Expansion': [
    'AI tools for students',
    'Productivity apps for college',
    'Budget home office setup',
  ],
  'Trend Opportunity': [
    'AI laptops under $800',
    'Best AI tools for students',
    'Cheap coding laptops',
  ],
};

const explanations = [
  {
    title: 'Double Down',
    body: 'The safest way to grow your channel. Proven success in budget tech reviews.',
  },
  {
    title: 'Adjacent Expansion',
    body: 'Topics your audience already watches. Tap into student productivity trends.',
  },
  {
    title: 'Trend Opportunity',
    body: 'Fast-rising topics in your niche. AI tech for students is on the rise.',
  },
];

const App = () => {
  return (
    <div className="app-shell">
      <main className="page">
        <Header />
        <ChannelPillarCarousel />
        <GrowthPathMap paths={paths} />

        <section className="topics-grid" aria-label="Suggested path topics">
          {paths.map((path) => (
            <TopicPathCard key={path.name} path={path} topics={topicsByPath[path.name]} />
          ))}
        </section>

        <section className="explanations-grid" aria-label="Path explanations">
          {explanations.map((item) => (
            <PathExplanationCard key={item.title} title={item.title} body={item.body} />
          ))}
        </section>

        <NextStepCTA />
      </main>
    </div>
  );
};

export default App;
