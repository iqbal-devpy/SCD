"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import portfolioData from "@/data/portfolio";

export default function Header() {
  const { personal } = portfolioData;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personal.name.split(" ")[0]}
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Skills
            </Link>
            <Link href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
              title="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
