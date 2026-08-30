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
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Sparkles,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [channelsOpen, setChannelsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Channels", href: "/channels" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact & Collabs", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0d14]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            id="nav-logo"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500/50 p-0.5 group-hover:border-indigo-400 transition-all duration-300 shadow-md shadow-indigo-500/20">
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
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-display">
                Anil Kumar
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for collaborations & projects" />
              </span>
              <span className="text-xs text-gray-400 font-medium block">
                @ANILMONITOR • 3 Channels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-50/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons & Socials with Lucide Icons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {/* Quick Channels Dropdown */}
            <div className="relative">
              <button
                onClick={() => setChannelsOpen(!channelsOpen)}
                onBlur={() => setTimeout(() => setChannelsOpen(false), 200)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold border border-red-500/30 transition-all"
                id="channels-dropdown-btn"
              >
                <Youtube className="w-4 h-4 text-red-500 fill-red-500" />
                <span>YouTube</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {channelsOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl glass-panel border border-white/15 shadow-2xl p-2 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[11px] font-semibold text-gray-400 uppercase px-3 py-1.5 tracking-wider">
                    Official Channels
                  </div>
                  {PORTFOLIO_DATA.channels.map((ch) => (
                    <a
                      key={ch.id}
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-red-600/20 flex items-center justify-center text-red-400">
                          <Youtube className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-red-400 transition-colors">
                            {ch.name}
                          </div>
                          <div className="text-[10px] text-gray-400">
                            {ch.subscribers} • {ch.handle}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Social Icons (Lucide SVG) */}
            <a
              href={PORTFOLIO_DATA.personal.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-pink-400 hover:bg-white/5 transition-colors"
              title="Instagram @anilmonitor"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              title="GitHub anilmonitor"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-sky-400 hover:bg-white/5 transition-colors"
              title="Twitter / X @anilmonitor"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-colors"
              title="LinkedIn anilmonitor"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="hidden xl:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Collab</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 mt-3 px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-600/30 text-indigo-300 font-semibold border border-indigo-500/30"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              YouTube Channels
            </div>
            <div className="space-y-1.5">
              {PORTFOLIO_DATA.channels.map((ch) => (
                <a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-surface-100/60 hover:bg-white/10 text-xs text-white"
                >
                  <span className="flex items-center gap-2">
                    <Youtube className="w-3.5 h-3.5 text-red-500" />
                    {ch.name} ({ch.subscribers})
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.personal.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-100 text-pink-400"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-100 text-white"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-100 text-sky-400"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-100 text-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-100 text-blue-500"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold shadow"
            >
              Work With Anil
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
