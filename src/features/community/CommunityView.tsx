import { useState, useEffect, useCallback } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { CommunityCategory, CommunityPost } from './types';
import { mockPosts } from './data/mockPosts';
import { CommunityHeader } from './components/CommunityHeader';
import { CommunityPostCard } from './components/CommunityPostCard';

async function loadPosts(category: CommunityCategory): Promise<CommunityPost[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  if (category === '推荐') return [...mockPosts].filter((p) => p.category !== '关注');
  return mockPosts.filter((p) => p.category === category);
}

type CommunityViewProps = {
  onMessage: () => void;
  onCreatePost?: () => void;
};

export function CommunityView({ onMessage, onCreatePost }: CommunityViewProps) {
  const [activeCategory, setActiveCategory] = useState<CommunityCategory>('推荐');
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback((cat: CommunityCategory) => {
    let mounted = true;
    setIsLoading(true);
    setError(null);
    loadPosts(cat)
      .then((data) => {
        if (mounted) {
          setPosts(data);
          setIsLoading(false);
        }
      })
      .catch((err: Error) => {
        if (mounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const cleanup = fetchPosts(activeCategory);
    return cleanup;
  }, [activeCategory, fetchPosts]);

  const handleLike = useCallback((postId: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              isLiked: !p.isLiked,
              likes: p.isLiked ? p.likes - 1 : p.likes + 1,
            }
          : p,
      ),
    );
  }, []);

  const handleCardClick = useCallback((post: CommunityPost) => {
    if (typeof window !== 'undefined') {
      console.log('Open post detail:', post.id);
    }
  }, []);

  const handleAuthorClick = useCallback((authorId: string) => {
    if (typeof window !== 'undefined') {
      console.log('Open author profile:', authorId);
    }
  }, []);

  const handleCreatePost = () => {
    if (onCreatePost) {
      onCreatePost();
    } else {
      if (typeof window !== 'undefined') {
        console.log('Create post clicked');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8EA] to-[#FFFAF5]">
      {/* Warm golden ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(255,211,107,.30), transparent 35%), radial-gradient(circle at 80% 40%, rgba(245,166,35,.10), transparent 30%), radial-gradient(circle at 20% 70%, rgba(192,57,43,.06), transparent 25%)',
        }}
      />

      <div className="relative z-10">
        <CommunityHeader
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSearch={() => {}}
          onMessage={onMessage}
        />

        <main className="px-3 pt-4 pb-32">
          {isLoading ? (
            /* Skeleton loading */
            <div className="masonry-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="masonry-item bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F5DDA2]/10"
                >
                  <div
                    className="bg-gray-200 animate-pulse w-full"
                    style={{ aspectRatio: i % 2 === 0 ? 1.25 : 1.5 }}
                  />
                  <div className="p-3 space-y-2">
                    <div className="h-3 bg-gray-200 animate-pulse rounded w-3/4" />
                    <div className="h-3 bg-gray-200 animate-pulse rounded w-1/2" />
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse" />
                        <div className="h-2.5 bg-gray-200 animate-pulse rounded w-12" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-2.5 bg-gray-200 animate-pulse rounded w-10" />
                        <div className="h-2.5 bg-gray-200 animate-pulse rounded w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            /* Error state */
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <div className="w-16 h-16 rounded-full bg-[#FFF8EA] flex items-center justify-center">
                <span className="text-2xl">😿</span>
              </div>
              <p className="text-[14px] font-bold text-[#8C6A58]">加载失败</p>
              <p className="text-[12px] text-[#8C6A58]/60">{error}</p>
              <button
                onClick={() => fetchPosts(activeCategory)}
                className="mt-1 px-5 py-2 bg-[#C0392B] text-white text-[12px] font-bold rounded-full active:scale-95 transition-transform"
              >
                重新加载
              </button>
            </div>
          ) : posts.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <div className="w-16 h-16 rounded-full bg-[#FFF8EA] flex items-center justify-center">
                <span className="text-2xl">📭</span>
              </div>
              <p className="text-[14px] font-bold text-[#8C6A58]">该分类暂无内容</p>
              <p className="text-[12px] text-[#8C6A58]/60">换个分类看看吧</p>
            </div>
          ) : (
            /* Post grid with animation */
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="masonry-grid"
              >
                {posts.map((post) => (
                  <CommunityPostCard
                    key={post.id}
                    post={post}
                    onCardClick={handleCardClick}
                    onLike={handleLike}
                    onAuthorClick={handleAuthorClick}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </main>
      </div>

      {/* Floating Action Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleCreatePost}
        className="fixed bottom-28 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-[#FFD36B] to-[#F5A623] text-white shadow-xl shadow-[#F5A623]/40 flex items-center justify-center active:scale-95 transition-transform"
      >
        <Plus size={28} strokeWidth={3} />
      </motion.button>
    </div>
  );
}
