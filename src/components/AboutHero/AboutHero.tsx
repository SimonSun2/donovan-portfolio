export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          About Me
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          My Journey to Engineering
        </p>
        <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            From dismantling household appliances as a child to founding a racing team in high school, 
            my passion for engineering has been a constant driving force. Every challenge I've faced 
            has shaped my understanding of what it means to be an engineer—not just someone who builds 
            things, but someone who solves problems and creates solutions that matter.
          </p>
        </div>
      </div>
    </section>
  );
}
