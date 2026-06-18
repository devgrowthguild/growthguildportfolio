import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2, MousePointerClick, Users, ArrowRight, Check, PhoneCall, Stethoscope, Headset, Landmark, Phone, X } from 'lucide-react';
import StatusBadge from './StatusBadge';
import BentoGrid from './BentoGrid';
import DashboardSlider from './DashboardSlider';

type ViewType = 'ads' | 'websites' | 'automations' | 'aiBots' | 'dashboards';

const problemData: Record<ViewType, { title: string; subtitle: string; cards: { num: string; title: string; desc: string }[] }> = {
  ads: {
    title: "You're burning budget with no system to show for it.",
    subtitle: "Most businesses run ads hoping something sticks. Here's what that actually looks like.",
    cards: [
      { num: '01', title: 'No targeting strategy', desc: 'Broad audiences and guesswork instead of surgical precision.' },
      { num: '02', title: 'Weak creative', desc: 'Generic ads that blend into the noise.' },
      { num: '03', title: 'No testing framework', desc: 'Running the same ads for months without iteration.' },
      { num: '04', title: 'Vanity metrics', desc: 'Tracking clicks and impressions instead of booked calls.' },
      { num: '05', title: 'No qualification layer', desc: 'Every lead is treated the same regardless of intent.' },
      { num: '06', title: 'Zero feedback loop', desc: 'No data flowing back to improve campaigns.' },
    ],
  },
  websites: {
    title: "Your website looks nice but doesn't convert.",
    subtitle: "Most websites are digital brochures. Here's what's missing.",
    cards: [
      { num: '01', title: 'No clear funnel', desc: 'Visitors land and leave with no guided path.' },
      { num: '02', title: 'Weak CTAs', desc: 'Buttons that say "Learn More" instead of driving action.' },
      { num: '03', title: 'Slow load times', desc: 'Every second of delay kills conversion rates.' },
      { num: '04', title: 'No trust signals', desc: 'Missing reviews, case studies, and social proof.' },
      { num: '05', title: 'Poor mobile UX', desc: '70% of traffic is mobile, but the site isn\'t optimised.' },
      { num: '06', title: 'No booking system', desc: 'Leads have to email or call instead of self-booking.' },
    ],
  },
  automations: {
    title: "You're losing leads in the gap between enquiry and follow-up.",
    subtitle: "Speed and consistency win. Most businesses have neither.",
    cards: [
      { num: '01', title: 'Slow follow-up', desc: 'Leads wait hours or days for a response.' },
      { num: '02', title: 'Manual processes', desc: 'Copy-pasting, spreadsheets, and forgotten tasks.' },
      { num: '03', title: 'No lead scoring', desc: 'Hot leads are treated the same as cold ones.' },
      { num: '04', title: 'Single channel', desc: 'Only using email when SMS and WhatsApp convert higher.' },
      { num: '05', title: 'No pipeline visibility', desc: 'No idea where leads are in the journey.' },
      { num: '06', title: 'Revenue blindness', desc: 'Can\'t tie ad spend to actual revenue generated.' },
    ],
  },
  aiBots: {
    title: "You're losing deals because no one answers the phone.",
    subtitle: "Most businesses miss 40%+ of inbound calls. Here's the real cost.",
    cards: [
      { num: '01', title: 'Missed calls', desc: 'Every unanswered call is a lost opportunity and wasted ad spend.' },
      { num: '02', title: 'Unqualified bookings', desc: 'Time-wasters fill your calendar while real buyers wait.' },
      { num: '03', title: 'Inconsistent scripts', desc: 'Staff go off-script, miss key questions, lose deals.' },
      { num: '04', title: 'No after-hours coverage', desc: 'Leads enquire at 9pm but no one responds until tomorrow.' },
      { num: '05', title: 'Zero qualification logic', desc: 'No budget, timeline or intent filtering before booking.' },
      { num: '06', title: 'No conversation data', desc: 'Calls happen but nothing is logged, scored, or acted on.' },
    ],
  },
  dashboards: {
    title: "You're flying blind without real-time data.",
    subtitle: "Most businesses have no idea what's actually working. Here's what that costs.",
    cards: [
      { num: '01', title: 'Scattered data', desc: 'Revenue, leads, and performance data spread across 5+ tools with no single view.' },
      { num: '02', title: 'No revenue attribution', desc: "Can't tie ad spend to closed deals or track true ROI per campaign." },
      { num: '03', title: 'Manual reporting', desc: 'Hours wasted pulling reports from different platforms every week.' },
      { num: '04', title: 'Delayed decisions', desc: 'Problems surface days or weeks later instead of in real-time.' },
      { num: '05', title: 'Vanity metrics', desc: 'Tracking likes and clicks instead of pipeline velocity and close rates.' },
      { num: '06', title: 'No team visibility', desc: 'Sales managers have no view into rep performance or deal health.' },
    ],
  },
};

const systemData: Record<ViewType, { title: string; subtitle: string; steps: { pill: string; title: string; desc: string }[] }> = {
  ads: {
    title: 'How winning campaigns are built.',
    subtitle: 'A systematic approach to paid media that compounds over time.',
    steps: [
      { pill: 'Step 01', title: 'Research & Angle Mining', desc: 'We analyse competitors, audiences, and market positioning to find angles that cut through noise.' },
      { pill: 'Step 02', title: 'Filter & Qualify', desc: 'Every campaign is engineered to repel bad-fit leads and attract decision-makers with budget and intent.' },
      { pill: 'Step 03', title: 'Creative Testing Lab', desc: 'We run structured split tests across hooks, offers, and formats to find the winning combinations.' },
      { pill: 'Step 04', title: 'Scale & Stabilise', desc: 'Once we find winners, we scale spend while monitoring quality metrics to maintain ROI.' },
    ],
  },
  websites: {
    title: 'How high-converting pages are engineered.',
    subtitle: 'Every element is designed to move visitors toward one action.',
    steps: [
      { pill: 'Step 01', title: 'Map the Conversion Path', desc: 'We design the exact journey from click to booking, removing every friction point.' },
      { pill: 'Step 02', title: 'Build for Action', desc: 'Every section, headline, and CTA is designed to drive one specific outcome.' },
      { pill: 'Step 03', title: 'Inject Trust', desc: 'Reviews, case studies, and credibility markers placed at decision-critical moments.' },
      { pill: 'Step 04', title: 'Optimise Speed & Mobile', desc: 'Sub-second load times and flawless mobile experience for maximum conversion.' },
    ],
  },
  automations: {
    title: 'How instant follow-up systems are built.',
    subtitle: 'From enquiry to booked call in minutes, not days.',
    steps: [
      { pill: 'Step 01', title: 'Speed to Lead', desc: 'AI-powered instant response within seconds of form submission. Email, SMS, and WhatsApp simultaneously.' },
      { pill: 'Step 02', title: 'Multi-Channel Sequences', desc: 'Automated nurture across email, SMS, and WhatsApp with smart branching based on engagement.' },
      { pill: 'Step 03', title: 'Intelligent Routing', desc: 'Revenue-based logic gates that route high-value leads to sales and nurture the rest.' },
      { pill: 'Step 04', title: 'Nurture Campaigns', desc: 'Long-term drip sequences that keep your brand top-of-mind until the lead is ready to buy.' },
    ],
  },
  aiBots: {
    title: 'How AI voice agents are deployed.',
    subtitle: 'From missed calls to automated qualification in days.',
    steps: [
      { pill: 'Step 01', title: 'Conversation Architecture', desc: 'We design dynamic call flows with branching logic, objection handling, and qualification gates.' },
      { pill: 'Step 02', title: 'Intent Detection & Filtering', desc: 'AI filters time-wasters and routes qualified conversations based on budget, timeline, and need.' },
      { pill: 'Step 03', title: 'Testing & Optimisation', desc: 'We A/B test scripts, pacing, and tone to maximise completion rates and booking conversions.' },
      { pill: 'Step 04', title: 'Live Deployment & Monitoring', desc: 'Bot goes live with real-time dashboards tracking conversations, qualification rates, and revenue impact.' },
    ],
  },
  dashboards: {
    title: 'How custom dashboards are engineered.',
    subtitle: 'From scattered data to a single source of truth in days.',
    steps: [
      { pill: 'Step 01', title: 'Data Audit & Mapping', desc: 'We map every revenue touchpoint — CRM, ad platforms, billing, and pipeline — into a unified data model.' },
      { pill: 'Step 02', title: 'Custom KPI Architecture', desc: 'We define the metrics that actually matter: close rates, pipeline velocity, revenue per lead, LTV, and churn.' },
      { pill: 'Step 03', title: 'Visual Dashboard Build', desc: 'Interactive panels with real-time charts, filters, and drill-downs built for speed and clarity.' },
      { pill: 'Step 04', title: 'Automated Alerts & Reporting', desc: 'Scheduled reports and threshold alerts so you catch problems before they cost you revenue.' },
    ],
  },
};

// Mockups for "The System" section
const AdsMockups = [
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <div className="flex gap-2 mb-6">
        <StatusBadge variant="golden">ANGLES</StatusBadge>
        <StatusBadge variant="gray">FILTER CRITERIA</StatusBadge>
      </div>
      <div className="space-y-2">
        <div className="h-2 bg-zinc-100 rounded w-full" />
        <div className="h-2 bg-zinc-100 rounded w-5/6" />
        <div className="h-2 bg-zinc-100 rounded w-2/3" />
      </div>
    </div>
  ),
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10 space-y-3">
      <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-xl flex items-center gap-3 text-sm font-medium">
        <XCircle size={16} /> Low intent browsers
      </div>
      <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-xl flex items-center gap-3 text-sm font-medium">
        <XCircle size={16} /> Low budget enquiries
      </div>
      <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#B8942A] p-3 rounded-xl flex items-center gap-3 text-sm font-semibold">
        <CheckCircle2 size={16} /> Qualified Prospects
      </div>
    </div>
  ),
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <p className="text-[10px] font-semibold tracking-widest text-zinc-400 mb-6 uppercase">VARIANTS TESTED</p>
      <div className="flex items-end gap-3 h-32">
        <div className="w-1/4 relative flex flex-col items-center">
          <span className="text-[10px] font-bold text-red-500 mb-1">0.8%</span>
          <div className="w-full bg-red-100 border-t-2 border-red-300 rounded-t-lg" style={{ height: '20%' }} />
        </div>
        <div className="w-1/4 relative flex flex-col items-center">
          <span className="text-[10px] font-bold text-red-500 mb-1">1.2%</span>
          <div className="w-full bg-red-100 border-t-2 border-red-300 rounded-t-lg" style={{ height: '30%' }} />
        </div>
        <div className="w-1/4 relative flex flex-col items-center">
          <span className="text-[10px] font-bold text-green-600 mb-1">4.7%</span>
          <div className="w-full bg-green-100 border-t-2 border-green-300 rounded-t-lg" style={{ height: '80%' }} />
        </div>
        <div className="w-1/4 relative flex flex-col items-center">
          <span className="text-[10px] font-bold text-[#D4AF37] mb-1">WIN</span>
          <div className="w-full bg-[#D4AF37]/20 border-t-2 border-[#D4AF37] rounded-t-lg" style={{ height: '100%' }} />
        </div>
      </div>
    </div>
  ),
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <p className="text-[10px] font-semibold tracking-widest text-zinc-400 mb-4 uppercase">QUALITY METRICS</p>
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm border-b border-zinc-100 pb-3">
          <span className="text-zinc-600 font-medium">Lead Quality</span>
          <StatusBadge variant="green">STABLE</StatusBadge>
        </div>
        <div className="flex justify-between items-center text-sm border-b border-zinc-100 pb-3">
          <span className="text-zinc-600 font-medium">Booking Rate</span>
          <StatusBadge variant="green">STABLE</StatusBadge>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-zinc-600 font-medium">System Stability</span>
          <StatusBadge variant="golden">GO</StatusBadge>
        </div>
      </div>
    </div>
  ),
];

const WebsitesMockups = [
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <div className="flex items-center justify-between text-zinc-400">
        <div className="bg-surface p-3 rounded-xl border border-zinc-100"><MousePointerClick size={20} /></div>
        <div className="h-[2px] w-8 bg-zinc-200" />
        <div className="bg-surface p-3 rounded-xl border border-zinc-100"><Users size={20} /></div>
        <div className="h-[2px] w-8 bg-zinc-200" />
        <div className="bg-[#D4AF37]/10 text-[#D4AF37] p-3 rounded-xl border border-[#D4AF37]/20"><CheckCircle2 size={20} /></div>
      </div>
    </div>
  ),
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10 text-center">
      <div className="opacity-30 blur-[1px] space-y-2 mb-4">
        <div className="h-2 bg-zinc-300 rounded mx-auto w-1/2" />
        <div className="h-2 bg-zinc-300 rounded mx-auto w-1/3" />
      </div>
      <button className="bg-[#D4AF37] text-white font-semibold text-sm px-6 py-3 rounded-lg w-full shadow-md">
        Book Consultation
      </button>
    </div>
  ),
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <div className="flex gap-1 text-[#D4AF37] mb-3">★ ★ ★ ★ ★</div>
      <p className="text-zinc-600 text-sm italic mb-4 font-medium">"They mapped out our exact flow. Conversions doubled."</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200" />
        <div className="space-y-1.5">
          <div className="h-2.5 w-20 bg-zinc-200 rounded" />
          <div className="h-2 w-12 bg-zinc-100 rounded" />
        </div>
      </div>
    </div>
  ),
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <div className="flex gap-4">
        <div className="flex-1 text-center bg-surface border border-zinc-100 rounded-2xl p-4">
          <div className="text-3xl font-bold text-zinc-900">99<span className="text-sm">%</span></div>
          <div className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase mt-1">MOBILE OPT</div>
        </div>
        <div className="flex-1 text-center bg-surface border border-zinc-100 rounded-2xl p-4">
          <div className="text-3xl font-bold text-zinc-900">0.8<span className="text-sm">s</span></div>
          <div className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase mt-1">LOAD TIME</div>
        </div>
      </div>
    </div>
  ),
];

const AutomationsMockups = [
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <div className="flex justify-between items-center border-b border-zinc-100 pb-3 mb-4">
        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Speed to Lead</span>
        <StatusBadge variant="golden">00:04s</StatusBadge>
      </div>
      <div className="space-y-3">
        <div className="bg-surface border border-zinc-100 p-3 rounded-xl rounded-tl-none w-4/5 text-xs text-zinc-600">
          Form submitted via Website
        </div>
        <div className="bg-zinc-900 text-white p-3 rounded-xl rounded-tr-none w-4/5 ml-auto text-xs border border-zinc-800 shadow-md">
          Hi John! Thanks for reaching out...
        </div>
      </div>
    </div>
  ),
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <div className="flex flex-col items-center">
        <div className="bg-surface border border-zinc-100 p-4 rounded-full mb-6 relative">
          <Users size={20} className="text-zinc-500" />
        </div>
        <div className="w-full h-[2px] bg-zinc-100 mb-6" />
        <div className="grid grid-cols-3 gap-3 w-full">
          <StatusBadge variant="dark">Email</StatusBadge>
          <StatusBadge variant="dark">SMS</StatusBadge>
          <StatusBadge variant="dark">WhatsApp</StatusBadge>
        </div>
      </div>
    </div>
  ),
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <p className="text-[10px] tracking-widest font-semibold text-zinc-400 mb-4 text-center uppercase">LOGIC GATE: REVENUE</p>
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-3">
          <span className="bg-surface px-3 py-2 rounded-lg text-zinc-600 border border-zinc-200 font-medium text-sm">&lt; £10k</span>
          <ArrowRight size={14} className="text-zinc-400" />
          <StatusBadge variant="gray">Nurture</StatusBadge>
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="bg-surface px-3 py-2 rounded-lg text-zinc-600 border border-zinc-200 font-medium text-sm">&gt; £10k</span>
          <ArrowRight size={14} className="text-zinc-400" />
          <StatusBadge variant="golden">Sales Calendar</StatusBadge>
        </div>
      </div>
    </div>
  ),
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <div className="relative pl-6">
        <div className="absolute left-2.5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-zinc-200 to-transparent" />
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-full border-2 border-[#D4AF37] bg-white z-10 -ml-6" />
            <div className="text-xs font-medium text-zinc-700 bg-surface p-3 rounded-xl border border-zinc-100">Day 1: Welcome</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-full border-2 border-zinc-300 bg-white z-10 -ml-6" />
            <div className="text-xs font-medium text-zinc-500 bg-card p-3 rounded-xl border border-zinc-100 shadow-sm">Day 3: Case Study</div>
          </div>
        </div>
      </div>
    </div>
  ),
];

const AiBotsMockups = [
  // Step 1 - Conversation Flows
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <div className="flex gap-2 mb-6">
        <StatusBadge variant="golden">CONVERSATION FLOWS</StatusBadge>
        <StatusBadge variant="gray">INTENT LOGIC</StatusBadge>
      </div>
      <div className="space-y-2">
        <div className="h-2 bg-zinc-100 rounded w-full" />
        <div className="h-2 bg-zinc-100 rounded w-5/6" />
        <div className="h-2 bg-zinc-100 rounded w-2/3" />
      </div>
    </div>
  ),
  // Step 2 - Filter
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10 space-y-3">
      <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-xl flex items-center gap-3 text-sm font-medium">
        <XCircle size={16} /> Time-wasters & tyre-kickers
      </div>
      <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-xl flex items-center gap-3 text-sm font-medium">
        <XCircle size={16} /> Unqualified appointment requests
      </div>
      <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#B8942A] p-3 rounded-xl flex items-center gap-3 text-sm font-semibold">
        <CheckCircle2 size={16} /> AI-Qualified Conversations
      </div>
    </div>
  ),
  // Step 3 - Bar Chart
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <p className="text-[10px] font-semibold tracking-widest text-zinc-400 mb-6 uppercase">FLOW PERFORMANCE TESTED</p>
      <div className="flex items-end gap-3 h-32">
        <div className="w-1/4 relative flex flex-col items-center">
          <span className="text-[10px] font-bold text-red-500 mb-1">32% Drop-off</span>
          <div className="w-full bg-red-100 border-t-2 border-red-300 rounded-t-lg" style={{ height: '25%' }} />
        </div>
        <div className="w-1/4 relative flex flex-col items-center">
          <span className="text-[10px] font-bold text-red-500 mb-1">48% Response</span>
          <div className="w-full bg-red-100 border-t-2 border-red-300 rounded-t-lg" style={{ height: '40%' }} />
        </div>
        <div className="w-1/4 relative flex flex-col items-center">
          <span className="text-[10px] font-bold text-green-600 mb-1">71% Qualified</span>
          <div className="w-full bg-green-100 border-t-2 border-green-300 rounded-t-lg" style={{ height: '75%' }} />
        </div>
        <div className="w-1/4 relative flex flex-col items-center">
          <span className="text-[10px] font-bold text-[#D4AF37] mb-1">AUTOMATED WIN</span>
          <div className="w-full bg-[#D4AF37]/20 border-t-2 border-[#D4AF37] rounded-t-lg" style={{ height: '100%' }} />
        </div>
      </div>
    </div>
  ),
  // Step 4 - Bot Quality Metrics
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <p className="text-[10px] font-semibold tracking-widest text-zinc-400 mb-4 uppercase">BOT QUALITY METRICS</p>
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm border-b border-zinc-100 pb-3">
          <span className="text-zinc-600 font-medium">Intent Detection Accuracy</span>
          <StatusBadge variant="green">STABLE</StatusBadge>
        </div>
        <div className="flex justify-between items-center text-sm border-b border-zinc-100 pb-3">
          <span className="text-zinc-600 font-medium">Call Completion Rate</span>
          <StatusBadge variant="green">OPTIMISED</StatusBadge>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-zinc-600 font-medium">System Automation</span>
          <StatusBadge variant="golden">LIVE</StatusBadge>
        </div>
      </div>
    </div>
  ),
];

const DashboardsMockups = [
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <p className="text-[10px] font-semibold tracking-widest text-zinc-400 mb-4 uppercase">DATA SOURCES</p>
      <div className="space-y-2">
        {['CRM Pipeline', 'Ad Platforms', 'Billing & Payments', 'Website Analytics'].map((s) => (
          <div key={s} className="flex items-center gap-2 text-sm text-zinc-600 bg-surface border border-zinc-100 p-2.5 rounded-xl">
            <CheckCircle2 size={14} className="text-[#D4AF37]" /> {s}
          </div>
        ))}
      </div>
    </div>
  ),
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <p className="text-[10px] font-semibold tracking-widest text-zinc-400 mb-4 uppercase">KEY METRICS</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-surface border border-zinc-100 rounded-xl p-3 text-center">
          <div className="text-2xl font-bold text-zinc-900">$18.2K</div>
          <div className="text-[10px] text-zinc-400 uppercase mt-1">MRR</div>
        </div>
        <div className="bg-surface border border-zinc-100 rounded-xl p-3 text-center">
          <div className="text-2xl font-bold text-zinc-900">87%</div>
          <div className="text-[10px] text-zinc-400 uppercase mt-1">Close Rate</div>
        </div>
      </div>
    </div>
  ),
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <p className="text-[10px] font-semibold tracking-widest text-zinc-400 mb-6 uppercase">REVENUE TREND</p>
      <div className="flex items-end gap-2 h-24">
        {[30, 45, 38, 60, 55, 72, 85, 100].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i >= 6 ? 'hsl(43 56% 52%)' : 'hsl(240 6% 90%)' }} />
        ))}
      </div>
    </div>
  ),
  () => (
    <div className="bg-card rounded-2xl p-6 shadow-premium w-full max-w-sm mx-auto relative z-10">
      <p className="text-[10px] font-semibold tracking-widest text-zinc-400 mb-4 uppercase">ALERT SYSTEM</p>
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm border-b border-zinc-100 pb-3">
          <span className="text-zinc-600 font-medium">Pipeline Health</span>
          <StatusBadge variant="green">HEALTHY</StatusBadge>
        </div>
        <div className="flex justify-between items-center text-sm border-b border-zinc-100 pb-3">
          <span className="text-zinc-600 font-medium">Revenue Target</span>
          <StatusBadge variant="golden">ON TRACK</StatusBadge>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-zinc-600 font-medium">Churn Alert</span>
          <StatusBadge variant="green">LOW</StatusBadge>
        </div>
      </div>
    </div>
  ),
];

const mockupSets: Record<ViewType, (() => JSX.Element)[]> = {
  ads: AdsMockups,
  websites: WebsitesMockups,
  automations: AutomationsMockups,
  aiBots: AiBotsMockups,
  dashboards: DashboardsMockups,
};

// AI Bot categories for the grid
const VAPI_API_KEY = '2393e247-bed9-40f2-b6d3-3ae219add522';

const aiBotCategories = [
  {
    icon: PhoneCall,
    title: 'Real Estate Bot',
    description: ['Buyer qualification', 'Viewing confirmations', 'Seller lead filtering'],
    badge: 'Property Leads',
    assistantId: 'a66f0975-d8a9-4acb-9671-505047d63d3a',
  },
  {
    icon: Stethoscope,
    title: 'Medical AI Receptionist',
    description: ['Appointment booking', 'Insurance pre-check', 'Follow-up reminders'],
    badge: 'Clinic Automation',
    assistantId: 'd1f86135-be09-41e5-b939-0012977797fd',
  },
  {
    icon: Headset,
    title: 'Home Renovation Bot',
    description: ['Budget filtering', 'Decision-maker detection', 'Calendar booking'],
    badge: '£5k+ Offers',
    assistantId: 'a06dbd48-6744-4019-882c-18ce2d8bf524',
  },
  {
    icon: Landmark,
    title: 'Finance Lead Verifier',
    description: ['Income qualification', 'Risk profiling', 'Consultation scheduling'],
    badge: 'Compliance Ready',
    assistantId: '3f6a47e9-4322-452a-a8a7-2031998013df',
  },
];

const TheSystem = () => {
  const [activeView, setActiveView] = useState<ViewType>(() => {
    const saved = sessionStorage.getItem('returnView');
    if (saved === 'aiBots') return 'aiBots' as ViewType;
    return 'ads';
  });
  const [callingBot, setCallingBot] = useState<typeof aiBotCategories[0] | null>(null);
  const vapiInstanceRef = useRef<any>(null);
  const sdkLoadedRef = useRef(false);

  // Restore scroll position after reload from ending a call
  useEffect(() => {
    const scrollTarget = sessionStorage.getItem('returnScroll');
    const returnView = sessionStorage.getItem('returnView');
    if (scrollTarget && returnView) {
      sessionStorage.removeItem('returnScroll');
      sessionStorage.removeItem('returnView');
      setTimeout(() => {
        window.scrollTo({ top: parseFloat(scrollTarget), behavior: 'instant' as ScrollBehavior });
      }, 200);
    }
  }, []);

  // Load Vapi SDK once
  useEffect(() => {
    if (sdkLoadedRef.current) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => { sdkLoadedRef.current = true; };
    return () => { document.body.removeChild(script); };
  }, []);

  const startCall = useCallback((bot: typeof aiBotCategories[0]) => {
    setCallingBot(bot);
    const tryStart = () => {
      if ((window as any).vapiSDK) {
        vapiInstanceRef.current = (window as any).vapiSDK.run({
          apiKey: VAPI_API_KEY,
          assistant: bot.assistantId,
          config: {},
        });
        // Auto-click the Vapi button after it renders
        setTimeout(() => {
          const vapiBtn = document.querySelector('#vapi-support-btn') as HTMLElement;
          if (vapiBtn) vapiBtn.click();
        }, 1000);
      } else {
        setTimeout(tryStart, 300);
      }
    };
    tryStart();
  }, []);

  const endCall = useCallback(() => {
    // Save scroll position to return to after reload
    const section = document.getElementById('the-system');
    if (section) {
      const scrollTarget = section.getBoundingClientRect().top + window.scrollY;
      sessionStorage.setItem('returnScroll', String(scrollTarget));
    }
    sessionStorage.setItem('returnView', 'aiBots');
    window.location.reload();
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const view = (e as CustomEvent).detail as ViewType;
      setActiveView(view);
    };
    window.addEventListener('set-system-view', handler);
    return () => window.removeEventListener('set-system-view', handler);
  }, []);

  const problem = problemData[activeView];
  const system = systemData[activeView];
  const mockups = mockupSets[activeView];

  return (
    <>
    <section id="the-system" className="bg-surface border-t border-zinc-200">
      {/* Hero */}
      <div className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">The Growth Guild System</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Five layers. One system.{' '}
            <span className="text-zinc-400">Predictable pipeline.</span>
          </h2>

          {/* Toggle */}
          <div className="inline-flex bg-zinc-100 rounded-full p-1 mt-8 flex-wrap justify-center">
            {(['ads', 'websites', 'automations', 'aiBots', 'dashboards'] as ViewType[]).map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeView === view
                    ? 'bg-zinc-900 text-white shadow-md'
                    : 'text-zinc-500 hover:text-zinc-700'
                }`}
              >
                {view === 'aiBots' ? 'AI Bots' : view === 'ads' ? 'Ads' : view === 'websites' ? 'Websites' : view === 'dashboards' ? 'Dashboards' : 'Automations'}
              </button>
            ))}
          </div>

          {/* Website Examples - only when websites tab active */}
          {activeView === 'websites' && (
            <motion.div
              className="mt-16 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-3">Examples</p>
              <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
                Examples of pages we build.
              </h3>
              <p className="text-zinc-500 text-lg font-medium mb-10">
                Layouts designed to turn clicks into qualified enquiries.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                  { category: 'Healthcare', title: 'Medical', image: '/images/website-medical.png', accent: 'text-rose-500 bg-rose-50 border-rose-200', url: '/templates/medical/' },
                  { category: 'Trades', title: 'Home Services', image: '/images/website-home-services.png', accent: 'text-blue-600 bg-blue-50 border-blue-200', url: '/templates/home-services/' },
                  { category: 'Legal', title: 'Law Firm', image: '/images/website-law-firm.png', accent: 'text-amber-600 bg-amber-50 border-amber-200', url: '/templates/legal/' },
                  { category: 'Real Estate', title: 'Real Estate', image: '/images/website-real-estate.png', accent: 'text-emerald-600 bg-emerald-50 border-emerald-200', url: '/templates/real-estate/' },
                  { category: 'Fitness', title: 'Coaching', image: '/images/website-coaching.png', accent: 'text-orange-600 bg-orange-50 border-orange-200', url: '/templates/coaching/' },
                  { category: 'Finance', title: 'Insurance', image: '/images/website-insurance.png', accent: 'text-indigo-600 bg-indigo-50 border-indigo-200', url: '/templates/insurance/' },
                ].map((item, i) => (
                  <motion.a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.title}
                    className="bg-card rounded-2xl border border-zinc-200 overflow-hidden shadow-premium hover:shadow-lg transition-shadow duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img src={item.image} alt={`${item.title} website`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.accent}`}>
                        {item.category}
                      </span>
                      <h4 className="font-bold text-zinc-900 mt-3 text-lg">{item.title}</h4>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}

          {/* AI Bots Category Grid - only when aiBots tab active */}
          {activeView === 'aiBots' && (
            <motion.div
              className="mt-16 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase mb-3">AI CALLING BOT CATEGORIES</p>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Choose Your Industry Bot</h3>
              <p className="text-sm text-zinc-500 mb-8">See how our AI voice agents handle real conversations in your niche.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {aiBotCategories.map((bot, i) => (
                  <motion.div
                    key={bot.title}
                    className="bg-card border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition group relative text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <span className="absolute top-4 right-4 bg-green-100 text-green-600 text-[10px] font-semibold px-2 py-1 rounded-full">LIVE DEMO</span>
                    <div className="w-full h-32 rounded-xl bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center mb-3">
                      <bot.icon size={36} className="text-[#D4AF37]" />
                    </div>
                    <h4 className="text-lg font-semibold text-zinc-900 mt-4">{bot.title}</h4>
                    <ul className="text-sm text-zinc-500 mt-2 space-y-1">
                      {bot.description.map((d) => (
                        <li key={d}>• {d}</li>
                      ))}
                    </ul>
                    <span className="bg-[#D4AF37]/10 text-[#B8942A] text-xs font-medium px-3 py-1 rounded-full mt-4 inline-block">
                      {bot.badge}
                    </span>
                    <button
                      onClick={() => startCall(bot)}
                      className="bg-[#D4AF37] hover:bg-[#C19E2F] text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition w-full mt-4"
                    >
                      Request Instant Call
                    </button>
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-xs text-zinc-400 mt-6">Powered by real-time conversational AI with dynamic intent detection.</p>
            </motion.div>
          )}

          {/* Custom Dashboards Showcase - only when dashboards tab active */}
          {activeView === 'dashboards' && (
            <motion.div
              className="mt-16 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-3">Client Dashboards</p>
              <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
                Real dashboards. Real clients. Real data.
              </h3>
              <p className="text-zinc-500 text-lg font-medium mb-10">
                Every dashboard is custom-built to surface the metrics that drive revenue decisions.
              </p>

              <DashboardSlider />
            </motion.div>
          )}
        </div>
      </div>

      {/* Bento Grid - immediately after toggle */}
      <BentoGrid activeView={activeView} />

      {/* Problem Section */}
      <div className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 md:sticky md:top-32 md:self-start">
            <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">The Problem</p>
            <h3 className="text-3xl font-bold text-zinc-900 tracking-tight mb-4">{problem.title}</h3>
            <p className="text-zinc-500 text-lg font-medium">{problem.subtitle}</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problem.cards.map((card, i) => (
              <motion.div
                key={card.num + activeView}
                className="bg-card rounded-2xl p-5 shadow-premium border border-white hover:border-[#D4AF37]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center mb-3">
                  <span className="text-xs font-bold text-[#D4AF37]">{card.num}</span>
                </div>
                <h4 className="font-semibold text-zinc-900 mb-1">{card.title}</h4>
                <p className="text-sm text-zinc-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* The System Steps */}
      <div className="py-28 px-4 bg-card border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">The System</p>
            <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-6">{system.title}</h3>
            <p className="text-xl text-zinc-500 font-medium">{system.subtitle}</p>
          </div>

          <div className="space-y-40">
            {system.steps.map((step, i) => {
              const Mockup = mockups[i];
              const isEven = i % 2 === 1;
              return (
                <motion.div
                  key={step.pill + activeView}
                  className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className="md:w-1/2">
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/10 px-3 py-1.5 rounded-full">
                      {step.pill}
                    </span>
                    <h4 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight tracking-tight mt-4 mb-4">{step.title}</h4>
                    <p className="text-zinc-500 text-lg leading-relaxed font-medium">{step.desc}</p>
                  </div>
                  <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent blur-3xl rounded-full opacity-30" />
                    <Mockup />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* AI Bot Demo Modal */}
    {/* AI Bot Connecting Modal */}
    <AnimatePresence>
      {callingBot && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={endCall}
        >
          <motion.div
            className="bg-card rounded-3xl p-10 max-w-md w-full text-center relative shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={endCall}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition"
            >
              <X size={20} />
            </button>
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6 relative">
              <Phone size={32} className="text-[#D4AF37]" />
              {/* Pulsing ring animation */}
              <span className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/40 animate-ping" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Connecting to {callingBot.title}</h3>
            <div className="flex items-center justify-center gap-1.5 my-6">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#D4AF37]"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
            <p className="text-sm text-zinc-500">Initializing AI voice agent. Please hold.</p>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">Note: You may experience minor latency in this browser environment. Deployed systems feature ultra-low latency for seamless, human-like conversations.</p>
            <p className="text-xs text-zinc-400 mt-4">This usually takes 5–10 seconds.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default TheSystem;
