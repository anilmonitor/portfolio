import React from "react";
import Image from "next/image";
import { MessageSquareQuote, Star, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function TestimonialsSection() {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 fill-rose-400" />
            <span>Community Love</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Trusted by 150,000+ Engineers & Learners
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            What viewers and engineers have to say about the videos, projects, and guides across the 3 channels.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between glass-panel-hover"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-6">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/15">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-display">
                    {item.author}
                  </div>
                  <div className="text-xs text-indigo-400">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
