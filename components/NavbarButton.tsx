"use client";

import classNames from "classnames";
import { ReactNode } from "react";

interface NavbarButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  as?: "button" | "a";
  href?: string;
}

const NavbarButton = ({
  children,
  onClick,
  className,
  style,
  as = "button",
  href,
}: NavbarButtonProps) => {
  const baseClassName = classNames(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap  font-normal transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    className
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={baseClassName} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseClassName}
      style={style}
    >
      {children}
    </button>
  );
};

export default NavbarButton;
