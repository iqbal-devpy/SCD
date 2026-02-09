"use client";

import portfolioData from "@/data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((school, idx) => (
            <div
              key={idx}
              className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-blue-600 dark:border-blue-400"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {school.school}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                {school.degree}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {school.duration}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {school.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
