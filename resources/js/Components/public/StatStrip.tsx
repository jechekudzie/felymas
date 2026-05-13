import Reveal from './Reveal';

type Stat = {
    value: string;
    unit?: string;
    label: string;
};

const DEFAULT_STATS: Stat[] = [
    { value: '20', unit: '+', label: 'Projects delivered' },
    { value: '2', label: 'Countries · ZW · ZA' },
    { value: '15', unit: '+', label: 'Engineers & staff' },
];

export default function StatStrip({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
    return (
        <section className="relative isolate overflow-hidden border-y border-ink-900/10 bg-surface-50">
            {/* Blueprint grid background */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-[0.4]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(11,18,32,0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(11,18,32,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            />
            {/* Top reference rule */}
            <div className="wrap flex items-center gap-3 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-500">
                <span className="inline-block h-1.5 w-1.5 bg-orange-500" />
                Practice &middot; By the numbers
            </div>

            <div className="wrap grid divide-y divide-ink-900/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {stats.map((stat, idx) => (
                    <Reveal
                        key={stat.label}
                        delay={idx * 0.06}
                        className="px-2 py-12 first:pl-0 last:pr-0 sm:px-8 md:px-10 md:py-16"
                    >
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                            N&deg; {String(idx + 1).padStart(2, '0')}
                        </p>
                        <p className="mt-4 flex items-baseline gap-1 font-display text-6xl font-bold leading-none tracking-tight text-ink-900 md:text-7xl">
                            {stat.value}
                            {stat.unit && (
                                <span className="text-orange-500">{stat.unit}</span>
                            )}
                        </p>
                        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
                            {stat.label}
                        </p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
