import { Head, Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import CtaBand from '@/Components/public/CtaBand';
import Reveal from '@/Components/public/Reveal';
import PublicLayout from '@/Layouts/PublicLayout';
import type { BlogPost } from '@/types/public';

type BlogProps = {
    posts: BlogPost[];
};

function stripHtml(html: string) {
    return html
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

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

export default function Blog({ posts }: BlogProps) {
    const featured = posts[0];
    const rest = posts.slice(1);

    return (
        <PublicLayout>
            <Head title="Journal — Felymas Consultants" />

            <section className="bg-surface-0 pb-16 pt-40 md:pb-24 md:pt-48">
                <div className="wrap">
                    <Reveal>
                        <p className="eyebrow">Journal</p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink-900 md:text-6xl lg:text-7xl">
                            Notes from the site office,{' '}
                            <span className="text-orange-500">straight from the team.</span>
                        </h1>
                    </Reveal>
                </div>
            </section>

            {/* Featured */}
            {featured && (
                <section className="bg-surface-0 pb-24 md:pb-32">
                    <div className="wrap">
                        <Reveal>
                            <Link
                                href={`/blog_details/${featured.id}`}
                                className="group grid gap-10 md:grid-cols-12 md:gap-16"
                            >
                                <figure className="aspect-[4/3] overflow-hidden bg-ink-800 md:col-span-7">
                                    <img
                                        src={featured.image}
                                        alt={featured.title}
                                        className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </figure>
                                <div className="flex flex-col justify-center md:col-span-5">
                                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-orange-500">
                                        Featured &middot; {formatDate(featured.publishedAt)}
                                    </p>
                                    <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 md:text-5xl">
                                        {featured.title}
                                    </h2>
                                    <p className="mt-6 text-lg leading-relaxed text-ink-700">
                                        {stripHtml(featured.description).slice(0, 220).trim()}
                                        {stripHtml(featured.description).length > 220 ? '…' : ''}
                                    </p>
                                    <span className="mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-900 transition group-hover:text-orange-500">
                                        Read article
                                        <ArrowUpRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>
                    </div>
                </section>
            )}

            {/* Rest as 2-col list */}
            {rest.length > 0 && (
                <section className="border-t border-ink-900/10 bg-surface-50 py-16 sm:py-24 md:py-32">
                    <div className="wrap grid gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
                        {rest.map((post, idx) => (
                            <Reveal key={post.id} delay={idx * 0.05}>
                                <Link
                                    href={`/blog_details/${post.id}`}
                                    className="group flex flex-col gap-6"
                                >
                                    <figure className="aspect-[16/10] overflow-hidden bg-ink-800">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </figure>
                                    <div>
                                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                                            {formatDate(post.publishedAt)}
                                        </p>
                                        <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-ink-900 md:text-3xl">
                                            {post.title}
                                        </h3>
                                        <p className="mt-4 text-base leading-relaxed text-ink-700">
                                            {stripHtml(post.description).slice(0, 160).trim()}
                                            {stripHtml(post.description).length > 160 ? '…' : ''}
                                        </p>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </section>
            )}

            {!posts.length && (
                <section className="border-t border-ink-900/10 bg-surface-50 py-40">
                    <div className="wrap text-center">
                        <p className="eyebrow">Journal</p>
                        <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl">
                            We&rsquo;re drafting the first pieces.
                        </h2>
                        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-700">
                            Coming soon — field notes, project breakdowns, and the
                            occasional opinion from the site office.
                        </p>
                    </div>
                </section>
            )}

            <CtaBand
                eyebrow="Want to talk?"
                title="Have a project in mind?"
            />
        </PublicLayout>
    );
}
