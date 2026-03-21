export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-slate-50 p-8">
      {/* 4:3 aspect ratio container */}
      <div className="w-full max-w-[1280px] aspect-[4/3] bg-white rounded-2xl shadow-2xl overflow-y-auto">
        <div className="p-8 space-y-6">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-3xl bg-gradient-to-r from-[#4F7FFF] via-[#7B5FFF] to-[#9D5FFF] bg-clip-text text-transparent">
              Channel DNA
            </h1>
          </div>

          {/* Section 1: AI Strategy Insight (Hero) */}
          <div className="relative bg-gradient-to-r from-[#4F7FFF] via-[#7B5FFF] to-[#9D5FFF] rounded-xl p-6 shadow-lg">
            <div className="flex gap-6">
              {/* Left side content */}
              <div className="flex-1 space-y-4">
                <div className="text-white/80 text-sm uppercase tracking-wide">
                  AI Channel Insight
                </div>
                <h2 className="text-white text-2xl">
                  Your channel grows best when helping viewers choose affordable tech.
                </h2>
                <p className="text-white/90">
                  Buying-guide videos and budget comparisons bring your strongest subscriber growth.
                </p>

                {/* Action chips */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2">
                    <div className="text-white/70 text-xs">Double down</div>
                    <div className="text-white">Budget laptop comparisons</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2">
                    <div className="text-white/70 text-xs">Test next</div>
                    <div className="text-white">Student laptop setup guides</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2">
                    <div className="text-white/70 text-xs">Reduce</div>
                    <div className="text-white">General tech commentary</div>
                  </div>
                </div>
              </div>

              {/* Right side metrics */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 space-y-3 min-w-[200px]">
                <div>
                  <div className="text-white/70 text-sm">Core clarity</div>
                  <div className="text-white text-xl">High</div>
                </div>
                <div className="h-px bg-white/20"></div>
                <div>
                  <div className="text-white/70 text-sm">Expansion readiness</div>
                  <div className="text-white text-xl">Medium</div>
                </div>
                <div className="h-px bg-white/20"></div>
                <div>
                  <div className="text-white/70 text-sm">Content waste</div>
                  <div className="text-white text-xl">23%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Topic Role Matrix */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl mb-4">How Your Topics Actually Work</h3>

            {/* 2x2 Quadrant Chart */}
            <div className="relative grid grid-cols-2 gap-4 mt-6">
              {/* Axes labels */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-sm text-gray-600">
                Reach Potential
              </div>
              <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-sm text-gray-600">
                Audience Loyalty
              </div>

              {/* Core Growth Drivers */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 space-y-3">
                <div className="text-blue-900 uppercase text-xs tracking-wide">Core Growth Drivers</div>
                <div className="space-y-2">
                  <div className="bg-white border border-blue-200 rounded-lg p-3">
                    <div className="text-sm">Best laptops under $500</div>
                    <div className="text-xs text-blue-600">Strong subscriber pull</div>
                  </div>
                  <div className="bg-white border border-blue-200 rounded-lg p-3">
                    <div className="text-sm">Budget laptop comparison 2026</div>
                    <div className="text-xs text-blue-600">High repeat viewers</div>
                  </div>
                </div>
              </div>

              {/* Audience Builders */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 space-y-3">
                <div className="text-green-900 uppercase text-xs tracking-wide">Audience Builders</div>
                <div className="space-y-2">
                  <div className="bg-white border border-green-200 rounded-lg p-3">
                    <div className="text-sm">Student laptop buying guide</div>
                    <div className="text-xs text-green-600">High loyalty signal</div>
                  </div>
                  <div className="bg-white border border-green-200 rounded-lg p-3">
                    <div className="text-sm">Student desk setup tech</div>
                    <div className="text-xs text-green-600">High returning viewers</div>
                  </div>
                </div>
              </div>

              {/* Reach Boosters */}
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 space-y-3">
                <div className="text-purple-900 uppercase text-xs tracking-wide">Reach Boosters</div>
                <div className="space-y-2">
                  <div className="bg-white border border-purple-200 rounded-lg p-3">
                    <div className="text-sm">Cheap AI gadgets review</div>
                    <div className="text-xs text-purple-600">High discovery traffic</div>
                  </div>
                  <div className="bg-white border border-purple-200 rounded-lg p-3">
                    <div className="text-sm">Amazon tech under $30</div>
                    <div className="text-xs text-purple-600">Trending topic</div>
                  </div>
                </div>
              </div>

              {/* Low Leverage */}
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 space-y-3">
                <div className="text-orange-900 uppercase text-xs tracking-wide">Low Leverage</div>
                <div className="space-y-2">
                  <div className="bg-white border border-orange-200 rounded-lg p-3">
                    <div className="text-sm">Weekly tech news reaction</div>
                    <div className="text-xs text-orange-600">Low subscriber conversion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Misjudged Areas */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl mb-4">Things Your Channel Might Be Misreading</h3>

            <div className="grid grid-cols-2 gap-6">
              {/* Left column: Undervalued Opportunities */}
              <div>
                <div className="text-purple-600 uppercase text-xs tracking-wide mb-3">
                  Undervalued Opportunities
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="text-sm mb-1">Student laptop buying guide</div>
                    <div className="text-xs text-gray-600">Past videos weak</div>
                    <div className="text-xs text-purple-600">Strong demand across similar channels</div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="text-sm mb-1">Cheap AI study tools</div>
                    <div className="text-xs text-gray-600">Low channel history</div>
                    <div className="text-xs text-purple-600">Trend rising fast</div>
                  </div>
                </div>
              </div>

              {/* Right column: Narrow Wins */}
              <div>
                <div className="text-orange-600 uppercase text-xs tracking-wide mb-3">
                  Narrow Wins
                </div>
                <div className="space-y-3">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="text-sm mb-1">Detailed gadget teardown</div>
                    <div className="text-xs text-gray-600">Very strong engagement</div>
                    <div className="text-xs text-orange-600">Small audience size</div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="text-sm mb-1">Accessory comparison deep dives</div>
                    <div className="text-xs text-gray-600">Strong niche audience</div>
                    <div className="text-xs text-orange-600">Limited discovery reach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Next Strategic Move */}
          <div className="bg-white border-2 border-transparent bg-gradient-to-r from-[#4F7FFF] via-[#7B5FFF] to-[#9D5FFF] bg-origin-border rounded-xl shadow-sm">
            <div className="bg-white rounded-[10px] p-6">
              <h3 className="text-xl mb-4">Where To Explore Next</h3>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <button className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-4 text-left transition-colors">
                  <div className="text-sm text-blue-900 mb-1">Core Reinforcement</div>
                  <div className="text-xs text-gray-600">Repeat your strongest formats</div>
                </button>
                <button className="bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg p-4 text-left transition-colors">
                  <div className="text-sm text-purple-900 mb-1">Safe Expansion</div>
                  <div className="text-xs text-gray-600">Move into nearby student tech topics</div>
                </button>
                <button className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-4 text-left transition-colors">
                  <div className="text-sm text-green-900 mb-1">Trend Tests</div>
                  <div className="text-xs text-gray-600">Try fast-rising topics</div>
                </button>
              </div>

              <button className="w-full bg-gradient-to-r from-[#4F7FFF] via-[#7B5FFF] to-[#9D5FFF] text-white rounded-lg px-6 py-3 hover:opacity-90 transition-opacity">
                Open Growth Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}