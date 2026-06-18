import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, GitFork, Tag, Map, ArrowRight, Check, ChevronDown,
  Shield, MessageSquare, Calendar, CreditCard, Star, RefreshCw,
  Target, Settings, ArrowLeft, Clock, Phone, FileText, Heart,
  Stethoscope, ClipboardList, UserCheck, Activity, Syringe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

// ─── Design tokens ───
const clinical = {
  bg: 'hsl(210, 20%, 98%)',
  primary: 'hsl(210, 40%, 40%)',
  muted: 'hsl(210, 10%, 90%)',
  accent: 'hsl(190, 45%, 50%)',
  border: 'hsl(210, 15%, 88%)',
};

const PillBadge = ({ children, color = 'gray' }: { children: React.ReactNode; color?: string }) => {
  const colors: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    orange: 'bg-orange-100 text-orange-700 border-orange-200',
    green: 'bg-green-100 text-green-700 border-green-200',
    pink: 'bg-pink-100 text-pink-700 border-pink-200',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    teal: 'bg-teal-100 text-teal-700 border-teal-200',
    gray: 'bg-zinc-100 text-zinc-600 border-zinc-200',
    primary: 'bg-blue-800/10 text-blue-800 border-blue-800/20',
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${colors[color] || colors.gray}`}>
      {children}
    </span>
  );
};

const Section = ({ children, alt = false, className = '' }: { children: React.ReactNode; alt?: boolean; className?: string }) => (
  <section className={`py-20 px-4 ${alt ? 'bg-[hsl(210,10%,95%)]' : 'bg-[hsl(210,20%,98%)]'} ${className}`}>
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
  <div className={`bg-white rounded-2xl p-6 border border-[hsl(210,15%,88%)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

// ═══════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════
const HeroSection = () => {
  const navigate = useNavigate();
  const stats = [
    { icon: Zap, label: '5-Min Lead Triage', value: '⚡' },
    { icon: GitFork, label: '6 Clinical Workflows', value: '🔀' },
    { icon: Tag, label: '12 Pipeline Stages', value: '🏷' },
    { icon: Map, label: '2 Primary Pipelines', value: '🗺' },
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden" style={{ background: clinical.bg }}>
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors mb-8">
          <ArrowLeft size={14} /> Back to Home
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase border" style={{ background: 'hsl(210,40%,40%,0.08)', color: clinical.primary, borderColor: 'hsl(210,40%,40%,0.15)' }}>
            Secure & Scalable Clinic Automation
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mt-6 mb-3">
            Medical <em className="not-italic" style={{ color: clinical.primary, fontStyle: 'italic' }}>Practice</em>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: clinical.primary }}>
            Complete GHL Operating System
          </p>
          <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto mb-12">
            Modernize your clinic with end-to-end automation designed for MedSpas, Dental Offices, Chiropractors, and Private Healthcare Providers.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }}>
                <Card className="text-center !p-5">
                  <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: 'hsl(210,40%,40%,0.08)' }}>
                    <s.icon size={18} style={{ color: clinical.primary }} />
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
  { icon: Stethoscope, title: 'Treatment Interest', color: 'blue', tags: ['Aesthetics', 'Dental', 'Chiro', 'Wellness'] },
  { icon: Activity, title: 'Lead Urgency', color: 'orange', tags: ['Acute Pain', 'Routine', 'Consultation'] },
  { icon: ClipboardList, title: 'Intake Status', color: 'green', tags: ['Forms Pending', 'Forms Complete', 'Cleared'] },
  { icon: Calendar, title: 'Appointment Status', color: 'pink', tags: ['Booked', 'Confirmed', 'Arrived', 'No-Show'] },
  { icon: CreditCard, title: 'Financial & Insurance', color: 'yellow', tags: ['Self-Pay', 'Insured', 'Quote Sent'] },
  { icon: Target, title: 'Source Tags', color: 'purple', tags: ['Google Ads', 'Walk-In', 'Referral', 'Organic'] },
];

const TagSystemSection = () => (
  <Section alt>
    <SectionHeader title="Complete Custom Field & Tag System" subtitle="Smart Data for Patient Organization" />
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
// PATIENT JOURNEY PATHS
// ═══════════════════════════════════════════
type JourneyStep = { time: string; title: string; desc: string };

const newPatientPath: JourneyStep[] = [
  { time: '0 min', title: 'Inquiry Captured', desc: 'Lead submits consultation request or calls clinic.' },
  { time: '0-5 min', title: 'Auto-Triage', desc: 'Instant SMS/email acknowledgment with booking link.' },
  { time: 'Pre-Consult', title: 'Intake Forms', desc: 'Secure medical history and intake forms sent.' },
  { time: 'Day 1', title: 'Consult Scheduled', desc: 'Reminders sent (48h, 24h, 2h) with prep instructions.' },
  { time: 'Day Of', title: 'Arrival & Check-in', desc: 'Patient arrives, status updated to "Arrived".' },
  { time: 'Post-Consult', title: 'Treatment Plan', desc: 'Quote or treatment plan delivered securely.' },
  { time: 'Scheduled', title: 'Treatment Booked', desc: 'Patient commits to the procedure/care plan.' },
];

const noShowPath: JourneyStep[] = [
  { time: 'Day 0', title: 'Intake Abandoned', desc: 'Patient books but fails to fill out required medical forms.' },
  { time: 'Day 1-2', title: 'Form Reminders', desc: 'Automated follow-up reminding them forms are required for the visit.' },
  { time: 'Appt Time', title: 'No-Show Logged', desc: 'Patient misses the scheduled appointment.' },
  { time: '+1 Hour', title: 'Re-engagement', desc: 'Automated "We missed you" SMS with a 1-click reschedule link.' },
  { time: 'Day 3', title: 'Staff Follow-up', desc: 'Internal task created for front desk to call the patient.' },
  { time: 'Day 7', title: 'Nurture Sequence', desc: 'Moved to long-term educational drip if unresponsive.' },
];

const retentionPath: JourneyStep[] = [
  { time: 'Day 0', title: 'Treatment Completed', desc: 'Patient finishes treatment and pays.' },
  { time: 'Day 1-3', title: 'Post-Op Check-in', desc: 'Automated SMS checking on recovery/satisfaction.' },
  { time: 'Day 7', title: 'Review Request', desc: 'Automated Google/Yelp review request if feedback is positive.' },
  { time: 'Day 30', title: 'Referral Ask', desc: 'Automated prompt asking for friend/family referrals.' },
  { time: 'Month 6', title: 'Routine Recall', desc: 'Invitation for a 6-month check-up or next treatment phase.' },
  { time: 'Month 12', title: 'Annual Reactivation', desc: 'Special offers or reminders for annual clinic visits.' },
];

const colorStyles: Record<string, { btn: string; tint: string; border: string; line: string; circle: string; text: string }> = {
  blue: { btn: 'bg-blue-500 text-white shadow-md', tint: 'bg-blue-50', border: 'border-blue-200/50', line: 'bg-blue-200', circle: 'border-blue-400', text: 'text-blue-500' },
  orange: { btn: 'bg-orange-500 text-white shadow-md', tint: 'bg-orange-50', border: 'border-orange-200/50', line: 'bg-orange-200', circle: 'border-orange-400', text: 'text-orange-500' },
  teal: { btn: 'bg-teal-500 text-white shadow-md', tint: 'bg-teal-50', border: 'border-teal-200/50', line: 'bg-teal-200', circle: 'border-teal-400', text: 'text-teal-500' },
};

const journeyTabs = [
  { id: 'new', label: '🩺 New Patient Path', color: 'blue', data: newPatientPath },
  { id: 'noshow', label: '🚨 No-Show & Abandonment', color: 'orange', data: noShowPath },
  { id: 'retention', label: '🔄 Post-Care & Retention', color: 'teal', data: retentionPath },
];

const PatientJourneySection = () => {
  const [activeTab, setActiveTab] = useState('new');
  const active = journeyTabs.find(t => t.id === activeTab)!;
  const cs = colorStyles[active.color];

  return (
    <Section>
      <SectionHeader title="Patient Lifecycle Paths" subtitle="Three optimized paths for acquisition, care, and retention" />
      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        {journeyTabs.map(tab => (
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
        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
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
  const acquisitionPipeline = [
    { stage: 'M-001 New Lead', actions: ['Instant SMS, 5-minute front desk call task.'] },
    { stage: 'M-002 Triage/Pre-Qual', actions: ['Route by treatment interest, assign provider.'] },
    { stage: 'M-003 Consult Booked', actions: ['Trigger reminder sequence, auto-send intake forms.'] },
    { stage: 'M-004 Forms Complete', actions: ['Provider review task, clear for appointment.'] },
    { stage: 'M-005 Consult Done', actions: ['Internal disposition form (accepted, declined, quoting).'] },
    { stage: 'M-006 Treatment Scheduled', actions: ['Pre-op instructions sent, move to Active Care pipeline.'] },
  ];

  const carePipeline = [
    { stage: 'C-001 Treatment Active', actions: ['Track ongoing sessions or multi-step procedures.'] },
    { stage: 'C-002 Post-Care Check-in', actions: ['Automated recovery check-in sequence.'] },
    { stage: 'C-003 Review Requested', actions: ['Triggered 7 days post-treatment.'] },
    { stage: 'C-004 Routine Recall', actions: ['6-month and 12-month automated follow-ups.'] },
    { stage: 'C-005 Reactivation', actions: ['Long-term educational campaigns for dormant patients.'] },
  ];

  const renderPipeline = (stages: typeof acquisitionPipeline, colorClass: string) => (
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
      <SectionHeader title="Pipeline Architecture" subtitle="Two optimized pipelines managing patient acquisition and ongoing care" />
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-semibold text-zinc-900 text-lg mb-5">Medical – New Patient Acquisition</h3>
          {renderPipeline(acquisitionPipeline, 'bg-blue-700')}
        </Card>
        <Card>
          <h3 className="font-semibold text-zinc-900 text-lg mb-5">Medical – Active Care & Retention</h3>
          {renderPipeline(carePipeline, 'bg-teal-600')}
        </Card>
      </div>
    </Section>
  );
};

// ═══════════════════════════════════════════
// WORKFLOW BREAKDOWN
// ═══════════════════════════════════════════
type WorkflowStep = { time: string; action: string; detail: string; tags?: string[] };
type Workflow = { icon: React.ElementType; title: string; trigger: string; steps: WorkflowStep[] };

const workflows: Workflow[] = [
  {
    icon: Zap, title: 'Speed-to-Lead & Triage', trigger: 'Opportunity enters M-001 New Lead',
    steps: [
      { time: 'Immediate', action: 'Send SMS', detail: 'Send generic, non-PHI SMS acknowledgment.' },
      { time: 'Immediate', action: 'Create Task', detail: 'Front desk task created to call the lead (5-min SLA).' },
      { time: 'Conditional', action: 'Route SMS', detail: 'If lead replies, route to SMS booking bot.' },
    ],
  },
  {
    icon: ClipboardList, title: 'Automated Intake Form Chaser', trigger: 'Opportunity enters M-003 Consult Booked',
    steps: [
      { time: 'Immediate', action: 'Send Form Link', detail: 'Send digital intake form link via SMS/Email.' },
      { time: '24h Wait', action: 'Reminder 1', detail: 'If "Intake Complete" is No → Send reminder 1.' },
      { time: '48h Wait', action: 'Reminder 2 + Alert', detail: 'If "Intake Complete" is No → Send reminder 2 + staff alert.' },
      { time: 'On Submit', action: 'Auto-Tag', detail: 'Auto-tag as "Forms Complete" when submitted and notify provider.', tags: ['Forms Complete'] },
    ],
  },
  {
    icon: Calendar, title: 'The "Zero No-Show" Sequence', trigger: 'Appointment Status = Confirmed',
    steps: [
      { time: '48h Prior', action: 'Email Reminder', detail: 'Email reminder with clinic directions and parking info.' },
      { time: '24h Prior', action: 'SMS Confirm', detail: 'SMS reminder requiring a "YES" to confirm.' },
      { time: '2h Prior', action: 'Final SMS', detail: 'Final SMS reminder.' },
      { time: 'If No-Show', action: 'Trigger Rescue', detail: 'Trigger Missed Appointment Rescue workflow.', tags: ['No-Show'] },
    ],
  },
  {
    icon: Heart, title: 'Post-Treatment Care & Reviews', trigger: 'Opportunity moves to C-002 Post-Care Check-in',
    steps: [
      { time: 'Day 1', action: 'Recovery SMS', detail: 'SMS asking "How are you feeling today?"' },
      { time: 'Day 3', action: 'Internal Task', detail: 'Internal task to check on patient recovery.' },
      { time: 'Day 7+', action: 'Review Request', detail: 'If positive → Send Google Review link.' },
      { time: 'Day 7-', action: 'Manager Alert', detail: 'If negative → Alert Clinic Manager for recovery call.' },
    ],
  },
  {
    icon: RefreshCw, title: '6-Month Routine Recall', trigger: 'Last Visit Date > 180 Days',
    steps: [
      { time: 'Day 180', action: 'Recall SMS', detail: '"It\'s been a while! Time for your routine check-up."' },
      { time: 'Day 185', action: 'Email Campaign', detail: 'Email highlighting new treatments or seasonal offers.' },
      { time: 'Day 190', action: 'Manual Task', detail: 'Internal task for front desk to attempt a manual rebooking call.' },
    ],
  },
];

const WorkflowSection = () => (
  <Section>
    <SectionHeader title="Core Automations & Workflows" subtitle="Fixing core clinic bottlenecks: no-shows, missing intake forms, and patient churn" />
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {workflows.map((wf, i) => (
          <AccordionItem key={i} value={`wf-${i}`} className="bg-white rounded-2xl border border-[hsl(210,15%,88%)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-6 overflow-hidden">
            <AccordionTrigger className="hover:no-underline py-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'hsl(210,40%,40%,0.08)' }}>
                  <wf.icon size={16} style={{ color: clinical.primary }} />
                </div>
                <span className="font-semibold text-zinc-900 text-left">{wf.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="mb-4">
                <PillBadge color="primary">Trigger: {wf.trigger}</PillBadge>
              </div>
              <div className="relative pl-8 space-y-4">
                <div className="absolute left-3 top-1 bottom-1 w-[2px] bg-zinc-200" />
                {wf.steps.map((step, si) => (
                  <div key={si} className="relative flex items-start gap-3">
                    <div className="absolute left-[-20px] w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center z-10" style={{ borderColor: clinical.primary }}>
                      <span className="text-[8px] font-bold" style={{ color: clinical.primary }}>{si + 1}</span>
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
    icon: Target, title: 'Lead Capture & Form Logic',
    subs: [
      { title: 'Patient Intake', components: ['Step 1: Basic Info (Name, Phone, Email)', 'Step 2: Chief Complaint / Treatment Interest'], automations: ['Captures data, routes by specialty (aesthetics vs. wellness)', 'Applies specific treatment tags for segmentation'] },
    ],
  },
  {
    icon: Calendar, title: 'Clinical Calendar System',
    subs: [
      { title: 'Provider Scheduling', components: ['Provider-specific calendars', 'Room/equipment booking logic', 'Buffer times for sanitization/prep'], automations: ['Round-robin routing for general consults', 'Strict intake completion rules before finalizing bookings'] },
    ],
  },
  {
    icon: Phone, title: 'Staff Dispositions & Updating',
    subs: [
      { title: 'Internal Routing', components: ['"Consult Outcome" internal form', 'Captures Treatment Plan, Quoted Price, Next Steps'], automations: ['Updates CRM without manual typing', 'Triggers pre-op or post-op instructions based on provider notes'] },
    ],
  },
  {
    icon: Shield, title: 'Privacy & Communication',
    subs: [
      { title: 'Secure Messaging Rules', components: ['TCPA Consent boolean', 'Generalized SMS templates (avoiding specific PHI in texts)'], automations: ['Keeps automated texts focused on scheduling and logistics', 'Routes sensitive questions to secure portals or phone calls'] },
    ],
  },
  {
    icon: Activity, title: 'Patient Lifetime Value (LTV) Tracking',
    subs: [
      { title: 'Reactivation', components: ['Last Visit Date field', 'Total Spent field'], automations: ['Automatically categorizes patients into VIP or At-Risk tiers', 'Triggers specialized seasonal offers to maximize LTV'] },
    ],
  },
];

const ArchitectureSection = () => (
  <Section alt>
    <SectionHeader title="System Architecture" subtitle="Secure data collection, scheduling, and staff routing" />
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {architecture.map((arch, i) => (
          <AccordionItem key={i} value={`arch-${i}`} className="bg-white rounded-2xl border border-[hsl(210,15%,88%)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-6 overflow-hidden">
            <AccordionTrigger className="hover:no-underline py-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'hsl(210,40%,40%,0.08)' }}>
                  <arch.icon size={16} style={{ color: clinical.primary }} />
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
                              <Check size={12} className="mt-0.5 shrink-0" style={{ color: clinical.primary }} /> {c}
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
    { title: 'New Patient', stages: ['M-001 New Lead', 'M-002 Triage', 'M-003 Consult Booked', 'M-004 Forms Complete', 'M-005 Consult Done', 'M-006 Treatment Scheduled'] },
    { title: 'Active Care', stages: ['C-001 Treatment Active', 'C-002 Post-Care', 'C-003 Review Requested', 'C-004 Routine Recall', 'C-005 Reactivation'] },
  ];

  const features = [
    { icon: FileText, title: 'CRM Basics', items: ['Custom Fields (Last Visit Date, Treatment Interest)', 'Provider-Based Round Robin Routing', 'Appointment Status tracking'] },
    { icon: MessageSquare, title: 'Communication', items: ['Dynamic SMS/Email templates for pre-op instructions', 'Appointment confirmations', 'Post-op check-ins'] },
    { icon: Settings, title: 'Automation', items: ['180-day date-based recall triggers', '5-min lead SLAs', 'Conditional logic for form chasing'] },
    { icon: CreditCard, title: 'Calendars & Forms', items: ['Conditional logic intake forms', 'Calendar buffer times for clinical prep', 'One-click reschedule links'] },
  ];

  return (
    <Section>
      <SectionHeader title="GHL Pipeline & Features" subtitle="Native GHL features powering the clinical automation" />

      <h3 className="text-lg font-semibold text-zinc-900 mb-5 text-center">Pipeline Structure</h3>
      <div className="grid md:grid-cols-2 gap-5 mb-14">
        {pipelines.map(p => (
          <Card key={p.title}>
            <h4 className="font-semibold text-zinc-900 text-sm mb-4">{p.title}</h4>
            <div className="space-y-2">
              {p.stages.map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center shrink-0" style={{ background: 'hsl(210,40%,40%,0.08)', color: clinical.primary }}>
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
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'hsl(210,40%,40%,0.08)' }}>
                <f.icon size={14} style={{ color: clinical.primary }} />
              </div>
              <h4 className="font-semibold text-zinc-900 text-sm">{f.title}</h4>
            </div>
            <ul className="space-y-1.5">
              {f.items.map(item => (
                <li key={item} className="text-xs text-zinc-500 flex items-start gap-1.5">
                  <Check size={10} className="mt-0.5 shrink-0" style={{ color: clinical.primary }} /> {item}
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
const MedicalFooter = () => (
  <footer className="py-10 px-4 border-t border-[hsl(210,15%,88%)]" style={{ background: clinical.bg }}>
    <p className="text-center text-sm text-zinc-400 font-medium">
      Complete GHL Automation System for Medical Practices & Clinics
    </p>
  </footer>
);

// ═══════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════
const Medical = () => (
  <div className="min-h-screen font-outfit" style={{ background: clinical.bg }}>
    <HeroSection />
    <TagSystemSection />
    <PatientJourneySection />
    <PipelineSection />
    <WorkflowSection />
    <ArchitectureSection />
    <GHLSection />
    <MedicalFooter />
  </div>
);

export default Medical;
