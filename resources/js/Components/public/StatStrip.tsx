import Reveal from './Reveal';

type Stat = {
    value: string;
    unit?: string;
    label: string;
};

const DEFAULT_STATS: Stat[] = [
    { value: '20', unit: '+', label: 'Projects delivered' },
    { value: 'USD 20', unit: 'M+', label: 'Value in projects' },
    { value: '2', label: 'Countries' },
    { value: '15', unit: '+', label: 'Engineers & staff' },
];

export default function StatStrip({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
    return (
        <section className="border-y border-ink-900/10 bg-surface-50">
            <div className="wrap grid divide-y divide-ink-900/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                {stats.map((stat, idx) => (
                    <Reveal
                        key={stat.label}
                        delay={idx * 0.06}
                        className="px-2 py-12 first:pl-0 last:pr-0 sm:px-8 md:px-10 md:py-16"
                    >
                        <p className="flex items-baseline gap-1 font-display text-5xl font-bold leading-none tracking-tight text-ink-900 md:text-6xl">
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
