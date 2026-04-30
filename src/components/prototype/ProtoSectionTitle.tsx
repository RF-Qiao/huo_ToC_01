import type { ReactNode } from 'react';
import { ProtoIcon } from './ProtoIcon';

type ProtoSectionTitleProps = {
  title: string;
  right?: ReactNode;
};

export function ProtoSectionTitle({ title, right }: ProtoSectionTitleProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-[#FFD875] to-[#E34328]" />
        <h2 className="text-[17px] font-extrabold text-[#38100E]">{title}</h2>
      </div>
      {right && (
        <button className="flex items-center text-xs font-semibold text-[#9C1B1F]">
          {right}
          <ProtoIcon name="chevron" size={14} />
        </button>
      )}
    </div>
  );
}
