import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="grid min-h-screen bg-surface-0 lg:grid-cols-2">
            {/* Brand panel — dark, editorial */}
            <div className="relative isolate hidden overflow-hidden bg-ink-900 text-surface-0 lg:flex lg:flex-col lg:justify-between">
                {/* Blueprint grid */}
                <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
                        `,
                        backgroundSize: '48px 48px',
                    }}
                />
                {/* Orange spotlights */}
                <div
                    aria-hidden
                    className="absolute -bottom-32 -right-20 -z-0 h-[28rem] w-[28rem] rounded-full bg-orange-500/15 blur-[140px]"
                />
                <div
                    aria-hidden
                    className="absolute -top-32 -left-20 -z-0 h-[28rem] w-[28rem] rounded-full bg-orange-500/10 blur-[120px]"
                />
                {/* Edge accent rules */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-16 left-4 w-px bg-gradient-to-b from-transparent via-orange-500/55 to-transparent"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-16 right-4 w-px bg-gradient-to-b from-transparent via-orange-500/55 to-transparent"
                />

                {/* Top: logo + drawing-ref */}
                <div className="relative flex items-start justify-between p-10 lg:p-14">
                    <Link
                        href="/"
                        className="inline-flex h-14 items-center bg-surface-0 px-4 shadow-[0_12px_28px_-12px_rgba(0,0,0,0.45)] ring-1 ring-ink-900/5"
                    >
                        <img
                            src="/images/logo.jpg"
                            alt="Felymas Consultants International"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-surface-0/60">
                        DRG. N&deg; FCI/2025
                    </span>
                </div>

                {/* Middle: editorial line */}
                <div className="relative flex-1 px-10 pb-10 lg:px-14 lg:pb-14">
                    <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-surface-0">
                        <span className="mr-3 inline-block h-px w-10 align-middle bg-orange-500" />
                        Admin &middot; Felymas Consultants
                    </p>
                    <h2 className="mt-8 max-w-md font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                        Manage the work.{' '}
                        <span className="text-orange-500">Update the practice.</span>
                    </h2>
                    <p className="mt-6 max-w-sm text-base leading-relaxed text-surface-0/75">
                        Sign in to manage projects, services, team profiles,
                        partners, and the practice's public-facing content.
                    </p>
                </div>

                {/* Bottom: small footer line */}
                <div className="relative flex items-center justify-between border-t border-surface-0/10 px-10 py-6 font-mono text-[10px] uppercase tracking-[0.22em] text-surface-0/40 lg:px-14">
                    <span>1 Harvey Brown Ave &middot; Harare</span>
                    <span>&copy; {new Date().getFullYear()}</span>
                </div>
            </div>

            {/* Form panel */}
            <div className="flex min-h-screen flex-col bg-surface-0">
                {/* Mobile-only top brand bar */}
                <div className="border-b border-ink-900/10 bg-ink-900 px-6 py-5 text-surface-0 lg:hidden">
                    <Link
                        href="/"
                        className="inline-flex h-11 items-center bg-surface-0 px-3 shadow-[0_4px_18px_rgba(11,18,32,0.2)] ring-1 ring-ink-900/5"
                    >
                        <img
                            src="/images/logo.jpg"
                            alt="Felymas Consultants International"
                            className="h-8 w-auto object-contain"
                        />
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-center px-6 py-12 sm:py-16 lg:px-12">
                    <div className="w-full max-w-md">{children}</div>
                </div>

                {/* Form panel bottom hint */}
                <div className="border-t border-ink-900/10 bg-surface-50 px-6 py-5 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500 lg:px-12">
                    <Link href="/" className="transition hover:text-orange-500">
                        &larr; Back to felymas.com
                    </Link>
                </div>
            </div>
        </div>
    );
}
