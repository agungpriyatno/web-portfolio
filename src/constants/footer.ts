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
      url: "https://github.com/agungpriyatno",
      icon: GithubIcon,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/agung-priyatno-b28853203",
      icon: LinkedinIcon,
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/agungpriyatno.ts",
      icon: InstagramIcon,
    },
    {
      platform: "Threads",
      url: "https://threads.net/@agungpriyatno.ts",
      icon: MessageCircleIcon,
    },
  ],
};
