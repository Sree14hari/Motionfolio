"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: () => void;
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      className="cursor-pointer h-full"
      onClick={onOpenModal}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenModal()}
      aria-label={`View details for ${project.title}`}
    >
      <Card className="h-full flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
             {/* Potential overlay content on hover */}
           </div>
        </div>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl font-semibold text-foreground mb-1 truncate">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground h-10 overflow-hidden text-ellipsis">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end space-x-2 mt-auto pt-2">
            {project.sourceUrl && (
              <motion.a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                className="text-muted-foreground hover:text-primary p-1"
                aria-label="View source code on GitHub"
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                className="text-muted-foreground hover:text-primary p-1"
                aria-label="View live project"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
