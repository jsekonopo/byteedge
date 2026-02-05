"use client";

import { Section } from "@/app/components/ui/Section";
import { Button } from "@/app/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/app/components/ui/Card";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate submission
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <div className="min-h-screen">
            <Section className="bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Contact Us</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300">
                        Ready to transform your business? Get in touch with us today.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                Whether you have a specific project in mind or just want to explore what's possible with AI, we're here to help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Email</h3>
                                    <p className="mt-1 text-slate-600 dark:text-slate-400">info@byteedge.ca</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <Calendar className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Book a Call</h3>
                                    <p className="mt-1 text-slate-600 dark:text-slate-400 mb-2">Schedule a free strategy session directly.</p>
                                    <Link href="https://calendly.com/pandahubottawa/byteedge-strategy-call" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="sm">View Calendar</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Location</h3>
                                    <p className="mt-1 text-slate-600 dark:text-slate-400">Ottawa, Canada<br />Serving clients globally</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-6 md:p-8">
                        <CardHeader className="px-0 pt-0">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send us a Message</h3>
                        </CardHeader>
                        <CardContent className="px-0 pb-0">
                            {formStatus === 'success' ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h4>
                                    <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. We'll get back to you shortly.</p>
                                    <Button variant="outline" onClick={() => setFormStatus('idle')}>Send Another Message</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="first-name" className="text-sm font-medium text-slate-900 dark:text-white">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                id="first-name"
                                                required
                                                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="last-name" className="text-sm font-medium text-slate-900 dark:text-white">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                id="last-name"
                                                required
                                                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-white">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium text-slate-900 dark:text-white">
                                            Company (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-white">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                        />
                                    </div>

                                    <Button type="submit" className="w-full" disabled={formStatus === 'submitting'}>
                                        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </Section>
        </div>
    );
}
