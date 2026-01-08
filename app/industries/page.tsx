"use client"

import { Container } from "@/components/ui/container"
import { PageHeader } from "@/components/ui/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Stethoscope, Landmark, ShoppingCart, Truck, Zap } from "lucide-react"

const industries = [
    {
        title: "FinTech & Banking",
        description: "Secure, compliant financial systems for the modern economy. We handle high-frequency transactional data with ease.",
        icon: Landmark,
    },
    {
        title: "Healthcare",
        description: "HIPAA-compliant platforms that improve patient outcomes and streamline provider workflows.",
        icon: Stethoscope,
    },
    {
        title: "Logistics & Supply Chain",
        description: "Real-time tracking and inventory management systems that optimize routes and reduce waste.",
        icon: Truck,
    },
    {
        title: "E-Commerce & Retail",
        description: "Custom shopping experiences and backend inventory systems that scale during peak seasons.",
        icon: ShoppingCart,
    },
    {
        title: "Real Estate",
        description: "Property management platforms and listing portals that connect buyers, sellers, and agents.",
        icon: Building2,
    },
    {
        title: "Energy & Utilities",
        description: "Data-driven dashboards for monitoring consumption, production, and infrastructure health.",
        icon: Zap,
    },
]

export default function IndustriesPage() {
    return (
        <>
            <PageHeader
                title="Industries We Serve"
                description="We bring deep domain expertise to specific sectors, ensuring our solutions meet unique regulatory and operational challenges."
            />

            <section className="py-20">
                <Container>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {industries.map((industry) => (
                            <Card key={industry.title} className="hover:bg-muted/30 transition-colors">
                                <CardHeader>
                                    <industry.icon className="h-8 w-8 text-primary mb-4" />
                                    <CardTitle>{industry.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{industry.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    )
}
