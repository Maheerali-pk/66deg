"use client";

import SectionHeadingWithSquare from "@/components/section-heading-with-square";
import { leaders } from "@/data/leaders";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const TransformationLeaders = () => {
  return (
    <section className="py-24 sm:py-16">
      <div className="container mx-auto">
        <div className="mb-12">
          <SectionHeadingWithSquare text="our leadership team" />
          <h2 className="text-4xl sm:text-3xl text-foreground">
            Our Transformation Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 w-full  lg:grid-cols-5 gap-4">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group relative   rounded-micro overflow-hidden flex flex-col bg-brown-light"
            >
              {/* Content - Top */}
              <div className="p-4 pb-4 ">
                <h3 className="text-foreground ">{leader.name}</h3>
                <p className="text-muted-foreground ">{leader.role}</p>
              </div>

              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden flex-1 cursor-pointer">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
              </div>

              {/* Hover Icons - Bottom Left */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={leader.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-divider-1 hover:bg-background-secondary transition-colors"
                  aria-label={`${leader.name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </Link>
                <Link
                  href={`mailto:${leader.email}`}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-divider-1 hover:bg-background-secondary transition-colors"
                  aria-label={`Email ${leader.name}`}
                >
                  <Mail className="w-5 h-5 text-foreground" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationLeaders;
