import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import YogaWellness from "./pages/YogaWellness";
import HeartYoga from "./pages/HeartYoga";
import TherapeuticYoga from "./pages/TherapeuticYoga";
import ChantingYoga from "./pages/ChantingYoga";
import KundaliniMeditation from "./pages/KundaliniMeditation";
import WorkplaceYoga from "./pages/WorkplaceYoga";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/yoga-wellness" element={<YogaWellness />} />
              <Route path="/heart-yoga" element={<HeartYoga />} />
              <Route path="/therapeutic-yoga" element={<TherapeuticYoga />} />
              <Route path="/chanting-yoga" element={<ChantingYoga />} />
              <Route path="/kundalini-meditation" element={<KundaliniMeditation />} />
              <Route path="/workplace-yoga" element={<WorkplaceYoga />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
