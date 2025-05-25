
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SECTION_IDS, TOOLBOX_DATA } from '@/lib/constants';

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

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.3, // Delay after title/subheading animations
    },
  },
};

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 30 }, // Adjusted for pop effect
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 250, damping: 12, duration: 0.3 }, // Spring animation for pop
  },
};

export function ToolboxSection() {
  const headingText = "Software\nI keep in my toolbox.";

  return (
    <motion.section
      id={SECTION_IDS.TOOLBOX}
      className="py-16 sm:py-24 bg-card" // Changed from bg-background to bg-card
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

        <motion.div 
          variants={titleItemVariants} 
          className="text-center mb-8 sm:mb-10"
        >
          <h3 className="text-sm font-medium text-primary uppercase tracking-wider">
            Applications
          </h3>
        </motion.div>

        <motion.div
          variants={gridContainerVariants}
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          className="flex flex-wrap justify-center gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10" // Changed to flex for centering
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
                className="bg-card p-3 sm:p-4 rounded-xl shadow-md aspect-square w-full max-w-[70px] sm:max-w-[80px] md:max-w-[90px] flex items-center justify-center mb-2.5 transition-all duration-300 ease-out group-hover:shadow-lg group-hover:scale-105"
              >
                <Image
                  src={tool.iconUrl}
                  alt={`${tool.name} logo`} // Using alt text with "logo"
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
      </div>
    </motion.section>
  );
}
