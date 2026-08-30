"use client";

import React, { useEffect } from "react";
import { X, Youtube, ExternalLink } from "lucide-react";
import { VideoItem } from "@/data/portfolioData";

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (video) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-surface-50 border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-surface-100/50">
          <div className="flex items-center gap-2">
            <Youtube className="w-5 h-5 text-red-500" />
            <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
              {video.channelName}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Modal Footer / Details */}
        <div className="p-5 space-y-3">
          <h3 className="text-lg font-bold text-white font-display">
            {video.title}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {video.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10">
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>{video.views} Views</span>
              <span>•</span>
              <span>{video.duration}</span>
              <span>•</span>
              <span className="capitalize">{video.category}</span>
            </div>

            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
