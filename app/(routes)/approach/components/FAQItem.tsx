"use client";

import { Plus, Minus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        const contentHeight = contentRef.current.scrollHeight;
        setHeight(contentHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen]);

  return (
    <div className="bg-card border-b border-divider-1 rounded-sm overflow-hidden ">
      <button
        onClick={onToggle}
        className="w-full p-6 px-0 text-left flex items-start justify-between  cursor-pointer transition-colors"
      >
        <h3 className="text-2xl sm:text-base text-foreground pr-4">
          {question}
        </h3>
        <div className="relative w-5 h-5 shrink-0">
          <Plus
            className={`absolute inset-0 w-5 h-5 text-text-primary transition-all duration-500 ease-in-out ${
              isOpen
                ? "opacity-0 rotate-90 scale-0"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <Minus
            className={`absolute inset-0 w-5 h-5 text-text-primary transition-all duration-500 ease-in-out ${
              isOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-0"
            }`}
          />
        </div>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{
          height: `${height}px`,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="px-0 pb-6">
          <p className="text-base sm:text-sm text-text-primary leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
