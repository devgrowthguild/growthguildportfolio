import { useEffect } from 'react';
import Navbar from '@/components/Navbar';

const Booking = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.growthguild.us/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
          The Final Step Before We Begin Your Buildout
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Schedule a time that works for you.
        </p>
        <iframe
          src="https://link.growthguild.us/widget/booking/IdfIZG94XipOO5IrWSo0"
          style={{ width: '100%', height: '85vh', border: 'none', overflow: 'hidden' }}
          scrolling="no"
          id="IdfIZG94XipOO5IrWSo0_1772042942615"
        />
      </div>
    </div>
  );
};

export default Booking;
