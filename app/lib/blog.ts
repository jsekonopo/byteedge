import fs from 'fs/promises';
import path from 'path';

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    date: string;
    author: string;
    category: string;
    excerpt: string;
    content_html: string;
    image?: string;
}

const dataDirectory = path.join(process.cwd(), 'data');

export async function getBlogPosts(): Promise<BlogPost[]> {
    const filePath = path.join(dataDirectory, 'blog.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const posts: BlogPost[] = JSON.parse(fileContents);

    // Sort by date desc
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    const posts = await getBlogPosts();
    return posts.find(post => post.slug === slug);
}
