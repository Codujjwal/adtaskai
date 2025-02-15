import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm">
            AI DEVELOPMENT PARTNER
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AdTask AI is your intelligent companion that transforms how developers code, test, and deploy
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Say goodbye to repetitive tasks and hello to accelerated productivity
          </p>

          <Button size="lg" className="rounded-full">
            Try Now for Free
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
