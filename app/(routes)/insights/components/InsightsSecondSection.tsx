import { Button } from "@/components/ui/button";

const InsightsSecondSection = () => {
  return (
    <section className="py-24 sm:py-16 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-[1fr_minmax(0,1px)_1fr] gap-12">
          {/* Left Section - Image */}
          <div className="shrink-0  sm:w-full">
            <img
              src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6918f933f9814be60b1bbd10_Screenshot%202025-11-15%20at%205.05.30%E2%80%AFPM.png"
              alt="Everest Group's 2025 PEAK Matrix® for Google Cloud Service Specialists"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-divider-1 h-full w-px"></div>

          {/* Right Section - Text Content */}
          <div className="flex-1 py-8 sm:py-0 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              {/* Category Tag */}
              <div className="flex items-center gap-4">
                <span className="inline-block border font-medium rounded-sm border-divider-1 px-2 py-1 text-xs uppercase text-foreground font-family-secondary w-fit">
                  INSIGHTS
                </span>

                {/* Date */}
                <p className="text-sm text-muted-foreground">
                  November 3, 2025
                </p>
              </div>

              {/* Title */}
              <h2 className="text-6xl sm:text-4xl text-foreground leading-tight">
                Everest Group's 2025 PEAK Matrix® for Google Cloud Service
                Specialists
              </h2>
            </div>

            {/* Button */}

            <Button
              variant="secondary"
              className="sm:hidden uppercase lg:flex bg-primary text-white font-family-secondary hover:bg-primary/90 w-fit"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSecondSection;
