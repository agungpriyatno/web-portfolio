export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
  logo?: string;
  technologies?: string[];
  location?: string;
}

