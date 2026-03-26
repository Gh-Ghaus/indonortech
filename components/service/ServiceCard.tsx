'use client';

import { ReactNode, useState } from "react";
import { ChevronRight, CheckCircle } from "lucide-react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  stats: string;
  isActive?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  color,
  stats,
  isActive = false,
  onHover,
  onLeave
}: Props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`
        group relative bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden
        ${isActive ? 'scale-105 -translate-y-4 shadow-2xl' : 'hover:scale-105 hover:-translate-y-2'}
      `}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() => setShowDetails(!showDetails)}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

      {/* Icon */}
      <div className={`
        relative w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 transition-all duration-500
        ${isActive ? 'scale-110 rotate-6' : 'group-hover:scale-110 group-hover:rotate-6'}
      `}>
        <div className="text-white text-2xl">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ChevronRight className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
            isActive ? 'translate-x-1 text-primary' : 'group-hover:translate-x-1 group-hover:text-primary'
          }`} />
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Stats */}
        <div className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-4">
          {stats}
        </div>

        {/* Features */}
        <div className={`space-y-2 transition-all duration-500 ${
          showDetails || isActive ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
        }`}>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover effect border */}
      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color} transition-all duration-500 ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></div>
    </div>
  );
}