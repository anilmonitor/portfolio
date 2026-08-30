"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Youtube,
  ArrowRight,
  Code2,
  Cpu,
  Video,
  CheckCircle2,
  Eye,
  Users,
  Building2,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Gradients & Mesh Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-red-600/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Clean Channel Bar */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Simple Clean Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Software Engineer • Creator • Founder</span>
            </div>

            {/* Main Clean Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-rose-400 bg-clip-text text-transparent">
                Anil Kumar
              </span>
              <br />
              <span className="text-xl sm:text-3xl lg:text-4xl text-gray-300 font-semibold block mt-2">
                Engineer, Tech Educator & Multi-Channel Creator
              </span>
            </h1>

            {/* Clean Professional Tagline */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Bridging full-stack software development, embedded electronics, and digital products. Inspiring over 150,000 learners across <strong>Anil Monitor</strong>, <strong>Anil Engineer</strong>, and <strong>Anil Monitor Vlog</strong>.
            </p>

            {/* Clean Channel Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <a
                href={PORTFOLIO_DATA.personal.socials.youtubeMain}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold hover:bg-indigo-500/20 transition-colors"
              >
                <Youtube className="w-3.5 h-3.5 text-red-500" />
                <span>Anil Monitor</span>
                <span className="text-[10px] bg-indigo-500/30 px-1.5 py-0.5 rounded text-white">100K+</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.youtubeEngineer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
              >
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>Anil Engineer</span>
                <span className="text-[10px] bg-emerald-500/30 px-1.5 py-0.5 rounded text-white">35K+</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.youtubeVlog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold hover:bg-rose-500/20 transition-colors"
              >
                <Video className="w-3.5 h-3.5 text-rose-400" />
                <span>Anil Monitor Vlog</span>
                <span className="text-[10px] bg-rose-500/30 px-1.5 py-0.5 rounded text-white">20K+</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
              <Link
                href="/channels"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-indigo-600 hover:from-red-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-red-600/25 transition-all hover:scale-105 text-sm"
              >
                <Youtube className="w-4 h-4" />
                <span>Explore 3 Channels</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-surface-100/90 hover:bg-surface-200 border border-white/10 text-white font-semibold transition-all hover:border-white/20 text-sm"
              >
                <Building2 className="w-4 h-4 text-indigo-400" />
                <span>Ventures & Projects</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Profile Card */}
          <div className="lg:col-span-5 flex justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Outer glowing aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-3xl blur-lg opacity-40 animate-pulse-slow" />

              <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 p-4 sm:p-5 shadow-2xl space-y-4">
                {/* Photo */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-surface-200 shadow-inner">
                  <Image
                    src={personal.avatar}
                    alt="Anil Kumar - Software Engineer & Tech Creator"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-80" />

                  {/* Clean verified badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Verified Creator</span>
                  </div>

                  {/* Bottom details */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <div className="text-lg sm:text-xl font-bold text-white font-display">
                      Anil Kumar
                    </div>
                    <div className="text-xs text-indigo-300 font-medium mt-0.5">
                      Engineer • Educator • Founder
                    </div>
                  </div>
                </div>

                {/* Micro Metrics */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-surface-100/70 border border-white/5 text-center">
                    <div className="flex items-center justify-center gap-1 text-[11px] text-gray-400 mb-0.5">
                      <Users className="w-3 h-3 text-indigo-400" />
                      <span>Subscribers</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white font-display">
                      {personal.stats.subscribers}
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-surface-100/70 border border-white/5 text-center">
                    <div className="flex items-center justify-center gap-1 text-[11px] text-gray-400 mb-0.5">
                      <Eye className="w-3 h-3 text-rose-400" />
                      <span>Total Views</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white font-display">
                      {personal.stats.views}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Global Stats Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl glass-panel border border-white/10 shadow-xl">
          <div className="text-center p-2">
            <div className="text-xl sm:text-3xl font-extrabold text-white font-display bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {personal.stats.subscribers}
            </div>
            <div className="text-[11px] sm:text-xs text-gray-400 font-medium mt-1">
              Collective Subscribers
            </div>
          </div>
          <div className="text-center p-2">
            <div className="text-xl sm:text-3xl font-extrabold text-white font-display bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
              {personal.stats.views}
            </div>
            <div className="text-[11px] sm:text-xs text-gray-400 font-medium mt-1">
              Total YouTube Views
            </div>
          </div>
          <div className="text-center p-2">
            <div className="text-xl sm:text-3xl font-extrabold text-white font-display bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {personal.stats.videos}
            </div>
            <div className="text-[11px] sm:text-xs text-gray-400 font-medium mt-1">
              Tech Videos & Tutorials
            </div>
          </div>
          <div className="text-center p-2">
            <div className="text-xl sm:text-3xl font-extrabold text-white font-display bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {personal.stats.ventures}
            </div>
            <div className="text-[11px] sm:text-xs text-gray-400 font-medium mt-1">
              Tech Companies & Platforms
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
