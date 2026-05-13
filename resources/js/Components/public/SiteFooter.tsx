import { Link, usePage } from '@inertiajs/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { CompanyInfo } from '@/types/public';

function LinkedInIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.45 20.45h-3.56v-5.56c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.65H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
        </svg>
    );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z" />
        </svg>
    );
}

type SharedFooterProps = {
    company: CompanyInfo;
};

const FOOTER_NAV = [
    {
        title: 'Practice',
        links: [
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/service' },
            { label: 'Team', href: '/our_team' },
        ],
    },
    {
        title: 'Work',
        links: [
            { label: 'Projects', href: '/#work' },
            { label: 'Journal', href: '/blog' },
            { label: 'Gallery', href: '/gallery' },
        ],
    },
    {
        title: 'Connect',
        links: [
            { label: 'Contact', href: '/contact' },
            { label: 'Admin', href: '/login' },
        ],
    },
];

export default function SiteFooter() {
    const page = usePage();
    const company = (page.props as unknown as SharedFooterProps).company;

    return (
        <footer className="bg-ink-900 text-surface-0">
            <div className="wrap py-20 md:py-28">
                <div className="grid gap-16 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-surface-0/60">
                            Felymas Consultants International
                        </p>
                        <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                            Let&rsquo;s build something <span className="text-orange-500">that lasts.</span>
                        </h2>
                        <Link
                            href="/contact"
                            className="mt-10 inline-flex items-center gap-3 border-b-2 border-orange-500 pb-1 font-mono text-xs uppercase tracking-[0.22em] text-surface-0 transition hover:text-orange-500"
                        >
                            Start a project
                            <span aria-hidden>&rarr;</span>
                        </Link>
                    </div>

                    <div className="grid gap-10 md:col-span-7 md:grid-cols-3">
                        {FOOTER_NAV.map((group) => (
                            <div key={group.title}>
                                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-surface-0/40">
                                    {group.title}
                                </p>
                                <ul className="mt-5 space-y-3">
                                    {group.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-surface-0/85 transition-colors hover:text-orange-500"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 grid gap-10 border-t border-surface-0/10 pt-12 md:grid-cols-3">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-surface-0/40">
                            Studio
                        </p>
                        <div className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-surface-0/80">
                            <MapPin size={16} className="mt-0.5 shrink-0 text-orange-500" />
                            <span>
                                {company.address.map((line, idx) => (
                                    <span key={idx} className="block">
                                        {line}
                                    </span>
                                ))}
                            </span>
                        </div>
                    </div>
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-surface-0/40">
                            Reach us
                        </p>
                        <div className="mt-4 space-y-2 text-sm text-surface-0/80">
                            <a
                                href={`mailto:${company.email}`}
                                className="flex items-center gap-3 transition hover:text-orange-500"
                            >
                                <Mail size={16} className="text-orange-500" />
                                {company.email}
                            </a>
                            {company.phone.map((p) => (
                                <a
                                    key={p}
                                    href={`tel:${p.replace(/\s+/g, '')}`}
                                    className="flex items-center gap-3 transition hover:text-orange-500"
                                >
                                    <Phone size={16} className="text-orange-500" />
                                    {p}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-surface-0/40">
                            Follow
                        </p>
                        <div className="mt-4 flex gap-3">
                            {company.social.linkedin && (
                                <a
                                    href={company.social.linkedin}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-0/20 text-surface-0/80 transition hover:border-orange-500 hover:text-orange-500"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedInIcon />
                                </a>
                            )}
                            {company.social.facebook && (
                                <a
                                    href={company.social.facebook}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-0/20 text-surface-0/80 transition hover:border-orange-500 hover:text-orange-500"
                                    aria-label="Facebook"
                                >
                                    <FacebookIcon />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-surface-0/10 pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-surface-0/40 md:flex-row md:items-center">
                    <p>&copy; {new Date().getFullYear()} Felymas Consultants International. All rights reserved.</p>
                    <p>Harare &middot; Johannesburg</p>
                </div>
            </div>
        </footer>
    );
}
