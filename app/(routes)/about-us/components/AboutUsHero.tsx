"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const AboutUsHero = () => {
  const router = useRouter();
  return (
    <section className="relative min-h-screen  overflow-hidden">
      {/* Background Image */}
      <img
        src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68dd5adbcc75b2bc818c91ad_224c69bba7a59433b8717d418d5aa084_about-us-hero.avif"
        alt="About Us Hero"
        className="absolute inset-0 w-full h-full object-cover brightness-[80%]"
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto w-full min-h-screen">
        <div className="flex flex-col h-screen justify-between">
          <h1 className="text-8xl  sm:text-5xl  text-white mb-6 mt-40 leading-tight max-w-4xl">
            A Convergence of Expertise and United by Purpose
          </h1>
          <div className="flex w-full justify-between mb-10 items-center sm:items-start sm:flex-col">
            <p className="text-2xl sm:text-lg text-white/90 mb-8 leading-relaxed max-w-4xl">
              We are a convergence of world-class engineers, architects, and
              strategists with a shared purpose: to guide enterprises through
              the age of AI and shape the future of work.
            </p>
            <Button
              variant="secondary"
              className="rounded-none uppercase font-family-secondary h-fit "
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

export default AboutUsHero;
