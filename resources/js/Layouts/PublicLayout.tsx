import type { ReactNode } from 'react';
import SiteFooter from '@/Components/public/SiteFooter';
import SiteHeader from '@/Components/public/SiteHeader';

type PublicLayoutProps = {
    children: ReactNode;
    /** Render the header transparent over a dark hero. */
    overHero?: boolean;
};

export default function PublicLayout({
    children,
    overHero = false,
}: PublicLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-surface-0">
            <SiteHeader overHero={overHero} />
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
    );
}
