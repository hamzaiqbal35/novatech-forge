"use client"

import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We dive deep into your business goals, user needs, and technical constraints to build a roadmap that works.",
    },
    {
        number: "02",
        title: "UX/UI Design",
        description: "We craft intuitive, high-fidelity prototypes that visualize the end product before writing a single line of code.",
    },
    {
        number: "03",
        title: "Agile Development",
        description: "Our engineers build your solution in two-week sprints, providing you with regular updates and testable demos.",
    },
    {
        number: "04",
        title: "Testing & QA",
        description: "Rigorous automated and manual testing ensures your software is bug-free, secure, and ready for scale.",
    },
    {
        number: "05",
        title: "Launch & Support",
        description: "We manage the deployment process and provide ongoing maintenance to keep your system performing at its peak.",
    },
]

export function Process() {
    return (
        <section className="py-20 md:py-32">
            <Container>
                <SectionHeader
                    title="How We Work"
                    subtitle="Our Framework"
                    description="A transparent, iterative process designed to minimize risk and maximize value."
                    centered
                />
                <div className="relative mt-20">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-muted -translate-y-1/2 z-0" />

                    <div className="grid gap-12 lg:grid-cols-5 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative flex flex-col items-center text-center bg-background lg:bg-transparent p-4 lg:p-0"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-muted bg-background text-xl font-bold transition-colors group-hover:border-primary group-hover:text-primary">
                                    {step.number}
                                </div>
                                <h3 className="mb-4 text-lg font-bold">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
