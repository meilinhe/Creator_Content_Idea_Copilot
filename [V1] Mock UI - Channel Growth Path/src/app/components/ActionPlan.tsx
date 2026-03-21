export function ActionPlan() {
  return (
    <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200 shadow-md">
      <h2 className="mb-8">How To Start</h2>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3>Next 8 Videos</h3>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#4F7FFF] rounded"></div>
              <span className="text-gray-600">5 core videos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#7B5FFF] rounded"></div>
              <span className="text-gray-600">2 safe expansion</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#9D5FFF] rounded"></div>
              <span className="text-gray-600">1 trend test</span>
            </div>
          </div>
        </div>

        <div className="h-12 flex rounded-lg overflow-hidden shadow-sm">
          <div className="bg-[#4F7FFF] flex-[5]"></div>
          <div className="bg-[#7B5FFF] flex-[2]"></div>
          <div className="bg-[#9D5FFF] flex-[1]"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h4 className="mb-2 text-gray-900">Keep Stable</h4>
          <p className="text-gray-700">Budget-first positioning</p>
        </div>
        <div className="bg-gradient-to-br from-[#4F7FFF]/5 to-[#9D5FFF]/5 rounded-lg p-6 border border-[#7B5FFF]/20">
          <h4 className="mb-2 text-[#7B5FFF]">Test First</h4>
          <p className="text-gray-700">College laptop buying guide</p>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-[#4F7FFF] via-[#7B5FFF] to-[#9D5FFF] text-white py-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
        Generate Next Video Ideas
      </button>
    </div>
  );
}
