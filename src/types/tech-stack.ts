import { LucideIcon } from "lucide-react";

export interface TechStack {
  id: string;
  name: string;
  icon: LucideIcon;
  category: string;
  level: "expert" | "advanced" | "intermediate";
  yearsOfExperience: number;
  projectCount: number;
  description?: string;
}
