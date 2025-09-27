import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PowergridChallenge from "@/components/PowergridChallenge";
import KeyInputs from "@/components/KeyInputs";
import HowItWorks from "@/components/HowItWorks";
import PrototypeDemo from "@/components/PrototypeDemo";
import KPIMetrics from "@/components/KPIMetrics";
import ImplementationRoadmap from "@/components/ImplementationRoadmap";
import NationalImpact from "@/components/NationalImpact";
import DeploymentSecurity from "@/components/DeploymentSecurity";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import AnalyticsDashboard from "@/components/analytics/AnalyticsDashboard";
import Pricing from "@/components/Pricing";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* POWERGRID-Specific Sections */}
      <PowergridChallenge />
      <KeyInputs />
      <HowItWorks />
      <PrototypeDemo />
      <KPIMetrics />
      <ImplementationRoadmap />
      <NationalImpact />
      <DeploymentSecurity />
      
      {/* Original SaaS Features - Reframed */}
      <Features />
      <Dashboard />
      <AnalyticsDashboard />
      <Pricing />
      
      {/* Contact/Registration */}
      <RegistrationForm />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
