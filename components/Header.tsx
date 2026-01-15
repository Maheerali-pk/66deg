"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import NavbarButton from "@/components/NavbarButton";
import NavDropdown from "@/components/NavDropdown";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { Button } from "./ui/button";
import { navItems } from "@/data/navigation";
import MobileMenu from "./MobileMenu";
// Custom thin menu icon component using divs for crisp rendering
const ThinMenuIcon = ({ className }: { className?: string }) => (
  <div className={classNames("flex flex-col gap-1.5 w-full", className)}>
    <div className="h-px w-full bg-current" />
    <div className="h-px w-full bg-current" />
    <div className="h-px w-full bg-current" />
  </div>
);

// Custom thin close icon component using divs for crisp rendering
const ThinCloseIcon = ({ className }: { className?: string }) => (
  <div className={classNames("relative w-full aspect-square", className)}>
    <div className="absolute top-1/2 left-0 w-full h-[0.1rem] bg-current -rotate-45 origin-center" />
    <div className="absolute top-1/2 left-0 w-full h-[0.1rem] bg-current rotate-45 origin-center" />
  </div>
);

const Header = () => {
  const router = useRouter();
  const [isAnyDropdownOpen, setIsAnyDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
      <header
        className={classNames(
          "fixed   container top-0 left-0 right-0 z-60 px-4 pt-7 transition-transform duration-300 ease-in-out",
          {
            "-translate-y-full": !isVisible,
            "translate-y-0": isVisible,
          }
        )}
      >
        <nav
          className={classNames(
            " mx-auto backdrop-blur-2xl shadow-sm rounded px-6 sm:px-1 h-16 flex items-center justify-between transition-colors duration-300",
            {
              "bg-white border-navbar-border/50 border":
                isMobileMenuOpen ||
                isAnyDropdownOpen ||
                (isVisible && isPastHero),
              "bg-white/10 border border-navbar-border/50":
                !isMobileMenuOpen &&
                !isAnyDropdownOpen &&
                !(isVisible && isPastHero),
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
                    isMobileMenuOpen ||
                    isAnyDropdownOpen ||
                    (isVisible && isPastHero),
                  "text-white":
                    !isMobileMenuOpen &&
                    !isAnyDropdownOpen &&
                    !(isVisible && isPastHero),
                }
              )}
            >
              <img src="images/logo.png" className="h-8"></img>
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
                    isDarkMode={
                      !(isAnyDropdownOpen || (isVisible && isPastHero))
                    }
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

          {/* Mobile Menu Button - shown on screens less than 768px */}
          <Button
            variant="secondary"
            className={classNames(
              "sm:flex hidden font-family-secondary p-0 h-13 w-13 items-center justify-center relative [&_svg]:size-14! transition-all duration-300",
              {
                "bg-white text-text-primary hover:bg-gray-100":
                  isMobileMenuOpen,
                "bg-primary text-white hover:bg-primary/90": !isMobileMenuOpen,
              }
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-[70%] flex items-center justify-center">
              <ThinMenuIcon
                className={classNames(
                  "absolute transition-all duration-300 ease-in-out",
                  {
                    "opacity-0 rotate-90 scale-0": isMobileMenuOpen,
                    "opacity-100 rotate-0 scale-100": !isMobileMenuOpen,
                  }
                )}
              />
              <ThinCloseIcon
                className={classNames(
                  "absolute transition-all duration-300 ease-in-out",
                  {
                    "opacity-100 rotate-0 scale-100": isMobileMenuOpen,
                    "opacity-0 -rotate-90 scale-0": !isMobileMenuOpen,
                  }
                )}
              />
            </div>
          </Button>

          {/* Contact Us Button - hidden on mobile, shown on desktop */}
          <Button
            variant="secondary"
            className="sm:hidden lg:flex bg-primary text-white font-family-secondary hover:bg-primary/90"
            onClick={() => router.push("/contact-us")}
          >
            CONTACT US
          </Button>
        </nav>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
