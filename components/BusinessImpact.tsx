import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BusinessImpact = () => {
  const stats = [
    {
      value: "$10M",
      description:
        "in annual savings from reduced data center and personnel costs for a Fortune 250 company after complete modernization of their data and application infrastructure.",
      bgColor: "bg-[var(--impact-dark)]",
      textColor: "text-white",
      pattern: true,
    },
    {
      value: "50-70%",
      description:
        "of customer touch points automated for Travel and Hospitality leader by launching Generative AI agents, transforming their complete guest support experience.",
      bgColor: "bg-white",
      textColor: "text-foreground",
      pattern: false,
    },
    {
      value: "90%",
      description:
        "improvement in call center evaluation quality and consistency with AI-powered analysis for global Energy and Utilities client.",
      bgColor: "bg-[var(--impact-light)]",
      textColor: "text-foreground",
      pattern: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-black"></div>
            <p className="text-black uppercase tracking-widest text-sm font-family-secondary">
              WHAT WE DELIVER
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground max-w-2xl">
              Quantifiable business impact for your data and AI investments.
            </h2>
            <Button
              variant="secondary"
              className="self-start lg:self-end whitespace-nowrap rounded-micro bg-[var(--btn-bg)] !font-family-secondary"
            >
              ALL SUCCESS STORIES
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative border border-navbar-border ${stat.bgColor} ${stat.textColor} p-10 rounded-micro min-h-[320px] flex flex-col`}
            >
              {stat.pattern && (
                <div
                  className="absolute right-0 top-0 bottom-0 w-32 opacity-20"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      rgba(255, 255, 255, 0),
                      rgba(255, 255, 255, 0) 8px,
                      rgba(255, 255, 255, 0.1) 8px,
                      rgba(255, 255, 255, 0.1) 16px
                    )`,
                  }}
                ></div>
              )}
              <div
                className={`text-[6.75rem] font-medium mb-60 leading-none ${stat.textColor}`}
              >
                {stat.value}
              </div>
              <p
                className={`text-lg leading-relaxed ${stat.textColor} opacity-90`}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
