// Application Constants

export const SITE_CONFIG = {
  name: "Ahmed Iqbal",
  title: "AI Engineer & Full-Stack Developer",
  description: "Portfolio of Ahmed Iqbal - AI Engineer & Full-Stack Developer specializing in GenAI systems",
  url: "https://iqbal-portfolio.vercel.app",
  logo: "/logo.png",
};

export const NAVIGATION_LINKS = [
  { href: "#skills", label: "Skills", icon: "fas fa-code" },
  { href: "#experience", label: "Experience", icon: "fas fa-briefcase" },
  { href: "#projects", label: "Projects", icon: "fas fa-project-diagram" },
  { href: "#contact", label: "Contact", icon: "fas fa-envelope" },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/iqbal-devpy",
    icon: "fab fa-github",
    color: "text-gray-900 dark:text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/syed-ahmed-iqbal/",
    icon: "fab fa-linkedin",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Email",
    url: "mailto:dev.iqbal3@gmail.com",
    icon: "fas fa-envelope",
    color: "text-red-600 dark:text-red-400",
  },
];

export const TECH_ICONS = {
  python: "fab fa-python",
  nodejs: "fab fa-node",
  reactjs: "fab fa-react",
  javascript: "fab fa-js",
  html5: "fab fa-html5",
  css3: "fab fa-css3-alt",
  aws: "fab fa-aws",
  docker: "fab fa-docker",
  npm: "fab fa-npm",
};

export const COLORS = {
  primary: {
    light: "#3b82f6", // blue-600
    dark: "#60a5fa", // blue-400
  },
  secondary: {
    light: "#9333ea", // purple-600
    dark: "#c084fc", // purple-400
  },
  success: "#10b981", // emerald-500
  danger: "#ef4444", // red-500
  warning: "#f59e0b", // amber-500
  info: "#0ea5e9", // cyan-500
};

export const ANIMATIONS = {
  fadeInDuration: 600,
  slideInDuration: 500,
  transitionDuration: 300,
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const RESUME_LINK = "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing";

export const CONTACT_EMAIL = "dev.iqbal3@gmail.com";
export const CONTACT_PHONE = "+92-3099017220";
export const CONTACT_LOCATION = "Lahore, Pakistan";

// Feature Flags
export const FEATURES = {
  enableBlog: false,
  enablePodcast: false,
  enableNewsletter: false,
  enableComments: false,
  enableAnalytics: true,
};

export default {
  SITE_CONFIG,
  NAVIGATION_LINKS,
  SOCIAL_LINKS,
  TECH_ICONS,
  COLORS,
  ANIMATIONS,
  BREAKPOINTS,
  RESUME_LINK,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_LOCATION,
  FEATURES,
};
