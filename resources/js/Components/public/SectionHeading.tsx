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
                    'mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl',
                )}
            >
                {title}
            </h2>
            {intro && (
                <p className="mt-5 text-base leading-relaxed text-ink-700 sm:mt-6 sm:text-lg">
                    {intro}
                </p>
            )}
        </Reveal>
    );
}
