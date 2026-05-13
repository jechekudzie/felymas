import { Head } from '@inertiajs/react';
import CtaBand from '@/Components/public/CtaBand';
import Reveal from '@/Components/public/Reveal';
import TeamCard from '@/Components/public/TeamCard';
import PublicLayout from '@/Layouts/PublicLayout';
import type { TeamMember } from '@/types/public';

type TeamProps = {
    members: TeamMember[];
};

export default function Team({ members }: TeamProps) {
    const lead = members[0];
    const rest = members.slice(1);

    return (
        <PublicLayout>
            <Head title="Team — Felymas Consultants International" />

            <section className="bg-surface-0 pb-24 pt-40 md:pb-32 md:pt-48">
                <div className="wrap">
                    <Reveal>
                        <p className="eyebrow">The team</p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink-900 md:text-6xl lg:text-7xl">
                            Named engineers.{' '}
                            <span className="text-orange-500">Real credentials.</span>{' '}
                            Answerable for every commitment.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-700">
                            We&rsquo;re a multi-disciplinary practice led by registered
                            engineers, project managers, and quantity surveyors. Every
                            commission is steered by a named senior — not a junior
                            checking back with someone unseen.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Lead */}
            {lead && (
                <section className="bg-surface-50 py-20 md:py-24">
                    <div className="wrap grid gap-12 md:grid-cols-12 md:gap-16">
                        <Reveal as="figure" className="md:col-span-5">
                            <div className="aspect-[4/5] overflow-hidden bg-surface-100">
                                <img
                                    src={lead.image}
                                    alt={lead.name}
                                    className="h-full w-full object-cover grayscale transition duration-1000 hover:grayscale-0"
                                    loading="lazy"
                                />
                            </div>
                        </Reveal>
                        <Reveal delay={0.1} className="flex flex-col justify-center md:col-span-6 md:col-start-7">
                            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-orange-500">
                                {lead.position}
                            </p>
                            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 md:text-5xl lg:text-6xl">
                                {lead.name}
                            </h2>
                            {lead.qualification && (
                                <p className="mt-6 font-mono text-sm uppercase tracking-[0.18em] text-ink-500">
                                    {lead.qualification}
                                </p>
                            )}
                            {lead.description && (
                                <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-700">
                                    {lead.description}
                                </p>
                            )}
                        </Reveal>
                    </div>
                </section>
            )}

            {/* Rest of team */}
            {rest.length > 0 && (
                <section className="bg-surface-0 py-24 md:py-32">
                    <div className="wrap">
                        <Reveal>
                            <p className="eyebrow">Practice</p>
                            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl">
                                The wider team.
                            </h2>
                        </Reveal>
                        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                            {rest.map((member, idx) => (
                                <TeamCard
                                    key={member.id}
                                    member={member}
                                    index={idx}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CtaBand
                eyebrow="Join us"
                title="Engineering talent, get in touch."
                body="We're always interested in hearing from engineers, project managers, and graduates who want to work on real projects."
                cta={{ label: 'Send your CV', href: '/contact' }}
            />
        </PublicLayout>
    );
}
