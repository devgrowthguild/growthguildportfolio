import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-golden mb-4 block font-semibold">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Every business is <span className="italic text-golden">different.</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            We don't do cookie-cutter packages. Your AI system is custom-built around your workflows, tools, and goals — so the investment reflects exactly what you need.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-10 bg-zinc-950 border-2 border-golden text-white shadow-[0_0_60px_hsl(43_56%_52%_/_0.15)] text-center"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-golden text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1.5">
            <Sparkles size={10} /> Custom Built For You
          </div>

          <div className="mb-2">
            <span className="text-5xl font-bold text-golden">Custom</span>
          </div>
          <p className="text-zinc-400 text-sm mb-8 max-w-md mx-auto">
            Book a free expert consultation. We'll audit your operations, map your workflows, and build a tailored AI system — with transparent pricing, no surprises.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
            {[
              'Unlimited AI workflows',
              'Voice & SMS agents',
              'Custom integrations',
              'Dedicated strategist',
              'Full CRM automation',
              'White-label dashboards',
              'Priority support & SLA',
              'Ongoing optimization',
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-golden mt-1.5 flex-shrink-0" />
                <span className="text-zinc-300 text-xs">{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="/booking"
            className="inline-flex items-center justify-center gap-2.5 bg-golden text-white font-bold px-10 py-4 rounded-sm hover:bg-golden-dark transition-all active:scale-95 text-lg"
          >
            Book an Expert Meeting
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
