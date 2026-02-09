import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ahmed Iqbal | AI Engineer & Full-Stack Developer",
  description: "Portfolio of Ahmed Iqbal - AI Engineer & Full-Stack Developer specializing in GenAI systems, FastAPI, React, and AWS.",
  keywords: "AI Engineer, Full-Stack Developer, GenAI, FastAPI, React, AWS, Machine Learning",
  author: "Ahmed Iqbal",
  openGraph: {
    title: "Ahmed Iqbal | AI Engineer & Full-Stack Developer",
    description: "Portfolio showcasing expertise in GenAI, FastAPI, React, and production-grade systems",
    url: "https://iqbal-portfolio.vercel.app",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
