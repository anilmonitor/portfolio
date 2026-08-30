import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Milestone,
  Cpu,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Youtube,
  Github,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Building2,
  MapPin,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "About Anil Kumar | Software Engineer, Creator & Founder",
  description:
    "Learn about Anil Kumar from Garhwa, Jharkhand - Software Engineer, YouTube creator (Anil Monitor, Anil Engineer, Anil Monitor Vlog), and Founder of XpertBite, distdel.com, and easylike.in.",
  keywords: [
    "Garhwa youtuber",
    "Garhwa biggest youtuber",
    "Garhwa vlogger",
    "Anil Kumar Garhwa",
    "xpertbite founder",
    "distdel.com owner",
    "easylike.in owner",
    "Anil Monitor Garhwa",
    "garhwa software development company",
    "garhdevi mandir website founder",
  ],
  alternates: {
    canonical: `${PORTFOLIO_DATA.personal.websiteUrl}/about`,
  },
};

export default function AboutPage() {
  const { personal, studioGear, milestones, ventures } = PORTFOLIO_DATA;

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Header / Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Avatar Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-3xl blur-md opacity-50" />
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/20 p-4 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-200">
                  <Image
                    src={personal.avatar}
                    alt="Anil Kumar - Software Engineer & Creator"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xl font-bold text-white font-display">
                      {personal.name}
                    </div>
                    <div className="text-xs text-indigo-300 font-medium flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      <span>Garhwa, Jharkhand, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
              <User className="w-3.5 h-3.5" />
              <span>The Journey of Anil Kumar</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight">
              Software Engineering, Content Creation & Digital Ventures
            </h1>

            <div className="space-y-3.5 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am <strong>Anil Kumar</strong>, a software engineer and tech creator based in <strong>Garhwa, Jharkhand</strong>. Over the last 5 years, I have built an engaged community of over <strong>150,000 subscribers</strong> and millions of viewers across 3 distinct YouTube channels: <strong>Anil Monitor</strong>, <strong>Anil Engineer</strong>, and <strong>Anil Monitor Vlog</strong>.
              </p>
              <p>
                As a founder, I established <strong>XpertBite</strong> (software development agency), <strong>distdel.com</strong> (hyperlocal delivery & quick commerce platform), and <strong>easylike.in</strong> (social analytics & growth SaaS). I also engineered public digital infrastructure including the official web portal for <strong>Maa Garhdevi Mandir</strong>.
              </p>
              <p>
                My goal is to simplify technology, build high-impact digital tools, and inspire the next generation of engineers and entrepreneurs.
              </p>
            </div>

            {/* Social handles with Lucide icons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={personal.socials.youtubeMain}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-semibold hover:bg-red-600/25 transition-colors"
              >
                <Youtube className="w-3.5 h-3.5 fill-red-400" />
                <span>@ANILMONITOR</span>
              </a>
              <a
                href={personal.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-pink-600/15 border border-pink-500/30 text-pink-400 text-xs font-semibold hover:bg-pink-600/25 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@anilmonitor</span>
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>anilmonitor</span>
              </a>
              <a
                href={personal.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-600/15 border border-sky-500/30 text-sky-400 text-xs font-semibold hover:bg-sky-600/25 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>@anilmonitor</span>
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600/15 border border-blue-500/30 text-blue-400 text-xs font-semibold hover:bg-blue-600/25 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Startups & Digital Platforms
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Companies and platforms founded and operated by Anil Kumar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ventures.slice(0, 3).map((v) => (
            <div
              key={v.id}
              className="glass-panel rounded-2xl p-6 border border-white/15 flex flex-col justify-between glass-panel-hover"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-100 p-1.5 border border-white/10 flex items-center justify-center">
                    <Image
                      src={v.logo}
                      alt={v.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    {v.role}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-display">{v.name}</h3>
                <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">{v.description}</p>
              </div>

              <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">{v.category}</span>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones & Timeline */}
      <section className="py-16 bg-surface-50/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <Milestone className="w-3.5 h-3.5" />
              <span>Milestones & Growth</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              Growth & Milestones Timeline
            </h2>
            <p className="text-gray-400 text-sm">
              Key milestones from first tutorial to building software companies and multi-channel scale.
            </p>
          </div>

          <div className="relative border-l-2 border-indigo-500/30 ml-4 md:ml-32 space-y-8 pl-6 md:pl-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-background group-hover:scale-125 transition-transform" />

                <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 max-w-2xl glass-panel-hover">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {m.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display mt-2">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-1">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio & Hardware Gear */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Studio & Lab Hardware</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            The Studio Hardware Behind the Content
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            Professional recording, editing, and electronics testing workstation setup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {studioGear.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 border border-white/10 space-y-3"
            >
              <h3 className="text-sm sm:text-base font-bold text-white font-display border-b border-white/10 pb-2.5">
                {cat.category}
              </h3>
              <div className="space-y-2.5">
                {cat.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-2.5 rounded-xl bg-surface-100/60 border border-white/5 space-y-0.5"
                  >
                    <div className="text-xs font-bold text-white font-display">
                      {item.name}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-gray-400">
                      {item.spec}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
