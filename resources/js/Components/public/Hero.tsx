import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

type HeroProps = {
    image: string;
    eyebrow: string;
    headline: string;
    sub?: string;
};

export default function Hero({ image, eyebrow, headline, sub }: HeroProps) {
    const reduce = useReducedMotion();

    return (
        <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink-900 text-surface-0">
            {/* Image */}
            <motion.div
                aria-hidden
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                initial={reduce ? false : { scale: 1.08 }}
                animate={reduce ? undefined : { scale: 1 }}
                transition={{ duration: 18, ease: 'easeOut' }}
            />

            {/* Top scrim — guarantees nav contrast over any image */}
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-ink-900/90 via-ink-900/60 to-transparent md:h-40 md:via-ink-900/50"
            />
            {/* Bottom scrim — guarantees hero copy contrast */}
            <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 -z-10 h-[80%] bg-gradient-to-t from-ink-900 via-ink-900/85 to-transparent md:h-[75%]"
            />
            {/* Subtle vertical edge gradient for cinematic depth */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(11,18,32,0.45)_100%)]"
            />

            {/* Edge accent rules — vertical orange gradient lines on far left/right */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-24 left-0 w-px bg-gradient-to-b from-transparent via-orange-500/55 to-transparent md:left-4"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-24 right-0 w-px bg-gradient-to-b from-transparent via-orange-500/55 to-transparent md:right-4"
            />

            {/* Top-corner technical overlay — drawing reference */}
            <div className="pointer-events-none absolute inset-x-0 top-24 z-10 hidden md:block">
                <div className="wrap flex items-start justify-end font-mono text-[10px] uppercase tracking-[0.28em] text-surface-0/70">
                    <span>DRG. N&deg; FCI/2025</span>
                </div>
            </div>

            <div className="wrap relative w-full pb-16 pt-40 sm:pb-24 sm:pt-36 md:pb-32 md:pt-32">
                <motion.p
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-surface-0 [text-shadow:0_1px_24px_rgba(11,18,32,0.6)] sm:text-[11px] sm:tracking-[0.32em]"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="mr-2 inline-block h-px w-6 align-middle bg-orange-500 sm:mr-3 sm:w-10" />
                    {eyebrow}
                </motion.p>

                <motion.h1
                    className="mt-5 max-w-5xl font-display text-[2.5rem] font-bold leading-[1] tracking-tight text-surface-0 [text-shadow:0_2px_40px_rgba(11,18,32,0.6)] sm:text-6xl md:text-7xl lg:text-[6rem]"
                    initial={reduce ? false : { opacity: 0, y: 32 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                    {headline}
                </motion.h1>

                {sub && (
                    <motion.p
                        className="mt-6 max-w-xl text-base leading-relaxed text-surface-0/90 [text-shadow:0_1px_16px_rgba(11,18,32,0.6)] sm:mt-8 sm:text-lg"
                        initial={reduce ? false : { opacity: 0, y: 16 }}
                        animate={reduce ? undefined : { opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.25,
                        }}
                    >
                        {sub}
                    </motion.p>
                )}

                <motion.div
                    className="mt-8 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                >
                    <Link
                        href="/#work"
                        className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-surface-0 transition hover:bg-orange-600 sm:gap-3 sm:px-6 sm:text-xs sm:tracking-[0.22em]"
                    >
                        See our work
                        <span aria-hidden>&rarr;</span>
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-surface-0/50 bg-surface-0/5 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-surface-0 backdrop-blur-sm transition hover:border-surface-0 hover:bg-surface-0/10 sm:gap-3 sm:px-6 sm:text-xs sm:tracking-[0.22em]"
                    >
                        Start a project
                    </Link>
                </motion.div>
            </div>

            <a
                href="#about"
                aria-label="Scroll to next section"
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-surface-0/80 transition hover:text-orange-500 md:flex"
            >
                <ArrowDown size={14} />
                Scroll
            </a>
        </section>
    );
}
