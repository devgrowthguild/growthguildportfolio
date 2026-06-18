// =============================================
// SYSTEM ARCHITECT FORM — Types & Constants
// =============================================

// --- Section 1: Business Foundation ---
export const primaryOfferOptions = [
  'High-ticket service ($3k+)',
  'Mid-ticket service ($500–$3k)',
  'Low-ticket offer',
  'Subscription / Membership',
  'Custom',
];

export const salesCycleOptions = [
  'Same day',
  '1–3 days',
  '1–2 weeks',
  '1+ month',
  'Not sure',
];

export const salesScopeOptions = ['Local', 'National', 'International'];

// --- Section 2: Lead Generation ---
export const enquiryChannelOptions = [
  'Facebook Ads',
  'Instagram',
  'Google Ads',
  'SEO',
  'Website Forms',
  'WhatsApp',
  'Cold Calling',
  'Referrals',
  'TikTok',
  'Other',
];

export const leadVolumeOptions = ['0–20', '20–50', '50–100', '100+'];

// --- Section 3 (Pipeline Mapping): Lifecycle Stages ---
export interface PipelineCategory {
  label: string;
  stages: string[];
}

export const pipelineCategories: PipelineCategory[] = [
  {
    label: 'Lead Capture & Qualification',
    stages: ['New Lead', 'Attempted Contact', 'Contacted', 'Qualified', 'Not Qualified'],
  },
  {
    label: 'Appointment Flow',
    stages: [
      'Appointment Booked',
      'Appointment Confirmed',
      'No Show',
      'Rescheduled',
      'Appointment Completed',
    ],
  },
  {
    label: 'Sales Process',
    stages: [
      'Proposal Sent',
      'Follow-Up',
      'Negotiation',
      'Decision Pending',
      'Won / Closed',
      'Lost',
    ],
  },
  {
    label: 'Fulfillment / Post-Sale',
    stages: [
      'Onboarding Started',
      'Payment Pending',
      'Payment Received',
      'Project In Progress',
      'Project Completed',
      'Waiting on Client',
      'Review Requested',
      'Referral Requested',
    ],
  },
];

export const stageTriggerOptions = [
  'Manual movement',
  'Appointment booking',
  'Payment received',
  'Contract signed',
  'Tag applied',
  'Form submitted',
  'AI decision logic',
  'Other',
];

export const lostLeadOptions = [
  'Nothing',
  'Manual follow-up',
  '30-day reactivation',
  '60-day reactivation',
  '90-day nurture',
  'Long-term newsletter',
];

export const speedToLeadOptions = [
  'Instantly (under 5 min)',
  'Within 1 hour',
  'Same day',
  '24+ hours',
  'Not consistent',
];

export const multiplePipelinesOptions = [
  'No, one main pipeline',
  'Yes, multiple services',
  'Yes, different sales teams',
];

// --- Section 4: Sales Process Mapping ---
export const currentFollowUpOptions = [
  'Call leads manually',
  'Have an appointment setter',
  'Use an AI bot',
  'Use SMS/email automation',
  'No follow-up system',
];

export const appointmentBookingOptions = [
  'Manual calling',
  'Calendly',
  'GHL',
  'DM',
  'WhatsApp',
  'Other',
];

// --- Section 5: Tools & Tech Stack ---
export const crmOptions = [
  'None',
  'GoHighLevel',
  'HubSpot',
  'Salesforce',
  'Pipedrive',
  'Custom',
  'Other',
];

export const toolOptions = [
  'Zapier',
  'Make (Integromat)',
  'Stripe',
  'QuickBooks',
  'Facebook Pixel',
  'Google Tag Manager',
  'WhatsApp API',
  'None',
];

// --- Section 6: Operations & Fulfillment ---
export const operationNeedOptions = [
  'Automated onboarding',
  'Payment reminders',
  'Contract automation',
  'Task automation for team',
  'Customer portal',
  'Review generation',
  'Referral automation',
];

// --- Section 7: Automation Priorities ---
export const growthModeOptions = [
  'Stable & Predictable',
  'Moderate Growth',
  'Aggressive Scaling',
];

export const bottleneckOptions = [
  'Not enough leads',
  'Leads not responding',
  'Low booking rate',
  'No-shows',
  'Low close rate',
  'Fulfillment chaos',
  'No visibility into numbers',
];

export const automationPriorityOptions = [
  'Lead capture',
  'Speed-to-lead',
  'Appointment booking',
  'Follow-ups',
  'Pipeline tracking',
  'Reporting dashboards',
  'AI calling',
  'Everything',
];

export const aiIntegrationOptions = ['Yes', 'No', 'Not sure'];

// --- Section 8: Revenue ---
export const revenueRangeOptions = [
  'Under $10k',
  '$10k–$50k',
  '$50k–$100k',
  '$100k+',
];

// --- Full form state ---
export interface SystemFormData {
  // Section 1
  businessType: string;
  primaryOffer: string;
  avgCustomerValue: string;
  salesCycle: string;
  salesScope: string;
  // Section 2
  enquiryChannels: string[];
  leadVolume: string;
  costPerLead: string;
  // Section 3 - Pipeline
  selectedStages: string[];
  customStages: string[];
  stageTrigger: string;
  lostLeadAction: string;
  speedToLead: string;
  multiplePipelines: string;
  // Section 4
  postEnquiryProcess: string;
  currentFollowUp: string[];
  booksAppointments: string;
  appointmentMethod: string;
  showRate: string;
  // Section 5
  currentCRM: string;
  otherTools: string[];
  // Section 6
  postSaleProcess: string;
  operationNeeds: string[];
  // Section 7
  growthMode: string;
  biggestBottleneck: string;
  automationPriorities: string[];
  wantsAI: string;
  // Section 8
  monthlyRevenue: string;
  targetRevenue: string;
  // Contact
  name: string;
  email: string;
  phone: string;
  website: string;
  businessLocation: string;
}

export const initialFormData: SystemFormData = {
  businessType: '',
  primaryOffer: '',
  avgCustomerValue: '',
  salesCycle: '',
  salesScope: '',
  enquiryChannels: [],
  leadVolume: '',
  costPerLead: '',
  selectedStages: [],
  customStages: [],
  stageTrigger: '',
  lostLeadAction: '',
  speedToLead: '',
  multiplePipelines: '',
  postEnquiryProcess: '',
  currentFollowUp: [],
  booksAppointments: '',
  appointmentMethod: '',
  showRate: '',
  currentCRM: '',
  otherTools: [],
  postSaleProcess: '',
  operationNeeds: [],
  growthMode: '',
  biggestBottleneck: '',
  automationPriorities: [],
  wantsAI: '',
  monthlyRevenue: '',
  targetRevenue: '',
  name: '',
  email: '',
  phone: '',
  website: '',
  businessLocation: '',
};

// Industry detection
export interface IndustryProfile {
  keywords: string[];
  industry: string;
  responseTime: string;
  installDays: string;
  automationDepth: number;
  modules: string[];
}

export const industryProfiles: IndustryProfile[] = [
  {
    keywords: ['real estate', 'realtor', 'brokerage', 'property', 'housing', 'rental', 'apartment', 'letting', 'estate agent'],
    industry: 'Real Estate',
    responseTime: 'Under 60 Seconds',
    installDays: '7–10 Days',
    automationDepth: 85,
    modules: ['Lead Capture from Portals + Ads', 'Automated Showing Scheduler', 'SMS + Email AI Follow-Up', 'Smart Deal Pipeline', 'Review Generation Engine', 'Post-Sale Nurture Campaigns'],
  },
  {
    keywords: ['law', 'legal', 'attorney', 'lawyer', 'solicitor', 'firm', 'litigation', 'family law', 'divorce', 'custody'],
    industry: 'Legal / Law Firm',
    responseTime: 'Under 2 Minutes',
    installDays: '8–12 Days',
    automationDepth: 80,
    modules: ['Case Intake Automation', 'Consultation Booking System', 'Document Collection Engine', 'Client Follow-Up Sequences', 'Review & Referral Campaigns', 'Post-Case Nurture'],
  },
  {
    keywords: ['insurance', 'broker', 'underwriter', 'policy', 'claims', 'coverage', 'premium'],
    industry: 'Insurance',
    responseTime: 'Under 90 Seconds',
    installDays: '7–9 Days',
    automationDepth: 82,
    modules: ['Multi-Line Quote Automation', 'Renewal Campaign Engine', 'Cross-Sell & Upsell Sequences', 'Claims Follow-Up System', 'Review Collection', 'Referral Generation'],
  },
  {
    keywords: ['gym', 'fitness', 'crossfit', 'yoga', 'pilates', 'martial art', 'boxing', 'personal train', 'health club', 'sport'],
    industry: 'Fitness & Sports',
    responseTime: 'Under 45 Seconds',
    installDays: '5–7 Days',
    automationDepth: 88,
    modules: ['Trial Booking Automation', 'Membership Conversion Funnels', 'SMS + Email AI Follow-Up', 'Churn Prevention Flows', 'Review Generation Engine', 'Reactivation Campaigns'],
  },
  {
    keywords: ['plumb', 'hvac', 'electric', 'roofing', 'landscap', 'clean', 'pest', 'solar', 'handyman', 'home service', 'contractor', 'renovation', 'painting', 'flooring', 'window', 'garage', 'pool', 'fencing'],
    industry: 'Home Services',
    responseTime: 'Under 60 Seconds',
    installDays: '6–8 Days',
    automationDepth: 83,
    modules: ['Instant Quote & Job Booking', 'Estimate Follow-Up Automation', 'SMS + Email AI Follow-Up', 'Smart Booking & Dispatch', 'Review Generation Engine', 'Reactivation Campaigns'],
  },
  {
    keywords: ['doctor', 'clinic', 'dental', 'dentist', 'medical', 'healthcare', 'physician', 'surgeon', 'therapy', 'chiropractic', 'optom', 'dermat', 'pediatr', 'hospital', 'patient', 'nurse', 'pharma', 'vet', 'veterinar'],
    industry: 'Medical / Healthcare',
    responseTime: 'Under 45 Seconds',
    installDays: '7–10 Days',
    automationDepth: 90,
    modules: ['Patient Intake Automation', 'Appointment Confirmation System', 'Treatment Follow-Up Sequences', 'Upsell & Wellness Campaigns', 'Review Collection Engine', 'Reactivation Campaigns'],
  },
  {
    keywords: ['restaurant', 'cafe', 'food', 'catering', 'bar', 'bakery', 'coffee'],
    industry: 'Food & Beverage',
    responseTime: 'Under 30 Seconds',
    installDays: '5–7 Days',
    automationDepth: 78,
    modules: ['Reservation & Order Automation', 'Customer Follow-Up Sequences', 'SMS + Email AI Follow-Up', 'Loyalty & Retention Engine', 'Review Generation Engine', 'Event Booking Campaigns'],
  },
  {
    keywords: ['salon', 'barber', 'spa', 'beauty', 'hair', 'nail', 'skin', 'aesthetic', 'cosmetic', 'lash', 'brow', 'tattoo'],
    industry: 'Beauty & Wellness',
    responseTime: 'Under 30 Seconds',
    installDays: '5–7 Days',
    automationDepth: 91,
    modules: ['Online Booking Automation', 'Appointment Reminder System', 'SMS + Email AI Follow-Up', 'Upsell & Package Campaigns', 'Review Generation Engine', 'Reactivation Campaigns'],
  },
  {
    keywords: ['ecommerce', 'e-commerce', 'online store', 'shopify', 'retail', 'wholesale', 'dropship'],
    industry: 'E-Commerce / Retail',
    responseTime: 'Under 60 Seconds',
    installDays: '8–12 Days',
    automationDepth: 86,
    modules: ['Abandoned Cart Recovery', 'Post-Purchase Follow-Up', 'SMS + Email AI Sequences', 'Customer Segmentation Engine', 'Review Collection System', 'Win-Back Campaigns'],
  },
  {
    keywords: ['accounting', 'accountant', 'bookkeep', 'tax', 'financial', 'finance', 'wealth', 'mortgage', 'loan'],
    industry: 'Financial Services',
    responseTime: 'Under 2 Minutes',
    installDays: '8–10 Days',
    automationDepth: 81,
    modules: ['Client Intake Automation', 'Document Collection Engine', 'SMS + Email AI Follow-Up', 'Appointment Booking System', 'Review & Referral Campaigns', 'Seasonal Campaign Engine'],
  },
  {
    keywords: ['education', 'school', 'tutor', 'training', 'coach', 'course', 'academy', 'university', 'college', 'learn'],
    industry: 'Education & Training',
    responseTime: 'Under 60 Seconds',
    installDays: '7–9 Days',
    automationDepth: 84,
    modules: ['Enrollment Automation', 'Student Onboarding System', 'SMS + Email AI Follow-Up', 'Progress Check-In Sequences', 'Review Generation Engine', 'Re-enrollment Campaigns'],
  },
];

export const defaultProfile = {
  industry: '',
  responseTime: 'Under 60 Seconds',
  installDays: '10–15 Days',
  automationDepth: 85,
  modules: ['Lead Capture Funnel', 'Quote Request Automation', 'SMS + Email AI Follow-Up', 'Smart Booking & Dispatch', 'Review Generation Engine', 'Reactivation Campaigns'],
};

export function detectIndustry(input: string) {
  const lower = input.toLowerCase();
  for (const profile of industryProfiles) {
    if (profile.keywords.some((kw) => lower.includes(kw))) {
      return profile;
    }
  }
  return null;
}
