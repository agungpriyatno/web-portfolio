import { LucideIcon } from "lucide-react";

export interface FooterData {
  copyright: string;
  quickLinks: {
    label: string;
    href: string;
  }[];
  socialLinks: {
    platform: string;
    url: string;
    icon: LucideIcon;
  }[];
}
