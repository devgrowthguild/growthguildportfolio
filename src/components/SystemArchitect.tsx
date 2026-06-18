import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowLeft, Check, Zap, Clock, BarChart3, Eye,
  Sparkles, Loader2, ChevronDown,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import SectionCard from './system-architect/SectionCard';
import MultiSelect from './system-architect/MultiSelect';
import PipelineBuilder from './system-architect/PipelineBuilder';
import {
  SystemFormData,
  initialFormData,
  detectIndustry,
  defaultProfile,
  primaryOfferOptions,
  salesCycleOptions,
  salesScopeOptions,
  enquiryChannelOptions,
  leadVolumeOptions,
  stageTriggerOptions,
  lostLeadOptions,
  speedToLeadOptions,
  multiplePipelinesOptions,
  currentFollowUpOptions,
  appointmentBookingOptions,
  crmOptions,
  toolOptions,
  operationNeedOptions,
  growthModeOptions,
  bottleneckOptions,
  automationPriorityOptions,
  aiIntegrationOptions,
  revenueRangeOptions,
} from './system-architect/types';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const duration = 600;
    const start = display;
    const diff = value - start;
    if (diff === 0) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value]);
  return <>{display}{suffix}</>;
}

const TOTAL_STEPS = 9;

const SystemArchitect = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<SystemFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const update = <K extends keyof SystemFormData>(key: K, value: SystemFormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const detected = useMemo(() => detectIndustry(form.businessType), [form.businessType]);
  const profile = detected || (form.businessType.length > 3 ? { ...defaultProfile, industry: 'Custom Industry' } : null);

  const growthBoost = form.growthMode === 'Aggressive Scaling' ? 9 : form.growthMode === 'Moderate Growth' ? 4 : 0;
  const channelBoost = form.enquiryChannels.length > 0 ? Math.min(form.enquiryChannels.length * 2, 10) : 0;
  const automationDepth = profile ? Math.min(profile.automationDepth + growthBoost + channelBoost, 98) : 0;

  const readinessScore = useMemo(() => {
    let score = 0;
    if (form.businessType.length > 3) score += 10;
    if (form.primaryOffer) score += 5;
    if (form.salesCycle) score += 5;
    if (form.salesScope) score += 5;
    if (form.enquiryChannels.length > 0) score += 8;
    if (form.leadVolume) score += 5;
    if (form.selectedStages.length > 0) score += 10;
    if (form.stageTrigger) score += 5;
    if (form.speedToLead) score += 5;
    if (form.currentFollowUp.length > 0) score += 5;
    if (form.currentCRM) score += 5;
    if (form.growthMode) score += 5;
    if (form.automationPriorities.length > 0) score += 7;
    if (form.name) score += 5;
    if (form.email) score += 5;
    if (form.phone) score += 5;
    return Math.min(score, 100);
  }, [form]);

  const canProceed = () => {
    switch (currentStep) {
      case 1: return form.businessType.length > 2;
      case 9: return form.name && form.email && form.phone;
      default: return true;
    }
  };

  const inputClass =
    'w-full border border-input rounded-xl px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:border-[hsl(var(--golden))] focus:ring-2 focus:ring-[hsl(var(--golden)/0.15)] outline-none transition-all';
  const selectClass = inputClass;
  const labelClass = 'block text-sm font-semibold text-foreground mb-2';

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) return;
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-system-form', {
        body: {
          ...form,
          detectedIndustry: profile?.industry || '',
        },
      });
      if (error) throw error;
      setSubmitted(true);
      navigate('/booking');
    } catch (err) {
      console.error('Form submission error:', err);
      toast({
        title: 'Submission failed',
        description: 'Please try again in a moment.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 px-4 bg-surface">
        <motion.div className="max-w-2xl mx-auto text-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="bg-card rounded-2xl p-12 shadow-[var(--shadow-premium)] border border-border">
            <div className="w-16 h-16 rounded-full bg-[hsl(var(--golden))] flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-white" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Your System Architecture Blueprint Is Being Built.</h2>
            <p className="text-muted-foreground mb-8">You'll receive:</p>
            <div className="grid sm:grid-cols-2 gap-3 text-left max-w-md mx-auto">
              {['Pipeline Design', 'Automation Trigger Map', 'AI Intervention Points', 'Conversion Leak Analysis', 'Revenue Recovery Layer'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <Check size={16} className="text-[hsl(var(--golden))] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Design Your Custom AI Revenue System
          </h2>
          <p className="text-muted-foreground text-lg font-medium max-w-2xl mx-auto">
            Tell us about your business — and watch your automation blueprint generate in real time.
          </p>
        </motion.div>

        {/* Step progress */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Step {currentStep} of {TOTAL_STEPS}</span>
            <span className="font-bold text-[hsl(var(--golden))]"><AnimatedNumber value={readinessScore} suffix="%" /></span>
          </div>
          <Progress value={(currentStep / TOTAL_STEPS) * 100} className="h-2 bg-muted [&>div]:bg-[hsl(var(--golden))]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT — Form */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {/* STEP 1 — Business Foundation */}
              {currentStep === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <SectionCard step={1} label="Business Foundation">
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>What type of business do you run?</label>
                        <input type="text" placeholder="e.g. solar installation company in Manchester" className={inputClass}
                          value={form.businessType} onChange={(e) => update('businessType', e.target.value)} />
                        {profile && (
                          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-2">
                            <span className="text-xs bg-[hsl(var(--golden)/0.12)] text-[hsl(var(--golden-dark))] px-2.5 py-1 rounded-full font-semibold">
                              Industry Detected: {profile.industry}
                            </span>
                          </motion.div>
                        )}
                      </div>
                      <div>
                        <label className={labelClass}>Primary Offer / Service You Sell</label>
                        <div className="grid grid-cols-2 gap-2">
                          {primaryOfferOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => update('primaryOffer', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all text-left ${
                                form.primaryOffer === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Average Customer Value (Optional)</label>
                        <input type="text" placeholder="e.g. $5,000" className={inputClass}
                          value={form.avgCustomerValue} onChange={(e) => update('avgCustomerValue', e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Sales Cycle Length</label>
                        <div className="grid grid-cols-3 gap-2">
                          {salesCycleOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => update('salesCycle', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all ${
                                form.salesCycle === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Do you sell locally or nationally?</label>
                        <div className="grid grid-cols-3 gap-2">
                          {salesScopeOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => update('salesScope', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all ${
                                form.salesScope === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SectionCard>
                </motion.div>
              )}

              {/* STEP 2 — Lead Generation */}
              {currentStep === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <SectionCard step={2} label="Lead Generation Sources">
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>How do you currently receive enquiries?</label>
                        <MultiSelect options={enquiryChannelOptions} selected={form.enquiryChannels}
                          onChange={(v) => update('enquiryChannels', v)} columns={3} />
                      </div>
                      <div>
                        <label className={labelClass}>Monthly Lead Volume (Approx.)</label>
                        <div className="grid grid-cols-4 gap-2">
                          {leadVolumeOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => update('leadVolume', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all ${
                                form.leadVolume === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Cost Per Lead (If Running Ads)</label>
                        <input type="text" placeholder="e.g. $25" className={inputClass}
                          value={form.costPerLead} onChange={(e) => update('costPerLead', e.target.value)} />
                      </div>
                    </div>
                  </SectionCard>
                </motion.div>
              )}

              {/* STEP 3 — Pipeline Mapping (renamed Step 4 in spec) */}
              {currentStep === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <SectionCard step={3} label="Map Your Client Journey">
                    <p className="text-xs text-muted-foreground mb-4">
                      Select the stages a lead goes through in your business. Arrange them in order. If something is missing, add a custom stage.
                    </p>
                    <PipelineBuilder
                      selectedStages={form.selectedStages}
                      onStagesChange={(v) => update('selectedStages', v)}
                      customStages={form.customStages}
                      onCustomStagesChange={(v) => update('customStages', v)}
                    />
                  </SectionCard>
                </motion.div>
              )}

              {/* STEP 4 — Pipeline Config */}
              {currentStep === 4 && (
                <motion.div key="s4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <SectionCard step={4} label="Pipeline Configuration">
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>What action moves a lead from one stage to the next?</label>
                        <select className={selectClass} value={form.stageTrigger} onChange={(e) => update('stageTrigger', e.target.value)}>
                          <option value="">Select trigger...</option>
                          {stageTriggerOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>What happens to lost leads?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {lostLeadOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => update('lostLeadAction', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all text-left ${
                                form.lostLeadAction === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>How fast do you respond to new leads?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {speedToLeadOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => update('speedToLead', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all text-left ${
                                form.speedToLead === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Do different services require separate pipelines?</label>
                        <div className="grid grid-cols-1 gap-2">
                          {multiplePipelinesOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => update('multiplePipelines', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all text-left ${
                                form.multiplePipelines === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SectionCard>
                </motion.div>
              )}

              {/* STEP 5 — Sales Process */}
              {currentStep === 5 && (
                <motion.div key="s5" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <SectionCard step={5} label="Sales Process Mapping">
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>What happens after someone submits an enquiry?</label>
                        <textarea placeholder="Describe your current process..." className={inputClass + ' min-h-[80px]'}
                          value={form.postEnquiryProcess} onChange={(e) => update('postEnquiryProcess', e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Do you currently:</label>
                        <MultiSelect options={currentFollowUpOptions} selected={form.currentFollowUp}
                          onChange={(v) => update('currentFollowUp', v)} columns={1} />
                      </div>
                      <div>
                        <label className={labelClass}>Do you book appointments?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['Yes', 'No'].map((opt) => (
                            <button key={opt} type="button" onClick={() => update('booksAppointments', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all ${
                                form.booksAppointments === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                      <AnimatePresence>
                        {form.booksAppointments === 'Yes' && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-4">
                            <div>
                              <label className={labelClass}>How are appointments booked?</label>
                              <div className="grid grid-cols-3 gap-2">
                                {appointmentBookingOptions.map((opt) => (
                                  <button key={opt} type="button" onClick={() => update('appointmentMethod', opt)}
                                    className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all ${
                                      form.appointmentMethod === opt
                                        ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                        : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                                    }`}>{opt}</button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className={labelClass}>Show Rate % (Approx.)</label>
                              <input type="text" placeholder="e.g. 60%" className={inputClass}
                                value={form.showRate} onChange={(e) => update('showRate', e.target.value)} />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </SectionCard>
                </motion.div>
              )}

              {/* STEP 6 — Tools & Tech */}
              {currentStep === 6 && (
                <motion.div key="s6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <SectionCard step={6} label="Current Tools & Tech Stack">
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>What CRM are you currently using?</label>
                        <div className="grid grid-cols-3 gap-2">
                          {crmOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => update('currentCRM', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all ${
                                form.currentCRM === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Other tools you're using</label>
                        <MultiSelect options={toolOptions} selected={form.otherTools}
                          onChange={(v) => update('otherTools', v)} columns={2} />
                      </div>
                    </div>
                  </SectionCard>
                </motion.div>
              )}

              {/* STEP 7 — Operations & Fulfillment */}
              {currentStep === 7 && (
                <motion.div key="s7" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <SectionCard step={7} label="Operations & Fulfillment">
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>What happens after a sale closes?</label>
                        <textarea placeholder="Describe your post-sale process..." className={inputClass + ' min-h-[80px]'}
                          value={form.postSaleProcess} onChange={(e) => update('postSaleProcess', e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Do you need:</label>
                        <MultiSelect options={operationNeedOptions} selected={form.operationNeeds}
                          onChange={(v) => update('operationNeeds', v)} columns={2} />
                      </div>
                    </div>
                  </SectionCard>
                </motion.div>
              )}

              {/* STEP 8 — Growth & Automation */}
              {currentStep === 8 && (
                <motion.div key="s8" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <SectionCard step={8} label="Growth & Automation Priorities">
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>How aggressive do you want growth?</label>
                        <div className="grid grid-cols-3 gap-2">
                          {growthModeOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => update('growthMode', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all ${
                                form.growthMode === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Biggest bottleneck right now?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {bottleneckOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => update('biggestBottleneck', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all text-left ${
                                form.biggestBottleneck === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>What would you like automated first?</label>
                        <MultiSelect options={automationPriorityOptions} selected={form.automationPriorities}
                          onChange={(v) => update('automationPriorities', v)} columns={2} />
                      </div>
                      <div>
                        <label className={labelClass}>Do you want AI Voice / AI SMS integrated?</label>
                        <div className="grid grid-cols-3 gap-2">
                          {aiIntegrationOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => update('wantsAI', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all ${
                                form.wantsAI === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Monthly Revenue (Range)</label>
                        <div className="grid grid-cols-2 gap-2">
                          {revenueRangeOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => update('monthlyRevenue', opt)}
                              className={`text-xs font-medium px-3 py-2.5 rounded-xl border transition-all ${
                                form.monthlyRevenue === opt
                                  ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                                  : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                              }`}>{opt}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Target Revenue in Next 6 Months</label>
                        <input type="text" placeholder="e.g. $100,000" className={inputClass}
                          value={form.targetRevenue} onChange={(e) => update('targetRevenue', e.target.value)} />
                      </div>
                    </div>
                  </SectionCard>
                </motion.div>
              )}

              {/* STEP 9 — Contact Details */}
              {currentStep === 9 && (
                <motion.div key="s9" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <SectionCard step={9} label="Contact Details">
                    <div className="space-y-3">
                      <div>
                        <label className={labelClass}>Name *</label>
                        <input type="text" placeholder="Your full name" className={inputClass}
                          value={form.name} onChange={(e) => update('name', e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Email *</label>
                        <input type="email" placeholder="your@email.com" className={inputClass}
                          value={form.email} onChange={(e) => update('email', e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Phone *</label>
                        <input type="tel" placeholder="+1 (555) 000-0000" className={inputClass}
                          value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Website</label>
                        <input type="url" placeholder="https://yourwebsite.com" className={inputClass}
                          value={form.website} onChange={(e) => update('website', e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Business Location</label>
                        <input type="text" placeholder="e.g. Manchester, UK" className={inputClass}
                          value={form.businessLocation} onChange={(e) => update('businessLocation', e.target.value)} />
                      </div>
                    </div>
                  </SectionCard>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex gap-3">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((s) => s - 1)}
                  className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl border border-input bg-background text-foreground hover:bg-muted transition-colors"
                >
                  <ArrowLeft size={14} /> Back
                </button>
              )}
              {currentStep < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className="flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--golden))] text-white font-semibold px-5 py-3 rounded-xl hover:bg-[hsl(var(--golden-dark))] transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--golden))] text-white font-semibold px-5 py-3.5 rounded-xl hover:bg-[hsl(var(--golden-dark))] transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <><Loader2 size={14} className="animate-spin" /> Submitting...</>
                  ) : (
                    <>Generate My System Architecture Blueprint <ArrowRight size={14} /></>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* RIGHT — Live Blueprint Preview */}
          <div className="lg:sticky lg:top-8">
            <AnimatePresence mode="wait">
              {profile ? (
                <motion.div
                  key={profile.industry}
                  className="bg-card rounded-2xl p-8 shadow-[var(--shadow-premium)] border border-border"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles size={18} className="text-[hsl(var(--golden))]" />
                    <h3 className="text-lg font-bold text-foreground">Your System Architecture Blueprint</h3>
                  </div>

                  <div className="mb-5">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Industry Classification</span>
                    <p className="text-sm font-semibold text-foreground mt-0.5">{profile.industry}</p>
                  </div>

                  {/* Stat Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-surface rounded-xl p-3.5 border border-border">
                      <div className="w-7 h-7 rounded-lg bg-[hsl(var(--golden)/0.12)] flex items-center justify-center mb-1.5">
                        <Clock size={14} className="text-[hsl(var(--golden))]" />
                      </div>
                      <div className="text-xs text-muted-foreground mb-0.5">Install Timeline</div>
                      <div className="text-sm font-bold text-foreground">{profile.installDays}</div>
                    </div>
                    <div className="bg-surface rounded-xl p-3.5 border border-border">
                      <div className="w-7 h-7 rounded-lg bg-[hsl(var(--golden)/0.12)] flex items-center justify-center mb-1.5">
                        <Zap size={14} className="text-[hsl(var(--golden))]" />
                      </div>
                      <div className="text-xs text-muted-foreground mb-0.5">Response Speed</div>
                      <div className="text-sm font-bold text-foreground">{profile.responseTime}</div>
                    </div>
                    <div className="bg-surface rounded-xl p-3.5 border border-border">
                      <div className="w-7 h-7 rounded-lg bg-[hsl(var(--golden)/0.12)] flex items-center justify-center mb-1.5">
                        <BarChart3 size={14} className="text-[hsl(var(--golden))]" />
                      </div>
                      <div className="text-xs text-muted-foreground mb-0.5">Automation Coverage</div>
                      <div className="text-sm font-bold text-foreground"><AnimatedNumber value={automationDepth} suffix="%" /></div>
                    </div>
                    <div className="bg-surface rounded-xl p-3.5 border border-border">
                      <div className="w-7 h-7 rounded-lg bg-[hsl(var(--golden)/0.12)] flex items-center justify-center mb-1.5">
                        <Eye size={14} className="text-[hsl(var(--golden))]" />
                      </div>
                      <div className="text-xs text-muted-foreground mb-0.5">Revenue Visibility</div>
                      <div className="text-sm font-bold text-foreground">100%</div>
                    </div>
                  </div>

                  {/* Automation Depth */}
                  <div className="mb-5">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground">Automation Depth</span>
                      <span className="font-bold text-[hsl(var(--golden))]"><AnimatedNumber value={automationDepth} suffix="%" /></span>
                    </div>
                    <Progress value={automationDepth} className="h-2 bg-muted [&>div]:bg-[hsl(var(--golden))]" />
                  </div>

                  {/* Modules */}
                  <div className="mb-5">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Recommended Modules</span>
                    <ul className="space-y-1.5">
                      {profile.modules.map((mod, i) => (
                        <motion.li key={mod} className="flex items-center gap-2 text-xs text-foreground"
                          initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                          <Check size={12} className="text-[hsl(var(--golden))] shrink-0" />
                          {mod}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Dynamic summary from form data */}
                  <div className="space-y-2 border-t border-border pt-4">
                    {form.enquiryChannels.length > 0 && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Lead Sources</span>
                        <span className="font-semibold text-foreground text-right max-w-[60%]">{form.enquiryChannels.join(', ')}</span>
                      </div>
                    )}
                    {form.leadVolume && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Monthly Leads</span>
                        <span className="font-semibold text-foreground">{form.leadVolume}</span>
                      </div>
                    )}
                    {form.selectedStages.length > 0 && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Pipeline Stages</span>
                        <span className="font-semibold text-foreground">{form.selectedStages.length} stages</span>
                      </div>
                    )}
                    {form.speedToLead && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Speed-to-Lead</span>
                        <span className="font-semibold text-foreground">{form.speedToLead}</span>
                      </div>
                    )}
                    {form.growthMode && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Growth Strategy</span>
                        <span className="font-semibold text-foreground">{form.growthMode}</span>
                      </div>
                    )}
                    {form.currentCRM && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Current CRM</span>
                        <span className="font-semibold text-foreground">{form.currentCRM}</span>
                      </div>
                    )}
                    {form.wantsAI && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">AI Integration</span>
                        <span className="font-semibold text-foreground">{form.wantsAI}</span>
                      </div>
                    )}
                    {form.monthlyRevenue && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Monthly Revenue</span>
                        <span className="font-semibold text-foreground">{form.monthlyRevenue}</span>
                      </div>
                    )}
                  </div>

                  {/* Readiness */}
                  <div className="mt-5 pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-foreground">System Readiness</span>
                      <span className="text-sm font-bold text-[hsl(var(--golden))]"><AnimatedNumber value={readinessScore} suffix="%" /></span>
                    </div>
                    <Progress value={readinessScore} className="h-2 bg-muted [&>div]:bg-[hsl(var(--golden))]" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="bg-card rounded-2xl p-8 shadow-[var(--shadow-premium)] border border-border flex flex-col items-center justify-center min-h-[400px] text-center"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-4">
                    <Sparkles size={24} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Your System Architecture Blueprint</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Start typing your business type to see your custom automation blueprint generate in real time.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          These are fully built, battle-tested AI revenue systems installed into businesses we actively support and optimize.
        </p>
        <p className="text-center text-xs text-muted-foreground mt-2 italic">
          Metrics vary by project scope and industry niche.
        </p>
      </div>
    </section>
  );
};

export default SystemArchitect;
