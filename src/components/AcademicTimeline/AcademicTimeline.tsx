export default function AcademicTimeline() {
  const academicData = [
    {
      year: '2024 - Present',
      title: 'Shenzhen College of International Education (SCIE)',
      description: 'A-Level Program',
      details: ['Year 11 Student', 'Focus: Mathematics, Physics, Chemistry', 'GPA: 3.85/4.0'],
    },
    {
      year: '2022 - 2024',
      title: 'Foundation Studies',
      description: 'Pre-IGCSE / IGCSE Preparation',
      details: ['Built strong foundation in STEM subjects', 'Developed research and analytical skills', 'Active in science clubs and competitions'],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
          Academic Background
        </h2>
        <div className="space-y-8">
          {academicData.map((item, index) => (
            <div key={index} className="relative pl-8 border-l-4 border-primary-600 dark:border-primary-400">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="inline-block px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
