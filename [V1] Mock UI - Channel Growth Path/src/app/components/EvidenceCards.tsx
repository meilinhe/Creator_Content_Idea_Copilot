export function EvidenceCards() {
  const evidence = [
    {
      title: "Audience Signal",
      description: "Your viewers respond strongly to decision-focused buying advice."
    },
    {
      title: "Channel Evidence",
      description: "Buying-guide videos generate 2.9x more subscribers."
    },
    {
      title: "Market Demand",
      description: "Search interest for \"best laptop for college\" is rising."
    }
  ];

  return (
    <div className="mt-12">
      <h2 className="mb-8">Why This Path Fits</h2>
      <div className="grid grid-cols-3 gap-6">
        {evidence.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="mb-4 text-[#7B5FFF]">{item.title}</h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
