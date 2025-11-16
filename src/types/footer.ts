export interface FooterData {
  copyright: string;
  quickLinks: {
    label: string;
    href: string;
  }[];
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

