import { Search, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import type { CommunityCategory } from '../types';

const categories: CommunityCategory[] = ['推荐', '文旅', '英雄', '城市', '关注'];

type CommunityHeaderProps = {
  activeCategory: CommunityCategory;
  onCategoryChange: (cat: CommunityCategory) => void;
  onSearch: () => void;
  onMessage: () => void;
};

export function CommunityHeader({
  activeCategory,
  onCategoryChange,
  onSearch,
  onMessage,
}: CommunityHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#FFF8EA]/95 backdrop-blur-xl border-b border-[#F5DDA2]/30">
      {/* Top row */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <h1 className="text-[22px] font-extrabold text-[#38100E] tracking-tight">社区</h1>
        <div className="flex items-center gap-4">
          <button onClick={onSearch} className="text-[#8C6A58] hover:text-[#C0392B] transition-colors">
            <Search size={20} strokeWidth={2.5} />
          </button>
          <button onClick={onMessage} className="text-[#8C6A58] hover:text-[#C0392B] transition-colors relative">
            <MessageCircle size={20} strokeWidth={2.5} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#C0392B] rounded-full" />
          </button>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-1 px-5 pb-2 overflow-x-auto no-scrollbar">
        {categories.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`relative px-4 py-2 text-[13px] font-bold whitespace-nowrap transition-colors ${
                active ? 'text-[#C0392B]' : 'text-[#8C6A58]/40 hover:text-[#8C6A58]/60'
              }`}
            >
              {cat}
              {active && (
                <motion.div
                  layoutId="community-category-underline"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[3px] rounded-full bg-gradient-to-r from-[#FFD36B] to-[#F5A623]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
}
