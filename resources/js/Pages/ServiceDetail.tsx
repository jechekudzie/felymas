import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
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
        <PublicLayout>
            <Head title={`${service.name} — Felymas Consultants`} />

            {/* Banner header — small contained image on the left, title block centre, CTA card right */}
            <section className="relative isolate overflow-hidden bg-ink-900 text-surface-0">
                {/* Subtle blueprint grid backdrop */}
                <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
                        `,
                        backgroundSize: '48px 48px',
                    }}
                />
                <div className="relative wrap pb-16 pt-36 md:pb-20 md:pt-40">
                    <Reveal>
                        <Link
                            href="/service"
                            className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-surface-0/70 transition hover:text-orange-500"
                        >
                            <ArrowLeft size={14} />
                            All services
                        </Link>
                    </Reveal>

                    <div className="mt-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                        {/* Small image — object-contain keeps native source crisp */}
                        <Reveal as="figure" className="lg:col-span-3">
                            <div className="flex aspect-[5/6] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-md bg-ink-800 p-6 ring-1 ring-surface-0/10">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </Reveal>

                        {/* Title + meta */}
                        <Reveal delay={0.05} className="lg:col-span-6">
                            <span className="inline-flex items-center gap-2 rounded-full bg-surface-0/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-surface-0/85 backdrop-blur-sm">
                                <span className="inline-block h-1.5 w-1.5 bg-orange-500" />
                                Service &middot; N&deg; {String(service.id).padStart(2, '0')}
                            </span>
                            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-tight text-surface-0 md:text-5xl lg:text-6xl">
                                {service.name}
                            </h1>
                            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-surface-0/10 pt-6 sm:grid-cols-3">
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-surface-0/50">
                                        Discipline
                                    </p>
                                    <p className="mt-2 font-display text-base font-bold tracking-tight md:text-lg">
                                        Construction
                                    </p>
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-surface-0/50">
                                        Region
                                    </p>
                                    <p className="mt-2 font-display text-base font-bold tracking-tight md:text-lg">
                                        ZW &middot; ZA
                                    </p>
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-surface-0/50">
                                        Lead
                                    </p>
                                    <p className="mt-2 font-display text-base font-bold tracking-tight md:text-lg">
                                        Reg. Engineer
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* CTA sidebar card */}
                        <Reveal delay={0.1} className="lg:col-span-3">
                            <aside className="rounded-md border border-orange-500/40 bg-ink-800 p-6 ring-1 ring-inset ring-surface-0/5">
                                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-orange-500">
                                    Commission
                                </p>
                                <p className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight">
                                    From quote
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-surface-0/70">
                                    First call &amp; written proposal — no charge.
                                </p>
                                <Link
                                    href="/contact"
                                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-surface-0 transition hover:bg-orange-600"
                                >
                                    Start a project
                                    <ArrowRight size={14} />
                                </Link>
                            </aside>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Body — full-width title row, description in 2-column text flow below */}
            <section className="bg-surface-0 py-16 sm:py-24 md:py-32">
                <div className="wrap">
                    <Reveal>
                        <p className="eyebrow">
                            <span className="mr-2 inline-block h-2 w-2 align-middle bg-orange-500" />
                            The brief
                        </p>
                        <h2 className="mt-6 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl lg:text-5xl">
                            What clients commission us for.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div
                            className="prose prose-lg mt-12 max-w-none text-ink-700 prose-headings:font-display prose-headings:tracking-tight prose-headings:text-ink-900 prose-p:text-base prose-p:leading-relaxed md:prose-p:text-lg prose-a:text-orange-500 prose-strong:text-ink-900 md:columns-2 md:gap-12"
                            dangerouslySetInnerHTML={{ __html: service.description }}
                        />
                    </Reveal>
                </div>
            </section>

            {/* Three-pillar framework */}
            <section className="bg-surface-50 py-16 sm:py-24 md:py-32">
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
                <section className="bg-surface-0 py-16 sm:py-24 md:py-32">
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
