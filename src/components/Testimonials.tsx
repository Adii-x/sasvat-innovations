import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Priya S.", review: "Tastes exactly like my grandmother's cooking! The puran poli was heavenly. 🥰", rating: 5 },
  { name: "Rahul M.", review: "Best misal pav I've had outside of Pune. Spice level was perfect!", rating: 5 },
  { name: "Sneha K.", review: "The modaks were divine! Ordered for Ganesh Chaturthi and everyone loved them.", rating: 5 },
  { name: "Amit D.", review: "Fresh, hygienic, and so authentic. Now I don't miss home food anymore.", rating: 5 },
  { name: "Meera J.", review: "Ordered the besan laddus for Diwali — they vanished within hours! 😄", rating: 5 },
  { name: "Vikram P.", review: "The sabudana vada was crispy on the outside, perfectly soft inside. Reminded me of home!", rating: 5 },
];

const Testimonials = () => (
  <section id="testimonials" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-bold sm:text-4xl"
      >
        What Our <span className="text-accent">Customers</span> Say
      </motion.h2>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="mt-12 flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible snap-x">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="min-w-[280px] snap-start card-warm p-6 sm:min-w-0"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 font-heading text-sm font-bold text-accent">
                {r.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-sm">{r.name}</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.review}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
