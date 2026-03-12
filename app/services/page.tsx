import CTASection from "../../components/service/CTASection";
import HeroSection from "../../components/service/HeroSection";
import ServicesSection from "../../components/service/ServicesSection";

export default function ServicesPage() {
  return (
    <main className="flex flex-col gap-32">
      <HeroSection />
      <ServicesSection />
      <CTASection />
    </main>
  );
}