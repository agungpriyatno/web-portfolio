export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  tags: string[];
  slug: string;
  image?: string;
  author?: string;
  readTime?: string;
  category: string;
  featured?: boolean;
  viewCount?: number;
}

