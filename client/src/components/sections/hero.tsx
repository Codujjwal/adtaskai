import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background z-0" />

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <motion.img
          src="/assets/image_1739629164471.png"
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-40"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div 
            className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AI DEVELOPMENT PARTNER
          </motion.div>

          <motion.p
            className="text-base text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            AdTask AI is your intelligent companion that transforms how developers code, test, and deploy.
            Say goodbye to repetitive tasks and hello to accelerated productivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="rounded-full">
              Try Now for Free
            </Button>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="mt-16 rounded-lg border border-border/50 bg-card p-2 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="aspect-video bg-black/90 rounded-md flex items-center justify-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-white ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Platform Icons with Interactive Grid */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          {[
            { src: "/assets/image_1739629078481.png", alt: "Platform 1" },
            { src: "/assets/image_1739629104518.png", alt: "Platform 2" },
            { src: "/assets/image_1739629126462.png", alt: "Platform 3" },
            { src: "/assets/image_1739629147699.png", alt: "Platform 4" },
          ].map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="max-w-[120px] h-auto filter hover:brightness-125 transition-all"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}