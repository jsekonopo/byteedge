import * as React from "react"
// import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/lib/utils"
// Adding cva here, assuming it's available or I'll implement a simpler version if cva is not installed.
// Wait, I didn't install class-variance-authority. I should either install it or write it without.
// Given the environment issues, I'll write a simpler version without CVA to avoid dependency hell if I can't install things.
// Or I can add it to the package.json manually if I really wanted to, but simple prop switching is fine.

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-blue-700 shadow-lg hover:shadow-xl",
            secondary: "bg-secondary text-secondary-foreground hover:bg-slate-200",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
        };

        const sizes = {
            sm: "h-9 rounded-md px-3",
            md: "h-11 rounded-lg px-8",
            lg: "h-14 rounded-xl px-10 text-lg",
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
