
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-teal-500 text-white shadow-lg hover:bg-teal-600 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border-2 border-teal-500 bg-transparent text-teal-600 hover:bg-teal-50 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] dark:text-teal-400 dark:hover:bg-teal-950/50",
        secondary:
          "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
        ghost: 
          "bg-transparent text-teal-600 hover:bg-teal-50 hover:scale-[1.02] active:scale-[0.98] dark:text-teal-400 dark:hover:bg-teal-950/50",
        link: 
          "text-teal-600 underline-offset-4 hover:underline dark:text-teal-400",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-12 px-8 py-4 text-base",
        xl: "h-14 px-10 py-5 text-lg",
        icon: "h-11 w-11",
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
