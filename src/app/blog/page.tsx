import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  User,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Tech Blog & Tutorials | Anil Kumar",
  description:
    "Read in-depth guides on PC troubleshooting, Windows optimization, ESP32 IoT projects, and creator workflows by Anil Kumar.",
  alternates: {
    canonical: "https://anilmonitor.com/blog",
  },
};

export default function BlogPage() {
  const { blogs } = PORTFOLIO_DATA;

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <BookOpen className="w-4 h-4" />
            <span>Tech Guides & Articles</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
            Insights, Guides & Tutorials
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Written companion guides to videos from Anil Monitor, Anil Engineer, and Anil Monitor Vlog.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <article
              key={post.slug}
              className="glass-panel rounded-3xl border border-white/15 overflow-hidden flex flex-col justify-between glass-panel-hover group"
            >
              <div>
                {/* Cover Image */}
                <Link href={`/blog/${post.slug}`} className="block relative aspect-video w-full overflow-hidden bg-surface-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${post.coverImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131823] via-transparent to-black/30" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/80 backdrop-blur-md text-indigo-400 border border-indigo-500/30">
                    {post.category}
                  </span>
                </Link>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {post.publishDate}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors font-display line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-gray-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Read More */}
              <div className="p-6 sm:p-7 pt-0 border-t border-white/10 mt-4 pt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-indigo-400" />
                  {post.author}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
