import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SystemsBuilt from '@/components/SystemsBuilt';
import VideoSection from '@/components/VideoSection';
import TheSystem from '@/components/TheSystem';
import ResultSection from '@/components/ResultSection';
import FooterCTA from '@/components/FooterCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <SystemsBuilt />
      <VideoSection />
      <TheSystem />
      <ResultSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
