"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const CTA = () => {
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
    <section className="container mx-auto px-20 relative z-10 bg-navbar-border py-32 mt-40 mb-20">
      <div className="flex justify-between gap-12 items-center">
        {/* Left side - Title */}
        <div>
          <h2 className="text-6xl text-foreground  leading-tight">
            Start Accelerating your
            <br />
            Path to AI Value
          </h2>
        </div>

        {/* Right side - Description and Button */}
        <div className="flex flex-col gap-6 max-w-lg">
          <p className="text-foreground text-lg leading-relaxed">
            Get in touch today and start defining your path towards building the
            Agentic Enterprise.
          </p>
          <Button
            variant="secondary"
            className="bg-primary text-white font-family-secondary hover:bg-primary/90 w-fit uppercase"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
