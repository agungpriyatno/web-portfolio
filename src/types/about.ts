export interface About {
  name: string;
  avatar: string;
  bio: string;
  skills: string[];
  stats: Array<{
    label: string;
    value: string;
  }>;
}

