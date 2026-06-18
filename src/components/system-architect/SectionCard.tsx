import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionCardProps {
  step: number;
  label: string;
  children: ReactNode;
}

const SectionCard = ({ step, label, children }: SectionCardProps) => (
  <motion.div
    className="bg-card rounded-2xl p-6 shadow-[var(--shadow-premium)] border border-border"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 'auto' }}
    transition={{ delay: step * 0.05 }}
  >
    <div className="flex items-center gap-2 mb-4">
      <span className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--golden))]">Step {step}</span>
      <span className="text-xs text-muted-foreground">— {label}</span>
    </div>
    {children}
  </motion.div>
);

export default SectionCard;
