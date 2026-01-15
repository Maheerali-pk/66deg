"use client";

import { useState } from "react";
import SectionHeadingWithSquare from "@/components/section-heading-with-square";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FrameworkPillars = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      number: "01",
      title: "Design and Build your Agentic Enterprise Strategy",
      description:
        "We start with the outcome, not the technology. This phase involves deep process decomposition to identify high-impact use cases, defining a clear governance framework, and establishing a business case for the entire AI roadmap. We ensure every Agentic system is precisely aligned with core business metrics, guaranteeing the project is purposeful, compliant, and positioned to deliver measurable ROI.",
    },
    {
      number: "02",
      title: "Cultivate AI Fluency & Organizational Readiness",
      description:
        "Success requires human adoption. We go beyond basic training by deploying targeted change management programs that address all core components of enterprise AI fluency: tool proficiency, critical human judgment, and responsible use. This systematic enablement transforms AI understanding into a core business competency across your workforce, maximizing long-term user engagement and trust.",
    },
    {
      number: "03",
      title: "Leverage Our Extensive IP & Accelerators",
      description:
        "We accelerate time-to-value by starting at the finish line. Our proprietary Agentic IP and pre-built frameworks—covering everything from secure data ingestion pipelines to foundational model integration—drastically simplify complex system deployment. This extensive library of technical accelerators reduces development time, minimizes project risk, and ensures compliance adherence from the initial build phases.",
    },
    {
      number: "04",
      title: "Accelerate Time to Value with AI-Powered Delivery",
      description:
        "We utilize AI to build AI. Our automated, AI-powered delivery model integrates technical precision, automated security checks, and continuous integration/continuous delivery (CI/CD) into the engineering process. This rigor optimizes engineering quality, allows us to predict and mitigate project risk proactively, and ensures the fastest, most reliable time-to-market for every critical intelligent solution built on Google Cloud.",
    },
    {
      number: "05",
      title: "Manage and Scale Agentic AI Across the Enterprise",
      description:
        "Sustained impact requires operational excellence. We ensure reliable, large-scale Agentic AI impact by establishing world-class MLOps/LLMOps and governance frameworks. This includes continuous monitoring, automated drift detection, security hardening, and pipelines for model retraining, reliably managing and evolving your autonomous AI systems beyond pilots and into continuous, predictable production operations.",
    },
  ];

  return (
    <section className="py-24 sm:py-16">
      <div className="container mx-auto">
        <div className="mb-12">
          <SectionHeadingWithSquare text="our expertise" />
          <h2 className="text-4xl sm:text-3xl text-foreground mb-4">
            Our Framework for Success
          </h2>
          <p className="text-lg sm:text-base text-muted-foreground max-w-3xl">
            The path to the Agentic Enterprise requires simultaneous excellence in
            strategic planning, technical execution, and organizational readiness.
            Our five-pillar framework guarantees success at every critical phase.
          </p>
        </div>

        <div className="space-y-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="border-b border-divider-1 pb-8 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex items-center gap-4 sm:w-32">
                  <span className="text-4xl sm:text-3xl font-light text-muted-foreground">
                    {pillar.number}
                  </span>
                  <span className="text-sm uppercase text-muted-foreground font-family-secondary">
                    Pillar {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-xl text-foreground mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-base sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkPillars;
