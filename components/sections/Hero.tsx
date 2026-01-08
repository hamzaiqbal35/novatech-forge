"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export function Hero() {
    return (
        <section className="relative overflow-visible bg-background/50 py-20 pt-28 md:pt-32 lg:py-40">
            <Container className="relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur px-3 py-1 text-sm font-medium transition-colors hover:bg-muted mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 shadow-[0_0_10px_theme(colors.primary.DEFAULT)]" />
                                Accepting New Projects for Q1
                                <ChevronRight className="ml-1 h-3 w-3 text-muted-foreground" />
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-foreground"
                        >
                            We Build <span className="text-primary">Software</span> That
                            <br className="hidden lg:block" /> Drives Business Growth.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
                        >
                            Stop wrestling with off-the-shelf tools. NovaTech Forge engineers custom digital solutions that streamline operations and scale with your ambition.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" asChild>
                                <Link href="/contact">
                                    Book a Free Consultation
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base backdrop-blur-sm bg-background/50" asChild>
                                <Link href="/work">
                                    View Our Work
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>Enterprise Grade</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>Scalable Architecture</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>Rapid Deployment</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Abstract Software Representation - Clean, Minimal */}
                        <div className="relative rounded-2xl border bg-card/50 p-2 shadow-2xl backdrop-blur-sm ring-1 ring-border/50 overflow-hidden group">
                            <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/images/hero-new.png"
                                    alt="Enterprise Dashboard Interface"
                                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        {/* Decorative Background Elements */}
                        <div className="absolute -top-24 -right-24 -z-10 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[100px] opacity-30 animate-pulse" />
                        <div className="absolute -bottom-24 -left-24 -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[100px] opacity-30" />
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
