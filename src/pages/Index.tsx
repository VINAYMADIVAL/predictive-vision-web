import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import AnalyticsDashboard from "@/components/analytics/AnalyticsDashboard";
import RegistrationForm from "@/components/RegistrationForm";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Dashboard Preview */} 
      <Dashboard />
      
      {/* Advanced Analytics Dashboard */}
      <AnalyticsDashboard />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Registration Form */}
      <RegistrationForm />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
