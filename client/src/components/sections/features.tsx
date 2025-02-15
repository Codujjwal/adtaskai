import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Code2, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Lightning Fast Deployment",
    description: "Streamline your deployment pipeline with intelligent CI/CD integration. Ship faster, break less."
  },
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "Intelligent Code Automation",
    description: "Auto-generates boilerplate code, test cases, and documentation. Let AI handle the routine while you focus on innovation."
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Real-time Collaboration",
    description: "Seamlessly work with team members while AI manages conflicts and merges changes intelligently."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary/80 mb-2 inline-block">
            FEATURES
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Feature packed for the{" "}
            <span className="text-primary">most productive teams</span>.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience lightning-fast setup with intelligent features designed to optimize
            your workflow instantly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Code Preview Section */}
        <motion.div 
          className="mt-24 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-black/90 rounded-lg p-6 font-mono text-sm text-blue-400">
            <pre className="overflow-x-auto">
              <code>
                {`const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = fns => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}`}
              </code>
            </pre>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Intelligent Code Analysis</h3>
            <p className="text-muted-foreground">
              Our AI-powered code analysis helps you write better code faster by providing real-time suggestions and optimizations.
            </p>
          </div>
        </motion.div>

        {/* Platform Integration Icons */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-medium mb-8">
            Adtask AI is available on your favorite platforms:
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            {Array(5).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="w-16 h-16 bg-card/50 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code2 className="w-8 h-8 text-primary/60" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}