import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, GitFork, Tag, Map, Users, Flame, Home, Calendar, FileText,
  ArrowRight, Check, ChevronDown, Shield, MessageSquare,
  CreditCard, Star, RefreshCw, Target, Settings, ArrowLeft,
  Clock, Mail, Phone, BarChart3, Building, Key, Search, AlertTriangle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ─── Design tokens ───
const warm = {
  bg: 'hsl(25, 20%, 98%)',
  primary: 'hsl(25, 30%, 40%)',
  muted: 'hsl(40, 10%, 90%)',
  accent: 'hsl(20, 40%, 50%)',
  border: 'hsl(25, 10%, 88%)',
};

const PillBadge = ({ children, color = 'gray' }: { children: React.ReactNode; color?: string }) => {
  const colors: Record<string, string> = {
    orange: 'bg-orange-100 text-orange-700 border-orange-200',
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    green: 'bg-green-100 text-green-700 border-green-200',
    pink: 'bg-pink-100 text-pink-700 border-pink-200',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    gray: 'bg-zinc-100 text-zinc-600 border-zinc-200',
    primary: 'bg-amber-900/10 text-amber-800 border-amber-800/20',
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${colors[color] || colors.gray}`}>
      {children}
    </span>
  );
};

const Section = ({ children, alt = false, className = '' }: { children: React.ReactNode; alt?: boolean; className?: string }) => (
  <section className={`py-20 px-4 ${alt ? 'bg-[hsl(40,10%,95%)]' : 'bg-[hsl(25,20%,98%)]'} ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-3">{title}</h2>
    <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto">{subtitle}</p>
  </motion.div>
);

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-2xl p-6 border border-[hsl(25,10%,88%)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

// ═══════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════
const HeroSection = () => {
  const navigate = useNavigate();
  const stats = [
    { icon: Zap, label: 'Speed-to-Lead', value: '<5 Min' },
    { icon: GitFork, label: 'Core Workflows', value: '6' },
    { icon: Tag, label: 'Pipeline Stages', value: '14' },
    { icon: Map, label: 'Primary Pipelines', value: '2' },
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden" style={{ background: warm.bg }}>
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors mb-8">
          <ArrowLeft size={14} /> Back to Home
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase border" style={{ background: 'hsl(25,30%,40%,0.08)', color: warm.primary, borderColor: 'hsl(25,30%,40%,0.15)' }}>
            Industry Leading Automation
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mt-6 mb-3">
            Real Estate <em className="not-italic" style={{ color: warm.primary, fontStyle: 'italic' }}>Brokerage</em>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: warm.primary }}>
            Complete GHL Automation System
          </p>
          <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto mb-12">
            Revolutionize your operations with end-to-end automation for residential listings, buyer representation, rentals, and property management.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }}>
                <Card className="text-center !p-5">
                  <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: 'hsl(25,30%,40%,0.08)' }}>
                    <s.icon size={18} style={{ color: warm.primary }} />
                  </div>
                  <div className="text-2xl font-bold text-zinc-900">{s.value}</div>
                  <div className="text-xs text-zinc-400 font-medium mt-0.5">{s.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════
// TAG & FIELD SYSTEM
// ═══════════════════════════════════════════
const tagCategories = [
  { icon: Users, title: 'Role Tags', color: 'blue', tags: ['Buyer', 'Seller', 'Renter', 'Investor', 'Other'] },
  { icon: Flame, title: 'Urgency Scoring', color: 'orange', tags: ['Now', '0–30 Days', '30–90 Days', '90+ Days'] },
  { icon: Home, title: 'Listing Status', color: 'green', tags: ['Active', 'Pending', 'Under-Contract', 'Closed'] },
  { icon: Calendar, title: 'Showing Status', color: 'pink', tags: ['Scheduled', 'Completed', 'Feedback'] },
  { icon: FileText, title: 'Offer Status', color: 'yellow', tags: ['None', 'Submitted', 'Countered', 'Accepted', 'Rejected'] },
  { icon: Search, title: 'Source Tags', color: 'purple', tags: ['Facebook', 'Referral', 'Portal-Lead', 'Manual'] },
];

const TagSystemSection = () => (
  <Section alt>
    <SectionHeader title="Complete Tag & Custom Field System" subtitle="Smart Tags & Fields for Complete Deal Organization" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {tagCategories.map((cat, i) => (
        <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-${cat.color}-100`}>
                <cat.icon size={16} className={`text-${cat.color}-600`} />
              </div>
              <h3 className="font-semibold text-zinc-900">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.tags.map(t => <PillBadge key={t} color={cat.color}>{t}</PillBadge>)}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

// ═══════════════════════════════════════════
// LEAD JOURNEY PATHS
// ═══════════════════════════════════════════
type LeadPath = { time: string; title: string; desc: string };

const sellerPath: LeadPath[] = [
  { time: '0 min', title: 'Intake Form Submitted', desc: 'Identifies as seller, captures address & desired price' },
  { time: '0-5 min', title: 'Auto-Response', desc: 'SMS + Email sent with consult booking link' },
  { time: 'Day 1', title: 'Consult Completed', desc: 'Agent reviews strategy, marks "Interested Seller"' },
  { time: 'Day 1-3', title: 'Listing Prep Onboarding', desc: 'Send Listing Agreement (e-signature) + checklist' },
  { time: 'Day 3+', title: 'Photos & MLS', desc: 'Photo shoot booking + MLS data pre-fill' },
  { time: 'Active', title: 'Showings & Offers', desc: 'Automated showing feedback + offer routing' },
  { time: 'Under Contract', title: 'Contingency Clearance', desc: 'Track inspections, financing, and escrow' },
  { time: 'Closing', title: 'Closing & Post-Close', desc: 'Utility change reminders + keys transfer + reviews' },
];

const buyerPath: LeadPath[] = [
  { time: '0 min', title: 'Lead Enters CRM', desc: 'Captures budget, timeframe, and pre-approval status' },
  { time: '0-5 min', title: 'Immediate Triage', desc: 'Auto-tagged as buyer + consult calendar sent' },
  { time: 'Day 1', title: 'Showing/Consult Scheduled', desc: 'Auto-reminders (48h, 24h, 3h, 1h, 15m)' },
  { time: 'Pre-Showing', title: 'Document Check', desc: 'Require pre-approval and proof of funds' },
  { time: 'Active Search', title: 'Discovery', desc: 'Showing scheduler + weekly active buyer check-ins' },
  { time: 'Offer Prep', title: 'Offer Submitted', desc: 'SMS + email to listing agent with "Review now" link' },
  { time: 'Under Contract', title: 'Escrow', desc: 'Contingency checklist creation (inspection, appraisal)' },
  { time: 'Post-Sale', title: 'Nurture', desc: 'Welcome package + home anniversary valuation checks' },
];

const nurturePath: LeadPath[] = [
  { time: '0 min', title: 'Lead Disqualified', desc: 'Marked as not-ready or stale' },
  { time: 'Day 7', title: 'Drip Start', desc: 'Market updates sent' },
  { time: 'Day 21', title: 'Neighborhood Check', desc: 'Neighborhood listings sent' },
  { time: 'Day 45', title: 'Valuation Trigger', desc: 'Estimated home valuations sent' },
  { time: 'Day 90', title: 'Agent Tips', desc: 'Helpful real estate tips sent' },
  { time: 'Day 180', title: 'Mid-Year Check-in', desc: 'Automated re-qualification attempt' },
  { time: 'Day 360', title: 'Annual Check-in', desc: 'Auto-stop on any reply to keep lead warm' },
];

const colorStyles: Record<string, { btn: string; tint: string; border: string; line: string; circle: string; text: string }> = {
  orange: { btn: 'bg-orange-500 text-white shadow-md', tint: 'bg-orange-50', border: 'border-orange-200/50', line: 'bg-orange-200', circle: 'border-orange-400', text: 'text-orange-500' },
  blue: { btn: 'bg-blue-500 text-white shadow-md', tint: 'bg-blue-50', border: 'border-blue-200/50', line: 'bg-blue-200', circle: 'border-blue-400', text: 'text-blue-500' },
  purple: { btn: 'bg-purple-500 text-white shadow-md', tint: 'bg-purple-50', border: 'border-purple-200/50', line: 'bg-purple-200', circle: 'border-purple-400', text: 'text-purple-500' },
};

const tabs = [
  { id: 'seller', label: '🏡 Seller Path', color: 'orange', data: sellerPath },
  { id: 'buyer', label: '🔑 Buyer Path', color: 'blue', data: buyerPath },
  { id: 'nurture', label: '❄️ Long-Term Nurture', color: 'purple', data: nurturePath },
];

const LeadJourneySection = () => {
  const [activeTab, setActiveTab] = useState('seller');
  const active = tabs.find(t => t.id === activeTab)!;
  const cs = colorStyles[active.color];

  return (
    <Section>
      <SectionHeader title="Client / Deal Lifecycle Paths" subtitle="Optimized paths based on client intent and lead temperature" />

      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? colorStyles[tab.color].btn
                : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <Card className={`${cs.tint} !${cs.border} max-w-3xl mx-auto`}>
            <div className="relative pl-8">
              <div className={`absolute left-3 top-2 bottom-2 w-[2px] ${cs.line}`} />
              <div className="space-y-6">
                {active.data.map((step, i) => (
                  <div key={i} className="relative flex items-start gap-4">
                    <div className={`absolute left-[-20px] w-5 h-5 rounded-full border-2 ${cs.circle} bg-white flex items-center justify-center z-10`}>
                      <span className={`text-[8px] font-bold ${cs.text}`}>{i + 1}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <PillBadge color={active.color}>{step.time}</PillBadge>
                        <span className="font-semibold text-zinc-900 text-sm">{step.title}</span>
                      </div>
                      <p className="text-zinc-500 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

// ═══════════════════════════════════════════
// PIPELINE STRUCTURE
// ═══════════════════════════════════════════
const PipelineSection = () => {
  const activePipeline = [
    { stage: 'R-001 New Lead', actions: ['Instant SMS', '5-min SLA call task', 'Stall alert at 10m'], tags: ['Lead'] },
    { stage: 'R-002 Qualification', actions: ['Auto-tag role/urgency', 'Request basic docs', 'Route agent'], tags: ['Buyer', 'Seller'] },
    { stage: 'R-003 Consult Scheduled', actions: ['Lock appointment', 'Multi-touch reminders', 'Pre-showing checklists'], tags: [] },
    { stage: 'R-004 Consult Completed', actions: ['Outcome form mandatory', 'Auto-route to Listing or Buyer track'], tags: [] },
    { stage: 'R-005 Listing Prep', actions: ['E-signature package', 'Photo booking', 'MLS pre-fill'], tags: ['Seller'] },
    { stage: 'R-006 Buyer Active', actions: ['Showing scheduler', 'Feedback flows', 'Weekly check-in tasks'], tags: ['Buyer'] },
    { stage: 'R-007 Under Contract', actions: ['Contingency checklists', 'Deadline reminders', 'Escrow coordination'], tags: [] },
    { stage: 'R-008 Closing', actions: ['Key transfer tasks', 'Closing instructions', 'Auto-move to Post-Sale'], tags: ['Customer'] },
  ];

  const postSalePipeline = [
    { stage: 'P-001 Closed', actions: ['Welcome package', 'Utility change reminders'], tags: [] },
    { stage: 'P-002 Review Requested', actions: ['14 days post-close', 'One-click review link'], tags: ['Review-Requested'] },
    { stage: 'P-003 Referral Request', actions: ['30 days post-close', 'Small gift/offer for referrals'], tags: [] },
    { stage: 'P-004 Home Anniversary', actions: ['6 & 12-month check-ins', 'Annual market valuation emails'], tags: [] },
    { stage: 'P-005 Reactivation', actions: ['Re-engagement campaigns', 'New listing alerts'], tags: [] },
  ];

  const renderPipeline = (stages: typeof activePipeline, colorClass: string) => (
    <div className="space-y-3">
      {stages.map((s, i) => (
        <div key={s.stage}>
          <div className="flex items-start gap-3">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0 ${colorClass}`}>
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-zinc-900 text-sm">{s.stage}</div>
              <ul className="mt-1 space-y-0.5">
                {s.actions.map(a => (
                  <li key={a} className="text-xs text-zinc-500 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-zinc-300 shrink-0" /> {a}
                  </li>
                ))}
              </ul>
              {s.tags.length > 0 && (
                <div className="flex gap-1.5 mt-1.5 flex-wrap">
                  {s.tags.map(t => <PillBadge key={t} color="primary">{t}</PillBadge>)}
                </div>
              )}
            </div>
          </div>
          {i < stages.length - 1 && (
            <div className="flex justify-start ml-3 my-1">
              <ChevronDown size={14} className="text-zinc-300" />
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <Section alt>
      <SectionHeader title="Primary Pipeline Architecture" subtitle="Two optimized pipelines with stall detection and forced progression rules" />
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-semibold text-zinc-900 text-lg mb-5">Real Estate – Active Deals Pipeline</h3>
          {renderPipeline(activePipeline, 'bg-amber-800')}
        </Card>
        <Card>
          <h3 className="font-semibold text-zinc-900 text-lg mb-5">Real Estate – Post-Sale Pipeline</h3>
          {renderPipeline(postSalePipeline, 'bg-green-700')}
        </Card>
      </div>
    </Section>
  );
};

// ═══════════════════════════════════════════
// WORKFLOW BREAKDOWN
// ═══════════════════════════════════════════
type WorkflowStep = { time: string; action: string; detail: string; tags?: string[] };
type Workflow = { icon: React.ElementType; title: string; trigger: string; steps: WorkflowStep[]; outcomes: string[] };

const workflows: Workflow[] = [
  {
    icon: Zap, title: 'Speed-to-Lead Workflow (R-001)', trigger: 'Opportunity created in R-001',
    steps: [
      { time: '0 min', action: 'Send SMS', detail: '"Hi {{first_name}}, this is {{agent_name}}. Can I call you now or prefer to schedule a showing? {{booking_link}}"' },
      { time: '0 min', action: 'Send Email', detail: 'Intake link + phone number' },
      { time: '0 min', action: 'Create Task', detail: '"Call lead now" (5-minute SLA) assigned to on-duty agent' },
      { time: '10 min', action: 'Stall Detection', detail: 'IF no call attempt recorded → Escalate to team lead via SMS/push' },
    ],
    outcomes: [
      'Agent calls within 5 min → Move to Qualification',
      'Lead books appointment → Move to Consult Scheduled',
      'No response 24h → Rescue Sequence',
    ],
  },
  {
    icon: Phone, title: 'Missed-Call Rescue Workflow', trigger: 'Incoming call → no answer OR marked missed',
    steps: [
      { time: '30 sec', action: 'Send SMS', detail: '"We missed your call - can we call back?" with link to schedule' },
      { time: '0 min', action: 'Create Task', detail: 'Auto-create callback task with 30-minute SLA' },
      { time: '24 hours', action: 'Check Response', detail: 'IF no response → Begin 7-day rescue drip (email + SMS + requalify)' },
    ],
    outcomes: [
      'Lead responds → Move to Qualification',
      'Lead books → Move to Consult Scheduled',
      'No response 7 days → Enter Long-Term Nurture',
    ],
  },
  {
    icon: Calendar, title: 'Showing Scheduling Workflow', trigger: 'Buyer requests / agent schedules showing',
    steps: [
      { time: '0 min', action: 'Confirm SMS + Email', detail: 'Property address, ETA, or lockbox code securely provided' },
      { time: 'Reminders', action: 'Automated Sequence', detail: '24h, 1h, and 15m prior to appointment' },
      { time: 'Post-showing', action: 'Feedback Form', detail: 'Automatic feedback form to agent and client with one-click response' },
      { time: 'Conditional', action: 'Auto-Task', detail: 'IF client indicates "very interested" → auto-create offer-prep task' },
    ],
    outcomes: [
      'Client very interested → Offer Prep task created',
      'Client not interested → Next showing scheduled',
      'No-show → Follow-up task + reschedule link sent',
    ],
  },
  {
    icon: FileText, title: 'Offer Routing Workflow', trigger: 'Offer created/received',
    steps: [
      { time: '0 min', action: 'Send SMS + Email', detail: 'Immediate alert to listing agent: "New offer - {{offer_amount}}. Review now: {{link}}"' },
      { time: '0 min', action: 'Create Task', detail: 'Internal "Offer Review" task with required POF/pre-approval attachments' },
      { time: 'Conditional', action: 'Multiple Offers', detail: 'IF multiple offers → Auto-create comparison grid doc & schedule agent meeting' },
      { time: 'Post-acceptance', action: 'Escrow Tasks', detail: 'Auto-schedule escrow opening tasks and buyer deposit follow-ups' },
    ],
    outcomes: [
      'Offer accepted → Move to Under Contract',
      'Offer countered → Notification sent + deadline timer started',
      'Offer rejected → Lead stays in Active pipeline',
    ],
  },
  {
    icon: Building, title: 'Listing Inquiry Routing', trigger: 'Portal inquiry for a specific listing',
    steps: [
      { time: '0 min', action: 'Tag Opportunity', detail: 'Apply listing ID and route to listing\'s assigned agent' },
      { time: '0 min', action: 'Send Email', detail: 'Property factsheet + seller disclosure request form sent to lead' },
      { time: '0 min', action: 'Notifications', detail: 'IF multiple co-listing agents, notify primary + backup agent' },
    ],
    outcomes: [
      'Lead responds → Move to Qualification',
      'Lead books showing → Move to Consult Scheduled',
      'No response → Enter Speed-to-Lead rescue',
    ],
  },
  {
    icon: Star, title: 'Post-Close & Reputation Expansion', trigger: 'Opportunity moved to P-001 Closed',
    steps: [
      { time: '14 Days', action: 'Send Email/SMS', detail: '"Congrats on your home! Could you leave a short review here: {{review_link}}?"', tags: ['Review-Requested'] },
      { time: '30 Days', action: 'Send Email', detail: 'Referral request with small gift/offer' },
      { time: '6 Months', action: 'Check-in', detail: 'Home Anniversary Check-in' },
      { time: '12 Months', action: 'Market Update', detail: 'Annual valuation email triggered' },
    ],
    outcomes: [
      'Review posted → Thank you + referral incentive',
      'Referral received → New lead enters pipeline',
      'Anniversary → Market update strengthens relationship',
    ],
  },
];

const WorkflowSection = () => (
  <Section>
    <SectionHeader title="Workflows & Automations" subtitle="Step-by-step automation fixing core industry bottlenecks" />
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {workflows.map((wf, i) => (
          <AccordionItem key={i} value={`wf-${i}`} className="bg-white rounded-2xl border border-[hsl(25,10%,88%)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-6 overflow-hidden">
            <AccordionTrigger className="hover:no-underline py-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'hsl(25,30%,40%,0.08)' }}>
                  <wf.icon size={16} style={{ color: warm.primary }} />
                </div>
                <span className="font-semibold text-zinc-900 text-left">{wf.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="mb-4">
                <PillBadge color="primary">Trigger: {wf.trigger}</PillBadge>
              </div>

              <div className="relative pl-8 space-y-4 mb-6">
                <div className="absolute left-3 top-1 bottom-1 w-[2px] bg-zinc-200" />
                {wf.steps.map((step, si) => (
                  <div key={si} className="relative flex items-start gap-3">
                    <div className="absolute left-[-20px] w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center z-10" style={{ borderColor: warm.primary }}>
                      <span className="text-[8px] font-bold" style={{ color: warm.primary }}>{si + 1}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <PillBadge color="gray">{step.time}</PillBadge>
                        <span className="font-semibold text-zinc-800 text-sm">{step.action}</span>
                      </div>
                      <p className="text-zinc-500 text-sm mt-0.5">{step.detail}</p>
                      {step.tags && (
                        <div className="flex gap-1.5 mt-1 flex-wrap">
                          {step.tags.map(t => <PillBadge key={t} color="primary">{t}</PillBadge>)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Outcomes</div>
                {wf.outcomes.map((o, oi) => (
                  <div key={oi} className="text-sm text-zinc-600 flex items-start gap-2 mb-1">
                    <ArrowRight size={12} className="mt-1 shrink-0" style={{ color: warm.primary }} />
                    {o}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </Section>
);

// ═══════════════════════════════════════════
// SYSTEM ARCHITECTURE
// ═══════════════════════════════════════════
type ArchSubSection = { title: string; components: string[]; automations: string[] };
type ArchItem = { icon: React.ElementType; title: string; subs: ArchSubSection[] };

const architecture: ArchItem[] = [
  {
    icon: Target, title: 'Lead Capture & Triage',
    subs: [
      { title: 'Form Logic & Routing', components: ['Client-facing intake forms', 'Role routing (buyer/seller/renter)', 'Safety COVID checklists'], automations: ['Form submissions update custom fields (Move timeframe, Neighborhood, Price range)', 'Trigger speed-to-lead workflow', 'Auto-tag source'] },
    ],
  },
  {
    icon: Calendar, title: 'Calendar & Appointment System',
    subs: [
      { title: 'Calendar Rules', components: ['Separate calendars (Emergency, Standard showings, Open houses, Photos)', 'Enforced 30-60 min travel buffers', 'Auto-blocked weekends'], automations: ['Multi-touch reminder sequences', 'Required intake for booking confirmation', 'One-click reschedule links'] },
    ],
  },
  {
    icon: FileText, title: 'Document & Contract Collection',
    subs: [
      { title: 'Buyer/Seller Requirements', components: ['Pre-approval uploads', 'Proof of Funds (POF)', 'Seller disclosures', 'E-signature integrations (DocuSign/HelloSign)'], automations: ['Multi-step conditional forms for docs', 'SMS reminders for missing documents ("We still need POF... Upload here")', 'Automated photo shoot booking'] },
    ],
  },
  {
    icon: AlertTriangle, title: 'Stall Detection & Escalation',
    subs: [
      { title: 'SLA Matrix Management', components: ['5-minute lead SLA', '10-minute appointment confirmation', '24-hour doc stalls', '3-day listing agreement stalls'], automations: ['Internal alerts to on-call agents', 'Escalation SMS to team leads', 'Auto-re-qualification tasks if 30 days pass with zero showings'] },
    ],
  },
  {
    icon: Shield, title: 'Operational Best Practices & Security',
    subs: [
      { title: 'Access & Audits', components: ['Encrypted lockbox codes', 'Secure links for property access', 'Required POF for high-value properties'], automations: ['Weekly automation log audits for missed escalations', 'Phone forwarding rotation for consistent speed-to-lead'] },
    ],
  },
  {
    icon: BarChart3, title: 'Post-Sale Revenue Expansion',
    subs: [
      { title: 'Long-Term Client Value', components: ['P-001 to P-005 Pipeline', 'Review links', 'Market valuation data', 'Move logistics resources'], automations: ['Auto-move after closing recorded', '14-day review trigger', '30-day referral ask', '12-month anniversary triggers'] },
    ],
  },
];

const ArchitectureSection = () => (
  <Section alt>
    <SectionHeader title="System Architecture & Security" subtitle="Breakdown of major system components and best practices" />
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {architecture.map((arch, i) => (
          <AccordionItem key={i} value={`arch-${i}`} className="bg-white rounded-2xl border border-[hsl(25,10%,88%)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-6 overflow-hidden">
            <AccordionTrigger className="hover:no-underline py-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'hsl(25,30%,40%,0.08)' }}>
                  <arch.icon size={16} style={{ color: warm.primary }} />
                </div>
                <span className="font-semibold text-zinc-900 text-left">{arch.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-5">
                {arch.subs.map((sub, si) => (
                  <div key={si} className="bg-zinc-50 rounded-xl p-5 border border-zinc-100">
                    <h4 className="font-semibold text-zinc-800 text-sm mb-3">{sub.title}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Components</div>
                        <ul className="space-y-1.5">
                          {sub.components.map((c, ci) => (
                            <li key={ci} className="text-sm text-zinc-700 flex items-start gap-2">
                              <Check size={12} className="mt-0.5 shrink-0" style={{ color: warm.primary }} /> {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">GHL Automations</div>
                        <ul className="space-y-1.5">
                          {sub.automations.map((a, ai) => (
                            <li key={ai} className="text-sm text-zinc-500 flex items-start gap-2">
                              <Zap size={12} className="mt-0.5 shrink-0 text-zinc-400" /> {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </Section>
);

// ═══════════════════════════════════════════
// GHL PIPELINE & FEATURES
// ═══════════════════════════════════════════
const GHLSection = () => {
  const pipelines = [
    { title: 'Active Deals', stages: ['R-001 New Lead', 'R-002 Triage', 'R-003 Consult Booked', 'R-004 Consult Done', 'R-005 Listing Prep', 'R-006 Buyer Active', 'R-007 Under Contract', 'R-008 Closed'] },
    { title: 'Post-Sale', stages: ['P-001 Closed', 'P-002 Review Requested', 'P-003 Referral Request', 'P-004 Anniversary', 'P-005 Reactivation'] },
  ];

  const features = [
    { icon: FileText, title: 'CRM Basics', items: ['Custom Fields (MLS Number, Earnest money, Urgency)', 'Pipeline stall detection rules', 'Contact-level vs. Opportunity-level fields', 'Tasks & Appointments', 'Contact Notes'] },
    { icon: MessageSquare, title: 'Communication', items: ['Missing doc SMS workflows', 'Portal lead email routing', 'Feedback forms via 2-way SMS', 'Voicemail drops', 'Chat widget'] },
    { icon: Settings, title: 'Automation', items: ['Urgency scoring logic', 'Conditional task routing to specialists', 'Escrow coordination timers', 'Stall detection rules', 'Conditional splits'] },
    { icon: Calendar, title: 'Calendars & Forms', items: ['Conditional intake forms', 'Buffer times', 'Agent blackout times', 'E-signature integrations', 'Calendar booking'] },
  ];

  return (
    <Section>
      <SectionHeader title="GHL Pipeline & Features" subtitle="Native GHL features powering the real estate system" />

      <h3 className="text-lg font-semibold text-zinc-900 mb-5 text-center">Pipeline Structure</h3>
      <div className="grid md:grid-cols-2 gap-5 mb-14">
        {pipelines.map(p => (
          <Card key={p.title}>
            <h4 className="font-semibold text-zinc-900 text-sm mb-4">{p.title}</h4>
            <div className="space-y-2">
              {p.stages.map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center shrink-0" style={{ background: 'hsl(25,30%,40%,0.08)', color: warm.primary }}>
                    {i + 1}
                  </div>
                  <span className="text-sm text-zinc-700">{s}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-zinc-900 mb-5 text-center">Native GHL Features Used</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map(f => (
          <Card key={f.title}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'hsl(25,30%,40%,0.08)' }}>
                <f.icon size={14} style={{ color: warm.primary }} />
              </div>
              <h4 className="font-semibold text-zinc-900 text-sm">{f.title}</h4>
            </div>
            <ul className="space-y-1.5">
              {f.items.map(item => (
                <li key={item} className="text-xs text-zinc-500 flex items-start gap-1.5">
                  <Check size={10} className="mt-0.5 shrink-0" style={{ color: warm.primary }} /> {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

// ═══════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════
const FooterSection = () => (
  <footer className="py-10 px-4 border-t border-[hsl(25,10%,88%)]" style={{ background: warm.bg }}>
    <p className="text-center text-sm text-zinc-400 font-medium">
      Complete GHL Automation System for Real Estate Agents & Brokerages
    </p>
  </footer>
);

// ═══════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════
const RealEstate = () => (
  <div className="min-h-screen font-outfit" style={{ background: warm.bg }}>
    <HeroSection />
    <TagSystemSection />
    <LeadJourneySection />
    <PipelineSection />
    <WorkflowSection />
    <ArchitectureSection />
    <GHLSection />
    <FooterSection />
  </div>
);

export default RealEstate;
