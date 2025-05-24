"use client";

import { APP_NAME } from '@/lib/constants';
import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {currentYear !== null ? (
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {APP_NAME}. All rights reserved.
          </p>
        ) : (
          // Placeholder to prevent layout shift and content mismatch during initial render
          <p className="text-sm text-muted-foreground">&nbsp;</p> 
        )}
      </div>
    </footer>
  );
}
