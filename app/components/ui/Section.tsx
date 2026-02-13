import { cn } from "@/app/lib/utils"
import React from "react"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
}

export function Section({ className, container = true, children, decorative = false, ...props }: SectionProps & { decorative?: boolean }) {
    return (
        <section
            className={cn("py-16 md:py-24 relative overflow-hidden", className)}
            {...props}
        >
            {/* Tech Corners - small blueprint-style markers */}
            {decorative && (
                <>
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-lg" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-lg" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-lg" />

                    {/* Tiny crosshairs */}
                    <div className="absolute top-4 left-4 w-1.5 h-1.5 bg-primary/30 rounded-full" />
                    <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-primary/30 rounded-full" />
                </>
            )}

            {container ? (
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    )
}
