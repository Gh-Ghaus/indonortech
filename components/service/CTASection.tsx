'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle, Calendar, Sparkles } from "lucide-react";

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "IndoNorTech transformed our legacy system into a modern, scalable platform that increased our efficiency by 300%.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "Enterprise Software Client"
    },
    {
      text: "Their AI solutions helped us automate complex processes, saving us 40 hours per week and reducing errors significantly.",
      author: "Michael Chen",
      role: "Head of Operations",
      company: "Manufacturing Client"
    },
    {
      text: "The mobile app they built for us has over 100K downloads and 4.8-star rating. Exceptional quality and support.",
      author: "Emma Rodriguez",
      role: "Product Manager",
      company: "E-commerce Client"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 text-center text-white overflow-hidden">
      {/* Background */}
      <Image
        src="/images/cta-bg.jpg"
        alt="cta"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 space-y-16">
        {/* Main CTA */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Ready to Transform?
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Let's Build Something
            <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>

          <p className="text-xl lg:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed mb-12">
            Partner with our expert team to create scalable digital products powered by modern technologies.
            From concept to deployment, we're with you every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className={`bg-white/10 backdrop-blur-md p-8 lg:p-12 rounded-3xl border border-white/20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">What Our Clients Say</h3>
              <p className="text-white/80">Trusted by industry leaders worldwide</p>
            </div>

            <div className="relative">
              <div className="text-center space-y-6">
                <blockquote className="text-lg lg:text-xl italic opacity-95 max-w-3xl mx-auto leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div>
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-sm opacity-80">{testimonials[currentTestimonial].role}</div>
                  <div className="text-xs opacity-60 mt-1">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>

              {/* Testimonial indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-80">Projects Delivered</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold mb-2">20+</div>
            <div className="text-sm opacity-80">Countries Served</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-sm opacity-80">Client Satisfaction</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-80">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}