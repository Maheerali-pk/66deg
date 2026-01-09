"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const footerLinks: {
    heading: string;
    items: { text: string; link: string }[];
  }[] = [
    {
      heading: "expertise",
      items: [
        { text: "AI Transformation", link: "#" },
        { text: "Modernize for AI", link: "#" },
        { text: "Build with AI", link: "#" },
        { text: "Manage and Scale AI", link: "#" },
      ],
    },
    {
      heading: "Industries",
      items: [
        { text: "Retail & CPG", link: "#" },
        { text: "Healthcare & Life Sciences", link: "#" },
        { text: "Financial Services", link: "#" },
        { text: "Supply Chain & Distribution", link: "#" },
        { text: "Manufacturing", link: "#" },
        { text: "Travel & Hospitality", link: "#" },
        { text: "Media & Entertainment", link: "#" },
      ],
    },
    {
      heading: "services",
      items: [
        { text: "Artificial Intelligence", link: "#" },
        { text: "Agentic AI", link: "#" },
        { text: "Customer Engagement Suite", link: "#" },
        { text: "AI-Powered Modernization & Migration", link: "#" },
        { text: "Cloud Applications", link: "#" },
        { text: "Data & Analytics", link: "#" },
        { text: "Cloud Security & Compliance", link: "#" },
        { text: "AI-Powered Workplace", link: "#" },
        { text: "Managed Services", link: "#" },
      ],
    },
    {
      heading: "company",
      items: [
        { text: "About Us", link: "#" },
        { text: "Approach", link: "#" },
        { text: "Careers", link: "#" },
        { text: "Contact Us", link: "#" },
        { text: "Google Cloud", link: "#" },
      ],
    },
    {
      heading: "resources",
      items: [
        { text: "Success Stories", link: "#" },
        { text: "Insights", link: "#" },
        { text: "Events", link: "#" },
        { text: "Media", link: "#" },
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  const socialLinks = [
    { name: "LINKEDIN", link: "#" },
    { name: "X/TWITTER", link: "#" },
    { name: "EMAIL", link: "#" },
    { name: "YOUTUBE", link: "#" },
  ];

  const legalLinks: { label: string; link: string }[] = [
    { label: "Privacy Policy", link: "#" },
    { label: "Terms of Use", link: "#" },
    { label: "Accessibility", link: "#" },
    { label: "GDPR Privacy Notice", link: "#" },
    { label: "Support Portal", link: "#" },
  ];

  return (
    <footer className="bg-dark-background border-t border-white/10 py-16 text-white">
      <div className="container mx-auto  w-full">
        <div className="h-px w-full bg-divider-2/25 my-10"></div>
        <div className="grid grid-cols-[1fr_min-content_2fr] w-full gap-10">
          {/* Newsletter Section - Left */}
          <div className=" flex flex-col gap-6 justify-between">
            <img
              src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68dd5adbcc75b2bc818c9109_86b633a7db00d9d1b3aa1844dbd22289_logomark.svg"
              loading="lazy"
              width="Auto"
              alt=""
              className="w-14 h-auto"
            />
            <div className="flex flex-col gap-4 w-[90%]">
              <h3 className="text-gray-light text-2xl ">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-light/60 text-lg">
                Stay informed of our latest news, insights, and events
              </p>
              <form onSubmit={handleSubmit} className="flex gap-3">
                <div className="flex border-divider-2/25 border py-2 px-2 pl-4 text-sm w-full">
                  <input
                    className="border-none outline-none flex-1 text-gray-light"
                    placeholder="Your email address"
                  ></input>

                  <Button
                    variant="secondary"
                    className="bg-primary text-white font-family-secondary uppercase "
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="h-full w-px bg-divider-2/25"></div>
          {/* Navigation Links - Right */}
          <div className="flex justify-between gap-8 w-full ">
            {footerLinks.map((section, index) => (
              <div key={index} className="flex flex-col gap-10">
                <h4 className="text-gray-light/60 text-sm uppercase tracking-wider font-family-secondary">
                  {section.heading}
                </h4>
                <ul className="flex flex-col gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <Link
                        href={item.link}
                        className="text-gray-light whitespace-wrap"
                      >
                        {item.text}
                      </Link>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-divider-2/25 my-10"></div>

        {/* Bottom Section */}
        <div className="">
          <div className="flex flex-col  items-center justify-between gap-10">
            {/* Social Media Buttons - Left */}
            <div className="flex items-center gap-4 w-full">
              {socialLinks.map((social, index) => (
                <Button
                  variant="secondary"
                  className="w-full flex justify-between  "
                >
                  {social.name}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ))}
            </div>

            {/* Copyright and Legal Links - Right */}
            <div className="flex w-full justify-between items-center gap-4 md:gap-6">
              <p className="text-white text-sm">
                Copyright 2025 | Powered by 66degrees
              </p>
              <div className="flex items-center gap-10 flex-wrap justify-center">
                {legalLinks.map((legalLink, index) => (
                  <Link
                    key={index}
                    href={legalLink.link}
                    className="text-gray-light text-sm hover:text-white transition-colors duration-200"
                  >
                    {legalLink.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
