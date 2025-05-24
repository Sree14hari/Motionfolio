
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SECTION_IDS } from '@/lib/constants';

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

  const headingContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
    },
  };

  const taglineContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut", delay: 0.4 } 
    },
  };
  
  const galleryContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.6 },
    },
  };

  const galleryItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: 'spring', stiffness: 120, damping: 15 } 
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
          src="/self.jpg"
          alt="Profile picture"
          width={100}
          height={100}
          className="rounded-full mx-auto shadow-xl border-2 border-background"
          data-ai-hint="profile picture"
          priority
        />
      </motion.div>

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground whitespace-pre-line"
        variants={headingContentVariants}
        initial="hidden"
        animate="visible"
      >
        {headingText}
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-12"
        variants={taglineContentVariants}
        initial="hidden"
        animate="visible"
      >
        {taglineText}
      </motion.p>
      
      <motion.div
        className="relative flex justify-center items-center h-[300px] sm:h-[350px] md:h-[400px] w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto"
        variants={galleryContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image 1 - Far Left */}
        <motion.div
          variants={galleryItemVariants}
          className="absolute z-10"
          style={{ transform: 'translateX(-180px) rotate(-25deg)', transformOrigin: 'center center' }}
        >
          <Image src="https://placehold.co/200x280.png" alt="Gallery image 1: Fun moment" width={140} height={196} className="rounded-lg shadow-xl" data-ai-hint="personal activity" />
        </motion.div>

        {/* Image 2 - Near Left */}
        <motion.div
          variants={galleryItemVariants}
          className="absolute z-20"
          style={{ transform: 'translateX(-90px) rotate(15deg)', transformOrigin: 'center center' }}
        >
          <Image src="https://placehold.co/220x260.png" alt="Gallery image 2: Speaking" width={160} height={189} className="rounded-lg shadow-xl" data-ai-hint="speaking event" />
        </motion.div>

        {/* Image 3 - Center */}
        <motion.div
          variants={galleryItemVariants}
          className="absolute z-30"
          style={{ transform: 'translateY(-20px) scale(1.15) rotate(-5deg)', transformOrigin: 'center center' }}
        >
          <Image src="https://placehold.co/250x250.png" alt="Gallery image 3: Professional headshot" width={180} height={180} className="rounded-lg shadow-xl" data-ai-hint="professional headshot" />
        </motion.div>

        {/* Image 4 - Near Right */}
        <motion.div
          variants={galleryItemVariants}
          className="absolute z-20"
          style={{ transform: 'translateX(90px) rotate(-15deg)', transformOrigin: 'center center' }}
        >
          <Image src="https://placehold.co/220x270.png" alt="Gallery image 4: Career highlight" width={160} height={196} className="rounded-lg shadow-xl" data-ai-hint="career highlight" />
        </motion.div>

        {/* Image 5 - Far Right */}
        <motion.div
          variants={galleryItemVariants}
          className="absolute z-10"
          style={{ transform: 'translateX(180px) rotate(25deg)', transformOrigin: 'center center' }}
        >
          <Image src="https://placehold.co/200x290.png" alt="Gallery image 5: Candid" width={140} height={203} className="rounded-lg shadow-xl" data-ai-hint="candid moment" />
        </motion.div>
      </motion.div>
    </section>
  );
}
