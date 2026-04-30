import { gold, ProtoIcon } from './ProtoIcon';

type BottomNavProps = {
  activePage: string;
  onPageChange: (page: string) => void;
};

const tabs = [
  { icon: 'home', label: '首页', id: '首页' },
  { icon: 'flame', label: '体验', id: '体验' },
  { icon: 'compass', label: '社区', id: '社区' },
  { icon: 'crown', label: '英雄', id: '英雄' },
  { icon: 'users', label: '队伍', id: '队伍' },
  { icon: 'user', label: '我的', id: '我' },
];

export function BottomNav({ activePage, onPageChange }: BottomNavProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[86px] bg-[#FFF8EA]/95 backdrop-blur-xl border-t border-[#F0D8A1] px-4 pt-3 pb-5 flex justify-between shadow-[0_-8px_24px_rgba(80,20,20,.08)] z-50">
      {tabs.map((tab) => {
        const active = activePage === tab.id;
        return (
          <button
            key={tab.label}
            onClick={() => onPageChange(tab.id)}
            className="flex flex-col items-center gap-1 text-[10px] font-bold group"
          >
            <div
              className={
                active
                  ? 'w-10 h-7 rounded-full bg-[#99161B] text-[#FFD36B] flex items-center justify-center transition-all scale-110 shadow-lg shadow-[#99161B]/20'
                  : 'w-10 h-7 rounded-full text-[#9B8172] flex items-center justify-center group-active:scale-90 transition-all opacity-60'
              }
            >
              <ProtoIcon name={tab.icon} size={20} fill={active ? gold : 'none'} />
            </div>
            <span className={active ? 'text-[#99161B]' : 'text-[#9B8172]'}>{tab.label}</span>
          </button>
        );
      })}
    </footer>
  );
}
