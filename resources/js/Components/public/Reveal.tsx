import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type RevealProps = {
    children: ReactNode;
    delay?: number;
    as?: 'div' | 'section' | 'article' | 'header' | 'figure' | 'li';
    className?: string;
};

export default function Reveal({
    children,
    delay = 0,
    as = 'div',
    className,
}: RevealProps) {
    const prefersReduced = useReducedMotion();

    const MotionTag = motion[as];

    if (prefersReduced) {
        const Tag = as;
        return <Tag className={className}>{children}</Tag>;
    }

    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </MotionTag>
    );
}
