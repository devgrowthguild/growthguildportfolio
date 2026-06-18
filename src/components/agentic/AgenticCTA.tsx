import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AgenticCTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-golden/10 rounded-full blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Ready to replace busywork with <span className="italic text-golden">AI?</span>
        </h2>
        <p className="text-muted-foreground text-sm mb-10 max-w-lg mx-auto">
          Book a free strategy call. We'll map your operations and show you exactly which workflows AI can take over — this week.
        </p>
        <a
          href="/booking"
          className="inline-flex items-center gap-3 bg-golden text-white font-bold px-10 py-4 rounded-sm hover:bg-golden-dark transition-all active:scale-95 text-lg"
        >
          Book Your Free Strategy Call
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
};

export default AgenticCTA;
