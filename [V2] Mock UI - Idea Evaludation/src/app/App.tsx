export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-slate-50 p-8">
      <div
        className="w-full max-w-[1200px] bg-gray-50/50 rounded-2xl shadow-2xl overflow-hidden"
        style={{ aspectRatio: '4/3' }}
      >
        <div className="h-full overflow-y-auto p-8">
          {/* Next Actions Module - Most Prominent */}
          <div className="mb-6 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-white mb-1">Next Actions For This Idea</h2>
                <p className="text-indigo-100 text-sm">Turn this evaluation into your next video move.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Action 1 - Primary */}
              <div className="bg-white/95 rounded-xl p-4 border-2 border-emerald-400 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">Make This Now</h3>
                    <p className="text-xs text-slate-600">Strong fit + low risk</p>
                  </div>
                </div>
              </div>

              {/* Action 2 */}
              <div className="bg-white/80 rounded-xl p-4 border border-indigo-200 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">Test 2 Stronger Angles</h3>
                    <p className="text-xs text-slate-600">Broaden reach without losing fit</p>
                  </div>
                </div>
              </div>

              {/* Action 3 */}
              <div className="bg-white/80 rounded-xl p-4 border border-violet-200 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">Build A 3-Video Mini Series</h3>
                    <p className="text-xs text-slate-600">Best for channel momentum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="col-span-2 space-y-6">
              {/* Input Idea Card */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-2">Idea Submitted</div>
                <p className="text-slate-900 mb-3">
                  "Best Budget Laptops for College Students in 2026 — what actually matters under $700?"
                </p>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs border border-indigo-200">
                    Format: Buyer's Guide
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-violet-50 text-violet-700 text-xs border border-violet-200">
                    Strategic Intent: Audience Expansion
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-xs border border-slate-200">
                    Target: Students
                  </span>
                </div>
              </div>

              {/* AI Evaluation Core */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-slate-900">AI Evaluation</h3>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-sm font-medium">
                      MAKE NOW
                    </span>
                    <div className="flex gap-2 text-xs">
                      <span className="text-slate-600">Channel Fit: <span className="text-indigo-600 font-medium">92</span></span>
                      <span className="text-slate-300">|</span>
                      <span className="text-slate-600">Growth: <span className="text-violet-600 font-medium">84</span></span>
                      <span className="text-slate-300">|</span>
                      <span className="text-slate-600">Risk: <span className="text-emerald-600 font-medium">28</span></span>
                    </div>
                  </div>
                </div>

                {/* Evaluation Dimensions */}
                <div className="space-y-3">
                  {[
                    { label: 'Audience Relevance', value: 91, color: 'indigo' },
                    { label: 'Channel Continuity', value: 88, color: 'indigo' },
                    { label: 'Expansion Potential', value: 86, color: 'violet' },
                    { label: 'Trend Momentum', value: 73, color: 'amber' },
                    { label: 'Angle Strength', value: 79, color: 'violet' }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-sm text-slate-700 w-40 flex-shrink-0">{item.label}</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            item.color === 'indigo' ? 'bg-indigo-500' :
                            item.color === 'violet' ? 'bg-violet-500' :
                            'bg-amber-400'
                          }`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-900 w-8 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk vs Opportunity */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <h3 className="text-slate-900 mb-4">Risk vs Opportunity</h3>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-medium text-emerald-700 mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Opportunity
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>strong audience fit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>high practical search intent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>easy series potential</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-amber-700 mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      Risk
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>crowded topic framing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>generic title angle may underperform</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm text-slate-600">
                    <span className="font-medium text-slate-900">Best improvement lever:</span> sharpen the angle, not the topic.
                  </p>
                </div>
              </div>

              {/* Improved Angle Suggestions */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <h3 className="text-slate-900 mb-4">Stronger Angles To Test</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: 'Best Budget Laptops for College Students Under $700',
                      tag: 'Safe',
                      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    },
                    {
                      title: '5 Laptop Specs College Students Should Stop Overpaying For',
                      tag: 'Growth',
                      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    },
                    {
                      title: 'Most "Student Laptop" Recommendations Are a Waste of Money',
                      tag: 'CTR Test',
                      tagColor: 'bg-violet-50 text-violet-700 border-violet-200'
                    }
                  ].map((angle, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <span className={`px-2 py-0.5 rounded text-xs border ${angle.tagColor} flex-shrink-0 mt-0.5`}>
                        {angle.tag}
                      </span>
                      <p className="text-sm text-slate-900">{angle.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Strategic Role + Reasoning */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <h3 className="text-slate-900 mb-4">Why This Idea Matters</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 mb-1">Strategic Role</div>
                      <p className="text-sm text-slate-600">Safe Expansion</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 mb-1">Why It Fits</div>
                      <p className="text-sm text-slate-600">Matches your strongest "budget decision" content cluster</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 mb-1">Why It Can Grow</div>
                      <p className="text-sm text-slate-600">Pulls in adjacent student-tech search demand</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Channel Context Snapshot */}
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <h3 className="text-slate-900 mb-4">Channel Context</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Primary Channel Core</div>
                    <p className="text-sm text-slate-900">Budget Tech Comparisons</p>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Secondary Growth Driver</div>
                    <p className="text-sm text-slate-900">Student Buying Guides</p>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Current Best Move</div>
                    <p className="text-sm text-slate-900">Deepen core + expand selectively</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}