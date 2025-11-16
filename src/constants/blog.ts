import type { BlogPost } from "@/types";

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
    category: "Tutorial",
    featured: true,
    viewCount: 1245,
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
    category: "Best Practices",
    featured: true,
    viewCount: 2156,
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
    category: "Tech",
    viewCount: 987,
  },
];
