import { getBlogPost, getBlogPosts } from "@/app/lib/blog";
import { Section } from "@/app/components/ui/Section";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

interface BlogPostPageProps {
    params: {
        slug: string;
    }
}

// Generate static params for all posts
export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    // Await params before using properties
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            {/* Header */}
            <Section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Link href="/blog" className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
                    </Link>

                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-xs uppercase tracking-wider">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                            {post.title}
                        </h1>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-6">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span className="font-medium text-slate-900 dark:text-slate-200">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>5 min read</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Content */}
            <Section className="py-16 md:py-24">
                <div
                    className="max-w-3xl mx-auto prose prose-lg prose-slate dark:prose-invert 
                    prose-headings:font-bold prose-headings:tracking-tight 
                    prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-3xl prose-img:shadow-xl
                    "
                    dangerouslySetInnerHTML={{ __html: post.content_html }}
                />
            </Section>
        </div>
    );
}
