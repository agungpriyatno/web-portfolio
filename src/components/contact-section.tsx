"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Check,
  Copy,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactData } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Mari Terhubung
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi saya untuk kolaborasi, peluang kerja,
            atau sekadar mengobrol
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {/* Email */}
          <div className="flex flex-col items-center gap-3">
            <Mail className="w-12 h-12 text-foreground/80" />
            <a
              href={`mailto:${contactData.email}`}
              className="text-xl sm:text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {contactData.email}
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyEmail}
              className="gap-2"
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
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            {contactData.socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || Mail;
              return (
                <Button
                  key={link.platform}
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                    {link.platform}
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Download CV */}
          <div className="mt-4">
            <Button asChild size="lg" variant="default" className="gap-2">
              <Link
                href="/documents/agung-priyatno-cv.pdf"
                download="Agung-Priyatno-CV.pdf"
              >
                <Download className="w-5 h-5" />
                Unduh CV
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
