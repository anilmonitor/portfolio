"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Play,
  Youtube,
  Eye,
  Clock,
  ArrowRight,
} from "lucide-react";
import { PORTFOLIO_DATA, VideoItem } from "@/data/portfolioData";
import VideoModal from "@/components/ui/VideoModal";

export default function FeaturedVideos() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const categories = [
    { id: "all", label: "All Videos" },
    { id: "tech", label: "PC & Tech Guides" },
    { id: "engineering", label: "Hardware & IoT" },
    { id: "vlog", label: "Vlogs & Studio BTS" },
  ];

  const filteredVideos =
    selectedCategory === "all"
      ? PORTFOLIO_DATA.featuredVideos
      : PORTFOLIO_DATA.featuredVideos.filter(
          (v) => v.category === selectedCategory
        );

  return (
    <section className="py-16 sm:py-20 relative bg-slate-100/60 dark:bg-surface-50/40 border-y border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
              Trending & Essential Videos
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm max-w-xl">
              Curated tutorials and engineering guides from across Anil Monitor, Anil Engineer, and Anil Monitor Vlog.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "bg-white dark:bg-surface-100/80 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-surface-200 border border-slate-200 dark:border-transparent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="glass-panel rounded-3xl border border-slate-200/80 dark:border-white/10 overflow-hidden flex flex-col justify-between glass-panel-hover group shadow-sm"
            >
              {/* Thumbnail Container */}
              <div
                className="relative aspect-video w-full overflow-hidden bg-slate-200 dark:bg-surface-200 cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-[10px] sm:text-[11px] font-semibold text-white backdrop-blur-sm flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{video.duration}</span>
                </div>

                {/* Channel Label */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-bold text-white border border-white/10 flex items-center gap-1">
                  <Youtube className="w-3 h-3 text-red-500" />
                  <span>{video.channelName}</span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3
                    onClick={() => setActiveVideo(video)}
                    className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors line-clamp-2 cursor-pointer font-display"
                  >
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-200/80 dark:border-white/10 text-xs text-slate-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>{video.views} Views</span>
                  </div>

                  <button
                    onClick={() => setActiveVideo(video)}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1"
                  >
                    <span>Play Now</span>
                    <Play className="w-3 h-3 fill-indigo-600 dark:fill-indigo-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/channels"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-white dark:bg-surface-100 hover:bg-slate-50 dark:hover:bg-surface-200 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 shadow-sm"
          >
            <Youtube className="w-4 h-4 text-red-500" />
            <span>Explore Complete Channel Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
