import React from "react";
import Image from "next/image";
import {
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { PORTFOLIO_DATA, VentureItem } from "@/data/portfolioData";

export default function VenturesShowcase() {
  const { ventures } = PORTFOLIO_DATA;

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden bg-slate-100/50 dark:bg-gradient-to-b dark:from-[#0a0d14] dark:via-[#0f1422] dark:to-[#0a0d14] border-y border-slate-200/60 dark:border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Startups & Platforms Founded by Anil Kumar
          </h2>

          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-base leading-relaxed">
            Software development company, academic platforms, hyperlocal quick commerce, and public digital infrastructure.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {ventures.map((venture: VentureItem) => (
            <div
              key={venture.id}
              className="glass-panel rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-white/15 flex flex-col justify-between glass-panel-hover group"
            >
              <div className="space-y-3.5">
                {/* Logo & Category Header */}
                <div className="flex items-center justify-between gap-4">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-white dark:bg-surface-100/90 border border-slate-200 dark:border-white/10 p-2 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                    <Image
                      src={venture.logo}
                      alt={`${venture.name} logo`}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-semibold text-slate-700 dark:text-gray-300 block">
                      {venture.badge}
                    </span>
                    <span className="text-[10px] sm:text-xs text-indigo-600 dark:text-indigo-400 block mt-0.5 font-semibold">
                      {venture.role}
                    </span>
                  </div>
                </div>

                {/* Name & Description */}
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {venture.name}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-gray-400 font-medium block mt-0.5">
                    {venture.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                  {venture.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {venture.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 border border-slate-200/60 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 sm:pt-5 border-t border-slate-200/80 dark:border-white/10 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-medium">Active Platform</span>
                </div>

                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white dark:bg-indigo-600/20 dark:hover:bg-indigo-600 dark:text-indigo-300 dark:hover:text-white text-xs font-bold border border-indigo-200 dark:border-indigo-500/30 transition-all shadow-sm"
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
