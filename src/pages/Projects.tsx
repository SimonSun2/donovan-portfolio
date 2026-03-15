export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will be added here */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Project 1</h3>
            <p className="text-gray-600 dark:text-gray-400">Description of the project goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
