import { HeroSection } from './components/HeroSection';
import { GrowthPathCards } from './components/GrowthPathCards';
import { EvidenceCards } from './components/EvidenceCards';
import { TopicCards } from './components/TopicCards';
import { ActionPlan } from './components/ActionPlan';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto" style={{ aspectRatio: '4/3' }}>
        <HeroSection />
        <GrowthPathCards />
        <EvidenceCards />
        <TopicCards />
        <ActionPlan />
      </div>
    </div>
  );
}