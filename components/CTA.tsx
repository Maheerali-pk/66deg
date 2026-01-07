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
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img
          src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68dd5adbcc75b2bc818c9185_a525b8042b9f67e3828e1be0f2e11b48_graphic.svg"
          alt=""
          className="w-full max-w-4xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl text-foreground mb-6">
          Start Accelerating your Path to AI Value
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Get in touch today and start defining your path towards building the Agentic Enterprise.
        </p>
        <Button variant="cta" size="cta" className="rounded-full mb-16">
          Get in touch
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        {/* Newsletter Subscription */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <h3 className="text-2xl md:text-3xl text-foreground mb-3">
            Subscribe to our newsletter
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Stay informed of our latest news, insights, and events
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="flex-1"
                required
              />
              <Button type="submit" variant="cta" size="cta" className="rounded-full whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            {error && (
              <p className="text-destructive text-sm mt-2 text-left">{error}</p>
            )}
            {submitted && (
              <p className="text-primary text-sm mt-2">
                Thank you! Your submission has been received!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;

