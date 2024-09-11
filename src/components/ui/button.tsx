import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-dark_mode  dark:caret-white dark:text-white dark:border-white",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-dark_mode  dark:caret-white dark:text-white dark:border-white",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:bg-dark_mode  dark:caret-white dark:text-white dark:border-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-dark_mode",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:bg-dark_mode",
        link: "text-primary underline-offset-4 hover:underline dark:bg-dark_mode",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  title?: string,
  icon?:JSX.Element,
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false,  title, icon,children ,...props}, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        
        {title}
        {icon}
        {children}
        </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
