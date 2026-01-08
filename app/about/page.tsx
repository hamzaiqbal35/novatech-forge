"use client"

import { Container } from "@/components/ui/container"
import { PageHeader } from "@/components/ui/page-header"
import Image from "next/image"

const values = [
    {
        title: "Reliability First",
        description: "We build software that works when it counts. Uptime and stability are non-negotiable.",
    },
    {
        title: "Radical Transparency",
        description: "No hidden fees, no surprise delays. We communicate bad news as fast as good news.",
    },
    {
        title: "Systems Thinking",
        description: "We don't solve symptoms; we solve root causes. We build for the long game.",
    },
]

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About NovaTech Forge"
                description="A team of senior engineers and product strategists dedicated to raising the standard of software development."
            />

            <section className="py-20">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">Built by Engineers, Not Salespeople</h2>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p>
                                    NovaTech Forge was founded on a simple premise: Most agencies overpromise and underdeliver. We wanted to change that.
                                </p>
                                <p>
                                    We are a collective of senior developers, system architects, and UX designers who have tired of the "churn and burn" model. We take on fewer clients so we can go deeper with each one.
                                </p>
                                <p>
                                    Our goal isn't just to launch your product—it's to build a technical foundation that serves your business for years to come.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border">
                            {/* Placeholder for Team/Office Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                [Team/Office Photo Placeholder]
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-muted/30">
                <Container>
                    <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Our Core Values</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.title} className="bg-background p-8 rounded-xl border shadow-sm">
                                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    )
}
