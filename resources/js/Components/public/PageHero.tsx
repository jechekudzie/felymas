import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import Reveal from './Reveal';

type PageHeroProps = {
    eyebrow: string;
    title: ReactNode;
    accent?: ReactNode;
    intro?: ReactNode;
    drawingRef?: string;
    backLink?: { label: string; href: string };
    cta?: { label: string; href: string };
};

export default function PageHero({
    eyebrow,
    title,
    accent,
    intro,
    drawingRef = 'DRG. N° FCI/2025',
    backLink,
    cta,
}: PageHeroProps) {
    return (
        <section className="relative isolate overflow-hidden bg-ink-900 text-surface-0">
            {/* Blueprint grid */}
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
            {/* Orange spotlight gradient bottom-right */}
            <div
                aria-hidden
                className="absolute -bottom-32 -right-20 -z-0 h-[28rem] w-[28rem] rounded-full bg-orange-500/15 blur-[140px]"
            />
            {/* Subtle warm scrim top-left */}
            <div
                aria-hidden
                className="absolute -top-32 -left-20 -z-0 h-[28rem] w-[28rem] rounded-full bg-orange-500/10 blur-[120px]"
            />

            {/* Edge accent rules — vertical orange gradient lines on far left/right */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-32 left-0 w-px bg-gradient-to-b from-transparent via-orange-500/55 to-transparent md:left-4"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-32 right-0 w-px bg-gradient-to-b from-transparent via-orange-500/55 to-transparent md:right-4"
            />

            {/* Drawing reference top-right */}
            <div className="pointer-events-none absolute inset-x-0 top-28 z-10 hidden md:block">
                <div className="wrap flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-surface-0/60">
                    {backLink ? (
                        <Link
                            href={backLink.href}
                            className="pointer-events-auto inline-flex items-center gap-2 transition hover:text-orange-500"
                        >
                            &larr; {backLink.label}
                        </Link>
                    ) : (
                        <span />
                    )}
                    <span>{drawingRef}</span>
                </div>
            </div>

            <div className="relative wrap pb-20 pt-36 sm:pb-24 sm:pt-40 md:pb-32 md:pt-44">
                <Reveal>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-surface-0 sm:text-[11px] sm:tracking-[0.32em]">
                        <span className="mr-2 inline-block h-px w-6 align-middle bg-orange-500 sm:mr-3 sm:w-10" />
                        {eyebrow}
                    </p>
                </Reveal>
                <Reveal delay={0.05}>
                    <h1 className="mt-6 max-w-5xl font-display text-[2.25rem] font-bold leading-[1.05] tracking-tight text-surface-0 sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
                        {title}
                        {accent && (
                            <>
                                {' '}
                                <span className="text-orange-500">{accent}</span>
                            </>
                        )}
                    </h1>
                </Reveal>
                {intro && (
                    <Reveal delay={0.1}>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-surface-0/85 sm:mt-10 sm:text-lg">
                            {intro}
                        </p>
                    </Reveal>
                )}
                {cta && (
                    <Reveal delay={0.15}>
                        <Link
                            href={cta.href}
                            className="mt-10 inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-surface-0 transition hover:bg-orange-600"
                        >
                            {cta.label}
                            <ArrowRight size={14} />
                        </Link>
                    </Reveal>
                )}
            </div>
        </section>
    );
}
