interface LeadershipCardProps {
  icon: string;
  title: string;
  description: string;
  examples: string[];
}

function LeadershipCard({ icon, title, description, examples }: LeadershipCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      <ul className="space-y-2">
        {examples.map((example, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 dark:text-gray-200 text-sm">{example}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LeadershipSkills() {
  const skills = [
    {
      icon: '👥',
      title: 'Team Management',
      description: 'Leading and coordinating cross-functional teams to achieve common goals.',
      examples: [
        'Managed 5+ member Apex Racing team',
        'Coordinated design, manufacturing, and racing divisions',
        'Delegated tasks based on individual strengths',
        'Conducted regular team meetings and progress reviews',
      ],
    },
    {
      icon: '📅',
      title: 'Event Organization',
      description: 'Planning and executing events from concept to completion.',
      examples: [
        'Organized science lectures and astronomy nights',
        'Coordinated F1 in Schools competition participation',
        'Managed event logistics, budgets, and timelines',
        'Facilitated school-wide science outreach activities',
      ],
    },
    {
      icon: '🎤',
      title: 'Communication',
      description: 'Effective public speaking and technical presentation skills.',
      examples: [
        'Delivered technical presentations to judges and peers',
        'Led public speaking at club events and meetings',
        'Created compelling pitch decks for sponsorships',
        'Communicated complex engineering concepts clearly',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
          Leadership Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <LeadershipCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
