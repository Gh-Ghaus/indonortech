'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    "Enterprise Software",
    "AI Solutions",
    "Digital Platforms",
    "Cloud Systems"
  ];

  return (
    <section className="relative h-[95vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/about-bg1.jpg"
        alt="company office"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`relative z-10 max-w-5xl px-6 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-8">
          <p className="text-primary font-semibold text-lg mb-4 tracking-widest uppercase">
            About IndoNorTech
          </p>
          <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            Building the Future of
            <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
        </div>

        <p className="text-xl lg:text-2xl opacity-95 mb-8 max-w-3xl mx-auto leading-relaxed">
          We are a global technology powerhouse delivering cutting-edge software solutions,
          AI systems, and digital platforms that transform businesses worldwide.
        </p>

        {/* Dynamic highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {highlights.map((highlight, index) => (
            <span
              key={index}
              className={`px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium transition-all duration-500 hover:bg-white/20 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Our Story
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            Our Expertise
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}