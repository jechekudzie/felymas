import type { PartnerLogo } from '@/types/public';
import Reveal from './Reveal';

export default function LogoGrid({ partners }: { partners: PartnerLogo[] }) {
    if (!partners.length) return null;
    // Duplicate the list so the loop is seamless.
    const loop = [...partners, ...partners];

    return (
        <Reveal>
            <div className="relative overflow-hidden border-y border-ink-900/10 bg-surface-0 py-10">
                {/* Side fade masks so logos enter/exit smoothly */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-0 to-transparent"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-0 to-transparent"
                />

                <div
                    className="flex w-max items-center gap-14 animate-[felymas-marquee_45s_linear_infinite] hover:[animation-play-state:paused] md:gap-20"
                    style={
                        {
                            // Inline keyframes via CSS custom prop fallback — actual @keyframes lives in app.css
                        }
                    }
                >
                    {loop.map((partner, idx) => (
                        <a
                            key={`${partner.id}-${idx}`}
                            href={partner.url || '#'}
                            target={partner.url ? '_blank' : undefined}
                            rel={partner.url ? 'noreferrer noopener' : undefined}
                            title={partner.name}
                            className="group inline-flex shrink-0 items-center justify-center"
                        >
                            <img
                                src={partner.image}
                                alt={partner.name}
                                className="h-14 w-auto max-w-[180px] object-contain grayscale opacity-70 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100 md:h-16"
                                loading="lazy"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </Reveal>
    );
}
