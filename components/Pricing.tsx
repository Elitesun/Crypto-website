"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for beginners exploring crypto investments",
    features: [
      "Basic market analysis",
      "Single currency trading",
      "Email support",
      "Basic security features",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    description: "Ideal for active traders and growing portfolios",
    features: [
      "Advanced market analysis",
      "Multi-currency trading",
      "24/7 Priority support",
      "Enhanced security features",
      "Portfolio management tools",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For professional traders and institutions",
    features: [
      "Real-time market data",
      "Unlimited trading",
      "Dedicated account manager",
      "Advanced API access",
      "Custom security solutions",
      "Institutional tools",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-[#CCFF00]">Investment</span> Plan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan for your investment journey. Upgrade or
            downgrade anytime to match your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative rounded-2xl p-8 ${tier.popular ? 'border-2 border-[#CCFF00]' : 'border border-gray-800'} bg-[#111111] hover:border-[#CCFF00] transition-colors`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-2xl font-bold mb-4">{tier.name}</div>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold">{tier.price}</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-400 mb-8">{tier.description}</p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-[#CCFF00] mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full ${tier.popular ? 'bg-[#CCFF00] text-black hover:bg-[#b8e600]' : 'bg-gray-800 text-white hover:bg-gray-700'} transition-colors font-medium`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;