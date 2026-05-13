import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '@/types/public';
import Reveal from './Reveal';

type ServiceCardProps = {
    service: Service;
    index?: number;
};

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
    return (
        <Reveal delay={index * 0.08} className="group">
            <Link
                href={`/service_details/${service.id}`}
                className="relative block h-full overflow-hidden rounded-md bg-ink-900 text-surface-0"
            >
                <div className="aspect-[4/5] w-full overflow-hidden bg-ink-800">
                    <div
                        className="h-full w-full bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                        style={{ backgroundImage: `url(${service.image})` }}
                    />
                </div>
                <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 md:p-8">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-500">
                            {String(index + 1).padStart(2, '0')} &middot; Service
                        </p>
                        <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-surface-0 md:text-3xl">
                            {service.name}
                        </h3>
                    </div>
                    <span className="mb-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-0 text-ink-900 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-12 group-hover:bg-orange-500 group-hover:text-surface-0">
                        <ArrowUpRight size={20} />
                    </span>
                </div>
            </Link>
        </Reveal>
    );
}
