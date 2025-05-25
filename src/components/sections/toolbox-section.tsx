
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SECTION_IDS, TOOLBOX_DATA, HARDWARE_DATA } from '@/lib/constants';
import { ListChecks } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const titleItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const contentColumnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1, 
    },
  },
};

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 250, damping: 12, duration: 0.3 },
  },
};

const hardwareContentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

export function ToolboxSection() {
  const headingText = "Software and Hardware\nI use"; 
  const primaryHardware = HARDWARE_DATA.length > 0 ? HARDWARE_DATA[0] : null;

  return (
    <motion.section
      id={SECTION_IDS.TOOLBOX}
      className="py-16 sm:py-24 bg-card"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={titleItemVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2 whitespace-pre-line">
            {headingText}
          </h2>
        </motion.div>

        <div className="space-y-12 lg:space-y-16"> 
          {/* Software Section */}
          <motion.div variants={contentColumnVariants}>
            <motion.h3 
              variants={titleItemVariants} 
              className="text-2xl font-semibold text-primary text-center mb-8 sm:mb-10"
            >
              Software
            </motion.h3>
            <motion.div
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-wrap justify-center gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10"
            >
              {TOOLBOX_DATA.map((tool) => (
                <div
                  key={tool.id}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.div
                    variants={gridItemVariants}
                    whileHover={{ y: -6, scale: 1.03, boxShadow: "0px 10px 20px -5px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="bg-card p-3 sm:p-4 rounded-xl shadow-md aspect-square w-full max-w-[70px] sm:max-w-[80px] md:max-w-[90px] flex items-center justify-center mb-2.5 transition-all duration-300 ease-out group-hover:shadow-lg group-hover:scale-105 border"
                  >
                    <Image
                      src={tool.iconUrl}
                      alt={`${tool.name} logo`}
                      width={44}
                      height={44}
                      className="object-contain transition-transform duration-300 ease-out"
                      data-ai-hint={tool.imageHint}
                    />
                  </motion.div>
                  <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors duration-200">
                    {tool.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hardware Section */}
          <motion.div variants={contentColumnVariants} className="mt-16 lg:mt-20">
            <motion.h3 
              variants={titleItemVariants} 
              className="text-2xl font-semibold text-primary text-center mb-8 sm:mb-10"
            >
              Hardware
            </motion.h3>
            
            {primaryHardware && (
              <motion.div variants={hardwareContentVariants}>
                <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] mb-6 rounded-lg overflow-hidden shadow-lg border border-border">
                  <iframe 
                    title="Vectary 3D Model" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://app.vectary.com/p/0FnNim8Sjnsi1uouUNxvH1"
                    className="absolute top-0 left-0 w-full h-full"
                  >
                  </iframe>
                </div>
                {/* Removed Sketchfab attribution paragraph */}
                <div className="max-w-md mx-auto text-center md:text-left">
                  <h4 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 text-center">
                    {primaryHardware.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    My primary machine for development and creative work.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground max-w-xs mx-auto md:mx-0 md:max-w-none">
                    {primaryHardware.specs.map((spec, index) => (
                      <li key={index} className="flex items-center justify-center md:justify-start">
                        <ListChecks className="h-4 w-4 mr-2 text-primary/70 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

