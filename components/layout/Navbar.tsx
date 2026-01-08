"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import Image from "next/image"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

const navItems = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex h-18 md:h-25 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/images/logo.png"
                                alt="NovaTech Forge Logo"
                                width={220}
                                height={220}
                                className="object-contain h-28 md:h-38 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary font-semibold" : "text-muted-foreground"}`}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                        <Button size="sm" asChild>
                            <Link href="/contact">Book a Consultation</Link>
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="flex items-center justify-center p-2 text-muted-foreground md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b bg-background"
                    >
                        <Container className="py-4">
                            <nav className="flex flex-col gap-4">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary font-semibold" : "text-foreground/80"}`}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                })}
                                <Button className="w-full">Book a Consultation</Button>
                            </nav>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
