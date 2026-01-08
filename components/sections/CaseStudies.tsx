"use client"

import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const cases = [
    {
        title: "PipelineCore",
        category: "Sales Intelligence",
        description: "Turn leads into revenue with structured sales execution. A comprehensive platform for modern sales teams.",
        stats: [
            { label: "Revenue Growth", value: "+150%" },
            { label: "Lead Conv.", value: "2x" },
            { label: "Pipeline Vis.", value: "100%" },
        ],
        color: "bg-indigo-500/10 text-indigo-500",
        image: "/images/pipeline-core.png"
    },
    {
        title: "ControlDesk",
        category: "Admin Platform",
        description: "Business control without technical complexity. Centralize your operations in one intuitive dashboard.",
        stats: [
            { label: "Admin Time", value: "-60%" },
            { label: "Efficiency", value: "+85%" },
            { label: "Errors", value: "<0.1%" },
        ],
        color: "bg-blue-500/10 text-blue-500",
        image: "/images/control-desk.png"
    },
    {
        title: "StockRoute",
        category: "Logistics & Inventory",
        description: "Every order tracked. Every item accounted for. Next-gen inventory management for high-volume warehouses.",
        stats: [
            { label: "Accuracy", value: "99.9%" },
            { label: "Processing", value: "2x Faster" },
            { label: "Loss Rate", value: "0%" },
        ],
        color: "bg-orange-500/10 text-orange-500",
        image: "/images/stock-route.png"
    },
]

export function CaseStudies() {
    return (
        <section className="py-20 md:py-32 bg-muted/20 relative overflow-hidden">

            <Container className="relative z-10">
                <SectionHeader
                    title="Recent Work"
                    subtitle="Case Studies"
                    description="Real-world examples of how we engineer success. We don't just build software; we build business value."
                />
                <div className="space-y-20 md:space-y-32">
                    {cases.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                                }`}
                        >
                            <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                                <div className={`mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${project.color}`}>
                                    {project.category}
                                </div>
                                <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                                    {project.title}
                                </h3>
                                <p className="mb-6 text-lg text-muted-foreground">
                                    {project.description}
                                </p>
                                <div className="mb-8 grid grid-cols-3 gap-4 border-y py-6">
                                    {project.stats.map((stat) => (
                                        <div key={stat.label}>
                                            <div className="text-2xl font-bold">{stat.value}</div>
                                            <div className="text-xs text-muted-foreground uppercase tracking-wider">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button size="lg" variant="outline" className="group">
                                    View Full Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                            <div
                                className={`relative rounded-xl border bg-background p-2 shadow-2xl ${index % 2 === 1 ? "lg:col-start-1" : ""
                                    }`}
                            >
                                {/* Dashboard Visual */}
                                <div className="aspect-[16/10] overflow-hidden rounded-lg bg-muted border relative group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10 pointer-events-none" />
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
