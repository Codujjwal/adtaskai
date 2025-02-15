import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background z-0" />

      {/* Background Image with Parallax Effect */}
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
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              AI DEVELOPMENT PARTNER
            </motion.span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Are you ready to boost
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-primary"
            >
              your Development?
            </motion.span>
          </h1>

          <motion.p 
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Say goodbye to repetitive tasks and hello to accelerated productivity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="rounded-full">
              Try Now for Free
            </Button>
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