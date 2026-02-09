"use client";

import portfolioData from "@/data/portfolio";

export default function TechStack() {
  const { techStack } = portfolioData;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Proficiency & Experience
        </h3>

        <div className="space-y-8">
          {techStack.map((tech, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {tech.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${tech.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
