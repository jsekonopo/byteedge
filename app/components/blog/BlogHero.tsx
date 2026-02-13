"use client";

import { Section } from "@/app/components/ui/Section";
import { motion } from "framer-motion";

export function BlogHero() {
    return (
        <Section className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
            <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
                >
                    Insights & Engineering
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl text-slate-600 dark:text-slate-300"
                >
                    Thoughts on AI strategy, software architecture, and building for scale.
                </motion.p>
            </div>
        </Section>
    );
}
