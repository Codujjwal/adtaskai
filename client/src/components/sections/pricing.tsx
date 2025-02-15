import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Basic AI code generation",
      "Up to 1 team members",
      "Community Support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$10",
    period: "/month",
    features: [
      "Advanced AI Features",
      "Up to 20 team members",
      "Priority Support",
      "Custom Integrations"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$39",
    period: "/month",
    features: [
      "Advanced AI Features",
      "Up to 200 team members",
      "Priority Support",
      "Custom AI training"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Pricing that scales<br />
            <span className="text-primary">with you</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${plan.popular ? 'border-primary' : ''}`}>
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-baseline justify-between">
                      <span>{plan.name}</span>
                      <div>
                        <span className="text-2xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground text-sm">{plan.period}</span>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
