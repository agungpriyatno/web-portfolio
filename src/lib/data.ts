import type {
  NavItem,
  Hero,
  About,
  TechStack,
  Project,
  WorkExperience,
  BlogPost,
  ContactInfo,
  FooterData,
} from "@/types";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MessageCircleIcon,
  FileCodeIcon,
  Code2Icon,
  BoxIcon,
  PaletteIcon,
  DatabaseIcon,
  GitBranchIcon,
  ContainerIcon,
} from "lucide-react";

export const navItems: NavItem[] = [
  { id: "hero", label: "Beranda", href: "#hero" },
  { id: "about", label: "Tentang", href: "#about" },
  { id: "projects", label: "Proyek", href: "#projects" },
  { id: "journey", label: "Perjalanan", href: "#journey" },
  { id: "blog", label: "Blog", href: "#blog" },
  { id: "contact", label: "Kontak", href: "#contact" },
];

export const heroData: Hero = {
  name: "Agung Priyatno",
  role: "Full Stack Developer",
  ctaButtons: {
    primary: {
      label: "Lihat Proyek",
      href: "#projects",
    },
    secondary: {
      label: "Hubungi Saya",
      href: "#contact",
    },
  },
};

export const aboutData: About = {
  name: "Agung Priyatno",
  avatar: "/images/avatar.jpg",
  bio: "Saya adalah seorang Full Stack Developer yang passionate dalam menciptakan aplikasi web modern dan responsif. Dengan pengalaman bertahun-tahun di industri teknologi, saya fokus pada pengembangan solusi yang tidak hanya fungsional tetapi juga memberikan pengalaman pengguna yang luar biasa. Saya selalu bersemangat untuk mempelajari teknologi baru dan berbagi pengetahuan dengan komunitas developer.",
  skills: [
    "Web Development",
    "UI/UX Design",
    "API Development",
    "Database Design",
    "Cloud Services",
    "DevOps",
    "Agile Methodology",
    "Problem Solving",
  ],
  stats: [
    { value: "3+", label: "Tahun Pengalaman" },
    { value: "20+", label: "Proyek Selesai" },
    { value: "15+", label: "Klien Puas" },
    { value: "50+", label: "Teknologi Dikuasai" },
  ],
};

export const techStackData: TechStack[] = [
  { id: "1", name: "React", icon: Code2Icon, category: "Frontend" },
  { id: "2", name: "Next.js", icon: FileCodeIcon, category: "Frontend" },
  { id: "3", name: "TypeScript", icon: Code2Icon, category: "Language" },
  { id: "4", name: "Node.js", icon: BoxIcon, category: "Backend" },
  { id: "5", name: "Tailwind CSS", icon: PaletteIcon, category: "Styling" },
  { id: "6", name: "PostgreSQL", icon: DatabaseIcon, category: "Database" },
  { id: "7", name: "Git", icon: GitBranchIcon, category: "Tools" },
  { id: "8", name: "Docker", icon: ContainerIcon, category: "DevOps" },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Platform E-Commerce",
    description:
      "Platform e-commerce lengkap dengan manajemen keranjang, integrasi pembayaran, dan dashboard admin.",
    image: "https://picsum.photos/400/300?random=1",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/yourusername/ecommerce",
    },
    slug: "ecommerce-platform",
    featured: true,
  },
  {
    id: "2",
    title: "Aplikasi Manajemen Tugas",
    description:
      "Alat manajemen tugas kolaboratif dengan pembaruan real-time dan fitur tim.",
    image: "https://picsum.photos/400/300?random=2",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    links: {
      demo: "https://tasks.example.com",
      github: "https://github.com/yourusername/task-app",
    },
    slug: "task-management-app",
  },
  {
    id: "3",
    title: "Dashboard Cuaca",
    description:
      "Dashboard cuaca yang indah dengan perkiraan, peta, dan peringatan berbasis lokasi.",
    image: "https://picsum.photos/400/300?random=3",
    technologies: ["React", "TypeScript", "API Integration", "Charts"],
    links: {
      demo: "https://weather.example.com",
      github: "https://github.com/yourusername/weather-dashboard",
    },
    slug: "weather-dashboard",
  },
  {
    id: "4",
    title: "Sistem Booking Online",
    description:
      "Platform booking online untuk layanan salon dan spa dengan kalender appointment dan payment gateway.",
    image: "https://picsum.photos/400/300?random=4",
    technologies: ["Vue.js", "Laravel", "MySQL", "Midtrans"],
    links: {
      demo: "https://booking.example.com",
      github: "https://github.com/yourusername/booking-system",
    },
    slug: "booking-system",
    featured: true,
  },
  {
    id: "5",
    title: "Social Media Dashboard",
    description:
      "Dashboard analytics untuk media sosial dengan tracking engagement, follower growth, dan content performance.",
    image: "https://picsum.photos/400/300?random=5",
    technologies: ["React", "D3.js", "Firebase", "Tailwind CSS"],
    links: {
      demo: "https://social.example.com",
      github: "https://github.com/yourusername/social-dashboard",
    },
    slug: "social-media-dashboard",
  },
  {
    id: "6",
    title: "Learning Management System",
    description:
      "Platform pembelajaran online dengan video courses, quiz interaktif, dan progress tracking untuk siswa.",
    image: "https://picsum.photos/400/300?random=6",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
    links: {
      demo: "https://lms.example.com",
      github: "https://github.com/yourusername/lms",
    },
    slug: "learning-management-system",
  },
  {
    id: "7",
    title: "Food Delivery App",
    description:
      "Aplikasi food delivery dengan real-time order tracking, rating system, dan multi-vendor support.",
    image: "https://picsum.photos/400/300?random=7",
    technologies: ["React Native", "Express", "MongoDB", "Google Maps API"],
    links: {
      demo: "https://food.example.com",
      github: "https://github.com/yourusername/food-delivery",
    },
    slug: "food-delivery-app",
  },
  {
    id: "8",
    title: "Portfolio CMS",
    description:
      "Content Management System khusus untuk portfolio dengan drag-and-drop builder dan SEO optimization.",
    image: "https://picsum.photos/400/300?random=8",
    technologies: ["Next.js", "Strapi", "GraphQL", "Vercel"],
    links: {
      demo: "https://portfolio-cms.example.com",
      github: "https://github.com/yourusername/portfolio-cms",
    },
    slug: "portfolio-cms",
  },
  {
    id: "9",
    title: "Inventory Management",
    description:
      "Sistem manajemen inventori untuk retail dengan barcode scanning, stock alerts, dan reporting.",
    image: "https://picsum.photos/400/300?random=9",
    technologies: ["Angular", "NestJS", "PostgreSQL", "Redis"],
    links: {
      demo: "https://inventory.example.com",
      github: "https://github.com/yourusername/inventory",
    },
    slug: "inventory-management",
  },
  {
    id: "10",
    title: "Chat Application",
    description:
      "Real-time chat application dengan grup chat, file sharing, dan video call features.",
    image: "https://picsum.photos/400/300?random=10",
    technologies: ["React", "Socket.io", "WebRTC", "Node.js"],
    links: {
      demo: "https://chat.example.com",
      github: "https://github.com/yourusername/chat-app",
    },
    slug: "chat-application",
    featured: true,
  },
];

export const workExperienceData: WorkExperience[] = [
  {
    id: "1",
    company: "Tech Company Inc.",
    role: "Senior Full Stack Developer",
    startDate: "2022-01",
    endDate: null,
    description:
      "Memimpin pengembangan arsitektur microservices dan membimbing developer junior. Membangun API yang scalable dan aplikasi frontend modern.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    location: "Remote",
  },
  {
    id: "2",
    company: "Startup XYZ",
    role: "Frontend Developer",
    startDate: "2020-06",
    endDate: "2021-12",
    description:
      "Mengembangkan aplikasi web responsif dan mengimplementasikan design system. Berkolaborasi dengan tim desain untuk membuat UI yang pixel-perfect.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    location: "San Francisco, CA",
  },
  {
    id: "3",
    company: "Digital Agency",
    role: "Junior Developer",
    startDate: "2019-03",
    endDate: "2020-05",
    description:
      "Membangun website klien dan memaintain proyek yang ada. Mempelajari praktik pengembangan web modern dan metodologi agile.",
    technologies: ["JavaScript", "HTML/CSS", "WordPress", "jQuery"],
    location: "New York, NY",
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: "1",
    title: "Memulai dengan Next.js 14",
    excerpt:
      "Pelajari fitur-fitur baru di Next.js 14 dan cara membangun aplikasi web modern dengan App Router.",
    date: "2024-11-01",
    tags: ["Next.js", "React", "Web Development"],
    slug: "getting-started-nextjs-14",
    readTime: "5 menit baca",
  },
  {
    id: "2",
    title: "Best Practice TypeScript untuk React",
    excerpt:
      "Temukan pola dan praktik TypeScript esensial untuk menulis aplikasi React yang type-safe.",
    date: "2024-10-15",
    tags: ["TypeScript", "React", "Best Practices"],
    slug: "typescript-best-practices-react",
    readTime: "8 menit baca",
  },
  {
    id: "3",
    title: "Membangun API Scalable dengan Node.js",
    excerpt:
      "Panduan komprehensif untuk merancang dan mengimplementasikan RESTful API yang scalable menggunakan Node.js dan Express.",
    date: "2024-09-20",
    tags: ["Node.js", "API", "Backend"],
    slug: "building-scalable-apis-nodejs",
    readTime: "10 menit baca",
  },
];

export const contactData: ContactInfo = {
  email: "your.email@example.com",
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
