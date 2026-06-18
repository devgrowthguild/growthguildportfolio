import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, GitFork, Tag, Map, Target, Flame, Heart, FileText,
  ArrowRight, Check, ChevronDown, MessageSquare, Calendar,
  CreditCard, Star, RefreshCw, Settings, ArrowLeft, Clock,
  Phone, Users, Briefcase, Globe, FolderOpen, Dumbbell
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
    red: 'bg-red-100 text-red-700 border-red-200',
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
    { icon: Zap, label: 'Response SLA', value: '<5 Min' },
    { icon: GitFork, label: 'Core Workflows', value: '4' },
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
            Enterprise-Grade Fitness Automation
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mt-6 mb-3">
            Fitness & Sports <em className="not-italic" style={{ color: warm.primary, fontStyle: 'italic' }}>Center</em>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: warm.primary }}>
            Complete GHL Operating System
          </p>
          <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto mb-12">
            Revolutionize your operations with end-to-end automation for Gyms, Health Clubs, Yoga Studios, CrossFit, and Martial Arts schools.
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
  { icon: Target, title: 'Fitness Profile Fields', color: 'blue', tags: ['Fitness Goal', 'Current Activity', 'Current/Past Gym'] },
  { icon: Flame, title: 'Urgency & Deadlines', color: 'orange', tags: ['Urgency Level', 'Goal Deadline'] },
  { icon: Heart, title: 'Medical & Safety', color: 'red', tags: ['Injuries Involved (Yes/No)'] },
  { icon: FileText, title: 'Opportunity Status', color: 'yellow', tags: ['Trial Outcome', 'Waiver Status'] },
  { icon: Briefcase, title: 'Management Action', color: 'purple', tags: ['Manager Decision (Acceptance)', 'Membership Paid'] },
  { icon: Globe, title: 'Source Tags', color: 'green', tags: ['Web Form', 'Social Media Ad', 'Walk-in'] },
];

const TagSystemSection = () => (
  <Section alt>
    <SectionHeader title="Complete Tag & Custom Field System" subtitle="Smart Data for Complete Member Organization" />
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

const newMemberPath: LeadPath[] = [
  { time: '0 min', title: 'Initial Inquiry', desc: 'Web form, social ad, or walk-in' },
  { time: '0-5 min', title: 'Auto-Response', desc: 'Instant SMS + email sent with booking link' },
  { time: 'Pre-Trial', title: 'Pre-Qualification', desc: 'Tag fitness type, assign trainer' },
  { time: 'Scheduled', title: 'Trial Reminders', desc: 'Multi-channel sequence (24h, 3h, 1h)' },
  { time: 'Post-Trial', title: 'Waiver & Docs', desc: 'Collect liability waivers and health history' },
  { time: 'Review', title: 'Manager Clearance', desc: 'Verification of waivers and contracts' },
  { time: 'Accepted', title: 'Membership Payment', desc: 'Agreement signed and initial payment' },
  { time: 'In Progress', title: 'Active Training', desc: 'Regular attendance and active classes' },
];

const rescuePath: LeadPath[] = [
  { time: '0 min', title: 'Intake Started, Not Submitted', desc: 'Client abandons the digital waiver/form' },
  { time: '1 Hour', title: 'First Reminder', desc: '1h SMS reminder sent' },
  { time: '24 Hours', title: 'Second Reminder', desc: '24h email reminder sent' },
  { time: '3 Days', title: 'Final Reminder', desc: '3-day final reminder + "Intake Abandoned" tag applied' },
  { time: 'No-Show', title: 'Trial Missed', desc: 'If trial is missed, SMS apology sent' },
  { time: 'Reschedule', title: 'One-time Link', desc: 'Reschedule link sent with internal call task' },
];

const postMemberPath: LeadPath[] = [
  { time: 'Day 0', title: 'Membership Active', desc: 'Successful onboarding completed' },
  { time: 'Day 14', title: 'Review Requested', desc: 'Automated review pipeline triggers' },
  { time: 'Day 30', title: 'Referral Request', desc: 'Ask for referrals to grow community' },
  { time: 'Month 6', title: 'Progress Check-in', desc: 'Goal check-in initiated' },
  { time: 'Month 12', title: 'Annual Check-in', desc: '12-month goal check-in and renewal cycle' },
  { time: 'Stalled', title: 'Churn Prevention', desc: 'Alerts trigger if no check-in for 14 days' },
];

const colorStyles: Record<string, { btn: string; tint: string; border: string; line: string; circle: string; text: string }> = {
  orange: { btn: 'bg-orange-500 text-white shadow-md', tint: 'bg-orange-50', border: 'border-orange-200/50', line: 'bg-orange-200', circle: 'border-orange-400', text: 'text-orange-500' },
  yellow: { btn: 'bg-yellow-500 text-white shadow-md', tint: 'bg-yellow-50', border: 'border-yellow-200/50', line: 'bg-yellow-200', circle: 'border-yellow-400', text: 'text-yellow-500' },
  blue: { btn: 'bg-blue-500 text-white shadow-md', tint: 'bg-blue-50', border: 'border-blue-200/50', line: 'bg-blue-200', circle: 'border-blue-400', text: 'text-blue-500' },
};

const tabs = [
  { id: 'new', label: '🏋️ New Member Path', color: 'orange', data: newMemberPath },
  { id: 'rescue', label: '🚨 Abandonment & Rescue', color: 'yellow', data: rescuePath },
  { id: 'post', label: '🔄 Post-Membership', color: 'blue', data: postMemberPath },
];

const LeadJourneySection = () => {
  const [activeTab, setActiveTab] = useState('new');
  const active = tabs.find(t => t.id === activeTab)!;
  const cs = colorStyles[active.color];

  return (
    <Section>
      <SectionHeader title="Member Lifecycle Paths" subtitle="Three optimized paths based on intent and engagement" />

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
    { stage: 'S-001 Inquiry', actions: ['Instant SMS/email', '15-minute stall alert'], tags: [] },
    { stage: 'S-002 Trial Pre-Qual', actions: ['Tag fitness type', 'Trainer assignment task', '12-hour stall alert'], tags: [] },
    { stage: 'S-003 Scheduled', actions: ['Confirmation sent', 'Reminders (24h, 3h, 1h)'], tags: [] },
    { stage: 'S-004 Completed', actions: ['Outcome form', 'Auto-move based on selection'], tags: [] },
    { stage: 'S-005 Docs Collection', actions: ['Send checklist', '48h reminder loop', '5-day stall escalation task'], tags: [] },
    { stage: 'S-006 Manager Review', actions: ['Profile review', 'Accept/Decline decision dropdown'], tags: [] },
    { stage: 'S-007 Accepted', actions: ['Invoice/contract sent', '72-hour unpaid stall follow-up'], tags: [] },
    { stage: 'S-008 In Progress', actions: ['Active service delivery', 'Class/event reminders'], tags: [] },
    { stage: 'S-009 Closed', actions: ['Final resolution (Won - Active Member or Lost - Disqualified)'], tags: [] },
  ];

  const postPipeline = [
    { stage: 'P-001 Active', actions: ['Successful onboarding completed'], tags: [] },
    { stage: 'P-002 Review Requested', actions: ['Triggered at 14 days'], tags: [] },
    { stage: 'P-003 Referral Request', actions: ['Triggered at 30 days'], tags: [] },
    { stage: 'P-004 Progress Check-in', actions: ['Triggered at 6 & 12 months'], tags: [] },
    { stage: 'P-005 Reactivation', actions: ['Client returns or re-engages'], tags: [] },
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
          <h3 className="font-semibold text-zinc-900 text-lg mb-5">Fitness & Sports – New Member Acquisition</h3>
          {renderPipeline(activePipeline, 'bg-amber-800')}
        </Card>
        <Card>
          <h3 className="font-semibold text-zinc-900 text-lg mb-5">Fitness & Sports – Post Membership</h3>
          {renderPipeline(postPipeline, 'bg-green-700')}
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
    icon: Zap, title: 'New Inquiry Workflow', trigger: 'Opportunity created in S-001',
    steps: [
      { time: 'Immediate', action: 'Send SMS', detail: '"We understand how important your fitness journey is…"' },
      { time: 'Immediate', action: 'Send Email', detail: 'Email with Intake/Booking link' },
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
    icon: FileText, title: 'Intake Abandonment Workflow', trigger: 'Intake/Waiver form started, not submitted',
    steps: [
      { time: '1 hour', action: 'Send SMS', detail: 'SMS reminder to complete waiver' },
      { time: '24 hours', action: 'Send Email', detail: 'Email reminder sent' },
      { time: '3 days', action: 'Final Reminder', detail: 'Final follow-up sent' },
      { time: 'Auto', action: 'Apply Tag', detail: '"Intake Abandoned" tag applied' },
    ],
    outcomes: [
      'Client completes waiver → Resume normal flow',
      'No completion → Tagged and archived',
    ],
  },
  {
    icon: Calendar, title: 'Trial No-Show Workflow', trigger: 'Appointment marked "No Show"',
    steps: [
      { time: 'Immediate', action: 'Send SMS', detail: 'Apology + reschedule link sent' },
      { time: 'Immediate', action: 'Create Task', detail: 'Internal task to call client' },
      { time: 'Rule', action: 'Enforce Limit', detail: 'One-time reschedule limit enforced' },
    ],
    outcomes: [
      'Client reschedules → New trial session created',
      'No reschedule → Move to nurture sequence',
    ],
  },
];

const WorkflowSection = () => (
  <Section>
    <SectionHeader title="Core Automations & Workflows" subtitle="Fixing core bottlenecks: lead ghosting, trial no-shows, and incomplete waivers" />
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
      { title: 'Multi-Step Conditional Forms', components: ['Fitness goals capture', 'Health/safety questions', 'Injury details', 'Timeline urgency'], automations: ['Form data for qualification', 'Conditional routing based on injury alerts', 'Trainer assignment logic'] },
    ],
  },
  {
    icon: Calendar, title: 'Calendar & Appointment System',
    subs: [
      { title: 'Scheduling Logic', components: ['Personal Training Assessments calendar', 'Standard Class Trials calendar', 'Trainer-specific availability', 'Buffer times enforced'], automations: ['Multi-touch reminders', 'Waiver completion required for confirmation', 'One-click reschedule links'] },
    ],
  },
  {
    icon: FolderOpen, title: 'Document & Waiver Collection',
    subs: [
      { title: 'Liability & Medical Info', components: ['Multi-step conditional digital forms', 'Document checklists'], automations: ['Auto-sends checklist', '48h reminder loop', 'Internal tasks created', '5-day stall escalation task if incomplete'] },
    ],
  },
  {
    icon: Users, title: 'Manager Review & Acceptance',
    subs: [
      { title: 'Internal Decisioning', components: ['Internal task "Review Member Profile"', 'Dropdown for Accept/Decline/More Info'], automations: ['Membership Accepted email sent ("Welcome to the Family!")', 'Declined notification with alternative suggestions'] },
    ],
  },
  {
    icon: CreditCard, title: 'Membership & Invoicing',
    subs: [
      { title: 'Revenue Gate', components: ['Membership Paid (Yes/No) Custom Field'], automations: ['Membership invoice/contract sent', 'Payment reminders', '72-hour unpaid follow-up SMS + staff task'] },
    ],
  },
  {
    icon: Star, title: 'Retention & Reputation Management',
    subs: [
      { title: 'Community Expansion', components: ['P-001 to P-005 Pipeline stages', 'Review links', 'Goal check-in schedules'], automations: ['Stalled Member alerts if no check-in for 14 days', 'Review request at 14 days (after 5th check-in)', 'Referral ask at 30 days', 'Goal check-ins at 6 & 12 months'] },
    ],
  },
];

const ArchitectureSection = () => (
  <Section alt>
    <SectionHeader title="System Architecture" subtitle="Enterprise-grade logic for fitness center operations" />
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
    { title: 'New Member Acquisition', stages: ['S-001 Inquiry', 'S-002 Trial Pre-Qual', 'S-003 Scheduled', 'S-004 Completed', 'S-005 Docs Collection', 'S-006 Review', 'S-007 Accepted', 'S-008 In Progress', 'S-009 Closed'] },
    { title: 'Post Membership', stages: ['P-001 Active', 'P-002 Review Requested', 'P-003 Referral Request', 'P-004 Progress Check-in', 'P-005 Reactivation'] },
  ];

  const features = [
    { icon: FileText, title: 'CRM Basics', items: ['Custom Fields (Fitness Goal, Current Activity)', 'Tagging (Injuries, Intake Abandoned)', 'Trainer/Manager routing tasks'] },
    { icon: MessageSquare, title: 'Communication', items: ['SMS/Email templates for Trial Confirmations', 'Waiver Reminders', '"Welcome to the Family" acceptance'] },
    { icon: Settings, title: 'Automation', items: ['SLA timers (5-min lead response, 5-day document stalls)', 'Missed-Call rescue workflows', 'Abandoned Intake loops'] },
    { icon: CreditCard, title: 'Payments & Forms', items: ['Conditional intake digital waivers', 'Membership invoicing', 'Assessment calendar booking rules'] },
  ];

  return (
    <Section>
      <SectionHeader title="GHL Pipeline & Features" subtitle="Native GHL features powering the gym's automation" />

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
      Complete GHL Operating System for Fitness & Sports Centers
    </p>
  </footer>
);

// ═══════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════
const Fitness = () => (
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

export default Fitness;
