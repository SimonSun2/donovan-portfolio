interface AwardCardProps {
  emoji: string;
  title: string;
  organization: string;
  description: string;
  year?: string;
}

function AwardCard({ emoji, title, organization, description, year }: AwardCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <span className="text-4xl">{emoji}</span>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
            {title}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-2">
            {organization}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            {description}
          </p>
          {year && (
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {year}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AwardsSection() {
  const awards = [
    {
      emoji: '🏆',
      title: 'F1 in Schools Regional Rankings',
      organization: 'F1 in Schools Competition',
      description: 'Achieved top regional standings through innovative car design and race strategy.',
      year: '2024',
    },
    {
      emoji: '🎨',
      title: 'Best Design Award',
      organization: 'F1 in Schools',
      description: 'Recognized for exceptional CAD design and aerodynamic optimization.',
      year: '2024',
    },
    {
      emoji: '📚',
      title: 'GPA 3.85/4.0',
      organization: 'SCIE Academic Honors',
      description: 'Maintained outstanding academic performance across all subjects.',
      year: '2024-Present',
    },
    {
      emoji: '🌟',
      title: 'Top 10% Class Rank',
      organization: 'SCIE',
      description: 'Ranked among top performers in competitive international school environment.',
      year: '2024-Present',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
          Awards & Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
}
