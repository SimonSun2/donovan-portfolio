import { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const isDarkMode = mediaQuery.matches;
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Layout>
      <div className="relative">
        {/* Enhanced Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-6 right-6 z-50 p-3 rounded-xl bg-white/70 dark:bg-slate-800/80 backdrop-blur-md border border-white/10 shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <svg className="w-6 h-6 text-yellow-400 animate-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        <Navigation />
        <main>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        {/* Enhanced Footer */}
        <footer className="relative py-12 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(94,106,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(94,106,210,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span className="text-xl font-semibold text-white">Donovan Sun</span>
              </div>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Donovan. Built with React + Vite + Tailwind CSS.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Powered by Innovation
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Engineering Excellence
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
}

export default App;
