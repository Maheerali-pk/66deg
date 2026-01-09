"use client";

import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import SectionHeadingWithSquare from "./section-heading-with-square";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const ExpertiseTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [tabWidths, setTabWidths] = useState<number[]>([]);

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

  useEffect(() => {
    const updateTabWidths = () => {
      const widths = tabRefs.current.map((ref) => {
        return ref ? ref.offsetWidth : 0;
      });
      setTabWidths(widths);
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(updateTabWidths, 0);
    window.addEventListener("resize", updateTabWidths);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateTabWidths);
    };
  }, [activeTab]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto ">
        <div className="mb-12 w-full">
          <SectionHeadingWithSquare text="OUR EXPERTISE" />
          <div className="flex justify-between w-full">
            <h2 className="text-6xl  text-foreground mb-4">
              Guiding Your Path to AI Value
            </h2>
            <p className="text-muted-foreground max-w-lg text-lg">
              Our expertise and end-to-end capabilities form the strategic
              architecture of the Agentic Enterprise, guiding your path to AI
              value.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs - Full Width */}
      <div className="flex flex-col gap-20">
        <div className="w-full">
          <div className="container mx-auto ">
            <div className="flex gap-4 relative">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  onClick={() => {
                    if (index !== activeTab) {
                      setIsContentVisible(false);
                      setTimeout(() => {
                        setActiveTab(index);
                        setTimeout(() => setIsContentVisible(true), 50);
                      }, 250);
                    }
                  }}
                  className={classNames(
                    "flex-1 uppercase text-lg cursor-pointer text-text-primary transition-colors duration-300 pb-3 border-b border-divider-1 -mb-[2px] relative z-0",
                    {
                      "hover:text-foreground": activeTab !== index,
                    }
                  )}
                >
                  {tab.label.toUpperCase()}
                </button>
              ))}
              {/* All indicator lines - each tab has its own line, all stacked at same vertical position */}
              {tabs.map((tab, index) => {
                const tabWidth = tabWidths[index] || 0;
                const tabLeft = tabRefs.current[index]
                  ? tabRefs.current[index]!.offsetLeft
                  : 0;
                const isActive = activeTab === index;
                return (
                  <div
                    key={`indicator-${index}`}
                    className="absolute bottom-[-2px] h-px bg-primary transition-all duration-500 ease-in-out z-10"
                    style={{
                      left: `${tabLeft}px`,
                      width: isActive ? `${tabWidth}px` : "0px",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="container mx-auto  ">
          <div
            className={classNames(
              "grid lg:grid-cols-[1fr_1.5fr] gap-60 items-start transition-all duration-300 ease-in-out",
              {
                "opacity-0 translate-y-2": !isContentVisible,
                "opacity-100 translate-y-0": isContentVisible,
              }
            )}
          >
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl text-foreground leading-relaxed">
                {tabs[activeTab].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {tabs[activeTab].description}
              </p>
              <div className="space-y-0 w-2/3">
                {tabs[activeTab].tags.map((tag, index) => (
                  <div
                    key={index}
                    className="border-b border-divider-1 font-family-secondary py-1.5 first:border-t-0"
                  >
                    <span className="uppercase text-sm text-foreground">
                      {tag.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                variant="link"
                size="link"
                className="text-text-primary border-b border-b-text-primary"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="bg-background-secondary flex items-center justify-center rounded-sm overflow-hidden  h-full w-auto p-0">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className="h-96 w-auto object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseTabs;
