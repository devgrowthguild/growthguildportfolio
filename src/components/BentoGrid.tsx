import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import StatusBadge from './StatusBadge';

type ViewType = 'ads' | 'websites' | 'automations' | 'aiBots' | 'dashboards';

// Bento card wrapper
const RunCard = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
  <div className="bg-zinc-900 rounded-2xl p-6 flex flex-col shadow-premium border border-zinc-800 transition duration-300 hover:border-[#D4AF37]/40">
    <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
    <p className="text-zinc-400 text-sm mb-6">{subtitle}</p>
    <div className="flex-1 bg-zinc-800/50 rounded-2xl p-4 overflow-hidden relative border border-zinc-700/50">
      {children}
    </div>
  </div>
);

const MetricBox = ({ label, value, trend }: { label: string; value: string; trend: string }) => (
  <div className="p-4 border border-zinc-700/50 rounded-2xl bg-zinc-800/60 shadow-sm">
    <div className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wider">{label}</div>
    <div className="text-lg font-bold text-white">{value}</div>
    <div className="text-[10px] font-bold text-[#D4AF37]">{trend}</div>
  </div>
);

// ADS CARDS
const AdsCards = () => (
  <>
    <RunCard title="Competitor Research" subtitle="Market analysis and angle discovery.">
      <div>
        <div className="grid grid-cols-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 pb-2 border-b border-zinc-700">
          <span>Competitor</span><span>Positioning</span><span>Angle</span>
        </div>
        {[['Local Provider A', 'Budget', 'Price'], ['Agency B', 'Premium', 'Quality'], ['Freelancer C', 'Flexible', 'Speed']].map(([a, b, c]) => (
          <div key={a} className="grid grid-cols-3 text-xs font-medium text-zinc-300 py-1.5">
            <span>{a}</span><span>{b}</span><span>{c}</span>
          </div>
        ))}
      </div>
    </RunCard>
    <RunCard title="Creative Testing Lab" subtitle="Structured split testing framework.">
      <div className="space-y-2">
        {[
          { text: 'Consistency vs Chaos', badge: 'Scale', color: 'golden' },
          { text: 'The 3am Inbox Check', badge: 'Iterate', color: 'gray' },
          { text: 'Why agencies fail', badge: 'Killed', color: 'red' },
        ].map((r) => (
          <div key={r.text} className="flex justify-between items-center bg-zinc-800 p-3 rounded-xl border border-zinc-700 shadow-sm text-xs">
            <span className="font-medium text-zinc-300">{r.text}</span>
            <StatusBadge variant={r.color as any}>{r.badge}</StatusBadge>
          </div>
        ))}
      </div>
    </RunCard>
    <RunCard title="Winner Breakdown" subtitle="Anatomy of winning ad creative.">
      <div className="space-y-3">
        {[
          ['Hook:', 'Emotional recognition'],
          ['Offer:', 'Demo-first structure'],
          ['Proof:', 'Localised statistics'],
          ['Filter:', '£20k+/mo minimum'],
        ].map(([label, text]) => (
          <div key={label} className="flex gap-3 items-start text-sm text-zinc-400">
            <Check size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
            <span>{label} <strong className="text-white">{text}</strong></span>
          </div>
        ))}
      </div>
    </RunCard>
    <RunCard title="Live Dashboard" subtitle="Real-time campaign performance.">
      <div className="grid grid-cols-2 gap-3">
        <MetricBox label="Booked Calls" value="147" trend="+23%" />
        <MetricBox label="Qualified Leads" value="312" trend="+18%" />
        <MetricBox label="Show-Up Rate" value="84%" trend="Stable" />
        <MetricBox label="Revenue" value="£287k" trend="+31%" />
      </div>
    </RunCard>
  </>
);

// WEBSITES CARDS
const WebsitesCards = () => (
  <>
    <RunCard title="Conversion Path Mapping" subtitle="Visitor journey optimisation.">
      <div className="flex items-center justify-center gap-2 py-6">
        <div className="bg-zinc-800 p-3 rounded-xl border border-zinc-700 text-xs text-center text-zinc-400 font-medium shadow-sm">Traffic</div>
        <ArrowRight size={14} className="text-zinc-600" />
        <div className="bg-zinc-800 p-3 rounded-xl border border-zinc-700 text-xs text-center text-zinc-400 font-medium shadow-sm">Landing</div>
        <ArrowRight size={14} className="text-zinc-600" />
        <div className="bg-[#D4AF37] p-3 rounded-xl text-xs text-center text-zinc-900 font-semibold shadow-md">Booking</div>
      </div>
    </RunCard>
    <RunCard title="Trust Signal Injector" subtitle="Credibility at decision points.">
      <div className="space-y-3">
        {['250+ 5-Star Reviews imported', 'Local Case Studies synced'].map((t) => (
          <div key={t} className="flex items-center gap-3 bg-zinc-800 p-3 rounded-xl border border-zinc-700 shadow-sm text-sm">
            <ShieldCheck size={20} className="text-[#D4AF37]" />
            <span className="font-medium text-zinc-300">{t}</span>
          </div>
        ))}
      </div>
    </RunCard>
    <RunCard title="Frictionless Booking" subtitle="Self-service scheduling system.">
      <div className="bg-zinc-800 border border-zinc-700 shadow-md rounded-2xl p-4 w-3/4 mx-auto">
        <div className="h-2 w-1/3 bg-zinc-600 rounded mb-4" />
        <div className="grid grid-cols-4 gap-2 mb-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-6 bg-zinc-700 rounded-lg" />
          ))}
        </div>
        <button className="bg-[#D4AF37] text-white text-xs font-bold py-2.5 rounded-lg shadow-sm w-full">Confirm Time</button>
      </div>
    </RunCard>
    <RunCard title="Performance Analytics" subtitle="Core web vitals and conversion.">
      <div className="grid grid-cols-2 gap-3">
        <MetricBox label="Bounce Rate" value="12%" trend="-40%" />
        <MetricBox label="Time on Site" value="02:14" trend="+1m" />
        <MetricBox label="Conversion" value="6.8%" trend="+2.1%" />
        <MetricBox label="Core Web" value="Pass" trend="99/100" />
      </div>
    </RunCard>
  </>
);

// AUTOMATIONS CARDS
const AutomationsCards = () => (
  <>
    <RunCard title="Lead Routing Engine" subtitle="Intelligent lead distribution.">
      <div className="space-y-3">
        {['Facebook Lead Ad', 'Website Form'].map((t) => (
          <div key={t} className="flex items-center justify-between text-sm p-3 bg-zinc-800 shadow-sm rounded-xl border border-zinc-700">
            <span className="font-medium text-zinc-300">{t}</span>
            <div className="flex items-center gap-2">
              <ArrowRight size={14} className="text-zinc-600" />
              <StatusBadge variant="dark">GG CRM</StatusBadge>
            </div>
          </div>
        ))}
      </div>
    </RunCard>
    <RunCard title="Multi-Channel Sequences" subtitle="Automated nurture workflows.">
      <div className="flex flex-col items-center">
        <div className="bg-[#D4AF37]/10 text-[#B8942A] text-xs font-bold p-3 rounded-lg text-center w-full">Trigger: New Lead</div>
        <div className="w-[2px] h-4 bg-zinc-700" />
        <div className="bg-zinc-800 border border-zinc-700 shadow-sm text-zinc-300 font-medium text-xs p-3 rounded-lg text-center w-full">Send Email + SMS</div>
        <div className="w-[2px] h-4 bg-zinc-700" />
        <div className="bg-zinc-800 border border-zinc-700 shadow-sm text-zinc-300 font-medium text-xs p-3 rounded-lg text-center w-full">Wait 2 Days</div>
      </div>
    </RunCard>
    <RunCard title="Automated Qualification" subtitle="Lead scoring and routing.">
      <div className="space-y-3">
        {[
          { text: 'Score > 80', badge: 'Hot Lead', variant: 'golden' },
          { text: 'Score 50-79', badge: 'Warm', variant: 'gray' },
          { text: 'Score < 50', badge: 'Nurture', variant: 'gray' },
        ].map((r) => (
          <div key={r.text} className="flex justify-between items-center bg-zinc-800 p-3 rounded-xl border border-zinc-700 shadow-sm text-sm">
            <span className="font-medium text-zinc-300">{r.text}</span>
            <StatusBadge variant={r.variant as any}>{r.badge}</StatusBadge>
          </div>
        ))}
      </div>
    </RunCard>
    <RunCard title="Pipeline Health Monitor" subtitle="Real-time system metrics.">
      <div className="grid grid-cols-2 gap-3">
        <MetricBox label="Active Leads" value="1,204" trend="+114" />
        <MetricBox label="Reply Rate" value="42%" trend="+5%" />
        <MetricBox label="Meetings" value="89" trend="This wk" />
        <MetricBox label="Saved Hours" value="47h" trend="Automated" />
      </div>
    </RunCard>
  </>
);

// AI BOTS CARDS
const AiBotsCards = () => (
  <>
    <RunCard title="Conversation Architecture" subtitle="Bot types and qualification logic.">
      <div>
        <div className="grid grid-cols-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 pb-2 border-b border-zinc-700">
          <span>Bot Type</span><span>Primary Function</span><span>Qualification Logic</span>
        </div>
        {[
          ['Inbound Voice Bot', 'Appointment Booking', 'Budget + Timeline'],
          ['Outbound AI Caller', 'Lead Re-engagement', 'Intent Score'],
          ['Website Chatbot', 'FAQ + Pre-Qualification', 'Service Match Filter'],
        ].map(([a, b, c]) => (
          <div key={a} className="grid grid-cols-3 text-xs font-medium text-zinc-300 py-1.5">
            <span>{a}</span><span>{b}</span><span>{c}</span>
          </div>
        ))}
      </div>
    </RunCard>
    <RunCard title="AI Testing Lab" subtitle="Script and tone optimisation.">
      <div className="space-y-2">
        {[
          { text: 'Human-like Pauses vs Robotic Tone', badge: 'Optimised', color: 'golden' },
          { text: 'Multi-Step Qualification Flow', badge: 'Scaling', color: 'gray' },
          { text: 'Script Overload', badge: 'Removed', color: 'red' },
        ].map((r) => (
          <div key={r.text} className="flex justify-between items-center bg-zinc-800 p-3 rounded-xl border border-zinc-700 shadow-sm text-xs">
            <span className="font-medium text-zinc-300">{r.text}</span>
            <StatusBadge variant={r.color as any}>{r.badge}</StatusBadge>
          </div>
        ))}
      </div>
    </RunCard>
    <RunCard title="Winning Bot Anatomy" subtitle="Key components of high-converting bots.">
      <div className="space-y-3">
        {[
          ['Greeting:', 'Human-sounding open loop introduction'],
          ['Qualification:', 'Dynamic branching based on answers'],
          ['Objection Handling:', 'Pre-trained rebuttal database'],
          ['Booking Trigger:', 'Calendar sync + confirmation automation'],
        ].map(([label, text]) => (
          <div key={label} className="flex gap-3 items-start text-sm text-zinc-400">
            <Check size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
            <span>{label} <strong className="text-white">{text}</strong></span>
          </div>
        ))}
      </div>
    </RunCard>
    <RunCard title="Live AI Dashboard" subtitle="Real-time bot performance.">
      <div className="grid grid-cols-2 gap-3">
        <MetricBox label="Conversations Handled" value="2,184" trend="+41%" />
        <MetricBox label="Appointments Booked" value="326" trend="+27%" />
        <MetricBox label="Qualification Rate" value="68%" trend="Stable" />
        <MetricBox label="Revenue Influenced" value="£412k" trend="+36%" />
      </div>
    </RunCard>
  </>
);

const DashboardsCards = () => (
  <>
    <RunCard title="Unified Data Layer" subtitle="Every metric in one place.">
      <div className="space-y-3">
        {[
          ['CRM Data:', 'Pipeline stages, deal values, close rates'],
          ['Ad Platforms:', 'Spend, CPL, ROAS across Meta & Google'],
          ['Billing:', 'MRR, churn, LTV, subscription trends'],
          ['Web Analytics:', 'Traffic sources, conversion funnels, engagement'],
        ].map(([label, text]) => (
          <div key={label} className="flex gap-3 items-start text-sm text-zinc-400">
            <Check size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
            <span>{label} <strong className="text-white">{text}</strong></span>
          </div>
        ))}
      </div>
    </RunCard>
    <RunCard title="Executive KPI Panel" subtitle="Revenue metrics that matter.">
      <div className="grid grid-cols-2 gap-3">
        <MetricBox label="Monthly Revenue" value="$18.2K" trend="+22%" />
        <MetricBox label="Pipeline Value" value="$94K" trend="+31%" />
        <MetricBox label="Close Rate" value="34%" trend="Stable" />
        <MetricBox label="Avg Deal Size" value="$2,400" trend="+8%" />
      </div>
    </RunCard>
    <RunCard title="Alert & Threshold System" subtitle="Catch problems before they cost revenue.">
      <div className="space-y-3">
        {[
          { text: 'Revenue Below Target', badge: 'Alert', color: 'red' },
          { text: 'Pipeline Velocity', badge: 'Healthy', color: 'green' },
          { text: 'Churn Rate', badge: 'Monitored', color: 'golden' },
          { text: 'Ad Spend Efficiency', badge: 'Optimised', color: 'green' },
        ].map((r) => (
          <div key={r.text} className="flex justify-between items-center bg-zinc-800 p-3 rounded-xl border border-zinc-700 shadow-sm text-xs">
            <span className="font-medium text-zinc-300">{r.text}</span>
            <StatusBadge variant={r.color as any}>{r.badge}</StatusBadge>
          </div>
        ))}
      </div>
    </RunCard>
    <RunCard title="Custom Report Builder" subtitle="Scheduled reports and drill-downs.">
      <div className="space-y-3">
        {[
          ['Weekly Digest:', 'Auto-sent every Monday with key metrics'],
          ['Source Attribution:', 'Revenue traced back to every lead source'],
          ['Team Performance:', 'Per-rep close rates and response times'],
          ['Client Reporting:', 'White-labelled dashboards for your clients'],
        ].map(([label, text]) => (
          <div key={label} className="flex gap-3 items-start text-sm text-zinc-400">
            <Check size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
            <span>{label} <strong className="text-white">{text}</strong></span>
          </div>
        ))}
      </div>
    </RunCard>
  </>
);

interface BentoGridProps {
  activeView: ViewType;
}

const BentoGrid = ({ activeView }: BentoGridProps) => {
  return (
    <section className="px-4 pb-24 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">How the system runs</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            This is what actually runs your growth.
          </h2>
        </motion.div>

        <motion.div
          key={activeView}
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {activeView === 'ads' && <AdsCards />}
          {activeView === 'websites' && <WebsitesCards />}
          {activeView === 'automations' && <AutomationsCards />}
          {activeView === 'aiBots' && <AiBotsCards />}
          {activeView === 'dashboards' && <DashboardsCards />}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
