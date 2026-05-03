export interface Soul {
  id: string;
  name: string;
  tagline: string;
  image: string;
  type: string;
}

export interface QuickItem {
  icon: string;
  title: string;
  desc: string;
  bg: string;
}

export interface PrototypeHeroSummary {
  name: string;
  tag: string;
  time: string;
  diff: string;
  tone: string;
}

export interface PrototypeTabHero {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  line: string;
  duration: string;
  tasks: number;
  difficulty: string;
  status: string;
  unlocked: boolean;
  image: string;
}

export type AppPhase = 'splash' | 'welcome' | 'auth' | 'main';

export type AuthStep = 'selector' | 'phone' | 'profile' | 'permissions' | 'entering';

export type ExperiencePhase = 'not_started' | 'pending' | 'active' | 'arrived' | 'success' | 'finished';

export interface PrototypeUserProfile {
  nickname: string;
  avatar: string;
}
