
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SECTION_IDS } from '@/lib/constants';
import selfJpg from '@/assets/self.jpg'; // Import the image

export function HeroSection() {
  const headingText = "Hey, I'm Braydon!\nWelcome to my corner of\nthe internet!";
  const taglineText = "I'm a front-end developer with a love for design and a knack for tinkering. This site is intentionally over-engineered and serves as my playground for experimenting with new ideas and seeing what sticks!";

  const profilePicVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
    },
  };
  
  const singleImageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: 'spring', stiffness: 120, damping: 15, delay: 0.4 } 
    },
  };

  return (
    <section 
      id={SECTION_IDS.HERO} 
      className="min-h-screen flex flex-col items-center justify-center text-center bg-card relative overflow-hidden p-4 sm:p-6 md:p-8"
    >
      <motion.div 
        className="mb-6 sm:mb-8"
        variants={profilePicVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={selfJpg} // Use the imported image
          alt="Profile picture"
          width={100}
          height={100}
          className="rounded-full mx-auto shadow-xl border-2 border-background object-cover"
          data-ai-hint="profile picture"
          priority
        />
      </motion.div>

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground whitespace-pre-line"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {headingText}
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto mb-4"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        style={{ transition: { delay: 0.3 } }} // Slight delay for tagline
      >
        {taglineText}
      </motion.p>
      
      <motion.div
        className="mt-4" // Added margin-top for spacing
        variants={singleImageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image 
          src="https://i.postimg.cc/rwTDnmsX/IMG-20250201-091854-995-709592560.jpg" 
          alt="Genesis event badge" 
          width={240} 
          height={336} 
          className="rounded-lg shadow-xl" 
          data-ai-hint="event badge" 
        />
      </motion.div>
    </section>
  );
}
