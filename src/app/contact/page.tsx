"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  Youtube,
  Instagram,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { FaqSchema } from "@/components/seo/JsonLd";

export default function ContactPage() {
  const { personal, faqs } = PORTFOLIO_DATA;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    channelInterest: "Anil Monitor",
    collaborationType: "Dedicated Video",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      <FaqSchema />

      {/* Header */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Partnerships & Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
            Collaborate & Get in Touch
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Interested in sponsoring a video, booking a technical consultation, or discussing an engineering project? Let&apos;s build something impactful together.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl">
            <h2 className="text-2xl font-bold text-white font-display mb-2">
              Send a Collaboration Request
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-8">
              Fill out the form below. I usually respond within 24 to 48 business hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. I have received your request regarding {formData.collaborationType} on {formData.channelInterest} and will get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-xl bg-surface-100 text-xs font-semibold text-white hover:bg-surface-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-100/80 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-100/80 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Brand / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. TechCorp Labs"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-100/80 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Target Channel *
                    </label>
                    <select
                      value={formData.channelInterest}
                      onChange={(e) => setFormData({ ...formData, channelInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-100/80 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-all"
                    >
                      <option value="Anil Monitor">Anil Monitor (Tech & PC Fixes)</option>
                      <option value="Anil Engineer">Anil Engineer (Hardware & Code)</option>
                      <option value="Anil Monitor Vlog">Anil Monitor Vlog (Lifestyle & BTS)</option>
                      <option value="All Channels">Cross-Channel Campaign</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Collaboration Type
                  </label>
                  <select
                    value={formData.collaborationType}
                    onChange={(e) => setFormData({ ...formData, collaborationType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/80 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-all"
                  >
                    <option value="Dedicated Video">Dedicated Review / Tutorial</option>
                    <option value="Integrated Sponsorship">Integrated 60s Sponsorship Segment</option>
                    <option value="Software / Hardware Consultation">Engineering / Hardware Consultation</option>
                    <option value="Social Media Promotion">Instagram / Community Post</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Project / Campaign Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your product, expected timelines, and campaign goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-100/80 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Collaboration Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & Social Channels with Icons */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 space-y-4">
              <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400 w-fit">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Direct Email
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  For brand collaborations, press, or direct sponsorship inquiries.
                </p>
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="block p-3 rounded-xl bg-surface-100 text-sm font-semibold text-white hover:text-indigo-400 transition-colors border border-white/5 text-center"
              >
                {personal.email}
              </a>
            </div>

            {/* Official Social Channels Network with SVG Icons */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 space-y-4">
              <h3 className="text-lg font-bold text-white font-display">
                Official Channels & Handles
              </h3>
              <div className="space-y-2.5">
                <a
                  href={personal.socials.youtubeMain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-100/60 hover:bg-white/10 text-xs text-white transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Youtube className="w-4 h-4 text-red-500" />
                    <span>Anil Monitor</span>
                  </span>
                  <span className="text-gray-400">@ANILMONITOR</span>
                </a>
                <a
                  href={personal.socials.youtubeEngineer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-100/60 hover:bg-white/10 text-xs text-white transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Youtube className="w-4 h-4 text-emerald-400" />
                    <span>Anil Engineer</span>
                  </span>
                  <span className="text-gray-400">@ANILENGINEER</span>
                </a>
                <a
                  href={personal.socials.youtubeVlog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-100/60 hover:bg-white/10 text-xs text-white transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Youtube className="w-4 h-4 text-rose-400" />
                    <span>Anil Monitor Vlog</span>
                  </span>
                  <span className="text-gray-400">@VLOGANIl</span>
                </a>
                <a
                  href={personal.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-100/60 hover:bg-white/10 text-xs text-white transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram</span>
                  </span>
                  <span className="text-gray-400">@anilmonitor</span>
                </a>
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-100/60 hover:bg-white/10 text-xs text-white transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-white" />
                    <span>GitHub</span>
                  </span>
                  <span className="text-gray-400">anilmonitor</span>
                </a>
                <a
                  href={personal.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-100/60 hover:bg-white/10 text-xs text-white transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Twitter className="w-4 h-4 text-sky-400" />
                    <span>Twitter / X</span>
                  </span>
                  <span className="text-gray-400">@anilmonitor</span>
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-100/60 hover:bg-white/10 text-xs text-white transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </span>
                  <span className="text-gray-400">anilmonitor</span>
                </a>
                <a
                  href={personal.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-100/60 hover:bg-white/10 text-xs text-white transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Facebook className="w-4 h-4 text-blue-500" />
                    <span>Facebook</span>
                  </span>
                  <span className="text-gray-400">anilmonitorvlog</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Got Questions? We&apos;ve Got Answers.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left text-sm sm:text-base font-bold text-white font-display"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
