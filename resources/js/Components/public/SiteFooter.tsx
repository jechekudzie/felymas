import { Link, usePage } from '@inertiajs/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { CompanyInfo } from '@/types/public';

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

type SharedFooterProps = {
    company: CompanyInfo;
};

export default function SiteFooter() {
    const page = usePage();
    const company = (page.props as unknown as SharedFooterProps).company;

    return (
        <footer className="bg-ink-900 text-surface-0">
            {/* Orange construction-rule on top */}
            <div aria-hidden className="h-0.5 w-full bg-orange-500" />

            <div className="wrap py-10 md:py-12">
                <div className="grid items-start gap-10 md:grid-cols-12 md:gap-8">
                    {/* Brand + nav */}
                    <div className="md:col-span-7">
                        <div className="flex items-center gap-4">
                            <span className="inline-flex h-10 items-center bg-surface-0 px-2.5">
                                <img
                                    src="/images/logo.jpg"
                                    alt="Felymas Consultants International"
                                    className="h-6 w-auto object-contain"
                                />
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-surface-0/60">
                                Consultants Int. &middot; Harare &middot; Johannesburg
                            </span>
                        </div>

                        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.22em] text-surface-0/80">
                            <Link href="/" className="transition hover:text-orange-500">Home</Link>
                            <Link href="/service" className="transition hover:text-orange-500">Services</Link>
                            <Link href="/about" className="transition hover:text-orange-500">About</Link>
                            <Link href="/our_team" className="transition hover:text-orange-500">Team</Link>
                            <Link href="/gallery" className="transition hover:text-orange-500">Gallery</Link>
                            <Link href="/contact" className="transition hover:text-orange-500">Contact</Link>
                        </nav>
                    </div>

                    {/* Contact strip */}
                    <div className="grid gap-4 md:col-span-5 md:text-right">
                        <a
                            href={`mailto:${company.email}`}
                            className="inline-flex items-center gap-3 text-sm text-surface-0/85 transition hover:text-orange-500 md:justify-end"
                        >
                            <Mail size={14} className="text-orange-500" />
                            {company.email}
                        </a>
                        {company.phone[0] && (
                            <a
                                href={`tel:${company.phone[0].replace(/\s+/g, '')}`}
                                className="inline-flex items-center gap-3 text-sm text-surface-0/85 transition hover:text-orange-500 md:justify-end"
                            >
                                <Phone size={14} className="text-orange-500" />
                                {company.phone[0]}
                            </a>
                        )}
                        <span className="inline-flex items-start gap-3 text-sm text-surface-0/85 md:justify-end">
                            <MapPin size={14} className="mt-1 shrink-0 text-orange-500" />
                            <span>{company.address.join(', ')}</span>
                        </span>

                        <div className="flex gap-2 md:justify-end">
                            {company.social.linkedin && (
                                <a
                                    href={company.social.linkedin}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-surface-0/20 text-surface-0/80 transition hover:border-orange-500 hover:text-orange-500"
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
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-surface-0/20 text-surface-0/80 transition hover:border-orange-500 hover:text-orange-500"
                                    aria-label="Facebook"
                                >
                                    <FacebookIcon />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-2 border-t border-surface-0/10 pt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-surface-0/40 sm:flex-row sm:items-center sm:justify-between">
                    <p>&copy; {new Date().getFullYear()} Felymas Consultants International. All rights reserved.</p>
                    <p>
                        Developed by{' '}
                        <a
                            href="https://leadingdigital.africa"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-surface-0/70 transition hover:text-orange-500"
                        >
                            Leading Digital
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
