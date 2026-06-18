import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, CheckCircle2, Loader2 } from 'lucide-react';

type Step = 'greeting' | 'waiting' | 'processing' | 'building' | 'result' | 'cta';

const buildLogs = [
  '→ Creating lead capture funnel',
  '→ Connecting CRM',
  '→ Setting automation rules',
  '→ Setting email follow-ups',
  '→ Deploying AI agents',
];

const resultItems = [
  'Leads captured automatically',
  'Calls booked instantly',
  'Follow-ups running 24/7',
];

const FloatingAIWidget = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>('greeting');
  const [input, setInput] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [buildIndex, setBuildIndex] = useState(-1);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setUserMsg(input);
    setInput('');
    setStep('processing');

    setTimeout(() => {
      setStep('building');
      setBuildIndex(0);
    }, 1500);
  };

  useEffect(() => {
    if (step !== 'building' || buildIndex < 0) return;
    if (buildIndex >= buildLogs.length) {
      setTimeout(() => setStep('result'), 600);
      return;
    }
    const t = setTimeout(() => setBuildIndex(prev => prev + 1), 700);
    return () => clearTimeout(t);
  }, [step, buildIndex]);

  useEffect(() => {
    if (step === 'result') {
      setTimeout(() => setStep('cta'), 2000);
    }
  }, [step]);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [step, buildIndex]);

  const reset = () => {
    setStep('greeting');
    setUserMsg('');
    setBuildIndex(-1);
    setInput('');
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => { setOpen(true); reset(); }}
            className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-golden rounded-full shadow-lg flex items-center justify-center hover:bg-golden-dark transition-all group"
          >
            <Bot size={24} className="text-white" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[60] w-[360px] max-h-[520px] bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-golden to-amber-600 flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Growth Guild AI</p>
                  <p className="text-emerald-400 text-[10px] font-mono">Online</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Chat body */}
            <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px]">
              {/* AI greeting */}
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Bot size={12} className="text-golden" />
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-zinc-200 max-w-[80%]">
                  What can I automate for your business? 👋
                </div>
              </div>

              {/* User message */}
              {userMsg && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end">
                  <div className="bg-golden text-white rounded-2xl rounded-br-sm px-3 py-2 text-sm max-w-[80%]">
                    {userMsg}
                  </div>
                </motion.div>
              )}

              {/* Processing */}
              {step === 'processing' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2 items-start">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Bot size={12} className="text-golden" />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-zinc-300 flex items-center gap-2">
                    <Loader2 size={12} className="animate-spin text-golden" />
                    Building your system…
                  </div>
                </motion.div>
              )}

              {/* Building */}
              {(step === 'building' || step === 'result' || step === 'cta') && buildIndex >= 0 && (
                <div className="space-y-1.5 ml-8">
                  {buildLogs.map((log, i) => (
                    i < Math.min(buildIndex, buildLogs.length) && (
                      <motion.div
                        key={log}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 font-mono text-xs text-emerald-400"
                      >
                        <CheckCircle2 size={10} />
                        {log}
                      </motion.div>
                    )
                  ))}
                  {step === 'building' && buildIndex < buildLogs.length && (
                    <div className="flex items-center gap-2 font-mono text-xs text-golden">
                      <Loader2 size={10} className="animate-spin" />
                      {buildLogs[buildIndex]}
                    </div>
                  )}
                </div>
              )}

              {/* Result */}
              {(step === 'result' || step === 'cta') && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="ml-8 space-y-2 mt-2">
                  <p className="text-zinc-300 text-xs font-mono">✅ System ready:</p>
                  {resultItems.map((r) => (
                    <div key={r} className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                      <CheckCircle2 size={10} className="text-golden" />
                      {r}
                    </div>
                  ))}
                </motion.div>
              )}

              {/* CTA */}
              {step === 'cta' && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2 items-start">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Bot size={12} className="text-golden" />
                  </div>
                  <div className="space-y-2">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-zinc-200">
                      Want this set up for your business?
                    </div>
                    <a
                      href="/booking"
                      className="inline-flex items-center gap-2 bg-golden text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-golden-dark transition-all"
                    >
                      Book a Call →
                    </a>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            {step === 'greeting' && (
              <div className="border-t border-zinc-800 px-3 py-3 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="e.g. I want more leads..."
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-golden/50"
                />
                <button onClick={handleSend} className="w-9 h-9 bg-golden rounded-full flex items-center justify-center hover:bg-golden-dark transition-all">
                  <Send size={14} className="text-white" />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingAIWidget;
