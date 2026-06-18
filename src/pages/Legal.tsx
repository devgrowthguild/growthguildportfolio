import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, GitFork, Tag, Map, Scale, Flame, Users, Heart, Calendar, FileText,
  ArrowRight, Check, ChevronDown, Shield, MessageSquare, CreditCard, Star,
  RefreshCw, Target, Settings, ArrowLeft, Clock, Phone, Briefcase, AlertTriangle,
  FolderOpen, BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    { icon: Zap, label: 'Response SLA', value: '<15 Min' },
    { icon: GitFork, label: 'Core Workflows', value: '5' },
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
            Enterprise-Grade Legal Automation
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mt-6 mb-3">
            Legal Law <em className="not-italic" style={{ color: warm.primary, fontStyle: 'italic' }}>Firm</em>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: warm.primary }}>
            Complete GHL Operating System
          </p>
          <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto mb-12">
            Revolutionize your firm's operations with end-to-end automation for Divorce, Child Custody, Support, and Post-Judgment Modification cases.
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
  { icon: Scale, title: 'Case Type Fields', color: 'blue', tags: ['Divorce', 'Custody', 'Support (Routing)'] },
  { icon: Flame, title: 'Urgency Levels', color: 'orange', tags: ['Drives SLA', 'Qualification Priority'] },
  { icon: Users, title: 'Client Info Fields', color: 'green', tags: ['Marital Status', 'Children Involved (Yes/No)'] },
  { icon: Calendar, title: 'Legal Details Fields', color: 'pink', tags: ['Court Deadline (Date)', 'Opposing Counsel (Text)'] },
  { icon: FileText, title: 'Opportunity Status', color: 'yellow', tags: ['Consult Outcome', 'Docs Status'] },
  { icon: Briefcase, title: 'Attorney Actions', color: 'purple', tags: ['Attorney Decision (Accept/Decline)', 'Retainer Paid (Yes/No)'] },
];

const TagSystemSection = () => (
  <Section alt>
    <SectionHeader title="Complete Tag & Custom Field System" subtitle="Smart Data for Complete Case Organization" />
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

const activeCasePath: LeadPath[] = [
  { time: '0 min', title: 'Initial Inquiry', desc: 'Form submission, call, or chat triggers opportunity' },
  { time: '0-15 min', title: 'Auto-Response & Intake', desc: 'Instant SMS/email sent with intake link' },
  { time: '12-24 hours', title: 'Consult Scheduled', desc: 'Auto calendar reminders sent (24h, 3h, 1h)' },
  { time: 'Post-Consult', title: 'Document Collection', desc: 'Financial and marriage info requested' },
  { time: 'Attorney Review', title: 'Case Viability', desc: 'Attorney decides to accept or decline' },
  { time: 'Case Accepted', title: 'Retainer Paid', desc: 'Retainer invoice sent, revenue gated' },
  { time: 'In Progress', title: 'Active Legal Work', desc: 'Status updates and court date reminders' },
  { time: 'Case Closed', title: 'Final Order', desc: 'Final order or settlement reached' },
];

const rescuePath: LeadPath[] = [
  { time: '0 min', title: 'Intake Started, Not Submitted', desc: 'Client abandons the form' },
  { time: '1 Hour', title: 'First Reminder', desc: 'SMS reminder sent' },
  { time: '24 Hours', title: 'Second Reminder', desc: 'Email reminder sent' },
  { time: '3 Days', title: 'Final Reminder', desc: 'Final follow-up + "Intake Abandoned" tag applied' },
  { time: 'No-Show', title: 'Appointment Missed', desc: 'If consult is missed, SMS apology sent' },
  { time: 'Reschedule', title: 'One-time Link', desc: 'Reschedule link sent with internal task' },
];

const nurturePath: LeadPath[] = [
  { time: 'Day 0', title: 'Disqualified or Not Ready', desc: 'Case declined or client not ready' },
  { time: 'Day 7', title: 'Initial Nurture Check-in', desc: 'Auto-stops on reply' },
  { time: 'Day 21', title: 'Nurture Sequence', desc: 'Ongoing educational content' },
  { time: 'Day 45', title: 'Nurture Sequence', desc: 'Continued engagement' },
  { time: 'Day 90', title: 'Nurture Sequence', desc: 'Mid-term check-in' },
  { time: 'Day 180', title: 'Nurture Sequence', desc: 'Re-qualification attempt' },
  { time: 'Day 360', title: 'Annual Check-in', desc: 'Final automated attempt' },
];

const colorStyles: Record<string, { btn: string; tint: string; border: string; line: string; circle: string; text: string }> = {
  orange: { btn: 'bg-orange-500 text-white shadow-md', tint: 'bg-orange-50', border: 'border-orange-200/50', line: 'bg-orange-200', circle: 'border-orange-400', text: 'text-orange-500' },
  yellow: { btn: 'bg-yellow-500 text-white shadow-md', tint: 'bg-yellow-50', border: 'border-yellow-200/50', line: 'bg-yellow-200', circle: 'border-yellow-400', text: 'text-yellow-500' },
  blue: { btn: 'bg-blue-500 text-white shadow-md', tint: 'bg-blue-50', border: 'border-blue-200/50', line: 'bg-blue-200', circle: 'border-blue-400', text: 'text-blue-500' },
};

const tabs = [
  { id: 'active', label: '⚖️ Active Case Path', color: 'orange', data: activeCasePath },
  { id: 'rescue', label: '🚨 Abandonment & Rescue', color: 'yellow', data: rescuePath },
  { id: 'nurture', label: '❄️ Long-Term Nurture', color: 'blue', data: nurturePath },
];

const LeadJourneySection = () => {
  const [activeTab, setActiveTab] = useState('active');
  const active = tabs.find(t => t.id === activeTab)!;
  const cs = colorStyles[active.color];

  return (
    <Section>
      <SectionHeader title="Client Lifecycle Paths" subtitle="Three optimized paths based on urgency and case viability" />

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
    { stage: 'F-001 Inquiry', actions: ['Instant SMS/email', '15-minute stall alert'], tags: [] },
    { stage: 'F-002 Pre-Qual', actions: ['Tag case type', 'Routing task', '12-hour stall alert'], tags: [] },
    { stage: 'F-003 Scheduled', actions: ['Confirmation sent', 'Reminders (24h, 3h, 1h)'], tags: [] },
    { stage: 'F-004 Completed', actions: ['Outcome form', 'Auto-move to Docs or Pending'], tags: [] },
    { stage: 'F-005 Docs Collection', actions: ['Send checklist', '48h reminder loop', '5-day stall escalation'], tags: [] },
    { stage: 'F-006 Attorney Review', actions: ['Legal clearance', 'Accept/Decline decision'], tags: [] },
    { stage: 'F-007 Accepted', actions: ['Retainer invoice', '72-hour unpaid stall follow-up'], tags: [] },
    { stage: 'F-008 In Progress', actions: ['Active service', 'Court reminders'], tags: [] },
    { stage: 'F-009 Closed', actions: ['Final resolution (Won or Lost/Disqualified)'], tags: [] },
  ];

  const postCasePipeline = [
    { stage: 'P-001 Closed', actions: ['Case wrap-up', 'Client file archived'], tags: [] },
    { stage: 'P-002 Review Requested', actions: ['Triggered at 14 days'], tags: [] },
    { stage: 'P-003 Referral Request', actions: ['Triggered at 30 days'], tags: [] },
    { stage: 'P-004 Future Modifications', actions: ['Check-ins at 6 & 12 months'], tags: [] },
    { stage: 'P-005 Reactivation', actions: ['Client returns for new matter'], tags: [] },
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
      <SectionHeader title="Pipeline Architecture" subtitle="Explicit stage ownership, forced progression rules, and stall detection" />
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-semibold text-zinc-900 text-lg mb-5">Family Law - Active Cases</h3>
          {renderPipeline(activePipeline, 'bg-amber-800')}
        </Card>
        <Card>
          <h3 className="font-semibold text-zinc-900 text-lg mb-5">Family Law - Post Case</h3>
          {renderPipeline(postCasePipeline, 'bg-green-700')}
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
    icon: Zap, title: 'New Inquiry Workflow', trigger: 'Opportunity created in F-001',
    steps: [
      { time: 'Immediate', action: 'Send SMS', detail: 'Reassurance message to new lead' },
      { time: 'Immediate', action: 'Send Email', detail: 'Email with Intake link' },
      { time: 'Immediate', action: 'Create Task', detail: '"Call Lead Now" (5-min SLA)' },
    ],
    outcomes: [
      'Call connects → Move to Pre-Qual',
      'No answer → Triggers Missed Call Rescue Logic',
    ],
  },
  {
    icon: Phone, title: 'Missed Call Rescue Workflow', trigger: 'Incoming call → no answer',
    steps: [
      { time: '30 sec', action: 'Send SMS', detail: 'Automatic missed call text sent' },
      { time: 'Wait', action: 'Send Email', detail: 'Follow-up email sent' },
      { time: 'Immediate', action: 'Create Task', detail: 'Callback task created' },
      { time: '24 hours', action: 'Check Response', detail: 'IF NO → Begin 7-day rescue sequence' },
    ],
    outcomes: [
      'Client responds → Resume intake flow',
      'No response after 7 days → Move to nurture',
    ],
  },
  {
    icon: FileText, title: 'Intake Abandonment Workflow', trigger: 'Intake form started, not submitted',
    steps: [
      { time: '1 hour', action: 'Send SMS', detail: 'SMS reminder to complete intake' },
      { time: '24 hours', action: 'Send Email', detail: 'Email reminder sent' },
      { time: '3 days', action: 'Final Reminder', detail: 'Final follow-up sent' },
      { time: 'Auto', action: 'Apply Tag', detail: '"Intake Abandoned" tag applied' },
    ],
    outcomes: [
      'Client completes intake → Resume normal flow',
      'No completion → Tagged and archived',
    ],
  },
  {
    icon: Calendar, title: 'Consultation No-Show Workflow', trigger: 'Appointment marked "No Show"',
    steps: [
      { time: 'Immediate', action: 'Send SMS', detail: 'Apology + reschedule link sent' },
      { time: 'Immediate', action: 'Create Task', detail: 'Internal task to call client' },
      { time: 'Rule', action: 'Enforce Limit', detail: 'One-time reschedule limit enforced' },
    ],
    outcomes: [
      'Client reschedules → New appointment created',
      'No reschedule → Move to nurture sequence',
    ],
  },
  {
    icon: RefreshCw, title: 'Long-Term Nurture (6-12 Months)', trigger: 'Case marked Disqualified, Lost, or Not Ready',
    steps: [
      { time: 'Day 7', action: 'Send Check-in', detail: 'Initial nurture check-in' },
      { time: 'Day 21/45/90', action: 'Nurture Sequences', detail: 'Ongoing nurture content sent' },
      { time: 'Day 180/360', action: 'Follow-ups', detail: 'Mid-year and annual follow-ups' },
      { time: 'Rule', action: 'Auto-Stop', detail: 'Auto-stops on any reply to prevent sensitive overlap' },
    ],
    outcomes: [
      'Client re-engages → Return to intake workflow',
      'No engagement after 12 months → Archive',
    ],
  },
];

const WorkflowSection = () => (
  <Section>
    <SectionHeader title="Core Automations & Workflows" subtitle="Fixing core bottlenecks: missed calls, incomplete intake, and stalled cases" />
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
    icon: Target, title: 'Intake & Pre-Qualification',
    subs: [
      { title: 'Multi-Step Conditional Forms', components: ['Case description capture', 'Immediate safety questions', 'Children details', 'Existing orders', 'Timeline urgency'], automations: ['Form data for qualification', 'Attorney review routing', 'Urgency scoring logic'] },
    ],
  },
  {
    icon: Calendar, title: 'Calendar & Appointment System',
    subs: [
      { title: 'Scheduling Logic', components: ['Emergency consult calendar', 'Standard consult calendar', 'Attorney-specific availability', 'Buffer times enforced'], automations: ['Multi-touch reminders (24h, 3h, 1h)', 'Intake completion required for confirmation', 'One-click reschedule links'] },
    ],
  },
  {
    icon: FolderOpen, title: 'Document Collection Engine',
    subs: [
      { title: 'Client Uploads', components: ['Multi-file upload forms', 'Document checklists'], automations: ['Auto-sends checklist via SMS/Email', '48h reminder loop', 'Internal tasks created', '5-day stall escalation if incomplete'] },
    ],
  },
  {
    icon: Scale, title: 'Attorney Review & Acceptance',
    subs: [
      { title: 'Internal Decisioning', components: ['Internal task "Attorney Review Case"', 'Dropdown for Accept/Decline/More Info'], automations: ['Case Accepted email sent', 'Case Declined email with alternate counsel suggestion'] },
    ],
  },
  {
    icon: CreditCard, title: 'Retainer & Invoicing',
    subs: [
      { title: 'Revenue Gate', components: ['Retainer Paid (Yes/No) Custom Field'], automations: ['Retainer invoice sent', 'Payment reminders', '72-hour unpaid follow-up task', '"Payment received" trigger'] },
    ],
  },
  {
    icon: Star, title: 'Post-Case & Reputation Management',
    subs: [
      { title: 'Revenue Expansion', components: ['P-001 to P-005 Pipeline stages', 'Review links', 'Post-judgment modifications'], automations: ['Automated review pipeline', 'Review request at 14 days', 'Referral ask at 30 days', 'Post-judgment check-ins at 6 & 12 months'] },
    ],
  },
];

const ArchitectureSection = () => (
  <Section alt>
    <SectionHeader title="System Architecture" subtitle="Enterprise-grade logic for family law operations" />
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
    { title: 'Active Cases', stages: ['F-001 Inquiry', 'F-002 Pre-Qual', 'F-003 Scheduled', 'F-004 Completed', 'F-005 Docs Collection', 'F-006 Review', 'F-007 Accepted', 'F-008 In Progress', 'F-009 Closed'] },
    { title: 'Post Case', stages: ['P-001 Closed', 'P-002 Review Requested', 'P-003 Referral Request', 'P-004 Modifications', 'P-005 Reactivation'] },
  ];

  const features = [
    { icon: FileText, title: 'CRM Basics', items: ['Custom Fields (Opposing Counsel, Court Deadline)', 'Tagging (Urgency, Lead Source)', 'Contact/Opportunity routing'] },
    { icon: MessageSquare, title: 'Communication', items: ['SMS/Email templates for Consultations', 'Document Reminders', 'Case Acceptance/Decline notifications'] },
    { icon: Settings, title: 'Automation', items: ['SLA timers (15m, 5-day stall alerts)', 'Missed-Call text workflows', 'Abandoned Intake loops'] },
    { icon: CreditCard, title: 'Payments & Forms', items: ['Conditional intake forms (safety/children logic)', 'Retainer invoicing', 'Multi-file document uploads'] },
  ];

  return (
    <Section>
      <SectionHeader title="GHL Pipeline & Features" subtitle="Native GHL features powering the firm's automation" />

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
      Complete GHL Operating System for Family Law Firms
    </p>
  </footer>
);

// ═══════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════
const Legal = () => (
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

export default Legal;
