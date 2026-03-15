import type { ReactNode } from 'react';

interface ProjectCardProps {
  emoji: string;
  title: string;
  role: string;
  description: string;
  highlights: string[];
  icon?: ReactNode;
}

export default function ProjectCard({ emoji, title, role, description, highlights }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 border border-gray-100 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-5xl">{emoji}</span>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="text-primary-600 dark:text-primary-400 font-semibold">{role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 dark:text-gray-200">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
