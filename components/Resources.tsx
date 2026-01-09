import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      type: "success stories",
      date: "December 1, 2025",
      title: "Managed Services Data Quality Alert Automation",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6936efeaea25d18e86d1c0ab_GFS%20Story.jpg",
      link: "learn more",
    },
    {
      type: "insights",
      date: "November 21, 2025",
      title:
        "The Content Velocity Imperative: Achieving 5x Scale Without the Headcount Risk",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6920e419618f53265faf2af2_Content%20Velocity.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 15, 2025",
      title:
        "Agentic Teams: How Human-Agent Collaboration Redefines Workforce Productivity",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-foreground"></div>
              <p className="text-text-primary uppercase  text-sm">Resources</p>
            </div>
            <h2 className="text-6xl  ">Latest from 66degrees</h2>
          </div>
          <Button variant="secondary" className="rounded-none uppercase">
            Explore more resources
          </Button>
        </div>

        <div className="grid grid-flow-col  gap-6 h-full">
          {resources.map((resource, index) => (
            <>
              <div
                key={index}
                className="h-full flex-1 flex flex-col  group bg-card border border-border/50 rounded-sm overflow-hidden  "
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1  justify-between gap-10">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-gray-100 text-muted-foreground text-xs uppercase tracking-wider px-2 py-1 rounded">
                        {resource.type}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {resource.date}
                      </span>
                    </div>
                    <h3 className="text-2xl">{resource.title}</h3>
                  </div>
                  <Button
                    variant="link"
                    size="link"
                    className="text-text-primary border-b-text-text-primary"
                  >
                    {resource.link}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              {index !== resources.length - 1 && (
                <div className="w-px bg-divider-1/70"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
