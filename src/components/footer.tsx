"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin, Heart, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { footerData } from "@/constants/footer";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";

export function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-muted/30 border-t">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Brand Section */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Agung Priyatno
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full Stack Developer yang passionate dalam menciptakan solusi web
              inovatif dan user-friendly.
            </p>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Jakarta, Indonesia</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />
              <a
                href="mailto:your.email@example.com"
                className="hover:text-primary transition-colors"
              >
                your.email@example.com
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h4 className="text-base font-semibold text-foreground">
              Tautan Cepat
            </h4>
            <nav className="flex flex-col gap-3">
              {footerData.quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Resources */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h4 className="text-base font-semibold text-foreground">
              Resources
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                Semua Proyek
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                Semua Artikel
              </Link>
              <Link
                href="/documents/agung-priyatno-cv.pdf"
                download
                className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                Download CV
              </Link>
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h4 className="text-base font-semibold text-foreground">
              Ikuti Saya
            </h4>
            <div className="flex flex-wrap gap-3">
              {footerData.socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={link.platform}
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </Link>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              Terhubung dengan saya di platform media sosial favorit Anda
            </p>
          </motion.div>
        </motion.div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Agung Priyatno.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Dibuat dengan{" "}
              <Heart className="w-3 h-3 text-red-500 fill-current" /> dan
              <Code2 className="w-3 h-3" />
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Built with Next.js & Tailwind CSS
            </span>
            <Button
              onClick={scrollToTop}
              size="sm"
              variant="outline"
              className="gap-2"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Kembali ke Atas</span>
            </Button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
      </div>
    </footer>
  );
}
