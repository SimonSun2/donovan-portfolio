export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Donovan Sun
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-400 mb-6">
          Aspiring Mechanical & Racing Engineer
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
          SCIE Student | Apex Racing Founder | Three-Body Club President<br />
          <span className="text-base md:text-lg">Preparing for 2027 Fall - Top US Engineering Programs</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View My Projects
          </a>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 border-2 border-primary-600 dark:border-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
