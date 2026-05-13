import type { PartnerLogo } from '@/types/public';
import Reveal from './Reveal';

export default function LogoGrid({ partners }: { partners: PartnerLogo[] }) {
    if (!partners.length) return null;
    return (
        <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 sm:grid-cols-3 lg:grid-cols-5">
                {partners.map((partner) => (
                    <a
                        key={partner.id}
                        href={partner.url || '#'}
                        target={partner.url ? '_blank' : undefined}
                        rel={partner.url ? 'noreferrer noopener' : undefined}
                        title={partner.name}
                        className="flex aspect-[3/2] items-center justify-center bg-surface-0 p-6 transition hover:bg-surface-50"
                    >
                        <img
                            src={partner.image}
                            alt={partner.name}
                            className="max-h-12 w-auto max-w-[140px] object-contain grayscale opacity-70 transition duration-500 hover:grayscale-0 hover:opacity-100"
                        />
                    </a>
                ))}
            </div>
        </Reveal>
    );
}
