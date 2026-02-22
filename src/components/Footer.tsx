import logoImg from "@/assets/logo.png";
import { scrollToSection } from "@/lib/scroll";

const Footer = () => {
  const scrollTo = scrollToSection;

  return (
    <footer className="dark-section py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 text-lg sm:justify-start">
              <img src={logoImg} alt="Sasvat Innovations" className="h-[2.8rem] w-[2.8rem] shrink-0 object-contain" />
              <span className="font-heading font-semibold">Sasvat Innovations</span>
            </div>
            <p className="mt-2 text-sm opacity-70">
              Home-style taste • Quality ingredients • Made with love
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            {["#home", "#menu", "#why-us", "#testimonials", "#order", "#contact"].map((href) => (
              <button key={href} onClick={() => scrollTo(href)} className="opacity-70 transition-opacity hover:opacity-100">
                {href.replace("#", "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-warm-cream/10 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Sasvat Innovations – Cloud Kitchen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
