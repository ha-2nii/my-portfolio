import type { ReactNode } from 'react';

export interface Project {
  id: string;
  number: string;
  title: string;
  type: string;
  image: string;
  description: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  displayUrl?: string;
  status?: string;
}

export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface Capability {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TimelineItem {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ValueItem {
  icon: ReactNode;
  title: string;
  description: string;
}
