import { Check } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Pricing | CODFY",
  description: "Transparent pricing models tailored to your project scope and requirements.",
};

const plans = [
  {
    name: "Growth",
    price: "$10k",
    description: "Perfect for startups needing a high-quality MVP or marketing website.",
    features: [
      "Custom UI/UX Design",
      "Responsive Frontend",
      "Basic CMS Integration",
      "Standard SEO Setup",
      "2 Weeks Post-Launch Support"
    ],
    highlighted: false,
  },
  {
    name: "Scale",
    price: "$25k",
    description: "Ideal for growing businesses needing comprehensive web applications.",
    features: [
      "Everything in Growth",
      "Full-Stack Web App",
      "Custom API Development",
      "Database Architecture",
      "Advanced Animations",
      "1 Month Post-Launch Support"
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations requiring scalable infrastructure and ERP/CRM systems.",
    features: [
      "Everything in Scale",
      "Microservices Architecture",
      "Cloud Infrastructure Setup",
      "High Availability & Security",
      "Dedicated Team",
      "24/7 SLA Support"
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">Transparent Pricing</h1>
          <p className="text-xl text-slate-600">
            No hidden fees, no surprises. We offer flexible engagement models tailored to your specific needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.highlighted 
                  ? "bg-gradient-to-b from-blue-50 to-white border-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.1)] border-2 transform md:-translate-y-4" 
                  : "glass-card border border-slate-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-600 text-sm h-12 mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900 font-geist">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-slate-500 ml-1">/project starting at</span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 bg-blue-500/20 p-1 rounded-full mr-3 shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-slate-600 text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact" 
                className={`w-full text-center py-4 rounded-xl font-semibold transition-all duration-200 ${
                  plan.highlighted 
                    ? "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]" 
                    : "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
