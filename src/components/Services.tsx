import { motion } from 'framer-motion';
import { Target, Layout, Zap, Bot, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Target,
    gradient: 'from-blue-500 to-blue-600',
    bgGlow: 'bg-blue-950/50',
    title: 'Traffic Engine',
    description: 'Meta, Google, and multi-channel campaigns engineered to generate qualified opportunities — not vanity clicks.',
    link: 'Explore ads',
    view: 'ads',
  },
  {
    icon: Layout,
    gradient: 'from-purple-500 to-purple-600',
    bgGlow: 'bg-purple-950/50',
    title: 'Conversion Pages',
    description: 'High-converting funnels, 5-page websites, booking systems, and intake flows designed for action.',
    link: 'Explore websites',
    view: 'websites',
  },
  {
    icon: Zap,
    gradient: 'from-amber-500 to-amber-600',
    bgGlow: 'bg-amber-950/50',
    title: 'Automation Systems',
    description: 'Instant follow-up, AI chat & SMS logic, pipeline automation, tagging systems, and revenue dashboards running 24/7.',
    link: 'Explore automations',
    view: 'automations',
  },
  {
    icon: Bot,
    gradient: 'from-emerald-500 to-emerald-600',
    bgGlow: 'bg-emerald-950/50',
    title: 'AI Bots',
    description: 'Voice agents that answer, qualify, and book — 24/7. No missed calls, no unqualified leads, no human bottlenecks.',
    link: 'Explore AI bots',
    view: 'aiBots',
  },
  {
    icon: BarChart3,
    gradient: 'from-rose-500 to-rose-600',
    bgGlow: 'bg-rose-950/50',
    title: 'Custom Dashboards',
    description: 'Real-time reporting dashboards built for your business — revenue tracking, pipeline analytics, and performance metrics in one view.',
    link: 'Explore dashboards',
    view: 'dashboards',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">EXPLORE THE SYSTEM</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            Five layers. One managed system.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-zinc-900 rounded-2xl p-6 shadow-premium border border-zinc-800 hover:border-golden/30 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-xl ${service.bgGlow} flex items-center justify-center mb-5`}>
                <div className={`bg-gradient-to-br ${service.gradient} p-2 rounded-lg`}>
                  <service.icon size={18} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">{service.description}</p>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('set-system-view', { detail: service.view }));
                  document.getElementById('the-system')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D4AF37] hover:text-[#B8942A] transition-colors"
              >
                {service.link} <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
