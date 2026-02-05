"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";

export function AnimatedBackground({ className }: { className?: string }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className={cn("fixed inset-0 overflow-hidden -z-10 bg-white dark:bg-[#030712]", className)}>

            {/* 1. Main Grid Pattern - Static but covers everything */}
            <div
                className="absolute inset-0 top-[-40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] animate-grid"
            />

            {/* 2. Mouse Follower / Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 lg:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`
                }}
            />

            {/* 3. Ambient Glows - simplified, deep and subtle */}
            <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse delay-700" />

            {/* 4. Horizon / Depth Fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#030712] pointer-events-none" />

            {/* 5. Optional: Subtle moving particles for "data" feel */}
            <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-40">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
                <div className="absolute top-[40%] right-[20%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite_1s]" />
            </div>

        </div>
    );
}
