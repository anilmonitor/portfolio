import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ProjectsTeaser() {
  const featuredProjects = PORTFOLIO_DATA.projects.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 relative bg-slate-100/60 dark:bg-surface-50/40 border-y border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
              Featured Software & Hardware Projects
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm max-w-xl">
              From web applications and regional platforms to custom IoT hardware nodes.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border border-slate-200/80 dark:border-white/10 overflow-hidden flex flex-col justify-between glass-panel-hover group shadow-sm"
            >
              {/* Thumbnail Container */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-200 dark:bg-surface-200">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Logo or Category Label */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  {project.logo ? (
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/90 p-1 border border-white/20">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  ) : null}
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-black/70 backdrop-blur-md text-white border border-white/15">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200/60 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                  <Link
                    href="/projects"
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      title="Open Live"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
