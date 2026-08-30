"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  CheckCircle,
  Cpu,
  Terminal,
  Building,
  Star,
} from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Ventures & Startups",
    "IoT & Electronics",
    "Web & Software",
    "Automation & Tools",
    "Open Source",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Header */}
      <section className="relative py-8 sm:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Code2 className="w-4 h-4" />
            <span>Ventures & Engineering Showcase</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Startups, Engineering & Code
          </h1>

          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore <strong>distdel.com</strong> (Garhwa&apos;s hyperlocal delivery platform), IoT embedded devices, automation tools, and open-source utilities built by Anil Kumar.
          </p>

          {/* Category Filter - Mobile Scrollable */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 sm:pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                    : "bg-surface-100/80 text-gray-400 hover:text-white hover:bg-surface-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className={`glass-panel rounded-3xl border ${
                project.featured ? "border-amber-500/40 bg-gradient-to-b from-surface-50 to-[#141b2b]" : "border-white/15"
              } overflow-hidden flex flex-col justify-between glass-panel-hover group`}
            >
              <div>
                {/* Project Image / Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131823] via-transparent to-black/40" />
                  
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500 text-black flex items-center gap-1 shadow-md">
                        <Star className="w-3 h-3 fill-black" />
                        <span>Flagship Venture</span>
                      </span>
                    )}
                  </div>

                  {/* If logo is available */}
                  {project.logo && (
                    <div className="absolute bottom-3 right-3 w-12 h-12 rounded-xl bg-surface-50/90 backdrop-blur-md p-1 border border-amber-500/40 flex items-center justify-center">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-8 space-y-3.5">
                  <h2 className="text-lg sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors font-display">
                    {project.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="p-5 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 mt-3 pt-4">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                    <Building className="w-3.5 h-3.5" />
                    <span>Founder: Anil Kumar</span>
                  </span>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      project.featured
                        ? "bg-amber-500 hover:bg-amber-400 text-black shadow-md shadow-amber-500/20"
                        : "bg-emerald-600 hover:bg-emerald-500 text-white"
                    }`}
                  >
                    <span>{project.featured ? "Visit distdel.com" : "Live Demonstration"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
