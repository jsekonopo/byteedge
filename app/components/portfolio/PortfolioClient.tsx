"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Bot, Database, Layout, ShieldCheck, Zap, Monitor, Globe, Brain } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { Section } from "@/app/components/ui/Section";
import { SpotlightCard } from "@/app/components/ui/SpotlightCard";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { Project, Category } from "@/app/lib/portfolio";

// Icon mapping
const ICON_MAP: Record<string, React.ElementType> = {
    "BarChart3": BarChart3,
    "Bot": Bot,
    "Database": Database,
    "Layout": Layout,
    "ShieldCheck": ShieldCheck,
    "Zap": Zap,
    "Monitor": Monitor,
    "Globe": Globe,
    "Brain": Brain
};

const FILTER_TABS: ("All" | Category)[] = ["All", "AI & Data", "Web & SaaS", "VR & Deep Tech"];

interface PortfolioClientProps {
    initialProjects: Project[];
}

export default function PortfolioClient({ initialProjects }: PortfolioClientProps) {
    const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");

    const filteredProjects = activeFilter === "All"
        ? initialProjects
        : initialProjects.filter(p => p.filterCategory === activeFilter);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Section className="pt-32 pb-8 md:pt-40 md:pb-16" decorative>
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground"
                    >
                        Our Work <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            Speaks in Code.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        We don't just advise—we architect and build mission-critical systems. Here are a few ways we've created unfair advantages for our clients.
                    </motion.p>
                </div>
            </Section>

            {/* Filter Tabs */}
            <Section className="py-4" container={false}>
                <div className="max-w-7xl mx-auto px-4 flex justify-center flex-wrap gap-2">
                    {FILTER_TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveFilter(tab)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                activeFilter === tab
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </Section>

            {/* Project Grid */}
            <Section className="py-12" container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => {
                            const IconComponent = ICON_MAP[project.icon] || Globe;

                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <SpotlightCard
                                        className="h-full flex flex-col p-8 group hover:border-blue-500/30 transition-colors duration-300"
                                        spotlightColor={
                                            project.color === "blue" ? "rgba(37, 99, 235, 0.2)" :
                                                project.color === "purple" ? "rgba(168, 85, 247, 0.2)" :
                                                    project.color === "orange" ? "rgba(249, 115, 22, 0.2)" :
                                                        "rgba(16, 185, 129, 0.2)"
                                        }
                                    >
                                        {/* Project Image (or Default) */}
                                        <div className="mb-6 -mx-8 -mt-8 overflow-hidden rounded-t-2xl border-b border-border">
                                            <img
                                                src={project.image || "/default-project.png"}
                                                alt={project.title}
                                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={cn(
                                                "p-3 rounded-xl border flex items-center justify-center",
                                                project.color === "blue" ? "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400" :
                                                    project.color === "purple" ? "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400" :
                                                        project.color === "orange" ? "bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400" :
                                                            "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                                            )}>
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <div className="px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground uppercase tracking-wider">
                                                {project.category}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 space-y-4">
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Metrics Highlight */}
                                            <div className="py-4 border-y border-border space-y-2">
                                                {project.metrics.map((metric, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                                                        <BarChart3 className={cn(
                                                            "w-4 h-4",
                                                            project.color === "blue" ? "text-blue-500" :
                                                                project.color === "purple" ? "text-purple-500" :
                                                                    project.color === "orange" ? "text-orange-500" :
                                                                        "text-emerald-500"
                                                        )} />
                                                        {metric}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Footer / Tags */}
                                        <div className="mt-6 pt-4 flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 text-[10px] font-mono text-muted-foreground border border-border rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </Section>

            {/* Bottom CTA */}
            <Section className="py-20 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">Have a similar challenge?</h2>
                    <p className="text-muted-foreground">
                        Our engineering team is ready to deploy. Let's discuss your architecture.
                    </p>
                    <Link href="https://cal.com/byteedge/30min" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white">
                            Book Engineering Consultation
                        </Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
}
