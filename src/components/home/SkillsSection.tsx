import React from "react";
import {
  Code,
  Cpu,
  Video,
  Terminal,
  Layers,
  Wrench,
  CheckCircle,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  const categoryIcons: Record<string, React.ReactNode> = {
    "Engineering & Development": <Code className="w-5 h-5 text-indigo-400" />,
    "Hardware & IoT": <Cpu className="w-5 h-5 text-emerald-400" />,
    "Content Production & Studio": <Video className="w-5 h-5 text-rose-400" />,
    "Systems & Troubleshooting": <Terminal className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Skills, Tools & Engineering Stack
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            From low-level microcontrollers and full-stack software development to high-end video production and studio acoustics.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-white/10 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-surface-100 border border-white/10">
                    {categoryIcons[skillGroup.category] || (
                      <Wrench className="w-5 h-5 text-indigo-400" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white font-display">
                    {skillGroup.category}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {skillGroup.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-center gap-2.5 text-xs text-gray-300 group"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="group-hover:text-white transition-colors">
                        {item}
                      </span>
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
