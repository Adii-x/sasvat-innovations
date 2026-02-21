import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MenuSection from "@/components/MenuSection";
import SignatureDishes from "@/components/SignatureDishes";
import Testimonials from "@/components/Testimonials";
import OrderInfo from "@/components/OrderInfo";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <WhyChooseUs />
    <MenuSection />
    <SignatureDishes />
    <Testimonials />
    <OrderInfo />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
