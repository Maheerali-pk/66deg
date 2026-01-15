import { Button } from "@/components/ui/button";

const AIMLSolutionsHero = () => {
  return (
    <section className="relative py-24 sm:py-16 overflow-hidden bg-dark-background h-screen">
      <div className="container mx-auto h-full">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-8 items-center h-full">
          {/* Left Content */}
          <div>
            <h1 className="text-7xl sm:text-4xl font-light text-white mb-6 leading-tight">
              Agentic AI Strategy & Impact Blueprint
            </h1>
            <p className="text-3xl sm:text-xl text-white mb-8 leading-relaxed">
              A Strategic AI Readiness Assessment and Value Creation Roadmap for
              Executive Leaders.
            </p>
            <Button
              variant="secondary"
              className="rounded-none uppercase font-family-secondary"
            >
              Get in touch
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68dd5adbcc75b2bc818c9184_hero-oferrings.avif"
              alt="Agentic AI Strategy"
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMLSolutionsHero;
