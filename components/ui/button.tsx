import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-tiny text-sm  cursor-pointer ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_16px_hsl(217,91%,60%,0.3)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground",
        secondary:
          "bg-btn-bg text-black hover:bg-btn-bg/80 font-family-secondary hover:bg-[#d3daea]",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-white uppercase font-family-secondary border-b border-b-white w-fit text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300 ",
        nav: "text-foreground/80 hover:text-foreground bg-transparent font-normal py-0!",
        cta: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_16px_hsl(217,91%,60%,0.3)] font-semibold tracking-wide uppercase text-xs",
      },
      size: {
        link: "py-0 px-0",
        default: "px-4 py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        nav: "h-auto px-4 py-2",
        cta: "h-12 px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button";
    if (asChild) {
      return <>{props.children}</>;
    }
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
