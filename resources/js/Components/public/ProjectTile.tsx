import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import type { Project } from '@/types/public';
import Reveal from './Reveal';

type ProjectTileProps = {
    project: Project;
    index?: number;
    /** Layout slot — controls aspect & column-span on lg+. */
    size?: 'tall' | 'wide' | 'square';
};

export default function ProjectTile({
    project,
    index = 0,
    size = 'square',
}: ProjectTileProps) {
    return (
        <Reveal
            delay={index * 0.05}
            className={clsx(
                'group relative overflow-hidden bg-ink-800',
                size === 'tall' && 'lg:col-span-4 lg:row-span-2 aspect-[4/5] lg:aspect-auto',
                size === 'wide' && 'lg:col-span-8 aspect-[16/9] lg:aspect-[16/9]',
                size === 'square' && 'lg:col-span-4 aspect-square',
            )}
        >
            <Link
                href={`/project_details/${project.id}`}
                className="absolute inset-0 block"
                aria-label={`View ${project.name}`}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-orange-500">
                        Project &middot; {String(project.id).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-surface-0 sm:text-3xl">
                        {project.name}
                    </h3>
                    <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-surface-0/85 transition group-hover:text-orange-500">
                        Read case study
                        <span aria-hidden>&rarr;</span>
                    </span>
                </div>
            </Link>
        </Reveal>
    );
}
