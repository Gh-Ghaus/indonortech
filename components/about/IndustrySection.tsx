'use client';

import { useState } from "react";
import {
  Smartphone,
  ShoppingCart,
  Car,
  CreditCard,
  Heart,
  Cpu,
  ChevronRight,
  TrendingUp
} from "lucide-react";

const industries = [
  {
    name: "Telecom",
    icon: Smartphone,
    description: "Next-generation communication solutions and network infrastructure",
    color: "from-blue-500 to-cyan-500",
    projects: "50+ Projects"
  },
  {
    name: "Retail & eCommerce",
    icon: ShoppingCart,
    description: "Digital commerce platforms and customer experience solutions",
    color: "from-green-500 to-emerald-500",
    projects: "80+ Projects"
  },
  {
    name: "Automotive",
    icon: Car,
    description: "Connected vehicles, autonomous systems, and mobility solutions",
    color: "from-red-500 to-pink-500",
    projects: "35+ Projects"
  },
  {
    name: "Financial Services",
    icon: CreditCard,
    description: "Secure banking platforms, fintech solutions, and payment systems",
    color: "from-purple-500 to-indigo-500",
    projects: "60+ Projects"
  },
  {
    name: "Healthcare",
    icon: Heart,
    description: "Medical software, patient management, and healthcare analytics",
    color: "from-rose-500 to-pink-500",
    projects: "40+ Projects"
  },
  {
    name: "Software & Hi-Tech",
    icon: Cpu,
    description: "Enterprise software, AI systems, and cutting-edge technology",
    color: "from-orange-500 to-red-500",
    projects: "90+ Projects"
  },
];

export default function IndustrySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Industries We Serve
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforming Industries
            <span className="block text-primary">Worldwide</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across diverse industries, delivering innovative solutions
            that drive digital transformation and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`group relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  isHovered ? 'scale-105 -translate-y-2' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 transition-transform duration-500 ${
                  isHovered ? 'scale-110 rotate-6' : ''
                }`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Projects count */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {industry.projects}
                    </span>
                    <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : ''
                    }`} />
                  </div>
                </div>

                {/* Hover effect border */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${industry.color} transition-all duration-500 ${
                  isHovered ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <span>Explore Our Industry Solutions</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}