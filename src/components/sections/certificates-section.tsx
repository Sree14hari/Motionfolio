
"use client";

import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import { SECTION_IDS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Download, ExternalLink, ShieldCheck } from 'lucide-react';

// Import certificate images from src/assets/certificate/ (SINGULAR)
// PLEASE ENSURE THESE FILES EXIST AT THESE EXACT PATHS WITH CORRECT CASING AND EXTENSIONS
import ciscoCyberImage from '@/assets/certificate/cisco_cyber.jpg';
import flutterImage from '@/assets/certificate/flutter.jpg';
import ieeRagImage from '@/assets/certificate/iee_rag.jpg';
import imageProImage from '@/assets/certificate/image_pro.jpg';
import nConfImage from '@/assets/certificate/n_conf.jpg';
import nitPythonImage from '@/assets/certificate/nit_python.jpg';
// import nvidiaGenImage from '@/assets/certificate/nvidia_gen.jpg'; // Commented out due to "Module not found" error
import nvidiaNlsImage from '@/assets/certificate/nvidia_nls.jpg';
import ragCompImage from '@/assets/certificate/rag_comp.jpg';
import uiUxImage from '@/assets/certificate/ui_ux.jpg';


interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: StaticImageData | string; // Allow string for placeholder
  imageAlt: string;
  imageHint: string;
  verifyUrl?: string;
  downloadUrl?: string;
}

const certificatesData: Certificate[] = [
  {
    id: 'cert-cisco-cyber',
    title: 'Cisco Cybersecurity',
    issuer: 'Cisco',
    date: 'Oct 2023',
    image: ciscoCyberImage,
    imageAlt: 'Cisco Cybersecurity Certificate',
    imageHint: 'cybersecurity certificate',
    verifyUrl: '#',
  },
  {
    id: 'cert-flutter',
    title: 'Flutter Development',
    issuer: 'Udemy',
    date: 'Nov 2023',
    image: flutterImage,
    imageAlt: 'Flutter Development Certificate',
    imageHint: 'flutter certificate',
    verifyUrl: '#',
  },
  {
    id: 'cert-iee-rag',
    title: 'IEEE RAG Workshop',
    issuer: 'IEEE',
    date: 'Dec 2023',
    image: ieeRagImage,
    imageAlt: 'IEEE RAG Workshop Certificate',
    imageHint: 'workshop certificate',
  },
  {
    id: 'cert-image-pro',
    title: 'Image Processing with Python',
    issuer: 'Coursera',
    date: 'Jan 2024',
    image: imageProImage,
    imageAlt: 'Image Processing Certificate',
    imageHint: 'python certificate',
  },
  {
    id: 'cert-n-conf',
    title: 'N Conference Participation',
    issuer: 'NVIDIA',
    date: 'Feb 2024',
    image: nConfImage,
    imageAlt: 'NVIDIA Conference Certificate',
    imageHint: 'conference certificate',
  },
  {
    id: 'cert-nit-python',
    title: 'Python Programming - NIT',
    issuer: 'NIT',
    date: 'Mar 2024',
    image: nitPythonImage,
    imageAlt: 'NIT Python Certificate',
    imageHint: 'programming certificate',
  },
  {
    id: 'cert-nvidia-gen',
    title: 'NVIDIA Generative AI',
    issuer: 'NVIDIA',
    date: 'Apr 2024',
    // image: nvidiaGenImage, // Using placeholder due to import error
    image: 'https://placehold.co/600x400.png', // Placeholder image
    imageAlt: 'NVIDIA Generative AI Certificate - Placeholder',
    imageHint: 'ai certificate',
    // verifyUrl: '#', // Add actual URL when image is fixed
  },
  {
    id: 'cert-nvidia-nls',
    title: 'NVIDIA NLP Series',
    issuer: 'NVIDIA',
    date: 'May 2024',
    image: nvidiaNlsImage,
    imageAlt: 'NVIDIA NLP Certificate',
    imageHint: 'nlp certificate',
  },
  {
    id: 'cert-rag-comp',
    title: 'RAG Competition',
    issuer: 'Kaggle',
    date: 'Jun 2024',
    image: ragCompImage,
    imageAlt: 'RAG Competition Certificate',
    imageHint: 'competition certificate',
  },
  {
    id: 'cert-ui-ux',
    title: 'UI/UX Design Fundamentals',
    issuer: 'Design Academy',
    date: 'Jul 2024',
    image: uiUxImage,
    imageAlt: 'UI/UX Design Certificate',
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
                    objectFit="contain"
                    className="p-2"
                    data-ai-hint={cert.imageHint}
                    {...(typeof cert.image !== 'string' && cert.image.src ? { placeholder: 'blur' } : {})}
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
