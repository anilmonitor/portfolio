import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Calendar,
  ArrowRight,
  User,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Tech Blog & Tutorials | Anil Kumar",
  description:
    "Read in-depth guides on PC troubleshooting, Windows optimization, ESP32 IoT projects, and creator workflows by Anil Kumar.",
  alternates: {
    canonical: `${PORTFOLIO_DATA.personal.websiteUrl}/blog`,
  },
};

export default function BlogPage() {
  const { blogs } = PORTFOLIO_DATA;

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Header */}
      <section className="relative py-8 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display">
            Insights, Guides & Tutorials
          </h1>

          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Written companion guides to videos and engineering case studies from Anil Kumar.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((post) => (
            <article
              key={post.slug}
              className="glass-panel rounded-3xl border border-slate-200/80 dark:border-white/15 overflow-hidden flex flex-col justify-between glass-panel-hover group shadow-sm"
            >
              <div>
                {/* Cover Image */}
                <Link href={`/blog/${post.slug}`} className="block relative aspect-video w-full overflow-hidden bg-slate-200 dark:bg-surface-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${post.coverImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-black/80 text-white border border-white/10">
                    {post.category}
                  </span>
                </Link>

                {/* Content */}
                <div className="p-5 sm:p-7 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      {post.publishDate}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors font-display line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 border border-slate-200/80 dark:border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Read More */}
              <div className="p-5 sm:p-7 pt-0 border-t border-slate-200/80 dark:border-white/10 mt-3 pt-3 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  {post.author}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
