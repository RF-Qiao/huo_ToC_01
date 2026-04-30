import { motion } from 'motion/react';
import type { Key } from 'react';
import { ProtoIcon } from './ProtoIcon';

export type QuickCardItem = {
  icon: string;
  title: string;
  desc: string;
  bg: string;
};

type QuickCardProps = {
  key?: Key;
  item: QuickCardItem;
  onClick?: () => void;
};

export function QuickCard({ item, onClick }: QuickCardProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative overflow-hidden text-left min-h-[112px] rounded-3xl p-4 bg-gradient-to-br ${item.bg} shadow-lg shadow-[#7b1115]/15 w-full`}
    >
      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full border border-[#FFD36B]/20" />
      <div className="absolute right-3 bottom-2 text-[58px] font-black text-white/5">火</div>
      <div className="w-10 h-10 rounded-2xl bg-[#FFD36B]/95 text-[#7B1015] flex items-center justify-center shadow-md mb-3">
        <ProtoIcon name={item.icon} size={21} />
      </div>
      <div className="text-white font-extrabold text-[16px]">{item.title}</div>
      <p className="mt-1 text-[11px] leading-4 text-[#FFE9B6]/90">{item.desc}</p>
    </motion.button>
  );
}
