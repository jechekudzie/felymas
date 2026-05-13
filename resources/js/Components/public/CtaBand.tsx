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
            <div className="wrap grid items-end gap-10 py-16 sm:gap-12 sm:py-24 md:grid-cols-12 md:py-32">
                <Reveal className="md:col-span-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-500 sm:text-[11px] sm:tracking-[0.28em]">
                        {eyebrow}
                    </p>
                    <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl">
                        {title}
                    </h2>
                    {body && (
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-surface-0/80 sm:mt-8 sm:text-lg">
                            {body}
                        </p>
                    )}
                </Reveal>

                <Reveal delay={0.15} className="md:col-span-5 md:text-right">
                    <Link
                        href={cta.href}
                        className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-surface-0 transition hover:bg-orange-600 sm:gap-4 sm:px-8 sm:py-5 sm:text-xs sm:tracking-[0.22em]"
                    >
                        {cta.label}
                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-500 group-hover:rotate-45 sm:h-[18px] sm:w-[18px]"
                        />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
