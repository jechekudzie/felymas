import clsx from 'clsx';
import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
    eyebrow?: string;
    title: ReactNode;
    intro?: ReactNode;
    align?: 'left' | 'center';
    className?: string;
};

export default function SectionHeading({
    eyebrow,
    title,
    intro,
    align = 'left',
    className,
}: SectionHeadingProps) {
    return (
        <Reveal
            className={clsx(
                'max-w-3xl',
                align === 'center' && 'mx-auto text-center',
                className,
            )}
        >
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2
                className={clsx(
                    'mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl',
                )}
            >
                {title}
            </h2>
            {intro && (
                <p className="mt-6 text-lg leading-relaxed text-ink-700">
                    {intro}
                </p>
            )}
        </Reveal>
    );
}
