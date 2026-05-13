import type { TeamMember } from '@/types/public';
import Reveal from './Reveal';

type TeamCardProps = {
    member: TeamMember;
    index?: number;
    featured?: boolean;
};

export default function TeamCard({
    member,
    index = 0,
    featured = false,
}: TeamCardProps) {
    return (
        <Reveal delay={index * 0.05} className="group">
            <article className="relative overflow-hidden bg-surface-100">
                <div
                    className={
                        featured
                            ? 'aspect-[4/5] w-full overflow-hidden'
                            : 'aspect-[3/4] w-full overflow-hidden'
                    }
                >
                    <div
                        className="h-full w-full bg-cover bg-center grayscale transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                        style={{ backgroundImage: `url(${member.image})` }}
                    />
                </div>
                <div className="bg-surface-0 p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-500">
                        {member.position}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-tight text-ink-900 md:text-2xl">
                        {member.name}
                    </h3>
                    {member.qualification && (
                        <p className="mt-3 text-sm leading-relaxed text-ink-500">
                            {member.qualification}
                        </p>
                    )}
                </div>
            </article>
        </Reveal>
    );
}
