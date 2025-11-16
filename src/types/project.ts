export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    website?: string;
  };
  slug: string;
  featured?: boolean;
}

