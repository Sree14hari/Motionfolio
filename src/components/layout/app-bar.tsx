
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
        <div className="flex items-center justify-start h-16"> {/* Changed h-14 to h-16 and justify-between to justify-start */}
          <Logo className="h-9 w-auto text-primary" /> {/* Changed h-7 to h-9 */}
        </div>
      </div>
    </motion.header>
  );
}
