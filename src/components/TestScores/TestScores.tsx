export default function TestScores() {
  const scores = [
    {
      name: 'TOEFL',
      score: '112',
      maxScore: '120',
      percentage: 93,
      description: 'Test of English as a Foreign Language',
      details: ['Reading: 29', 'Listening: 28', 'Speaking: 27', 'Writing: 28'],
    },
    {
      name: 'SAT',
      score: '1460',
      maxScore: '1600',
      percentage: 91,
      description: 'Scholastic Assessment Test',
      details: ['Evidence-Based Reading & Writing: 740', 'Mathematics: 720'],
      target: '1500+',
    },
    {
      name: 'GPA',
      score: '3.85',
      maxScore: '4.0',
      percentage: 96,
      description: 'Grade Point Average (Cumulative)',
      details: ['Class Rank: Top 10%', 'Honors Courses: 8', 'AP Courses Planned: 5'],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Test Scores & Academic Performance
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Standardized test results and academic achievements demonstrating college readiness
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {scores.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {item.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-primary-600 dark:text-primary-400">
                    {item.score}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500">/ {item.maxScore}</span>
                </div>
                {item.target && (
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2 font-medium">
                    Target: {item.target} 🎯
                  </p>
                )}
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {item.description}
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
                <div
                  className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <ul className="space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
