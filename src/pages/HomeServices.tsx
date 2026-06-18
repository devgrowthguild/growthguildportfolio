import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, GitFork, Tag, Map, Flame, Users, Wrench, Heart, Bell, Globe,
  ArrowRight, Check, ChevronDown, Shield, MessageSquare, Calendar,
  CreditCard, Star, RefreshCw, Target, Settings, ArrowLeft, Gift,
  Clock, Mail, Phone, FileText, BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ─── Design tokens for this page ───
const warm = {
  bg: 'hsl(25, 20%, 98%)',
  primary: 'hsl(25, 30%, 40%)',
  muted: 'hsl(40, 10%, 90%)',
  accent: 'hsl(20, 40%, 50%)',
  border: 'hsl(25, 10%, 88%)',
};

// ─── Reusable Badge ───
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

// ─── Section wrapper ───
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
    { icon: Zap, label: 'Touchpoints', value: '100+' },
    { icon: GitFork, label: 'Core Workflows', value: '6' },
    { icon: Tag, label: 'Smart Tags', value: '30+' },
    { icon: Map, label: 'Lead Paths', value: '3' },
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden" style={{ background: warm.bg }}>
      {/* Blurred gradient blobs */}
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
            Home Services <em className="not-italic" style={{ color: warm.primary, fontStyle: 'italic' }}>Business</em>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: warm.primary }}>
            Complete GHL Automation System
          </p>
          <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto mb-12">
            Revolutionize your operations with end-to-end automation for HVAC, Plumbing, Electrical, Roofing, Pest Control & Solar businesses.
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
// TAG SYSTEM
// ═══════════════════════════════════════════
const tagCategories = [
  { icon: Flame, title: 'Lead Status Tags', color: 'orange', tags: ['Hot-Lead', 'Warm-Lead', 'Cold-Lead', 'Qualified', 'Unqualified'] },
  { icon: Users, title: 'Customer Type Tags', color: 'blue', tags: ['Lead', 'Customer', 'VIP-Member', 'Former-Member', 'Lost-Lead'] },
  { icon: Wrench, title: 'Service Tags', color: 'green', tags: ['HVAC-Customer', 'Plumbing-Customer', 'Electrical-Customer', 'Roofing-Customer', 'Pest-Customer', 'Solar-Customer'] },
  { icon: Heart, title: 'Engagement Tags', color: 'pink', tags: ['Happy-Customer', 'Unhappy-Customer', 'Responded', 'No-Response'] },
  { icon: Bell, title: 'Action Tags', color: 'yellow', tags: ['Needs-Follow-Up', 'Payment-Overdue', 'Review-Requested'] },
  { icon: Globe, title: 'Source Tags', color: 'purple', tags: ['Google-Ads', 'Facebook-Ads', 'Referral', 'Website', 'Phone-Call', 'SMS-Keyword'] },
];

const TagSystemSection = () => (
  <Section alt>
    <SectionHeader title="Complete Tag System" subtitle="30+ Smart Tags for Complete Business Organization" />
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

const hotPath: LeadPath[] = [
  { time: '0 min', title: 'Lead Enters CRM', desc: 'Form submission or emergency call' },
  { time: '0-1 min', title: 'Auto-Response', desc: 'SMS + Email sent, tag: Hot-Lead' },
  { time: '5 min', title: 'Quick Qualification', desc: 'Emergency confirmed, decision maker verified' },
  { time: '5-10 min', title: 'Calendar Link Sent', desc: 'Priority slots offered' },
  { time: '10-30 min', title: 'Appointment Booked', desc: 'Same-day or next-day slot' },
  { time: '30 min', title: 'Immediate Confirmation', desc: 'SMS + Email + Tech assigned' },
  { time: '2-24 hours', title: 'Service Delivered', desc: 'Job completed' },
  { time: '24-48 hours', title: 'Payment & Review', desc: 'Invoice paid, review requested' },
];

const warmPath: LeadPath[] = [
  { time: '0 min', title: 'Lead Enters CRM', desc: 'Form submission or inbound call' },
  { time: '0-1 min', title: 'Auto-Response', desc: 'SMS + Email sent' },
  { time: '5-60 min', title: 'Qualification Process', desc: 'SMS bot collects info, tag: Warm-Lead' },
  { time: '1-4 hours', title: 'Calendar Link Sent', desc: 'Available times this week' },
  { time: '12-24 hours', title: 'Follow-up if No Booking', desc: 'Reminder SMS + Task created' },
  { time: '1-3 days', title: 'Appointment Booked', desc: 'Service scheduled' },
  { time: '3-7 days', title: 'Reminder Sequence', desc: '24hr + 2hr reminders' },
  { time: '7-14 days', title: 'Service & Payment', desc: 'Job completed, paid, reviewed' },
];

const coldPath: LeadPath[] = [
  { time: '0 min', title: 'Lead Enters CRM', desc: 'Form submission, browsing info' },
  { time: '0-1 min', title: 'Auto-Response', desc: 'SMS + Email sent' },
  { time: '5-60 min', title: 'Qualification Attempt', desc: 'Info collection, tag: Cold-Lead' },
  { time: '24 hours', title: 'Nurture Campaign Start', desc: 'Enters 90-day nurture' },
  { time: '1-4 weeks', title: 'Educational Content', desc: 'Weekly emails, tips, case studies' },
  { time: '4-8 weeks', title: 'Periodic Offers', desc: 'Discounts, seasonal promotions' },
  { time: '8-12 weeks', title: 'Re-engagement Attempts', desc: 'Final offers, manual outreach' },
  { time: '90 days', title: 'Convert or Archive', desc: 'Books appointment OR moved to long-term list' },
];

const colorStyles: Record<string, { btn: string; tint: string; border: string; line: string; circle: string; text: string }> = {
  orange: { btn: 'bg-orange-500 text-white shadow-md', tint: 'bg-orange-50', border: 'border-orange-200/50', line: 'bg-orange-200', circle: 'border-orange-400', text: 'text-orange-500' },
  yellow: { btn: 'bg-yellow-500 text-white shadow-md', tint: 'bg-yellow-50', border: 'border-yellow-200/50', line: 'bg-yellow-200', circle: 'border-yellow-400', text: 'text-yellow-500' },
  blue: { btn: 'bg-blue-500 text-white shadow-md', tint: 'bg-blue-50', border: 'border-blue-200/50', line: 'bg-blue-200', circle: 'border-blue-400', text: 'text-blue-500' },
};

const tabs = [
  { id: 'hot', label: '🔥 Hot Lead Path', color: 'orange', data: hotPath },
  { id: 'warm', label: '🌡 Warm Lead Path', color: 'yellow', data: warmPath },
  { id: 'cold', label: '❄️ Cold Lead Path', color: 'blue', data: coldPath },
];

const LeadJourneySection = () => {
  const [activeTab, setActiveTab] = useState('hot');
  const active = tabs.find(t => t.id === activeTab)!;
  const cs = colorStyles[active.color];

  return (
    <Section>
      <SectionHeader title="Lead Journey Paths" subtitle="Three optimized paths based on lead temperature" />
      
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
  const leadPipeline = [
    { stage: 'New Lead', actions: ['Auto-response', 'Assign rep', 'Create task'], tags: ['Lead'] },
    { stage: 'Contacted', actions: ['Qualification SMS', 'Update fields', 'Apply score tag'], tags: ['Responded'] },
    { stage: 'Qualified', actions: ['Send calendar link', 'Follow-up task'], tags: ['Hot-Lead', 'Warm-Lead', 'Cold-Lead'] },
    { stage: 'Scheduled', actions: ['Confirmation sent', 'Reminder sequence', 'Create opportunity'], tags: [] },
    { stage: 'Completed', actions: ['Follow-up', 'Quote sent'], tags: [] },
    { stage: 'Won', actions: ['Move to service pipeline', 'Update LTV'], tags: ['Customer'] },
    { stage: 'Lost', actions: ['Lost reason', 'Nurture campaign', '90-day task'], tags: ['Lost-Lead'] },
  ];

  const servicePipeline = [
    { stage: 'Scheduled', actions: ['Tech assigned', 'Job details sent', 'Invoice created'], tags: [] },
    { stage: 'In Progress', actions: ['Customer notified', 'Track time', 'Upload photos'], tags: [] },
    { stage: 'Completed', actions: ['Invoice sent', 'Payment link'], tags: [] },
    { stage: 'Paid', actions: ['Receipt sent', 'Review request', 'Update LTV'], tags: ['Paid-Customer'] },
  ];

  const renderPipeline = (stages: typeof leadPipeline, colorClass: string) => (
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
      <SectionHeader title="Pipeline Structure" subtitle="Two optimized pipelines for complete lead-to-customer journey" />
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-semibold text-zinc-900 text-lg mb-5">Lead to Appointment Pipeline</h3>
          {renderPipeline(leadPipeline, 'bg-amber-800')}
        </Card>
        <Card>
          <h3 className="font-semibold text-zinc-900 text-lg mb-5">Service Delivery Pipeline</h3>
          {renderPipeline(servicePipeline, 'bg-green-700')}
        </Card>
      </div>
    </Section>
  );
};

// ═══════════════════════════════════════════
// WORKFLOW BREAKDOWN (Accordion)
// ═══════════════════════════════════════════
type WorkflowStep = { time: string; action: string; detail: string; tags?: string[] };
type Workflow = { icon: React.ElementType; title: string; trigger: string; steps: WorkflowStep[]; outcomes: string[] };

const workflows: Workflow[] = [
  {
    icon: Zap, title: 'Immediate Response Workflow', trigger: 'Contact Created (any source)',
    steps: [
      { time: '0 min', action: 'Send SMS', detail: 'Hi {{first_name}}! Thanks for contacting us about {{service_type}}. We\'re reviewing your request now!', tags: ['Lead'] },
      { time: '0 min', action: 'Send Email', detail: 'Welcome email with company intro video' },
      { time: '0 min', action: 'Internal Notification', detail: 'SMS to assigned rep: \'New lead - {{contact_name}}\'' },
      { time: '0 min', action: 'Create Task', detail: 'Task: \'Contact new lead\' (Due: 5 minutes)' },
      { time: '5 min', action: 'Check Response', detail: 'IF NO → Send follow-up SMS' },
      { time: '30 min', action: 'Manager Alert', detail: 'IF NO → Create manager alert task', tags: ['No-Response'] },
      { time: '4 hours', action: 'Calendar Link', detail: 'IF NO → Send email with calendar link' },
      { time: '24 hours', action: 'Move Stage', detail: 'Move to \'Contacted\' + Start nurture if no response' },
    ],
    outcomes: [
      'Contact responds within 5 min → Move to Qualification Workflow',
      'Contact books appointment → Move to Appointment Workflow',
      'No response in 24 hours → Enter Nurture Campaign',
    ],
  },
  {
    icon: MessageSquare, title: 'Lead Qualification SMS Bot', trigger: 'Contact Moved to "Contacted" Stage OR SMS Reply Received',
    steps: [
      { time: '0 min', action: 'Send SMS', detail: 'What service do you need? Reply: 1-Repair, 2-Install, 3-Maintenance, 4-Emergency' },
      { time: 'Wait', action: 'Update Field', detail: 'Service Needed = [Response]' },
      { time: '0 min', action: 'Send SMS', detail: 'When do you need this? Reply: 1-Emergency, 2-This week, 3-Next week, 4-Flexible' },
      { time: 'Wait', action: 'Update Field', detail: 'Urgency Level = [Response]' },
      { time: '0 min', action: 'Send SMS', detail: 'Are you the homeowner/decision maker? Reply YES or NO' },
      { time: 'Wait', action: 'Update Field', detail: 'Decision Maker = [Response]' },
      { time: '0 min', action: 'Calculate Score', detail: 'Emergency + DM = Hot | This Week + DM = Warm | Else = Cold', tags: ['Hot-Lead', 'Warm-Lead', 'Cold-Lead'] },
      { time: '0 min', action: 'Conditional Actions', detail: 'HOT: urgent calendar + 30min task | WARM: calendar + 12hr task | COLD: 24hr task', tags: ['Qualified'] },
      { time: '0 min', action: 'Move Stage', detail: 'Move to \'Qualified\' stage' },
    ],
    outcomes: [
      'Hot Lead (Emergency + DM) → Urgent calendar link → Same-day booking',
      'Warm Lead (This week + DM) → Calendar link → 1-3 day booking',
      'Cold Lead (Flexible or not DM) → Enter nurture campaign',
    ],
  },
  {
    icon: Calendar, title: 'Appointment Reminder Sequence', trigger: 'Calendar Appointment Created',
    steps: [
      { time: '0 min', action: 'Send SMS', detail: '✅ Confirmed! Your appointment: {{appointment_date}} at {{appointment_time}}' },
      { time: '0 min', action: 'Send Email', detail: 'Appointment confirmation with .ics calendar invite' },
      { time: '0 min', action: 'Create Opportunity', detail: 'Create opportunity in Service Delivery Pipeline' },
      { time: '1 day before', action: 'Send SMS + Email', detail: 'Reminder: Appointment tomorrow. Need to reschedule? {{calendar_link}}' },
      { time: '2 hours before', action: 'Send SMS', detail: 'Your technician will arrive in about 2 hours' },
      { time: '30 min before', action: 'Send SMS', detail: 'Your technician will arrive in approximately 30 minutes' },
    ],
    outcomes: [
      'Customer shows up → Move to Service Delivery workflow',
      'Customer reschedules → New appointment created → Restart workflow',
      'No-show → Tag: No-Show + Follow-up task created',
    ],
  },
  {
    icon: CreditCard, title: 'Payment Follow-up & Collection', trigger: 'Opportunity Moved to "Completed - Pending Payment"',
    steps: [
      { time: '0 min', action: 'Send SMS + Email', detail: 'Invoice ready! Total: ${{amount}}. Pay now: {{payment_link}}' },
      { time: '24 hours', action: 'Check Payment', detail: 'IF NOT PAID → Send reminder SMS' },
      { time: '3 days', action: 'Check Payment', detail: 'IF NOT PAID → Reminder Email + SMS + Create task', tags: ['Payment-Overdue'] },
      { time: '7 days', action: 'Check Payment', detail: 'IF NOT PAID → Urgent task for phone call', tags: ['Needs-Follow-Up'] },
      { time: '14 days', action: 'Check Payment', detail: 'IF NOT PAID → Final notice + Manager alert' },
      { time: 'When paid', action: 'Move to Paid', detail: 'Remove payment tags + Send receipt + Start review workflow' },
    ],
    outcomes: [
      'Payment received within 24hrs → Move to Review workflow immediately',
      'Payment received 2-7 days → Move to Review workflow',
      'Payment after 14 days → Move to Review workflow + Note late payment',
      'No payment after 30 days → Collections process + Service suspended',
    ],
  },
  {
    icon: Star, title: 'Review Request & Reputation Management', trigger: 'Opportunity Moved to "Paid" Stage',
    steps: [
      { time: '2 hours', action: 'Send SMS', detail: 'How would you rate your experience? Reply 1-5', tags: ['Review-Requested'] },
      { time: 'Wait', action: 'Check Rating', detail: 'Branch based on response' },
      { time: 'IF 4-5', action: 'Send SMS', detail: 'Thanks! Please leave a review: {{google_review_link}}', tags: ['Happy-Customer'] },
      { time: 'IF 1-3', action: 'Send SMS', detail: 'We\'re sorry! A manager will call you today', tags: ['Unhappy-Customer'] },
      { time: '24 hours', action: 'No Response', detail: 'Send email: \'Quick question about your service\' with survey link' },
      { time: '7 days', action: 'Final Request', detail: 'IF 4-5 & No Review → Send final review request email' },
    ],
    outcomes: [
      '5-star rating → Public review request + Referral program offer',
      '4-star rating → Public review request + Feedback survey',
      '1-3 star rating → NO public review + Manager recovery call',
      'Review posted → Thank you message + Referral incentive',
    ],
  },
  {
    icon: RefreshCw, title: 'Maintenance Reminder Workflow', trigger: 'Manual Tag Applied OR 180 Days After Last Service',
    steps: [
      { time: '0 min', action: 'Send Email', detail: 'Time for your {{service_type}} maintenance! Book now and save 15%' },
      { time: '0 min', action: 'Send SMS', detail: 'It\'s been 6 months. Ready to schedule maintenance? {{calendar_link}}' },
      { time: '7 days', action: 'Check Booking', detail: 'IF NOT → Reminder SMS with 15% off code', tags: ['Needs-Follow-Up'] },
      { time: '14 days', action: 'Check Booking', detail: 'IF NOT → Email with case study about maintenance' },
      { time: '30 days', action: 'Check Booking', detail: 'IF NOT → Create task: \'Call customer about maintenance\'' },
      { time: '60 days', action: 'Final SMS', detail: 'IF NOT → Seasonal urgency SMS then end workflow' },
    ],
    outcomes: [
      'Books within 7 days → Return to appointment workflow',
      'Books within 30 days → Return to appointment workflow',
      'No booking after 60 days → Move to inactive list + Seasonal campaign only',
    ],
  },
];

const WorkflowSection = () => (
  <Section>
    <SectionHeader title="Complete Workflow Breakdown" subtitle="Step-by-step automation for every customer touchpoint" />
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
// SYSTEM ARCHITECTURE (Accordion)
// ═══════════════════════════════════════════
type ArchSubSection = { title: string; components: string[]; automations: string[] };
type ArchItem = { icon: React.ElementType; title: string; subs: ArchSubSection[] };

const architecture: ArchItem[] = [
  {
    icon: Target, title: 'Lead Capture & Generation',
    subs: [
      { title: 'Traffic Sources', components: ['Google Ads (LSA, Search, Display)', 'Facebook/Instagram Ads', 'SEO & GMB', 'Referral Links', 'Direct Mail with Phone Numbers', 'Review Sites (Yelp, Angi)'], automations: ['Webhook integration from ad platforms', 'Form submissions auto-create contacts', 'UTM parameter tracking via custom fields', 'Duplicate contact detection'] },
      { title: 'Lead Entry Points', components: ['Website Form (GHL Form Builder)', 'Phone Call (Call tracking)', 'SMS Keyword Response', 'Chat Widget', 'Calendar Booking Widget'], automations: ['Contact created instantly in CRM', 'Lead source tagged automatically', 'Service type tagged via form selection', 'Workflow triggered on contact creation'] },
    ],
  },
  {
    icon: MessageSquare, title: 'Lead Qualification',
    subs: [
      { title: 'Immediate Response (0-5 min)', components: ['Auto-SMS within 60 seconds', 'Auto-Email welcome message', 'Internal team notification', 'Contact assigned via round-robin'], automations: ['Workflow trigger: Contact Created', 'Wait 0 min → Send SMS', 'Wait 0 min → Send Email', 'Wait 0 min → Internal notification', 'Assign to user via round-robin'] },
      { title: 'Qualification Data Collection', components: ['Service Type (Dropdown)', 'Urgency (Dropdown)', 'Property Type (Dropdown)', 'Decision Maker (Yes/No)', 'Service Area Zip Code (Text)'], automations: ['Two-way SMS conversation', 'Update custom fields based on responses', 'Apply tags: Hot/Warm/Cold-Lead', 'Move to appropriate pipeline stage'] },
      { title: 'Lead Scoring & Tagging', components: ['Hot Lead Tag', 'Warm Lead Tag', 'Cold Lead Tag', 'Service Tags', 'Source Tags'], automations: ['Tag application via workflow conditions', 'Pipeline stage movement based on tags', 'Task creation for follow-up', 'Different workflow paths per tag'] },
    ],
  },
  {
    icon: Calendar, title: 'Appointment Booking',
    subs: [
      { title: 'Scheduling Process', components: ['GHL Calendar Link via SMS/Email', 'Round-robin calendar assignment', 'Class-based scheduling', 'Buffer time between appointments'], automations: ['Calendar link sent via workflow', 'Booking triggers opportunity creation', 'Auto-assign based on settings', 'Confirmation workflow triggered'] },
      { title: 'Appointment Confirmation', components: ['SMS confirmation with details', 'Email confirmation with .ics file', 'Add to opportunity pipeline', 'Create calendar event'], automations: ['Trigger: Calendar Event Created', 'Send SMS template with merge fields', 'Send email with calendar invite', 'Create opportunity in Service Pipeline'] },
      { title: 'Pre-Appointment Reminders', components: ['24hr before: SMS + Email', '2hr before: SMS reminder', 'Manual call task if no confirmation'], automations: ['Workflow with date/time triggers', 'Wait until 1 day before → Send', 'Wait until 2hr before → Send SMS', 'If no response → Create task'] },
    ],
  },
  {
    icon: Wrench, title: 'Service Delivery',
    subs: [
      { title: 'Job Management', components: ['Manual check-in notification', 'Task for completion photos', 'Notes field for job details', 'Invoice created in Payments'], automations: ['Task assigned to technician', 'Email sent with job details', 'Customer SMS when "In Progress"', 'Task reminder for completion'] },
      { title: 'Service Completion', components: ['Manual stage → "Completed"', 'Invoice sent via email/SMS', 'Payment link in message', 'Digital signature request'], automations: ['Trigger: Moved to Completed', 'Send invoice via workflow', 'Payment link SMS template', 'Completion confirmation email'] },
    ],
  },
  {
    icon: CreditCard, title: 'Payment & Invoicing',
    subs: [
      { title: 'Payment Collection', components: ['Stripe integration', 'Payment link via SMS/Email', 'Card on file option', 'Payment plans available'], automations: ['Invoice sent after completion', 'Payment reminder sequence', 'Tag applied when paid', 'Opportunity marked Won'] },
      { title: 'Payment Follow-up', components: ['Day 1: Friendly reminder', 'Day 3: Email + SMS', 'Day 7: Phone call task', 'Day 14: Final notice'], automations: ['Workflow if payment not received', 'Wait conditions between reminders', 'Task creation for follow-up', 'Tag: Payment-Overdue'] },
    ],
  },
  {
    icon: Star, title: 'Review & Reputation',
    subs: [
      { title: 'Review Request', components: ['2hr after payment: rating request', '1-5 rating via SMS', 'Conditional workflow', 'Google/Facebook review links'], automations: ['Trigger: Payment Received', 'Wait 2hr → Send rating SMS', 'If 4-5 → Public review link', 'If 1-3 → Private feedback form'] },
      { title: 'Feedback Management', components: ['Positive → Thank you', 'Negative → Manager alert', 'Recovery call task', 'Follow-up workflow'], automations: ['Conditional splits in workflow', 'Tag: Happy/Unhappy-Customer', 'SMS/Email templates per path', 'Task assignment to manager'] },
    ],
  },
  {
    icon: RefreshCw, title: 'Retention & Follow-Up',
    subs: [
      { title: 'Service Reminders', components: ['Date-based triggers', 'Anniversary reminders', 'Seasonal campaigns', 'Re-booking calendar links'], automations: ['Custom field: Last Service Date', 'Wait until date + 180 days', 'Send maintenance reminder', 'Calendar link included'] },
      { title: 'Customer Communication', components: ['Email campaigns (seasonal tips)', 'SMS campaigns (special offers)', 'Newsletter subscription', 'Birthday/anniversary messages'], automations: ['Campaign builder for communication', 'Segmentation by tags', 'Scheduled sends', 'A/B testing capabilities'] },
    ],
  },
  {
    icon: Gift, title: 'Referral Generation',
    subs: [
      { title: 'Referral Program', components: ['Unique referral links', 'Referral tracking', 'Discount codes in messages', 'Thank you on referral book'], automations: ['Post-service referral ask', 'Custom referral link via SMS', 'Tag when referral detected', 'Thank you on conversion'] },
      { title: 'VIP/Membership Program', components: ['Tag-based VIP status', 'Recurring payment setup', 'Member-exclusive campaigns', 'Priority scheduling'], automations: ['Tag: VIP-Member', 'Separate VIP workflow', 'Monthly recurring charge', 'Exclusive offer campaigns'] },
    ],
  },
];

// Need to import Gift
const ArchitectureSection = () => (
  <Section alt>
    <SectionHeader title="System Architecture" subtitle="Complete breakdown of all 8 major system components" />
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
    { title: 'Lead to Appointment', stages: ['New Lead', 'Contacted', 'Qualified', 'Scheduled', 'Completed', 'Won', 'Lost'] },
    { title: 'Service Delivery', stages: ['Scheduled', 'In Progress', 'Completed', 'Invoiced', 'Paid'] },
    { title: 'Membership/VIP', stages: ['Prospect', 'Trial', 'Active', 'At Risk', 'Churned'] },
  ];

  const features = [
    { icon: FileText, title: 'CRM Basics', items: ['Custom Fields (Text, Number, Date, Dropdown)', 'Tags for organization', 'Pipelines & Opportunities', 'Tasks & Appointments', 'Contact Notes'] },
    { icon: MessageSquare, title: 'Communication', items: ['2-way SMS conversations', 'Email campaigns', 'Phone system integration', 'Voicemail drops', 'Chat widget'] },
    { icon: Settings, title: 'Automation', items: ['Workflow builder', 'Triggers (contact created, tag applied)', 'Actions (send message, create task)', 'Wait conditions', 'Conditional splits'] },
    { icon: CreditCard, title: 'Payments & Forms', items: ['Stripe integration', 'Payment links', 'Invoices', 'Form & Survey builder', 'Calendar booking'] },
  ];

  return (
    <Section>
      <SectionHeader title="GHL Pipeline & Features" subtitle="Native GHL features powering the automation system" />

      <h3 className="text-lg font-semibold text-zinc-900 mb-5 text-center">Pipeline Structure</h3>
      <div className="grid md:grid-cols-3 gap-5 mb-14">
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
const Footer = () => (
  <footer className="py-10 px-4 border-t border-[hsl(25,10%,88%)]" style={{ background: warm.bg }}>
    <p className="text-center text-sm text-zinc-400 font-medium">
      Complete GHL Automation System for Home Service Businesses
    </p>
  </footer>
);

// ═══════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════
const HomeServices = () => (
  <div className="min-h-screen font-outfit" style={{ background: warm.bg }}>
    <HeroSection />
    <TagSystemSection />
    <LeadJourneySection />
    <PipelineSection />
    <WorkflowSection />
    <ArchitectureSection />
    <GHLSection />
    <Footer />
  </div>
);

export default HomeServices;
