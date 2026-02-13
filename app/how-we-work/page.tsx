"use client";

import { Section } from "@/app/components/ui/Section";
import { Button } from "@/app/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Check, Clock, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function HowWeWorkPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <Section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Blueprint Pattern */}
                <div className="absolute inset-0 bg-background">
                    <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(#1f2937_1px,transparent_1px)] opacity-50"></div>
                </div>

                <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-foreground"
                    >
                        Precision Engineering
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        We don't guess. We audit, architect, and execute with military precision.
                    </motion.p>
                </div>
            </Section>

            {/* The Process */}
            <Section>
                <div className="space-y-16">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-foreground mb-4">The ByteEdge Method</h2>
                        <p className="text-muted-foreground">
                            Our standard operating procedure for delivering high-impact software and AI solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0"></div>

                        {[
                            { step: "01", icon: Clock, title: "Audit", desc: "We dive deep into your workflows to quantify inefficiencies and identify high-value opportunities." },
                            { step: "02", icon: Shield, title: "Architect", desc: "We design a secure, scalable technical solution that integrates seamlessly with your existing stack." },
                            { step: "03", icon: Zap, title: "Automate", desc: "Our engineers build and deploy the AI agents, automations, or applications." },
                            { step: "04", icon: Check, title: "Accelerate", desc: "We train your team, monitor performance, and iterate to maximize ROI." }
                        ].map((item, i) => (
                            <div key={i} className="relative pt-8">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-4 ring-white dark:ring-slate-950 z-10">
                                    {item.step}
                                </div>
                                <div className="h-full p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all text-center group">
                                    <div className="mx-auto h-12 w-12 rounded-2xl bg-muted flex items-center justify-center text-foreground mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Engagement Models */}
            <Section className="py-24 bg-muted/20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">How to Engage Us</h2>
                        <p className="text-muted-foreground">
                            Flexible models designed to fit your stage and needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-card border border-border shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <Clock className="h-32 w-32" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">Project Based</h3>
                            <p className="text-muted-foreground mb-6">Best for defined scopes and clear deliverables.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex gap-3 text-sm text-card-foreground">
                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" /> Fixed timeline & budget
                                </li>
                                <li className="flex gap-3 text-sm text-card-foreground">
                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" /> Specific deliverables (e.g. MVP, App)
                                </li>
                                <li className="flex gap-3 text-sm text-card-foreground">
                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" /> Minimal management required
                                </li>
                            </ul>
                            <Link href="/contact" className="block text-center w-full py-3 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition-colors">
                                Start a Project
                            </Link>
                        </div>

                        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-700 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <Zap className="h-32 w-32 text-white" />
                            </div>
                            <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider bg-blue-600 px-3 py-1 rounded-full">Most Popular</div>
                            <h3 className="text-2xl font-bold mb-2">Retainer / Partner</h3>
                            <p className="text-slate-300 mb-6">Best for ongoing innovation and long-term growth.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex gap-3 text-sm text-slate-200">
                                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" /> Dedicated engineering capacity
                                </li>
                                <li className="flex gap-3 text-sm text-slate-200">
                                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" /> Priority support & urgency
                                </li>
                                <li className="flex gap-3 text-sm text-slate-200">
                                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" /> Strategic roadmap advisory
                                </li>
                            </ul>
                            <Link href="https://cal.com/byteedge/30min" target="_blank" className="block text-center w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">
                                Become a Partner
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
