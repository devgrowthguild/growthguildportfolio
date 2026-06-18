import { motion } from 'framer-motion';
import { Clock, PhoneOff, UserX, Inbox, Brain, TrendingDown } from 'lucide-react';

const problems = [
  { icon: PhoneOff, emoji: '📞', title: 'Missed Calls & Leads', desc: 'Every unanswered call is revenue walking out the door. Your competitors respond in seconds.' },
  { icon: Clock, emoji: '⏰', title: 'Slow Response Times', desc: '78% of buyers choose the first business that responds. Are you first — or forgotten?' },
  { icon: Inbox, emoji: '📥', title: 'Manual Admin Overload', desc: 'You didn\'t start a business to copy-paste data between spreadsheets all day.' },
  { icon: UserX, emoji: '👥', title: 'Staff Bottlenecks', desc: 'Your team is the ceiling. When they\'re busy, everything stops — leads, follow-ups, bookings.' },
  { icon: Brain, emoji: '🧠', title: 'No Follow-Up System', desc: 'Leads go cold because nobody followed up. Not once. Not ever.' },
  { icon: TrendingDown, emoji: '📉', title: 'Revenue Plateaus', desc: 'You\'re working harder but not growing. The problem isn\'t effort — it\'s infrastructure.' },
];

const ProblemSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-golden mb-4 block font-semibold">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your business is leaking revenue.
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Every day without automation, you're losing leads, burning time, and capping your growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-golden/30 hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="text-3xl mb-4">{problem.emoji}</div>
              <h3 className="font-bold text-foreground text-lg mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
