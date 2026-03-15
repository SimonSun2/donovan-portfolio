import ProjectCard from '../ProjectCard/ProjectCard';

const projects = [
  {
    emoji: '🏎️',
    title: 'Apex Racing',
    role: 'Founder & Captain',
    description:
      'Founded and led a competitive F1 in Schools team, guiding the design and manufacturing of miniature F1 cars powered by CO2 cartridges. Competed at regional and world finals levels.',
    highlights: [
      'Led team of 5+ members through full engineering cycle',
      'CAD design and aerodynamic analysis using industry software',
      'Achieved regional competition rankings and design awards',
      'Coordinated manufacturing, testing, and race strategy',
      'Managed budget, sponsorships, and team logistics',
    ],
  },
  {
    emoji: '🌌',
    title: 'Three-Body Club',
    role: 'President',
    description:
      'Established and presided over a science fiction and science outreach club, organizing events to promote scientific thinking and community engagement among students.',
    highlights: [
      'Organized weekly sci-fi book discussions and lectures',
      'Hosted astronomy observation nights and science workshops',
      'Grew membership to 30+ active participants',
      'Delivered public speeches and moderated panel discussions',
      'Collaborated with teachers for school-wide science events',
    ],
  },
];

export default function ProjectGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              emoji={project.emoji}
              title={project.title}
              role={project.role}
              description={project.description}
              highlights={project.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
