import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      title: "Artificial Intelligence",
      description:
        "Design and build custom Generative and Agentic AI solutions that automate complex workflows, maximizing productivity and delivering significant operational cost savings.",
      icon: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/691247c1ca280e6c91b8a3c3_Artificial%20Intelligence.png",
    },
    {
      title: "Agentic AI",
      description:
        "We design and deploy AI agents that orchestrate complex business workflows, transforming employee productivity while building the AI fluency required for human-agent collaboration and exponential growth.",
      icon: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/691a361861579d9d67cc1c8c_Cloud%20Applications%20(1).png",
    },
    {
      title: "AI-Powered Modernization & Migration",
      description:
        "Leveraging our extensive IP, we transform fragmented data and costly infrastructure into a unified, AI-ready platform, accelerating transformation and unlocking significant savings.",
      icon: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/691247cf6e870640f6f9b388_AI-Powered%20Modernization%20%26%20Migration.png",
    },
    {
      title: "Cloud Applications",
      description:
        "Develop modern, cloud-native applications on Google Cloud that integrate AI/ML services and scale business capabilities, ensuring agility, performance, and future-proof enterprise growth.",
      icon: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/6912147b16771894865d1f33_Cloud%20Applications.png",
    },
    {
      title: "Data & Analytics",
      description:
        "We deliver data strategy and modernization, establishing governance and predictive analytics that turn data into strategic assets, fueling the intelligent enterprise and decision-making.",
      icon: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/691214be01b9b2ec4a6b7d8b_Data%20and%20Analytics.png",
    },
    {
      title: "Customer Engagement Suite",
      description:
        "Create personalized, AI-driven customer experiences using Google Cloud tools. Enhance satisfaction, optimize contact centers, and drive revenue through superior, intelligent interactions.",
      icon: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/691247dc0e6920cebfac6d41_Customer%20Engagement%20Suite.png",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-16">
          <p className="uppercase text-black tracking-widest text-sm mb-4 font-family-secondary">
            WHAT WE DO
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground max-w-3xl ">
              We help companies navigate through the complexities of AI,
              transforming data into intelligent solutions that empower the
              modern workforce across industries.
            </h2>
            <Button
              variant="secondary"
              className="self-start lg:self-end whitespace-nowrap rounded-micro bg-btn-bg !font-family-secondary"
            >
              LEARN ABOUT OUR APPROACH
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white border border-navbar-border  p-6 hover:border-black/40 transition-all duration-300 relative"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block bg-muted text-muted-foreground text-xs uppercase tracking-wider px-2 py-1 rounded">
                  Service
                </span>
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="border-t border-navbar-border mb-4"></div>
              <h3 className="text-foreground text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
