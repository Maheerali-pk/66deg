"use client";

import Link from "next/link";
import NavbarButton from "@/components/NavbarButton";
import { Plus } from "lucide-react";
import { useState, useRef, useEffect, ReactElement } from "react";
import classNames from "classnames";

export interface DropdownGroup {
  category: string | null;
  items: string[];
}

export interface NavDropdownProps {
  label: string;
  dropdownItems: DropdownGroup[];
  isMultiColumn?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  isDarkMode?: boolean;
  isActive?: boolean;
}

const NavDropdown = ({
  label,
  dropdownItems,
  isMultiColumn = false,
  onOpenChange,
  isDarkMode = true,
  isActive = false,
}: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onOpenChange?.(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onOpenChange]);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onOpenChange?.(newState);
  };

  const renderCategoryHeader = (category: string, isMultiColumn: boolean) => {
    if (!category) {
      return null;
    }

    return (
      <h3
        className={classNames(
          "text-sm font-medium text-text-primary/60 uppercase tracking-wider",
          {
            "mb-4": isMultiColumn,
            "mb-2 px-2": !isMultiColumn,
          }
        )}
      >
        {category}
      </h3>
    );
  };

  const renderDropdownItem = (
    item: string,
    itemIndex: number,
    isMultiColumn: boolean
  ) => {
    return (
      <li key={itemIndex}>
        <Link
          href="#"
          className={classNames(
            "block text-text-primary hover:text-primary transition-colors whitespace-nowrap",
            {
              "py-2": isMultiColumn,
              "px-2 py-2": !isMultiColumn,
            }
          )}
        >
          {item}
        </Link>
      </li>
    );
  };

  const renderDropdownGroup = (
    group: DropdownGroup,
    groupIndex: number,
    isMultiColumn: boolean
  ) => {
    return (
      <div key={groupIndex} className="flex-1">
        {renderCategoryHeader(group.category || "", isMultiColumn)}
        <ul
          className={classNames({
            "space-y-0": isMultiColumn,
            "space-y-1": !isMultiColumn,
          })}
        >
          {group.items.map((item, itemIndex) =>
            renderDropdownItem(item, itemIndex, isMultiColumn)
          )}
        </ul>
      </div>
    );
  };

  const renderDivider = () => {
    return (
      <div
        className="w-[0.1px] bg-navbar-border absolute top-0 bottom-0"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      />
    );
  };

  const renderMultiColumnLayout = () => {
    const items: ReactElement[] = [];
    dropdownItems.forEach((group, groupIndex) => {
      items.push(
        <div key={`group-${groupIndex}`} className="">
          {renderDropdownGroup(group, groupIndex, true)}
        </div>
      );
      if (groupIndex < dropdownItems.length - 1) {
        items.push(
          <div
            key={`divider-${groupIndex}`}
            className=" relative "
            style={{ minHeight: "100%" }}
          >
            {renderDivider()}
          </div>
        );
      }
    });
    return (
      <div className="flex flex-row justify-between items-stretch">{items}</div>
    );
  };

  const renderSingleColumnLayout = () => {
    return (
      <div>
        {dropdownItems.map((group, groupIndex) =>
          renderDropdownGroup(group, groupIndex, false)
        )}
      </div>
    );
  };

  const renderDropdownContent = () => {
    if (isMultiColumn) {
      return renderMultiColumnLayout();
    }
    return renderSingleColumnLayout();
  };

  const renderDropdownMenu = () => {
    if (!isOpen) {
      return null;
    }

    return (
      <div
        className={classNames(
          "absolute top-full left-0 bg-white border-t border-navbar-border shadow-lg z-[100]",
          {
            "w-[900px]": isMultiColumn,
            "w-full": !isMultiColumn,
          }
        )}
      >
        <div className="px-6 pt-6 pb-10 flex flex-col">
          {renderDropdownContent()}
        </div>
      </div>
    );
  };

  return (
    <div className="relative h-full" ref={dropdownRef}>
      <NavbarButton
        onClick={handleToggle}
        className={classNames(
          "flex items-center gap-2 cursor-pointer px-7 text-lg transition-colors duration-300 h-full",
          {
            "text-white": isOpen && isDarkMode,
            "text-text-primary": isOpen && !isDarkMode,
            "text-white/80 hover:text-white": !isOpen && isDarkMode,
            "text-text-primary/80 hover:text-text-primary":
              !isOpen && !isDarkMode,
            "border-l border-r border-navbar-border bg-navbar-border/30 text-foreground":
              isActive && isOpen,
          }
        )}
      >
        {label}
        <Plus className="!w-5 !h-5" />
      </NavbarButton>
      {renderDropdownMenu()}
    </div>
  );
};

export default NavDropdown;
