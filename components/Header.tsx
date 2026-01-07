"use client";

import Link from "next/link";
import NavbarButton from "@/components/NavbarButton";
import NavDropdown, { type DropdownGroup } from "@/components/NavDropdown";
import { useState } from "react";
import classNames from "classnames";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-7">
      <nav
        className={classNames(
          "max-w-container mx-auto backdrop-blur-xl shadow-sm rounded px-6 h-16 flex items-center justify-between transition-all duration-300",
          {
            "bg-white border-white/20": isAnyDropdownOpen,
            "bg-white/10 border-white/10": !isAnyDropdownOpen,
          }
        )}
        style={{ borderRadius: "0.25rem" }}
      >
        <div className="flex items-center">
          <Link
            href="/"
            className={classNames(
              "font-bold text-3xl tracking-tight transition-colors duration-300",
              {
                "text-text-primary": isAnyDropdownOpen,
                "text-white": !isAnyDropdownOpen,
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
                  isDarkMode={!isAnyDropdownOpen}
                  isActive={activeDropdown === item.label}
                />
              ) : (
                <Link href={item.href || "#"} className="h-full">
                  <NavbarButton
                    className={classNames(
                      "flex items-center gap-2 cursor-pointer px-7 py-0 text-lg transition-colors duration-300 h-full",
                      {
                        "text-text-primary/80 hover:text-text-primary":
                          isAnyDropdownOpen,
                        "text-white/80 hover:text-white": !isAnyDropdownOpen,
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

        <NavbarButton
          className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_16px_hsl(217,91%,60%,0.3)] font-semibold tracking-wide uppercase text-xs h-12 px-6 py-3"
          style={{ borderRadius: "0.125rem" }}
        >
          GET IN TOUCH
        </NavbarButton>
      </nav>
    </header>
  );
};

export default Header;
