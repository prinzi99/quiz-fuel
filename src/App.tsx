import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieConsentProvider } from "./contexts/CookieConsentContext";
import CookieBanner from "./components/CookieBanner";
import CookieSettingsButton from "./components/CookieSettingsButton";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import ResultPage from "./pages/ResultPage";
import ResultPageB from "./pages/ResultPageB";
import ResultPageC from "./pages/ResultPageC";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CookieConsentProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/dfgk34k" element={<ResultPage />} />
            <Route path="/k93fda" element={<ResultPageB />} />
            <Route path="/x7q9p2" element={<ResultPageC />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <CookieBanner />
        <CookieSettingsButton />
      </CookieConsentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
