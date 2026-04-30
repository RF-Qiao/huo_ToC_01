import { Heart, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import type { Key } from 'react';
import type { CommunityPost } from '../types';

const categoryBadgeColors: Record<string, string> = {
  '推荐': 'bg-gradient-to-r from-[#C0392B] to-[#E8780D]',
  '文旅': 'bg-gradient-to-r from-[#F39C28] to-[#F5A623]',
  '英雄': 'bg-gradient-to-r from-[#99161B] to-[#C0392B]',
  '城市': 'bg-gradient-to-r from-[#D4770A] to-[#E8780D]',
  '关注': 'bg-gradient-to-r from-[#8C6A58] to-[#A0856B]',
};

const avatarColors = [
  'bg-[#C0392B]', 'bg-[#F39C28]', 'bg-[#99161B]', 'bg-[#F5A623]',
  'bg-[#E8780D]', 'bg-[#8C6A58]', 'bg-[#D4770A]', 'bg-[#7B1015]',
];

function avatarColor(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash);
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

type CommunityPostCardProps = {
  key?: Key;
  post: CommunityPost;
  onCardClick?: (post: CommunityPost) => void;
  onLike?: (postId: string) => void;
  onAuthorClick?: (authorId: string) => void;
};

export function CommunityPostCard({
  post,
  onCardClick,
  onLike,
  onAuthorClick,
}: CommunityPostCardProps) {
  return (
    <motion.article
      whileTap={{ scale: 0.98 }}
      onClick={() => onCardClick?.(post)}
      className="masonry-item bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F5DDA2]/20 cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: post.imageAspectRatio }}>
        <img
          src={post.imageUrl}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {/* Category badge */}
        <span
          className={`absolute top-2 left-2 text-[10px] font-black text-white px-2 py-0.5 rounded-lg ${categoryBadgeColors[post.category] || 'bg-[#C0392B]'}`}
        >
          {post.category}
        </span>
        {/* Favorite indicator */}
        {post.isFavorited && (
          <span className="absolute top-2 right-2 text-[10px] font-black text-[#FFD36B] bg-[#38100E]/60 backdrop-blur px-1.5 py-0.5 rounded-md">
            ★ 收藏
          </span>
        )}
      </div>

      {/* Content */}
      <div className="px-3 pt-2.5 pb-3">
        <h3 className="text-[13px] font-bold text-[#38100E] leading-snug line-clamp-2">
          {post.title}
        </h3>
        {post.description && (
          <p className="text-[11px] text-[#8C6A58] mt-1 line-clamp-2 leading-relaxed">
            {post.description}
          </p>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-[#C0392B]/70 bg-[#FFF8EA] px-1.5 py-0.5 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author + Stats row */}
        <div className="flex items-center justify-between mt-2.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAuthorClick?.(post.author.id);
            }}
            className="flex items-center gap-1.5 min-w-0"
          >
            <div
              className={`w-5 h-5 rounded-full ${avatarColor(post.author.id)} flex items-center justify-center text-white text-[9px] font-extrabold shrink-0`}
            >
              {post.author.name.charAt(0)}
            </div>
            <span className="text-[11px] font-semibold text-[#8C6A58] truncate max-w-[60px]">
              {post.author.name}
            </span>
            {post.author.isOfficial && (
              <span className="text-[9px] font-black text-[#F5A623] bg-[#FFF8EA] px-1 rounded-md shrink-0">
                官方
              </span>
            )}
          </button>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onLike?.(post.id);
              }}
              className="flex items-center gap-1 text-[11px] font-semibold"
            >
              <motion.div
                whileTap={{ scale: 1.3 }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
              >
                <Heart
                  size={14}
                  strokeWidth={2.5}
                  fill={post.isLiked ? '#C0392B' : 'none'}
                  className={post.isLiked ? 'text-[#C0392B]' : 'text-[#8C6A58]/40'}
                />
              </motion.div>
              <span className={post.isLiked ? 'text-[#C0392B]' : 'text-[#8C6A58]/60'}>
                {post.likes > 999 ? `${(post.likes / 1000).toFixed(1)}k` : post.likes}
              </span>
            </button>
            <span className="flex items-center gap-0.5 text-[11px] text-[#8C6A58]/60 font-semibold">
              <MessageCircle size={13} strokeWidth={2.5} />
              {post.comments > 99 ? '99+' : post.comments}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
