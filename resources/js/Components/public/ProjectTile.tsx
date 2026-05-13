import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import type { Project } from '@/types/public';
import Reveal from './Reveal';

type ProjectTileProps = {
    project: Project;
    index?: number;
    /** Layout slot — controls aspect & column-span on lg+. */
    size?: 'tall' | 'wide' | 'square';
    /** If provided, the tile becomes a button that calls back instead of navigating. */
    onSelect?: (project: Project) => void;
};

export default function ProjectTile({
    project,
    index = 0,
    size = 'square',
    onSelect,
}: ProjectTileProps) {
    const wrapperClasses = clsx(
        'group relative overflow-hidden bg-ink-800',
        size === 'tall' && 'lg:col-span-4 lg:row-span-2 aspect-[4/5] lg:aspect-auto',
        size === 'wide' && 'lg:col-span-8 aspect-[16/9] lg:aspect-[16/9]',
        size === 'square' && 'lg:col-span-4 aspect-square',
    );

    const body = (
        <>
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                style={{ backgroundImage: `url(${project.image})` }}
            />
            <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            />
            {/* Construction-style corner mark */}
            <span
                aria-hidden
                className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink-900/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-surface-0/85 backdrop-blur-sm"
            >
                <span className="inline-block h-1 w-1 bg-orange-500" />
                N&deg; {String(project.id).padStart(2, '0')}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-left">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-orange-500">
                    Project &middot; {String(project.id).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-surface-0 sm:text-3xl">
                    {project.name}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-surface-0/85 transition group-hover:text-orange-500">
                    {onSelect ? 'Preview project' : 'Read case study'}
                    <span aria-hidden>&rarr;</span>
                </span>
            </div>
        </>
    );

    return (
        <Reveal delay={index * 0.05} className={wrapperClasses}>
            {onSelect ? (
                <button
                    type="button"
                    onClick={() => onSelect(project)}
                    className="absolute inset-0 block cursor-pointer text-left"
                    aria-label={`Preview ${project.name}`}
                >
                    {body}
                </button>
            ) : (
                <Link
                    href={`/project_details/${project.id}`}
                    className="absolute inset-0 block"
                    aria-label={`View ${project.name}`}
                >
                    {body}
                </Link>
            )}
        </Reveal>
    );
}
