"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";
import { Section } from "@/app/components/ui/Section";
import { Card, CardContent } from "@/app/components/ui/Card";

const CATEGORIES = ["AI & Data", "Web & SaaS", "VR & Deep Tech"];
const COLORS = ["blue", "purple", "emerald", "orange"];
const ICONS = ["BarChart3", "Bot", "Database", "Layout", "ShieldCheck", "Zap", "Monitor", "Globe", "Brain"];

export default function AdminPortfolioPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        category: "",
        filterCategory: "AI & Data",
        description: "",
        metrics: "",
        tags: "",
        icon: "Bot",
        color: "blue",
        image: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Auto-generate ID from title if ID is empty
        if (name === "title" && !formData.id) {
            setFormData(prev => ({
                ...prev,
                title: value,
                id: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const projectData = {
                ...formData,
                metrics: formData.metrics.split(',').map(s => s.trim()).filter(Boolean),
                tags: formData.tags.split(',').map(s => s.trim()).filter(Boolean)
            };

            const res = await fetch('/api/portfolio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(projectData),
            });

            const data = await res.json();

            if (data.success) {
                setMessage("Project added successfully!");
                setFormData({
                    id: "",
                    title: "",
                    category: "",
                    filterCategory: "AI & Data",
                    description: "",
                    metrics: "",
                    tags: "",
                    icon: "Bot",
                    color: "blue",
                    image: ""
                });
                router.refresh();
            } else {
                setMessage("Error: " + data.error);
            }
        } catch (error) {
            setMessage("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <Section className="py-20">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Portfolio Admin</h1>

                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Add New Project</h2>

                            {message && (
                                <div className={`p-4 mb-6 rounded ${message.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                                    {message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
                                        <input
                                            required
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">ID (Auto-generated)</label>
                                        <input
                                            required
                                            name="id"
                                            value={formData.id}
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700 font-mono text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Display Category</label>
                                        <input
                                            required
                                            name="category"
                                            placeholder="e.g. SaaS Platform"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Filter Category</label>
                                        <select
                                            name="filterCategory"
                                            value={formData.filterCategory}
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700"
                                        >
                                            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
                                    <textarea
                                        required
                                        name="description"
                                        rows={3}
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Metrics (comma separated)</label>
                                        <input
                                            name="metrics"
                                            placeholder="20% Growth, 50 Sales"
                                            value={formData.metrics}
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Tags (comma separated)</label>
                                        <input
                                            name="tags"
                                            placeholder="React, Node.js"
                                            value={formData.tags}
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Icon</label>
                                        <select
                                            name="icon"
                                            value={formData.icon}
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700"
                                        >
                                            {ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Color</label>
                                        <select
                                            name="color"
                                            value={formData.color}
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700"
                                        >
                                            {COLORS.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Image Path</label>
                                        <input
                                            name="image"
                                            placeholder="/image.png"
                                            value={formData.image}
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded dark:bg-slate-800 dark:border-slate-700"
                                        />
                                    </div>
                                </div>

                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
                                    {loading ? "Saving..." : "Add Project"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </Section>
        </div>
    );
}
