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
        <section className="relative isolate flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-ink-900 text-surface-0">
            <motion.div
                aria-hidden
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                initial={reduce ? false : { scale: 1.08 }}
                animate={reduce ? undefined : { scale: 1 }}
                transition={{ duration: 18, ease: 'easeOut' }}
            />
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-900/55 via-ink-900/30 to-ink-900/85"
            />

            <div className="wrap w-full pb-20 pt-32 md:pb-28">
                <motion.p
                    className="font-mono text-[11px] uppercase tracking-[0.32em] text-orange-500"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {eyebrow}
                </motion.p>

                <motion.h1
                    className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[0.98] tracking-tight text-surface-0 sm:text-6xl md:text-7xl lg:text-[6rem]"
                    initial={reduce ? false : { opacity: 0, y: 32 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                    {headline}
                </motion.h1>

                {sub && (
                    <motion.p
                        className="mt-8 max-w-xl text-lg leading-relaxed text-surface-0/80"
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
                    className="mt-12 flex flex-wrap items-center gap-4"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                >
                    <Link
                        href="/#work"
                        className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-surface-0 transition hover:bg-orange-600"
                    >
                        See our work
                        <span aria-hidden>&rarr;</span>
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 rounded-full border border-surface-0/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-surface-0 transition hover:border-surface-0 hover:bg-surface-0/10"
                    >
                        Start a project
                    </Link>
                </motion.div>
            </div>

            <a
                href="#about"
                aria-label="Scroll to next section"
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-surface-0/70 transition hover:text-surface-0 md:flex"
            >
                <ArrowDown size={14} />
                Scroll
            </a>
        </section>
    );
}
