"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ExpertiseTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Modernize for AI",
      title:
        "Modernize and Build a Unified Data Foundation for the Intelligent Enterprise",
      description:
        "Leveraging a solution-first approach, our teams strategically engineer a unified, AI-ready platform from your legacy infrastructure and fragmented data. This removes critical constraints, unlocks operational savings, and builds the essential foundation for sustained AI innovation.",
      tags: [
        "Data to AI strategy",
        "AI-Powered modernization & Migration",
        "Data modernization",
        "Infrastructure modernization",
        "Application Modernization",
      ],
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68dd5adbcc75b2bc818c912c_b5b039cf2ce8ca3970eec7ffeaf52f89_tab-modernize.png",
    },
    {
      label: "Build with AI",
      title: "Architect and Engineer Custom AI and Cloud-Native Applications",
      description:
        "We architect and build custom AI solutions and intelligent agents that turn your vision into a competitive advantage. We move you beyond experimentation to create scalable solutions that re-engineer workflows, empower your people with new capabilities, and drive transformative gains in productivity.",
      tags: [
        "Cloud-Native development",
        "Agentic AI",
        "Generative AI",
        "Conversational AI",
        "Data & analytics",
      ],
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68dd5adbcc75b2bc818c912b_cb671ec9c90071b888d7930af45e99ad_tab-build.png",
    },
    {
      label: "Manage & Scale AI",
      title: "Ensure Sustained AI Performance and Governance at Scale",
      description:
        "We provide the critical post-deployment layers needed to transform AI initiatives into predictable business assets. Utilizing MLOps/LLMOps and world-class governance, we guarantee performance, manage costs, and drive continuous improvement and expansion.",
      tags: [
        "Infrastructure for AI",
        "AI Managed Services",
        "Agentic AI Lifecycle Management",
        "MLops & LLMops",
        "DevOps",
      ],
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68dd5adbcc75b2bc818c912d_428c95f5eec0fcda5d64ec1a1be229ff_tab-scale.png",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-12">
          <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
            OUR EXPERTISE
          </p>
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Guiding Your Path to AI Value
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Our expertise and end-to-end capabilities form the strategic
            architecture of the Agentic Enterprise, guiding your path to AI
            value.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl text-foreground leading-relaxed">
              {tabs[activeTab].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {tabs[activeTab].description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tabs[activeTab].tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary rounded-full text-xs text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button variant="outline" className="rounded-full">
              Learn more
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="w-full h-auto object-cover transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseTabs;
