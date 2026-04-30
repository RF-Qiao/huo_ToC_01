import type { Key } from 'react';
import { ProtoIcon } from './ProtoIcon';

export type HeroCardHero = {
  name: string;
  tag: string;
  time: string;
  diff: string;
  tone: string;
};

type HeroCardProps = {
  key?: Key;
  hero: HeroCardHero;
  onClick?: () => void;
};

export function HeroCard({ hero, onClick }: HeroCardProps) {
  return (
    <div
      onClick={onClick}
      className={`shrink-0 w-[178px] rounded-[28px] overflow-hidden bg-gradient-to-br ${hero.tone} text-white shadow-lg shadow-[#7b1115]/15 cursor-pointer active:scale-95 transition-all`}
    >
      <div className="h-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,219,127,.55),transparent_35%),linear-gradient(135deg,rgba(0,0,0,.1),rgba(0,0,0,.5))]" />
        <div className="absolute right-4 top-4 w-16 h-16 rounded-full border border-[#FFD36B]/30" />
        <ProtoIcon name="crown" className="absolute left-4 top-4 text-[#FFD875]" size={22} />
        <div className="absolute left-4 bottom-3 text-3xl font-black tracking-widest text-white/15">英雄</div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-black">{hero.name}</h3>
        <p className="text-xs text-[#FFE8B5] mt-1">{hero.tag}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          <span className="px-2 py-1 rounded-full bg-white/12 text-[10px]">{hero.time}</span>
          <span className="px-2 py-1 rounded-full bg-[#FFD36B]/20 text-[10px] text-[#FFE9B1]">{hero.diff}</span>
        </div>
        <button className="mt-4 w-full h-9 rounded-full bg-[#FFD36B] text-[#751116] text-xs font-extrabold">
          查看详情
        </button>
      </div>
    </div>
  );
}
