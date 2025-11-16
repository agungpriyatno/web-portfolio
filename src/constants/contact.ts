import type { ContactInfo } from "@/types";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MessageCircleIcon,
} from "lucide-react";

export const contactData: ContactInfo = {
  email: "your.email@example.com",
  whatsapp: {
    number: "6281234567890",
    message: "Halo, saya tertarik untuk berdiskusi tentang project...",
  },
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
