'use client';

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const stats = [
    { number: 500, suffix: "+", label: "Expert Engineers", icon: "👥" },
    { number: 17, suffix: "+", label: "Years Experience", icon: "⏱️" },
    { number: 20, suffix: "+", label: "Countries Served", icon: "🌍" },
    { number: 300, suffix: "+", label: "Projects Delivered", icon: "🚀" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = duration / steps;

      stats.forEach((stat, index) => {
        let current = 0;
        const target = stat.number;
        const step = target / steps;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, increment);
      });
    }
  }, [isVisible]);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-blue-50/50 to-primary/5 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering exceptional results through innovation, expertise, and dedication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">{stat.icon}</div>

                <div className="space-y-2">
                  <div className="text-5xl lg:text-6xl font-bold text-primary">
                    {counters[index]}{stat.suffix}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mt-6">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${(counters[index] / stat.number) * 100}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional achievements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '800ms' }}>
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1000ms' }}>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1200ms' }}>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
}