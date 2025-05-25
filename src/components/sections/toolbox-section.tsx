
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SECTION_IDS, TOOLBOX_DATA, HARDWARE_DATA } from '@/lib/constants';
import { ListChecks } from 'lucide-react';
// React Three Fiber and Drei imports are no longer needed here
// import dynamic from 'next/dynamic';
// import React, { Suspense, useState, useEffect } from 'react'; 

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

const columnVariants = {
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

// LaptopViewer dynamic import removed
// const LaptopViewer = dynamic(() => import('../three/laptop-viewer').then(mod => mod.default), {
//   ssr: false,
//   loading: () => (
//     <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg border border-border bg-muted flex items-center justify-center">
//       <p className="text-muted-foreground">Loading 3D Model...</p>
//     </div>
//   ),
// });

export function ToolboxSection() {
  const headingText = "Software\nI use daily."; // Updated heading
  const primaryHardware = HARDWARE_DATA.length > 0 ? HARDWARE_DATA[0] : null;

  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

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

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Software Column */}
          <motion.div variants={columnVariants}>
            <motion.h3 
              variants={titleItemVariants} 
              className="text-2xl font-semibold text-primary text-center md:text-left mb-8 sm:mb-10"
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

          {/* Hardware Column */}
          <motion.div variants={columnVariants}>
            <motion.h3 
              variants={titleItemVariants} 
              className="text-2xl font-semibold text-primary text-center md:text-left mb-8 sm:mb-10"
            >
              Hardware
            </motion.h3>
            
            {primaryHardware && (
              <motion.div variants={hardwareContentVariants}>
                <div className="sketchfab-embed-wrapper relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden shadow-lg border border-border">
                  <iframe 
                    title={primaryHardware.name + " 3D Model"}
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://sketchfab.com/models/51eca7b2e5884c4087f3499e523d5184/embed"
                    className="absolute top-0 left-0 w-full h-full"
                  >
                  </iframe>
                </div>
                <div 
                  className="text-xs text-muted-foreground/80 mb-6"
                  dangerouslySetInnerHTML={{ __html: `<p style="font-size: 13px; font-weight: normal; margin: 5px; color: hsl(var(--muted-foreground));"> <a href="https://sketchfab.com/3d-models/asus-rog-strix-scar-17-2023-g733-gaming-laptop-51eca7b2e5884c4087f3499e523d5184?utm_medium=embed&utm_campaign=share-popup&utm_content=51eca7b2e5884c4087f3499e523d5184" target="_blank" rel="nofollow" style="font-weight: bold; color: hsl(var(--primary));"> Asus ROG Strix Scar 17 (2023) G733 Gaming Laptop </a> by <a href="https://sketchfab.com/ranahacs?utm_medium=embed&utm_campaign=share-popup&utm_content=51eca7b2e5884c4087f3499e523d5184" target="_blank" rel="nofollow" style="font-weight: bold; color: hsl(var(--primary));"> Ranaha Creative Studio </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=51eca7b2e5884c4087f3499e523d5184" target="_blank" rel="nofollow" style="font-weight: bold; color: hsl(var(--primary));">Sketchfab</a></p>`}}
                />
                <h4 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                  {primaryHardware.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  My primary machine for development and creative work.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {primaryHardware.specs.map((spec, index) => (
                    <li key={index} className="flex items-center">
                      <ListChecks className="h-4 w-4 mr-2 text-primary/70 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
