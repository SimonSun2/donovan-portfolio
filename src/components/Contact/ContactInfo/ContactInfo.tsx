export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Contact Information
      </h3>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">Email</h4>
          <a href="mailto:donovan.sun@example.com" className="text-primary-600 dark:text-primary-400 hover:underline">
            donovan.sun@example.com
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            I typically respond within 24-48 hours
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">Location</h4>
          <p className="text-gray-700 dark:text-gray-200">
            Shenzhen, Guangdong, China
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Available for remote opportunities
          </p>
        </div>
      </div>

      {/* Availability */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">Availability</h4>
          <p className="text-gray-700 dark:text-gray-200">
            Open to opportunities starting 2027
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Currently focused on academics and extracurriculars
          </p>
        </div>
      </div>
    </div>
  );
}
