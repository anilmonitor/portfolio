import React from "react";
import Link from "next/link";
import {
  Youtube,
  ExternalLink,
  Users,
  Film,
  Eye,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { PORTFOLIO_DATA, Channel } from "@/data/portfolioData";

export default function ChannelShowcase() {
  const { channels } = PORTFOLIO_DATA;

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" id="channels">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            3 YouTube Channels. Endless Knowledge.
          </h2>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {channels.map((channel: Channel) => (
            <div
              key={channel.id}
              className="glass-panel rounded-3xl border border-slate-200/80 dark:border-white/10 overflow-hidden flex flex-col justify-between glass-panel-hover group shadow-sm"
            >
              {/* Card Banner & Badge */}
              <div>
                <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-slate-200 dark:bg-surface-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${channel.bannerUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[#131823] dark:via-[#131823]/60 dark:to-transparent" />
                  
                  {/* Category Label */}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold text-white bg-black/60 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                      {channel.badge}
                    </span>
                  </div>

                  {/* Channel icon avatar */}
                  <div className="absolute -bottom-4 left-5 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white dark:bg-surface-50 border-2 border-slate-200 dark:border-white/20 p-2 shadow-md flex items-center justify-center">
                    <Youtube className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 fill-red-600" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 pt-6 sm:pt-7 space-y-3.5">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                        {channel.name}
                      </h3>
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 fill-indigo-400/20" />
                    </div>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 block mt-0.5">
                      {channel.handle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed min-h-[44px]">
                    {channel.description}
                  </p>

                  {/* Channel Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-200/80 dark:border-white/10 text-center">
                    <div>
                      <div className="text-[11px] text-slate-500 dark:text-gray-400 flex items-center justify-center gap-1">
                        <Users className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                        <span>Subs</span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-display mt-0.5">
                        {channel.subscribers}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 dark:text-gray-400 flex items-center justify-center gap-1">
                        <Film className="w-3 h-3 text-rose-600 dark:text-rose-400" />
                        <span>Videos</span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-display mt-0.5">
                        {channel.videosCount}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 dark:text-gray-400 flex items-center justify-center gap-1">
                        <Eye className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span>Views</span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-display mt-0.5">
                        {channel.views}
                      </div>
                    </div>
                  </div>

                  {/* Topic Tags */}
                  <div className="space-y-1">
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 dark:text-gray-400 uppercase tracking-wider">
                      Key Topics:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {channel.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200/60 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-5 sm:p-6 pt-0 space-y-2">
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-sm transition-all hover:scale-[1.02]"
                >
                  <Youtube className="w-4 h-4 fill-white" />
                  <span>Subscribe on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>

                <Link
                  href={`/channels#${channel.id}`}
                  className="w-full inline-flex items-center justify-center gap-1 py-2 px-4 rounded-xl bg-slate-100 dark:bg-surface-100/70 hover:bg-slate-200 dark:hover:bg-surface-200 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-colors"
                >
                  <span>View Playlists</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
