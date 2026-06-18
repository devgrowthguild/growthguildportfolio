import { motion } from 'framer-motion';
import { Map, Cpu, Link, Rocket } from 'lucide-react';

const steps = [
  { icon: Map, num: '01', title: 'We Map Your Operations', desc: 'We audit your current workflow — lead flow, follow-ups, admin, and bottlenecks — to find where AI replaces manual effort.' },
  { icon: Cpu, num: '02', title: 'We Build AI Workflows', desc: 'Custom automation sequences that capture, qualify, nurture, and convert leads without you touching a single button.' },
  { icon: Link, num: '03', title: 'We Connect Your Tools', desc: 'CRM, calendar, email, SMS, payments — everything talks to everything. One system, zero data silos.' },
  { icon: Rocket, num: '04', title: 'You Scale Effortlessly', desc: 'Your AI workforce runs 24/7. You focus on closing deals and growing — the system handles the rest.' },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-golden mb-4 block font-semibold">The Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Four steps to a <span className="italic text-golden">self-running</span> business.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-full hover:border-golden/30 transition-all duration-300 hover:-translate-y-1">
                {/* Large faded number */}
                <span className="absolute top-4 right-4 text-6xl font-bold text-zinc-800/50 leading-none group-hover:text-golden/15 transition-colors">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-golden/10 flex items-center justify-center mb-5">
                    <step.icon size={22} className="text-golden" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
