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
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Socials", href: "/socials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0a0d14]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-black/25 py-2.5 sm:py-3"
          : "bg-white/75 dark:bg-[#0a0d14]/75 backdrop-blur-lg border-b border-slate-200/50 dark:border-white/5 py-2.5 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand (Avatar + Name + Subtitle) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group"
            id="nav-logo"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-indigo-500/30 group-hover:ring-indigo-500/70 p-0.5 transition-all duration-300 shadow-sm shadow-indigo-500/20 shrink-0">
              <Image
                src={PORTFOLIO_DATA.personal.avatar}
                alt={PORTFOLIO_DATA.personal.name}
                width={40}
                height={40}
                className="rounded-full object-cover w-full h-full group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white block font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Anil Kumar
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-white/5 p-1 rounded-full border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-xs">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold"
                      : "text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: GitHub & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme Toggle Button (Sun / Moon) */}
            <ThemeToggle />

            {/* Clearly Visible Matching GitHub Icon Button */}
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 border border-slate-300/60 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:text-slate-950 dark:hover:text-white shadow-xs"
              title="GitHub Profile @anilmonitor"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Right Controls: GitHub + Menu Button */}
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

          {/* Social Media Icons + Theme Toggle */}
          <div className="pt-3.5 flex items-center justify-between gap-3 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href={PORTFOLIO_DATA.personal.socials.youtubeMain}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-white/10 transition-all flex items-center justify-center shadow-sm"
                title="YouTube @ANILMONITOR"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-white/10 transition-all flex items-center justify-center shadow-sm"
                title="GitHub @anilmonitor"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 dark:bg-white/10 dark:hover:bg-blue-500/20 text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/80 dark:border-white/10 transition-all flex items-center justify-center shadow-sm"
                title="LinkedIn @anilmonitor"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-sky-50 dark:bg-white/10 dark:hover:bg-sky-500/20 text-slate-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 border border-slate-200/80 dark:border-white/10 transition-all flex items-center justify-center shadow-sm"
                title="Twitter / X @anilmonitor"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-pink-50 dark:bg-white/10 dark:hover:bg-pink-500/20 text-slate-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 border border-slate-200/80 dark:border-white/10 transition-all flex items-center justify-center shadow-sm"
                title="Instagram @anilmonitor"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
