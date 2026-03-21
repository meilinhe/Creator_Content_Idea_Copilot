export function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-[#4F7FFF] via-[#7B5FFF] to-[#9D5FFF] rounded-2xl p-12 shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-white/80 mb-4 tracking-wide">Growth Map</div>
          <h1 className="text-white mb-3">
            Recommended Path<br />
            Safe Expansion
          </h1>
          <p className="text-white/90 mb-8 max-w-xl">
            Your audience already responds to practical buying guides.
            Expanding into student-focused tech is the safest next step.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-[#4F7FFF] px-6 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Start This Path
            </button>
            <button className="bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm">
              Compare All Paths
            </button>
          </div>
        </div>

        <div className="flex gap-6 ml-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[140px]">
            <div className="text-white/70 mb-2">Fit</div>
            <div className="text-white text-2xl">High</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[140px]">
            <div className="text-white/70 mb-2">Growth potential</div>
            <div className="text-white text-2xl">Medium High</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[140px]">
            <div className="text-white/70 mb-2">Risk</div>
            <div className="text-white text-2xl">Low</div>
          </div>
        </div>
      </div>
    </div>
  );
}
