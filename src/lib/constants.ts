
export const APP_NAME = "MotionFolio";

export const SECTION_IDS = {
  HERO: 'hero',
  PROJECTS: 'projects',
  CERTIFICATES: 'certificates',
  JOURNEY: 'journey',
  CONTACT: 'contact',
} as const;

// Define a type for individual section objects that includes an Icon
export interface SectionConfig {
  id: typeof SECTION_IDS[keyof typeof SECTION_IDS];
  name: string;
  Icon: string; // Name of the Lucide icon
}

export const SECTIONS: SectionConfig[] = [
  { id: SECTION_IDS.HERO, name: 'Home', Icon: 'Home' },
  { id: SECTION_IDS.PROJECTS, name: 'Projects', Icon: 'Briefcase' },
  { id: SECTION_IDS.CERTIFICATES, name: 'Certificates', Icon: 'Award' },
  { id: SECTION_IDS.JOURNEY, name: 'Journey', Icon: 'Map' },
  { id: SECTION_IDS.CONTACT, name: 'Contact', Icon: 'Mail' },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj1',
    title: 'E-commerce Platform',
    description: 'A full-featured online store with modern UI.',
    longDescription: 'Detailed description about the e-commerce platform, technologies used (React, Node.js, PostgreSQL), challenges faced, and solutions implemented. This platform supports product listings, user authentication, cart management, and a secure checkout process.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    tags: ['React', 'TypeScript', 'Node.js', 'Stripe'],
    liveUrl: '#',
  },
  {
    id: 'proj2',
    title: 'Creative Portfolio',
    description: 'A sleek personal portfolio to showcase skills and projects.',
    longDescription: 'This portfolio website, built with Next.js and Tailwind CSS, features smooth animations and a responsive design. It highlights my skills, projects, and contact information in an engaging way, tailored for creative professionals.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'website design',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    sourceUrl: '#',
  },
  {
    id: 'proj3',
    title: 'Task Management App',
    description: 'A collaborative tool for managing tasks efficiently.',
    longDescription: 'A web application designed for team collaboration and task management. Features include drag-and-drop task boards, real-time updates, user assignments, and progress tracking. Built with Vue.js and Firebase for seamless experience.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'productivity app',
    tags: ['Vue.js', 'Firebase', 'Collaboration'],
  },
  {
    id: 'proj4',
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets.',
    longDescription: 'This dashboard provides users with powerful tools to explore and understand data through interactive charts and graphs. Built with D3.js and React, it offers customizable views and real-time data processing capabilities.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data analytics',
    tags: ['React', 'D3.js', 'Data Analytics'],
    liveUrl: '#',
  },
];

export const NAVBAR_SOCIAL_LINKS = [
  { name: 'Instagram', Icon: 'Instagram', href: 'https://www.instagram.com/s_ree.har_i' },
  { name: 'LinkedIn', Icon: 'Linkedin', href: 'https://www.linkedin.com/in/sree14hari/' },
  { name: 'GitHub', Icon: 'Github', href: 'https://github.com/Sree14hari' },
];

export const CONTACT_SECTION_SOCIAL_LINKS = [
  { name: 'Email', Icon: 'Mail', href: 'mailto:hello@motionfolio.com' },
  { name: 'LinkedIn', Icon: 'Linkedin', href: 'https://www.linkedin.com/in/sree14hari/' },
  { name: 'GitHub', Icon: 'Github', href: 'https://github.com/Sree14hari' },
  { name: 'Instagram', Icon: 'Instagram', href: 'https://www.instagram.com/s_ree.har_i' },
];
