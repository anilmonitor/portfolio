import React from "react";
import type { Metadata } from "next";
import VenturesShowcase from "@/components/home/VenturesShowcase";

export const metadata: Metadata = {
  title: "Startups & Platforms | Anil Kumar",
  description:
    "Startups & Platforms Founded by Anil Kumar: Software development company, academic platforms, hyperlocal quick commerce, and public digital infrastructure.",
  alternates: {
    canonical: "https://anilmonitor.xpertbite.in/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-16 sm:pt-20 pb-12">
      <VenturesShowcase />
    </div>
  );
}
