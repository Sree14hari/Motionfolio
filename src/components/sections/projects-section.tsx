
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, SECTION_IDS, Project as ProjectType } from '@/lib/constants';
import { ProjectCard } from './project-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';
import { ExternalLink, Github, X } from 'lucide-react';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced stagger
        delayChildren: 0.1,  // Reduced delay
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }, // Reduced duration
    },
  };

  return (
    <motion.section
      id={SECTION_IDS.PROJECTS}
      className="min-h-screen py-16 sm:py-24 bg-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary"
          variants={itemVariants}
        >
          My Projects
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Here's a selection of some projects I've worked on. Click on any project to see more details.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants} 
        >
          {PROJECTS_DATA.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} onOpenModal={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="sm:max-w-3xl p-0 overflow-hidden rounded-lg shadow-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }} // Snappier modal
              >
                <div className="relative w-full h-64 sm:h-80 md:h-96">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={selectedProject.imageHint}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-card/50 hover:bg-card/80 rounded-full text-foreground"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close dialog"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="p-6 sm:p-8 max-h-[calc(100vh-25rem)] overflow-y-auto">
                  <DialogHeader className="mb-4">
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-primary">
                      {selectedProject.title}
                    </DialogTitle>
                  </DialogHeader>
                  <DialogDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </DialogDescription>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    {selectedProject.liveUrl && (
                      <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          View Live <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {selectedProject.sourceUrl && (
                      <Button asChild variant="outline">
                        <a href={selectedProject.sourceUrl} target="_blank" rel="noopener noreferrer">
                          Source Code <Github className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
