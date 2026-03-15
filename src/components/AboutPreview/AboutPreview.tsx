import { Link } from 'react-router-dom';

export default function AboutPreview() {
  return (
    <section id="about-preview" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Donovan
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I'm a Year 11 A-Level student at Shenzhen College of International Education (SCIE), 
            passionate about mechanical engineering and motorsports. My journey combines academic 
            excellence (GPA 3.85, TOEFL 112, SAT 1460) with hands-on leadership in engineering 
            projects and science outreach.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            As the founder and captain of Apex Racing, I lead a team competing in F1 in Schools 
            challenges, applying principles of aerodynamics, manufacturing, and project management. 
            As president of the Three-Body Club, I foster scientific curiosity among peers through 
            discussions, events, and community outreach.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            My goal: Study Mechanical/Racing Engineering at a top US university in 2027 and 
            contribute to the future of sustainable motorsports.
          </p>
          
          <div className="text-center">
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Read More
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
