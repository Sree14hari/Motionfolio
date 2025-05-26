
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SECTION_IDS } from '@/lib/constants';
import selfJpg from '@/assets/self.jpg';
import type { StaticImageData } from 'next/image'; 
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';


// Data for the gallery images
interface GalleryImage {
  src: string | StaticImageData;
  alt: string;
  hint: string;
  zIndex: string;
  id: string;
  transformDesktop: Transform;
  transformMobile?: Transform; // Mobile transform is optional if not all images shown
}

interface Transform {
  x: number;
  y: number;
  rotate: number;
  scale: number;
}

const galleryImageData: Omit<GalleryImage, 'transformDesktop' | 'transformMobile' | 'id'>[] = [
  { src: "https://i.postimg.cc/kG1kjmNF/PXL-20250223-134508159-441290144-1465373175.jpg", alt: "Gallery image 1: Fun moment", hint: "personal activity", zIndex: "z-0" },
  { src: "https://i.postimg.cc/W1jN3WTV/IMG-20250311-184430-815-292984781.jpg", alt: "Gallery image 2: Exploring", hint: "travel adventure", zIndex: "z-10" },
  { src: "https://i.postimg.cc/rwTDnmsX/IMG-20250201-091854-995-709592560.jpg", alt: "Gallery image 3: Genesis event badge", hint: "professional headshot", zIndex: "z-20" },
  { src: "https://i.postimg.cc/Y0Q8Yx1G/Screenshot-20250315-091344-Instagram-992781481.jpg", alt: "Gallery image 4: Group photo", hint: "social event", zIndex: "z-10" },
  { src: "https://i.postimg.cc/QtFC9K45/IMG-20250314-134009-347-611735110.jpg", alt: "Gallery image 5: Candid", hint: "candid moment", zIndex: "z-0" },
];


// Transforms for the 5-image layout (desktop)
const galleryTransforms5: Transform[] = [
  { x: -220, y: -15, rotate: -15, scale: 1 },
  { x: -110, y: -5, rotate: -7, scale: 1.05 },
  { x: 0, y: 0, rotate: 0, scale: 1.1 }, // Center image slightly lower and more prominent
  { x: 110, y: -5, rotate: 7, scale: 1.05 },
  { x: 220, y: -15, rotate: 15, scale: 1 },
];

// Transforms for the 3-image layout (mobile - uses images 1, 2, 3 from the 5-image set, which are galleryImages[1], galleryImages[2], galleryImages[3])
const galleryTransforms3: Transform[] = [
  { x: -130, y: -5, rotate: -10, scale: 1 }, // Corresponds to galleryImages[1]
  { x: 0, y: 0, rotate: 0, scale: 1.1 },    // Corresponds to galleryImages[2]
  { x: 130, y: -5, rotate: 10, scale: 1 }, // Corresponds to galleryImages[3]
];


const fullGalleryData: GalleryImage[] = galleryImageData.map((img, index) => ({
  ...img,
  id: `gallery-img-${index}`,
  transformDesktop: galleryTransforms5[index],
}));


export function HeroSection() {
  const headingText = "Hey, I'm Sreehari!\nWelcome to my corner of the internet!";
  const taglineText = "A 3rd-year CSE (AI-ML) undergrad at SBCE who loves developing Apps and finding solutions to problems around him.";

  const isMobile = useIsMobile();
  const [activeImages, setActiveImages] = useState<GalleryImage[]>([]);
  const [activeTransforms, setActiveTransforms] = useState<Transform[]>([]);

  useEffect(() => {
    if (isMobile === undefined) {
      // Don't set images until we know the screen size
      setActiveImages([]);
      setActiveTransforms([]);
      return;
    }
    if (isMobile) {
      // Mobile: show images 1, 2, 3 (0-indexed from fullGalleryData, these are the middle three)
      const mobileSelection = [fullGalleryData[1], fullGalleryData[2], fullGalleryData[3]];
      setActiveImages(mobileSelection);
      setActiveTransforms(galleryTransforms3);
    } else {
      // Desktop: show all 5 images
      setActiveImages(fullGalleryData);
      setActiveTransforms(galleryTransforms5);
    }
  }, [isMobile]);


  const profilePicVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.1 }
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.2 }
    },
  };
  
  const galleryContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const galleryItemVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      scale: 0.5,
      x: activeTransforms[i]?.x ?? 0, 
      y: (activeTransforms[i]?.y ?? 0) + 50, 
      rotate: activeTransforms[i]?.rotate ?? 0, 
    }),
    visible: (i: number) => ({
      opacity: 1,
      scale: activeTransforms[i]?.scale ?? 1,
      x: activeTransforms[i]?.x ?? 0,
      y: activeTransforms[i]?.y ?? 0,
      rotate: activeTransforms[i]?.rotate ?? 0,
      transition: { type: 'spring', stiffness: 260, damping: 20, delay: i * 0.1 },
    }),
  };


  // Fallback for when isMobile is undefined to prevent layout shift
  if (isMobile === undefined) {
    // Render a minimal placeholder or nothing to avoid SSR/client mismatch issues.
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
          className="text-base sm:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto mt-6 sm:mt-8 mb-4"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          style={{ transition: { delay: 0.25 } }}
        >
          {taglineText}
        </motion.p>
        <div className="w-full h-px bg-border mt-4 mb-6 sm:mt-6 sm:mb-8"></div> {/* Line below tagline */}
        {/* Placeholder for gallery to maintain space or show loading */}
        <div className="relative flex justify-center items-start h-[250px] sm:h-[280px] md:h-[320px] w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mt-4">
          {/* Optionally, a loading spinner or skeleton here */}
        </div>
      </section>
    );
  }

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
        className="text-base sm:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto mt-6 sm:mt-8 mb-4" 
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        style={{ transition: { delay: 0.25 } }} 
      >
        {taglineText}
      </motion.p>

      <div className="w-full h-px bg-border mt-4 mb-6 sm:mt-6 sm:mb-8"></div> {/* Line below tagline */}

      {/* Gallery removed for now
      <motion.div
        className="relative flex justify-center items-start h-[250px] sm:h-[280px] md:h-[320px] w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mt-4"
        variants={galleryContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {activeImages.map((image, index) => (
          <motion.div
            key={image.id}
            className={`absolute ${image.zIndex} cursor-pointer`}
            custom={index}
            variants={galleryItemVariants}
            whileHover={{ 
              scale: (activeTransforms[index]?.scale ?? 1) * 1.05, // Scale up from its current animated scale
              y: (activeTransforms[index]?.y ?? 0) -10, // Lift up
              zIndex: 30 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            style={{
              transformOrigin: 'center center',
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={isMobile ? 120 : 160}
              height={isMobile ? 168 : 224}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint={image.hint}
              priority={index === 2} // Prioritize loading the center image
            />
          </motion.div>
        ))}
      </motion.div>
      */}
    </section>
  );
}
