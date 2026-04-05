import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to update page title based on route
const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      '/': 'Abdou DR | Home',
      '/about': 'Abdou DR | About',
      '/work': 'Abdou DR | Work',
      '/contact': 'Abdou DR | Contact',
    };

    document.title = pageTitles[location.pathname] || 'Abdou DR';
  }, [location]);

  return null;
};

// Wrapper component to handle scroll-to-top on route changes
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageTitle />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
