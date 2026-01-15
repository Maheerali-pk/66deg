import FAQSectionBase from "@/components/FAQSectionBase";

const ApproachFAQ = () => {
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

  return (
    <FAQSectionBase
      faqs={faqs}
      title={
        <>
          Frequently Asked <br /> Questions
        </>
      }
      description="Key insights into Building the Agentic Enterprise."
      buttonText="get in touch"
    />
  );
};

export default ApproachFAQ;
