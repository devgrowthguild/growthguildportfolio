import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SystemArchitect from './SystemArchitect';

const systems = [
  {
    image: '/images/real-estate-system.png',
    title: 'Real Estate AI System',
    stats: ['Automated Lead Capture from portals + ads', 'Under 60-second AI follow-up', 'Smart Deal Pipeline with stage automation'],
    installTime: '7 Days', responseTime: 'Under 60 Seconds', coverage: '85%',
    link: '/real-estate',
  },
  {
    image: '/images/legal-system.png',
    title: 'Legal AI System',
    stats: ['Automated Case Intake Workflow', 'Consultation Booking Automation', 'Client Document & Follow-Up Sequences'],
    installTime: '8–10 Days', responseTime: 'Under 2 Minutes', coverage: '80%',
    link: '/legal',
  },
  {
    image: '/images/insurance-system.png',
    title: 'Insurance AI System',
    stats: ['Multi-Line Quote Automation', 'Renewal & Retention Campaign Engine', 'Cross-Sell & Upsell Sequences Built-In'],
    installTime: '7–9 Days', responseTime: 'Under 90 Seconds', coverage: '82%',
    link: '/insurance',
  },
  {
    image: '/images/fitness-system.png',
    title: 'Fitness AI System',
    stats: ['Trial Booking Automation', 'Membership Conversion Funnels', 'Churn Prevention & Reactivation Flows'],
    installTime: '5–7 Days', responseTime: 'Under 45 Seconds', coverage: '88%',
    link: '/fitness',
  },
  {
    image: '/images/home-services-system.png',
    title: 'Home Services AI System',
    stats: ['Instant Quote & Job Booking System', 'Estimate Follow-Up Automation', 'Review & Repeat Customer Engine'],
    installTime: '6–8 Days', responseTime: 'Under 60 Seconds', coverage: '83%',
    link: '/home-services',
  },
  {
    image: '/images/doctors-system.png',
    title: 'Doctors AI System',
    stats: ['New Patient Intake Automation', 'Appointment Reminder Sequences', 'Post-Treatment Upsell & Retention Campaigns'],
    installTime: '7–10 Days', responseTime: 'Under 2 Minutes', coverage: '80%',
    link: '/medical',
  },
];

const SystemsBuilt = () => {
  const navigate = useNavigate();

  return (
    <section id="industries" className="py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Explore the AI Revenue Systems We've Built
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Each system is engineered, tested, and ready to be installed into your business.
          </p>
        </motion.div>

        {/* System Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {systems.map((system, i) => (
            <motion.div
              key={system.title}
              className="bg-card rounded-2xl p-6 shadow-[var(--shadow-premium)] border border-border hover:border-[hsl(var(--golden)/0.3)] transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <img src={system.image} alt={system.title} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-4">{system.title}</h3>
              <ul className="space-y-2 mb-5">
                {system.stats.map((stat) => (
                  <li key={stat} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-[hsl(var(--golden))] mt-0.5">•</span>
                    {stat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => system.link !== '#' ? navigate(system.link) : undefined}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--golden))] hover:text-[hsl(var(--golden-dark))] transition-colors"
              >
                View System <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Interactive System Architect */}
        <SystemArchitect />
      </div>
    </section>
  );
};

export default SystemsBuilt;
