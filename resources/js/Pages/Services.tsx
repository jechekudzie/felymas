import { Head, Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import CtaBand from '@/Components/public/CtaBand';
import Reveal from '@/Components/public/Reveal';
import SectionHeading from '@/Components/public/SectionHeading';
import PublicLayout from '@/Layouts/PublicLayout';
import type { Service } from '@/types/public';

type ServicesProps = {
    services: Service[];
};

function stripHtml(html: string) {
    return html
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

export default function Services({ services }: ServicesProps) {
    return (
        <PublicLayout>
            <Head title="Services — Felymas Consultants International" />

            {/* Intro */}
            <section className="bg-surface-0 pb-24 pt-40 md:pb-32 md:pt-48">
                <div className="wrap">
                    <Reveal>
                        <p className="eyebrow">What we do</p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink-900 md:text-6xl lg:text-7xl">
                            Four disciplines.{' '}
                            <span className="text-orange-500">One signature.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-700">
                            Each service is led by a senior practitioner and
                            backed by a multi-disciplinary team — so a project
                            never falls into the gap between consultants. Commission
                            us for one stage, or hand us the whole programme.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Services as alternating editorial rows */}
            <section className="bg-surface-0">
                {services.map((service, idx) => {
                    const reverse = idx % 2 === 1;
                    const body = stripHtml(service.description);
                    return (
                        <Reveal
                            key={service.id}
                            delay={0.05}
                            className={`border-t border-ink-900/10 py-20 md:py-28 ${reverse ? 'bg-surface-50' : 'bg-surface-0'}`}
                        >
                            <div
                                className={`wrap grid gap-12 md:grid-cols-12 md:gap-16 ${reverse ? 'md:[grid-template-columns:repeat(12,minmax(0,1fr))]' : ''}`}
                            >
                                <figure
                                    className={`relative aspect-[4/3] overflow-hidden bg-ink-800 md:col-span-6 ${reverse ? 'md:order-2' : ''}`}
                                >
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="absolute inset-0 h-full w-full object-cover transition duration-1000 hover:scale-105"
                                        loading="lazy"
                                    />
                                </figure>

                                <div
                                    className={`flex flex-col justify-center md:col-span-6 ${reverse ? 'md:order-1' : ''}`}
                                >
                                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-orange-500">
                                        {String(idx + 1).padStart(2, '0')} &middot; Service
                                    </p>
                                    <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 md:text-5xl">
                                        {service.name}
                                    </h2>
                                    {body && (
                                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">
                                            {body.length > 320 ? body.slice(0, 320).trim() + '…' : body}
                                        </p>
                                    )}
                                    <Link
                                        href={`/service_details/${service.id}`}
                                        className="group mt-10 inline-flex items-center gap-3 self-start rounded-full border border-ink-900/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-900 transition hover:border-orange-500 hover:text-orange-500"
                                    >
                                        Read more
                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform duration-500 group-hover:rotate-45"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    );
                })}
            </section>

            <CtaBand
                eyebrow="Commission a stage — or the programme"
                title="Tell us what stage you're at."
                body="A first call to scope, scale, and sequence is on us. We'll come back with a written proposal that names every input and every deliverable."
            />
        </PublicLayout>
    );
}
