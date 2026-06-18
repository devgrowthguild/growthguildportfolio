type BadgeVariant = 'gray' | 'golden' | 'green' | 'dark' | 'purple' | 'red';

interface StatusBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const variantColors: Record<BadgeVariant, string> = {
  gray: 'bg-zinc-100 text-zinc-600 border-zinc-200',
  golden: 'bg-zinc-800 text-golden border-zinc-700',
  green: 'bg-zinc-800 text-green-400 border-zinc-700',
  dark: 'bg-zinc-900 text-white border-zinc-800',
  purple: 'bg-zinc-800 text-purple-400 border-zinc-700',
  red: 'bg-red-50 text-red-600 border-red-200',
};

const StatusBadge = ({ children, variant = 'gray' }: StatusBadgeProps) => {
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase border ${variantColors[variant]}`}>
      {children}
    </span>
  );
};

export default StatusBadge;
