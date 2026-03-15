export default function ContactCTA() {
  return (
    <section id="contact-cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Let's Connect
        </h2>
        <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
          Interested in my work or want to collaborate? I'd love to hear from you.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-600 bg-white hover:bg-gray-50 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Contact Me
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
