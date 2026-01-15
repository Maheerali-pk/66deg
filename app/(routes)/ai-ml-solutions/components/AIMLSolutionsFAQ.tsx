import FAQSectionBase from "@/components/FAQSectionBase";

const AIMLSolutionsFAQ = () => {
  const faqs = [
    {
      question:
        "Who from our team should participate in the Blueprint engagement?",
      answer:
        "To ensure comprehensive strategic alignment, we recommend participation from a cross-functional group of leaders, including executive sponsors, key business process owners, and technical leads from your data, infrastructure, and application teams.",
    },
    {
      question: "What is the typical duration of this engagement?",
      answer:
        "While the timeline can be tailored, the blueprint engagement typically spans several weeks, involving a series of structured workshops and interviews. This allows for the depth of analysis required to produce a credible and actionable strategic roadmap.",
    },
    {
      question: "Is this blueprint only for companies that are new to AI?",
      answer:
        'Not at all. The blueprint is valuable for organizations at any stage of AI maturity. Whether you are just starting, or have existing AI models stuck in "pilot purgatory," our methodology helps bring clarity, prioritization, and a strong business case to your AI program.',
    },
    {
      question: "What is the next step after the blueprint is delivered?",
      answer:
        'The blueprint is designed to be the first step in your transformation. The final deliverable is an actionable, prioritized roadmap that seamlessly transitions into execution, where our "Agentic Delivery Pods" can begin building and deploying the solutions we\'ve defined together.',
    },
  ];

  return (
    <FAQSectionBase
      faqs={faqs}
      title="Frequently Asked Questions"
      description="Your key questions about transformation in the retail sector, answered."
      buttonText="Get in touch"
    />
  );
};

export default AIMLSolutionsFAQ;
