"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import classNames from "classnames";

interface CustomSelectProps {
  label: string;
  options: string[];
  placeholder?: string;
  onSelect?: (value: string) => void;
  variant?: "base" | "contactForm";
}

const CustomSelect = ({
  label,
  options,
  placeholder = "Select Item",
  onSelect,
  variant = "base",
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onSelect?.(value);
  };

  const isContactForm = variant === "contactForm";

  return (
    <div className="relative w-full" ref={selectRef}>
      <label
        className={classNames("block mb-2", {
          "text-sm font-medium text-foreground": !isContactForm,
          "text-base text-text-primary/60": isContactForm,
        })}
      >
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          "w-full flex items-center justify-between text-left transition-all duration-300",
          {
            // Base variant styles
            "px-4 py-3 bg-transparent border border-divider-1 rounded-sm":
              !isContactForm,
            "border-primary": !isContactForm && isOpen,
            "hover:border-primary/50": !isContactForm && !isOpen,
            // ContactForm variant styles (matching Input/Textarea)
            "h-10 px-4 py-2 bg-transparent border border-[#ccc] rounded-micro text-text-primary/60 focus:outline-none":
              isContactForm,
            "focus:border-[#3898ec]": isContactForm && isOpen,
          }
        )}
      >
        <span
          className={classNames({
            "text-base": !isContactForm,
            "text-text-primary/60 text-base md:text-sm": isContactForm,
            "text-foreground": !isContactForm && selectedValue,
            "text-muted-foreground": !isContactForm && !selectedValue,
          })}
        >
          {selectedValue || placeholder}
        </span>
        <ChevronDown
          className={classNames(
            "w-5 h-5 transition-transform duration-300 shrink-0",
            {
              "text-muted-foreground": !isContactForm,
              "text-text-primary/60": isContactForm,
              "rotate-180": isOpen,
            }
          )}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={classNames(
          "absolute top-full left-0 right-0 mt-1 bg-white border border-divider-1 rounded-sm shadow-lg z-50 overflow-hidden transition-all duration-300 ease-out",
          {
            "opacity-0 invisible translate-y-[-10px]": !isOpen,
            "opacity-100 visible translate-y-0": isOpen,
          }
        )}
      >
        <div className="max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className={classNames(
                "w-full px-4 py-3 text-left text-base transition-colors duration-200",
                {
                  "bg-primary/5 text-primary font-medium":
                    selectedValue === option,
                  "text-foreground hover:bg-background-secondary":
                    selectedValue !== option,
                }
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
