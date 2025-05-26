
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SECTION_IDS, CONTACT_SECTION_SOCIAL_LINKS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { Mail, Send, Loader2 } from 'lucide-react'; 
import { useToast } from "@/hooks/use-toast";

const getIcon = (name: string): React.ComponentType<LucideProps> | null => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent || null;
};

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50, { message: "Name must be at most 50 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be at most 500 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

// Web3Forms access key directly embedded
const web3FormsAccessKey = "3326dc6a-5197-47c7-b638-a08616adfb5a";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (dataFromHookForm) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", dataFromHookForm.name);
    formData.append("email", dataFromHookForm.email);
    formData.append("message", dataFromHookForm.message);
    formData.append("access_key", web3FormsAccessKey);
    formData.append("subject", `New Contact Form Submission from ${dataFromHookForm.name}`);
    formData.append("from_name", "Motionfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message || "Thanks for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        form.reset();
      } else {
        console.error("Web3Forms API Error:", result.message);
        toast({
          title: "Error Sending Message",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact Form Submit Error:", error);
      toast({
        title: "Network Error",
        description: "Could not submit the form. Please check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id={SECTION_IDS.CONTACT}
      className="min-h-screen flex items-center justify-center py-16 sm:py-24 bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants}>
          <Card className="max-w-3xl mx-auto shadow-xl rounded-xl overflow-hidden border">
            <CardHeader className="bg-card p-6 sm:p-8 text-center">
              <motion.div variants={itemVariants}>
                <div className="flex justify-center items-center mb-4">
                  <Mail className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  Get In Touch
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground max-w-md mx-auto">
                  Have a project in mind or just want to say hi? Feel free to reach out.
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 bg-card">
              <Form {...form}>
                <motion.form
                  variants={itemVariants}
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} className="text-base" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Your Email" {...field} className="text-base" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your Message" rows={5} {...field} className="text-base" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <motion.div variants={itemVariants}>
                    <Button type="submit" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.form>
              </Form>

              <motion.div variants={itemVariants} className="mt-10 sm:mt-12 text-center">
                <p className="text-sm text-muted-foreground mb-4">Or connect with me on social media:</p>
                <div className="flex justify-center space-x-4 sm:space-x-6">
                  {CONTACT_SECTION_SOCIAL_LINKS.map((link, index) => {
                    const IconComponent = getIcon(link.Icon);
                    return IconComponent ? (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={socialIconVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.2, y: -2, color: "hsl(var(--primary))" }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="text-muted-foreground p-2 rounded-full hover:text-primary"
                        aria-label={`My ${link.name} profile`}
                      >
                        <IconComponent size={28} strokeWidth={1.5} />
                      </motion.a>
                    ) : null;
                  })}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
