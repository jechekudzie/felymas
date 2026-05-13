import { Head, Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import CtaBand from '@/Components/public/CtaBand';
import Hero from '@/Components/public/Hero';
import LogoGrid from '@/Components/public/LogoGrid';
import ProjectTile from '@/Components/public/ProjectTile';
import Reveal from '@/Components/public/Reveal';
import SectionHeading from '@/Components/public/SectionHeading';
import ServiceCard from '@/Components/public/ServiceCard';
import StatStrip from '@/Components/public/StatStrip';
import TeamCard from '@/Components/public/TeamCard';
import PublicLayout from '@/Layouts/PublicLayout';
import type {
    PartnerLogo,
    Project,
    Service,
    Slide,
    TeamMember,
} from '@/types/public';

type HomeProps = {
    hero: Slide;
    services: Service[];
    projects: Project[];
    members: TeamMember[];
    partners: PartnerLogo[];
};

export default function Home({
    hero,
    services,
    projects,
    members,
    partners,
}: HomeProps) {
    const featuredProjects = projects.slice(0, 6);
    const featuredTeam = members.slice(0, 3);
    const tileSizes: Array<'tall' | 'wide' | 'square'> = [
        'tall',
        'wide',
        'square',
        'square',
        'wide',
        'tall',
    ];

    return (
        <PublicLayout overHero>
            <Head title="Felymas Consultants — Construction & engineering across Zimbabwe and South Africa" />

            <Hero
                image={hero.image}
                eyebrow="Felymas Consultants International"
                headline="We build, manage, and deliver across Zimbabwe and beyond."
                sub="A construction and engineering consultancy partnering with diaspora investors, commercial clients, and institutions on projects that have to land — on time, on budget, on the brief."
            />

            {/* About strip */}
            <section id="about" className="bg-surface-0 py-24 md:py-32">
                <div className="wrap grid gap-16 md:grid-cols-12 md:gap-12 lg:gap-20">
                    <Reveal className="md:col-span-5">
                        <p className="eyebrow">01 &middot; The practice</p>
                        <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 md:text-5xl lg:text-6xl">
                            A consultancy built around <span className="text-orange-500">finished buildings</span>, not promises.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
                        <p className="text-lg leading-relaxed text-ink-700">
                            Felymas Consultants International leads construction,
                            project management, and technical advisory work across
                            Zimbabwe and South Africa. We work with diaspora
                            investors, commercial developers, and institutional
                            clients on the kinds of projects where success isn&rsquo;t
                            optional — and where the team behind the work has to
                            be every bit as serious as the work itself.
                        </p>
                        <p className="mt-6 text-lg leading-relaxed text-ink-700">
                            From early-stage feasibility through handover, our
                            registered engineers and project managers run jobs
                            transparently — with the kind of documentation,
                            reporting, and quality control that earns repeat
                            commissions and keeps remote clients sleeping at
                            night.
                        </p>
                        <Link
                            href="/about"
                            className="mt-10 inline-flex items-center gap-3 border-b-2 border-orange-500 pb-1 font-mono text-xs uppercase tracking-[0.22em] text-ink-900 transition hover:text-orange-500"
                        >
                            More about the practice
                            <ArrowRight size={16} />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <StatStrip />

            {/* Services */}
            <section id="services" className="bg-surface-0 py-24 md:py-32">
                <div className="wrap">
                    <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                        <SectionHeading
                            eyebrow="02 · What we do"
                            title={
                                <>
                                    Four disciplines.{' '}
                                    <span className="text-orange-500">One signature.</span>
                                </>
                            }
                            intro="Project management, construction, advisory, and logistics — delivered by an integrated team that owns the outcome end-to-end."
                            className="max-w-2xl"
                        />
                        <Link
                            href="/service"
                            className="inline-flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-900 transition hover:text-orange-500"
                        >
                            All services
                            <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        {services.map((service, idx) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                index={idx}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured projects — asymmetric grid */}
            <section id="work" className="bg-surface-50 py-24 md:py-32">
                <div className="wrap">
                    <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                        <SectionHeading
                            eyebrow="03 · Recent work"
                            title={
                                <>
                                    Selected{' '}
                                    <span className="text-orange-500">projects.</span>
                                </>
                            }
                            intro="A cross-section of completed and current commissions across residential, commercial, and institutional sectors."
                            className="max-w-2xl"
                        />
                    </div>

                    <div className="mt-16 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[auto] lg:gap-5">
                        {featuredProjects.map((project, idx) => (
                            <ProjectTile
                                key={project.id}
                                project={project}
                                index={idx}
                                size={tileSizes[idx] ?? 'square'}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Team teaser */}
            {featuredTeam.length > 0 && (
                <section className="bg-surface-0 py-24 md:py-32">
                    <div className="wrap">
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                            <SectionHeading
                                eyebrow="04 · The team"
                                title={
                                    <>
                                        Led by{' '}
                                        <span className="text-orange-500">registered engineers.</span>
                                    </>
                                }
                                intro="Multi-disciplinary specialists across project management, civil engineering, and quantity surveying — answerable for every commitment they make."
                                className="max-w-2xl"
                            />
                            <Link
                                href="/our_team"
                                className="inline-flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-900 transition hover:text-orange-500"
                            >
                                Meet the team
                                <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            {featuredTeam.map((member, idx) => (
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

            {/* Partners */}
            {partners.length > 0 && (
                <section className="bg-surface-50 py-24 md:py-32">
                    <div className="wrap">
                        <SectionHeading
                            eyebrow="05 · In good company"
                            title={
                                <>
                                    Trusted by clients and{' '}
                                    <span className="text-orange-500">partners</span> across sectors.
                                </>
                            }
                            className="max-w-3xl"
                        />
                        <div className="mt-16">
                            <LogoGrid partners={partners} />
                        </div>
                    </div>
                </section>
            )}

            <CtaBand
                title="Have a project that has to land?"
                body="Tell us about it. Short engagements, long programs, single-stage advisory or full delivery — we'll tell you in a first call whether we can help."
                cta={{ label: 'Start a project', href: '/contact' }}
            />
        </PublicLayout>
    );
}
