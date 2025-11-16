"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  GithubIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { footerData } from "@/lib/data";

const iconMap: { [key: string]: React.ElementType } = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  threads: MessageCircle,
};

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

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              Membangun aplikasi web modern dengan passion dan presisi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">
              Tautan Cepat
            </h4>
            <nav className="flex flex-col gap-2">
              {footerData.quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Terhubung</h4>
            <div className="flex gap-4">
              {footerData.socialLinks.map((link) => {
                const Icon = link.icon || GithubIcon;
                return (
                  <Link
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.platform}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          {footerData.copyright}
        </div>
      </div>
    </footer>
  );
}
