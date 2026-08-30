import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Youtube,
  Tag,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = PORTFOLIO_DATA.blogs.find((b) => b.slug === params.slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Anil Kumar Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = PORTFOLIO_DATA.blogs.find((b) => b.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-y border-white/10 py-3 text-xs text-gray-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <User className="w-3.5 h-3.5 text-indigo-400" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                {post.publishDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-10 border border-white/15 shadow-2xl bg-surface-200">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Tags */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-400 font-semibold flex items-center gap-1 mr-1">
              <Tag className="w-3 h-3" /> Tags:
            </span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs bg-white/5 text-gray-300 border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Card Box */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-white/15 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500/50 shrink-0">
            <Image
              src={PORTFOLIO_DATA.personal.avatar}
              alt={post.author}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1 text-center sm:text-left flex-1">
            <div className="text-base font-bold text-white font-display">
              Written by {post.author}
            </div>
            <p className="text-xs text-gray-400">
              Software Engineer & creator behind Anil Monitor, Anil Engineer, and Anil Monitor Vlog.
            </p>
          </div>
          <a
            href={PORTFOLIO_DATA.personal.socials.youtubeMain}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shrink-0 transition-colors"
          >
            <Youtube className="w-3.5 h-3.5" />
            <span>Subscribe on YT</span>
          </a>
        </div>
      </article>
    </div>
  );
}
