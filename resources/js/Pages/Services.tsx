import { Head, Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import CtaBand from '@/Components/public/CtaBand';
import PageHero from '@/Components/public/PageHero';
import Reveal from '@/Components/public/Reveal';
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

            <PageHero
                eyebrow="02 · What we do"
                title="Four disciplines."
                accent="One signature."
                intro="Each service is led by a senior practitioner and backed by a multi-disciplinary team — so a project never falls into the gap between consultants. Commission us for one stage, or hand us the whole programme."
            />

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
                                    className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-ink-900 p-6 md:col-span-6 md:p-10 ${reverse ? 'md:order-2' : ''}`}
                                >
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="max-h-full max-w-full object-contain transition-transform duration-1000 hover:scale-[1.03]"
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
