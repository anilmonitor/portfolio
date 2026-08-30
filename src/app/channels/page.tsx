import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Youtube,
  Users,
  Film,
  Eye,
  ExternalLink,
  CheckCircle2,
  ListVideo,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import FeaturedVideos from "@/components/home/FeaturedVideos";

export const metadata: Metadata = {
  title: "YouTube Channels | Anil Monitor, Anil Engineer & Anil Monitor Vlog",
  description:
    "Explore the 3 official YouTube channels of Anil Kumar: @ANILMONITOR (Tech Tutorials & Fixes), @ANILENGINEER (IoT & Coding), and @VLOGANIl (Creator Lifestyle).",
  alternates: {
    canonical: "https://anilmonitor.xpertbite.in/channels",
  },
};

export default function ChannelsPage() {
  const { channels } = PORTFOLIO_DATA;

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
            <Youtube className="w-4 h-4 fill-red-400" />
            <span>YouTube Creator Network</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
            Explore All 3 YouTube Channels
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome to the official content hub for Anil Kumar. Deep dive into tech tutorials, engineering innovations, and creator vlogs.
          </p>
        </div>
      </section>

      {/* Deep Dive Channel Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
        {channels.map((ch) => (
          <div
            key={ch.id}
            id={ch.id}
            className="glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Channel Info & Badges */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-600/20 text-red-400 border border-red-500/30 flex items-center gap-1.5">
                    <Youtube className="w-3.5 h-3.5 fill-red-400" />
                    <span>{ch.badge}</span>
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {ch.category}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display flex items-center gap-2">
                    <span>{ch.name}</span>
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />
                  </h2>
                  <a
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 mt-1"
                  >
                    <span>{ch.handle}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {ch.longDescription}
                </p>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-surface-100/60 border border-white/5 text-center">
                  <div>
                    <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                      <Users className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Subscribers</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white font-display mt-0.5">
                      {ch.subscribers}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                      <Film className="w-3.5 h-3.5 text-rose-400" />
                      <span>Videos</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white font-display mt-0.5">
                      {ch.videosCount}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Total Views</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white font-display mt-0.5">
                      {ch.views}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-red-600/20 transition-all hover:scale-105"
                  >
                    <Youtube className="w-4 h-4 fill-white" />
                    <span>Subscribe on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`${ch.url}/playlists`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-100 hover:bg-surface-200 border border-white/10 text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition-colors"
                  >
                    <ListVideo className="w-4 h-4 text-indigo-400" />
                    <span>Browse Playlists</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Featured Playlists & Topics */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-100/40 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-white font-display">
                  <ListVideo className="w-4 h-4 text-indigo-400" />
                  <span>Popular Series & Playlists</span>
                </div>

                <div className="space-y-2">
                  {ch.featuredPlaylists.map((plist, pidx) => (
                    <div
                      key={pidx}
                      className="p-3 rounded-xl bg-surface-50/60 border border-white/5 flex items-center justify-between text-xs text-gray-300"
                    >
                      <span className="font-medium">{plist}</span>
                      <a
                        href={ch.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 shrink-0"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Core Focus Topics:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ch.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 rounded-lg text-xs bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Embedded Video Showcase */}
      <FeaturedVideos />
    </div>
  );
}
