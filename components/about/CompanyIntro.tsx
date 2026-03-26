'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Users, Target, Award, Globe } from "lucide-react";

export default function CompanyIntro() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    {
      icon: Users,
      title: "Our Mission",
      content: "To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age."
    },
    {
      icon: Target,
      title: "Our Vision",
      content: "To be the global leader in enterprise software development, recognized for our commitment to excellence, innovation, and client success."
    },
    {
      icon: Award,
      title: "Our Values",
      content: "Excellence, Innovation, Integrity, Collaboration, and Customer-Centricity guide everything we do and every solution we deliver."
    },
    {
      icon: Globe,
      title: "Our Impact",
      content: "Serving 20+ countries with 300+ successful projects, we've helped transform businesses across industries with cutting-edge technology."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content Side */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Empowering Digital
                <span className="block text-primary">Transformation</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a global technology company delivering high-quality software solutions
                across web, mobile, cloud, and AI. Our engineers help companies build scalable
                digital products, automate processes, and accelerate digital transformation.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab, index) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeTab === index
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{tab.title}</span>
                    </button>
                  );
                })}
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  {tabs[activeTab].content}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Expert Engineers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">17+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team.jpeg"
                alt="team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">ISO Certified</div>
                  <div className="text-xs text-gray-600">Quality Assurance</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Global Reach</div>
                  <div className="text-xs text-gray-600">20+ Countries</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}