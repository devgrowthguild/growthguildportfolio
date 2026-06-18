import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Bell, Zap, Calendar } from 'lucide-react';
import StatusBadge from './StatusBadge';
const leads = [
  { name: 'Rayyan', value: '$2,400', stage: 'new' },
  { name: 'Abdullah Hassan', value: '$5,200', stage: 'new' },
  { name: 'Mike Ross', value: '$3,800', stage: 'qualified' },
  { name: 'Michael P.', value: '$4,100', stage: 'booked' },
];

const appointments = [
  { name: 'Shaheer Butt', time: 'Today, 2:00 PM' },
  { name: 'Saad Ahsan', time: 'Tomorrow, 10:30 AM' },
];

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-200">
            <MessageSquare size={14} />
            60,000+ enquiries generated
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-zinc-900 leading-tight tracking-tight mb-6">
            Your client acquisition department for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              predictable growth
            </span>
          </h1>

          <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-8 max-w-lg">
            A fully managed system that attracts, qualifies, and converts the right clients consistently — so growth stops feeling random.
          </p>

          <a
            href="/booking"
            className="inline-flex items-center gap-2 bg-golden text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-golden-dark transition-all active:scale-95 shadow-md"
          >
            Plan Your System
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Right Column - Pipeline Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="animate-float bg-zinc-900 rounded-2xl shadow-premium p-6 border border-zinc-800 relative z-10">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center">
                <Zap size={16} className="text-purple-400" />
              </div>
              <h3 className="font-semibold text-white">Pipeline Overview</h3>
            </div>

            {/* Pipeline Columns */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: 'New', count: 2, items: leads.filter(l => l.stage === 'new') },
                { label: 'Qualified', count: 1, items: leads.filter(l => l.stage === 'qualified') },
                { label: 'Booked', count: 1, items: leads.filter(l => l.stage === 'booked') },
              ].map((col) => (
                <div key={col.label}>
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    {col.label} ({col.count})
                  </div>
                  <div className="space-y-2">
                    {col.items.map((lead) => (
                      <div key={lead.name} className="bg-zinc-800 rounded-xl p-2.5 border border-zinc-700 text-xs">
                        <div className="font-medium text-zinc-200">{lead.name}</div>
                        <div className="text-golden font-semibold mt-0.5">{lead.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Appointments */}
            <div className="border-t border-zinc-800 pt-4 mb-4">
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Upcoming Appointments</div>
              <div className="space-y-2">
                {appointments.map((a) => (
                  <div key={a.name} className="flex items-center justify-between text-xs bg-zinc-800 rounded-lg p-2.5 border border-zinc-700">
                    <span className="font-medium text-zinc-200">{a.name}</span>
                    <span className="text-zinc-500">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Badges */}
            <div className="flex gap-2">
              <StatusBadge variant="purple">Lead</StatusBadge>
              <StatusBadge variant="golden">Qualified</StatusBadge>
              <StatusBadge variant="green">Booked</StatusBadge>
            </div>
          </div>

          {/* Floating Notifications */}
          <motion.div
            className="absolute -top-2 -right-2 md:right-[-2rem] z-20 animate-float-delayed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-zinc-900 rounded-xl shadow-premium px-4 py-2.5 border border-zinc-800 flex items-center gap-2 text-xs">
              <Bell size={12} className="text-green-500" />
              <span className="font-medium text-zinc-200">New Qualified Lead</span>
              <span className="text-zinc-500">Just now</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/2 -right-4 md:right-[-3rem] z-20 animate-float-slow"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="bg-zinc-900 rounded-xl shadow-premium px-4 py-2.5 border border-zinc-800 flex items-center gap-2 text-xs">
              <Zap size={12} className="text-golden" />
              <span className="font-medium text-zinc-200">Automation Running</span>
              <span className="text-zinc-500">Active</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 left-0 md:left-[-2rem] z-20 animate-float"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
          >
            <div className="bg-zinc-900 rounded-xl shadow-premium px-4 py-2.5 border border-zinc-800 flex items-center gap-2 text-xs">
              <Calendar size={12} className="text-purple-400" />
              <span className="font-medium text-zinc-200">Call Added to Calendar</span>
              <span className="text-zinc-500">2 min ago</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
