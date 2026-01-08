"use client"

import { Container } from "@/components/ui/container"
import { PageHeader } from "@/components/ui/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Code2, Database, Globe, Smartphone, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
    {
        title: "Custom Web Applications",
        description: "We build robust, scalable web applications that power your business logic. From customer portals to complex SaaS platforms.",
        icon: Globe,
        features: [
            "Next.js / React Architecture",
            "Cloud-Native Scalability",
            "Secure Authentication & Authorization",
            "Real-time Data Sync",
        ],
    },
    {
        title: "Internal Tools & Dashboards",
        description: "Empower your team with custom internal tools. We bridge the gap between your data and your operations.",
        icon: Database,
        features: [
            "Admin Panels & CRMs",
            "Data Visualization",
            "Workflow Automation",
            "Legacy System Integration",
        ],
    },
    {
        title: "API & Backend Systems",
        description: "The engine room of your digital product. We design and build high-performance APIs and microservices.",
        icon: Code2,
        features: [
            "REST & GraphQL APIs",
            "Database Design (SQL/NoSQL)",
            "Serverless Architecture",
            "Payment Gateway Integration",
        ],
    },
    {
        title: "Mobile App Development",
        description: "Reach your customers on their devices with high-quality cross-platform mobile applications.",
        icon: Smartphone,
        features: [
            "React Native / Expo",
            "iOS & Android Deployment",
            "Offline Capabilities",
            "Native Device Features",
        ],
    },
]

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Our Services"
                description="We provide comprehensive software development services tailored to your specific business needs. We don't believe in one-size-fits-all solutions."
            />

            <section className="py-20">
                <Container>
                    <div className="grid gap-10 md:grid-cols-2">
                        {services.map((service, index) => (
                            <Card key={index} className="flex flex-col border-muted bg-card transition-shadow hover:shadow-lg">
                                <CardHeader>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <service.icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col">
                                    <p className="text-muted-foreground mb-6 flex-1">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-sm">
                                                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full sm:w-auto" asChild>
                                        <Link href="/contact">
                                            Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-muted/30 border-t">
                <Container>
                    <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-3xl font-bold tracking-tight">Need something else?</h2>
                            <p className="text-primary-foreground/80 text-lg">
                                We also handle DevOps, cloud infrastructure, and technical consulting. Let's talk about your unique challenge.
                            </p>
                        </div>
                        <Button variant="secondary" size="lg" className="shrink-0" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    )
}
