import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BusinessImpact = () => {
  const stats = [
    {
      value: "$10M",
      description:
        "in annual savings from reduced data center and personnel costs for a Fortune 250 company after complete modernization of their data and application infrastructure.",
    },
    {
      value: "50-70%",
      description:
        "of customer touch points automated for Travel and Hospitality leader by launching Generative AI agents, transforming their complete guest support experience.",
    },
    {
      value: "90%",
      description:
        "improvement in call center evaluation quality and consistency with AI-powered analysis for global Energy and Utilities client.",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-16">
          <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
            WHAT WE DELIVER
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-2xl md:text-3xl text-foreground max-w-2xl">
              Quantifiable business impact for your data and AI investments.
            </h2>
            <Button
              variant="outline"
              className="rounded-full self-start lg:self-end whitespace-nowrap"
            >
              All Success stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div className="text-5xl md:text-6xl font-light text-foreground mb-4">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
              {index === 0 && (
                <div className="absolute right-0 top-0 opacity-20">
                  <img
                    src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68f900ab43c20e1a420ef226_graphic-5.svg"
                    alt="Decorative"
                    className="w-32 h-32"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
