"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { Section } from "@/app/components/ui/Section";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { HeroDashboard } from "@/app/components/HeroDashboard";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center space-y-10"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md px-6 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-[pulse_3s_infinite]"></span>
              ByteEdge Consulting
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.05]">
              AI That Actually <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 animate-gradient-x pb-2">
                Computes ROI.
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              We don't just "do AI". We engineer intelligent systems that automate operations, slash costs, and give you an unfair advantage.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
              <Link href="https://cal.com/byteedge/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group w-full sm:w-auto rounded-full px-8 h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.6)] transition-all duration-300">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-14 text-lg bg-white/50 backdrop-blur-sm border-slate-200 dark:border-slate-800 hover:bg-white/80 dark:hover:bg-slate-900/80">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            <HeroDashboard />
          </motion.div>
        </div>
      </section>

      {/* Trust Ticker / Stats */}
      <div className="border-y border-slate-200/50 dark:border-slate-800/50 bg-white/5 dark:bg-slate-950/20 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-200/10 dark:divide-slate-800/50">
            {[
              { label: "Efficiency Gain", value: "40%+" },
              { label: "Deployment Time", value: "<4 Wks" },
              { label: "Client Success", value: "100%" },
              { label: "ROI Focused", value: "Always" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div >



      {/* Footer CTA */}
      < Section className="py-32 text-center" >
        <div className="max-w-4xl mx-auto rounded-[3rem] bg-gradient-to-b from-blue-600 to-indigo-700 p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
          {/* Background noise/texture could go here */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to modernize?</h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Stop wasting time on manual tasks. Start building your advantage today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="https://cal.com/byteedge/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 border-none rounded-full px-8 h-14 text-lg font-bold shadow-lg">
                  Book Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section >
    </div >
  );
}
