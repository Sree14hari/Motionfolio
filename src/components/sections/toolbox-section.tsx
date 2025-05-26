
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SECTION_IDS, TOOLBOX_DATA, HARDWARE_DATA, HardwareItem } from '@/lib/constants';
import { ListChecks } from 'lucide-react';
import React, { Suspense, useState, useEffect } from 'react'; 
import { cn } from '@/lib/utils';


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
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.2, staggerChildren: 0.1 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 15, duration: 0.4 },
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
  const headingText = "Software and Hardware";
  const primaryHardware: HardwareItem | null = HARDWARE_DATA.length > 0 ? HARDWARE_DATA[0] : null;
  
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

        {/* Main container for Software and Hardware sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-16 space-y-12 md:space-y-0">
          {/* Software Section */}
          <motion.div variants={contentColumnVariants}>
            <motion.h3
              variants={titleItemVariants}
              className="text-2xl font-semibold text-primary text-center mb-6 sm:mb-8"
            >
              Software
            </motion.h3>
            <motion.div
              variants={contentColumnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 gap-4" 
            >
              {TOOLBOX_DATA.map((tool, index) => (
                <div
                  key={tool.id}
                  className="flex flex-col items-center space-y-2"
                >
                  <motion.div
                    variants={cardItemVariants}
                    whileHover={{ y: -5, scale: 1.03, boxShadow: "0px 10px 20px -5px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex items-center justify-center p-3 rounded-lg shadow-md bg-muted border border-border/30 aspect-square w-24 md:w-20 cursor-default" 
                  >
                    <Image
                      src={tool.iconUrl}
                      alt={`${tool.name} logo`}
                      width={44}
                      height={44}
                      className="object-contain"
                      data-ai-hint={tool.imageHint}
                      unoptimized
                    />
                  </motion.div>
                  <p className="text-sm font-medium text-foreground text-center">{tool.name}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hardware Section */}
          <motion.div variants={hardwareContentVariants}>
            <motion.h3
              variants={titleItemVariants}
              className="text-2xl font-semibold text-primary text-center mb-6 sm:mb-8"
            >
              Hardware
            </motion.h3>

            {primaryHardware && (
              <motion.div variants={hardwareContentVariants} className="flex flex-col items-center">
                 <div className="relative w-full max-w-md mx-auto aspect-[16/9] mb-6 rounded-lg overflow-hidden">
                   <iframe
                    title="ROG Laptop Render"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sree14hari.github.io/ROG-RENDER/"
                    className="absolute top-0 left-0 w-full h-full"
                    scrolling="no"
                    loading="lazy"
                  >
                  </iframe>
                </div>
                
                <div className="text-center max-w-md mx-auto">
                  <h4 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                    {primaryHardware.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    My primary machine for development and creative work.
                  </p>
                  <ul className="space-y-2 text-sm">
                    {primaryHardware.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center justify-start text-left text-muted-foreground">
                        <ListChecks className="h-4 w-4 mr-2 text-muted-foreground flex-shrink-0" />
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

