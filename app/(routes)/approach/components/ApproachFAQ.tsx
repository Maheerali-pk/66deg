"use client";

import { useState } from "react";
import SectionHeadingWithSquare from "@/components/section-heading-with-square";
import { Button } from "@/components/ui/button";
import FAQItem from "./FAQItem";

const ApproachFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the Agentic Enterprise, and why is it your focus?",
      answer:
        "The Agentic Enterprise is the pinnacle of AI adoption, defined by intelligent, autonomous software agents that orchestrate complex business workflows without constant human supervision. It is the necessary next evolution for organizations seeking exponential productivity gains.",
    },
    {
      question:
        "What is AI Fluency, and why does it matter more than basic training?",
      answer:
        "AI Fluency is the ability of your employees to effectively collaborate with AI tools. It is a core competency that combines tool proficiency, critical human judgment, and ethical understanding, directly impacting the measurable ROI of every AI system you deploy.",
    },
    {
      question:
        "How is your approach different from a traditional system integrator?",
      answer:
        "Our approach is holistic and AI-native. We combine AI-Powered Delivery (accelerating the technical build) with AI Fluency Enablement (accelerating human adoption), guaranteeing that both the technology and the people are prepared for enterprise-wide success.",
    },
    {
      question:
        "How do you ensure governance and security for autonomous Agentic AI systems?",
      answer:
        "Security is built into our framework from the strategy phase. We implement strict MLOps/LLMOps and governance controls to manage model drift, ensure compliance, and provide full auditability for every decision made by autonomous agents in production.",
    },
    {
      question:
        "What is the typical starting point or first phase of your approach?",
      answer:
        "The journey always begins with the Agentic Enterprise Strategy. This phase defines the AI roadmap, identifies high-impact use cases, and establishes the governance framework, ensuring the subsequent technical investment is purposeful and de-risked.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-16 ">
      <div className="container mx-auto   ">
        <div className="border-t border-divider-1 pt-16 grid grid-cols-2 sm:grid-cols-1 sm:gap-4 ">
          <div className=" flex flex-col gap-8 sm:gap-4 ">
            <h2 className="text-6xl sm:text-3xl text-foreground ">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-2xl sm:text-base text-text-primary">
              Key insights into Building the Agentic Enterprise.
            </p>
            <Button
              variant="secondary"
              className="rounded-none uppercase font-family-secondary w-fit"
            >
              get in touch
            </Button>
          </div>

          <div className="max-w-4xl ">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachFAQ;
