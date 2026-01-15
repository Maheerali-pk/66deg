"use client";

import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import FAQItem from "@/app/(routes)/approach/components/FAQItem";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionBaseProps {
  faqs: FAQ[];
  title: ReactNode;
  description: string;
  buttonText?: string;
}

const FAQSectionBase = ({
  faqs,
  title,
  description,
  buttonText = "get in touch",
}: FAQSectionBaseProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-16 ">
      <div className="container mx-auto   ">
        <div className="border-t border-divider-1 pt-16 grid grid-cols-2 sm:grid-cols-1 sm:gap-4 ">
          <div className=" flex flex-col gap-8 sm:gap-4 w-2/3 sm:w-full">
            <h2 className="text-6xl sm:text-3xl text-foreground ">{title}</h2>
            <p className="text-2xl sm:text-base text-text-primary">
              {description}
            </p>
            <Button
              variant="secondary"
              className="rounded-none uppercase font-family-secondary w-fit"
            >
              {buttonText}
            </Button>
          </div>

          <div className="max-w-4xl ">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSectionBase;
