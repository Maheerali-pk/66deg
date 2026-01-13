"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { Button } from "./ui/button";
import { navItems } from "@/data/navigation";
import { ChevronDown } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleAccordion = (label: string) => {
    const newOpenAccordions = new Set(openAccordions);
    if (newOpenAccordions.has(label)) {
      newOpenAccordions.delete(label);
    } else {
      newOpenAccordions.add(label);
    }
    setOpenAccordions(newOpenAccordions);
  };

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-[50] bg-white transition-transform duration-300 ease-in-out sm:block lg:hidden",
        {
          "translate-y-0": isOpen,
          "-translate-y-full": !isOpen,
        }
      )}
    >
      <div className="container mx-auto px-6 pt-24 pb-8 h-full overflow-y-auto">
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="border-b border-gray-200 last:border-b-0"
            >
              {item.hasDropdown && item.dropdownItems ? (
                <div>
                  <button
                    onClick={() => toggleAccordion(item.label)}
                    className="w-full flex items-center justify-between py-4 text-left text-text-primary hover:text-primary transition-colors"
                  >
                    <span className="text-lg font-medium">{item.label}</span>
                    <ChevronDown
                      size={20}
                      className={classNames(
                        "transition-transform duration-200",
                        {
                          "rotate-180": openAccordions.has(item.label),
                        }
                      )}
                    />
                  </button>
                  {openAccordions.has(item.label) && (
                    <div className="pb-4 space-y-4">
                      {item.dropdownItems.map((group, groupIndex) => (
                        <div key={groupIndex} className="space-y-2">
                          {group.category && (
                            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-2">
                              {group.category}
                            </h3>
                          )}
                          <ul className="space-y-1">
                            {group.items.map((subItem, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  href="#"
                                  onClick={onClose}
                                  className="block py-2 text-text-primary/80 hover:text-primary transition-colors"
                                >
                                  {subItem}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href || "#"}
                  onClick={onClose}
                  className="block py-4 text-lg font-medium text-text-primary hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Contact Us Button at the end */}
          <div className="pt-6">
            <Button
              variant="secondary"
              className="w-full bg-primary text-white font-family-secondary hover:bg-primary/90 py-3"
              onClick={onClose}
            >
              CONTACT US
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
