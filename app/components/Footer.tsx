import { Logo } from "@/app/components/Logo";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <Logo />
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                            We help ambitious companies design, build, and scale AI systems that create real competitive advantages.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="https://linkedin.com" target="_blank" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://twitter.com" target="_blank" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="https://github.com" target="_blank" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">AI & Data Strategy</Link></li>
                            <li><Link href="/services" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">Custom Software Development</Link></li>
                            <li><Link href="/services" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">Cloud Infrastructure</Link></li>
                            <li><Link href="/services" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">Digital Transformation</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">Our Work</Link></li>
                            <li><Link href="/how-we-work" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">How We Work</Link></li>
                            <li><Link href="/contact" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Resources/Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="/blog" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">Insights (Blog)</Link></li>
                            <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()} ByteEdge Consulting. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Designed & Built in Ottawa, Canada 🇨🇦
                    </p>
                </div>
            </div>
        </footer>
    );
}
