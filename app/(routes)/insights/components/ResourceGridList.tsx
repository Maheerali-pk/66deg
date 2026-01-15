"use client";

import { useState } from "react";
import ResourceCard from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";

const ResourceGridList = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const resources = [
    {
      type: "insights",
      date: "November 3, 2025",
      title:
        "Everest Group's 2025 PEAK Matrix® for Google Cloud Service Specialists",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6936efeaea25d18e86d1c0ab_GFS%20Story.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "January 12, 2026",
      title: "Honeywell Unveils AI-Enabled Smart Shopping Platform",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6920e419618f53265faf2af2_Content%20Velocity.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 21, 2025",
      title:
        "The Content Velocity Imperative: Achieving 5x Scale Without the Headcount Risk",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 15, 2025",
      title:
        "Agentic Teams: How Human-Agent Collaboration Redefines Workforce Productivity",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 14, 2025",
      title:
        "Why AI-Powered Modernization is the Only Way to De-Risk Your Cloud Strategy",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 9, 2025",
      title:
        "The Agentic Fluency Imperative: Upskilling Your Workforce for Human-Agent Collaboration",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 7, 2025",
      title:
        "AI Agents vs. Agentic AI Systems: What Executives Need to Know About Autonomy",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 3, 2025",
      title:
        "Everest Group's 2025 PEAK Matrix® for Google Cloud Service Specialists",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6936efeaea25d18e86d1c0ab_GFS%20Story.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "January 12, 2026",
      title: "Honeywell Unveils AI-Enabled Smart Shopping Platform",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6920e419618f53265faf2af2_Content%20Velocity.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 21, 2025",
      title:
        "The Content Velocity Imperative: Achieving 5x Scale Without the Headcount Risk",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 15, 2025",
      title:
        "Agentic Teams: How Human-Agent Collaboration Redefines Workforce Productivity",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 14, 2025",
      title:
        "Why AI-Powered Modernization is the Only Way to De-Risk Your Cloud Strategy",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 9, 2025",
      title:
        "The Agentic Fluency Imperative: Upskilling Your Workforce for Human-Agent Collaboration",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 7, 2025",
      title:
        "AI Agents vs. Agentic AI Systems: What Executives Need to Know About Autonomy",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 3, 2025",
      title:
        "Everest Group's 2025 PEAK Matrix® for Google Cloud Service Specialists",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6936efeaea25d18e86d1c0ab_GFS%20Story.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "January 12, 2026",
      title: "Honeywell Unveils AI-Enabled Smart Shopping Platform",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6920e419618f53265faf2af2_Content%20Velocity.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 21, 2025",
      title:
        "The Content Velocity Imperative: Achieving 5x Scale Without the Headcount Risk",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 15, 2025",
      title:
        "Agentic Teams: How Human-Agent Collaboration Redefines Workforce Productivity",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 14, 2025",
      title:
        "Why AI-Powered Modernization is the Only Way to De-Risk Your Cloud Strategy",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 9, 2025",
      title:
        "The Agentic Fluency Imperative: Upskilling Your Workforce for Human-Agent Collaboration",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
  ];

  const visibleResources = resources.slice(0, visibleCount);
  const hasMore = visibleCount < resources.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, resources.length));
  };

  return (
    <section className="py-24 ">
      <div className="container mx-auto border-t border-divider-1 pt-16">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-1">
          {visibleResources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <Button
              variant="secondary"
              className="rounded-none uppercase font-family-secondary"
              onClick={handleLoadMore}
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceGridList;
