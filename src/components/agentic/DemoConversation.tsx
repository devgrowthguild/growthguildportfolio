import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, CheckCircle2, Loader2 } from 'lucide-react';

type Message = {
  role: 'ai' | 'user';
  content: string;
  type?: 'text' | 'building' | 'result';
};

const buildSteps = [
  'Connecting to CRM…',
  'Creating lead capture form…',
  'Setting up booking calendar…',
  'Configuring follow-up sequences…',
  'Enabling AI qualification…',
];

const results = [
  { label: 'Lead captured automatically', color: 'text-emerald-400' },
  { label: 'Calendar booked instantly', color: 'text-cyan-400' },
  { label: 'Follow-up sequence active', color: 'text-amber-400' },
];

const actionChips = [
  'Saved to CRM',
  'Booked appointment',
  'Sent confirmation email',
];

const steps = [
  '01 — Capture leads instantly',
  '02 — Qualify automatically',
  '03 — Book appointments',
  '04 — Follow up without lifting a finger',
  '05 — Sync with your existing tools',
];

const DemoConversation = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [buildIndex, setBuildIndex] = useState(-1);
  const [showResults, setShowResults] = useState(false);
  const [showChips, setShowChips] = useState(false);
  const [started, setStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setIsVisible(true);
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!isVisible) return;

    const timeline = [
      { delay: 500, action: () => setMessages([{ role: 'ai', content: 'What can I help you automate today?', type: 'text' }]) },
      { delay: 2000, action: () => setMessages(prev => [...prev, { role: 'user', content: 'I want to capture leads and book calls automatically', type: 'text' }]) },
      { delay: 3500, action: () => setMessages(prev => [...prev, { role: 'ai', content: 'Building your workflow…', type: 'building' }]) },
      { delay: 4500, action: () => setBuildIndex(0) },
      { delay: 5300, action: () => setBuildIndex(1) },
      { delay: 6100, action: () => setBuildIndex(2) },
      { delay: 6900, action: () => setBuildIndex(3) },
      { delay: 7700, action: () => setBuildIndex(4) },
      { delay: 9000, action: () => { setShowResults(true); setMessages(prev => [...prev, { role: 'ai', content: 'Done. Here\'s your system:', type: 'result' }]); } },
      { delay: 10500, action: () => setShowChips(true) },
    ];

    const timeouts = timeline.map(({ delay, action }) => setTimeout(action, delay));
    return () => timeouts.forEach(clearTimeout);
  }, [isVisible]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, buildIndex, showResults]);

  return (
    <section id="demo" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-golden mb-4 block font-semibold">Live Demo</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Watch AI build your system
            <span className="italic text-golden"> in real time.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Chat UI - Dark */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden"
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-golden to-amber-600 flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-950" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Growth Guild AI</p>
                <p className="text-emerald-400 text-xs font-mono">Online</p>
              </div>
            </div>

            {/* Chat body */}
            <div ref={chatRef} className="p-5 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto">
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}
                  >
                    {msg.role === 'ai' && (
                      <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Bot size={14} className="text-golden" />
                      </div>
                    )}
                    <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-golden text-white rounded-br-sm'
                        : 'bg-zinc-900 text-zinc-200 rounded-bl-sm border border-zinc-800'
                    }`}>
                      {msg.content}
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <User size={14} className="text-zinc-300" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Build steps */}
              {buildIndex >= 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-10 space-y-2 font-mono text-xs"
                >
                  {buildSteps.map((step, i) => (
                    i <= buildIndex && (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                      >
                        {i < buildIndex ? (
                          <CheckCircle2 size={12} className="text-emerald-400" />
                        ) : (
                          <Loader2 size={12} className="text-golden animate-spin" />
                        )}
                        <span className={i < buildIndex ? 'text-emerald-400' : 'text-golden'}>{step}</span>
                      </motion.div>
                    )
                  ))}
                </motion.div>
              )}

              {/* Results */}
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="ml-10 space-y-2 mt-4"
                >
                  {results.map((r) => (
                    <div key={r.label} className="flex items-center gap-2 text-sm font-mono">
                      <CheckCircle2 size={14} className={r.color} />
                      <span className="text-zinc-300">{r.label}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Action chips */}
              {showChips && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="ml-10 flex flex-wrap gap-2 mt-3"
                >
                  {actionChips.map((chip) => (
                    <span key={chip} className="bg-teal-900/40 text-teal-300 text-xs font-mono px-3 py-1.5 rounded-full border border-teal-800/50">
                      {chip}
                    </span>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right side - Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 pt-4"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              From lead to booked call — <span className="text-golden italic">zero human effort.</span>
            </h3>
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <span className="text-4xl font-bold text-golden/15 group-hover:text-golden/30 transition-colors leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-foreground font-medium text-lg pt-1">{step.split(' — ')[1]}</p>
              </motion.div>
            ))}

            <a
              href="/booking"
              className="inline-flex items-center gap-2 bg-golden text-white font-semibold px-6 py-3 rounded-sm hover:bg-golden-dark transition-all mt-6"
            >
              Build My System
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoConversation;
