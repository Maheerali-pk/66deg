"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const ApproachHero = () => {
  const router = useRouter();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[60%]"
        style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68dd5adbcc75b2bc818c9187_offerings-2.avif')`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto w-full">
        <div className="max-w-4xl">
          <h1 className="text-6xl sm:text-4xl font-light text-white mb-6 leading-tight">
            The Art of the Possible, The Science of Delivery
          </h1>
          <p className="text-xl sm:text-lg text-white/90 mb-8 leading-relaxed">
            We combine world-class technical rigor and AI fluency enablement to
            transform your vision into autonomous business reality, ensuring
            that technology, people, and processes are perfectly aligned for
            exponential growth.
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
    </section>
  );
};

export default ApproachHero;
