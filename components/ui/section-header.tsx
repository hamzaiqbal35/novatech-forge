import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    subtitle?: string
    description?: string
    centered?: boolean
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
    ({ title, subtitle, description, centered = false, className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex flex-col gap-2 mb-10 md:mb-12",
                centered && "text-center items-center",
                className
            )}
            {...props}
        >
            {subtitle && (
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {title}
            </h2>
            {description && (
                <p className="max-w-3xl text-lg text-muted-foreground mt-2">
                    {description}
                </p>
            )}
        </div>
    )
)
SectionHeader.displayName = "SectionHeader"

export { SectionHeader }
