
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
// NOTE: StaticImageData import is removed as we are using string URLs for placeholders.
// To use local images later, uncomment the line below and update the Certificate interface.
// import type { StaticImageData } from 'next/image';
import { SECTION_IDS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Download, ExternalLink, ShieldCheck } from 'lucide-react';

// TODO: To use your local certificate images:
// 1. Place your images in the `src/assets/certificates/` folder.
// 2. For each certificate below, uncomment the corresponding import line (or add new ones).
//    Example: import ciscoCyberImage_local from '@/assets/certificates/cisco_cyber.jpg';
// 3. Update the `Certificate` interface's `image` property type to `StaticImageData`.
// 4. In `certificatesData`, change the `image` property to use the imported image variable.
//    Example: image: ciscoCyberImage_local,

// Placeholder imports (commented out, enable when local images are ready)
// import ciscoCyberImage_local from '@/assets/certificates/cisco_cyber.jpg';
// import flutterImage_local from '@/assets/certificates/flutter.jpg';
// import ieeRagImage_local from '@/assets/certificates/iee_rag.jpg';
// import imageProImage_local from '@/assets/certificates/image_pro.jpg';
// import nConfImage_local from '@/assets/certificates/n_conf.jpg';
// import nitPythonImage_local from '@/assets/certificates/nit_python.jpg';
// import nvidiaGenImage_local from '@/assets/certificates/nvidia_gen.jpg';
// import nvidiaNlsImage_local from '@/assets/certificates/nvidia_nls.jpg';
// import ragCompImage_local from '@/assets/certificates/rag_comp.jpg';
// import uiUxImage_local from '@/assets/certificates/ui_ux.jpg';


interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string; // Using string for placeholder URLs
  // image: StaticImageData; // Use this type when using local static imports
  imageAlt: string;
  imageHint: string; // For AI image search later if needed
  verifyUrl?: string;
  downloadUrl?: string;
}

const certificatesData: Certificate[] = [
  {
    id: 'cert-cisco-cyber',
    title: 'Cisco Cybersecurity',
    issuer: 'Cisco',
    date: 'Oct 2023',
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'Cisco Cybersecurity Certificate Placeholder',
    imageHint: 'cybersecurity certificate',
    verifyUrl: '#',
  },
  {
    id: 'cert-flutter',
    title: 'Flutter Development',
    issuer: 'Udemy',
    date: 'Nov 2023',
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'Flutter Development Certificate Placeholder',
    imageHint: 'flutter certificate',
    verifyUrl: '#',
  },
  {
    id: 'cert-iee-rag',
    title: 'IEEE RAG Workshop',
    issuer: 'IEEE',
    date: 'Dec 2023',
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'IEEE RAG Workshop Certificate Placeholder',
    imageHint: 'workshop certificate',
  },
  {
    id: 'cert-image-pro',
    title: 'Image Processing with Python',
    issuer: 'Coursera',
    date: 'Jan 2024',
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'Image Processing Certificate Placeholder',
    imageHint: 'python certificate',
  },
  {
    id: 'cert-n-conf',
    title: 'N Conference Participation',
    issuer: 'NVIDIA',
    date: 'Feb 2024',
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'NVIDIA Conference Certificate Placeholder',
    imageHint: 'conference certificate',
  },
  {
    id: 'cert-nit-python',
    title: 'Python Programming - NIT',
    issuer: 'NIT',
    date: 'Mar 2024',
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'NIT Python Certificate Placeholder',
    imageHint: 'programming certificate',
  },
  {
    id: 'cert-nvidia-gen',
    title: 'NVIDIA Generative AI',
    issuer: 'NVIDIA',
    date: 'Apr 2024',
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'NVIDIA Generative AI Certificate Placeholder',
    imageHint: 'ai certificate',
  },
  {
    id: 'cert-nvidia-nls',
    title: 'NVIDIA NLP Series',
    issuer: 'NVIDIA',
    date: 'May 2024',
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'NVIDIA NLP Certificate Placeholder',
    imageHint: 'nlp certificate',
  },
  {
    id: 'cert-rag-comp',
    title: 'RAG Competition',
    issuer: 'Kaggle',
    date: 'Jun 2024',
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'RAG Competition Certificate Placeholder',
    imageHint: 'competition certificate',
  },
  {
    id: 'cert-ui-ux',
    title: 'UI/UX Design Fundamentals',
    issuer: 'Design Academy',
    date: 'Jul 2024',
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'UI/UX Design Certificate Placeholder',
    imageHint: 'design certificate',
  },
];

export function CertificatesSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
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
          variants={sectionVariants}
        >
          {certificatesData.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants}>
              <Card className="overflow-hidden shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative w-full h-56 bg-muted border-b">
                  <Image
                    src={cert.image}
                    alt={cert.imageAlt}
                    layout="fill"
                    objectFit="contain" // Changed from 'cover' to 'contain' for certificate images
                    className="p-2" // Added padding around the image
                    data-ai-hint={cert.imageHint}
                    // For external URLs, placeholder="blur" is not typically used without a blurDataURL.
                    // If using local StaticImageData later, placeholder="blur" can be re-added.
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
                    {!cert.verifyUrl && !cert.downloadUrl && (
                       <div className="w-full text-center text-sm text-muted-foreground py-2">
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
