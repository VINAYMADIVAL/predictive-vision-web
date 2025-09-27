import { useState } from "react";
import { Building, Mail, Phone, Globe, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    gstin: "",
    pan: "",
    industry: "",
    email: "",
    phone: "",
    website: "",
    contactPerson: "",
    designation: "",
    requirements: ""
  });

  const industries = [
    "Manufacturing",
    "Automotive",
    "Electronics",
    "Pharmaceuticals",
    "Food & Beverage",
    "Textiles",
    "Chemical",
    "Aerospace",
    "Construction",
    "Energy & Utilities",
    "Other"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    setStep(4); // Success step
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Building className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Collaboration Opportunity</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Connect with Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in exploring this prototype further? Connect with our development team 
            for collaboration opportunities and technical discussions.
          </p>
        </div>

        {/* Progress Bar */}
        {step !== 4 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className={`flex items-center ${stepNum < 3 ? 'flex-1' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    step >= stepNum ? 'bg-primary border-primary text-primary-foreground' : 'border-muted text-muted-foreground'
                  }`}>
                    {step > stepNum ? <CheckCircle className="w-5 h-5" /> : stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div className={`flex-1 h-0.5 mx-4 transition-colors ${
                      step > stepNum ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Company Details</span>
              <span>Contact Information</span>
              <span>Requirements</span>
            </div>
          </div>
        )}

        {/* Form Steps */}
        <div className="glass-card p-8 animate-slide-up">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Company Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    className="bg-card-glass border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select onValueChange={(value) => handleInputChange("industry", value)}>
                    <SelectTrigger className="bg-card-glass border-border/50">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gstin">GSTIN</Label>
                  <Input
                    id="gstin"
                    placeholder="Enter GSTIN number"
                    value={formData.gstin}
                    onChange={(e) => handleInputChange("gstin", e.target.value)}
                    className="bg-card-glass border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pan">PAN Number</Label>
                  <Input
                    id="pan"
                    placeholder="Enter PAN number"
                    value={formData.pan}
                    onChange={(e) => handleInputChange("pan", e.target.value)}
                    className="bg-card-glass border-border/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Company Website</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="website"
                    placeholder="https://yourcompany.com"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    className="pl-10 bg-card-glass border-border/50"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Contact Person *</Label>
                  <Input
                    id="contactPerson"
                    placeholder="Enter contact person name"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                    className="bg-card-glass border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="designation">Designation</Label>
                  <Input
                    id="designation"
                    placeholder="e.g., Supply Chain Manager"
                    value={formData.designation}
                    onChange={(e) => handleInputChange("designation", e.target.value)}
                    className="bg-card-glass border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Business Email *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 bg-card-glass border-border/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pl-10 bg-card-glass border-border/50"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Your Requirements</h3>
              
              <div className="space-y-2">
                <Label htmlFor="requirements">Tell us about your supply chain challenges</Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Textarea
                    id="requirements"
                    placeholder="Describe your current challenges, expected outcomes, and any specific requirements..."
                    value={formData.requirements}
                    onChange={(e) => handleInputChange("requirements", e.target.value)}
                    className="pl-10 bg-card-glass border-border/50 min-h-32"
                  />
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">What happens next?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Our team will review your requirements within 24 hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Schedule a personalized demo tailored to your needs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Get a custom implementation roadmap
                  </li>
                </ul>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Registration Successful!</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Thank you for your interest. Our team will contact you within 24 hours to schedule your personalized demo.
              </p>
              <Button variant="cta" size="lg">
                Explore Prototype Dashboard
              </Button>
            </div>
          )}

          {/* Navigation Buttons */}
          {step !== 4 && (
            <div className="flex justify-between pt-8 border-t border-border/50">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={step === 1}
              >
                Previous
              </Button>
              
              {step === 3 ? (
                <Button variant="cta" onClick={handleSubmit}>
                  Contact Our Team
                </Button>
              ) : (
                <Button variant="default" onClick={handleNext}>
                  Next Step
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
    </section>
  );
};

export default RegistrationForm;