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
      type: "success stories",
      date: "October 20, 2025",
      title:
        "Gemini for Google Workspace Boosts Collaboration and Creativity at Jam City",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691ca48d66328dfe20f3614c_jam%20City.jpg",
      link: "learn more",
    },
    {
      type: "success stories",
      date: "September 25, 2025",
      title:
        "Driving Business Growth Through Smarter Visualization And Reporting",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/68dd5adbcc75b2bc818c94ef_3bcc124babba235ed7a07a939ba4f296.Gemini_Generated_Image_de5xo3de5xo3de5x-scaled%20(1).webp",
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
    {
      type: "insights",
      date: "November 14, 2025",
      title:
        "Why AI-Powered Modernization is the Only Way to De-Risk Your Cloud Strategy",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5e89728014e8c06f370b_AI%20Powered%20Developers.jpg",
      link: "read more",
    },
    {
      type: "media",
      date: "October 20, 2025",
      title:
        "Learn How Gordon Food Service Empowers Every Employee with Gemini Enterprise",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/690bdb55fd202e6ece876da4_GoogleAI_Boston102125_112.avif",
      link: "view more",
    },
    {
      type: "media",
      date: "October 1, 2025",
      title: "How to use Gemini in Google Sheets",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/690bdb55fd202e6ece876da4_GoogleAI_Boston102125_112.avif",
      link: "view more",
    },
    {
      type: "media",
      date: "September 18, 2025",
      title: "How to Use Gems in Gemini",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/690bdb55fd202e6ece876da4_GoogleAI_Boston102125_112.avif",
      link: "view more",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
              Resources
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground">
              Latest from 66degrees
            </h2>
          </div>
          <Button
            variant="outline"
            className="rounded-full self-start lg:self-end whitespace-nowrap"
          >
            Explore more resources
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href="#"
              className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">
                    {resource.type}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {resource.date}
                  </span>
                </div>
                <h3 className="text-foreground font-medium mb-4 leading-snug line-clamp-2">
                  {resource.title}
                </h3>
                <span className="text-primary text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  {resource.link}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
