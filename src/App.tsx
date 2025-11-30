import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import CCTVSurveillance from "./pages/CCTVSurveillance";
import PBXSystems from "./pages/PBXSystems";
import NetworkCabling from "./pages/NetworkCabling";
import ITInfrastructure from "./pages/ITInfrastructure";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Hotels from "./pages/industries/Hotels";
import Restaurants from "./pages/industries/Restaurants";
import Offices from "./pages/industries/Offices";
import GasStations from "./pages/industries/GasStations";
import StartProject from "./pages/StartProject";
import NotFound from "./pages/NotFound";
import POSIntegration from "./pages/POSIntegration";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/cctv-surveillance" element={<CCTVSurveillance />} />
            <Route path="/pbx-systems" element={<PBXSystems />} />
            <Route path="/network-cabling" element={<NetworkCabling />} />
            <Route path="/it-infrastructure" element={<ITInfrastructure />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries/gas-stations" element={<GasStations />} />
            <Route path="/industries/restaurants" element={<Restaurants />} />
            <Route path="/industries/hotels" element={<Hotels />} />
            <Route path="/industries/offices" element={<Offices />} />
            <Route path="/pos-integration" element={<POSIntegration />} />
            <Route path="/start-project" element={<StartProject />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
