"use client";

import portfolioData from "@/data/portfolio";

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          🏆 Achievements & Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <a
              key={idx}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition cursor-pointer border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4">
                <i className="fas fa-certificate text-white text-lg"></i>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {achievement.issuer}
              </p>

              <p className="text-gray-500 dark:text-gray-500 text-xs">
                {achievement.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
