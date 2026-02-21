import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Order", href: "#order" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const isHero = !scrolled;
  const linkClass = isHero
    ? "text-base font-medium text-white/90 transition-colors hover:text-white"
    : "text-base font-medium text-muted-foreground transition-colors hover:text-primary";
  const brandClass = isHero
    ? "hidden font-heading text-xl font-semibold text-white sm:block"
    : "hidden font-heading text-xl font-semibold text-foreground sm:block";
  const menuIconClass = isHero ? "md:hidden text-white" : "md:hidden text-foreground";

  const staggerDelay = 0.12;
  const navTransition = { duration: 0.7, delay: 0.2, ease: "easeOut" as const };
  const itemTransition = (delay: number) => ({ duration: 0.5, delay, ease: "easeOut" as const });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={navTransition}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav glass-nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        <motion.button
          onClick={() => handleClick("#home")}
          className="flex items-center gap-2 text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={itemTransition(0.2 + staggerDelay * 0)}
        >
          <img src={logoImg} alt="Sasvat Innovations" className="h-[2.8rem] w-[2.8rem] shrink-0 object-contain" />
          <span className={brandClass}>
            Sasvat Innovations
          </span>
        </motion.button>

        {/* Desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <motion.button
                onClick={() => handleClick(link.href)}
                className={linkClass}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={itemTransition(0.2 + staggerDelay * (i + 1))}
              >
                {link.label}
              </motion.button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <motion.button
          className={menuIconClass}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={itemTransition(0.2 + staggerDelay * 7)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden glass-nav md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="block w-full rounded-lg px-4 py-3 text-left text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
