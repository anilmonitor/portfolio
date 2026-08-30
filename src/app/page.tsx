import React from "react";
import HeroSection from "@/components/home/HeroSection";
import VenturesShowcase from "@/components/home/VenturesShowcase";
import ChannelShowcase from "@/components/home/ChannelShowcase";
import FeaturedVideos from "@/components/home/FeaturedVideos";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsTeaser from "@/components/home/ProjectsTeaser";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CollabCta from "@/components/home/CollabCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VenturesShowcase />
      <ChannelShowcase />
      <FeaturedVideos />
      <SkillsSection />
      <ProjectsTeaser />
      <TestimonialsSection />
      <CollabCta />
    </>
  );
}
