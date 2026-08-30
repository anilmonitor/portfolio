"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  CheckCircle,
  Building,
} from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Ventures & Startups",
    "IoT & Electronics",
    "Web & Software",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Header */}
      <section className="relative py-8 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display">
            Startups, Engineering & Projects
          </h1>

          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Platforms, academic tools, IoT embedded hardware nodes, and software architectures engineered by Anil Kumar.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-3 sm:pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "bg-white dark:bg-surface-100/80 text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-surface-200 border border-slate-200 dark:border-transparent"
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
              className="glass-panel rounded-3xl border border-slate-200/80 dark:border-white/15 overflow-hidden flex flex-col justify-between glass-panel-hover group shadow-sm"
            >
              <div>
                {/* Project Image / Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-200 dark:bg-surface-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-black/80 text-white border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Logo overlay if available */}
                  {project.logo && (
                    <div className="absolute bottom-3 right-3 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-md p-1.5 border border-slate-200 shadow-md flex items-center justify-center">
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
                <div className="p-5 sm:p-7 space-y-3.5">
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors font-display">
                    {project.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 border border-slate-200/80 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="p-5 sm:p-7 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 dark:border-white/10 mt-3 pt-4">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-white text-xs font-semibold transition-colors border border-slate-300/60 dark:border-transparent"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1">
                    <Building className="w-3.5 h-3.5" />
                    <span>Architect: Anil Kumar</span>
                  </span>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md transition-all hover:scale-105"
                  >
                    <span>Visit Platform</span>
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
