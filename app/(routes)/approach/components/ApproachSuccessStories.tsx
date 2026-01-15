import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeadingWithSquare from "@/components/section-heading-with-square";

const ApproachSuccessStories = () => {
  const stories = [
    {
      title:
        "Managed Services Data Quality Alert Automation for Gordon Food Service",
      link: "learn more",
    },
    {
      title:
        "Data Modernization Results in $3M in Annual Savings for E-commerce Leader",
      link: "learn more",
    },
    {
      title: "Transforming Document Analysis Across the Enterprise with AI",
      link: "learn more",
    },
    {
      title:
        "Gordon Food Service is Transforming Vendor Item Management with Gen AI",
      link: "learn more",
    },
    {
      title:
        "Delivering Insights to 20,000+ Employees for Leading Food Distributor",
      link: "learn more",
    },
  ];

  return (
    <section className="py-24 sm:py-16 bg-background-secondary">
      <div className="container mx-auto">
        <div className="mb-12">
          <SectionHeadingWithSquare text="client success stories" />
          <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-4">
            <h2 className="text-4xl sm:text-3xl text-foreground">
              Client Success Stories
            </h2>
            <Button
              variant="secondary"
              className="rounded-none uppercase font-family-secondary sm:w-fit"
            >
              ALL SUCCESS STORIES
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {stories.map((story, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 bg-card rounded-sm border border-divider-1 hover:border-primary/20 transition-colors group"
            >
              <h3 className="text-xl sm:text-lg text-foreground flex-1 pr-4">
                {story.title}
              </h3>
              <Button
                variant="link"
                size="link"
                className="text-text-primary border-b-text-text-primary whitespace-nowrap"
              >
                {story.link}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSuccessStories;
