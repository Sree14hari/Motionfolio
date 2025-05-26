
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Github } from 'lucide-react'; // Using Github icon
import type { Project } from '@/lib/constants'; // Assuming Project type is defined
import { PROJECTS_DATA } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
    >
      <Link href={project.sourceUrl || '#'} passHref legacyBehavior target="_blank" rel="noopener noreferrer">
        <a className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg">
          <div className="bg-background p-4 rounded-lg shadow-md border transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
            <div className="relative h-8 mb-2">
              <div className={cn(
                "absolute left-0 top-0 h-8 w-2/5 rounded-t-md",
                "bg-card dark:bg-secondary" // White tab in light, lighter dark grey in dark
              )}></div>
              <div className="absolute top-[-12px] right-4 h-10 w-10 bg-secondary rounded-full flex items-center justify-center shadow-md border-2 border-background group-hover:bg-primary transition-colors">
                <Github className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </div>
            </div>

            <div className="relative w-full aspect-[16/10] rounded-md overflow-hidden bg-muted mb-3 border border-border">
              <Image
                src={project.imageUrl}
                alt={`${project.title} preview`}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.imageHint || 'project image'}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="text-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen py-16 sm:py-24 bg-background text-foreground"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-primary"
          variants={{ hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          Explore My Projects
        </motion.h1>

        <div className="flex justify-center">
          <div className="inline-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"> {/* Adjusted lg:grid-cols-3 for better spacing */}
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-px bg-border my-8"></div>
      </div>
    </motion.div>
  );
}
