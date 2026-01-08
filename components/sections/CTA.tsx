"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="py-20 md:py-32 border-t">
            <Container>
                <div className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center border border-primary/10 relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Schedule a free 30-minute consultation with our lead architect. We'll discuss your challenges and outline a roadmap for success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="h-14 px-8 text-lg">
                                Book Your Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-background">
                                View Our Portfolio
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground pt-4">
                            No pressure sales. Just honest technical advice.
                        </p>
                    </div>

                    {/* Decorative gradients */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                        <div className="absolute -top-[50%] -left-[20%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
                        <div className="absolute -bottom-[50%] -right-[20%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
                    </div>
                </div>
            </Container>
        </section>
    )
}
