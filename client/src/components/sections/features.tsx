import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Code2, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Lightning Fast Deployment",
    description: "Streamlines your deployment pipeline with intelligent CI/CD integration"
  },
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "Intelligent Code Automation",
    description: "Auto-generates boilerplate code, test cases, and documentation"
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Smart Marketing Insights",
    description: "Leverage AI-powered analytics to optimize your service marketing"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Feature packed for the<br />
            <span className="text-primary">most productive teams.</span>
          </h2>
          <p className="text-muted-foreground">
            Experience lightning-fast setup with intelligent features designed to optimize your workflow instantly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}