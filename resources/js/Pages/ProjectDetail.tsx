import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CtaBand from '@/Components/public/CtaBand';
import ProjectTile from '@/Components/public/ProjectTile';
import Reveal from '@/Components/public/Reveal';
import PublicLayout from '@/Layouts/PublicLayout';
import type { Project } from '@/types/public';

type ProjectDetailProps = {
    project: Project;
    others: Project[];
};

function stripHtml(html: string) {
    return html
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

export default function ProjectDetail({ project, others }: ProjectDetailProps) {
    const body = stripHtml(project.description);
    const gallery = project.images ?? [];
    const tileSizes: Array<'tall' | 'wide' | 'square'> = [
        'tall',
        'wide',
        'square',
    ];
    const otherFew = others.slice(0, 3);

    return (
        <PublicLayout overHero>
            <Head title={`${project.name} — Felymas Project`} />

            {/* Hero */}
            <section className="relative isolate flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-ink-900 text-surface-0">
                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-ink-900/30 to-ink-900/40"
                />
                <div className="wrap w-full pb-20 pt-32 md:pb-28">
                    <Reveal>
                        <Link
                            href="/#work"
                            className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-surface-0/80 transition hover:text-orange-500"
                        >
                            <ArrowLeft size={14} />
                            All projects
                        </Link>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.32em] text-orange-500">
                            Project &middot; {String(project.id).padStart(2, '0')}
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1] tracking-tight md:text-6xl lg:text-7xl">
                            {project.name}
                        </h1>
                    </Reveal>
                </div>
            </section>

            {/* Key facts strip */}
            <section className="border-b border-ink-900/10 bg-surface-50">
                <div className="wrap grid divide-y divide-ink-900/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                    {[
                        { label: 'Client', value: 'On request' },
                        { label: 'Location', value: 'Zimbabwe' },
                        { label: 'Status', value: 'Delivered' },
                        { label: 'Discipline', value: 'Construction & PM' },
                    ].map((f, idx) => (
                        <Reveal
                            key={f.label}
                            delay={idx * 0.04}
                            className="px-2 py-10 first:pl-0 last:pr-0 sm:px-6 md:px-8 md:py-12"
                        >
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                                {f.label}
                            </p>
                            <p className="mt-4 font-display text-xl font-bold tracking-tight text-ink-900 md:text-2xl">
                                {f.value}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Narrative */}
            <section className="bg-surface-0 py-24 md:py-32">
                <div className="wrap grid gap-12 md:grid-cols-12 md:gap-16">
                    <Reveal className="md:col-span-4">
                        <p className="eyebrow">Brief</p>
                        <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl">
                            What the project asked for.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
                        <p className="text-lg leading-relaxed text-ink-700">
                            {body ||
                                'Felymas Consultants International delivered the full project lifecycle on this commission — feasibility, design coordination, procurement, and construction supervision through to handover.'}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Gallery */}
            {gallery.length > 0 && (
                <section className="bg-surface-50 py-12 md:py-16">
                    <div className="wrap grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5">
                        {gallery.map((img, idx) => (
                            <Reveal
                                key={img.id}
                                delay={idx * 0.05}
                                className="overflow-hidden bg-ink-800"
                            >
                                <img
                                    src={img.image}
                                    alt=""
                                    className="aspect-[4/3] h-full w-full object-cover transition duration-1000 hover:scale-105"
                                    loading="lazy"
                                />
                            </Reveal>
                        ))}
                    </div>
                </section>
            )}

            {/* Other projects */}
            {otherFew.length > 0 && (
                <section className="bg-surface-0 py-24 md:py-32">
                    <div className="wrap">
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                            <Reveal>
                                <p className="eyebrow">More work</p>
                                <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl">
                                    Other projects.
                                </h2>
                            </Reveal>
                            <Link
                                href="/#work"
                                className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-900 transition hover:text-orange-500"
                            >
                                All projects
                                <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:gap-5">
                            {otherFew.map((p, idx) => (
                                <ProjectTile
                                    key={p.id}
                                    project={p}
                                    index={idx}
                                    size={tileSizes[idx] ?? 'square'}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CtaBand
                eyebrow="Considering a similar project?"
                title="Let's talk about yours."
            />
        </PublicLayout>
    );
}
