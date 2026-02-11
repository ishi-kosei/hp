import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import NumbersSection from "@/components/NumbersSection";
import FeaturesSection from "@/components/FeaturesSection";
import EventsSection from "@/components/EventsSection";
import VoicesSection from "@/components/VoicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <NumbersSection />
        <FeaturesSection />
        <EventsSection />
        <VoicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
