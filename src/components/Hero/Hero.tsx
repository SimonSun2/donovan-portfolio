export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(94,106,210,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(94,106,210,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Name with glow effect */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent animate-gradient-x mb-4">
            Donovan Sun
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full animate-pulse"></div>
        </div>

        {/* Title with glass morphism */}
        <div className="inline-block px-6 py-2 mb-8 rounded-full bg-glass-light dark:bg-glass-dark backdrop-blur-md border border-glass-border shadow-glow">
          <p className="text-xl md:text-2xl font-semibold text-primary-600 dark:text-primary-400">
            Aspiring Mechanical & Racing Engineer
          </p>
        </div>

        {/* Description with enhanced typography */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <span className="font-medium text-primary-600 dark:text-primary-400">SCIE Student</span> • 
            <span className="font-medium text-accent-500"> Apex Racing Founder</span> • 
            <span className="font-medium text-primary-600 dark:text-primary-400"> Three-Body Club President</span>
          </p>
          <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-200 dark:border-primary-800">
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-mono">
              Target: 2027 Fall - Top US Engineering Programs
            </p>
          </div>
        </div>

        {/* CTA buttons with enhanced effects */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View My Projects
            </span>
          </a>
          <a 
            href="/contact" 
            className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-primary-600 dark:text-primary-400 bg-white dark:bg-slate-800 border-2 border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
