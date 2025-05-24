
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SECTION_IDS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function JourneySection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } // Reduced stagger and delay
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } // Reduced duration
    },
  };

  return (
    <motion.section
      id={SECTION_IDS.JOURNEY}
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
                alt="Journey visualization or relevant image"
                layout="fill"
                objectFit="cover"
                className="rounded-l-xl"
                data-ai-hint="journey growth"
              />
            </motion.div>
            <motion.div
              className="md:col-span-3 p-8 md:p-12 lg:p-16 bg-card"
              variants={itemVariants}
            >
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground space-y-6 text-base md:text-lg leading-relaxed">
                <p>
                  My journey into web development has been an exciting adventure of continuous learning and growth.
                  It all started with a simple curiosity about how websites work, which quickly blossomed into a deep passion
                  for creating engaging and impactful digital experiences.
                </p>
                <p>
                  Along the way, I've embraced challenges, mastered new technologies, and collaborated with talented individuals.
                  Each project has been a stepping stone, refining my skills and broadening my perspective on what's possible
                  in the ever-evolving world of web development.
                </p>
                <p>
                  This path has taught me the importance of perseverance, attention to detail, and user-centric design.
                  I'm eager to continue this journey, exploring new frontiers and contributing to innovative solutions.
                </p>
              </CardContent>
            </motion.div>
          </div>
        </Card>
      </div>
    </motion.section>
  );
}
