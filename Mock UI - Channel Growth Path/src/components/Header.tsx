import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="header-block">
      <h1>
        Growth Paths. <span>Empowered by AI.</span>
      </h1>
      <section className="header-card section-card">
        <p>
          We analyzed your channel performance and market trends to identify the clearest ways your
          channel can grow next.
        </p>
        <div className="ai-badge">
          <Sparkles className="h-3.5 w-3.5" />
          AI-POWERED ANALYSIS
        </div>
      </section>
    </header>
  );
};

export default Header;
