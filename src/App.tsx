
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifySignupOTP from "./pages/VerifySignupOTP";
import SetupPassword from "./pages/SetupPassword";
import Onboarding from "./pages/Onboarding";
import TwoFactorAuth from "./pages/TwoFactorAuth";
import VerifyOTP from "./pages/VerifyOTP";
import Logout from "./pages/Logout";
import ForgotPassword from "./pages/ForgotPassword";

console.log('App component initializing...');

// Create QueryClient instance outside component to prevent recreation
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  console.log('App component rendering...');
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Authentication Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/verify-signup-otp" element={<VerifySignupOTP />} />
              <Route path="/setup-password" element={<SetupPassword />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/2fa" element={<TwoFactorAuth />} />
              <Route path="/verify-otp" element={<VerifyOTP />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              
              {/* App Routes */}
              <Route path="/" element={<Index />} />
              
              {/* Redirect to login */}
              <Route path="/analytics" element={<Navigate to="/" replace />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
