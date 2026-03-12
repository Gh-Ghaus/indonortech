import CTASection from "../../components/industries/CTASection";
import HeroSection from "../../components/industries/HeroSection";
import IndustriesSection from "../../components/industries/IndustriesSection";


export default function IndustriesPage() {
  return (
    <main className="flex flex-col gap-28">
      <HeroSection />
      <IndustriesSection />
      <CTASection />
    </main>
  )
}