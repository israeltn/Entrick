import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts, getCategories } from '@/lib/blog-api';
import type { PostListItem, Category } from '@/types/blog';

export const metadata: Metadata = {
    title: 'Blog | Entrick Information Systems',
    description:
        'Explore insights on Secure AI, LLM fine-tuning, Cybersecurity, and Sovereign AI from the Entrick team.',
    alternates: { canonical: 'https://entricksystems.com/blog' },
    openGraph: {
        title: 'Blog | Entrick Information Systems',
        description: 'Insights on Secure AI, Cybersecurity, and Modern Software.',
        url: 'https://entricksystems.com/blog',
        type: 'website',
    },
};

function PostCard({ post }: { post: PostListItem }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="glass-card-light group flex flex-col overflow-hidden hover:border-primary/40 transition-all duration-300"
        >
            {post.cover_image_url ? (
                <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                        src={post.cover_image_url}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            ) : (
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center border-b border-gray-200">
                    <span className="text-primary/30 text-5xl font-black">E</span>
                </div>
            )}

            <div className="flex flex-col flex-1 p-6">
                {post.category && (
                    <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
                        {post.category.name}
                    </span>
                )}
                <h2 className="text-gray-900 font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                </p>

                {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag.slug}
                                className="px-2 py-0.5 rounded border border-gray-200 text-gray-500 text-xs"
                            >
                                #{tag.name}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold border border-primary/30">
                            {post.author_name.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-gray-500 text-[10px]">{post.author_name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 text-[10px]">
                        <span>{post.reading_time} min read</span>
                        <span>
                            {new Date(post.published_at).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function CategoryFilter({
    categories,
    count,
    activeCategory,
}: {
    categories: Category[];
    count: number;
    activeCategory?: string;
}) {
    return (
        <section className="bg-white/90 backdrop-blur-xl border-b border-gray-200 sticky top-20 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
                    <Link
                        href="/blog"
                        className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 ${!activeCategory
                            ? 'text-primary bg-primary/10 border border-primary/30'
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-transparent'
                            }`}
                    >
                        All Posts ({count})
                    </Link>
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/blog?category=${cat.slug}`}
                            className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeCategory === cat.slug
                                ? 'text-primary bg-primary/10 border border-primary/30'
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-transparent'
                                }`}
                        >
                            {cat.name} ({cat.post_count})
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string; tag?: string; search?: string; page?: string }>;
}) {
    const params = await searchParams;

    const [postsData, categories] = await Promise.all([
        getPosts({
            page: params.page ? Number(params.page) : 1,
            category: params.category,
            tag: params.tag,
            search: params.search,
        }).catch(() => ({ count: 0, next: null, previous: null, results: [] })),
        getCategories(),
    ]);

    const { results: posts, count } = postsData;

    return (
        <>
            {/* Hero */}
            <section className="pt-36 pb-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,32,32,0.04)_0%,transparent_60%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">
                        Insights &amp; Research
                    </p>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                        The Entrick{' '}
                        <span style={{ color: 'var(--color-primary, #F22020)' }}>Blog</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Deep dives into Secure AI, LLM fine-tuning, Cybersecurity, and
                        Sovereign systems from the Entrick team.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            {categories.length > 0 && (
                <CategoryFilter
                    categories={categories}
                    count={count}
                    activeCategory={params.category}
                />
            )}

            {/* Post Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {posts.length === 0 ? (
                        <div className="text-center py-32">
                            <p className="text-gray-500 text-lg">No posts published yet. Check back soon.</p>
                            <Link
                                href="/blog"
                                className="mt-6 inline-block text-primary hover:underline text-sm"
                            >
                                Clear filters
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {(postsData.next || postsData.previous) && (
                        <div className="flex justify-center gap-4 mt-16">
                            {postsData.previous && (
                                <Link
                                    href={`/blog?page=${Number(params.page ?? 1) - 1}${params.category ? `&category=${params.category}` : ''}`}
                                    className="px-6 py-3 border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-primary/50 rounded-lg transition-all duration-200 text-sm"
                                >
                                    ← Previous
                                </Link>
                            )}
                            {postsData.next && (
                                <Link
                                    href={`/blog?page=${Number(params.page ?? 1) + 1}${params.category ? `&category=${params.category}` : ''}`}
                                    className="px-6 py-3 border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-primary/50 rounded-lg transition-all duration-200 text-sm"
                                >
                                    Next →
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
