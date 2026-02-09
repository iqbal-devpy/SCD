"use client";

import portfolioData from "@/data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {skills.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {skills.subtitle}
          </p>
        </div>

        {/* Skills Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition"
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.technical.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transform hover:scale-105 transition"
              >
                <i
                  className={`${skill.icon} text-4xl text-blue-600 dark:text-blue-400 mb-3`}
                ></i>
                <p className="text-gray-700 dark:text-gray-300 font-semibold text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
