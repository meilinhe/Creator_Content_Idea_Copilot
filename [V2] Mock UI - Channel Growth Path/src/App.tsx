import Header from './components/Header';
import GrowthPathMap, { type GrowthPath } from './components/GrowthPathMap';
import NextStepCTA from './components/NextStepCTA';

const paths: GrowthPath[] = [
  {
    name: 'Double Down',
    score: 86,
    potential: 'High Potential',
    signal: 'Audience Overlap',
    topics: ['Best laptops under $500', 'Cheap student gadgets', 'Budget gaming laptops'],
    explanation: 'The safest way to grow your channel. Proven success in budget tech reviews.',
  },
  {
    name: 'Adjacent Expansion',
    score: 78,
    potential: 'Strong Potential',
    signal: 'Topic Demand',
    topics: ['AI tools for students', 'Productivity apps for college', 'Budget home office setup'],
    explanation: 'Topics your audience already watches. Tap into student productivity trends.',
  },
  {
    name: 'Trend Opportunity',
    score: 65,
    potential: 'Moderate Potential',
    signal: 'Trend Momentum',
    topics: ['AI laptops under $800', 'Best AI tools for students', 'Cheap coding laptops'],
    explanation: 'Fast-rising topics in your niche. AI tech for students is on the rise.',
  },
];

const App = () => {
  return (
    <div className="app-shell">
      <main className="page">
        <Header />
        <GrowthPathMap paths={paths} />
        <NextStepCTA />
      </main>
    </div>
  );
};

export default App;
