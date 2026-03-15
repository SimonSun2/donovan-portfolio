export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:donovan@example.com"
            className="btn-primary inline-block"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
