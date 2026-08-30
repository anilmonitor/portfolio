import React from "react";
import {
  Code2,
  Cpu,
  Video,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 1:
        return <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 2:
        return <Video className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default:
        return <Wrench className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Engineering, Hardware & Studio Stack
          </h2>

          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-base leading-relaxed">
            Full-stack web applications, microcontrollers, embedded electronics, and media production.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-5 sm:p-6 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between glass-panel-hover group shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white dark:bg-surface-100 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display">
                    {skillGroup.category}
                  </h3>
                </div>

                <ul className="space-y-2 pt-1">
                  {skillGroup.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-gray-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
