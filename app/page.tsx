import AboutHero from "../components/about/AboutHero";
import CompanyIntro from "../components/about/CompanyIntro";
import IndustrySection from "../components/about/IndustrySection";
import StatsSection from "../components/about/StatsSection";
import TeamCTA from "../components/about/TeamCTA";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import { buildMetadata, pageSeo } from "@/lib/site";

export const metadata = buildMetadata(pageSeo.home);

export default function Home() {
  return (
    <div className="flex flex-col gap-28">
      <AboutHero />
      <CompanyIntro />
      <StatsSection />
      <FeaturedProjects />
      <IndustrySection />
      <TeamCTA />
    </div>
  );
}
