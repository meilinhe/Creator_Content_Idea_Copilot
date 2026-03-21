export function TopicCards() {
  const topics = [
    {
      title: "Best laptop for college under $700",
      subtitle: "Strong audience overlap"
    },
    {
      title: "Student dorm tech setup essentials",
      subtitle: "High repeat viewer potential"
    },
    {
      title: "iPad vs budget laptop for note taking",
      subtitle: "Strong comparison intent"
    }
  ];

  return (
    <div className="mt-12">
      <h2 className="mb-8">Topics To Try First</h2>
      <div className="grid grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all hover:border-[#7B5FFF]/30"
          >
            <h4 className="mb-3 leading-snug">{topic.title}</h4>
            <p className="text-gray-600">{topic.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
