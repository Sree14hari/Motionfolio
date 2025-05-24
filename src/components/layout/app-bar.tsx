
"use client";

import { motion } from 'framer-motion';

export function AppBar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-card/75 backdrop-blur-lg shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-start h-14"> {/* Changed justify-center to justify-start */}
          <span className="text-3xl text-primary font-cursive">
            SREEHARI
          </span>
        </div>
      </div>
    </motion.header>
  );
}
