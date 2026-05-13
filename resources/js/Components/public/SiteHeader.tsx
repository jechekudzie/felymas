import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';
import { Clock, Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { CompanyInfo } from '@/types/public';

const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/service' },
    { label: 'Team', href: '/our_team' },
    { label: 'Contact', href: '/contact' },
];

function LinkedInIcon({ size = 14 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.45 20.45h-3.56v-5.56c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.65H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
        </svg>
    );
}

function FacebookIcon({ size = 14 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z" />
        </svg>
    );
}

type SharedHeaderProps = {
    company: CompanyInfo;
};

export default function SiteHeader({ overHero = false }: { overHero?: boolean }) {
    const page = usePage();
    const url = page.url;
    const company = (page.props as unknown as SharedHeaderProps).company;
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const onDark = overHero && !scrolled;

    return (
        <>
            <header
                className={clsx(
                    'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                )}
            >
                {/* ─── Top utility bar ─── */}
                <div
                    className={clsx(
                        'overflow-hidden bg-ink-900 text-surface-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                        scrolled
                            ? 'pointer-events-none max-h-0 opacity-0'
                            : 'max-h-16 opacity-100',
                    )}
                >
                    <div className="wrap flex h-11 items-center justify-between gap-6 text-[11px] font-medium md:h-12">
                        {/* Left: phone + hours */}
                        <div className="flex items-center gap-8">
                            {company.phone[0] && (
                                <a
                                    href={`tel:${company.phone[0].replace(/\s+/g, '')}`}
                                    className="inline-flex items-center gap-2 transition hover:text-orange-500"
                                >
                                    <Phone size={13} className="text-orange-500" />
                                    <span className="font-mono whitespace-nowrap uppercase tracking-[0.18em] text-surface-0/90">
                                        {company.phone[0]}
                                    </span>
                                </a>
                            )}
                            <span className="hidden items-center gap-2 md:inline-flex">
                                <Clock size={13} className="text-orange-500" />
                                <span className="font-mono whitespace-nowrap uppercase tracking-[0.18em] text-surface-0/75">
                                    Mon&ndash;Fri &middot; 08:00&ndash;17:00 CAT
                                </span>
                            </span>
                        </div>

                        {/* Right: social */}
                        <div className="flex items-center gap-1.5">
                            {company.social.linkedin && (
                                <a
                                    href={company.social.linkedin}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="LinkedIn"
                                    className="inline-flex h-7 w-7 items-center justify-center rounded-full text-surface-0/75 transition hover:bg-surface-0/10 hover:text-orange-500"
                                >
                                    <LinkedInIcon />
                                </a>
                            )}
                            {company.social.facebook && (
                                <a
                                    href={company.social.facebook}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="Facebook"
                                    className="inline-flex h-7 w-7 items-center justify-center rounded-full text-surface-0/75 transition hover:bg-surface-0/10 hover:text-orange-500"
                                >
                                    <FacebookIcon />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Thin orange construction-rule */}
                <div aria-hidden className="h-0.5 w-full bg-orange-500" />

                {/* ─── Main nav row ─── */}
                <div
                    className={clsx(
                        'relative transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                        scrolled
                            ? 'bg-surface-0/95 backdrop-blur-md shadow-[0_1px_0_rgba(11,18,32,0.08)]'
                            : onDark
                              ? 'bg-transparent'
                              : 'bg-surface-0',
                    )}
                >
                    <div className="wrap flex h-20 items-center justify-between gap-6 md:h-24">
                        {/* Logo — sits on a lifted white plate, vertically centred with the menu */}
                        <Link
                            href="/"
                            className="group relative z-20 inline-flex shrink-0 items-center"
                            aria-label="Felymas Consultants International — home"
                        >
                            <span
                                className={clsx(
                                    'inline-flex items-center bg-surface-0 px-3 transition-all duration-500 md:px-4',
                                    'h-14 md:h-16',
                                    'shadow-[0_12px_28px_-12px_rgba(11,18,32,0.25)]',
                                    'ring-1 ring-ink-900/5',
                                )}
                            >
                                <img
                                    src="/images/logo.jpg"
                                    alt="Felymas Consultants International"
                                    className="h-9 w-auto object-contain md:h-11"
                                />
                            </span>
                        </Link>

                        {/* Center pill nav */}
                        <nav className="hidden lg:flex">
                            <ul
                                className={clsx(
                                    'flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500',
                                    onDark
                                        ? 'border border-surface-0/25 bg-ink-900/40 backdrop-blur-md'
                                        : 'border border-ink-900/10 bg-surface-0',
                                )}
                            >
                                {NAV_ITEMS.map((item) => {
                                    const active =
                                        item.href === url ||
                                        (item.href !== '/' && url.startsWith(item.href));
                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className={clsx(
                                                    'inline-flex items-center rounded-full px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] transition-all',
                                                    active
                                                        ? 'bg-orange-500 text-surface-0'
                                                        : onDark
                                                          ? 'text-surface-0 hover:bg-surface-0/15'
                                                          : 'text-ink-700 hover:bg-surface-50 hover:text-ink-900',
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* Right CTAs */}
                        <div className="hidden shrink-0 items-center gap-2 lg:flex">
                            <Link
                                href="/contact"
                                className={clsx(
                                    'inline-flex shrink-0 items-center whitespace-nowrap rounded-full border px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] transition-all',
                                    onDark
                                        ? 'border-surface-0/40 bg-surface-0/10 text-surface-0 backdrop-blur-sm hover:border-surface-0 hover:bg-surface-0 hover:text-ink-900'
                                        : 'border-ink-900/15 bg-surface-0 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-surface-0',
                                )}
                            >
                                Get a quote
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-orange-500 px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-surface-0 shadow-[0_4px_18px_rgba(242,103,34,0.35)] transition hover:bg-orange-600"
                            >
                                Start a project
                            </Link>
                        </div>

                        {/* Mobile menu trigger */}
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className={clsx(
                                'inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden',
                                onDark
                                    ? 'border-surface-0/40 bg-surface-0/10 text-surface-0 backdrop-blur-sm hover:border-surface-0'
                                    : 'border-ink-300 text-ink-900 hover:border-ink-900',
                            )}
                            aria-label="Open menu"
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile overlay menu */}
            <div
                className={clsx(
                    'fixed inset-0 z-[60] flex flex-col bg-ink-900 text-surface-0 transition-opacity duration-500 lg:hidden',
                    open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
                )}
            >
                <div className="wrap flex h-20 items-center justify-between md:h-24">
                    <span className="inline-flex h-12 items-center bg-surface-0 px-3 md:h-14">
                        <img
                            src="/images/logo.jpg"
                            alt="Felymas Consultants International"
                            className="h-8 w-auto object-contain md:h-10"
                        />
                    </span>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-0/30 transition hover:border-surface-0"
                        aria-label="Close menu"
                    >
                        <X size={20} />
                    </button>
                </div>
                <nav className="wrap mt-12 flex flex-col gap-6">
                    {NAV_ITEMS.map((item, idx) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block font-display text-4xl font-bold tracking-tight transition-colors hover:text-orange-500 sm:text-5xl"
                        >
                            <span className="font-mono text-base text-orange-500">
                                {String(idx + 1).padStart(2, '0')}.
                            </span>{' '}
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="wrap mt-auto pb-12">
                    <div className="space-y-3 border-t border-surface-0/10 pt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-surface-0/70">
                        {company.phone[0] && (
                            <a
                                href={`tel:${company.phone[0].replace(/\s+/g, '')}`}
                                className="flex items-center gap-3"
                            >
                                <Phone size={14} className="text-orange-500" />
                                {company.phone[0]}
                            </a>
                        )}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center rounded-full border border-surface-0/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-surface-0 transition hover:border-surface-0"
                        >
                            Get a quote
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-surface-0 transition hover:bg-orange-600"
                        >
                            Start a project
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
