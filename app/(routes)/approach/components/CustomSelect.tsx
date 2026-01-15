"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import classNames from "classnames";

interface CustomSelectProps {
  label: string;
  options: string[];
  placeholder?: string;
  onSelect?: (value: string) => void;
}

const CustomSelect = ({
  label,
  options,
  placeholder = "Select Item",
  onSelect,
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

  return (
    <div className="relative w-full" ref={selectRef}>
      <label className="block text-sm font-medium text-foreground mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          "w-full flex items-center justify-between px-4 py-3 bg-white border border-divider-1 rounded-sm text-left transition-all duration-300",
          {
            "border-primary": isOpen,
            "hover:border-primary/50": !isOpen,
          }
        )}
      >
        <span
          className={classNames("text-base", {
            "text-foreground": selectedValue,
            "text-muted-foreground": !selectedValue,
          })}
        >
          {selectedValue || placeholder}
        </span>
        <ChevronDown
          className={classNames(
            "w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
            {
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
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className={classNames(
                "w-full px-4 py-3 text-left text-base transition-colors duration-200",
                {
                  "bg-primary/5 text-primary font-medium": selectedValue === option,
                  "text-foreground hover:bg-background-secondary": selectedValue !== option,
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
