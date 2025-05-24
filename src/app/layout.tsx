
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { APP_NAME } from '@/lib/constants';
import { BottomNavbar } from '@/components/layout/bottom-navbar'; // Import BottomNavbar

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Navbar /> {/* Top navbar, now hidden on small screens */}
        <main className="flex-grow lg:pt-16 pb-20 lg:pb-0"> {/* Adjusted padding: lg:pt-16 for desktop top nav, pb-20 for mobile bottom nav */}
          {children}
        </main>
        <Footer />
        <BottomNavbar /> {/* Bottom navbar, only visible on small/medium screens */}
        <Toaster />
      </body>
    </html>
  );
}
