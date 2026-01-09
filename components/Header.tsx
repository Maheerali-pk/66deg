"use client";

import Link from "next/link";
import NavbarButton from "@/components/NavbarButton";
import NavDropdown, { type DropdownGroup } from "@/components/NavDropdown";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { Button } from "./ui/button";

interface NavItem {
  label: string;
  hasDropdown: boolean;
  href?: string;
  dropdownItems?: DropdownGroup[];
  isMultiColumn?: boolean;
}

const Header = () => {
  const [isAnyDropdownOpen, setIsAnyDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);
  const navItems: NavItem[] = [
    {
      label: "Solutions",
      hasDropdown: true,
      isMultiColumn: true,
      dropdownItems: [
        {
          category: "Expertise",
          items: ["Modernize for AI", "Build with AI", "Manage & Scale AI"],
        },
        {
          category: "Industry",
          items: [
            "Retail & CPG",
            "Healthcare & Life Sciences",
            "Financial Services",
            "Supply Chain & Distribution",
            "Manufacturing",
            "Travel & Hospitality",
            "Media & Entertainment",
          ],
        },
        {
          category: "Service",
          items: [
            "AI / ML",
            "Customer Engagement Suite",
            "AI-Powered Modernization & Migration",
            "Data & Analytics",
            "Cloud Applications",
            "Security & Compliance",
            "AI-Powered Workplace",
            "Managed Services",
          ],
        },
      ],
    },
    { label: "Approach", hasDropdown: false, href: "/approach" },
    { label: "Success Stories", hasDropdown: false, href: "/success-stories" },
    {
      label: "Company",
      hasDropdown: true,
      dropdownItems: [
        { category: null, items: ["About Us", "Careers", "Google Cloud"] },
      ],
    },
    {
      label: "Resources",
      hasDropdown: true,
      dropdownItems: [
        { category: null, items: ["Insights", "Events", "Media"] },
      ],
    },
  ];

  const handleDropdownOpenChange = (label: string, isOpen: boolean) => {
    setIsAnyDropdownOpen(isOpen);
    setActiveDropdown(isOpen ? label : null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Hero section is min-h-screen

      // Check if we've scrolled past the hero section
      setIsPastHero(currentScrollY > heroHeight * 0.8);

      // Show header when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 right-0 z-50 px-4 pt-7 transition-transform duration-300 ease-in-out",
        {
          "-translate-y-full": !isVisible,
          "translate-y-0": isVisible,
        }
      )}
    >
      <nav
        className={classNames(
          " max-w-container mx-auto border border-navbar-border/50 backdrop-blur-2xl shadow-sm rounded px-6 h-16 flex items-center justify-between transition-all duration-300",
          {
            "bg-white ": isAnyDropdownOpen || (isVisible && isPastHero),
            "bg-white/10 ": !isAnyDropdownOpen && !(isVisible && isPastHero),
          }
        )}
        style={{
          borderRadius: "0.25rem",
          boxShadow: "0px 0px 4px rgba(3, 10, 28, 0.05)",
        }}
      >
        <div className="flex items-center">
          <Link
            href="/"
            className={classNames(
              "font-bold text-3xl tracking-tight transition-colors duration-300 font-family-secondary",
              {
                "text-text-primary":
                  isAnyDropdownOpen || (isVisible && isPastHero),
                "text-white": !isAnyDropdownOpen && !(isVisible && isPastHero),
              }
            )}
          >
            66degrees
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-1 relative h-full">
          {navItems.map((item) => (
            <div key={item.label} className="h-full">
              {item.hasDropdown && item.dropdownItems ? (
                <NavDropdown
                  label={item.label}
                  dropdownItems={item.dropdownItems}
                  isMultiColumn={item.isMultiColumn}
                  onOpenChange={(isOpen) =>
                    handleDropdownOpenChange(item.label, isOpen)
                  }
                  isDarkMode={!(isAnyDropdownOpen || (isVisible && isPastHero))}
                  isActive={activeDropdown === item.label}
                />
              ) : (
                <Link href={item.href || "#"} className="h-full">
                  <NavbarButton
                    className={classNames(
                      "flex items-center gap-2 cursor-pointer px-7 py-0 text-lg transition-colors duration-300 h-full",
                      {
                        "text-text-primary/80 hover:text-text-primary":
                          isAnyDropdownOpen || (isVisible && isPastHero),
                        "text-white/80 hover:text-white":
                          !isAnyDropdownOpen && !(isVisible && isPastHero),
                      }
                    )}
                  >
                    {item.label}
                  </NavbarButton>
                </Link>
              )}
            </div>
          ))}
        </div>

        <Button
          variant="secondary"
          className="bg-primary text-white font-family-secondary hover:bg-primary/90"
        >
          CONTACT US
        </Button>
      </nav>
    </header>
  );
};

export default Header;
