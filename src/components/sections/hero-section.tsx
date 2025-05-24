
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
  
  const galleryItemInitial = { opacity: 0, y: 30, scale: 0.8, rotate: 0 };
  const galleryTransforms = [
    { x: -220, y: 25, rotate: -10, scale: 1 }, // Image 1 (Far Left) - Increased x
    { x: -110, y: 10, rotate: -5, scale: 1 },  // Image 2 (Near Left) - Increased x
    { x: 0, y: 0, rotate: 0, scale: 1.05 },   // Image 3 (Center)
    { x: 110, y: 10, rotate: 5, scale: 1 },   // Image 4 (Near Right) - Increased x
    { x: 220, y: 25, rotate: 10, scale: 1 },  // Image 5 (Far Right) - Increased x
  ];

  const galleryItemVariants = {
    hidden: galleryItemInitial,
    visible: (i: number) => ({
      opacity: 1,
      x: galleryTransforms[i].x,
      y: galleryTransforms[i].y,
      scale: galleryTransforms[i].scale,
      rotate: galleryTransforms[i].rotate,
      transition: { type: 'spring', stiffness: 100, damping: 15, delay: 0.4 + i * 0.12 }
    }),
  };

  const images = [
    { src: "https://i.postimg.cc/kG1kjmNF/PXL-20250223-134508159-441290144-1465373175.jpg", alt: "Gallery image 1: Fun moment", hint: "personal activity", zIndex: "z-0" },
    { src: "https://i.postimg.cc/q7j4GBhL/PXL-20250223-134925254-1976385255.jpg", alt: "Gallery image 2: Speaking", hint: "public speaking", zIndex: "z-10" },
    { src: "https://i.postimg.cc/rwTDnmsX/IMG-20250201-091854-995-709592560.jpg", alt: "Gallery image 3: Professional headshot", hint: "professional headshot", zIndex: "z-20" },
    { src: "https://i.postimg.cc/QMxHDycf/PXL-20250307-154437525-1572406705.jpg", alt: "Gallery image 4: Presentation", hint: "conference presentation", zIndex: "z-10" },
    { src: "https://i.postimg.cc/QtFC9K45/IMG-20250314-134009-347-611735110.jpg", alt: "Gallery image 5: Candid", hint: "candid moment", zIndex: "z-0" },
  ];

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
          src={selfJpg} 
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
        style={{ transition: { delay: 0.3 } }} 
      >
        {taglineText}
      </motion.p>
      
      <motion.div 
        className="relative flex justify-center items-start h-auto min-h-[320px] w-full max-w-3xl mt-4" // Increased min-h
        initial="hidden"
        animate="visible"
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={galleryItemVariants}
            initial="hidden" 
            animate="visible"
            className={`absolute ${img.zIndex}`}
            style={{ transformOrigin: 'center center' }} 
          >
            <Image 
              src={img.src} 
              alt={img.alt} 
              width={160} // Increased width
              height={224} // Increased height
              className="rounded-lg shadow-xl" 
              data-ai-hint={img.hint} 
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
