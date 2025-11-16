import type { WorkExperience } from "@/types";

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
