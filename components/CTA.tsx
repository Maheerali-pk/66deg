"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const CTA = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    setSubmitted(true);
    setError("");
    // Here you would typically send the email to your backend
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="container rounded-micro  sm:w-[calc(100%-2rem)] mx-auto sm:mx-4 relative z-10 bg-navbar-border sm:py-10 sm:!px-10 py-32 mt-0 mb-20">
      <div className="flex sm:flex-col sm:justify-start justify-between sm:gap-6 gap-12 items-center px-20 sm:px-0">
        {/* Left side - Title */}
        <div className="sm:w-full ">
          <h2 className="text-6xl sm:text-4xl text-foreground sm:w-full  leading-tight">
            Start Accelerating your <br className="sm:hidden block" />
            Path to AI Value
          </h2>
        </div>

        {/* Right side - Description and Button */}
        <div className="flex flex-col gap-6 max-w-lg">
          <p className="text-foreground text-lg sm:text-sm leading-relaxed">
            Get in touch today and start defining your path towards building the
            Agentic Enterprise.
          </p>
          <Button
            variant="secondary"
            className="bg-primary text-white font-family-secondary hover:bg-primary/90 w-fit uppercase"
            onClick={() => router.push("/contact-us")}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
