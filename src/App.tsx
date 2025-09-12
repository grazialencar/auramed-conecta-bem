import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { Layout } from "@/components/Layout";

// Pages
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { FAQ } from "./pages/FAQ";
import { Tutorial } from "./pages/Tutorial";
import { Simulador } from "./pages/Simulador";
import { ComoFunciona } from "./pages/ComoFunciona";
import { LoginProfissional } from "./pages/LoginProfissional";
import { DashboardProfissional } from "./pages/DashboardProfissional";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AccessibilityProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/simulador" element={<Simulador />} />
              <Route path="/login-profissional" element={<LoginProfissional />} />
              <Route path="/dashboard-profissional" element={<DashboardProfissional />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AccessibilityProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
