"use client";

import { Section } from "@/app/components/ui/Section";
import { Card, CardContent } from "@/app/components/ui/Card";
import { User } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <Section className="bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">About ByteEdge Consulting</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300">
                        Sitting at the intersection of business, technology, and AI execution.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            ByteEdge Consulting was founded to help businesses cut through the noise around AI and technology.
                            We believe AI should solve real problems, technology should simplify not complicate, and strategy must align with execution.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Our role is to help companies build systems that actually deliver value, not just follow trends.
                        </p>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 md:p-12">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Core Beliefs</h3>
                        <ul className="space-y-4">
                            {[
                                "AI should solve real problems",
                                "Technology should simplify, not complicate",
                                "Strategy and execution must live together"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-700 dark:text-slate-200">
                                    <span className="h-2 w-2 rounded-full bg-blue-500 mr-3"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Meet the Founders</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            A team of senior experts dedicated to your success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Leano Sekonopo",
                                role: "Chief Product Officer",
                                bio: "Leads product strategy and technical delivery, ensuring solutions are built right and deliver measurable impact."
                            },
                            {
                                name: "Daniela Madubuike",
                                role: "Chief Growth Officer",
                                bio: "Drives client acquisition and relationship management, connecting businesses with the right technology solutions."
                            },
                            {
                                name: "Victoria Zikiye",
                                role: "Chief Operations Officer",
                                bio: "Oversees operations and process optimization, ensuring seamless execution and organizational excellence."
                            }
                        ].map((founder) => (
                            <Card key={founder.name} className="text-center overflow-hidden group">
                                <div className="bg-slate-100 dark:bg-slate-800 h-64 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                                    <User className="h-24 w-24 text-slate-300 dark:text-slate-600 group-hover:text-blue-300 transition-colors" />
                                </div>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{founder.name}</h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{founder.role}</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {founder.bio}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
