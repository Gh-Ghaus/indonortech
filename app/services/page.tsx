import CTASection from "../../components/service/CTASection";
import HeroSection from "../../components/service/HeroSection";
import ServicesSection from "../../components/service/ServicesSection";

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <CTASection />
    </main>
  );
}