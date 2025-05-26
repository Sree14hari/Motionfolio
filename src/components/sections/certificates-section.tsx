
"use client";

import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import { SECTION_IDS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Download, ExternalLink, ShieldCheck } from 'lucide-react';

// Assume you have these images in src/assets/certificates/
// If your filenames are different, please update the import paths.
import cert1Image from '@/assets/certificates/cert1.png';
import cert2Image from '@/assets/certificates/cert2.png';
import cert3Image from '@/assets/certificates/cert3.png';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: StaticImageData;
  imageAlt: string;
  verifyUrl?: string;
  downloadUrl?: string;
}

const certificatesData: Certificate[] = [
  {
    id: 'cert1',
    title: 'Advanced Web Development Bootcamp',
    issuer: 'Tech Learning Institute',
    date: 'May 2023',
    image: cert1Image,
    imageAlt: 'Web Development Bootcamp Certificate',
    verifyUrl: '#', // Replace with actual URL
  },
  {
    id: 'cert2',
    title: 'Cloud Practitioner Essentials',
    issuer: 'Cloud Services Provider',
    date: 'January 2024',
    image: cert2Image,
    imageAlt: 'Cloud Practitioner Certificate',
    downloadUrl: '#', // Replace with actual URL
  },
  {
    id: 'cert3',
    title: 'UI/UX Design Fundamentals',
    issuer: 'Design Academy',
    date: 'September 2022',
    image: cert3Image,
    imageAlt: 'UI/UX Design Certificate',
    verifyUrl: '#', // Replace with actual URL
  },
  // Add more certificates here as needed
];

export function CertificatesSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id={SECTION_IDS.CERTIFICATES}
      className="min-h-screen flex flex-col items-center justify-center py-16 sm:py-24 bg-card"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-3 flex items-center justify-center">
            <Award className="w-10 h-10 mr-3 text-primary" />
            Certificates & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my certified skills and professional development milestones.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants} // Use sectionVariants for staggering children
        >
          {certificatesData.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants}>
              <Card className="overflow-hidden shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative w-full h-56 bg-muted border-b">
                  <Image
                    src={cert.image}
                    alt={cert.imageAlt}
                    layout="fill"
                    objectFit="contain" // Use contain to ensure the whole certificate is visible
                    className="p-2" // Add some padding if images have no own margins
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">{cert.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Issued by: {cert.issuer}
                  </CardDescription>
                  <p className="text-xs text-muted-foreground/80">Date: {cert.date}</p>
                </CardHeader>
                <CardContent className="mt-auto flex-grow flex items-end">
                  <div className="flex space-x-3 w-full">
                    {cert.verifyUrl && (
                      <Button asChild variant="outline" className="flex-1 group">
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          <ShieldCheck className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" /> Verify
                        </a>
                      </Button>
                    )}
                    {cert.downloadUrl && (
                      <Button asChild variant="secondary" className="flex-1 group">
                        <a href={cert.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" /> Download
                        </a>
                      </Button>
                    )}
                    {/* If no specific buttons, could add a generic link or info */}
                    {!cert.verifyUrl && !cert.downloadUrl && (
                       <div className="w-full text-center text-sm text-muted-foreground py-2">
                         {/* Placeholder if no actions */}
                       </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-px bg-border my-8"></div>
      </div>
    </motion.section>
  );
}

    