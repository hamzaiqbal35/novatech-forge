"use client"

import { Container } from "@/components/ui/container"
import { PageHeader } from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="Start Your Project"
                description="Ready to build? Fill out the form below or book a consultation call directly. We usually respond within 24 hours."
            />

            <section className="py-20">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Mail className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <p className="font-semibold">Email</p>
                                            <p className="text-muted-foreground">hello@novatechforge.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <p className="font-semibold">Phone</p>
                                            <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <p className="font-semibold">Office</p>
                                            <p className="text-muted-foreground">
                                                123 Innovation Drive,<br />
                                                Tech Valley, CA 94000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-muted/30 rounded-xl border">
                                <h3 className="font-semibold mb-2">Book a Call Directly</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Skip the back-and-forth and schedule a 30-minute discovery session with our team.
                                </p>
                                <Button variant="outline" className="w-full">View Calendar</Button>
                            </div>
                        </div>

                        <Card>
                            <CardContent className="p-8">
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                            <Input id="first-name" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                            <Input id="last-name" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <Input id="email" type="email" placeholder="john@company.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium">Company</label>
                                        <Input id="company" placeholder="Acme Inc." />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Project Details</label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your project, timeline, and goals..."
                                            className="min-h-[150px]"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full" size="lg">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    )
}
