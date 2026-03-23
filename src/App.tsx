import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import IdeaEvaluationPage from './pages/IdeaEvaluation';
import ChannelDNAPage from './pages/ChannelDNA';
import GrowthPathPage from './pages/GrowthPath';

const links = [
  { to: '/idea-evaluation', label: 'Idea Evaluation' },
  { to: '/channel-dna', label: 'Channel DNA' },
  { to: '/growth-path', label: 'Growth Path' },
];

function RouteTabs() {
  const { pathname } = useLocation();

  return (
    <nav className="route-tabs" aria-label="Mock page routes">
      {links.map((link) => (
        <Link key={link.to} to={link.to} className={`chip ${pathname === link.to ? 'chip-active' : ''}`}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default function App() {
  return (
    <div className="app-canvas">
      <RouteTabs />
      <div className="page-shell">
        <div className="page-frame">
          <Routes>
            <Route path="/" element={<Navigate to="/idea-evaluation" replace />} />
            <Route path="/idea-evaluation" element={<IdeaEvaluationPage />} />
            <Route path="/channel-dna" element={<ChannelDNAPage />} />
            <Route path="/growth-path" element={<GrowthPathPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
