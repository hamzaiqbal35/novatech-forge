"use client"

import { Container } from "@/components/ui/container"
import { PageHeader } from "@/components/ui/page-header"
import { Process } from "@/components/sections/Process"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ProcessPage() {
    return (
        <>
            <PageHeader
                title="How We Work"
                description="Transparent, collaborative, and agile. Our development process is designed to deliver value from day one."
            />

            <div className="-mt-10">
                <Process />
            </div>

            <section className="py-20 bg-muted/30 border-t">
                <Container>
                    <div className="grid gap-8 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Communication</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                We use Slack for daily comms, Linear for task tracking, and hold weekly video calls to keep you aligned.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Code Quality</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                Every line of code is peer-reviewed. We implement strict linting, automated testing, and CI/CD from the start.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Ownership</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                We don't just take orders. We act as your technical partner, pushing back on bad ideas and suggesting better ones.
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    )
}
