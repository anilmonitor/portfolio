import React from "react";
import Image from "next/image";
import {
  ExternalLink,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA, VentureItem } from "@/data/portfolioData";

export default function VenturesShowcase() {
  const { ventures } = PORTFOLIO_DATA;

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0d14] via-[#0f1422] to-[#0a0d14]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Tech Companies & Ventures</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Startups & Digital Platforms Founded by Anil Kumar
          </h2>

          <p className="text-gray-400 text-xs sm:text-base leading-relaxed">
            Building software companies, on-demand logistics, and digital public infrastructure engineered to scale.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ventures.map((venture: VentureItem) => (
            <div
              key={venture.id}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between glass-panel-hover group"
            >
              <div className="space-y-4">
                {/* Logo & Category Header */}
                <div className="flex items-center justify-between gap-4">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-surface-100/90 border border-white/10 p-2 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Image
                      src={venture.logo}
                      alt={`${venture.name} logo`}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>

                  <div className="text-right">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-gray-300">
                      {venture.badge}
                    </span>
                    <span className="text-[10px] text-indigo-400 block mt-1 font-semibold">
                      {venture.role}
                    </span>
                  </div>
                </div>

                {/* Name & Description */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-indigo-300 transition-colors">
                    {venture.name}
                  </h3>
                  <span className="text-xs text-gray-400 font-medium block mt-0.5">
                    {venture.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {venture.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {venture.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Active Live Platform</span>
                </div>

                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white text-xs font-bold border border-indigo-500/30 transition-all"
                >
                  <span>Visit Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
