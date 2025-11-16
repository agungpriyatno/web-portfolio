import { LucideIcon } from "lucide-react";

export interface ContactInfo {
  email: string;
  whatsapp?: {
    number: string;
    message: string;
  };
  socialLinks: {
    platform: string;
    url: string;
    icon: LucideIcon;
  }[];
}
