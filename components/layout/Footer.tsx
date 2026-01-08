import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Github, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
            <Container className="py-16 md:py-20">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
                    <div className="md:col-span-1 space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tight text-white">
                                NovaTech <span className="text-secondary">Forge</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Building enterprise-grade digital solutions for forward-thinking companies. We turn complex challenges into elegant software.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-slate-900 hover:bg-primary/20 hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-slate-900 hover:bg-primary/20 hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-slate-900 hover:bg-primary/20 hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Services</h3>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="/services" className="hover:text-primary transition-colors">Custom Web Apps</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Internal Tools</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">MVP Development</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">API Systems</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Company</h3>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/work" className="hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link href="/process" className="hover:text-primary transition-colors">Our Process</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Stay Updated</h3>
                        <p className="text-sm text-slate-400">
                            Subscribe to our newsletter for the latest tech insights.
                        </p>
                        <div className="flex flex-col gap-3">
                            <Input
                                type="email"
                                name="email"
                                id="newsletter-email"
                                placeholder="Enter your email"
                                className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-primary"
                            />
                            <Button className="w-full">
                                Subscribe
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <div>
                        &copy; {new Date().getFullYear()} NovaTech Forge. All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
