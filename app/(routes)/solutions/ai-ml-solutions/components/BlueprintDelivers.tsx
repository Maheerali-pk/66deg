import SectionHeadingWithSquare from "@/components/section-heading-with-square";
import { Button } from "@/components/ui/button";

const BlueprintDelivers = () => {
  const deliverables = [
    {
      number: "01",
      title: "Executive AI Scorecard & Benchmarking",
      description:
        "An easy-to-understand report that scores your readiness to become an Agentic Enterprise against industry leaders, based on a comprehensive AI IQ Questionnaire.",
    },
    {
      number: "02",
      title: "Prioritized Opportunity Matrix",
      description:
        'A 2x2 assessment of AI opportunities based on business value vs. implementation complexity, allowing you to frame "quick wins" and focus on high-impact initiatives first.',
    },
    {
      number: "03",
      title: "Process Decomposition & Opportunity Analysis",
      description:
        "Detailed outputs from our collaborative workshops, capturing distinct process, technology, and human opportunities for agentic automation within your specific workflows.",
    },
    {
      number: "04",
      title: "Enterprise AI Blueprint & Investment Roadmap",
      description:
        "A detailed, long-term strategy to guide your evolution into a modern, agentic workforce, complete with an ROI evaluation and a formal Financial Benefits Plan.",
    },
  ];

  return (
    <section className="py-24 sm:py-16 bg-background">
      <div className="container mx-auto">
        <div className=" pt-16 grid grid-cols-2 sm:grid-cols-1 sm:gap-4">
          {/* Left Column - Overview */}
          <div className="flex flex-col gap-8 sm:gap-4 w-2/3 sm:w-full">
            <SectionHeadingWithSquare text="offering details" />
            <h2 className="text-6xl sm:text-3xl text-foreground">
              What the Blueprint Delivers
            </h2>
            <p className="text-2xl sm:text-base text-text-primary">
              The Agentic AI Strategy & Impact Blueprint is a comprehensive
              engagement that delivers a full suite of strategic assets to guide
              your transformation.
            </p>
            <Button
              variant="secondary"
              className="rounded-none uppercase font-family-secondary w-fit"
            >
              Get started
            </Button>
          </div>

          {/* Right Column - Deliverables List */}
          <div className="max-w-4xl">
            <div className="border-t border-divider-1 mb-14 sm:mb-6"></div>
            {deliverables.map((item, index) => (
              <div key={index}>
                <div className="flex items-start gap-14 sm:gap-4 pb-14 px-14 sm:px-0 sm:pb-6">
                  {/* Large Number */}
                  <span className="text-6xl sm:text-4xl text-text-primary leading-none shrink-0">
                    {item.number}
                  </span>
                  {/* Title and Description */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl sm:text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-sm text-text-primary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                {/* Horizontal Separator */}
                <div className="border-t border-divider-1 mb-8 sm:mb-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueprintDelivers;
