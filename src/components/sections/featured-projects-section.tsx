
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { SECTION_IDS, PROJECTS_DATA } from '@/lib/constants'; 
import { Button } from '@/components/ui/button';
import { Code2, ExternalLink, Github } from 'lucide-react';

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

  const featuredProjects = PROJECTS_DATA.slice(0, 2); // Display the first two projects

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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground"> {/* Centered and black */}
            Projects
          </h2>
        </motion.div>

        {featuredProjects.length > 0 ? (
          <motion.div
            variants={sectionVariants} 
            className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16" // Updated grid classes
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-background p-1 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="rounded-lg overflow-hidden">
                  <div className="relative w-full aspect-[16/10] bg-muted">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={project.imageHint}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-6 bg-card rounded-b-lg"> {/* Adjusted padding for smaller cards */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">{project.description}</p>
                    <div className="flex items-center justify-end space-x-2 sm:space-x-3"> {/* Adjusted spacing for icons */}
                      {project.sourceUrl && (
                        <motion.a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-muted hover:bg-secondary text-foreground rounded-full transition-colors"
                          whileHover={{ scale: 1.1, y: -2 }}
                          aria-label="View source code"
                        >
                          <Code2 size={18} /> {/* Slightly smaller icon */}
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-muted hover:bg-secondary text-foreground rounded-full transition-colors"
                          whileHover={{ scale: 1.1, y: -2 }}
                          aria-label="View live project"
                        >
                          <ExternalLink size={18} /> {/* Slightly smaller icon */}
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
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
            <Link href="/projects"> {/* Updated to link to /projects page */}
              Load More Projects
              <Github className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 text-muted-foreground group-hover:text-primary" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
