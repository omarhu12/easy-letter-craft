
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LegalTemplates from "./pages/LegalTemplates";
import GovernmentTemplates from "./pages/GovernmentTemplates";
import EducationTemplates from "./pages/EducationTemplates";
import MunicipalTemplates from "./pages/MunicipalTemplates";
import HealthcareTemplates from "./pages/HealthcareTemplates";
import BusinessTemplates from "./pages/BusinessTemplates";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/templates/legal" element={<LegalTemplates />} />
          <Route path="/templates/government" element={<GovernmentTemplates />} />
          <Route path="/templates/education" element={<EducationTemplates />} />
          <Route path="/templates/municipal" element={<MunicipalTemplates />} />
          <Route path="/templates/healthcare" element={<HealthcareTemplates />} />
          <Route path="/templates/business" element={<BusinessTemplates />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
