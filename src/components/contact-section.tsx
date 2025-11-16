"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Check, Copy, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contactData } from "@/lib/data";
import {
  fadeInDown,
  fadeIn,
  fadeInLeft,
  scaleIn,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-muted/30 via-background to-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInDown}
          >
            Mari Terhubung
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeIn}
          >
            Jangan ragu untuk menghubungi saya untuk kolaborasi, peluang kerja,
            atau sekadar mengobrol
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Email & CV */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {/* Email Card */}
            <motion.div variants={fadeInLeft}>
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    Email Saya
                  </CardTitle>
                  <CardDescription className="text-base">
                    Kirim saya pesan langsung
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors block break-all"
                  >
                    {contactData.email}
                  </a>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={handleCopyEmail}
                      className="gap-2 flex-1"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Tersalin!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Salin Email
                        </>
                      )}
                    </Button>
                    <Button asChild variant="default" className="gap-2 flex-1">
                      <a href={`mailto:${contactData.email}`}>
                        <Mail className="w-4 h-4" />
                        Kirim Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Download CV Card */}
            <motion.div variants={fadeInLeft}>
              <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-primary/10 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    Unduh CV
                  </CardTitle>
                  <CardDescription className="text-base">
                    Dapatkan CV lengkap saya dalam format PDF
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    size="lg"
                    variant="default"
                    className="w-full gap-2"
                  >
                    <Link
                      href="/documents/agung-priyatno-cv.pdf"
                      download="Agung-Priyatno-CV.pdf"
                    >
                      <Download className="w-5 h-5" />
                      Unduh CV Saya
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column - Social Links */}
          <div>
            <motion.h3
              className="text-xl font-semibold text-foreground mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeIn}
            >
              Ikuti Saya di Media Sosial
            </motion.h3>
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
            >
              {contactData.socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.div key={link.platform} variants={scaleIn}>
                    <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                      <CardContent className="p-6">
                        <Link
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4"
                        >
                          <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                            <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <div className="grow">
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {link.platform}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              @yourusername
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
