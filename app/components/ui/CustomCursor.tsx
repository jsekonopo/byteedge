"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);

    // Smooth mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16); // Center the 32px cursor
            mouseY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        document.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    // Only show on non-touch devices ideally, but simple check is okay for now
    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/50 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
            style={{
                x: springX,
                y: springY,
                opacity: isVisible ? 1 : 0
            }}
        >
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-[2px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-500 rounded-full" />
        </motion.div>
    );
}
