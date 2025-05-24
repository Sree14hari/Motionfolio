
"use client";

import { motion } from 'framer-motion';
import { Logo } from '@/components/icons/logo'; // Import the Logo component

export function AppBar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="md:hidden fixed top-0 left-0 right-0 z-40 bg-card/25 backdrop-blur-lg shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Replace text with Logo component */}
          <Logo className="h-7 w-auto text-primary" />
          {/* ThemeToggle removed from here */}
        </div>
      </div>
    </motion.header>
  );
}
