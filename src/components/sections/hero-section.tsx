"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { SECTION_IDS, APP_NAME } from '@/lib/constants';
import Link from 'next/link';

export function HeroSection() {
  const title = APP_NAME;
  const tagline = "Crafting Digital Experiences with Precision and Flair.";

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: title.length * 0.08 + 0.5, // Delay after title animation
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: title.length * 0.08 + 1.0, // Delay after tagline
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  };


  return (
    <section id={SECTION_IDS.HERO} className="min-h-screen flex flex-col items-center justify-center text-center bg-card relative overflow-hidden p-4">
      <div className="absolute inset-0 opacity-5">
        {/* Optional: Subtle background pattern or animated shapes */}
      </div>
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-foreground"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {title.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
        variants={taglineVariants}
        initial="hidden"
        animate="visible"
      >
        {tagline}
      </motion.p>
      <motion.div variants={buttonVariants} initial="hidden" animate="visible">
        <Link href={`#${SECTION_IDS.PROJECTS}`} passHref legacyBehavior>
          <Button size="lg" asChild>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px hsl(var(--primary))" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              View My Work <ArrowDown className="ml-2 h-5 w-5" />
            </motion.a>
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
