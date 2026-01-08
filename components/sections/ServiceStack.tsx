"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Code2, Brain, Server } from "lucide-react"

const stacks = [
    {
        id: "01",
        title: "Web Development",
        description: "Creating visually stunning and functionally robust websites driving online success.",
        tech: "PHP Laravel • MERN Stack • Next.js",
        icon: Code2,
        image: "/images/service-web-dev.png",
        gradient: "from-blue-600/90 to-cyan-500/90",
        border: "group-hover:border-blue-500/50",
        text_gradient: "from-blue-400 to-cyan-300"
    },
    {
        id: "02",
        title: "AI & ML Projects",
        description: "Leveraging cutting-edge artificial intelligence to automate and optimize business logic.",
        tech: "Python • TensorFlow • OpenAI",
        icon: Brain,
        image: "/images/service-ai-ml.png",
        gradient: "from-purple-600/90 to-pink-500/90",
        border: "group-hover:border-purple-500/50",
        text_gradient: "from-purple-400 to-pink-300"
    },

    {
        id: "03",
        title: "Enterprise Systems",
        description: "Scalable backend architectures for high-traffic and data-intensive applications.",
        tech: "AWS • Docker • Kubernetes",
        icon: Server,
        image: "/images/service-enterprise.png",
        gradient: "from-orange-600/90 to-red-500/90",
        border: "group-hover:border-orange-500/50",
        text_gradient: "from-orange-400 to-red-300"
    },
]

export function ServiceStack() {
    const [activeId, setActiveId] = useState<string | null>("01")

    return (
        <section className="w-full bg-background py-10 md:py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[500px]">
                    {stacks.map((stack) => {
                        const isActive = activeId === stack.id
                        return (
                            <motion.div
                                key={stack.id}
                                layout
                                onClick={() => setActiveId(stack.id)}
                                className={`relative group cursor-pointer overflow-hidden rounded-3xl border bg-card transition-all duration-500 ease-in-out ${isActive ? "lg:flex-[3]" : "lg:flex-[1] hover:lg:flex-[1.2]"
                                    } ${isActive ? "flex-[3]" : "flex-[1]"}`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <div
                                        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${isActive ? "scale-110 opacity-30" : "scale-100 opacity-0 group-hover:opacity-10"}`}
                                        style={{ backgroundImage: `url(${stack.image})` }}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${stack.gradient} opacity-0 transition-opacity duration-500 ${isActive ? "opacity-20" : "group-hover:opacity-10"}`} />
                                </div>

                                {/* Content Container */}
                                <div className="relative h-full flex flex-col justify-between p-6 md:p-8">

                                    {/* Top Section */}
                                    <div className="flex justify-between items-start">
                                        <span className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b ${stack.text_gradient} opacity-80`}>
                                            {stack.id}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isActive ? 45 : 0 }}
                                            className="rounded-full bg-background/20 p-2 backdrop-blur-sm"
                                        >
                                            <ArrowUpRight className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                                        </motion.div>
                                    </div>

                                    {/* Bottom Section */}
                                    <div className="space-y-4">
                                        <div className={`flex items-center gap-3 transition-transform duration-300 ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                                            <div className="p-2 rounded-lg bg-background/30 backdrop-blur-md w-fit">
                                                <stack.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className={`text-2xl font-bold leading-tight ${isActive ? '' : 'line-clamp-2'}`}>
                                                {stack.title}
                                            </h3>
                                        </div>

                                        {/* Expanded Content */}
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                opacity: isActive ? 1 : 0,
                                                height: isActive ? "auto" : 0,
                                                marginTop: isActive ? 16 : 0
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-muted-foreground mb-4 text-sm md:text-base">
                                                {stack.description}
                                            </p>
                                            <div className="inline-block rounded-full border bg-background/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur-md">
                                                {stack.tech}
                                            </div>

                                            <div className="mt-6">
                                                <button className="text-sm font-bold uppercase tracking-wider underline decoration-2 underline-offset-4 hover:text-primary transition-colors">
                                                    View Services
                                                </button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
