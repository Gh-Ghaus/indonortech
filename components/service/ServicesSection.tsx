'use client';

import { useState, useEffect } from "react";
import { Cpu, Code, Smartphone, Users, Cloud, Sparkles, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Software Development",
    description: "Custom software engineering tailored to your business goals with modern technologies and best practices.",
    icon: <Code />,
    features: ["Full-stack Development", "API Design", "Database Architecture", "Code Review"],
    color: "from-blue-500 to-cyan-500",
    stats: "300+ Projects"
  },
  {
    title: "AI Solutions",
    description: "Machine learning, LLM integration, and intelligent automation to transform your business processes.",
    icon: <Sparkles />,
    features: ["Machine Learning", "NLP Integration", "Predictive Analytics", "AI Consulting"],
    color: "from-purple-500 to-pink-500",
    stats: "50+ AI Projects"
  },
  {
    title: "Mobile Development",
    description: "Cross-platform and native mobile apps for iOS and Android with exceptional user experiences.",
    icon: <Smartphone />,
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
    color: "from-green-500 to-emerald-500",
    stats: "150+ Apps"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud architecture and DevOps automation for reliable and efficient deployments.",
    icon: <Cloud />,
    features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Auto-scaling"],
    color: "from-orange-500 to-red-500",
    stats: "200+ Deployments"
  },
  {
    title: "Staff Augmentation",
    description: "Extend your engineering team with experienced developers who integrate seamlessly.",
    icon: <Users />,
    features: ["Senior Developers", "Project Managers", "QA Engineers", "Quick Onboarding"],
    color: "from-indigo-500 to-blue-500",
    stats: "100+ Placements"
  },
  {
    title: "Digital Transformation",
    description: "Modernize legacy systems and accelerate innovation with cutting-edge technologies.",
    icon: <Cpu />,
    features: ["System Migration", "Process Automation", "Legacy Modernization", "Tech Strategy"],
    color: "from-teal-500 to-cyan-500",
    stats: "75+ Transformations"
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Our Expertise
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Comprehensive
            <span className="block text-primary">Technology Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team provides full-cycle software development services from concept to deployment
            and long-term support, ensuring your digital success at every stage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <ServiceCard
                {...service}
                isActive={activeService === index}
                onHover={() => setActiveService(index)}
                onLeave={() => setActiveService(null)}
              />
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className={`bg-white p-8 lg:p-12 rounded-3xl shadow-lg border border-gray-100 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Development Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure project success and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Requirements gathering and planning" },
              { step: "02", title: "Design", desc: "Architecture and UI/UX design" },
              { step: "03", title: "Development", desc: "Agile development and testing" },
              { step: "04", title: "Deployment", desc: "Launch and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">{phase.step}</span>
                </div>
                <h4 className="font-semibold mb-2">{phase.title}</h4>
                <p className="text-sm text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <span>Ready to Start Your Project?</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}