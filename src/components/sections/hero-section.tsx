
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SECTION_IDS } from '@/lib/constants';
import selfJpg from '@/assets/self.jpg';
import type { StaticImageData } from 'next/image'; // Import StaticImageData

// Data for the gallery images
interface GalleryImage {
  src: string | StaticImageData;
  alt: string;
  hint: string;
  zIndex: string;
}

const galleryImages: GalleryImage[] = [
  { src: "https://i.postimg.cc/kG1kjmNF/PXL-20250223-134508159-441290144-1465373175.jpg", alt: "Gallery image 1: Fun moment", hint: "personal activity", zIndex: "z-0" },
  { src: "https://i.postimg.cc/W1jN3WTV/IMG-20250311-184430-815-292984781.jpg", alt: "Gallery image 2: Exploring", hint: "travel adventure", zIndex: "z-10" },
  { src: "https://i.postimg.cc/rwTDnmsX/IMG-20250201-091854-995-709592560.jpg", alt: "Gallery image 3: Genesis event badge", hint: "professional headshot", zIndex: "z-20" },
  { src: "https://i.postimg.cc/Y0Q8Yx1G/Screenshot-20250315-091344-Instagram-992781481.jpg", alt: "Gallery image 4: Group photo", hint: "social event", zIndex: "z-10" },
  { src: "https://i.postimg.cc/QtFC9K45/IMG-20250314-134009-347-611735110.jpg", alt: "Gallery image 5: Candid", hint: "candid moment", zIndex: "z-0" },
];

interface Transform {
  x: number;
  y: number;
  rotate: number;
  scale: number;
}

// Transforms for the 5-image layout (desktop)
const galleryTransforms5: Transform[] = [
  { x: -220, y: -15, rotate: -15, scale: 1 },
  { x: -110, y: -5, rotate: -7, scale: 1.05 },
  { x: 0, y: 0, rotate: 0, scale: 1.1 },
  { x: 110, y: -5, rotate: 7, scale: 1.05 },
  { x: 220, y: -15, rotate: 15, scale: 1 },
];

// Transforms for the 3-image layout (mobile - uses images 1, 2, 3 from the 5-image set, which are galleryImages[1], galleryImages[2], galleryImages[3])
const galleryTransforms3: Transform[] = [
  { x: -130, y: -5, rotate: -10, scale: 1 }, // Corresponds to galleryImages[1]
  { x: 0, y: 0, rotate: 0, scale: 1.1 },    // Corresponds to galleryImages[2]
  { x: 130, y: -5, rotate: 10, scale: 1 }, // Corresponds to galleryImages[3]
];

export function HeroSection() {
  const headingText = "Hey, I'm Sreehari!\nWelcome to my corner of the internet!";
  const taglineText = "A 3rd-year CSE (AI-ML) undergrad at SBCE who loves developing Apps and finding solutions to problems around him.";

  const profilePicVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.1 } // slightly faster animation
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.2 } // slightly faster animation
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
        style={{ transition: { delay: 0.25 } }} // slightly faster animation
      >
        {taglineText}
      </motion.p>

      {/* Gallery removed for now */}
    </section>
  );
}
