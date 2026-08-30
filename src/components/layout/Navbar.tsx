"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Menu,
  X,
  Youtube,
  Github,
  ExternalLink,
  ChevronDown,
  Share2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [channelsOpen, setChannelsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Channels", href: "/channels" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Socials", href: "/socials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0a0d14]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-black/20 py-2.5 sm:py-3"
          : "bg-white/80 dark:bg-[#0a0d14]/80 md:bg-transparent md:dark:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-slate-200/50 dark:border-white/5 md:border-b-0 py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand (DP + Name + Handle, No green dot) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group"
            id="nav-logo"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-indigo-500/50 p-0.5 group-hover:border-indigo-400 transition-all duration-300 shadow-md shadow-indigo-500/20 shrink-0">
              <Image
                src={PORTFOLIO_DATA.personal.avatar}
                alt={PORTFOLIO_DATA.personal.name}
                width={40}
                height={40}
                className="rounded-full object-cover w-full h-full"
                priority
              />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white block font-display">
                Anil Kumar
              </span>
              <span className="text-[11px] text-slate-500 dark:text-gray-400 font-medium block leading-none mt-0.5">
                @ANILMONITOR • 3 Channels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-surface-50/60 p-1.5 rounded-full border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold"
                      : "text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons, GitHub & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2 lg:gap-2.5">
            {/* Theme Toggle Button (Sun / Moon) */}
            <ThemeToggle />

            {/* Quick Channels Dropdown */}
            <div className="relative">
              <button
                onClick={() => setChannelsOpen(!channelsOpen)}
                onBlur={() => setTimeout(() => setChannelsOpen(false), 200)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold border border-red-200 dark:border-red-500/30 transition-all shadow-sm"
                id="channels-dropdown-btn"
                title="View All 3 YouTube Channels"
              >
                <Youtube className="w-4 h-4 text-red-600 dark:text-red-500 fill-red-600 dark:fill-red-500" />
                <span>Channels</span>
                <ChevronDown className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              </button>

              {channelsOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white dark:bg-surface-50 border border-slate-200 dark:border-white/15 shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 z-50">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-gray-400 uppercase px-3 py-1.5 tracking-wider">
                    Official Channels
                  </div>
                  {PORTFOLIO_DATA.channels.map((ch) => (
                    <a
                      key={ch.id}
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-red-600/15 flex items-center justify-center text-red-500">
                          <Youtube className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-red-500 transition-colors">
                            {ch.name}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-gray-400">
                            {ch.subscribers} • {ch.handle}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-white" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Clearly Visible GitHub Button */}
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-white text-xs font-semibold border border-slate-300/80 dark:border-white/10 transition-all shadow-sm"
              title="GitHub Profile anilmonitor"
              aria-label="GitHub Profile anilmonitor"
            >
              <Github className="w-4 h-4 text-slate-900 dark:text-white" />
              <span>GitHub</span>
            </a>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all hover:scale-105"
            >
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Right Controls: GitHub + Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-1.5">
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white border border-slate-300/80 dark:border-white/10 flex items-center justify-center"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/10 focus:outline-none border border-slate-200 dark:border-white/10"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0c101a]/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-600/15 dark:bg-indigo-600/30 text-indigo-600 dark:text-indigo-300 font-bold border border-indigo-500/30"
                      : "text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10">
            <div className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              YouTube Channels
            </div>
            <div className="space-y-1.5">
              {PORTFOLIO_DATA.channels.map((ch) => (
                <a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-slate-100/80 dark:bg-surface-100/60 hover:bg-slate-200 dark:hover:bg-white/10 text-xs text-slate-800 dark:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Youtube className="w-3.5 h-3.5 text-red-500" />
                    {ch.name} ({ch.subscribers})
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-3 flex items-center justify-between gap-3 border-t border-slate-200 dark:border-white/10">
            <Link
              href="/socials"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-semibold"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>All Social Links & Profiles</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow"
            >
              Contact Anil
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
