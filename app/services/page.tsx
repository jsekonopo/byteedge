"use client";

import { Section } from "@/app/components/ui/Section";
import { Button } from "@/app/components/ui/Button";
import Link from "next/link";
import { Bot, Code2, Cpu, LineChart, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <Section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px] dark:opacity-30"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm px-3 py-1 text-sm font-medium text-blue-800 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-300 mb-4"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                        Engineering First
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white"
                    >
                        Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-gradient">Intelligent</span> Systems
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        We move beyond "digital transformation" buzzwords. We engineer the exact software and AI infrastructure that drives your business forward.
                    </motion.p>
                </div>
            </Section>

            {/* Deep Dive 1: AI Automation */}
            <Section className="py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-3xl transform rotate-3 scale-105"></div>
                        <div className="relative bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-xl">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600">
                                        <Bot className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-900 dark:text-white">Invoice Processor Agent</div>
                                        <div className="text-xs text-green-600 dark:text-green-400">Processing... 100% confidence</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 opacity-60">
                                    <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600">
                                        <Bot className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-900 dark:text-white">Lead Qualifier</div>
                                        <div className="text-xs text-slate-500">Waiting for input...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <div className="inline-flex items-center rounded-full px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
                            Intelligent Automation
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                            Stop hiring humans to do robot work.
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            We design and implement AI-powered workflows that eliminate manual drudgery. Our agents handle lead qualification, customer support, and document processing 24/7 with near-zero error rates.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Lead qualification & follow-up automation",
                                "Document processing (Invoices, Resumes)",
                                "Customer Support AI Agents",
                                "Internal Workflow Orchestration"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Deep Dive 2: Custom Software */}
            <Section className="py-24 bg-slate-50 dark:bg-slate-900/20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center rounded-full px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider">
                            Custom Software
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                            Software that scales with your ambition.
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Off-the-shelf tools only get you so far. We build high-performance web applications, internal tools, and SaaS platforms tailored to your exact operational needs.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Bespoke SaaS Development",
                                "Internal Operational Dashboards",
                                "Legacy System Modernization",
                                "High-Scale API Architecture"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/5 dark:bg-purple-500/10 rounded-3xl transform -rotate-3 scale-105"></div>
                        <div className="relative bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-xl flex items-center justify-center min-h-[300px]">
                            <Code2 className="h-24 w-24 text-slate-200 dark:text-slate-800" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-mono font-bold text-purple-600 dark:text-purple-400">&lt;BuiltForScale /&gt;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Tech Stack Grid */}
            <Section className="py-24 text-center">
                <div className="max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Arsenal</h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        We don't chase hype. We choose battle-tested technologies that deliver performance, security, and maintainability.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { title: "Next.js", cat: "Frontend" },
                        { title: "React", cat: "Frontend" },
                        { title: "Tailwind", cat: "Styling" },
                        { title: "Node.js", cat: "Backend" },
                        { title: "Python", cat: "AI/ML" },
                        { title: "PostgreSQL", cat: "Database" },
                        { title: "OpenAI", cat: "LLM" },
                        { title: "AWS", cat: "Cloud" },
                    ].map((tech, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-colors">
                            <div className="font-bold text-lg text-slate-900 dark:text-white">{tech.title}</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">{tech.cat}</div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="py-24">
                <div className="relative rounded-[2.5rem] bg-slate-900 dark:bg-slate-800 overflow-hidden px-8 py-16 md:px-20 md:py-24 text-center">
                    <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Let's build something great.</h2>
                        <p className="text-lg text-slate-300">
                            Whether you need to automate a process or build a new product, we have the engineering firepower to make it happen.
                        </p>
                        <Link href="https://cal.com/byteedge/30min" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-500 rounded-full px-8 h-14 text-lg">
                                Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
