import { LucideIcon } from "lucide-react";

export interface ContactInfo {
  email: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: LucideIcon;
  }[];
}
