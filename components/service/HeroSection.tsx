'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate services
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    "Enterprise Software",
    "AI & Machine Learning",
    "Cloud Solutions",
    "Mobile Applications",
    "Digital Transformation"
  ];

  return (
    <section className="relative h-[95vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/service-hero.jpg"
        alt="services"
        fill
        priority
        className="object-cover"
      />

      {/* Dynamic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto px-6 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Professional Services
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            Building Digital
            <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
        </div>

        <p className="text-xl lg:text-2xl opacity-95 mb-8 max-w-4xl mx-auto leading-relaxed">
          We deliver enterprise-grade applications, AI systems, and scalable cloud solutions
          that transform businesses and accelerate growth through innovative technology.
        </p>

        {/* Dynamic service rotator */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <span className="text-sm opacity-80">Specialized in:</span>
            <span className="font-semibold text-primary transition-all duration-500">
              {services[currentService]}
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
          <div className={`text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm opacity-80">Projects Completed</div>
          </div>
          <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-3xl font-bold text-primary">20+</div>
            <div className="text-sm opacity-80">Countries Served</div>
          </div>
          <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-3xl font-bold text-primary">99.9%</div>
            <div className="text-sm opacity-80">Client Satisfaction</div>
          </div>
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