"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Youtube,
  FolderGit2,
  Mail,
  Sparkles,
} from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Channels", href: "/channels", icon: Youtube },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "About", href: "/about", icon: Sparkles },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#0a0d14]/95 backdrop-blur-lg border-t border-slate-200/80 dark:border-white/10 px-2 py-1.5 safe-area-bottom shadow-xl"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-2 rounded-xl transition-all ${
                isActive
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/15 font-bold"
                  : "text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Icon
                className={`w-5 h-5 mb-0.5 ${
                  isActive ? "text-indigo-600 dark:text-indigo-400 scale-110" : "text-slate-500 dark:text-gray-400"
                } transition-transform`}
              />
              <span className="text-[10px] tracking-tight">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
