import { Link } from 'react-router-dom';

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

function ProjectCard({ icon, title, description, tags }: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 hover:-translate-y-1">
      <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full transform group-hover:scale-105 transition-transform duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        to="/projects"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-200 group-hover:translate-x-1"
      >
        Learn More
        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

export default function FeaturedProjects() {
  const projects: ProjectCardProps[] = [
    {
      icon: '🏎️',
      title: 'Apex Racing - Founder & Captain',
      description: 'Leading a competitive F1 in Schools team, designing miniature F1 cars using CAD software, applying aerodynamics and manufacturing principles.',
      tags: ['Engineering', 'Leadership', 'CAD', 'Competition'],
    },
    {
      icon: '🌌',
      title: 'Three-Body Club - President',
      description: 'Founding and leading a science community inspired by Liu Cixin\'s trilogy, organizing discussions, events, and outreach activities.',
      tags: ['Leadership', 'Science', 'Community', 'Outreach'],
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
