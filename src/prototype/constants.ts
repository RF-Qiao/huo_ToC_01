import type { AuthStep, ExperiencePhase, PrototypeUserProfile } from './types';

export const DEFAULT_SCENE_NAME = '蓝色港湾 · 黄火火体验点';

export const DEFAULT_USER_PROFILE: PrototypeUserProfile = {
  nickname: '火种游客001',
  avatar: '',
};

export const DEFAULT_AUTH_STEP: AuthStep = 'selector';

export const DEFAULT_EXPERIENCE_PHASE: ExperiencePhase = 'active';

export const HERO_CATEGORIES = ['全部', '少年英雄', '巾帼英雄', '家国英雄', '智谋英雄', '神话英雄', '已解锁'] as const;
