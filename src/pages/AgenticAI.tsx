import Navbar from '@/components/Navbar';
import AgenticHero from '@/components/agentic/AgenticHero';
import ToolsSlider from '@/components/agentic/ToolsSlider';
import ProblemSection from '@/components/agentic/ProblemSection';
import DemoConversation from '@/components/agentic/DemoConversation';
import HowItWorks from '@/components/agentic/HowItWorks';
import UseCases from '@/components/agentic/UseCases';
import Pricing from '@/components/agentic/Pricing';
import AgenticCTA from '@/components/agentic/AgenticCTA';
import FloatingAIWidget from '@/components/agentic/FloatingAIWidget';
import FooterCTA from '@/components/FooterCTA';

const AgenticAI = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AgenticHero />
      <ToolsSlider />
      <ProblemSection />
      <DemoConversation />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <AgenticCTA />
      <FooterCTA />
      <FloatingAIWidget />
    </div>
  );
};

export default AgenticAI;
