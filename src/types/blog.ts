export interface Tag {
    id: number;
    name: string;
    slug: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    post_count: number;
}

export interface PostListItem {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    cover_image_url: string | null;
    category: Category | null;
    tags: Tag[];
    author_name: string;
    reading_time: number;
    published_at: string;
    is_featured: boolean;
}

export interface PostDetail extends PostListItem {
    body: string;
    meta_title: string;
    meta_description: string;
    og_image_url: string | null;
    canonical_url: string;
    no_index: boolean;
    schema_markup: Record<string, unknown>;
    updated_at: string;
}

export interface PaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}
