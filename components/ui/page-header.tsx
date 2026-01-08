import * as React from "react"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    description?: string
    centered?: boolean
}

export function PageHeader({
    title,
    description,
    centered = false,
    className,
    ...props
}: PageHeaderProps) {
    return (
        <div
            className={cn(
                "bg-muted/30 py-12 md:py-20 lg:py-24 border-b",
                className
            )}
            {...props}
        >
            <Container className={cn(centered && "text-center")}>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                    {title}
                </h1>
                {description && (
                    <p className="max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                        {description}
                    </p>
                )}
            </Container>
        </div>
    )
}
