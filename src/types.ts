export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
  icon: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  challengesSolved: string[];
  focusAreas: string[];
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  qualification: string;
  experience: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  content: string[];
}

export interface Inquiry {
  name: string;
  phone: string;
  email: string;
  requirement: string;
  serviceOrIndustry?: string;
}
