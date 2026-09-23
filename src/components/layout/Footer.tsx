import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Youtube,
  Github,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Send,
  ExternalLink,
  Zap,
  ArrowRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 dark:border-white/10 bg-slate-100/90 dark:bg-[#07090e] pt-14 pb-10 relative overflow-hidden transition-colors">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-indigo-500/5 dark:from-indigo-500/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 border-b border-slate-200/80 dark:border-white/10">
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-indigo-500/50">
                <Image
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
                  Anil Kumar
                </span>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                  Software Engineer • Educator • Founder
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Empowering engineers, learners, and digital builders with practical tutorials, embedded hardware, and digital platforms across YouTube and the web.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={PORTFOLIO_DATA.personal.socials.youtubeMain}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white dark:bg-white/5 hover:bg-red-50 dark:hover:bg-red-600/20 text-slate-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 flex items-center justify-center transition-colors border border-slate-200 dark:border-white/5 shadow-sm"
                title="YouTube @ANILMONITOR"
                aria-label="YouTube Main"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white dark:bg-white/5 hover:bg-pink-50 dark:hover:bg-pink-600/20 text-slate-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 flex items-center justify-center transition-colors border border-slate-200 dark:border-white/5 shadow-sm"
                title="Instagram @anilmonitor"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors border border-slate-200 dark:border-white/5 shadow-sm"
                title="GitHub anilmonitor"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white dark:bg-white/5 hover:bg-sky-50 dark:hover:bg-sky-500/20 text-slate-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 flex items-center justify-center transition-colors border border-slate-200 dark:border-white/5 shadow-sm"
                title="Twitter / X @anilmonitor"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-600/20 text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center transition-colors border border-slate-200 dark:border-white/5 shadow-sm"
                title="LinkedIn anilmonitor"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-700/20 text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 flex items-center justify-center transition-colors border border-slate-200 dark:border-white/5 shadow-sm"
                title="Facebook anilmonitorvlog"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white dark:bg-white/5 hover:bg-sky-50 dark:hover:bg-sky-500/20 text-slate-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 flex items-center justify-center transition-colors border border-slate-200 dark:border-white/5 shadow-sm"
                title="Telegram Channel"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: YouTube Channels */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-gray-200">
              YouTube Channels
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {PORTFOLIO_DATA.channels.map((ch) => (
                <li key={ch.id}>
                  <a
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <Youtube className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform" />
                    <span>{ch.name}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-gray-200">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  About Anil Kumar
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Ventures & Projects
                </Link>
              </li>
              <li>
                <Link href="/socials" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  All Social Profiles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-gray-200">
              Get in Touch
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-400">
              Have a question, tech inquiry, or software development discussion?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <span>Open Contact Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-slate-500 dark:text-gray-400 font-mono">
          anilmonitor.xpertbite.in © {currentYear} Anil Kumar
        </div>
      </div>
    </footer>
  );
}
