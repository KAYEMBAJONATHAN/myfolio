import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "src/lib/utils"

const buttonVariants = cva(
  "uiinline-flex uiitems-center uijustify-center uiwhitespace-nowrap uirounded-md uitext-sm uifont-medium uiring-offset-white uitransition-colors focus-visible:uioutline-none focus-visible:uiring-2 focus-visible:uiring-slate-950 focus-visible:uiring-offset-2 disabled:uipointer-events-none disabled:uiopacity-50 dark:uiring-offset-slate-950 dark:focus-visible:uiring-slate-300",
  {
    variants: {
      variant: {
        default: "uibg-slate-900 uitext-slate-50 hover:uibg-slate-900/90 dark:uibg-slate-50 dark:uitext-slate-900 dark:hover:uibg-slate-50/90",
        destructive:
          "uibg-red-500 uitext-slate-50 hover:uibg-red-500/90 dark:uibg-red-900 dark:uitext-slate-50 dark:hover:uibg-red-900/90",
        outline:
          "uiborder uiborder-slate-200 uibg-white hover:uibg-slate-100 hover:uitext-slate-900 dark:uiborder-slate-800 dark:uibg-slate-950 dark:hover:uibg-slate-800 dark:hover:uitext-slate-50",
        secondary:
          "uibg-slate-100 uitext-slate-900 hover:uibg-slate-100/80 dark:uibg-slate-800 dark:uitext-slate-50 dark:hover:uibg-slate-800/80",
        ghost: "hover:uibg-slate-100 hover:uitext-slate-900 dark:hover:uibg-slate-800 dark:hover:uitext-slate-50",
        link: "uitext-slate-900 uiunderline-offset-4 hover:uiunderline dark:uitext-slate-50",
      },
      size: {
        default: "uih-10 uipx-4 uipy-2",
        sm: "uih-9 uirounded-md uipx-3",
        lg: "uih-11 uirounded-md uipx-8",
        icon: "uih-10 uiw-10",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
