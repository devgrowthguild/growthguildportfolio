import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, GitFork, Tag, Map, Target, Flame, FileText,
  ArrowRight, Check, ChevronDown, MessageSquare, Calendar,
  CreditCard, Star, RefreshCw, Settings, ArrowLeft, Clock,
  Phone, Users, Briefcase, Globe, FolderOpen, Shield, BarChart3
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
    { icon: Zap, label: 'Response SLA', value: '5-10 Min' },
    { icon: GitFork, label: 'Core Workflows', value: '8' },
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
            Enterprise-Grade Insurance Automation
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mt-6 mb-3">
            Insurance <em className="not-italic" style={{ color: warm.primary, fontStyle: 'italic' }}>Agency</em>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: warm.primary }}>
            Complete GHL Operating System
          </p>
          <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto mb-12">
            Revolutionize your operations with scalable, compliance-aware automation designed for Health, Life, Auto, and Medicare (AEP & SEP) agencies.
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
  { icon: Users, title: 'Client Underwriting Fields', color: 'blue', tags: ['Date of Birth', 'Tobacco Use', 'Household ID'] },
  { icon: Shield, title: 'Routing & Compliance', color: 'orange', tags: ['Primary Vertical', 'State(s) Licensed', 'TCPA Consent'] },
  { icon: FileText, title: 'Quote Tracking', color: 'green', tags: ['Quote Type', 'Quoted Premium', 'Loss Reason'] },
  { icon: Shield, title: 'Policy Details', color: 'pink', tags: ['Carrier Selected', 'Policy Number', 'Policy Expiration'] },
  { icon: Globe, title: 'Marketing Attribution', color: 'yellow', tags: ['Lead Source / UTM', 'Preferred Comm.'] },
  { icon: BarChart3, title: 'Agent Dispositions', color: 'purple', tags: ['Call Result', 'Appointment Set', 'Win-Back Survey Status'] },
];

const TagSystemSection = () => (
  <Section alt>
    <SectionHeader title="Complete Custom Field & Tag System" subtitle="Smart Data for Complete Agency Organization and Compliance" />
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

const newBusinessPath: LeadPath[] = [
  { time: '0 min', title: 'Lead Captured', desc: 'Form, call, ad, chat, or referral enters system.' },
  { time: '0-10 min', title: 'Lead Responded', desc: 'Instant SMS/email acknowledgment and SLA call task.' },
  { time: 'Pre-Quote', title: 'Pre-Qualification', desc: 'State, age, product fit, and Medicare eligibility checked.' },
  { time: 'Quoting', title: 'Data Collection', desc: 'Required personal and coverage details collected via conditional forms.' },
  { time: 'Presentation', title: 'Quote Sent', desc: 'Agent compares carriers and delivers pricing/coverage options.' },
  { time: 'Won', title: 'Policy Bound', desc: 'Client commits, payment received, carrier submission completed.' },
];

const renewalPath: LeadPath[] = [
  { time: 'Day 1', title: 'Policy Issued / Active', desc: 'Coverage is live and policy-active tags applied.' },
  { time: 'Week 1', title: 'Post-Bind Onboarding', desc: 'Welcome sequence and policy document delivery.' },
  { time: 'Ongoing', title: 'Servicing', desc: 'Periodic check-in reminders and service request tracking.' },
  { time: '60 Days Out', title: 'Renewal Review Pending', desc: 'Renewal reminder cadence begins (60/30/7 days).' },
  { time: '14 Days Out', title: 'Stall Detection', desc: 'Escalation task triggered if no renewal action taken.' },
  { time: 'Expiration', title: 'Renewed or Cancelled', desc: 'Policy renewed to extend lifecycle, or marked lapsed.' },
];

const winBackPath: LeadPath[] = [
  { time: 'Day 1', title: 'Application Abandoned', desc: 'Application started but incomplete triggers reminder SMS/email.' },
  { time: 'Day 3', title: 'Incomplete App Tagging', desc: 'Tagged as "Application Incomplete" with internal escalation.' },
  { time: 'Pending', title: 'Quote Follow-up', desc: 'Automated cadences hit on Day 1, 3, and 7 post-quote.' },
  { time: 'Marked Lost', title: 'Win-Back Survey', desc: 'Automated SMS/Email survey asks "Who did you sign with?" and "Final premium?"' },
  { time: 'Reactivation', title: 'Expiration Tracking', desc: 'Reactivation task set for 30 days before competitor\'s policy expires.' },
];

const colorStyles: Record<string, { btn: string; tint: string; border: string; line: string; circle: string; text: string }> = {
  orange: { btn: 'bg-orange-500 text-white shadow-md', tint: 'bg-orange-50', border: 'border-orange-200/50', line: 'bg-orange-200', circle: 'border-orange-400', text: 'text-orange-500' },
  green: { btn: 'bg-green-500 text-white shadow-md', tint: 'bg-green-50', border: 'border-green-200/50', line: 'bg-green-200', circle: 'border-green-400', text: 'text-green-500' },
  blue: { btn: 'bg-blue-500 text-white shadow-md', tint: 'bg-blue-50', border: 'border-blue-200/50', line: 'bg-blue-200', circle: 'border-blue-400', text: 'text-blue-500' },
};

const tabs = [
  { id: 'new', label: '🚀 New Business Path', color: 'orange', data: newBusinessPath },
  { id: 'renewal', label: '🛡️ Active Policy & Renewal', color: 'green', data: renewalPath },
  { id: 'winback', label: '🔄 Abandonment & Win-Back', color: 'blue', data: winBackPath },
];

const LeadJourneySection = () => {
  const [activeTab, setActiveTab] = useState('new');
  const active = tabs.find(t => t.id === activeTab)!;
  const cs = colorStyles[active.color];

  return (
    <Section>
      <SectionHeader title="Client Lifecycle Paths" subtitle="Three optimized paths based on the insurance lifecycle" />

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
                      <div className="flex items-center gap-2 mb-1">
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
  const newBizPipeline = [
    { stage: 'I-001 Lead Captured', actions: ['Instant SMS, apply tags', '10-minute stall alert'] },
    { stage: 'I-002 Lead Responded', actions: ['Call task with SLA', 'Speed-to-lead reminders'] },
    { stage: 'I-003 Pre-Qualification', actions: ['Conditional routing by insurance type', 'Assignment based on license'] },
    { stage: 'I-004 Data Collection', actions: ['Conditional intake forms', 'Abandonment reminders'] },
    { stage: 'I-005 Quote Prep', actions: ['Prepare quote task', 'SLA timers for delivery'] },
    { stage: 'I-006 Quote Sent', actions: ['Quote delivery confirmation', 'Follow-up cadence'] },
    { stage: 'I-007 Policy Bound', actions: ['Carrier submission task', 'Trigger onboarding'] },
  ];

  const activePoliciesPipeline = [
    { stage: 'P-001 Policy Issued/Active', actions: ['Activation SMS/email', 'Verify carrier issuance'] },
    { stage: 'P-002 Post-Bind Onboarding', actions: ['Welcome sequence', 'Policy document delivery'] },
    { stage: 'P-003 Ongoing Servicing', actions: ['Service request tracking', 'Check-in reminders'] },
    { stage: 'P-004 Renewal Review Pending', actions: ['60/30/7 day cadence', 'Review renewal options'] },
    { stage: 'P-005 Renewed', actions: ['Policy renewed successfully'] },
    { stage: 'P-006 Cancelled / Lapsed', actions: ['Feedback capture', 'Reactivation nurture sequence'] },
  ];

  const renderPipeline = (stages: typeof newBizPipeline, colorClass: string) => (
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
      <SectionHeader title="Pipeline Architecture" subtitle="Two optimized pipelines managing new business acquisition and post-sale retention" />
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-semibold text-zinc-900 text-lg mb-5">Insurance – New Business</h3>
          {renderPipeline(newBizPipeline, 'bg-amber-800')}
        </Card>
        <Card>
          <h3 className="font-semibold text-zinc-900 text-lg mb-5">Insurance – Active Policies</h3>
          {renderPipeline(activePoliciesPipeline, 'bg-green-700')}
        </Card>
      </div>
    </Section>
  );
};

// ═══════════════════════════════════════════
// WORKFLOW BREAKDOWN
// ═══════════════════════════════════════════
type WorkflowStep = { time: string; action: string; detail: string; tags?: string[] };
type Workflow = { icon: React.ElementType; title: string; trigger: string; steps: WorkflowStep[]; outcomes?: string[] };

const workflows: Workflow[] = [
  {
    icon: Zap, title: 'Lead Capture & Speed-to-Contact', trigger: 'Opportunity enters Lead Captured',
    steps: [
      { time: 'Immediate', action: 'Instant SMS & Email', detail: 'Acknowledgment sent to lead.' },
      { time: 'Immediate', action: 'Call Task', detail: '5–10 minute SLA call task created.' },
      { time: '10 min', action: 'Internal Alert', detail: 'Alert triggered if SLA breached.' },
    ],
  },
  {
    icon: Phone, title: 'Missed Call Rescue', trigger: 'Incoming call not answered',
    steps: [
      { time: '30 sec', action: 'Send SMS', detail: 'Automatic missed call text sent to lead.' },
      { time: 'Immediate', action: 'Callback Task', detail: 'Callback task creation for agent.' },
      { time: 'Condition', action: 'Follow-Up Sequence', detail: 'Short follow-up sequence triggers if no response.' },
    ],
  },
  {
    icon: FileText, title: 'Data Collection Abandonment', trigger: 'Application started but not completed',
    steps: [
      { time: 'Day 1', action: 'Reminder', detail: 'Reminder SMS/email sent.' },
      { time: 'Day 3', action: 'Reminder', detail: 'Second reminder SMS/email sent.' },
      { time: 'Auto', action: 'Apply Tag', detail: 'Tag as "Application Incomplete" and trigger internal escalation.' },
    ],
  },
  {
    icon: FileText, title: 'Quote Follow-Up Workflow', trigger: 'Opportunity enters Decision Pending / Quote Sent',
    steps: [
      { time: 'Day 1', action: 'Automated Follow-Up', detail: 'First follow-up sent.' },
      { time: 'Day 3', action: 'Automated Follow-Up', detail: 'Second follow-up sent.' },
      { time: 'Day 7', action: 'Automated Follow-Up', detail: 'Final follow-up sent.' },
      { time: 'Rule', action: 'Auto-Stop', detail: 'Auto-stop on reply or stage change, generate agent task reminders.' },
    ],
  },
  {
    icon: Shield, title: 'Policy Bound → Onboarding', trigger: 'Opportunity moves to Policy Issued / Active',
    steps: [
      { time: 'Immediate', action: 'Confirmation', detail: 'Policy confirmation SMS/email sent.' },
      { time: 'Workflow', action: 'Welcome Sequence', detail: 'Welcome sequence initiated.' },
      { time: 'Task', action: 'Onboarding Checklist', detail: 'Internal checklist task created for onboarding.' },
    ],
  },
  {
    icon: RefreshCw, title: 'Renewal Reminder & Escalation', trigger: 'Renewal date approaching (60 days)',
    steps: [
      { time: 'Day 60', action: 'Renewal Reminder', detail: 'First renewal reminder sent.' },
      { time: 'Day 30', action: 'Renewal Reminder', detail: 'Second renewal reminder sent.' },
      { time: 'Day 7', action: 'Final Reminder', detail: 'Final renewal reminder sent.' },
      { time: 'Task', action: 'Escalation', detail: 'Internal renewal review task; escalation triggers if no action taken.' },
    ],
  },
];

const WorkflowSection = () => (
  <Section>
    <SectionHeader title="Core Automations & Workflows" subtitle="Pipeline-stage driven logic fixing core bottlenecks" />
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
                      <p className="text-zinc-500 text-sm mt-1">{step.detail}</p>
                      {step.tags && (
                        <div className="flex gap-1.5 mt-1 flex-wrap">
                          {step.tags.map(t => <PillBadge key={t} color="primary">{t}</PillBadge>)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {wf.outcomes && (
                <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Outcomes</div>
                  {wf.outcomes.map((o, oi) => (
                    <div key={oi} className="text-sm text-zinc-600 flex items-start gap-2 mb-1">
                      <ArrowRight size={12} className="mt-1 shrink-0" style={{ color: warm.primary }} />
                      {o}
                    </div>
                  ))}
                </div>
              )}
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
    icon: Target, title: 'Intake & Pre-Qualification Forms',
    subs: [
      { title: 'Master Intake Logic', components: ['Step 1: Core info (Name, DOB, State)', 'Step 2: Conditional logic for Auto, Health/Life, Medicare', 'Step 3: Declarations Page upload'], automations: ['Captures data and routes by insurance type', 'Ensures agent assigned possesses correct state license', 'Urgency scoring based on timeline'] },
    ],
  },
  {
    icon: Calendar, title: 'Segmented Calendar System',
    subs: [
      { title: 'Priority Scheduling', components: ['New Quote Consultation calendar', 'Annual Policy Review calendar', 'Medicare AEP Priority calendar'], automations: ['15-minute post-call buffers', 'Automated sequence at 24h, 4h, and 15m prior', 'Intake completion required 2 hours before'] },
    ],
  },
  {
    icon: Shield, title: 'Compliance & Auditing',
    subs: [
      { title: 'Medicare & TCPA', components: ['Medicare Scope of Appointment (SOA)', 'TCPA Consent boolean'], automations: ['Captures digital signature 48 hours prior to appointment', 'Stores PDF in contact record for CMS audit protection'] },
    ],
  },
  {
    icon: Phone, title: 'Agent Disposition & Updating',
    subs: [
      { title: 'Internal Call Forms', components: ['Agent "Call Disposition" Form', 'Captures Call Result, Appointment Set status, Notes'], automations: ['Updates CRM without manual typing', 'Triggers Appointment Confirmation sequence if marked yes'] },
    ],
  },
  {
    icon: Settings, title: 'Post-Sale Servicing',
    subs: [
      { title: 'Client Requests', components: ['"Service / Endorsement" Form', 'Request Type (Billing, Claim) and uploads'], automations: ['Routes immediately to Account Manager or Admin', 'Prevents cluttering the sales pipeline'] },
    ],
  },
  {
    icon: RefreshCw, title: 'Retention & Win-Back Tracking',
    subs: [
      { title: 'Competitor Monitoring', components: ['"Win-Back" Survey tracking competitor chosen', 'Final premium captured'], automations: ['Sets Reactivation Task for agent', 'Triggers 30 days before competitor\'s policy expires'] },
    ],
  },
];

const ArchitectureSection = () => (
  <Section alt>
    <SectionHeader title="System Architecture" subtitle="Complete breakdown of forms, calendars, and compliance routing" />
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
    { title: 'New Business', stages: ['I-001 Lead Captured', 'I-002 Responded', 'I-003 Pre-Qual', 'I-004 Data Collection', 'I-005 Quote Prep', 'I-006 Quote Sent', 'I-007 Policy Bound'] },
    { title: 'Active Policies', stages: ['P-001 Policy Issued', 'P-002 Onboarding', 'P-003 Servicing', 'P-004 Renewal Pending', 'P-005 Renewed', 'P-006 Cancelled'] },
  ];

  const features = [
    { icon: FileText, title: 'CRM Basics', items: ['Custom Fields (Tobacco Use, Policy Expiration, Quoted Premium)', 'State-Licensed Round Robin Routing', 'Document tracking'] },
    { icon: MessageSquare, title: 'Communication', items: ['Dynamic SMS/Email templates', 'Welcome sequences', 'Declines and quote follow-ups'] },
    { icon: Settings, title: 'Automation', items: ['60/30/7 day date-based triggers', '5-10 min SLA timers', 'Stall detection (14-day renewal stall)'] },
    { icon: CreditCard, title: 'Calendars & Forms', items: ['Conditional logic intake forms', 'Document upload fields (Declarations page)', 'One-click reschedule links'] },
  ];

  return (
    <Section>
      <SectionHeader title="GHL Pipeline & Features" subtitle="Native GHL features powering the agency automation" />

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
      Complete GHL Automation System for Insurance Agencies
    </p>
  </footer>
);

// ═══════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════
const Insurance = () => (
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

export default Insurance;
