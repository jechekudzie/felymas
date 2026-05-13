import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

type CtaBandProps = {
    eyebrow?: string;
    title: string;
    body?: string;
    cta?: { label: string; href: string };
};

export default function CtaBand({
    eyebrow = 'Start a project',
    title,
    body,
    cta = { label: 'Get in touch', href: '/contact' },
}: CtaBandProps) {
    return (
        <section className="bg-ink-900 text-surface-0">
            <div className="wrap grid items-end gap-12 py-24 md:grid-cols-12 md:py-32">
                <Reveal className="md:col-span-7">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-orange-500">
                        {eyebrow}
                    </p>
                    <h2 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                        {title}
                    </h2>
                    {body && (
                        <p className="mt-8 max-w-xl text-lg leading-relaxed text-surface-0/80">
                            {body}
                        </p>
                    )}
                </Reveal>

                <Reveal delay={0.15} className="md:col-span-5 md:text-right">
                    <Link
                        href={cta.href}
                        className="group inline-flex items-center gap-4 rounded-full bg-orange-500 px-8 py-5 font-mono text-xs uppercase tracking-[0.22em] text-surface-0 transition hover:bg-orange-600"
                    >
                        {cta.label}
                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-500 group-hover:rotate-45"
                        />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
