import { motion } from "framer-motion";
import { Leaf, BookOpen, ShieldCheck, Heart } from "lucide-react";

const features = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Locally sourced, farm-fresh produce every single day." },
  { icon: BookOpen, title: "Traditional Recipes", desc: "Time-honoured Maharashtrian recipes passed through generations." },
  { icon: ShieldCheck, title: "Hygienic Preparation", desc: "Strict hygiene standards maintained at every step." },
  { icon: Heart, title: "Made With Love", desc: "Every dish carries the warmth of a home-cooked meal." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold sm:text-4xl"
      >
        Why Choose <span className="text-accent">Us</span>
      </motion.h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="card-warm flex flex-col items-center p-8 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
              <f.icon size={28} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
