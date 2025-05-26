
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { SECTION_IDS } from '@/lib/constants'; 
import { Button } from '@/components/ui/button';
import { Code2, ExternalLink, Github } from 'lucide-react';

// Placeholder for a single project to demonstrate the new card structure
const featuredProjectData = [
  {
    id: 'proj-lo62',
    title: 'Project LO62',
    description: 'My first ever electric vehicle project',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'electric vehicle project',
    sourceUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'proj-baatcheet',
    title: 'BaatCheet',
    description: 'Secure peer-to-peer video communication',
    imageUrl: 'https://placehold.co/600x400.png', 
    imageHint: 'video communication app',
    sourceUrl: '#',
    liveUrl: '#',
  },
];

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
          {/* "My work" text removed */}
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground"> {/* Changed to text-foreground and centered */}
            Projects
          </h2>
        </motion.div>

        {featuredProjectData.length > 0 ? (
          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16"
          >
            {featuredProjectData.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-background p-1 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="rounded-lg overflow-hidden">
                  <div className="relative w-full aspect-[16/10] bg-muted">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={project.imageHint}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-card rounded-b-lg"> {/* Changed to bg-card */}
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">{project.description}</p>
                    <div className="flex items-center justify-end space-x-3">
                      {project.sourceUrl && (
                        <motion.a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-muted hover:bg-secondary text-foreground rounded-full transition-colors"
                          whileHover={{ scale: 1.1, y: -2 }}
                          aria-label="View source code"
                        >
                          <Code2 size={20} />
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
                          <ExternalLink size={20} />
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

    
