import { Head } from '@inertiajs/react';
import { X } from 'lucide-react';
import { useState } from 'react';
import CtaBand from '@/Components/public/CtaBand';
import Reveal from '@/Components/public/Reveal';
import PublicLayout from '@/Layouts/PublicLayout';
import type { GalleryImage, Project } from '@/types/public';

type GalleryProps = {
    images: GalleryImage[];
    fallbackProjects: Project[];
};

export default function Gallery({ images, fallbackProjects }: GalleryProps) {
    const [active, setActive] = useState<string | null>(null);

    // If the dedicated gallery is empty, fall back to project hero images so
    // visitors still see real work on /gallery — this is the brief's
    // "treat the gallery as an index of work" position.
    const items: { id: string; image: string; caption: string }[] = images.length
        ? images.map((img) => ({
              id: `g-${img.id}`,
              image: img.image,
              caption: img.caption,
          }))
        : fallbackProjects.map((p) => ({
              id: `p-${p.id}`,
              image: p.image,
              caption: p.name,
          }));

    return (
        <PublicLayout>
            <Head title="Gallery — Felymas Consultants" />

            <section className="bg-surface-0 pb-16 pt-40 md:pb-24 md:pt-48">
                <div className="wrap">
                    <Reveal>
                        <p className="eyebrow">Index of work</p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink-900 md:text-6xl lg:text-7xl">
                            Selected images from the{' '}
                            <span className="text-orange-500">field.</span>
                        </h1>
                    </Reveal>
                </div>
            </section>

            <section className="bg-surface-0 pb-24 md:pb-32">
                <div className="wrap">
                    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5 [&>*]:mb-4 lg:[&>*]:mb-5">
                        {items.map((item, idx) => (
                            <Reveal key={item.id} delay={idx * 0.04} className="break-inside-avoid">
                                <button
                                    type="button"
                                    onClick={() => setActive(item.image)}
                                    className="group relative block w-full overflow-hidden bg-ink-800"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.caption}
                                        className="block h-auto w-full object-cover transition duration-1000 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <span
                                        aria-hidden
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-transparent opacity-0 transition group-hover:opacity-100"
                                    />
                                    {item.caption && (
                                        <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 font-mono text-[11px] uppercase tracking-[0.22em] text-surface-0 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                            {item.caption}
                                        </span>
                                    )}
                                </button>
                            </Reveal>
                        ))}
                    </div>

                    {!items.length && (
                        <div className="py-32 text-center">
                            <p className="eyebrow">Coming soon</p>
                            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl">
                                We&rsquo;re curating the gallery now.
                            </h2>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {active && (
                <div
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-900/95 p-6"
                    onClick={() => setActive(null)}
                >
                    <button
                        type="button"
                        onClick={() => setActive(null)}
                        className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-surface-0/30 text-surface-0 transition hover:border-surface-0"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                    <img
                        src={active}
                        alt=""
                        className="max-h-[88vh] max-w-[92vw] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <CtaBand eyebrow="Photography" title="Want to commission a similar project?" />
        </PublicLayout>
    );
}
