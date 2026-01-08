"use client"

import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Check } from "lucide-react"

const features = [
    {
        title: "Engineering Excellence",
        description: "We write clean, testable, and maintainable code. No spaghetti, no technical debt bombs.",
    },
    {
        title: "Business-First Approach",
        description: "We don't just build features; we build solutions that solve actual business problems.",
    },
    {
        title: "Transparent Communication",
        description: "No geek-speak. We explain technical decisions in plain English and keep you in the loop.",
    },
    {
        title: "Scalable Architecture",
        description: "Systems designed to handle growth from day one. We build for the future of your company.",
    },
    {
        title: "Rapid Delivery",
        description: "We ship fast without breaking things. Our CI/CD pipelines ensure smooth and frequent releases.",
    },
    {
        title: "Post-Launch Support",
        description: "We don't disappear after launch. We offer long-term support and maintenance packages.",
    },
]

export function WhyChooseUs() {
    return (
        <section className="py-20 md:py-32 bg-muted/30">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div>
                        <SectionHeader
                            title="Why Partner With NovaTech Forge?"
                            subtitle="The Difference"
                            description="We bridge the gap between technical complexity and business simplicity. Choose a partner that understands both."
                        />
                        <div className="grid gap-6 sm:grid-cols-2">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-4">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm shadow-primary/20">
                                        <Check className="h-3.5 w-3.5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-background border shadow-2xl group">
                        {/* Office Image */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/team-collab-new.png"
                            alt="NovaTech Forge Team"
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                        {/* Floating Info Card */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/80 backdrop-blur-md border shadow-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-sm">Dedicated Teams</p>
                                    <p className="text-xs text-muted-foreground">Senior Engineers Only</p>
                                </div>
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full border-2 border-background bg-slate-200" />
                                    <div className="w-8 h-8 rounded-full border-2 border-background bg-slate-300" />
                                    <div className="w-8 h-8 rounded-full border-2 border-background bg-slate-400 flex items-center justify-center text-[10px] font-bold">+12</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
