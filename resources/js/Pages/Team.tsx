import { Head } from '@inertiajs/react';
import CtaBand from '@/Components/public/CtaBand';
import PageHero from '@/Components/public/PageHero';
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

            <PageHero
                eyebrow="03 · The team"
                title="Named engineers. Real credentials."
                accent="Answerable for every commitment."
                intro="A multi-disciplinary practice led by registered engineers, project managers, and quantity surveyors. Every commission is steered by a named senior — not a junior checking back with someone unseen."
            />

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
                <section className="bg-surface-0 py-16 sm:py-24 md:py-32">
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
