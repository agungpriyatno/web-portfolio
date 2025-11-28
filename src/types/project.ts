export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  images: string[];
  period: {
    start: string;
    end?: string;
  };
  links: {
    demo?: string;
    github?: string;
    website?: string;
  };
}
