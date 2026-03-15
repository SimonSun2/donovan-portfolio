export default function FutureGoals() {
  const goals = [
    {
      timeframe: '2024 - 2025',
      title: 'Academic Excellence',
      items: [
        'Maintain GPA above 3.85',
        'Complete AP courses with top scores',
        'Achieve SAT score of 1500+',
        'Strengthen physics and mathematics foundation',
      ],
    },
    {
      timeframe: '2025 - 2026',
      title: 'Competition & Research',
      items: [
        'Lead Apex Racing to national finals',
        'Participate in engineering competitions (iGEM, Robotics)',
        'Conduct independent research project',
        'Secure engineering internship',
      ],
    },
    {
      timeframe: '2026 - 2027',
      title: 'University Applications',
      items: [
        'Apply to top US engineering programs',
        'Focus: Mechanical / Racing Engineering',
        'Prepare portfolio of projects and achievements',
        'Target schools: MIT, Stanford, Carnegie Mellon, Georgia Tech',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Future Goals
        </h2>
        <p className="text-center text-primary-100 mb-12 max-w-2xl mx-auto">
          My roadmap to becoming a mechanical/racing engineer
        </p>
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              <div className="flex items-center mb-4">
                <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mr-4">
                  {goal.timeframe}
                </span>
                <h3 className="text-xl font-bold text-white">{goal.title}</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-3">
                {goal.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-white">
                    <span className="mr-2 text-white mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-white font-medium mb-4">
            🎯 Dream: Design the next generation of racing cars
          </p>
          <p className="text-primary-100">
            Combining passion for motorsports with cutting-edge mechanical engineering
          </p>
        </div>
      </div>
    </section>
  );
}
