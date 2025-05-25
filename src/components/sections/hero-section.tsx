
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SECTION_IDS } from '@/lib/constants';
import selfJpg from '@/assets/self.jpg';
import { useIsMobile } from '@/hooks/use-mobile';

interface GalleryImage {
  src: string;
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
  const headingText = "Hey, I'm Sreehari!\nWelcome to my corner of\nthe internet!";
  const taglineText = "I'm a front-end developer with a love for design and a knack for tinkering. This site is intentionally over-engineered and serves as my playground for experimenting with new ideas and seeing what sticks!";

  const isMobile = useIsMobile();

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

  const allImages: GalleryImage[] = [
    { src: "https://i.postimg.cc/kG1kjmNF/PXL-20250223-134508159-441290144-1465373175.jpg", alt: "Gallery image 1: Fun moment", hint: "personal activity", zIndex: "z-0" },
    { src: "https://i.postimg.cc/q7j4GBhL/PXL-20250223-134925254-1976385255.jpg", alt: "Gallery image 2: Speaking", hint: "public speaking", zIndex: "z-10" },
    { src: "https://i.postimg.cc/rwTDnmsX/IMG-20250201-091854-995-709592560.jpg", alt: "Gallery image 3: Professional headshot", hint: "professional headshot", zIndex: "z-20" },
    { src: "https://i.postimg.cc/QMxHDycf/PXL-20250307-154437525-1572406705.jpg", alt: "Gallery image 4: Presentation", hint: "conference presentation", zIndex: "z-10" },
    { src: "https://i.postimg.cc/QtFC9K45/IMG-20250314-134009-347-611735110.jpg", alt: "Gallery image 5: Candid", hint: "candid moment", zIndex: "z-0" },
  ];

  const galleryTransforms5: Transform[] = [
    { x: -260, y: 0, rotate: -10, scale: 1 },    // Image 1 (Far Left)
    { x: -130, y: 0, rotate: -5, scale: 1 },     // Image 2 (Near Left)
    { x: 0, y: 0, rotate: 0, scale: 1.05 },      // Image 3 (Center)
    { x: 130, y: 0, rotate: 5, scale: 1 },       // Image 4 (Near Right)
    { x: 260, y: 0, rotate: 10, scale: 1 },      // Image 5 (Far Right)
  ];

  const galleryTransforms3: Transform[] = [
    { x: -130, y: 0, rotate: -8, scale: 1 },  // Corresponds to original allImages[1]
    { x: 0, y: 0, rotate: 0, scale: 1.05 },   // Corresponds to original allImages[2]
    { x: 130, y: 0, rotate: 8, scale: 1 },   // Corresponds to original allImages[3]
  ];

  let imagesToDisplay: GalleryImage[];
  let activeTransforms: Transform[];
  let imageWidth: number;
  let imageHeight: number;

  if (isMobile === undefined) {
    imagesToDisplay = [];
    activeTransforms = [];
    imageWidth = 160; 
    imageHeight = 224; 
  } else if (isMobile) {
    imagesToDisplay = allImages.slice(1, 4); 
    activeTransforms = galleryTransforms3;
    imageWidth = 120;
    imageHeight = 168;
  } else {
    imagesToDisplay = allImages;
    activeTransforms = galleryTransforms5;
    imageWidth = 160;
    imageHeight = 224;
  }

  const galleryItemInitial = { opacity: 0, y: 30, scale: 0.8, rotate: 0, x:0 };
  const galleryItemVariants = {
    hidden: galleryItemInitial,
    visible: (i: number) => ({
      opacity: 1,
      x: activeTransforms[i]?.x ?? 0,
      y: activeTransforms[i]?.y ?? 0,
      scale: activeTransforms[i]?.scale ?? 1,
      rotate: activeTransforms[i]?.rotate ?? 0,
      transition: { type: 'spring', stiffness: 100, damping: 15, delay: 0.2 + i * 0.08 } 
    }),
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
        className="text-base sm:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto mt-6 sm:mt-8 mb-4"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        style={{ transition: { delay: 0.15 } }} 
      >
        {taglineText}
      </motion.p>

      <motion.div
        className="relative flex justify-center items-start h-auto min-h-[320px] w-full max-w-3xl mt-4"
      >
        {imagesToDisplay.map((img, index) => (
          <motion.div
            key={img.alt}
            custom={index}
            variants={galleryItemVariants}
            initial="hidden"
            animate="visible"
            className={`absolute ${img.zIndex}`}
            style={{ transformOrigin: 'center center' }}
            whileHover={{
              scale: (activeTransforms[index]?.scale ?? 1) * 1.1,
              zIndex: 30,
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={imageWidth}
              height={imageHeight}
              className="rounded-lg shadow-xl"
              data-ai-hint={img.hint}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
