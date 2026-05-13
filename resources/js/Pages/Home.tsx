import { Head, Link } from '@inertiajs/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import CtaBand from '@/Components/public/CtaBand';
import Hero from '@/Components/public/Hero';
import LogoGrid from '@/Components/public/LogoGrid';
import ProjectPreviewModal from '@/Components/public/ProjectPreviewModal';
import ProjectTile from '@/Components/public/ProjectTile';
import Reveal from '@/Components/public/Reveal';
import SectionHeading from '@/Components/public/SectionHeading';
import ServiceCard from '@/Components/public/ServiceCard';
import StatStrip from '@/Components/public/StatStrip';
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
    const [activeProject, setActiveProject] = useState<Project | null>(null);
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
            <section id="about" className="bg-surface-0 py-16 sm:py-24 md:py-32">
                <div className="wrap grid gap-16 md:grid-cols-12 md:gap-12 lg:gap-20">
                    <Reveal className="md:col-span-5">
                        <p className="eyebrow">
                            <span className="mr-2 inline-block h-2 w-2 align-middle bg-orange-500" />
                            01 &middot; The practice
                        </p>
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
            <section id="services" className="bg-surface-0 py-16 sm:py-24 md:py-32">
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

            {/* Featured projects — click to open preview modal */}
            <section id="work" className="relative bg-surface-50 py-16 sm:py-24 md:py-32">
                {/* Blueprint grid background */}
                <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.35]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(11,18,32,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(11,18,32,0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="relative wrap">
                    <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                        <SectionHeading
                            eyebrow="03 · Recent work"
                            title={
                                <>
                                    Selected{' '}
                                    <span className="text-orange-500">projects.</span>
                                </>
                            }
                            intro="A cross-section of completed and current commissions. Click any tile for a quick preview, or open the full case study."
                            className="max-w-2xl"
                        />
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-500">
                            <span className="mr-2 inline-block h-2 w-2 align-middle bg-orange-500" />
                            {featuredProjects.length.toString().padStart(2, '0')} projects shown
                        </p>
                    </div>

                    <div className="mt-16 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[auto] lg:gap-5">
                        {featuredProjects.map((project, idx) => (
                            <ProjectTile
                                key={project.id}
                                project={project}
                                index={idx}
                                size={tileSizes[idx] ?? 'square'}
                                onSelect={(p) => setActiveProject(p)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Team teaser — editorial photo tiles with overlay */}
            {featuredTeam.length > 0 && (
                <section className="bg-surface-0 py-16 sm:py-24 md:py-32">
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

                        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                            {featuredTeam.map((member, idx) => (
                                <Reveal
                                    key={member.id}
                                    delay={idx * 0.06}
                                    className="group relative overflow-hidden bg-ink-900"
                                >
                                    <div className="relative aspect-[5/6] w-full overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] group-hover:grayscale-0"
                                            style={{ backgroundImage: `url(${member.image})` }}
                                        />
                                        <div
                                            aria-hidden
                                            className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/45 to-ink-900/10"
                                        />
                                        {/* Construction-style index badge */}
                                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink-900/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-surface-0/90 backdrop-blur-sm">
                                            <span className="inline-block h-1 w-1 bg-orange-500" />
                                            N&deg; {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        {/* Overlay text — always visible, in white */}
                                        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                                            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-orange-500">
                                                {member.position}
                                            </p>
                                            <h3 className="mt-2 font-display text-lg font-bold leading-tight tracking-tight text-surface-0 [text-shadow:0_1px_12px_rgba(11,18,32,0.6)] md:text-xl">
                                                {member.name}
                                            </h3>
                                            {member.qualification && (
                                                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-surface-0/85">
                                                    {member.qualification}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Partners */}
            {partners.length > 0 && (
                <section className="bg-surface-50 py-16 sm:py-24 md:py-32">
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

            {/* Project preview modal — opens when a tile is clicked */}
            <ProjectPreviewModal
                project={activeProject}
                onClose={() => setActiveProject(null)}
            />
        </PublicLayout>
    );
}
