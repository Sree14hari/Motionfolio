
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Dancing_Script } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { APP_NAME } from '@/lib/constants';
import { BottomNavbar } from '@/components/layout/bottom-navbar';
import { AppBar } from '@/components/layout/app-bar';

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
  weight: ['400', '700'], // You can adjust weights as needed
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
          <AppBar /> {/* Mobile-only App Bar, AppBar height is h-16 (64px) */}
          <Navbar /> {/* Desktop-only Top navbar, Navbar height is h-16 (64px) */}
          {/* 
            Small screens (<md): pt-16 (for AppBar h-16) + pb-16 (for BottomNavbar h-16)
            Medium screens and up (>=md): pt-16 (for Navbar h-16) + pb-0 (no BottomNavbar)
          */}
          <main className="flex-grow pt-16 pb-16 md:pb-0 bg-card"> {/* Changed to bg-card */}
            {children}
          </main>
          <Footer />
          <BottomNavbar /> {/* Mobile-only Bottom navbar, h-16 */}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
