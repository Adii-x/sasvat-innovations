import { motion } from "framer-motion";

const assetImages = import.meta.glob<{ default: string }>("@/assets/*.{jpg,jpeg,png,webp}", { eager: true });
const nameToSlug: Record<string, string> = {
  "Gajar Halwa": "gajar-halva",
  "Mushroom Bhaji": "mashroom-bhaji",
};
function getImage(name: string): string {
  const slug = nameToSlug[name] ?? name.toLowerCase().replace(/\s+/g, "-");
  const norm = (s: string) => s.toLowerCase().replace(/_/g, "-").replace(/,/g, "");
  const slugNorm = norm(slug);
  const entry = Object.entries(assetImages).find(([path]) => {
    const base = path.replace(/^.*[/\\]/, "").replace(/\.[^.]+$/, "").toLowerCase();
    return norm(base) === slugNorm || norm(base) === norm(`food-${slug}`);
  });
  return entry ? (entry[1] as { default: string }).default : "";
}

const dishes = [
  { name: "Puran Poli", desc: "Festive perfection — sweet, aromatic, and rich in tradition." },
  { name: "Gajar Halwa", desc: "Rich, comforting, and filled with warmth — a timeless festive delight." },
  { name: "Mushroom Bhaji", desc: "Fresh mushrooms in rich Maharashtrian-style masala — flavorful and aromatic." },
];

const SignatureDishes = () => (
  <section className="signature-strip py-16 sm:py-20">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-bold text-warm-cream sm:text-4xl"
      >
        Our Signature <span className="text-deep-saffron">Dishes</span>
      </motion.h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {dishes.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group overflow-hidden rounded-xl bg-white/15 ring-1 ring-white/25 transition-shadow hover:shadow-[0_0_30px_rgba(217,119,6,0.2)]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={getImage(d.name) || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%235a4a3f' width='400' height='300'/%3E%3C/svg%3E"} alt={d.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-warm-cream">{d.name}</h3>
              <p className="mt-1 text-sm text-warm-cream/70">{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SignatureDishes;
