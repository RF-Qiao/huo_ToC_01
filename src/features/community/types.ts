export type CommunityCategory = '推荐' | '文旅' | '英雄' | '城市' | '关注';

export interface CommunityAuthor {
  id: string;
  name: string;
  avatar: string;
  isOfficial?: boolean;
}

export interface CommunityPost {
  id: string;
  category: CommunityCategory;
  title: string;
  description?: string;
  imageUrl: string;
  imageAspectRatio: number;
  author: CommunityAuthor;
  likes: number;
  comments: number;
  favorites: number;
  tags?: string[];
  createdAt: string;
  isLiked?: boolean;
  isFavorited?: boolean;
}
