import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GoogleCloudPartner = () => {
  const specializations = [
    "Cloud Migration",
    "Generative AI",
    "Machine Learning",
    "Infrastructure",
    "DevOps",
    "Data Analytics",
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/6900f61cfea4297d80054e76_d859ae3fb65a7a43744586cf8bf7d209_google-cloud-box.avif"
              alt="Google Cloud Partner"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground">
              Google Cloud's Leading Agentic AI Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Premier Partner status is the assurance your enterprise needs.
              We provide unmatched access to the forefront of Google AI
              innovation, de-risking your most ambitious projects and
              guaranteeing you build your Agentic Enterprise foundation on the
              world's most advanced cloud.
            </p>
            <Button variant="outline" className="rounded-full">
              explore capabilities
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border/50 rounded-2xl p-8">
            <div className="text-5xl font-light text-foreground mb-2">2025</div>
            <div className="text-xl text-foreground mb-4">
              Partner of the Year
            </div>
            <p className="text-muted-foreground text-sm">
              The 2025 Partner of the Year award is external validation of our
              leadership in the Google ecosystem.
            </p>
          </div>
          <div className="bg-card border border-border/50 rounded-2xl p-8">
            <h3 className="text-lg text-foreground mb-6">
              Google Cloud Specializations
            </h3>
            <div className="flex flex-wrap gap-2">
              {specializations.map((spec, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleCloudPartner;
