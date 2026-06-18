import openaiLogo from '@/assets/tools/openai.png';
import claudeLogo from '@/assets/tools/claude.png';
import geminiLogo from '@/assets/tools/gemini.png';
import vapiLogo from '@/assets/tools/vapi.png';
import elevenlabsLogo from '@/assets/tools/elevenlabs.png';
import makeLogo from '@/assets/tools/make.png';
import n8nLogo from '@/assets/tools/n8n.png';
import pineconeLogo from '@/assets/tools/pinecone.png';
import supabaseLogo from '@/assets/tools/supabase.png';
import gohighlevelLogo from '@/assets/tools/gohighlevel.png';

const tools = [
  { name: 'OpenAI', logo: openaiLogo },
  { name: 'Claude', logo: claudeLogo },
  { name: 'Gemini', logo: geminiLogo },
  { name: 'Vapi', logo: vapiLogo },
  { name: 'ElevenLabs', logo: elevenlabsLogo },
  { name: 'Make', logo: makeLogo },
  { name: 'n8n', logo: n8nLogo },
  { name: 'Pinecone', logo: pineconeLogo },
  { name: 'Supabase', logo: supabaseLogo },
  { name: 'GoHighLevel', logo: gohighlevelLogo },
];

const SliderRow = ({ direction }: { direction: 'left' | 'right' }) => {
  const items = [...tools, ...tools, ...tools]; // triple for seamless loop

  return (
    <div className="relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#f7f6f2] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#f7f6f2] to-transparent" />

      <div
        className={`flex gap-12 w-max ${
          direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
        }`}
      >
        {items.map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            className="flex items-center gap-3 shrink-0 px-2"
          >
            <img
              src={tool.logo}
              alt={tool.name}
              className="w-14 h-14 object-contain rounded-lg"
              loading="lazy"
              width={56}
              height={56}
            />
            <span className="text-[#0a0a08] text-lg font-medium whitespace-nowrap">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ToolsSlider = () => {
  return (
    <section className="py-12 bg-[#f7f6f2]">
      <div className="text-center mb-8">
        <p className="text-sm tracking-widest uppercase text-[#0a0a08]/50 font-semibold">
          Powered by industry-leading AI & automation tools
        </p>
      </div>
      <SliderRow direction="left" />
      <SliderRow direction="right" />
    </section>
  );
};

export default ToolsSlider;
