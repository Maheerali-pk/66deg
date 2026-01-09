import { Button } from "@/components/ui/button";

const GoogleCloudPartner = () => {
  const specializations = [
    "Cloud Migration",
    "Generative AI",
    "Machine Learning",
    "Infrastructure",
    "DevOps",
    "Data Analytics",
  ];

  // Split specializations into two columns
  const leftColumn = specializations.slice(0, 3);
  const rightColumn = specializations.slice(3);

  return (
    <section className="py-24">
      <div className="container mx-auto">
        {/* Container with Image Background */}
        <div className="relative rounded-sm overflow-hidden  ">
          {/* Background Image with brightness */}
          <img
            src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/6900f61cfea4297d80054e76_d859ae3fb65a7a43744586cf8bf7d209_google-cloud-box.avif"
            alt="Google Cloud Background"
            className="absolute inset-0 w-full h-full object-cover brightness-[70%]"
          />

          {/* All Content Overlay */}
          <div className="inset-0 flex flex-col justify-between py-24 px-12 z-10">
            {/* Hero Content */}
            <div className="text-center space-y-6 max-w-3xl mx-auto z-10">
              <h2 className="text-6xl font-light text-white">
                Google Cloud's Leading Agentic AI Partner
              </h2>
              <p className="text-white/90  text-2xl">
                Our Premier Partner status is the assurance your enterprise
                needs. We provide unmatched access to the forefront of Google AI
                innovation, de-risking your most ambitious projects and
                guaranteeing you build your Agentic Enterprise foundation on the
                world's most advanced cloud.
              </p>
              <div className="flex justify-center pt-4">
                <Button
                  variant="secondary"
                  className="text-sm uppercase tracking-wide"
                >
                  EXPLORE CAPABILITIES
                </Button>
              </div>
            </div>

            {/* Information Cards Section */}
            <div className="grid md:grid-cols-[1fr_3fr] gap-6 mt-16 bg-white/10 backdrop-blur-3xl p-10">
              {/* Left Card - Partner of the Year */}
              <div className="bg-white/95 backdrop-blur-md rounded-micro p-8 shadow-lg flex flex-col gap-10">
                <div className="flex flex-col">
                  <div className="text-6xl  text-foreground mb-2">2025</div>
                  <div className="text-sm text-text-primary/60 uppercase font-family-secondary">
                    Partner of the Year
                  </div>
                  <div className="border-b border-divider-1 mb-4"></div>
                </div>
                <p className="text-text-primary  leading-tight">
                  The 2025 Partner of the Year award is external validation of
                  our leadership in the Google ecosystem.
                </p>
              </div>

              {/* Right Card - Google Cloud Specializations */}
              <div className="bg-white/95 backdrop-blur-md flex flex-col justify-between rounded-micro p-8 shadow-lg">
                <h3 className="text-3xl text-foreground mb-6">
                  Google Cloud Specializations
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Left Column */}
                  <div className="space-y-0">
                    {leftColumn.map((spec, index) => (
                      <div
                        key={index}
                        className="border-b border-divider-1 py-1 first:border-t-0"
                      >
                        <span className="uppercase text-sm text-text-primary font-family-secondary">
                          {spec.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Right Column */}
                  <div className="space-y-0">
                    {rightColumn.map((spec, index) => (
                      <div
                        key={index}
                        className="border-b border-divider-1 py-1 first:border-t-0"
                      >
                        <span className="uppercase text-sm text-text-primary font-family-secondary">
                          {spec.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleCloudPartner;
