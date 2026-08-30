import React from "react";
import Link from "next/link";
import {
  Youtube,
  ExternalLink,
  Users,
  Film,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { PORTFOLIO_DATA, Channel } from "@/data/portfolioData";

export default function ChannelShowcase() {
  const { channels } = PORTFOLIO_DATA;

  return (
    <section className="py-20 relative overflow-hidden" id="channels">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
            <Youtube className="w-3.5 h-3.5 fill-red-400" />
            <span>Official YouTube Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            3 Channels. 1 Creator. Endless Knowledge.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Whether you want instant PC fixes, deep hardware engineering projects, or authentic creator vlogs, find the right channel tailored for you.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {channels.map((channel: Channel) => (
            <div
              key={channel.id}
              className="glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between glass-panel-hover group"
            >
              {/* Card Banner & Badge */}
              <div>
                <div className="relative h-36 w-full overflow-hidden bg-surface-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${channel.bannerUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131823] via-[#131823]/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 backdrop-blur-md text-white border border-white/15">
                      {channel.badge}
                    </span>
                  </div>

                  {/* Channel icon avatar placeholder */}
                  <div className="absolute -bottom-4 left-5 w-14 h-14 rounded-2xl bg-surface-50 border-2 border-white/20 p-2 shadow-lg flex items-center justify-center">
                    <Youtube className="w-8 h-8 text-red-500 fill-red-500" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 pt-7 space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-xl font-bold text-white font-display">
                        {channel.name}
                      </h3>
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 fill-indigo-400/20" />
                    </div>
                    <span className="text-xs font-semibold text-indigo-400 block mt-0.5">
                      {channel.handle}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed min-h-[48px]">
                    {channel.description}
                  </p>

                  {/* Channel Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center">
                    <div>
                      <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        <Users className="w-3 h-3 text-indigo-400" />
                        <span>Subs</span>
                      </div>
                      <div className="text-sm font-bold text-white font-display mt-0.5">
                        {channel.subscribers}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        <Film className="w-3 h-3 text-rose-400" />
                        <span>Videos</span>
                      </div>
                      <div className="text-sm font-bold text-white font-display mt-0.5">
                        {channel.videosCount}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        <Eye className="w-3 h-3 text-emerald-400" />
                        <span>Views</span>
                      </div>
                      <div className="text-sm font-bold text-white font-display mt-0.5">
                        {channel.views}
                      </div>
                    </div>
                  </div>

                  {/* Topic Tags */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      Key Topics:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {channel.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-gray-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6 pt-0 space-y-2.5">
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-md shadow-red-600/20 transition-all hover:scale-[1.02]"
                >
                  <Youtube className="w-4 h-4 fill-white" />
                  <span>Subscribe on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>

                <Link
                  href={`/channels#${channel.id}`}
                  className="w-full inline-flex items-center justify-center gap-1 py-2 px-4 rounded-xl bg-surface-100/70 hover:bg-surface-200 text-gray-300 hover:text-white text-xs font-medium transition-colors"
                >
                  <span>View Playlists & Info</span>
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
