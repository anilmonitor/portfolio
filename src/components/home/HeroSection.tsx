"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Github,
  Linkedin,
  Code2,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  const coreStack = [
    { name: "Next.js", bg: "hover:border-slate-800 dark:hover:border-white" },
    { name: "TypeScript", bg: "hover:border-blue-500" },
    { name: "React", bg: "hover:border-cyan-500" },
    { name: "Node.js", bg: "hover:border-emerald-500" },
    { name: "PostgreSQL", bg: "hover:border-indigo-500" },
    { name: "Tailwind CSS", bg: "hover:border-teal-500" },
    { name: "REST & WebSockets", bg: "hover:border-purple-500" },
    { name: "Cloud & DevOps", bg: "hover:border-amber-500" },
  ];

  return (
    <section className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      {/* Background Gradients & Mesh Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headline, Tagline, CTAs & Core Stack */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            {/* Main Clean Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.14]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 dark:from-indigo-400 dark:via-purple-300 dark:to-rose-400 bg-clip-text text-transparent">
                Anil Kumar
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl text-slate-700 dark:text-gray-300 font-semibold block mt-1.5 sm:mt-2">
                Full-Stack Software Engineer & Tech Founder
              </span>
            </h1>

            {/* Clean Professional Tagline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Full-Stack Software Engineer specializing in modern web applications, scalable cloud architectures, and interactive digital products. Crafting high-performance software with Next.js, TypeScript, and robust backend systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/25 transition-all hover:scale-105 text-sm"
              >
                <Building2 className="w-4 h-4" />
                <span>Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-white dark:bg-surface-100/90 hover:bg-slate-50 dark:hover:bg-surface-200 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-semibold transition-all hover:border-slate-300 dark:hover:border-white/20 text-sm shadow-sm"
              >
                <span>About Anil</span>
              </Link>
            </div>

            {/* Core Tech Stack Section */}
            <div className="pt-3 sm:pt-4 border-t border-slate-200/70 dark:border-white/10 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-500" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400">
                  Core Engineering Stack
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {coreStack.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-gray-300 transition-all ${tech.bg} hover:shadow-xs`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Card */}
          <div className="lg:col-span-5 flex justify-center mt-2 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm group">
              {/* Glowing colored aura / shadow behind photo card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-rose-500/35 dark:from-indigo-500/40 dark:via-purple-500/40 dark:to-rose-500/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden glass-panel border border-slate-200/80 dark:border-white/15 p-4 sm:p-5 amazon-soft-card space-y-4">
                {/* Photo */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-surface-200 shadow-inner">
                  <Image
                    src={personal.avatar}
                    alt="Anil Kumar - Software Engineer & Tech Creator"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  {/* Bottom details */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <div className="text-lg sm:text-xl font-bold text-white font-display">
                      Anil Kumar
                    </div>
                  </div>
                </div>

                {/* Social Connects: GitHub & LinkedIn */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-surface-100/70 dark:hover:bg-surface-100 border border-slate-200/60 dark:border-white/10 transition-all group flex items-center justify-center gap-2 shadow-sm"
                    title="GitHub @anilmonitor"
                  >
                    <Github className="w-4 h-4 text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors font-display">
                      GitHub
                    </span>
                  </a>

                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 dark:bg-surface-100/70 dark:hover:bg-blue-500/10 border border-slate-200/60 dark:border-white/10 transition-all group flex items-center justify-center gap-2 shadow-sm"
                    title="LinkedIn @anilmonitor"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display">
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Engineering & Ventures Metrics Bar */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/10 shadow-lg">
          <div className="text-center p-2">
            <div className="text-xl sm:text-3xl font-extrabold text-indigo-600 dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-400 dark:to-purple-400 dark:bg-clip-text font-display">
              {personal.stats.experience}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 font-medium mt-1">
              Engineering Experience
            </div>
          </div>
          <div className="text-center p-2">
            <div className="text-xl sm:text-3xl font-extrabold text-rose-600 dark:text-transparent dark:bg-gradient-to-r dark:from-rose-400 dark:to-amber-400 dark:bg-clip-text font-display">
              {personal.stats.projects}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 font-medium mt-1">
              Production Projects Built
            </div>
          </div>
          <div className="text-center p-2">
            <div className="text-xl sm:text-3xl font-extrabold text-emerald-600 dark:text-transparent dark:bg-gradient-to-r dark:from-emerald-400 dark:to-teal-400 dark:bg-clip-text font-display">
              {personal.stats.ventures}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 font-medium mt-1">
              Live Platforms Founded
            </div>
          </div>
          <div className="text-center p-2">
            <div className="text-xl sm:text-3xl font-extrabold text-cyan-600 dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-400 dark:bg-clip-text font-display">
              99.9%
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 font-medium mt-1">
              Uptime & Performance Focus
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

