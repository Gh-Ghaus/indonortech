import AboutHero from "../../components/about/AboutHero";
import CompanyIntro from "../../components/about/CompanyIntro";
import IndustrySection from "../../components/about/IndustrySection";
import StatsSection from "../../components/about/StatsSection";
import TeamCTA from "../../components/about/TeamCTA";


export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      <CompanyIntro />
      <StatsSection />
      <IndustrySection />
      <TeamCTA />
    </main>
  );
}