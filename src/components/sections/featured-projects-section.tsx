
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SECTION_IDS, PROJECTS_DATA } from '@/lib/constants';
import { ProjectCard } from './project-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Show only the first 3 projects as featured
const featuredProjects = PROJECTS_DATA.slice(0, 3);

export function FeaturedProjectsSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

  return (
    <motion.section
      id={SECTION_IDS.FEATURED_PROJECTS}
      className="py-16 sm:py-24 bg-card" // Using bg-card for a slightly different background
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into some of the work I'm passionate about.
          </p>
        </motion.div>

        {featuredProjects.length > 0 ? (
          <motion.div
            variants={sectionVariants} // Reuse for staggering children
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants} className="h-full">
                {/* ProjectCard does not take onOpenModal for this featured section */}
                <ProjectCard project={project} onOpenModal={() => { /* No modal for featured cards */ }} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p variants={itemVariants} className="text-center text-muted-foreground">
            More projects coming soon!
          </motion.p>
        )}

        <motion.div variants={itemVariants} className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
