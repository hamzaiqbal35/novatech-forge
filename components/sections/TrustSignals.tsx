"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Hexagon, Shield, Globe, Zap, BarChart3, Cloud, Layers } from "lucide-react"

const companies = [
    { name: "TechFlow", icon: Hexagon },
    { name: "Nexus Systems", icon: Layers },
    { name: "Global Corp", icon: Globe },
    { name: "Starlight", icon: Zap },
    { name: "Prime Data", icon: BarChart3 },
    { name: "CloudScale", icon: Cloud },
    { name: "SecureGuard", icon: Shield },
]

export function TrustSignals() {
    return (
        <section className="border-y bg-muted/30 py-12 overflow-hidden">
            <Container>
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Trusted by innovative teams worldwide
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-muted/30 via-muted/30 to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-muted/30 via-muted/30 to-transparent z-10"></div>

                    <div className="flex w-full items-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <motion.div
                            className="flex items-center gap-16 pr-16"
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {[...companies, ...companies].map((company, index) => (
                                <div
                                    key={`${company.name}-${index}`}
                                    className="flex items-center gap-3 text-xl md:text-2xl font-bold text-muted-foreground/80 whitespace-nowrap"
                                >
                                    <company.icon className="h-8 w-8 stroke-[2.5]" />
                                    <span>{company.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
