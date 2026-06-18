import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Services', href: '/#the-system' },
  { label: 'Agentic AI Assistants', href: '/agentic-ai' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-zinc-200/50 shadow-premium px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center">
            <span className="text-[#D4AF37] font-bold text-sm">GG</span>
          </div>
          <span className="font-semibold text-zinc-900 text-sm">Growth Guild</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors text-zinc-500 hover:text-zinc-900`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/booking"
          className="hidden md:flex items-center gap-2 bg-[#D4AF37] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#B8942A] transition-colors active:scale-95"
        >
          Plan Your System
          <ArrowRight size={14} />
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-5 h-0.5 bg-zinc-900 rounded" />
          <span className="w-5 h-0.5 bg-zinc-900 rounded" />
          <span className="w-3 h-0.5 bg-zinc-900 rounded" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-zinc-200/50 shadow-premium p-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-medium text-zinc-700 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/booking"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-white text-sm font-semibold px-5 py-2.5 rounded-lg w-full"
          >
            Plan Your System <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
