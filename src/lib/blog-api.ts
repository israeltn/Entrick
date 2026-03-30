import type { PostListItem, PostDetail, Category, Tag, PaginatedResponse } from '@/types/blog';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000/api';

export async function getPosts(params?: {
    page?: number;
    category?: string;
    tag?: string;
    search?: string;
}): Promise<PaginatedResponse<PostListItem>> {
    const url = new URL(`${API_BASE}/blog/posts/`);
    if (params?.page) url.searchParams.set('page', String(params.page));
    if (params?.category) url.searchParams.set('category', params.category);
    if (params?.tag) url.searchParams.set('tag', params.tag);
    if (params?.search) url.searchParams.set('search', params.search);

    const res = await fetch(url.toString(), { next: { revalidate: 300 } });
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
}

export async function getPost(slug: string): Promise<PostDetail> {
    const res = await fetch(`${API_BASE}/blog/posts/${slug}/`, {
        next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`Post not found: ${slug}`);
    return res.json();
}

export async function getSitemapSlugs(): Promise<{ slug: string; updated_at: string }[]> {
    const res = await fetch(`${API_BASE}/blog/posts/sitemap-slugs/`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
}

export async function getCategories(): Promise<Category[]> {
    const res = await fetch(`${API_BASE}/blog/categories/`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.results ?? data;
}

export async function getTags(): Promise<Tag[]> {
    const res = await fetch(`${API_BASE}/blog/tags/`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.results ?? data;
}
