import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dashboardImages = [
  { src: '/images/dashboards/chargebee-executive.jpeg', title: 'Executive Dashboard', client: 'SaaS Revenue Tracking' },
  { src: '/images/dashboards/chargebee-analytics.jpeg', title: 'Plan Performance Analytics', client: 'Subscription Analytics' },
  { src: '/images/dashboards/chargebee-customers.jpeg', title: 'Customer Details Panel', client: 'Customer Management' },
  { src: '/images/dashboards/flamingo-hub-1.jpeg', title: 'Flamingo Hub Dashboard', client: 'Social & GBP Analytics' },
  { src: '/images/dashboards/flamingo-hub-2.jpeg', title: 'Social Performance Panel', client: 'Content & Engagement' },
  { src: '/images/dashboards/gg-hrms.jpeg', title: 'HR Command Center', client: 'Employee Operations' },
];

const DashboardSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const loadedCount = useRef(0);

  // Preload ALL images before showing slider
  useEffect(() => {
    dashboardImages.forEach((img) => {
      const image = new Image();
      image.src = img.src;
      image.onload = () => {
        loadedCount.current += 1;
        if (loadedCount.current >= dashboardImages.length) {
          setAllLoaded(true);
        }
      };
    });
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % dashboardImages.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + dashboardImages.length) % dashboardImages.length);
  }, []);

  useEffect(() => {
    if (!allLoaded) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next, allLoaded]);

  const getIndex = (offset: number) =>
    (current + offset + dashboardImages.length) % dashboardImages.length;

  // Loading skeleton
  if (!allLoaded) {
    return (
      <div className="w-full max-w-5xl mx-auto">
        <div className="h-[400px] rounded-2xl bg-zinc-800/50 animate-pulse flex items-center justify-center mx-auto w-[55%]">
          <div className="text-zinc-500 text-sm font-medium">Loading dashboards...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* 3D Slider with fixed aspect container */}
      <div className="relative perspective-[1200px] py-4" style={{ minHeight: '420px' }}>
        <div className="relative flex items-center justify-center" style={{ height: '420px' }}>
          {/* Left card */}
          <div
            className="absolute left-0 md:left-[3%] w-[45%] md:w-[28%] cursor-pointer z-10 top-1/2"
            onClick={prev}
            style={{
              transform: 'translateY(-50%) translateX(-10%) rotateY(25deg) scale(0.8)',
              transformOrigin: 'right center',
            }}
          >
            <div className="rounded-2xl overflow-hidden border border-zinc-700 shadow-lg opacity-40 bg-zinc-900">
                <img
                  src={dashboardImages[getIndex(-1)].src}
                  alt={dashboardImages[getIndex(-1)].title}
                  className="w-full h-auto block"
                />
            </div>
          </div>

          {/* Center card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                rotateY: direction > 0 ? -25 : 25,
                scale: 0.9,
                opacity: 0,
                x: direction > 0 ? 150 : -150,
              }}
              animate={{
                rotateY: 0,
                scale: 1,
                opacity: 1,
                x: 0,
              }}
              exit={{
                rotateY: direction > 0 ? 25 : -25,
                scale: 0.9,
                opacity: 0,
                x: direction > 0 ? -150 : 150,
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-[78%] md:w-[50%] z-30"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-2xl bg-zinc-900">
                <img
                  src={dashboardImages[current].src}
                  alt={dashboardImages[current].title}
                  className="w-full h-auto block"
                />
                {/* Label bar */}
                <div className="bg-zinc-900 border-t border-zinc-800 px-5 py-3">
                  <p className="text-white font-bold text-sm md:text-base">{dashboardImages[current].title}</p>
                  <p className="text-zinc-400 text-xs">{dashboardImages[current].client}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right card */}
          <div
            className="absolute right-0 md:right-[3%] w-[45%] md:w-[28%] cursor-pointer z-10 top-1/2"
            onClick={next}
            style={{
              transform: 'translateY(-50%) translateX(10%) rotateY(-25deg) scale(0.8)',
              transformOrigin: 'left center',
            }}
          >
            <div className="rounded-2xl overflow-hidden border border-zinc-700 shadow-lg opacity-40 bg-zinc-900">
                <img
                  src={dashboardImages[getIndex(1)].src}
                  alt={dashboardImages[getIndex(1)].title}
                  className="w-full h-auto block"
                />
            </div>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {dashboardImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-[hsl(var(--golden))] w-6' : 'bg-zinc-600 hover:bg-zinc-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardSlider;
