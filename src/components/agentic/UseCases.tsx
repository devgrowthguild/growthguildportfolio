import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Diamond } from 'lucide-react';

const tabs = [
  {
    label: 'Lead Generation',
    terminal: [
      '> New lead detected via landing page',
      '> Qualifying intent...',
      '> Score: High intent (92%)',
      '> Auto-assigning to pipeline',
      '> Sending personalized follow-up...',
      '> ✔ Lead captured & nurtured',
    ],
    title: 'Never Miss Another Lead',
    desc: 'AI agents monitor every channel — web, social, ads — and capture leads the moment they show intent. No form goes unfilled, no inquiry goes unanswered.',
    checks: [
      'Instant lead capture from all channels',
      'AI-powered intent scoring',
      'Automatic CRM entry & tagging',
      'Real-time notification to your team',
    ],
  },
  {
    label: 'Appointment Booking',
    terminal: [
      '> Lead qualified: Sarah M.',
      '> Checking calendar availability...',
      '> Slot found: Tue 2:00 PM',
      '> Sending booking link via SMS...',
      '> Appointment confirmed ✔',
      '> Reminder scheduled: 1hr before',
    ],
    title: 'Calls Booked While You Sleep',
    desc: 'From qualification to confirmation — AI handles the entire booking flow. No back-and-forth emails, no phone tag, no missed opportunities.',
    checks: [
      'Smart calendar sync & availability',
      'SMS & email booking confirmations',
      'Automated reminders & no-show follow-ups',
      'Reschedule handling without staff',
    ],
  },
  {
    label: 'Customer Support',
    terminal: [
      '> Incoming query: "Where is my order?"',
      '> Matching to order #4821...',
      '> Status: Shipped — arriving Thursday',
      '> Sending tracking link...',
      '> Customer satisfaction: Resolved ✔',
      '> Ticket closed automatically',
    ],
    title: 'Support That Never Sleeps',
    desc: 'AI handles 80% of customer questions instantly — order status, FAQs, troubleshooting. Your team only handles the complex 20%.',
    checks: [
      '24/7 instant response across channels',
      'Knowledge base auto-learning',
      'Seamless human handoff for complex issues',
      'Customer satisfaction tracking',
    ],
  },
  {
    label: 'Internal Automation',
    terminal: [
      '> Daily report generating...',
      '> Pipeline: 24 active deals ($142k)',
      '> Tasks overdue: 3 (assigned alerts)',
      '> Invoice #892 → auto-sent',
      '> Weekly KPI email → dispatched',
      '> All systems operational ✔',
    ],
    title: 'Your Ops Run on Autopilot',
    desc: 'Reports, invoices, task assignments, data entry — the boring work that eats 4+ hours/day is now fully automated.',
    checks: [
      'Automated reporting & dashboards',
      'Invoice generation & follow-ups',
      'Task assignment & deadline tracking',
      'Cross-platform data sync',
    ],
  },
];

const UseCases = () => {
  const [active, setActive] = useState(0);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTerminalLines([]);
    const lines = tabs[active].terminal;
    const timeouts: NodeJS.Timeout[] = [];
    lines.forEach((line, i) => {
      timeouts.push(setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
      }, (i + 1) * 500));
    });
    return () => timeouts.forEach(clearTimeout);
  }, [active]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-golden mb-4 block font-semibold">Use Cases</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            AI agents for <span className="italic text-golden">every</span> bottleneck.
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === i
                  ? 'bg-golden text-white'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Terminal */}
            <div className="bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-zinc-800">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-zinc-500 text-xs font-mono ml-3">ai-agent.log</span>
              </div>
              <div ref={terminalRef} className="p-5 min-h-[280px] max-h-[320px] overflow-y-auto">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={`${active}-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`font-mono text-sm mb-2 ${
                      line.includes('✔') ? 'text-emerald-400' : 'text-zinc-400'
                    }`}
                  >
                    {line}
                  </motion.div>
                ))}
                <span className="inline-block w-2 h-4 bg-golden animate-pulse ml-1" />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">{tabs[active].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{tabs[active].desc}</p>
              <div className="space-y-3">
                {tabs[active].checks.map((check) => (
                  <div key={check} className="flex items-start gap-3">
                    <Diamond size={10} className="text-golden mt-1.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCases;
