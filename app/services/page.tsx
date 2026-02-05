"use client";

import { Section } from "@/app/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/app/components/ui/Card";
import { Bot, Code2, Cpu, LineChart } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            <Section className="bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Our Services</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300">
                        Tailored, outcome-driven solutions built for real-world use.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid gap-8">
                    {[
                        {
                            icon: Bot,
                            title: "AI Automations",
                            description: "We design and implement AI-powered workflows that eliminate manual work and streamline operations.",
                            details: [
                                "Lead qualification & follow-up automation",
                                "Document processing (invoices, contracts, resumes)",
                                "AI agents for operations and support",
                                "CRM, email, and internal system automation"
                            ],
                            outcome: "Lower costs, faster execution, fewer errors."
                        },
                        {
                            icon: Code2,
                            title: "Web Application Development & AI Integrations",
                            description: "We build custom web applications and enhance existing platforms with AI capabilities.",
                            details: [
                                "Custom internal tools & dashboards",
                                "SaaS MVPs and client-facing platforms",
                                "AI chat, search, and analytics features",
                                "Secure API and third-party integrations"
                            ],
                            outcome: "Purpose-built software that scales with your business."
                        },
                        {
                            icon: Cpu,
                            title: "AI Integration Consulting",
                            description: "We help you adopt AI strategically — without wasted spend or technical debt.",
                            details: [
                                "AI readiness & opportunity assessments",
                                "Build vs. buy decisions",
                                "Tool, model, and vendor selection",
                                "Security, compliance, and risk mitigation",
                                "AI roadmaps and architecture design"
                            ],
                            outcome: "Clear direction and confident execution."
                        },
                        {
                            icon: LineChart,
                            title: "Technology Consulting / CTO-as-a-Service",
                            description: "Senior-level technology leadership without the full-time cost.",
                            details: [
                                "Startups without a CTO",
                                "Growing companies hitting scaling issues",
                                "Teams modernizing legacy systems"
                            ],
                            outcome: "Better decisions, lower risk, faster growth."
                        }
                    ].map((service, index) => (
                        <Card key={index} className="flex flex-col md:flex-row gap-6 p-6 md:p-8 hover:bg-slate-50 dark:hover:bg-slate-900/20 transition-colors">
                            <div className="flex-shrink-0">
                                <div className="h-16 w-16 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <service.icon className="h-8 w-8" />
                                </div>
                            </div>
                            <div className="flex-grow space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                                    <p className="text-lg text-slate-600 dark:text-slate-300">{service.description}</p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    {service.details.map((detail, i) => (
                                        <div key={i} className="flex items-start text-slate-600 dark:text-slate-400">
                                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                            {detail}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
                                    <p className="font-semibold text-slate-900 dark:text-white">
                                        <span className="text-blue-600 dark:text-blue-400">Outcome:</span> {service.outcome}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
}
