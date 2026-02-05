"use client";

import { motion } from "framer-motion";

export function HeroDashboard() {
    return (
        <div className="w-full max-w-5xl mx-auto mt-16 perspective-[2000px] overflow-hidden sm:overflow-visible px-4">
            <motion.div
                initial={{ opacity: 0, rotateX: 20, y: 100 }}
                animate={{ opacity: 1, rotateX: 20, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="relative rounded-xl border border-slate-200 bg-white/40 backdrop-blur-xl shadow-2xl dark:border-slate-800 dark:bg-slate-900/40 transform-style-3d rotate-x-12"
            >
                {/* Browser Header */}
                <div className="flex items-center gap-2 border-b border-slate-200/50 bg-white/50 px-4 py-3 dark:border-slate-800/50 dark:bg-slate-950/50">
                    <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-400/80" />
                        <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                        <div className="h-3 w-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="mx-auto h-5 w-1/3 rounded-full bg-slate-200/50 dark:bg-slate-800/50" />
                </div>

                {/* Dashboard Content */}
                <div className="grid grid-cols-4 gap-4 p-4 md:grid-cols-5 md:gap-6 md:p-6 lg:p-8">
                    {/* Sidebar Mockup */}
                    <div className="hidden md:block md:col-span-1 space-y-3">
                        <div className="h-8 w-full rounded-lg bg-blue-100/50 dark:bg-blue-900/20" />
                        <div className="h-4 w-3/4 rounded bg-slate-200/50 dark:bg-slate-800/50" />
                        <div className="h-4 w-2/3 rounded bg-slate-200/50 dark:bg-slate-800/50" />
                        <div className="h-4 w-4/5 rounded bg-slate-200/50 dark:bg-slate-800/50" />
                    </div>

                    {/* Main Content */}
                    <div className="col-span-4 space-y-4 md:col-span-4">
                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="rounded-lg bg-white/60 p-4 shadow-sm dark:bg-slate-800/60">
                                <div className="mb-2 h-2 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
                                <div className="h-6 w-16 rounded bg-blue-100 dark:bg-blue-900/30" />
                            </div>
                            <div className="rounded-lg bg-white/60 p-4 shadow-sm dark:bg-slate-800/60">
                                <div className="mb-2 h-2 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
                                <div className="h-6 w-16 rounded bg-purple-100 dark:bg-purple-900/30" />
                            </div>
                            <div className="rounded-lg bg-white/60 p-4 shadow-sm dark:bg-slate-800/60">
                                <div className="mb-2 h-2 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
                                <div className="h-6 w-16 rounded bg-emerald-100 dark:bg-emerald-900/30" />
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="flex h-40 items-end justify-between gap-2 rounded-lg bg-white/30 p-4 dark:bg-slate-800/30">
                            {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: 1 + (i * 0.1) }}
                                    className="w-full rounded-t bg-gradient-to-t from-cyan-500/50 to-blue-500/50 border-t border-cyan-400/30"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Glass Reflection Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 rounded-xl" />

                {/* Glow behind - Enhanced */}
                <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-30 blur-2xl animate-gradient-x" />
            </motion.div>
        </div>
    );
}
