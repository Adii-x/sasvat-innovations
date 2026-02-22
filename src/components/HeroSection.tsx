import { motion } from "framer-motion";
import heroImg from "@/assets/hero-food.jpg";
import { scrollToSection } from "@/lib/scroll";

const HeroSection = () => {
  const scrollTo = scrollToSection;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Traditional Maharashtrian homemade food"
          className="w-full h-full object-cover animate-slow-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Text content over image */}
      <div className="relative container mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Homemade. <span className="text-accent">Fresh.</span> Hygienic.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto mt-4 max-w-lg text-center text-base text-white/80 sm:text-lg"
          >
            Rooted in tradition and prepared with pure ingredients, every bite carries the warmth of gharghuti flavors straight to your doorstep.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <button
              onClick={() => scrollTo("#menu")}
              className="saffron-gradient rounded-xl px-8 py-3.5 font-semibold text-accent-foreground shadow-md transition-transform hover:scale-105"
            >
              Explore Menu
            </button>
            <button
              onClick={() => scrollTo("#order")}
              className="rounded-xl border-2 border-white/70 bg-transparent px-8 py-3.5 font-semibold text-white transition-all hover:bg-white/20"
            >
              Order Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
