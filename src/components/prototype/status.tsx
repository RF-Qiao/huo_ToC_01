import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Flame, Mail } from 'lucide-react';

type EmptyStateProps = {
  title?: string;
  desc?: string;
  actionText?: string;
  onAction?: () => void;
};

export function EmptyState({
  title = '暂无内容',
  desc = '你的英雄旅程还没开始',
  actionText,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center space-y-6">
      <div className="w-32 h-32 bg-[#FBF9F8] rounded-full flex items-center justify-center text-[#8C6A58]/10 relative group">
        <div className="absolute inset-0 bg-[#9C1B1F]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
        <Mail size={64} strokeWidth={1} />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-black text-[#38100E]">{title}</h3>
        <p className="text-xs font-bold text-[#8C6A58]/40">{desc}</p>
      </div>
      {actionText && (
        <button
          onClick={onAction}
          className="px-8 h-12 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-xs shadow-xl active:scale-95 transition-all"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}

export function LoadingIndicator({ text = '正在加载...' }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative w-12 h-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full rounded-full border-4 border-[#F5DDA2]/20 border-t-[#9C1B1F]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Flame size={16} className="text-[#9C1B1F] animate-pulse" />
        </div>
      </div>
      <span className="text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">{text}</span>
    </div>
  );
}

export function Toast({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[3000] px-6 py-3 bg-[#38100E]/90 backdrop-blur-md rounded-full text-[#FFD36B] text-xs font-black shadow-2xl flex items-center gap-2"
    >
      <div className="w-1 h-1 rounded-full bg-[#FFD36B]" />
      {text}
    </motion.div>
  );
}

type BottomActionTrayProps = {
  leftLabel?: string;
  leftValue?: string;
  primaryText: string;
  onPrimary: () => void;
};

export function BottomActionTray({ leftLabel, leftValue, primaryText, onPrimary }: BottomActionTrayProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[600] bg-white/80 backdrop-blur-md border-t border-black/5 p-6 pb-12 flex items-center justify-between">
      {leftValue ? (
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-[#8C6A58]/40 uppercase tracking-widest">{leftLabel}</span>
          <span className="text-xl font-black text-[#9C1B1F]">{leftValue}</span>
        </div>
      ) : (
        <div className="flex-1" />
      )}
      <button
        onClick={onPrimary}
        className={`h-14 rounded-2xl bg-[#9C1B1F] text-[#FFD36B] font-black text-sm px-10 active:scale-95 transition-all shadow-xl shadow-[#9B171D]/20 ${!leftValue ? 'w-full' : ''}`}
      >
        {primaryText}
      </button>
    </div>
  );
}

export type StatusReward = {
  label: string;
  value: string;
  icon?: ReactNode;
};
