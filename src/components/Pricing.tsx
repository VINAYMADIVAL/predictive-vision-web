import { Check, Star, Zap, Building, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$2,999",
      period: "per month",
      description: "Perfect for small to medium businesses starting their AI journey",
      features: [
        "Up to 10,000 SKUs",
        "Basic demand forecasting",
        "Historical analysis (2 years)",
        "Email support",
        "Standard integrations",
        "Monthly reports",
        "Single location support"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "from-primary to-primary-glow"
    },
    {
      name: "Professional",
      icon: Building,
      price: "$7,999",
      period: "per month",
      description: "Advanced features for growing enterprises with complex supply chains",
      features: [
        "Up to 100,000 SKUs",
        "Advanced ML forecasting",
        "Historical analysis (5 years)",
        "Priority support",
        "API integrations",
        "Weekly reports",
        "Multi-location support",
        "Custom dashboards",
        "Procurement optimization",
        "Inventory optimization"
      ],
      cta: "Get Started",
      popular: true,
      color: "from-secondary to-secondary-glow"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large enterprises with unique requirements",
      features: [
        "Unlimited SKUs",
        "Custom ML models",
        "Historical analysis (10+ years)",
        "Dedicated success manager",
        "Custom integrations",
        "Real-time reports",
        "Global multi-location",
        "White-label options",
        "Advanced analytics",
        "SLA guarantees",
        "On-premise deployment",
        "24/7 phone support"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-accent to-accent-glow"
    }
  ];

  const additionalFeatures = [
    "SOC 2 Type II compliant security",
    "99.9% uptime guarantee",
    "Free data migration",
    "30-day money-back guarantee",
    "Training and onboarding included"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Choose Your Success Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scale your supply chain intelligence with flexible pricing that grows with your business.
            All plans include free setup and migration.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative glass-card p-8 hover-lift animate-slide-up ${
                plan.popular ? 'ring-2 ring-secondary/50 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
              </div>

              <Button 
                variant={plan.popular ? "cta" : "default"} 
                size="lg" 
                className="w-full mb-8"
              >
                {plan.cta}
              </Button>

              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <Check className="w-4 h-4 text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">All plans include:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-muted-foreground animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Check className="w-4 h-4 text-success flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team can create a tailored package that fits your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="ghost" size="lg">
                View FAQ
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-36 -translate-y-36" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-x-36 translate-y-36" />
    </section>
  );
};

export default Pricing;