export interface Project {
  id: string;
  title: string;
  category: 'Civic Tech' | 'Desktop / Systems' | 'Web Apps' | 'Academic Systems';
  tagline: string;
  summary: string;
  year: string;
  role: string;
  stack: string[];
  problem: string;
  solution: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  isFeatured?: boolean;
  statusNote?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Technical Experience' | 'Campus Support' | 'Leadership';
  description: string;
  keyContributions: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  year: string;
  category: string;
  description: string;
}

export interface EducationInfo {
  institution: string;
  location: string;
  degree: string;
  yearLevel: string;
  expectedGraduation: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
