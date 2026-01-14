"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

interface SwiperPaginationProps {
  swiperRef: React.RefObject<SwiperType | null>;
  isBeginning: boolean;
  isEnd: boolean;
  totalSlides: number;
  activeIndex: number;
  onBulletClick: (index: number) => void;
}

const SwiperPagination = ({
  swiperRef,
  isBeginning,
  isEnd,
  totalSlides,
  activeIndex,
  onBulletClick,
}: SwiperPaginationProps) => {
  return (
    <div className="flex items-center justify-between mt-6">
      {/* Pagination Dots */}
      <div className="flex items-center gap-2 h-10">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onBulletClick(index)}
            className={`resources-pagination-bullet ${
              index === activeIndex ? "resources-pagination-bullet-active" : ""
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-2 ml-auto">
        <Button
          variant="secondary"
          onClick={() => swiperRef.current?.slidePrev()}
          className="aspect-square"
          disabled={isBeginning}
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="secondary"
          onClick={() => swiperRef.current?.slideNext()}
          className="aspect-square text-text-primary"
          disabled={isEnd}
          aria-label="Next slide"
        >
          <ArrowRight className="w-4 h-4 text-text-primary" />
        </Button>
      </div>
    </div>
  );
};

export default SwiperPagination;
