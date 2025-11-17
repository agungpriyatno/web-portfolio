import type { ContactInfo } from "@/types";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MessageCircleIcon,
} from "lucide-react";

export const contactData: ContactInfo = {
  email: "agungpriyatno303@gmail.com",
  whatsapp: {
    number: "085156255788",
    message:
      "Halo, saya tertarik untuk berdiskusi tentang proyek yang anda kerjakan...",
  },
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
      url: "https://instagram.com/agungpriyatno.ts",
      icon: InstagramIcon,
    },
    {
      platform: "Threads",
      url: "https://threads.net/@agungpriyatno.ts",
      icon: MessageCircleIcon,
    },
  ],
};
