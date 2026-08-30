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
  Mail,
  Heart,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#07090e] pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-indigo-500/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
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
                <span className="text-xl font-bold text-white font-display tracking-tight">
                  Anil Kumar
                </span>
                <p className="text-xs text-indigo-400 font-medium">
                  Software Engineer • Tech Educator • 3 YouTube Channels
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Empowering engineers, students, and tech enthusiasts worldwide with practical tutorials, embedded hardware projects, and creator insights across YouTube.
            </p>

            {/* Social Icons (Lucide SVG Icons) */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.socials.youtubeMain}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-600/20 text-gray-400 hover:text-red-400 flex items-center justify-center transition-colors border border-white/5"
                title="YouTube @ANILMONITOR"
                aria-label="YouTube Main"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-600/20 text-gray-400 hover:text-pink-400 flex items-center justify-center transition-colors border border-white/5"
                title="Instagram @anilmonitor"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white flex items-center justify-center transition-colors border border-white/5"
                title="GitHub anilmonitor"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-sky-500/20 text-gray-400 hover:text-sky-400 flex items-center justify-center transition-colors border border-white/5"
                title="Twitter / X @anilmonitor"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600/20 text-gray-400 hover:text-blue-400 flex items-center justify-center transition-colors border border-white/5"
                title="LinkedIn anilmonitor"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-700/20 text-gray-400 hover:text-blue-500 flex items-center justify-center transition-colors border border-white/5"
                title="Facebook anilmonitorvlog"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-sky-500/20 text-gray-400 hover:text-sky-400 flex items-center justify-center transition-colors border border-white/5"
                title="Telegram Channel"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: YouTube Channels */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200">
              YouTube Channels
            </h3>
            <ul className="space-y-2 text-sm">
              {PORTFOLIO_DATA.channels.map((ch) => (
                <li key={ch.id}>
                  <a
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <Youtube className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform" />
                    <span>{ch.name}</span>
                    <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/channels"
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 mt-1"
                >
                  <Zap className="w-3 h-3" /> Explore All Channel Playlists
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Anil Kumar
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Engineering Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Tech Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Brand Sponsorships
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
                  <span>XML Sitemap</span>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-mono">SEO</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-200">
              Direct Contact
            </h3>
            <p className="text-xs text-gray-400">
              For business inquiries, sponsorships, or project collaborations:
            </p>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="inline-flex items-center gap-2 p-2.5 rounded-lg bg-surface-100/80 hover:bg-surface-200 border border-white/10 text-white text-xs font-medium transition-all group"
            >
              <Mail className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>{PORTFOLIO_DATA.personal.email}</span>
            </a>
            <div className="text-[11px] text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Creator & Engineer</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} Anil Kumar. Hosted on <span className="text-gray-400 font-mono">anilmonitor.xpertbite.in</span>.
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for the Global Tech Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
