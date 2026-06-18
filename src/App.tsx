import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import HomeServices from "./pages/HomeServices";
import RealEstate from "./pages/RealEstate";
import Legal from "./pages/Legal";
import Fitness from "./pages/Fitness";
import Insurance from "./pages/Insurance";
import Medical from "./pages/Medical";
import Booking from "./pages/Booking";
import AgenticAI from "./pages/AgenticAI";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home-services" element={<HomeServices />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/agentic-ai" element={<AgenticAI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
