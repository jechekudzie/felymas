import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
    { label: 'Work', href: '/#work' },
    { label: 'Services', href: '/service' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/our_team' },
    { label: 'Journal', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

export default function SiteHeader({ overHero = false }: { overHero?: boolean }) {
    const { url } = usePage();
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
                    scrolled
                        ? 'bg-surface-0/90 backdrop-blur-md shadow-[0_1px_0_rgba(11,18,32,0.06)]'
                        : 'bg-transparent',
                )}
            >
                <div className="wrap flex h-20 items-center justify-between md:h-24">
                    <Link href="/" className="group flex items-baseline gap-3">
                        <span
                            className={clsx(
                                'font-display text-xl font-bold tracking-tight transition-colors md:text-2xl',
                                onDark ? 'text-surface-0' : 'text-ink-900',
                            )}
                        >
                            FELYMAS
                        </span>
                        <span
                            className={clsx(
                                'hidden font-mono text-[10px] uppercase tracking-[0.22em] transition-colors md:inline',
                                onDark ? 'text-surface-0/70' : 'text-ink-500',
                            )}
                        >
                            Consultants Int.
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-8 lg:flex">
                        {NAV_ITEMS.map((item) => {
                            const active =
                                item.href === url ||
                                (item.href !== '/' && url.startsWith(item.href));
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={clsx(
                                        'font-mono text-[11px] uppercase tracking-[0.22em] transition-colors hover:text-orange-500',
                                        onDark
                                            ? 'text-surface-0/85 hover:text-orange-500'
                                            : 'text-ink-700',
                                        active && 'text-orange-500',
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-full bg-orange-500 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-surface-0 transition hover:bg-orange-600"
                        >
                            Start a project
                        </Link>
                    </nav>

                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className={clsx(
                            'inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden',
                            onDark
                                ? 'border-surface-0/30 text-surface-0 hover:border-surface-0/70'
                                : 'border-ink-300 text-ink-900 hover:border-ink-900',
                        )}
                        aria-label="Open menu"
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </header>

            {/* Mobile overlay menu */}
            <div
                className={clsx(
                    'fixed inset-0 z-[60] bg-ink-900 text-surface-0 transition-opacity duration-500 lg:hidden',
                    open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
                )}
            >
                <div className="wrap flex h-20 items-center justify-between md:h-24">
                    <span className="font-display text-xl font-bold tracking-tight">
                        FELYMAS
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
                            style={{
                                transitionDelay: `${idx * 40}ms`,
                            }}
                        >
                            {String(idx + 1).padStart(2, '0')}. {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="wrap mt-12">
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-surface-0 transition hover:bg-orange-600"
                    >
                        Start a project
                    </Link>
                </div>
            </div>
        </>
    );
}
