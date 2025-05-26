
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Dancing_Script } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { APP_NAME } from '@/lib/constants';
import { BottomNavbar } from '@/components/layout/bottom-navbar';
import { AppBar } from '@/components/layout/app-bar';
import { ThemeToggle } from '@/components/ui/theme-toggle'; // Import ThemeToggle

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const dancingScript = Dancing_Script({
  variable: '--font-dancing-script',
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export const metadata: Metadata = {
  title: `${APP_NAME} - Portfolio`,
  description: 'A modern portfolio showcasing web development projects and skills, built with Next.js and Framer Motion.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Body background is now dark purple from globals.css */}
      <body className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased text-foreground`}>
        {/* This div wraps all content and provides the main page background and margins for gutters */}
        <div 
          className="relative z-0 min-h-screen"
          style={{
            marginLeft: 'var(--gutter-width)',
            marginRight: 'var(--gutter-width)',
            backgroundColor: 'hsl(var(--background))' // Main light grey page background
          }}
        >
          {/* Blur overlay layer - sits behind content, blurs body background */}
          <div 
            className="fixed inset-0 z-[-1] bg-white/5 backdrop-blur-lg"
            style={{
              marginLeft: 'var(--gutter-width)',
              marginRight: 'var(--gutter-width)',
            }}
          />

          <AppBar /> {/* Mobile-only App Bar, AppBar height is h-16 (64px) */}
          <Navbar /> {/* Desktop-only Top navbar, Navbar height is h-16 (64px) */}
          
          <main className="flex-grow pt-16 pb-16 md:pb-0 bg-card">
            {children}
          </main>
          <Footer />
          <BottomNavbar /> {/* Mobile-only Bottom navbar, h-16 */}
          <Toaster />

          {/* Floating Action Button for Theme Toggle */}
          <div className="fixed bottom-6 right-6 z-50">
            <ThemeToggle />
          </div>
        </div>
      </body>
    </html>
  );
}
