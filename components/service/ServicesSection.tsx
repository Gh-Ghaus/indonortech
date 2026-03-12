import { Cpu, Code, Smartphone, Users, Cloud, Sparkles } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Software Development",
    description:
      "Custom software engineering tailored to your business goals.",
    icon: <Code />,
  },
  {
    title: "AI Solutions",
    description:
      "Machine learning, LLM integration, and intelligent automation.",
    icon: <Sparkles />,
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform and native mobile apps for iOS and Android.",
    icon: <Smartphone />,
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud architecture and DevOps automation.",
    icon: <Cloud />,
  },
  {
    title: "Staff Augmentation",
    description:
      "Extend your engineering team with experienced developers.",
    icon: <Users />,
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize legacy systems and accelerate innovation.",
    icon: <Cpu />,
  },
];

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          What We Offer
        </h2>

        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Our team provides full-cycle software development services
          from idea to deployment and long-term support.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

    </section>
  );
}