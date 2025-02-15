import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = Array(6).fill({
  content: "Adtask transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!",
  author: "Dean Watson",
  role: "Managing Director - Farmland"
});

export function Testimonials() {
  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Trusted by<br />
            <span className="text-primary">satisfied clients</span>
          </h2>
          <p className="text-muted-foreground">
            Discover how we've driven growth and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${index}`} />
                      <AvatarFallback>DW</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
