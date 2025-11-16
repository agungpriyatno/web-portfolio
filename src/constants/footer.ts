import type { FooterData } from "@/types";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MessageCircleIcon,
} from "lucide-react";

export const footerData: FooterData = {
  copyright: `© ${new Date().getFullYear()} Agung Priyatno. Hak cipta dilindungi.`,
  quickLinks: [
    { label: "Beranda", href: "#hero" },
    { label: "Proyek", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Kontak", href: "#contact" },
  ],
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/yourusername",
      icon: GithubIcon,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: LinkedinIcon,
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: InstagramIcon,
    },
    {
      platform: "Threads",
      url: "https://threads.net/@yourusername",
      icon: MessageCircleIcon,
    },
  ],
};
