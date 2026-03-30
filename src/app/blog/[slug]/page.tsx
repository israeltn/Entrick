import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPost, getSitemapSlugs } from '@/lib/blog-api';

export async function generateStaticParams() {
    const slugs = await getSitemapSlugs().catch(() => []);
    return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug).catch(() => null);
    if (!post) return { title: 'Post Not Found | Entrick' };

    return {
        title: post.meta_title || post.title,
        description: post.meta_description || post.excerpt,
        alternates: { canonical: post.canonical_url },
        robots: post.no_index ? { index: false, follow: false } : undefined,
        openGraph: {
            title: post.meta_title || post.title,
            description: post.meta_description || post.excerpt,
            url: post.canonical_url,
            type: 'article',
            publishedTime: post.published_at,
            modifiedTime: post.updated_at,
            authors: [post.author_name],
            images: post.og_image_url
                ? [{ url: post.og_image_url, width: 1200, height: 630, alt: post.title }]
                : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.meta_title || post.title,
            description: post.meta_description || post.excerpt,
            images: post.og_image_url ? [post.og_image_url] : undefined,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPost(slug).catch(() => null);
    if (!post) notFound();

    return (
        <>
            {/* JSON-LD Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(post.schema_markup),
                }}
            />

            <article className="bg-white min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-gray-500 text-sm mb-10" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                        <span className="text-gray-300">/</span>
                        <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-900 truncate max-w-xs">{post.title}</span>
                    </nav>

                    {/* Category */}
                    {post.category && (
                        <Link
                            href={`/blog?category=${post.category.slug}`}
                            className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-4 hover:opacity-80 transition-opacity"
                        >
                            {post.category.name}
                        </Link>
                    )}

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-2 border-primary pl-6">
                        {post.excerpt}
                    </p>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-500 text-sm mb-12 pb-8 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold border border-primary/30">
                                {post.author_name.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-gray-900 font-medium">{post.author_name}</span>
                        </div>
                        <span>
                            {new Date(post.published_at).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}
                        </span>
                        <span>{post.reading_time} min read</span>

                        {post.tags.map((tag) => (
                            <Link
                                key={tag.slug}
                                href={`/blog?tag=${tag.slug}`}
                                className="px-2 py-0.5 rounded border border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-all duration-200 text-xs"
                            >
                                #{tag.name}
                            </Link>
                        ))}
                    </div>

                    {/* Cover Image */}
                    {post.cover_image_url && (
                        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-12 border border-gray-200">
                            <Image
                                src={post.cover_image_url}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1200px) 100vw, 896px"
                            />
                        </div>
                    )}

                    {/* Body — admin-authored HTML */}
                    <div
                        className="
                            prose prose-lg max-w-none
                            prose-headings:text-gray-900 prose-headings:font-bold
                            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
                            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                            prose-p:text-gray-600 prose-p:leading-relaxed
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-gray-900
                            prose-em:text-gray-600
                            prose-code:text-primary prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                            prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200 prose-pre:rounded-xl prose-pre:p-6
                            prose-blockquote:border-l-primary prose-blockquote:text-gray-600 prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:not-italic
                            prose-ul:text-gray-600 prose-ol:text-gray-600
                            prose-li:marker:text-primary
                            prose-img:rounded-xl prose-img:border prose-img:border-gray-200 prose-img:mx-auto
                            prose-hr:border-gray-200
                        "
                        dangerouslySetInnerHTML={{ __html: post.body }}
                    />

                    {/* Back to blog */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors duration-200 text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Blog
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
}
