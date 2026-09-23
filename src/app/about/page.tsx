import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Milestone,
  Cpu,
  MapPin,
  ExternalLink,
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
  const { personal, milestones, ventures } = PORTFOLIO_DATA;

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Header / Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Avatar Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-3xl blur-md opacity-30 dark:opacity-50" />
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-slate-200/80 dark:border-white/20 p-4 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 dark:bg-surface-200">
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
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display leading-tight">
              Software Engineering, Content Creation & Digital Ventures
            </h1>

            <div className="space-y-3.5 text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am <strong>Anil Kumar</strong>, a software engineer and tech creator based in <strong>Garhwa, Jharkhand</strong>. Over the last 5 years, I have built an engaged community of over <strong>150,000 subscribers</strong> and millions of viewers across 3 distinct YouTube channels: <strong>Anil Monitor</strong>, <strong>Anil Engineer</strong>, and <strong>Anil Monitor Vlog</strong>.
              </p>
              <p>
                As a founder, I established <strong>XpertBite</strong> (software development agency), <strong>distdel.com</strong> (hyperlocal delivery platform), and <strong>easylike.in</strong> (social analytics & growth SaaS). I also redesigned and engineered the <strong>REC Student Portal</strong> for Ramgarh Engineering College and the official web portal for <strong>Maa Garhdevi Mandir</strong>.
              </p>
              <p>
                My goal is to build reliable, high-performance software tools, teach hands-on electronics & programming, and empower regional builders.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/socials"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
              >
                <span>View All Social Links & Profiles</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-t border-slate-200/80 dark:border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            Startups & Digital Platforms
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm mt-1">
            Companies and platforms founded and operated by Anil Kumar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ventures.slice(0, 3).map((v) => (
            <div
              key={v.id}
              className="glass-panel rounded-2xl p-6 border border-slate-200/80 dark:border-white/15 flex flex-col justify-between glass-panel-hover"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white dark:bg-surface-100 p-1.5 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                    <Image
                      src={v.logo}
                      alt={v.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                    {v.role}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">{v.name}</h3>
                <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed line-clamp-3">{v.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 mt-4 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-gray-400">{v.category}</span>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold inline-flex items-center gap-1"
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
      <section className="py-14 sm:py-18 bg-slate-100/60 dark:bg-surface-50/30 border-y border-slate-200/60 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
              Growth & Milestones Timeline
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm">
              Key milestones from first tutorial to building software companies and multi-channel scale.
            </p>
          </div>

          <div className="relative border-l-2 border-indigo-500/30 ml-4 md:ml-32 space-y-6 sm:space-y-8 pl-6 md:pl-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-background group-hover:scale-125 transition-transform" />

                <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 max-w-2xl glass-panel-hover shadow-sm">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                    {m.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display mt-2">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed mt-1">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
