import Header from './components/Header';
import GrowthPathMap, { type GrowthPath } from './components/GrowthPathMap';
import NextStepCTA from './components/NextStepCTA';

const paths: GrowthPath[] = [
  {
    name: 'Double Down',
    score: 86,
    potential: 'High Potential',
    signal: 'Audience Overlap',
    signalTone: 'blue',
    ringColor: '#4F7DF3',
    topics: ['Best laptops under $500', 'Cheap student gadgets', 'Budget gaming laptops'],
    explanation: 'The safest way to grow your channel. Proven success in budget tech reviews.',
  },
  {
    name: 'Adjacent Expansion',
    score: 78,
    potential: 'Strong Potential',
    signal: 'Topic Demand',
    signalTone: 'green',
    ringColor: '#22C55E',
    topics: ['AI tools for students', 'Productivity apps for college', 'Budget home office setup'],
    explanation: 'Topics your audience already watches. Tap into student productivity trends.',
  },
  {
    name: 'Trend Opportunity',
    score: 65,
    potential: 'Moderate Potential',
    signal: 'Trend Momentum',
    signalTone: 'purple',
    ringColor: '#8A5CF6',
    topics: ['AI laptops under $800', 'Best AI tools for students', 'Cheap coding laptops'],
    explanation: 'Fast-rising topics in your niche. AI tech for students is on the rise.',
  },
];

const App = () => {
  return (
    <div className="app-shell">
      <main className="dashboard-frame">
        <div className="page">
          <Header />
          <GrowthPathMap paths={paths} />
          <NextStepCTA />
        </div>
      </main>
    </div>
  );
};

export default App;
