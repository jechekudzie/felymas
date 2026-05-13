import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '@/types/public';

function stripHtml(html: string) {
    return html
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

type ProjectPreviewModalProps = {
    project: Project | null;
    onClose: () => void;
};

export default function ProjectPreviewModal({
    project,
    onClose,
}: ProjectPreviewModalProps) {
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose();
        }
        if (project) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', onKey);
        }
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="fixed inset-0 z-[80] flex items-stretch justify-center bg-ink-900/85 backdrop-blur-sm md:items-center md:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${project.name} preview`}
                >
                    <motion.div
                        className="relative flex max-h-[100dvh] w-full max-w-5xl flex-col overflow-y-auto bg-surface-0 md:max-h-[90vh] md:rounded-md"
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Hero image */}
                        <figure className="relative aspect-[16/10] w-full overflow-hidden bg-ink-800 md:aspect-[21/9]">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div
                                aria-hidden
                                className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent"
                            />
                            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-ink-900/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-surface-0 backdrop-blur md:left-6 md:top-6">
                                <span className="inline-block h-1.5 w-1.5 bg-orange-500" />
                                Project N&deg; {String(project.id).padStart(2, '0')}
                            </span>
                            <button
                                type="button"
                                onClick={onClose}
                                className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-0/30 bg-ink-900/40 text-surface-0 backdrop-blur transition hover:border-surface-0 hover:bg-ink-900/70 md:right-5 md:top-5"
                                aria-label="Close preview"
                            >
                                <X size={20} />
                            </button>
                        </figure>

                        {/* Body */}
                        <div className="flex-1 px-6 py-8 md:px-12 md:py-12">
                            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-orange-500">
                                Selected project
                            </p>
                            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink-900 md:text-5xl">
                                {project.name}
                            </h2>

                            {/* Quick facts */}
                            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-ink-900/10 py-6 sm:grid-cols-4">
                                {[
                                    { label: 'Location', value: 'Zimbabwe' },
                                    { label: 'Status', value: 'Delivered' },
                                    { label: 'Discipline', value: 'Construction & PM' },
                                    { label: 'Reference', value: `FCI / ${String(project.id).padStart(3, '0')}` },
                                ].map((f) => (
                                    <div key={f.label}>
                                        <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                                            {f.label}
                                        </dt>
                                        <dd className="mt-2 font-display text-base font-bold tracking-tight text-ink-900 md:text-lg">
                                            {f.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
                                {stripHtml(project.description) ||
                                    'Felymas Consultants International delivered the full project lifecycle on this commission — feasibility, design coordination, procurement, and construction supervision through to handover.'}
                            </p>

                            <div className="mt-10 flex flex-wrap items-center gap-3">
                                <Link
                                    href={`/project_details/${project.id}`}
                                    className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-surface-0 transition hover:bg-orange-600"
                                >
                                    Full case study
                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform duration-500 group-hover:rotate-45"
                                    />
                                </Link>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="inline-flex items-center gap-3 rounded-full border border-ink-900/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-900 transition hover:border-orange-500 hover:text-orange-500"
                                >
                                    Close preview
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
