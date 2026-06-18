import { motion } from 'framer-motion';

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  columns?: number;
}

const MultiSelect = ({ options, selected, onChange, columns = 2 }: MultiSelectProps) => {
  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className={`grid gap-2 ${columns === 3 ? 'grid-cols-2 sm:grid-cols-3' : columns === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
      {options.map((option) => {
        const isActive = selected.includes(option);
        return (
          <motion.button
            key={option}
            type="button"
            onClick={() => toggle(option)}
            whileTap={{ scale: 0.97 }}
            className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all text-left ${
              isActive
                ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
            }`}
          >
            {option}
          </motion.button>
        );
      })}
    </div>
  );
};

export default MultiSelect;
