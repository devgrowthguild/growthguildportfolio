import { ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <>
      {/* CTA Section */}
      <section id="book" className="py-24 px-4 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-8">
            See how this would work for your business.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/booking"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#B8942A] transition-all active:scale-95 shadow-md text-sm"
            >
              Plan Your System <ArrowRight size={16} />
            </a>
            <a
              href="/#industries"
              className="inline-flex items-center gap-2 bg-white text-zinc-700 font-semibold px-8 py-4 rounded-lg border border-zinc-200 hover:border-[#D4AF37]/50 transition-all text-sm"
            >
              See the Full Framework
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-8 px-4 bg-card">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-zinc-900 rounded-md flex items-center justify-center">
              <span className="text-[#D4AF37] font-bold text-[10px]">GG</span>
            </div>
            <span className="text-sm text-zinc-500">© 2026 Growth Guild. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-zinc-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-700 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-700 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
