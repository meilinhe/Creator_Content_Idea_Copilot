export function GrowthPathCards() {
  const paths = [
    {
      title: "Core Reinforcement",
      description: "Repeat proven content lanes",
      fit: "Very High",
      growth: "Medium",
      risk: "Very Low",
      highlighted: false
    },
    {
      title: "Safe Expansion",
      description: "Move into nearby topics your audience already cares about",
      fit: "High",
      growth: "Medium High",
      risk: "Low",
      highlighted: true
    },
    {
      title: "Strategic Expansion",
      description: "Enter a broader adjacent niche",
      fit: "Medium",
      growth: "High",
      risk: "Medium",
      highlighted: false
    },
    {
      title: "Trend Tests",
      description: "Capture fast-rising topics",
      fit: "Medium",
      growth: "Very High",
      risk: "High",
      highlighted: false
    }
  ];

  return (
    <div className="mt-12">
      <h2 className="mb-8">Your Growth Options</h2>
      <div className="grid grid-cols-4 gap-6">
        {paths.map((path, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 transition-all ${
              path.highlighted
                ? 'bg-gradient-to-br from-[#4F7FFF]/10 to-[#9D5FFF]/10 border-2 border-[#7B5FFF] shadow-lg'
                : 'bg-white border border-gray-200 shadow-md hover:shadow-lg'
            }`}
          >
            <h3 className="mb-3">{path.title}</h3>
            <p className="text-gray-600 mb-6 min-h-[48px]">{path.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Fit</span>
                <span className="text-gray-900">{path.fit}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Growth</span>
                <span className="text-gray-900">{path.growth}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Risk</span>
                <span className="text-gray-900">{path.risk}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
