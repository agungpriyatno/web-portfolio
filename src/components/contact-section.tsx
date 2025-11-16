"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Check,
  Copy,
  Download,
  ExternalLink,
  MessageCircle,
  Send,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contactData } from "@/constants/contact";
import {
  fadeInDown,
  fadeIn,
  fadeInLeft,
  fadeInRight,
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
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-muted/30 -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            className="inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={scaleIn}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Send className="w-4 h-4" />
              Mari Terhubung
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInDown}
          >
            Hubungi Saya
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeIn}
          >
            Saya terbuka untuk peluang baru, kolaborasi proyek, atau sekadar
            berdiskusi tentang teknologi. Jangan ragu untuk menghubungi!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
            className="lg:col-span-1"
          >
            <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
                <CardDescription>Kirim pesan langsung</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <p className="text-sm font-medium text-foreground break-all">
                  {contactData.email}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyEmail}
                    className="gap-2 flex-1"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Tersalin
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Salin
                      </>
                    )}
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="default"
                    className="gap-2 flex-1"
                  >
                    <a href={`mailto:${contactData.email}`}>
                      <Mail className="w-4 h-4" />
                      Kirim
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* WhatsApp Card */}
          {contactData.whatsapp && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeIn}
              className="lg:col-span-1"
            >
              <Card className="h-full border-2 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-500" />
                  </div>
                  <CardTitle className="text-xl">WhatsApp</CardTitle>
                  <CardDescription>Chat langsung</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <Button
                    asChild
                    size="lg"
                    className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Link
                      href={`https://wa.me/${
                        contactData.whatsapp.number
                      }?text=${encodeURIComponent(
                        contactData.whatsapp.message
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Kirim Pesan
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Download CV Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
            className="lg:col-span-1"
          >
            <Card className="h-full border-2 border-primary/30 bg-linear-to-br from-primary/5 to-primary/10 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Resume / CV</CardTitle>
                <CardDescription>Download CV lengkap</CardDescription>
              </CardHeader>
              <CardContent className="relative">
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
                    Unduh CV
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeIn}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Media Sosial
            </h3>
            <p className="text-muted-foreground">
              Temukan saya di platform favorit Anda
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {contactData.socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.div key={link.platform} variants={scaleIn}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300">
                          <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                            {link.platform}
                          </p>
                        </div>
                        <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeIn}
        >
          <Card className="max-w-2xl mx-auto border-2 border-primary/20 bg-linear-to-br from-primary/5 via-background to-muted/30">
            <CardContent className="p-8">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Lokasi
              </h3>
              <p className="text-muted-foreground mb-4">Jakarta, Indonesia</p>
              <p className="text-sm text-muted-foreground">
                Tersedia untuk remote work dan relokasi
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
