"use client";

import portfolioData from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experience.map((job, idx) => (
            <div
              key={idx}
              className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-purple-600 dark:border-purple-400"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {job.role}
                  </h3>
                  <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                    {job.company}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">
                  {job.date}
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {job.description}
              </p>

              <ul className="space-y-3">
                {job.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex gap-3 text-gray-600 dark:text-gray-400">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">
                      ✓
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
