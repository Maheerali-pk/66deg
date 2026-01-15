import SectionHeadingWithSquare from "@/components/section-heading-with-square";
import { Button } from "@/components/ui/button";

const ImperativeSection = () => {
  const benefits = [
    {
      label: "benefits",
      title: "De-Risk Your AI Investment",
      description:
        "Move forward with confidence. Our rigorous data validation, feasibility planning, and readiness assessment are designed to avoid common pitfalls and ensure your investment is built on a solid foundation.",
    },
    {
      label: "challenge",
      title: "Justify and Maximize Financial Return",
      description:
        "We provide a clear business case for your AI program, with a strong emphasis on TCO and ROI. A key deliverable is a formal Financial Benefits Plan to secure stakeholder buy-in and measure success",
    },
    {
      label: "challenge",
      title: "Gain a Sustainable Competitive Advantage",
      description:
        'Our methodology includes an "outside-in" view of your market and peers, creating an industry blueprint that aligns your strategy with best-in-class capabilities to help you evolve and lead.',
    },
  ];

  return (
    <section className="py-24 sm:py-16 bg-background">
      <div className="container mx-auto flex flex-col gap-12">
        <div className=" grid-cols-2 grid  w-full">
          <h2 className="text-6xl sm:text-3xl text-foreground mb-4">
            The Imperative for an Intelligent Retail Enterprise
          </h2>
          <p className="text-2xl sm:text-base text-text-primary w-2/3 justify-self-end ">
            We believe technology is only as powerful as the results it
            delivers. Our expertise is focused on solving your most complex
            challenges to drive measurable improvements across your
            organization.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68dd5adbcc75b2bc818c9186_offerings-1.avif"
          className="w-full h-auto object-cover rounded-sm"
        ></img>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-divider-1 rounded-sm p-6 sm:p-4"
            >
              {/* Top Section - Label Tag */}
              <div className="mb-4 flex flex-col gap-10 ">
                <span className="inline-block border w-fit border-divider-1 px-1 py-0.5 text-sm uppercase text-muted-foreground font-family-secondary mb-3 rounded-sm">
                  {benefit.label}
                </span>
                <div className="border-t border-divider-1 w-full"></div>
              </div>

              {/* Main Content - Two Columns */}
              <div className="grid grid-cols-2 gap-10 sm:flex-col sm:gap-4">
                {/* Left Column - Title */}
                <div className="shrink-0 sm:w-full">
                  <h3 className="text-2xl sm:text-xl  text-foreground leading-tight">
                    {benefit.title}
                  </h3>
                </div>

                {/* Right Column - Description */}
                <div className="flex-1">
                  <p className="text-sm sm:text-xs text-text-primary leading-tight">
                    {benefit.description}
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

export default ImperativeSection;
