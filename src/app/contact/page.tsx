"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  User,
  Mail,
  FileText,
  MessageSquare,
  MapPin,
  Clock,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Share2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Header */}
      <section className="relative py-8 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display">
            Contact & Get in Touch
          </h1>

          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reach out for software projects, tech inquiries, discussions, or community questions.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-white/15 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Send a Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                  Fill out the form below to connect directly with Anil Kumar.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 text-center space-y-3.5 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold text-slate-900 dark:text-white">{formData.name}</span>. Your message has been received. I will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-xs font-semibold shadow-sm transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="Anil Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-surface-100/90 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-500 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-surface-100/90 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-500 shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                    Subject / Topic
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Software Development, Collaboration, or Tech Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-surface-100/90 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-500 shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell me about your project, idea, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-white dark:bg-surface-100/90 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-500 shadow-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.01] text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Details Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/15 space-y-4 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">
                Location & Availability
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-gray-300">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-surface-100/60 border border-slate-200/60 dark:border-white/5">
                  <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block">Location</span>
                    <span>Garhwa, Jharkhand, India (822114)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-surface-100/60 border border-slate-200/60 dark:border-white/5">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block">Response Time</span>
                    <span>Usually within 24 to 48 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Across Web */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/15 space-y-4 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">
                Connect Across Platforms
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                Connect directly through official social media profiles, community networks, and code repositories.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-surface-100/80 dark:hover:bg-white/10 border border-slate-200/60 dark:border-white/5 text-xs font-semibold text-slate-800 dark:text-white flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4 text-slate-700 dark:text-gray-300" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 dark:bg-surface-100/80 dark:hover:bg-blue-500/10 border border-slate-200/60 dark:border-white/5 text-xs font-semibold text-slate-800 dark:text-white flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50/50 dark:bg-surface-100/80 dark:hover:bg-sky-500/10 border border-slate-200/60 dark:border-white/5 text-xs font-semibold text-slate-800 dark:text-white flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Twitter className="w-4 h-4 text-sky-500" />
                  <span>Twitter / X</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-pink-50/50 dark:bg-surface-100/80 dark:hover:bg-pink-500/10 border border-slate-200/60 dark:border-white/5 text-xs font-semibold text-slate-800 dark:text-white flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
                </a>
              </div>

              <Link
                href="/socials"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-surface-100 dark:hover:bg-surface-200 text-slate-800 dark:text-white text-xs font-semibold text-center transition-all shadow-sm mt-2"
              >
                <Share2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>View All Social Links & Handles</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
