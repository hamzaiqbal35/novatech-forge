"use client"

import { Container } from "@/components/ui/container"
import { PageHeader } from "@/components/ui/page-header"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const posts = [
    {
        title: "Why Custom Software Beats Off-the-Shelf for Scaling Companies",
        excerpt: "When you outgrow SaaS spreadsheets, it's time to build your own tools. Here is the ROI calculation you need.",
        date: "Oct 12, 2025",
        category: "Strategy",
    },
    {
        title: "The State of Next.js in Enterprise Architecture",
        excerpt: "How server components and App Router are changing the way we build large-scale applications.",
        date: "Sep 28, 2025",
        category: "Engineering",
    },
    {
        title: "Understanding Technical Debt: A Guide for CEOs",
        excerpt: "Technical debt isn't always bad, but ignored debt is fatal. Learn how to manage it responsibly.",
        date: "Sep 15, 2025",
        category: "Management",
    },
]

export default function BlogPage() {
    return (
        <>
            <PageHeader
                title="Thinking & Insights"
                description="Our thoughts on software architecture, product strategy, and the future of digital business."
            />

            <section className="py-20">
                <Container>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <Card key={post.title} className="flex flex-col">
                                <CardHeader>
                                    <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                                    <CardTitle className="leading-tight hover:text-primary transition-colors cursor-pointer">
                                        {post.title}
                                    </CardTitle>
                                    <CardDescription>{post.date}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground">{post.excerpt}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" className="p-0 h-auto" asChild>
                                        <Link href="#">Read Article</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    )
}
