"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/app/components/Logo";
import { Button } from "@/app/components/ui/Button";
import { cn } from "@/app/lib/utils";
import { ThemeToggle } from "@/app/components/ThemeToggle";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Insights", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav
                className={cn(
                    "pointer-events-auto transition-all duration-300 rounded-full border px-6 h-16 flex items-center justify-between w-full max-w-5xl",
                    scrolled
                        ? "bg-background/80 backdrop-blur-xl border-border/60 shadow-lg shadow-black/5"
                        : "bg-background/50 backdrop-blur-md border-transparent shadow-sm"
                )}
            >
                <div className="flex-shrink-0 mr-8">
                    <Logo />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center ml-4 gap-4">
                    <Link href="https://cal.com/byteedge/30min" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="rounded-full px-6">Book Call</Button>
                    </Link>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown (Relative to the floating nav) */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl bg-popover border border-border shadow-xl flex flex-col gap-2 md:hidden">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block rounded-xl px-4 py-3 text-base font-medium text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="https://cal.com/byteedge/30min" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="px-2 pb-2">
                            <Button className="w-full rounded-xl">Book Strategy Call</Button>
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    );
}
