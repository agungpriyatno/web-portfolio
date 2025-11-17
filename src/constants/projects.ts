import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Platform Manajemen dan Pemantauan Body-Worn Camera (BWC)",
    description: `Mengembangkan platform terpusat untuk manajemen dan pemantauan perangkat Body-Worn Camera (BWC). Sistem ini dirancang untuk mengelola seluruh aset operasional, meliputi manajemen perangkat, data personel, penugasan, dan konfigurasi geofence. Platform ini menyediakan fungsionalitas pemantauan status streaming video secara real-time dan mengimplementasikan autentikasi terpusat menggunakan OAuth 2.0 (Authorization Code Flow). Fitur unggulan sistem adalah AI Query, yang memungkinkan pengguna melakukan kueri data menggunakan natural language (bahasa alami).

Fungsionalitas Utama:

Streaming RTMP/HLS: Pemantauan status stream (online/offline) per perangkat dan kompatibilitas pipeline HLS player pada web.

AI Query (Aturan Kustom): Menerjemahkan prompt bahasa alami pengguna menjadi kueri SQL yang aman (hanya-baca, SELECT) dan menampilkan hasil dalam tabel dinamis.

Manajemen Geofence: Menyediakan list view dan map view dengan form map picker interaktif (drag marker, set koordinat & radius).

Autentikasi OAuth 2.0: Implementasi Authorization Code Flow dengan Refresh Token, auto-refresh saat terjadi 401, serta opsi logout lokal atau global.

UX Modern: Combobox searchable (dengan debounce & pagination), skeleton loading, layout responsif, dan notifikasi toast sebagai umpan balik.

Keunggulan Proyek:

Aksesibilitas Data: Pengguna non-teknis dapat memperoleh insight data secara cepat tanpa keahlian SQL.

Arsitektur Modular: Menggunakan monorepo (Turborepo) untuk kemudahan pemeliharaan dan skalabilitas.

Pengalaman Pengguna: Antarmuka yang dirancang agar cepat, responsif, dan konsisten.`,
    image: "/images/projects/bwc-1.png",
    technologies: [
      "Vue.js",
      "Express.js",
      "PostgreSQL",
      "OAuth 2.0",
      "AI Query",
      "Minio",
      "Docker",
      "Git",
      "Turborepo",
    ],
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/yourusername/ecommerce",
    },
    slug: "bwc-platform",
    featured: true,
    status: "completed",
    githubStats: {
      stars: 245,
      forks: 67,
    },
    screenshots: [
      "/images/projects/bwc-1.png",
      "/images/projects/bwc-2.png",
      "/images/projects/bwc-3.png",
    ],
  },
  {
    id: "2",
    title: "Implementasi Sistem Monitoring IoT SPARING KLHK",
    description: `Mengimplementasikan solusi monitoring kualitas air limbah (SPARING) untuk kepatuhan regulasi KLHK. Solusi berjalan di perangkat HMI pada beberapa Water Treatment Plant (WTP), terdiri dari dua aplikasi utama: Node-RED untuk akuisisi dan pengiriman data ke server KLHK & internal, dan aplikasi Flutter sebagai dasbor real-time di HMI untuk operator.`,
    image: "https://picsum.photos/400/300?random=2",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    links: {
      demo: "https://tasks.example.com",
      github: "https://github.com/yourusername/task-app",
    },
    slug: "task-management-app",
    status: "completed",
    githubStats: {
      stars: 128,
      forks: 34,
    },
    screenshots: [
      "https://picsum.photos/800/600?random=201",
      "https://picsum.photos/800/600?random=202",
      "https://picsum.photos/800/600?random=203",
    ],
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
    status: "in-progress",
    githubStats: {
      stars: 89,
      forks: 21,
    },
    screenshots: [
      "https://picsum.photos/800/600?random=301",
      "https://picsum.photos/800/600?random=302",
      "https://picsum.photos/800/600?random=303",
    ],
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
    screenshots: [
      "https://picsum.photos/800/600?random=401",
      "https://picsum.photos/800/600?random=402",
      "https://picsum.photos/800/600?random=403",
    ],
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
    screenshots: [
      "https://picsum.photos/800/600?random=501",
      "https://picsum.photos/800/600?random=502",
      "https://picsum.photos/800/600?random=503",
    ],
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
    screenshots: [
      "https://picsum.photos/800/600?random=601",
      "https://picsum.photos/800/600?random=602",
      "https://picsum.photos/800/600?random=603",
    ],
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
    screenshots: [
      "https://picsum.photos/800/600?random=701",
      "https://picsum.photos/800/600?random=702",
      "https://picsum.photos/800/600?random=703",
    ],
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
    screenshots: [
      "https://picsum.photos/800/600?random=801",
      "https://picsum.photos/800/600?random=802",
      "https://picsum.photos/800/600?random=803",
    ],
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
    screenshots: [
      "https://picsum.photos/800/600?random=901",
      "https://picsum.photos/800/600?random=902",
      "https://picsum.photos/800/600?random=903",
    ],
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
    screenshots: [
      "https://picsum.photos/800/600?random=1001",
      "https://picsum.photos/800/600?random=1002",
      "https://picsum.photos/800/600?random=1003",
    ],
  },
];
