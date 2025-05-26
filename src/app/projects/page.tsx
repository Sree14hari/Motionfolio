
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { PROJECT_CATEGORIES, ProjectCategory } from '@/lib/constants';
import { cn } from '@/lib/utils';

const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};

interface ProjectCategoryCardProps {
  category: ProjectCategory;
  index: number;
}

function ProjectCategoryCard({ category, index }: ProjectCategoryCardProps) {
  const IconComponent = getIcon(category.icon);

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
      <Link href={category.href} passHref legacyBehavior>
        <a className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl">
          <div className="bg-background p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-1">
            {/* Folder Tab */}
            <div className="relative h-8 mb-2">
              <div className="absolute left-0 top-0 h-8 w-2/5 bg-card rounded-t-md"></div>
              {IconComponent && (
                <div className="absolute top-[-12px] right-4 h-10 w-10 bg-secondary rounded-full flex items-center justify-center shadow-md border-2 border-background group-hover:bg-primary transition-colors">
                  <IconComponent className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground" />
                </div>
              )}
            </div>

            {/* Preview Image Area */}
            <div className="relative w-full aspect-[16/10] rounded-md overflow-hidden bg-muted mb-3 border border-border">
              <Image
                src={category.previewImageUrl}
                alt={`${category.title} preview`}
                layout="fill"
                objectFit="cover"
                data-ai-hint={category.imageHint}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="text-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {category.title}
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {PROJECT_CATEGORIES.map((category, index) => (
            <ProjectCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
