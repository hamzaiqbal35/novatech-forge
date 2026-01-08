import Link from "next/link"
import { Container } from "@/components/ui/container"

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <Container className="py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-1">
                        <Link href="/" className="text-xl font-bold tracking-tight">
                            NovaTech Forge
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Building enterprise-grade digital solutions for forward-thinking companies.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Services</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/services#web-apps" className="hover:text-foreground">Custom Web Apps</Link></li>
                            <li><Link href="/services#internal-tools" className="hover:text-foreground">Internal Tools</Link></li>
                            <li><Link href="/services#mvp" className="hover:text-foreground">MVP Development</Link></li>
                            <li><Link href="/services#api" className="hover:text-foreground">API Systems</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Company</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                            <li><Link href="/work" className="hover:text-foreground">Case Studies</Link></li>
                            <li><Link href="/process" className="hover:text-foreground">Our Process</Link></li>
                            <li><Link href="/blog" className="hover:text-foreground">Insights</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Contact</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>contact@novatechforge.com</li>
                            <li><Link href="/contact" className="hover:text-foreground">Book a Call</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} NovaTech Forge. All rights reserved.
                </div>
            </Container>
        </footer>
    )
}
