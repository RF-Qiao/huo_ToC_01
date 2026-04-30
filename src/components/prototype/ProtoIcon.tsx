export const gold = '#F7C85D';

const iconPaths: Record<string, string> = {
  mapPin: 'M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Zm0-8.5A2.5 2.5 0 1 0 12 7a2.5 2.5 0 0 0 0 5.5Z',
  bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Zm-8.3 12a2.5 2.5 0 0 0 4.6 0',
  ticket: 'M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a3 3 0 0 0 0 6v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a3 3 0 0 0 0-6Zm8-3v12',
  play: 'M8 5v14l11-7L8 5Z',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.8M16 3.2a4 4 0 0 1 0 7.6',
  watch: 'M7 7h10v10H7V7Zm2-5h6l1 5H8l1-5Zm-1 15h8l-1 5H9l-1-5Zm4-7v3l2 1',
  chevron: 'm9 18 6-6-6-6',
  home: 'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3V10.5Z',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z',
  flame: 'M12 22c4 0 7-3 7-7 0-4-3-7-5-10-.5 3-2.5 4-4 5-1.5 1-3 2.6-3 5a5 5 0 0 0 5 7Zm0-3a2.8 2.8 0 0 1-3-3c0-1.8 1.2-2.8 2.3-3.5.7-.5 1.6-1.1 2-2.3C14.7 12 16 13.8 16 16a3.8 3.8 0 0 1-4 3Z',
  user: 'M20 21a8 8 0 0 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  crown: 'M3 7l5 5 4-8 4 8 5-5-2 11H5L3 7Z',
  sparkles: 'M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Zm6 11 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z',
  footprints: 'M6 22c-1.7 0-3-1.3-3-3 0-2 1.6-3.4 3.2-3.4 1.8 0 2.8 1.4 2.8 3.1C9 20.6 7.7 22 6 22Zm12-9c-1.7 0-3-1.3-3-3 0-2 1.6-3.4 3.2-3.4 1.8 0 2.8 1.4 2.8 3.1 0 1.9-1.3 3.3-3 3.3ZM7 2c1.3 0 2 1.1 2 2.4C9 5.8 8.1 7 6.8 7 5.5 7 5 5.9 5 4.7 5 3.2 5.8 2 7 2Zm10 12c1.3 0 2 1.1 2 2.4 0 1.4-.9 2.6-2.2 2.6-1.3 0-1.8-1.1-1.8-2.3 0-1.5.8-2.7 2-2.7Z',
  check: 'M20 6 9 17l-5-5',
  swords: 'M14.5 17.5 19 22l3-3-4.5-4.5M14 4l6 6-8 8-2-2 8-8-4-4ZM4 14l6-6 2 2-6 6H4v-2Z',
  compass: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-1.5-4.5 6-4-6-4v8Z',
};

type ProtoIconProps = {
  name: string;
  size?: number;
  className?: string;
  fill?: string;
  strokeWidth?: number;
};

export function ProtoIcon({ name, size = 20, className = '', fill = 'none', strokeWidth = 2 }: ProtoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}
