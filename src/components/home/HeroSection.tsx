"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Youtube,
  ArrowRight,
  Cpu,
  Video,
  Eye,
  Users,
  Building2,
  Github,
  Linkedin,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-24 sm:pt-32 md:pt-36 pb-14 sm:pb-20 md:pb-24 overflow-hidden">
      {/* Background Gradients & Mesh Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-red-600/5 dark:bg-red-600/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[180px] sm:w-[350px] h-[180px] sm:h-[350px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Clean Channel Bar */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left pt-2 sm:pt-0">
            {/* Main Clean Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.18]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 dark:from-indigo-400 dark:via-purple-300 dark:to-rose-400 bg-clip-text text-transparent">
                Anil Kumar
              </span>
              <br />
              <span className="text-xl sm:text-3xl lg:text-4xl text-slate-700 dark:text-gray-300 font-semibold block mt-1.5 sm:mt-2">
                Full-Stack Software Engineer & Tech Founder
              </span>
            </h1>

            {/* Clean Professional Tagline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Full-Stack Software Engineer specializing in modern web applications, scalable cloud architectures, and interactive digital products. Crafting high-performance software with Next.js, TypeScript, and robust backend systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-3">
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/25 transition-all hover:scale-105 text-sm"
              >
                <Building2 className="w-4 h-4" />
                <span>Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white dark:bg-surface-100/90 hover:bg-slate-50 dark:hover:bg-surface-200 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-semibold transition-all hover:border-slate-300 dark:hover:border-white/20 text-sm shadow-sm"
              >
                <span>About Anil</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Profile Card */}
          <div className="lg:col-span-5 flex justify-center mt-2 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm">
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

        {/* Clean Global Stats Bar */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/10 shadow-xl">
          <div className="text-center p-2">
            <div className="text-xl sm:text-3xl font-extrabold text-indigo-600 dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-400 dark:to-purple-400 dark:bg-clip-text font-display">
              {personal.stats.subscribers}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 font-medium mt-1">
              Collective Subscribers
            </div>
          </div>
          <div className="text-center p-2">
            <div className="text-xl sm:text-3xl font-extrabold text-rose-600 dark:text-transparent dark:bg-gradient-to-r dark:from-rose-400 dark:to-amber-400 dark:bg-clip-text font-display">
              {personal.stats.views}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 font-medium mt-1">
              Total YouTube Views
            </div>
          </div>
          <div className="text-center p-2">
            <div className="text-xl sm:text-3xl font-extrabold text-emerald-600 dark:text-transparent dark:bg-gradient-to-r dark:from-emerald-400 dark:to-teal-400 dark:bg-clip-text font-display">
              {personal.stats.videos}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 font-medium mt-1">
              Tech Videos & Tutorials
            </div>
          </div>
          <div className="text-center p-2">
            <div className="text-xl sm:text-3xl font-extrabold text-cyan-600 dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-400 dark:bg-clip-text font-display">
              {personal.stats.ventures}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 font-medium mt-1">
              Platforms & Startups
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
