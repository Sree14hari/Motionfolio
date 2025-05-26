
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { SECTION_IDS, PROJECTS_DATA, type Project } from '@/lib/constants'; 
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react'; 
import { cn } from '@/lib/utils';

interface FeaturedProjectCardProps {
  project: Project;
}

function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <motion.div
      className="group relative h-full" 
      variants={{ 
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: 'easeOut' },
        },
      }}
      whileHover={{ y: -5 }} 
    >
      <Link 
        href={project.sourceUrl || '#'} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg h-full"
      >
        <div className="bg-card p-4 rounded-lg shadow-md border transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1 h-full flex flex-col">
          <div className="relative h-8 mb-2">
            <div className={cn(
              "absolute left-0 top-0 h-8 w-2/5 rounded-t-md",
              "bg-background dark:bg-secondary" 
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

          <h3 className="text-center text-sm font-medium text-foreground group-hover:text-primary transition-colors mt-auto"> 
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}


export function FeaturedProjectsSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const itemVariants = { 
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const featuredProjects = PROJECTS_DATA.slice(0, 2); 

  return (
    <motion.section
      id={SECTION_IDS.FEATURED_PROJECTS}
      className="py-16 sm:py-24 bg-card" 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground"> 
            Projects
          </h2>
        </motion.div>

        {featuredProjects.length > 0 ? (
          <motion.div
            variants={sectionVariants} 
            className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16" 
          >
            {featuredProjects.map((project) => (
               <motion.div key={project.id} variants={itemVariants} className="h-full"> 
                <FeaturedProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p variants={itemVariants} className="text-center text-muted-foreground">
            Featured projects coming soon!
          </motion.p>
        )}

        <motion.div variants={itemVariants} className="text-center">
          <Button asChild size="lg" variant="outline" className="group text-foreground hover:bg-muted hover:text-primary border-muted-foreground/50 hover:border-primary/50">
            <Link href="/projects"> 
              Load More Projects
              <Github className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 text-muted-foreground group-hover:text-primary" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
