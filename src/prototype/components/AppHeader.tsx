import { motion } from 'motion/react';
import { Filter, Search } from 'lucide-react';

type AppHeaderProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export function AppHeader({ activeTab, setActiveTab }: AppHeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-100 bg-[#FFF8EA]/80 backdrop-blur-md border-b border-[#F5DDA2] h-16 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-6">
        {['文旅', '排行榜', '商城'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-black relative transition-all ${activeTab === tab ? 'text-[#9B171C]' : 'text-[#8C6A58]/40 hover:text-[#8C6A58]/60'}`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="header-tab-indicator"
                className="absolute -bottom-1.5 left-0 w-full h-1 bg-[#9B171C] rounded-full"
              />
            )}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4 text-[#9B171C]">
        <Search size={22} strokeWidth={3} />
        <Filter size={22} strokeWidth={3} />
      </div>
    </header>
  );
}
