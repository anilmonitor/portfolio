import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  ExternalLink,
  Github,
  ArrowRight,
  Building,
  Star,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ProjectsTeaser() {
  const featuredProjects = PORTFOLIO_DATA.projects.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 relative bg-surface-50/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              <Code2 className="w-3.5 h-3.5" />
              <span>Ventures & Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              Featured Startups & Projects
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
              From <strong>distdel.com</strong> (Garhwa&apos;s hyperlocal delivery platform) to IoT hardware and open-source software built by Anil Kumar.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/10 text-white text-xs font-semibold transition-all hover:scale-105 w-fit"
          >
            <span>View All Ventures</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-panel rounded-2xl border ${
                project.featured ? "border-amber-500/40 bg-gradient-to-b from-surface-50 to-[#131b2c]" : "border-white/10"
              } overflow-hidden flex flex-col justify-between glass-panel-hover group`}
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-surface-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131823] via-transparent to-black/30" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500 text-black flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-black" />
                        <span>Flagship</span>
                      </span>
                    )}
                  </div>

                  {project.logo && (
                    <div className="absolute bottom-2 right-2 w-10 h-10 rounded-xl bg-surface-50/90 backdrop-blur-md p-1 border border-amber-500/30 flex items-center justify-center">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-2.5">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-white/10 mt-3 pt-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                    <Building className="w-3 h-3" />
                    <span>Founder: Anil</span>
                  </span>
                )}

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                  >
                    <span>{project.featured ? "Visit distdel" : "Demo"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <Link
                    href="/projects"
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
