import { Head, Link } from '@inertiajs/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import CtaBand from '@/Components/public/CtaBand';
import Reveal from '@/Components/public/Reveal';
import PublicLayout from '@/Layouts/PublicLayout';
import type { Service } from '@/types/public';

type ServiceDetailProps = {
    service: Service;
    others: Service[];
};

export default function ServiceDetail({ service, others }: ServiceDetailProps) {
    return (
        <PublicLayout overHero>
            <Head title={`${service.name} — Felymas Consultants`} />

            {/* Hero */}
            <section className="relative isolate flex h-[85svh] min-h-[520px] items-end overflow-hidden bg-ink-900 text-surface-0">
                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/40"
                />
                <div className="wrap w-full pb-20 pt-32 md:pb-28">
                    <Reveal>
                        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-orange-500">
                            Service
                        </p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1] tracking-tight md:text-6xl lg:text-7xl">
                            {service.name}
                        </h1>
                    </Reveal>
                </div>
            </section>

            {/* Body — scope, approach, outcomes */}
            <section className="bg-surface-0 py-24 md:py-32">
                <div className="wrap grid gap-12 md:grid-cols-12 md:gap-16">
                    <Reveal className="md:col-span-4">
                        <p className="eyebrow">The brief</p>
                        <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl">
                            What clients commission us for.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
                        <div
                            className="prose prose-lg max-w-none text-lg leading-relaxed text-ink-700 prose-headings:font-display prose-headings:tracking-tight prose-headings:text-ink-900 prose-a:text-orange-500 prose-strong:text-ink-900"
                            dangerouslySetInnerHTML={{ __html: service.description }}
                        />
                    </Reveal>
                </div>
            </section>

            {/* Three-pillar framework */}
            <section className="bg-surface-50 py-24 md:py-32">
                <div className="wrap grid gap-8 md:grid-cols-3 md:gap-10">
                    {[
                        {
                            label: 'Scope',
                            body: 'A clear, written definition of what we will and will not do — agreed before the first invoice.',
                        },
                        {
                            label: 'Approach',
                            body: 'Senior-led delivery, weekly cadence, dashboards your stakeholders can actually read.',
                        },
                        {
                            label: 'Outcome',
                            body: 'Buildings, programmes, and reports that survive scrutiny — by clients, lenders, and regulators.',
                        },
                    ].map((pillar, idx) => (
                        <Reveal key={pillar.label} delay={idx * 0.08}>
                            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-orange-500">
                                {String(idx + 1).padStart(2, '0')} &middot; {pillar.label}
                            </p>
                            <p className="mt-6 font-display text-2xl font-bold leading-tight tracking-tight text-ink-900 md:text-3xl">
                                {pillar.body}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Other services */}
            {others.length > 0 && (
                <section className="bg-surface-0 py-24 md:py-32">
                    <div className="wrap">
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                            <Reveal>
                                <p className="eyebrow">Related disciplines</p>
                                <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl">
                                    Other services we offer.
                                </h2>
                            </Reveal>
                            <Link
                                href="/service"
                                className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-900 transition hover:text-orange-500"
                            >
                                All services
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            {others.map((s, idx) => (
                                <Reveal key={s.id} delay={idx * 0.05}>
                                    <Link
                                        href={`/service_details/${s.id}`}
                                        className="group relative block overflow-hidden bg-ink-900 text-surface-0"
                                    >
                                        <div className="aspect-[4/3] w-full overflow-hidden">
                                            <div
                                                className="h-full w-full bg-cover bg-center transition duration-1000 group-hover:scale-105"
                                                style={{ backgroundImage: `url(${s.image})` }}
                                            />
                                        </div>
                                        <div
                                            aria-hidden
                                            className="absolute inset-0 bg-gradient-to-t from-ink-900 to-transparent"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                                            <h3 className="font-display text-xl font-bold leading-tight tracking-tight md:text-2xl">
                                                {s.name}
                                            </h3>
                                            <ArrowUpRight
                                                size={20}
                                                className="shrink-0 text-surface-0/70 transition group-hover:text-orange-500"
                                            />
                                        </div>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CtaBand
                eyebrow={`Commission · ${service.name}`}
                title="Ready to talk specifics?"
                body="Send us a brief and we'll come back with scope, programme, and fee."
            />
        </PublicLayout>
    );
}
