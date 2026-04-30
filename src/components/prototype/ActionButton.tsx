import type { ButtonHTMLAttributes } from 'react';

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  primary?: boolean;
};

export function ActionButton({ children, primary = false, className = '', ...buttonProps }: ActionButtonProps) {
  return (
    <button
      {...buttonProps}
      className={
        primary
          ? `h-11 px-6 rounded-full bg-gradient-to-r from-[#FFD36B] to-[#F39C28] text-[#6B0B0E] font-bold shadow-lg shadow-black/20 active:scale-95 transition-all ${className}`
          : `h-11 px-6 rounded-full border border-[#FFD36B]/70 text-[#FFE6A3] font-semibold bg-white/10 backdrop-blur active:scale-95 transition-all ${className}`
      }
    >
      {children}
    </button>
  );
}
