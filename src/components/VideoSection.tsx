import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  {
    id: 0,
    type: '💬 Client Testimonial',
    title: 'Testimonial 1',
    youtubeId: '0HU6Xa81UHE',
  },
  {
    id: 1,
    type: '💬 Client Testimonial',
    title: 'Testimonial 2',
    youtubeId: 'W-qEZqxfemg',
  },
  {
    id: 2,
    type: '💬 Client Testimonial',
    title: 'Testimonial 3',
    youtubeId: 'Uapm66qDOSE',
  },
  {
    id: 3,
    type: '💬 Client Testimonial',
    title: 'Testimonial 4',
    youtubeId: 'zllyhs3NmO8',
  },
];

const VideoSection = () => {
  const [activeId, setActiveId] = useState(2);
  const activeVideo = videos.find((v) => v.id === activeId)!;
  const thumbnails = videos.filter((v) => v.id !== activeId);

  return (
    <section id="testimonials" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">SEE IT IN ACTION</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Watch how it <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">works</span> and hear from our clients
          </h2>
          <p className="text-zinc-400 text-lg font-medium max-w-2xl mx-auto">
            Real results from real businesses using our AI-powered acquisition system.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 max-w-[860px] mx-auto items-stretch">
          {/* Main Video - Left */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-[55%] shrink-0"
            >
              <div className="rounded-xl overflow-hidden border border-purple-500/40 shadow-[0_0_40px_rgba(110,68,248,0.15)] bg-zinc-900 h-full" style={{ aspectRatio: '9/16' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Thumbnails - Right, stacked vertically, equal height to main */}
          <div className="w-full md:w-[45%] flex flex-row md:flex-col gap-3">
            {thumbnails.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveId(video.id)}
                className="cursor-pointer group flex-1 min-h-0"
              >
                <div
                  className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-0.5 h-full"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
