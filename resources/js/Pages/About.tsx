import { Head } from '@inertiajs/react';
import CtaBand from '@/Components/public/CtaBand';
import LogoGrid from '@/Components/public/LogoGrid';
import PageHero from '@/Components/public/PageHero';
import Reveal from '@/Components/public/Reveal';
import SectionHeading from '@/Components/public/SectionHeading';
import TeamCard from '@/Components/public/TeamCard';
import PublicLayout from '@/Layouts/PublicLayout';
import type {
    PartnerLogo,
    Statement,
    TeamMember,
} from '@/types/public';

type AboutProps = {
    about: Statement | null;
    vision: Statement | null;
    mission: Statement | null;
    partners: PartnerLogo[];
    members: TeamMember[];
};

function decodeHtml(html: string) {
    if (typeof window === 'undefined') return html.replace(/&nbsp;/g, ' ');
    const ta = document.createElement('textarea');
    ta.innerHTML = html;
    return ta.value;
}

function plainText(html: string | undefined | null): string {
    if (!html) return '';
    return decodeHtml(html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
}

/**
 * Split a long paragraph into 2–3 sentence chunks for editorial readability,
 * stripping a leading "ABOUT … " all-caps label if present.
 */
function splitIntoParagraphs(text: string, sentencesPerPara = 3): string[] {
    if (!text) return [];
    // strip an opening "ABOUT FELYMAS …" label
    const cleaned = text.replace(/^ABOUT [A-Z &]+(?:INTERNATIONAL)?\.?\s+/i, '');
    const sentences = cleaned.match(/[^.!?]+[.!?]+/g) || [cleaned];
    const paras: string[] = [];
    for (let i = 0; i < sentences.length; i += sentencesPerPara) {
        paras.push(sentences.slice(i, i + sentencesPerPara).join(' ').trim());
    }
    return paras;
}

export default function About({
    about,
    vision,
    mission,
    partners,
    members,
}: AboutProps) {
    const aboutText = plainText(about?.description);
    const visionText = plainText(vision?.description);
    const missionText = plainText(mission?.description);
    const leadership = members.slice(0, 4);
    const paragraphs = splitIntoParagraphs(aboutText, 3);
    const lead = paragraphs[0];
    const body = paragraphs.slice(1);

    return (
        <PublicLayout>
            <Head title="About — Felymas Consultants International" />

            <PageHero
                eyebrow="01 · The practice"
                title="Built for clients who need their projects to"
                accent="land — and stay landed."
                intro="Felymas Consultants International is a multi-disciplinary construction and engineering consultancy with active work across Zimbabwe and South Africa. We were founded on a simple belief: good projects require equal parts technical rigour and plain-spoken client communication."
            />

            {/* Long-form body — heading row, then 2-column text flow with a drop cap */}
            {paragraphs.length > 0 && (
                <section className="bg-surface-0 py-16 sm:py-24 md:py-32">
                    <div className="wrap">
                        <Reveal className="max-w-3xl">
                            <p className="eyebrow">
                                <span className="mr-2 inline-block h-2 w-2 align-middle bg-orange-500" />
                                Who we are
                            </p>
                            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink-900 md:text-4xl lg:text-5xl">
                                Engineers, project managers, and quantity surveyors — under one roof.
                            </h2>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="mt-12 max-w-5xl border-t border-ink-900/10 pt-10 md:columns-2 md:gap-12">
                                {paragraphs.map((para, idx) => (
                                    <p
                                        key={idx}
                                        className={`mb-5 break-inside-avoid text-base leading-relaxed text-ink-700 md:text-lg ${
                                            idx === 0
                                                ? 'first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-orange-500 sm:first-letter:mr-3 sm:first-letter:text-6xl md:first-letter:text-7xl'
                                                : ''
                                        }`}
                                    >
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>
            )}

            {/* Vision + Mission */}
            <section className="bg-surface-50 py-16 sm:py-24 md:py-32">
                <div className="wrap">
                    <SectionHeading
                        eyebrow="Compass"
                        title={
                            <>
                                What we aim for, and{' '}
                                <span className="text-orange-500">how we get there.</span>
                            </>
                        }
                        className="max-w-3xl"
                    />

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-10">
                        <Reveal className="rounded-md bg-surface-0 p-10 shadow-[0_1px_0_rgba(11,18,32,0.06)] md:p-12">
                            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-orange-500">
                                Vision
                            </p>
                            <h3 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl">
                                {visionText.length > 220
                                    ? visionText.slice(0, 220).trim() + '…'
                                    : visionText ||
                                      'A reliable, cost-effective project management and construction partner — locally and beyond.'}
                            </h3>
                        </Reveal>

                        <Reveal
                            delay={0.1}
                            className="rounded-md bg-ink-900 p-10 text-surface-0 shadow-[0_1px_0_rgba(11,18,32,0.06)] md:p-12"
                        >
                            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-orange-500">
                                Mission
                            </p>
                            <h3 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                                {missionText.length > 240
                                    ? missionText.slice(0, 240).trim() + '…'
                                    : missionText ||
                                      'Quality building construction services for clients of every scale — at a favourable cost.'}
                            </h3>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            {leadership.length > 0 && (
                <section className="bg-surface-0 py-16 sm:py-24 md:py-32">
                    <div className="wrap">
                        <SectionHeading
                            eyebrow="Leadership"
                            title={
                                <>
                                    The people{' '}
                                    <span className="text-orange-500">answerable</span> for the work.
                                </>
                            }
                            className="max-w-3xl"
                        />
                        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                            {leadership.map((member, idx) => (
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
                <section className="bg-surface-50 py-16 sm:py-24 md:py-32">
                    <div className="wrap">
                        <SectionHeading
                            eyebrow="Clients & partners"
                            title={
                                <>
                                    In good{' '}
                                    <span className="text-orange-500">company.</span>
                                </>
                            }
                            className="max-w-2xl"
                        />
                        <div className="mt-16">
                            <LogoGrid partners={partners} />
                        </div>
                    </div>
                </section>
            )}

            <CtaBand
                eyebrow="Work with us"
                title="Have a project, or need a second opinion?"
                body="A first call costs nothing. Tell us what you're working on and we'll tell you straight whether we can help, what it costs, and how long it takes."
            />
        </PublicLayout>
    );
}
