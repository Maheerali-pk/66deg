"use client";

import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import SectionHeadingWithSquare from "./section-heading-with-square";
import SwiperPagination from "./SwiperPagination";
import ResourceCard from "./ResourceCard";

const Resources = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const resources = [
    {
      type: "success stories",
      date: "December 1, 2025",
      title: "Managed Services Data Quality Alert Automation",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6936efeaea25d18e86d1c0ab_GFS%20Story.jpg",
      link: "learn more",
    },
    {
      type: "insights",
      date: "November 21, 2025",
      title:
        "The Content Velocity Imperative: Achieving 5x Scale Without the Headcount Risk",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6920e419618f53265faf2af2_Content%20Velocity.jpg",
      link: "read more",
    },
    {
      type: "insights",
      date: "November 15, 2025",
      title:
        "Agentic Teams: How Human-Agent Collaboration Redefines Workforce Productivity",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/691a5a28d5a12dae017f863e_Agentic%20Teams.jpg",
      link: "read more",
    },
  ];

  return (
    <section className="py-24 ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <SectionHeadingWithSquare text="resources"></SectionHeadingWithSquare>
            <h2 className="text-6xl sm:text-4xl  ">Latest from 66degrees</h2>
          </div>
          <Button
            variant="secondary"
            className="rounded-none uppercase sm:w-fit"
          >
            Explore more resources
          </Button>
        </div>

        {/* Desktop Grid Layout */}
        <div className="grid grid-flow-col gap-6 h-full sm:hidden">
          {resources.map((resource, index) => (
            <>
              <ResourceCard key={index} {...resource} />
              {index !== resources.length - 1 && (
                <div className="w-px bg-divider-1/70"></div>
              )}
            </>
          ))}
        </div>

        {/* Mobile Swiper Layout */}
        <div className="hidden sm:block">
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
                setActiveIndex(swiper.activeIndex);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
                setActiveIndex(swiper.activeIndex);
              }}
              spaceBetween={24}
              slidesPerView={1}
              className="resources-swiper h-full"
            >
              {resources.map((resource, index) => (
                <SwiperSlide key={index}>
                  <ResourceCard {...resource} />
                </SwiperSlide>
              ))}
            </Swiper>
            <SwiperPagination
              swiperRef={swiperRef}
              isBeginning={isBeginning}
              isEnd={isEnd}
              totalSlides={resources.length}
              activeIndex={activeIndex}
              onBulletClick={(index) => {
                swiperRef.current?.slideTo(index);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
