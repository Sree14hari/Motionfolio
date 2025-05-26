
export const APP_NAME = "MotionFolio";

export const SECTION_IDS = {
  HERO: 'hero',
  PROJECTS: 'projects',
  CERTIFICATES: 'certificates',
  JOURNEY: 'journey',
  CONTACT: 'contact',
  TOOLBOX: 'toolbox',
  FEATURED_PROJECTS: 'featured-projects',
} as const;

export interface SectionConfig {
  id: typeof SECTION_IDS[keyof typeof SECTION_IDS];
  name: string;
  Icon: string; 
  href: string; 
}

export const SECTIONS: SectionConfig[] = [
  { id: SECTION_IDS.HERO, name: 'Home', Icon: 'Home', href: '/' },
  { id: SECTION_IDS.PROJECTS, name: 'Projects', Icon: 'Briefcase', href: '/projects' },
  { id: SECTION_IDS.CERTIFICATES, name: 'Certificates', Icon: 'Award', href: '/certificates' },
  { id: SECTION_IDS.JOURNEY, name: 'Journey', Icon: 'Map', href: '/journey' },
  { id: SECTION_IDS.CONTACT, name: 'Contact', Icon: 'Mail', href: '/contact' },
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
  // icon?: string; // Can add if each project needs a specific icon, otherwise use a default in the component
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-cropmate',
    title: 'CROPMATE APP',
    description: 'A mobile application for crop management and assistance.',
    longDescription: 'CROPMATE APP is designed to help farmers and agricultural enthusiasts with crop management, providing tools and information for better yields.',
    imageUrl: 'https://i.postimg.cc/bv0FtLxc/CROPMATE.png',
    imageHint: 'crop management app',
    tags: ['Flutter', 'Mobile App', 'Agriculture'],
    sourceUrl: 'https://github.com/Sree14hari/CROPMATE-APP.git',
  },
  {
    id: 'proj-weather',
    title: 'WEATHER APP',
    description: 'A mobile application to check current weather conditions and forecasts.',
    longDescription: 'This Weather App provides real-time weather updates and forecasts, built using Flutter and integrated with weather APIs.',
    imageUrl: 'https://i.postimg.cc/L8KT3L6H/icon.png',
    imageHint: 'weather forecast app',
    tags: ['Flutter', 'Mobile App', 'API', 'Weather'],
    sourceUrl: 'https://github.com/Sree14hari/Weather-App.git',
  },
  {
    id: 'proj-flutter-portfolio',
    title: 'FIRST FLUTTER PORTFOLIO',
    description: 'My first portfolio website developed using the Flutter framework.',
    longDescription: 'A personal portfolio application built entirely with Flutter, showcasing my initial projects and skills in mobile and web development with Flutter.',
    imageUrl: 'https://i.postimg.cc/Y99fCx8x/1.png',
    imageHint: 'flutter portfolio app',
    tags: ['Flutter', 'Portfolio', 'Mobile App', 'Web'],
    sourceUrl: 'https://github.com/Sree14hari/Portfolio-flutter.git',
  },
  {
    id: 'proj-image-diffuser',
    title: 'PYTHON IMAGE DIFFUSER',
    description: 'A Python-based backend for an image diffusion model.',
    longDescription: 'This project implements the backend logic for an image diffusion model, enabling generative AI capabilities for image creation. Built with Python.',
    imageUrl: 'https://i.postimg.cc/wTJPz61j/logo-for-my-new-brand-matricz-it-is-tech-based-c.png',
    imageHint: 'python ai logo',
    tags: ['Python', 'AI', 'Backend', 'API', 'Generative AI'],
    sourceUrl: 'https://github.com/Sree14hari/image-diffuser-backend.git',
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

export interface Tool {
  id: string;
  name: string;
  iconUrl: string;
  imageHint: string;
}

export const TOOLBOX_DATA: Tool[] = [
  { id: 'arc', name: 'Arc', iconUrl: 'https://img.icons8.com/?size=100&id=pxCU5vhxdBME&format=png&color=000000', imageHint: 'arc browser logo' },
  { id: 'vscode', name: 'VSCode', iconUrl: 'https://img.icons8.com/?size=100&id=vwHLUxbq5jOv&format=png&color=000000', imageHint: 'vscode logo' },
  { id: 'figma', name: 'Figma', iconUrl: 'https://img.icons8.com/?size=100&id=snB4bDeuO6gJ&format=png&color=000000', imageHint: 'figma logo' },
  { id: 'canva', name: 'Canva', iconUrl: 'https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000', imageHint: 'canva logo' },
  { id: 'msoffice', name: 'MS Office', iconUrl: 'https://img.icons8.com/?size=100&id=37619&format=png&color=000000', imageHint: 'microsoft office logo' },
  { id: 'android-studio', name: 'Android Studio', iconUrl: 'https://img.icons8.com/?size=100&id=xBW8JMtsQGFC&format=png&color=000000', imageHint: 'android studio logo' },
];

export interface HardwareItem {
  id: string;
  name: string;
  specs: string[];
}

export const HARDWARE_DATA: HardwareItem[] = [
  {
    id: 'laptop-rog-strix-g16',
    name: 'ROG Strix G16',
    specs: [
      "13th Gen Intel® Core™ i7-13650HX Processor 2.6 GHz",
      "NVIDIA® GeForce RTX™ 4050 GPU",
      "ROG Boost: 2420MHz* at 140W",
      "6GB GDDR6 GPU, 16GB DDR5 RAM",
      "16\" QHD+ 240Hz Display",
    ],
  },
];

export interface FooterLinkItem {
  name: string;
  href: string;
  Icon?: string; 
}

export const FOOTER_SOCIAL_LINKS: FooterLinkItem[] = [
  { name: 'GitHub', Icon: 'Github', href: 'https://github.com/Sree14hari' },
  { name: 'LinkedIn', Icon: 'Linkedin', href: 'https://www.linkedin.com/in/sree14hari/' },
  { name: 'Instagram', Icon: 'Instagram', href: 'https://www.instagram.com/s_ree.har_i' },
  { name: 'Dribbble', Icon: 'Dribbble', href: '#' },
];

// This constant is no longer used by the /projects page, but kept for reference or other uses.
export interface ProjectCategory {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  previewImageUrl: string;
  imageHint: string;
  href: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: 'ml',
    title: 'Machine Learning',
    icon: 'BrainCircuit',
    previewImageUrl: 'https://placehold.co/300x180.png',
    imageHint: 'machine learning algorithm',
    href: '#',
  },
  {
    id: 'omdena',
    title: 'Omdena',
    icon: 'Target',
    previewImageUrl: 'https://placehold.co/300x180.png',
    imageHint: 'global collaboration',
    href: '#',
  },
  {
    id: 'webdev',
    title: 'Web Development',
    icon: 'Atom',
    previewImageUrl: 'https://placehold.co/300x180.png',
    imageHint: 'website code',
    href: '#',
  },
  {
    id: 'appdev',
    title: 'App Development',
    icon: 'Smartphone',
    previewImageUrl: 'https://placehold.co/300x180.png',
    imageHint: 'mobile application',
    href: '#',
  },
  {
    id: 'hardware',
    title: 'Hardware & IoT',
    icon: 'Router',
    previewImageUrl: 'https://placehold.co/300x180.png',
    imageHint: 'iot device circuit',
    href: '#',
  },
  {
    id: 'python',
    title: 'Python Packages',
    icon: 'Package',
    previewImageUrl: 'https://placehold.co/300x180.png',
    imageHint: 'python code',
    href: '#',
  },
  {
    id: 'misc',
    title: 'Miscellaneous',
    icon: 'Archive',
    previewImageUrl: 'https://placehold.co/300x180.png',
    imageHint: 'various items',
    href: '#',
  },
];
