import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Gift, MessageCircle } from "lucide-react";

const details = [
  { icon: CalendarDays, title: "Mon – Fri", desc: "We accept orders on weekdays." },
  { icon: Clock, title: "Advance Orders", desc: "Please place orders at least 24 hours in advance." },
  { icon: MapPin, title: "Delivery Areas", desc: "We deliver across the city. Contact us for details." },
  { icon: Gift, title: "Bulk & Festival Orders", desc: "Custom orders for festivals, events & gatherings." },
];

const OrderInfo = () => (
  <section id="order" className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-bold sm:text-4xl"
      >
        Order <span className="text-accent">Information</span>
      </motion.h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {details.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center card-warm p-6"
          >
            <d.icon size={28} className="text-accent" />
            <h3 className="mt-3 font-semibold">{d.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 mx-auto max-w-xl overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-700 p-8 text-center text-white shadow-xl"
      >
        <div className="flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/25">
            <MessageCircle size={26} strokeWidth={2} />
          </div>
          <p className="text-xl font-bold tracking-tight">DM us or WhatsApp to place your order</p>
        </div>
        <p className="mt-3 text-sm font-medium text-white/90">We'd love to prepare something special for you!</p>
      </motion.div>
    </div>
  </section>
);

export default OrderInfo;
