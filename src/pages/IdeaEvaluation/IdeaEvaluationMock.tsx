import {
  Sparkles,
  TrendingUp,
  Users,
  AlertCircle,
  Clock,
  Zap,
  ArrowUpRight,
  Play,
  BarChart3,
  CheckSquare,
} from 'lucide-react';

export function IdeaEvaluationMock() {
  return (
<div className="w-full max-w-[1380px] mx-auto p-3">
  <div className="relative w-full">
    <div className="bg-white rounded-2xl shadow-2xl p-8">

          {/* Header Labels */}
          <h1 className="text-[54px] font-bold leading-[1.02] tracking-tight text-slate-800">
            Your Video Idea.
            <span className="ml-3 bg-gradient-to-r from-[#4F7DF7] via-[#7C6BFF] to-[#A855F7] bg-clip-text text-transparent">
              Evaludated by AI.
            </span>
          </h1>

          {/* Section 1: Idea Input */}
          <div className="bg-white rounded-xl border-2 border-gray-100 p-4 mb-3 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="text-[10px] tracking-widest text-gray-500 uppercase flex-shrink-0">
                Video Idea
              </div>
              <div className="flex-1 text-md text-gray-900">
                "Why Cheap Laptops Are Getting Worse in 2026"
              </div>
              <div 
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                style={{ 
                  background: 'linear-gradient(135deg, #4F7FFF 0%, #6B5FFF 100%)',
                  color: 'white'
                }}
              >
                <Sparkles className="w-3 h-3" />
                <span>AI-POWERED ANALYSIS</span>
                <div className="flex gap-0.5 ml-1">
                  <div className="w-1 h-1 rounded-full bg-white/60 animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: AI Evaluation Metrics */}
          <div className="grid grid-cols-5 gap-3 mb-3">
            {/* Metric 1: Audience Fit */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
              <div className="flex items-center gap-1.5 mb-2">
                <Users className="w-3.5 h-3.5 text-gray-400" />
                <div className="text-[10px] text-gray-600 uppercase tracking-wide">Audience Fit</div>
              </div>
              <div className="text-3xl mb-1" style={{ color: '#4F7FFF' }}>82</div>
              <div className="text-[9px] text-gray-400 mb-2">/100</div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full rounded-full" 
                  style={{ width: '82%', background: '#4F7FFF' }}
                ></div>
              </div>
              <div className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50 inline-block mb-1" style={{ color: '#4F7FFF' }}>
                Strong
              </div>
              <div className="text-[9px] text-gray-500 leading-tight">
                High overlap with your current audience
              </div>
            </div>

            {/* Metric 2: Viewer Demand */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
              <div className="flex items-center gap-1.5 mb-2">
                <TrendingUp className="w-3.5 h-3.5 text-gray-400" />
                <div className="text-[10px] text-gray-600 uppercase tracking-wide">Viewer Demand</div>
              </div>
              <div className="text-3xl mb-1 text-green-600">74</div>
              <div className="text-[9px] text-gray-400 mb-2">/100</div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full rounded-full bg-green-500" 
                  style={{ width: '74%' }}
                ></div>
              </div>
              <div className="text-[9px] px-1.5 py-0.5 rounded bg-green-50 text-green-600 inline-block mb-1">
                Rising
              </div>
              <div className="text-[9px] text-gray-500 leading-tight">
                Strong performance across similar channels
              </div>
            </div>

            {/* Metric 3: Growth Contribution */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
              <div className="flex items-center gap-1.5 mb-2">
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                <div className="text-[10px] text-gray-600 uppercase tracking-wide">Growth</div>
              </div>
              <div className="text-3xl mb-1" style={{ color: '#4F7FFF' }}>78</div>
              <div className="text-[9px] text-gray-400 mb-2">/100</div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full rounded-full" 
                  style={{ width: '78%', background: '#4F7FFF' }}
                ></div>
              </div>
              <div className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50 inline-block mb-1" style={{ color: '#4F7FFF' }}>
                Audience Expansion
              </div>
              <div className="text-[9px] text-gray-500 leading-tight">
                Reaches beyond core audience
              </div>
            </div>

            {/* Metric 4: Execution Risk */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
              <div className="flex items-center gap-1.5 mb-2">
                <AlertCircle className="w-3.5 h-3.5 text-gray-400" />
                <div className="text-[10px] text-gray-600 uppercase tracking-wide">Execution Risk</div>
              </div>
              <div className="text-3xl mb-1 text-orange-500">High</div>
              <div className="text-[9px] text-gray-400 mb-2">&nbsp;</div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full rounded-full bg-orange-400" 
                  style={{ width: '70%' }}
                ></div>
              </div>
              <div className="text-[9px] px-1.5 py-0.5 rounded bg-orange-50 text-orange-600 inline-block mb-1">
                Medium-High
              </div>
              <div className="text-[9px] text-gray-500 leading-tight">
                Needs strong packaging to stand out
              </div>
            </div>

            {/* Metric 5: Timing Strength */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
              <div className="flex items-center gap-1.5 mb-2">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <div className="text-[10px] text-gray-600 uppercase tracking-wide">Timing</div>
              </div>
              <div className="text-2xl mb-1 text-green-600">Good</div>
              <div className="text-[9px] text-gray-400 mb-2">&nbsp;</div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full rounded-full bg-green-500" 
                  style={{ width: '75%' }}
                ></div>
              </div>
              <div className="text-[9px] px-1.5 py-0.5 rounded bg-green-50 text-green-600 inline-block mb-1">
                Good Timing
              </div>
              <div className="text-[9px] text-gray-500 leading-tight">
                Interest currently trending upward
              </div>
            </div>
          </div>

          {/* Section 4: Recommendation (Hero Element) */}
          <div 
            className="rounded-xl p-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #4F7FFF 0%, #7B5FFF 50%, #9D5FFF 100%)'
            }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Title */}
              <div className="text-[10px] tracking-widest text-white/70 uppercase mb-3">
                AI Recommendation
              </div>

              {/* Main Verdict and Role */}
              <div className="flex items-center gap-3 mb-4">
                <div className="px-5 py-2 bg-white/95 rounded-full">
                  <span className="text-lg tracking-wide" style={{ color: '#4F7FFF' }}>
                    TEST SOON
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 rounded-full backdrop-blur-sm">
                  <ArrowUpRight className="w-3 h-3 text-white" />
                  <span className="text-xs text-white">Expansion Video</span>
                </div>
              </div>

              {/* Reasoning Summary */}
              <div className="text-sm italic text-white/95 mb-5 leading-relaxed">
                Strong audience fit and rising demand. Needs a sharper angle to reduce execution risk.
              </div>

              {/* Recommended Video Topics */}
              <div className="text-[10px] tracking-widest text-white/70 uppercase mb-3">
                Recommended Video Topics
              </div>

              <div className="grid grid-cols-3 gap-3">
                {/* Option 1 */}
                <div className="bg-white/95 rounded-lg p-3 cursor-pointer hover:bg-white transition-all hover:scale-105 group">
                  <div className="flex items-start gap-2 mb-2">
                    <Zap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#4F7FFF' }} />
                    <div className="text-xs text-gray-900 leading-tight">
                      "Best Budget Laptops Under $500"
                    </div>
                  </div>
                  <div className="text-[9px] px-2 py-1 rounded-full bg-green-50 text-green-700 inline-block">
                    Safe Version
                  </div>
                </div>

                {/* Option 2 */}
                <div className="bg-white/95 rounded-lg p-3 cursor-pointer hover:bg-white transition-all hover:scale-105 group">
                  <div className="flex items-start gap-2 mb-2">
                    <Zap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#4F7FFF' }} />
                    <div className="text-xs text-gray-900 leading-tight">
                      "Why Cheap Laptops Are Getting Worse"
                    </div>
                  </div>
                  <div className="text-[9px] px-2 py-1 rounded-full inline-block" style={{ background: '#E8EEFF', color: '#4F7FFF' }}>
                    Growth Angle
                  </div>
                </div>

                {/* Option 3 */}
                <div className="bg-white/95 rounded-lg p-3 cursor-pointer hover:bg-white transition-all hover:scale-105 group">
                  <div className="flex items-start gap-2 mb-2">
                    <Zap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#4F7FFF' }} />
                    <div className="text-xs text-gray-900 leading-tight">
                      "Are $300 Laptops a Scam?"
                    </div>
                  </div>
                  <div className="text-[9px] px-2 py-1 rounded-full bg-purple-50 text-purple-700 inline-block">
                    High-CTR Hook
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Action Hub (Most Prominent) */}
          <div 
            className="rounded-xl p-6 mt-3 relative overflow-hidden shadow-lg"
            style={{
              background: 'white',
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #4F7FFF 0%, #7B5FFF 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
          >
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] tracking-widest uppercase" style={{ color: '#4F7FFF' }}>
                  Next Actions For This Idea
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-4 gap-2 mb-2">
                {/* Action 1: Improve Angle */}
                <button className="bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 rounded-2xl px-3 py-4 text-left transition-all hover:scale-105 hover:shadow-lg shadow-md border border-blue-200/70">
                  <div className="flex justify-center mb-">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4F7FFF 0%, #6B5FFF 100%)' }}>
                      <Zap className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <div className="text-[14px] text-center mb-0.5" style={{ color: '#2D3B8F' }}>
                    Improve the Angle
                  </div>
                  <div className="text-[9px] text-center text-gray-600 leading-tight">
                    Generate stronger concept variations
                  </div>
                </button>

                {/* Action 2: Test Alternative Titles */}
                <button className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 hover:from-indigo-100 hover:to-indigo-200/50 rounded-2xl px-2 py-1.5 text-left transition-all hover:scale-105 hover:shadow-lg shadow-md border border-indigo-200/70">
                  <div className="flex justify-center mb-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4F7FFF 0%, #7B5FFF 100%)' }}>
                      <Play className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <div className="text-[14px] text-center mb-0.5" style={{ color: '#2D3B8F' }}>
                    Test Better Titles
                  </div>
                  <div className="text-[9px] text-center text-gray-600 leading-tight">
                    Explore high-CTR hooks
                  </div>
                </button>

                {/* Action 3: Validate Demand */}
                <button className="bg-gradient-to-br from-purple-50 to-purple-100/50 hover:from-purple-100 hover:to-purple-200/50 rounded-2xl px-2 py-1.5 text-left transition-all hover:scale-105 hover:shadow-lg shadow-md border border-purple-200/70">
                  <div className="flex justify-center mb-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6B5FFF 0%, #9D5FFF 100%)' }}>
                      <BarChart3 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <div className="text-[14px] text-center mb-0.5" style={{ color: '#2D3B8F' }}>
                    Validate Market Demand
                  </div>
                  <div className="text-[9px] text-center text-gray-600 leading-tight">
                    See how similar videos perform
                  </div>
                </button>

                {/* Action 4: Plan This Video */}
                <button className="bg-gradient-to-br from-violet-50 to-violet-100/50 hover:from-violet-100 hover:to-violet-200/50 rounded-2xl px-3 py-4 text-left transition-all hover:scale-105 hover:shadow-lg shadow-md border border-violet-200/70">
                  <div className="flex justify-center mb-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7B5FFF 0%, #9D5FFF 100%)' }}>
                      <CheckSquare className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <div className="text-[14px] text-center mb-0.5" style={{ color: '#2D3B8F' }}>
                    Turn Into Video Plan
                  </div>
                  <div className="text-[9px] text-center text-gray-600 leading-tight">
                    Outline structure and hook
                  </div>
                </button>
              </div>

            </div>
          </div> 

        </div>
      </div>
    </div>
  );
}