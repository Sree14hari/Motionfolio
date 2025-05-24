
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
  
  const galleryItemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12, delay: 0.4 + i * 0.1 }
    }),
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
      
      {/* Image Gallery */}
      <motion.div 
        className="relative flex justify-center items-start h-auto min-h-[280px] w-full max-w-3xl mt-4" // items-start to align to top, adjust height/min-h as needed
        initial="hidden"
        animate="visible"
      >
        {/* Image 1 - Far Left */}
        <motion.div
          custom={0}
          variants={galleryItemVariants}
          className="absolute z-0"
          style={{ transform: 'translateX(-190px) rotate(-10deg) translateY(25px)', transformOrigin: 'center center' }} 
        >
          <Image src="https://i.postimg.cc/kG1kjmNF/PXL-20250223-134508159-441290144-1465373175.jpg" alt="Gallery image 1: Fun moment" width={140} height={196} className="rounded-lg shadow-xl" data-ai-hint="personal activity" />
        </motion.div>

        {/* Image 2 - Near Left */}
        <motion.div
          custom={1}
          variants={galleryItemVariants}
          className="absolute z-10"
          style={{ transform: 'translateX(-95px) rotate(-5deg) translateY(10px)', transformOrigin: 'center center' }} 
        >
          <Image src="https://i.postimg.cc/cCrzRLs9/IMG-20250122-121545-119-910828229.jpg" alt="Gallery image 2: Speaking" width={140} height={196} className="rounded-lg shadow-xl" data-ai-hint="public speaking" />
        </motion.div>

        {/* Image 3 - Center */}
        <motion.div
          custom={2}
          variants={galleryItemVariants}
          className="absolute z-20"
          style={{ transform: 'translateY(0px) scale(1.05) rotate(0deg)', transformOrigin: 'center center' }} 
        >
          <Image src="https://i.postimg.cc/rwTDnmsX/IMG-20250201-091854-995-709592560.jpg" alt="Gallery image 3: Professional headshot" width={140} height={196} className="rounded-lg shadow-xl" data-ai-hint="professional headshot" />
        </motion.div>

        {/* Image 4 - Near Right */}
        <motion.div
          custom={3}
          variants={galleryItemVariants}
          className="absolute z-10" // z-10 to be behind center but above far right
          style={{ transform: 'translateX(95px) rotate(5deg) translateY(10px)', transformOrigin: 'center center' }} 
        >
          <Image src="https://i.postimg.cc/5f1q2CQQ/PXL-20250116-111049798-779042009-445005337.jpg" alt="Gallery image 4: Presentation" width={140} height={196} className="rounded-lg shadow-xl" data-ai-hint="conference presentation" />
        </motion.div>

        {/* Image 5 - Far Right */}
        <motion.div
          custom={4}
          variants={galleryItemVariants}
          className="absolute z-0" // z-0 to be at the back
          style={{ transform: 'translateX(190px) rotate(10deg) translateY(25px)', transformOrigin: 'center center' }} 
        >
          <Image src="https://i.postimg.cc/QtFC9K45/IMG-20250314-134009-347-611735110.jpg" alt="Gallery image 5: Candid" width={140} height={196} className="rounded-lg shadow-xl" data-ai-hint="candid moment" />
        </motion.div>
      </motion.div>
    </section>
  );
}
