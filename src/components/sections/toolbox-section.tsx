
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SECTION_IDS, TOOLBOX_DATA } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export function ToolboxSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id={SECTION_IDS.TOOLBOX}
      className="py-16 sm:py-24 bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            Toolbox
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out my favorite tools and spots around the web.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants} // Reuse sectionVariants for staggering children
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {TOOLBOX_DATA.map((tool) => (
            <motion.div
              key={tool.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05, boxShadow: "0px 8px 15px rgba(0,0,0,0.1)" }}
            >
              <Link href={tool.href} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" className="block group">
                  <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-card h-full flex flex-col items-center justify-center p-6 aspect-square">
                    <CardContent className="p-0 flex flex-col items-center justify-center text-center">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={tool.iconUrl}
                          alt={tool.name}
                          width={80}
                          height={80}
                          className="rounded-md object-contain"
                          data-ai-hint={tool.imageHint}
                        />
                      </div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {tool.name}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
