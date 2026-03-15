export default function LeadershipSection() {
  const leadershipRoles = [
    {
      title: 'Founder & Captain',
      organization: 'Apex Racing',
      period: '2023 - Present',
      icon: '🏎️',
      description: 'F1 in Schools Competition Team',
      achievements: [
        'Founded and led a team of 6 students',
        'Designed and manufactured F1 model cars using CAD/CAM',
        'Managed team budget, sponsorships, and marketing',
        'Competed in regional and national competitions',
        'Developed skills in engineering, teamwork, and leadership',
      ],
      skills: ['Engineering Design', 'Team Leadership', 'Project Management', 'CAD/CAM', 'Sponsorship'],
    },
    {
      title: 'President',
      organization: 'Three-Body Club',
      period: '2024 - Present',
      icon: '🌌',
      description: 'Science Fiction & Physics Discussion Club',
      achievements: [
        'Lead weekly discussions on hard science fiction',
        'Organize physics problem-solving sessions',
        'Host guest speakers from university physics departments',
        'Growing membership from 15 to 50+ active members',
        'Bridge literature and STEM education',
      ],
      skills: ['Public Speaking', 'Event Organization', 'Community Building', 'Science Communication'],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Extracurricular Leadership
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Building communities and leading initiatives beyond the classroom
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {leadershipRoles.map((role, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start mb-6">
                <span className="text-5xl mr-4">{role.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {role.title}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                    {role.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{role.period}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{role.description}</p>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Achievements:</h4>
              <ul className="space-y-2 mb-6">
                {role.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="mr-2 text-green-600 dark:text-green-400 mt-1">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {role.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
