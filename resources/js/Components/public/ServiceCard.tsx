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
                className="relative flex h-full flex-col overflow-hidden rounded-md bg-ink-900 text-surface-0"
            >
                {/* Source images are landscape banners with text baked in — show full image with object-contain so nothing gets cropped. */}
                <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-ink-900">
                    <img
                        src={service.image}
                        alt={service.name}
                        className="h-full w-full object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        loading="lazy"
                    />
                </div>
                <div className="flex items-end justify-between gap-4 bg-ink-900 p-6">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-500">
                            {String(index + 1).padStart(2, '0')} &middot; Service
                        </p>
                        <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-tight text-surface-0 md:text-2xl">
                            {service.name}
                        </h3>
                    </div>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-0 text-ink-900 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-12 group-hover:bg-orange-500 group-hover:text-surface-0">
                        <ArrowUpRight size={18} />
                    </span>
                </div>
            </Link>
        </Reveal>
    );
}
