import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Youtube,
  Instagram,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Send,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Social Links & Official Profiles | Anil Kumar",
  description:
    "Official directory of all social channels, YouTube accounts, platforms, and profiles of Anil Kumar (@anilmonitor).",
  keywords: [
    "Anil Kumar Social Links",
    "anilmonitor instagram",
    "anilmonitor twitter",
    "anilmonitor github",
    "anilmonitor youtube",
    "anil engineer youtube",
    "anil monitor vlog",
    "Garhwa youtuber links",
  ],
  alternates: {
    canonical: `${PORTFOLIO_DATA.personal.websiteUrl}/socials`,
  },
};

export default function SocialsPage() {
  const { personal, ventures } = PORTFOLIO_DATA;

  const socialLinks = [
    {
      name: "YouTube - Anil Monitor",
      handle: "@ANILMONITOR",
      url: personal.socials.youtubeMain,
      description: "PC troubleshooting, Windows 11 guides & tech tutorials (100K+ Subs)",
      icon: Youtube,
      color: "from-red-600 to-rose-600",
      textColor: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-500/10",
      borderColor: "border-red-200 dark:border-red-500/30",
    },
    {
      name: "YouTube - Anil Engineer",
      handle: "@ANILENGINEER",
      url: personal.socials.youtubeEngineer,
      description: "Embedded IoT, ESP32, Arduino & software engineering (35K+ Subs)",
      icon: Youtube,
      color: "from-emerald-600 to-teal-600",
      textColor: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
      borderColor: "border-emerald-200 dark:border-emerald-500/30",
    },
    {
      name: "YouTube - Anil Monitor Vlog",
      handle: "@VLOGANIl",
      url: personal.socials.youtubeVlog,
      description: "Studio tours, daily life of an engineer & behind the scenes (20K+ Subs)",
      icon: Youtube,
      color: "from-rose-600 to-amber-600",
      textColor: "text-rose-600 dark:text-rose-400",
      bgColor: "bg-rose-50 dark:bg-rose-500/10",
      borderColor: "border-rose-200 dark:border-rose-500/30",
    },
    {
      name: "Instagram",
      handle: "@anilmonitor",
      url: personal.socials.instagram,
      description: "Daily updates, short reels, studio stories & tech life",
      icon: Instagram,
      color: "from-pink-600 to-purple-600",
      textColor: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-50 dark:bg-pink-500/10",
      borderColor: "border-pink-200 dark:border-pink-500/30",
    },
    {
      name: "GitHub",
      handle: "anilmonitor",
      url: personal.socials.github,
      description: "Open source repositories, Next.js code, IoT firmware & scripts",
      icon: Github,
      color: "from-slate-700 to-slate-900",
      textColor: "text-slate-900 dark:text-slate-200",
      bgColor: "bg-slate-100 dark:bg-slate-500/10",
      borderColor: "border-slate-300 dark:border-slate-500/30",
    },
    {
      name: "Twitter / X",
      handle: "@anilmonitor",
      url: personal.socials.twitter,
      description: "Tech thoughts, developer commentary, startup notes & announcements",
      icon: Twitter,
      color: "from-sky-500 to-blue-600",
      textColor: "text-sky-600 dark:text-sky-400",
      bgColor: "bg-sky-50 dark:bg-sky-500/10",
      borderColor: "border-sky-200 dark:border-sky-500/30",
    },
    {
      name: "LinkedIn",
      handle: "anilmonitor",
      url: personal.socials.linkedin,
      description: "Professional background, software development & business connections",
      icon: Linkedin,
      color: "from-blue-600 to-indigo-700",
      textColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-500/10",
      borderColor: "border-blue-200 dark:border-blue-500/30",
    },
    {
      name: "Facebook",
      handle: "anilmonitorvlog",
      url: personal.socials.facebook,
      description: "Official creator page and video broadcasts",
      icon: Facebook,
      color: "from-blue-600 to-sky-600",
      textColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-600/10",
      borderColor: "border-blue-200 dark:border-blue-600/30",
    },
    {
      name: "Telegram Channel",
      handle: "@anilmonitor",
      url: personal.socials.telegram,
      description: "Direct community alerts, software downloads & video notifications",
      icon: Send,
      color: "from-sky-500 to-cyan-600",
      textColor: "text-sky-600 dark:text-sky-400",
      bgColor: "bg-sky-50 dark:bg-sky-500/10",
      borderColor: "border-sky-200 dark:border-sky-500/30",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Profile Header */}
      <div className="text-center space-y-3 mb-10 sm:mb-12">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-indigo-500/50 p-1 shadow-xl">
          <Image
            src={personal.avatar}
            alt={personal.name}
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display flex items-center justify-center gap-1.5">
            <span>Anil Kumar</span>
            <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 fill-indigo-400/20" />
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 font-medium">
            Software Engineer • Multi-Channel Creator • Tech Founder
          </p>
          <span className="inline-block text-xs text-slate-800 dark:text-indigo-300 font-medium bg-slate-100 dark:bg-indigo-500/10 px-3 py-0.5 rounded-full border border-slate-300 dark:border-indigo-500/20 mt-1">
            Garhwa, Jharkhand, India
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed pt-1">
          Connect with me across all official YouTube channels, social profiles, and software projects.
        </p>
      </div>

      {/* Social Profiles Grid */}
      <div className="space-y-3.5 mb-12">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 px-1">
          Official Social & Content Channels
        </div>

        <div className="space-y-3">
          {socialLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 sm:p-4.5 rounded-2xl border border-slate-200/80 dark:border-white/10 flex items-center justify-between glass-panel-hover group shadow-sm"
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.textColor}`} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {item.name}
                      </span>
                      <span className="text-xs text-slate-600 dark:text-gray-400 font-mono font-medium">
                        {item.handle}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-gray-400 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-white group-hover:bg-indigo-50 dark:group-hover:bg-indigo-600/30 transition-all shrink-0 ml-2 border border-slate-200 dark:border-transparent">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Official Platforms & Ventures Section */}
      <div className="space-y-3.5">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 px-1">
          Platforms & Ventures Founded by Anil
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {ventures.map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 flex items-center justify-between glass-panel-hover group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white dark:bg-surface-100 p-1 border border-slate-200 dark:border-white/10 shrink-0 flex items-center justify-center shadow-sm">
                  <Image
                    src={v.logo}
                    alt={v.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {v.name}
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-gray-400 block">
                    {v.role}
                  </span>
                </div>
              </div>

              <ExternalLink className="w-3.5 h-3.5 text-slate-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-white shrink-0 ml-2" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
