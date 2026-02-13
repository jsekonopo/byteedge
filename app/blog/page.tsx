import { Section } from "@/app/components/ui/Section";
import { getBlogPosts } from "@/app/lib/blog";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { BlogHero } from "@/app/components/blog/BlogHero";

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <div className="min-h-screen">
            <BlogHero />

            <Section>
                <div className="max-w-4xl mx-auto grid gap-12">
                    {posts.map((post) => (
                        <article key={post.id} className="group relative flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-xs uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {new Date(post.date).toLocaleDateString()}
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-muted-foreground leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="pt-2">
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:gap-2 transition-all">
                                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Section>

            <Section className="py-20 text-center border-t border-border">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h3 className="text-2xl font-bold text-foreground">Subscribe to our newsletter</h3>
                    <p className="text-muted-foreground">
                        Get the latest insights delivered directly to your inbox. No spam, just signal.
                    </p>
                    <form className="flex gap-2 max-w-sm mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 rounded-full border border-border bg-card px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button className="rounded-full">Subscribe</Button>
                    </form>
                </div>
            </Section>
        </div>
    );
}
