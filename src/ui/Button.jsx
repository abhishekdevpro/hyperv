import * as React from "react"
// import { cn } from "@/lib/utils" // optional utility to merge classes

const Button = React.forwardRef(({ className = "", asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button" // Use a real DOM element if wrapping is needed

  return (
    <Comp
      ref={ref}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }
