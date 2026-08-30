import React from "react";
import Link from "next/link";
import { Sparkles, Mail, ArrowRight, ShieldCheck, Youtube, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function CollabCta() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Brand Sponsorships & Collaborations</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
                Want to Feature Your Tech Brand to 150K+ Active Engineers?
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Partner with Anil Kumar across Anil Monitor, Anil Engineer, and Anil Monitor Vlog for high-conversion software reviews, hardware integrations, and developer tool demonstrations.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dedicated Tech Reviews</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Integrated Sponsorships</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Cross-Platform Reach (YT, Insta, Web)</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 text-sm text-center"
              >
                <span>Request Media Kit & Collab</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-100/90 hover:bg-surface-200 border border-white/10 text-white text-xs font-semibold transition-all text-center"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>contact@anilmonitor.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
