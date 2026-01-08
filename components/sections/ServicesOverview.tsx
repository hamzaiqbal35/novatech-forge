"use client"

import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Database, Layout, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
    {
        title: "Custom Web Applications",
        description: "Tailor-made software that fits your unique business processes perfectly. Scalable, secure, and built for performance.",
        icon: Layout,
    },
    {
        title: "Internal Management Systems",
        description: "Streamline operations with custom dashboards, ERPs, and CRMs designed to reduce admin overhead.",
        icon: Database,
    },
    {
        title: "MVP Development",
        description: "Rapidly prototype and launch your product idea to market. We focus on core value delivery and speed.",
        icon: Rocket,
    },
    {
        title: "API & Backend Systems",
        description: "Robust server-side architecture to power your mobile apps and web platforms with high availability.",
        icon: Code2,
    },
]

export function ServicesOverview() {
    return (
        <section id="services" className="py-20 md:py-32">
            <Container>
                <SectionHeader
                    title="Capabilities"
                    subtitle="Our Expertise"
                    description="We solve complex business problems with elegant technical solutions. From idea to execution, we cover the full software lifecycle."
                />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full border-none shadow-none bg-muted/30 transition-colors hover:bg-muted/50">
                                <CardHeader>
                                    <service.icon className="h-10 w-10 text-primary mb-4" />
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6">
                                        {service.description}
                                    </p>
                                    <Button variant="link" className="p-0 h-auto font-semibold">
                                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
