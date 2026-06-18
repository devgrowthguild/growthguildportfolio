import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const stats = [
  { label: '80% Admin Automated', color: 'text-emerald-400' },
  { label: '24/7 AI Workforce', color: 'text-amber-400' },
  { label: '3× Faster Operations', color: 'text-cyan-400' },
];

const AgenticHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(43 56% 52% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(43 56% 52% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[hsl(43_56%_52%_/_0.06)] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="h-px w-8 bg-golden" />
            <span className="text-xs tracking-[0.2em] uppercase text-golden font-semibold">
              Agentic AI for Service Businesses
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6"
          >
            Your business{' '}
            <span className="italic text-golden">runs itself</span>
            <br />
            while you focus on
            <br />
            what matters.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mb-10 text-base leading-relaxed"
          >
            We deploy AI agents that capture leads, book appointments, follow up with prospects, 
            and handle admin — so you never miss revenue again.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="/booking"
              className="inline-flex items-center gap-2 bg-golden text-white font-semibold px-7 py-3.5 rounded-sm hover:bg-golden-dark transition-all active:scale-95"
            >
              <Sparkles size={16} />
              Deploy Your AI Team
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 border-2 border-foreground/20 text-foreground font-semibold px-7 py-3.5 rounded-sm hover:border-golden hover:text-golden transition-all"
            >
              See It In Action
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Stats pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-900 text-white text-xs font-mono px-4 py-2.5 rounded-full border border-zinc-800 flex items-center gap-2"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${stat.color} animate-pulse`} />
              {stat.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AgenticHero;
