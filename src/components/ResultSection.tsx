import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const fixes = [
  'Inconsistent lead flow that makes revenue unpredictable',
  'Slow follow-up that lets qualified leads go cold',
  'Manual processes that eat your team\'s time',
  'Zero visibility into what\'s actually driving revenue',
];

const ResultSection = () => {
  return (
    <section className="py-24 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">The Result</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            What this system actually fixes.
          </h2>
          <p className="text-zinc-400 text-lg font-medium mt-6">
            Stop guessing. Start growing with a system that works 24/7.
          </p>
        </motion.div>

        <div className="md:w-1/2 space-y-4">
          {fixes.map((fix, i) => (
            <motion.div
              key={fix}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 flex items-start gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CheckCircle size={20} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <span className="text-white font-medium">{fix}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
