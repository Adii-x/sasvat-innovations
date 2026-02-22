import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getImageForName } from "@/lib/assets";

interface MenuItem {
  name: string;
  desc: string;
  image: string;
  category: string;
  details: string;
}

const menuData: Omit<MenuItem, "image">[] = [
  { name: "Dry Fruit Laddu", desc: "Loaded with premium dry fruits in every bite.", category: "Laddus & Snacks", details: "Handcrafted with a rich blend of almonds, cashews, pistachios, and natural sweetness." },
  { name: "Dink Laddu", desc: "Traditional energy-boosting laddus made with edible gum and pure ghee.", category: "Laddus & Snacks", details: "Prepared using time-honored recipes, these laddus are rich, nourishing, and perfect for strength and recovery." },
  { name: "Besan Laddu", desc: "Golden roasted besan blended with aromatic ghee and sweetness.", category: "Laddus & Snacks", details: "Slow-roasted to perfection for that melt-in-mouth texture and authentic homemade taste." },
  { name: "Rava Laddu", desc: "Soft and fragrant laddus made from roasted semolina.", category: "Laddus & Snacks", details: "Lightly sweetened and delicately flavored for a comforting, festive delight." },
  { name: "Shengdana Laddu", desc: "Crunchy peanut laddus with a rustic traditional flavor.", category: "Laddus & Snacks", details: "A perfect balance of nuttiness and sweetness, crafted fresh for every batch." },
  { name: "Chivda", desc: "Crispy, flavorful snack mix with a traditional Maharashtrian touch.", category: "Laddus & Snacks", details: "Light, crunchy, and perfectly seasoned for tea-time cravings and festive gatherings." },
  { name: "Veg Biryani", desc: "Aromatic basmati rice layered with fresh vegetables and traditional spices.", category: "Main Dishes", details: "Slow-cooked to perfection, delivering rich flavors and comforting warmth in every bite." },
  { name: "Pav Bhaji", desc: "A flavorful blend of mashed vegetables cooked in authentic spices.", category: "Main Dishes", details: "Served with buttery pav and a burst of Maharashtrian street-style taste." },
  { name: "Veg Grilled Sandwich", desc: "Crispy grilled sandwich filled with fresh vegetables and savory spreads.", category: "Main Dishes", details: "Perfectly toasted for a satisfying crunch and comforting homemade flavor." },
  { name: "Mushroom Bhaji", desc: "Fresh mushrooms cooked in rich Maharashtrian-style masala.", category: "Main Dishes", details: "A flavorful, aromatic sabji prepared with traditional spices and pure ingredients." },
  { name: "Shengdana Gul Poli", desc: "Soft poli stuffed with a sweet blend of roasted peanuts and jaggery.", category: "Traditional Maharashtrian Specials", details: "A perfect balance of nutty richness and traditional sweetness in every bite." },
  { name: "Puran Poli", desc: "Classic festive poli filled with sweet chana dal and jaggery mixture.", category: "Traditional Maharashtrian Specials", details: "Prepared using paramparik methods for that authentic, melt-in-mouth experience." },
  { name: "Sabudana Vada", desc: "Crispy golden vadas made with sabudana and roasted peanuts.", category: "Traditional Maharashtrian Specials", details: "Light, crunchy, and perfect for fasting days or evening cravings." },
  { name: "Gajar Halwa", desc: "Slow-cooked grated carrots blended with milk, ghee, and natural sweetness.", category: "Sweets & Breads", details: "Rich, comforting, and filled with warmth — a timeless festive delight." },
  { name: "Gulab Jamun", desc: "Soft, golden-fried dumplings soaked in rich sugar syrup.", category: "Sweets & Breads", details: "Delicately flavored with cardamom and crafted to deliver a melt-in-the-mouth indulgence with every bite." },
];

const menuItems: MenuItem[] = menuData.map((item) => ({
  ...item,
  image: getImageForName(item.name),
}));

const categories = ["All", "Laddus & Snacks", "Main Dishes", "Traditional Maharashtrian Specials", "Sweets & Breads"];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const filtered = activeCategory === "All" ? menuItems : menuItems.filter((m) => m.category === activeCategory);

  const whatsappLink = (name: string) =>
    `https://wa.me/918459253221?text=${encodeURIComponent(`Hi! I'd like to order ${name} from Sasvat Innovations.`)}`;

  return (
    <section id="menu" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Our <span className="text-accent">Menu</span>
        </motion.h2>

        {/* Category tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${activeCategory === cat
                ? "saffron-gradient text-accent-foreground shadow-md"
                : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(item)}
              className="card-warm cursor-pointer overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-accent">{item.category}</span>
                <h3 className="mt-1 text-lg font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-background shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground shadow-md transition-colors hover:bg-gray-100"
                aria-label="Close"
              >
                <X size={22} strokeWidth={3} />
              </button>
              <img src={selected.image} alt={selected.name} className="w-full rounded-t-2xl object-cover" style={{ maxHeight: "320px" }} />
              <div className="p-6 sm:p-8">
                <span className="text-xs font-medium text-accent">{selected.category}</span>
                <h3 className="mt-1 text-2xl font-bold">{selected.name}</h3>
                <p className="mt-3 text-muted-foreground">{selected.details}</p>
                <a
                  href={whatsappLink(selected.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block whatsapp-btn"
                >
                  Order via WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuSection;
