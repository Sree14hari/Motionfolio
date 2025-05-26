
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SECTION_IDS } from '@/lib/constants';
import selfJpg from '@/assets/self.jpg';
import { useIsMobile } from '@/hooks/use-mobile';
import type { StaticImageData } from 'next/image'; // Import StaticImageData
import { useEffect, useState } from 'react';

interface GalleryImage {
  src: string | StaticImageData;
  alt: string;
  hint: string;
  zIndex: string;
}

interface Transform {
  x: number;
  y: number;
  rotate: number;
  scale: number;
}

export function HeroSection() {
  const headingText = "Hey, I'm Sreehari!\nWelcome to my corner of the internet!";
  const taglineText = "I'm a front-end developer with a love for design and a knack for tinkering.\nThis site is intentionally over-engineered and serves as my playground for experimenting with new ideas and seeing what sticks!";

  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const profilePicVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.1 }
    },
  };

  return (
    <section
      id={SECTION_IDS.HERO}
      className="min-h-screen flex flex-col items-center justify-start text-center bg-card relative overflow-hidden p-6 md:p-8"
    >
      <motion.div
        className="mb-6 sm:mb-8"
        variants={profilePicVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-[132px] h-[132px] mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-muted"></div>
          <div className="absolute top-1/2 left-1/2 w-[116px] h-[116px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-muted"></div>
          <Image
            src={selfJpg}
            alt="Profile picture"
            width={100}
            height={100}
            className="absolute top-1/2 left-1/2 w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-xl border-2 border-background object-cover z-10"
            data-ai-hint="profile picture"
            priority
          />
        </div>
      </motion.div>

      <div className="w-full h-px bg-border"></div>

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground whitespace-pre-line mt-6 sm:mt-8"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {headingText}
      </motion.h1>

      <div className="w-full h-px bg-border mt-6 sm:mt-8"></div>

      <motion.p
        className="text-base sm:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto mt-6 sm:mt-8 mb-4 whitespace-pre-line"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        style={{ transition: { delay: 0.15 } }}
      >
        {taglineText}
      </motion.p>

      {/* Image gallery removed */}
    </section>
  );
}
