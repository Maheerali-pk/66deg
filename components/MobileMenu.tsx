"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { Button } from "./ui/button";
import { navItems } from "@/data/navigation";
import { Plus, Minus } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const router = useRouter();
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());
  const accordionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [accordionHeights, setAccordionHeights] = useState<{
    [key: string]: number;
  }>({});

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

  // Measure accordion heights when they open/close
  useEffect(() => {
    const newHeights: { [key: string]: number } = {};
    navItems.forEach((item) => {
      if (item.hasDropdown) {
        const ref = accordionRefs.current[item.label];
        if (ref) {
          // Measure the natural height of the content
          newHeights[item.label] = openAccordions.has(item.label)
            ? ref.scrollHeight
            : 0;
        } else {
          newHeights[item.label] = 0;
        }
      }
    });
    setAccordionHeights(newHeights);
  }, [openAccordions]);

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
            <div key={item.label} className=" last:border-b-0">
              {item.hasDropdown && item.dropdownItems ? (
                <div>
                  <button
                    onClick={() => toggleAccordion(item.label)}
                    className="w-full flex items-center justify-between py-4 text-left text-text-primary hover:text-primary transition-colors"
                  >
                    <span className="text-xl ">{item.label}</span>
                    <div className="relative w-5 h-5 shrink-0">
                      <Plus
                        className={classNames(
                          "absolute inset-0 w-5 h-5 text-text-primary transition-all duration-500 ease-in-out",
                          {
                            "opacity-0 rotate-90 scale-0": openAccordions.has(
                              item.label
                            ),
                            "opacity-100 rotate-0 scale-100":
                              !openAccordions.has(item.label),
                          }
                        )}
                      />
                      <Minus
                        className={classNames(
                          "absolute inset-0 w-5 h-5 text-text-primary transition-all duration-500 ease-in-out",
                          {
                            "opacity-100 rotate-0 scale-100":
                              openAccordions.has(item.label),
                            "opacity-0 -rotate-90 scale-0": !openAccordions.has(
                              item.label
                            ),
                          }
                        )}
                      />
                    </div>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-500 ease-out"
                    style={{
                      maxHeight: accordionHeights[item.label] || 0,
                    }}
                  >
                    <div
                      ref={(el) => {
                        accordionRefs.current[item.label] = el;
                      }}
                      className="pb-4 space-y-4"
                    >
                      {item.dropdownItems.map((group, groupIndex) => (
                        <div
                          key={groupIndex}
                          className="space-y-2 border-b border-divider-1  "
                        >
                          {group.category && (
                            <h3 className="text-xs text-text-primary/60 uppercase tracking-wide mb-5">
                              {group.category}
                            </h3>
                          )}
                          <ul className="space-y-1">
                            {group.items.map((subItem, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  href={subItem.href || "#"}
                                  onClick={onClose}
                                  className="block py-2  text-xs text-text-primary/80 hover:text-primary transition-colors"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href || "#"}
                  onClick={onClose}
                  className="block py-4 text-xl  text-text-primary hover:text-primary transition-colors"
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
              onClick={() => {
                onClose();
                router.push("/contact-us");
              }}
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
