"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SECTION_IDS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <motion.section
      id={SECTION_IDS.ABOUT}
      className="min-h-screen flex items-center justify-center py-16 sm:py-24 bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden shadow-2xl rounded-xl">
          <div className="grid md:grid-cols-5 gap-0">
            <motion.div 
              className="md:col-span-2 relative h-64 md:h-auto min-h-[300px]"
              variants={itemVariants}
            >
              <Image
                src="https://placehold.co/600x800.png"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-l-xl"
                data-ai-hint="professional portrait"
              />
            </motion.div>
            <motion.div 
              className="md:col-span-3 p-8 md:p-12 lg:p-16 bg-card"
              variants={itemVariants}
            >
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground space-y-6 text-base md:text-lg leading-relaxed">
                <p>
                  Hello! I'm a passionate and creative web developer with a knack for building beautiful,
                  performant, and user-friendly digital experiences. With a strong foundation in modern
                  web technologies, I thrive on turning complex problems into elegant solutions.
                </p>
                <p>
                  My journey in web development started with a fascination for how websites could
                  transform ideas into interactive realities. Since then, I've honed my skills in
                  front-end and back-end development, always striving to stay updated with the latest
                  industry trends and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new design concepts, contributing to
                  open-source projects, or learning a new skill. I believe in continuous learning and
                  am always excited to take on new challenges.
                </p>
              </CardContent>
            </motion.div>
          </div>
        </Card>
      </div>
    </motion.section>
  );
}
