"use client"

import { Container } from "@/components/ui/container"
import { PageHeader } from "@/components/ui/page-header"
import { CaseStudies } from "@/components/sections/CaseStudies"

export default function WorkPage() {
    return (
        <>
            <PageHeader
                title="Our Work"
                description="Explore how we've helped businesses transform their operations and scale their impact through custom technology."
            />
            <div className="-mt-20">
                <CaseStudies />
            </div>
            {/* Additional projects could be listed here in a grid later */}
            <section className="pb-20">
                <Container>
                    <div className="rounded-2xl border bg-muted/50 p-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">More projects available upon request</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Due to NDA restrictions, we cannot publicly display all of our enterprise work. Contact us to see a private portfolio relevant to your industry.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}
