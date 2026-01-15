"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const ApproachCTA = () => {
  const router = useRouter();
  return (
    <section className="py-24 sm:py-16">
      <div className="container mx-auto">
        <div className="bg-card border border-divider-1 rounded-sm p-12 sm:p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-3xl text-foreground mb-6">
              Start Accelerating your Path to AI Value
            </h2>
            <p className="text-lg sm:text-base text-muted-foreground mb-8">
              Get in touch today and start defining your strategic path towards
              building the Agentic Enterprise.
            </p>
            <Button
              variant="secondary"
              className="rounded-none uppercase font-family-secondary"
              onClick={() => router.push("/contact-us")}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachCTA;
