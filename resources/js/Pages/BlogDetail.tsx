import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import CtaBand from '@/Components/public/CtaBand';
import Reveal from '@/Components/public/Reveal';
import PublicLayout from '@/Layouts/PublicLayout';
import type { BlogPost } from '@/types/public';

type BlogDetailProps = {
    post: BlogPost;
    recent: BlogPost[];
};

function formatDate(iso: string | null) {
    if (!iso) return '';
    try {
        return new Date(iso).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    } catch {
        return '';
    }
}

export default function BlogDetail({ post, recent }: BlogDetailProps) {
    return (
        <PublicLayout>
            <Head title={`${post.title} — Felymas Journal`} />

            {/* Article header */}
            <article className="bg-surface-0 pb-16 pt-40 md:pb-24 md:pt-48">
                <div className="wrap mx-auto max-w-4xl">
                    <Reveal>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-500 transition hover:text-orange-500"
                        >
                            <ArrowLeft size={14} />
                            Journal
                        </Link>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.28em] text-orange-500">
                            {formatDate(post.publishedAt)}
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 md:text-5xl lg:text-6xl">
                            {post.title}
                        </h1>
                    </Reveal>
                </div>

                <Reveal as="figure" className="wrap mt-16 aspect-[16/9] overflow-hidden bg-ink-800">
                    <img
                        src={post.image}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </Reveal>

                <div className="wrap mx-auto mt-16 max-w-3xl">
                    <Reveal>
                        <div
                            className="prose prose-lg max-w-none text-lg leading-relaxed text-ink-700 prose-headings:font-display prose-headings:tracking-tight prose-headings:text-ink-900 prose-a:text-orange-500 prose-strong:text-ink-900 prose-img:rounded-md"
                            dangerouslySetInnerHTML={{ __html: post.description }}
                        />
                    </Reveal>
                </div>
            </article>

            {/* Recent */}
            {recent.length > 0 && (
                <section className="border-t border-ink-900/10 bg-surface-50 py-16 sm:py-24 md:py-32">
                    <div className="wrap">
                        <Reveal>
                            <p className="eyebrow">More from the journal</p>
                            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl">
                                Recent posts.
                            </h2>
                        </Reveal>
                        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
                            {recent.map((p, idx) => (
                                <Reveal key={p.id} delay={idx * 0.05}>
                                    <Link
                                        href={`/blog_details/${p.id}`}
                                        className="group flex flex-col gap-5"
                                    >
                                        <figure className="aspect-[4/3] overflow-hidden bg-ink-800">
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                        </figure>
                                        <div>
                                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                                                {formatDate(p.publishedAt)}
                                            </p>
                                            <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-tight text-ink-900 md:text-2xl">
                                                {p.title}
                                            </h3>
                                            <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900 transition group-hover:text-orange-500">
                                                Read
                                                <ArrowUpRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CtaBand
                eyebrow="Talk to us"
                title="Have a project to discuss?"
            />
        </PublicLayout>
    );
}
