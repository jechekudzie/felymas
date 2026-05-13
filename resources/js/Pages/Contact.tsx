import { Head, useForm, usePage } from '@inertiajs/react';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { type FormEvent } from 'react';
import PageHero from '@/Components/public/PageHero';
import Reveal from '@/Components/public/Reveal';
import PublicLayout from '@/Layouts/PublicLayout';
import type { CompanyInfo } from '@/types/public';

const GOOGLE_MAP_SRC =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.562952924264!2d31.037984276003748!3d-17.812225875872567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a589ab18f103%3A0xffee52c0c9b22d!2sFelymas%20Consultants%20International!5e0!3m2!1sen!2szw!4v1778686513256!5m2!1sen!2szw';

type SharedProps = {
    company: CompanyInfo;
    flash: {
        message?: string;
    };
};

export default function Contact() {
    const page = usePage();
    const shared = page.props as unknown as SharedProps;
    const company = shared.company;
    const flashMessage = shared.flash?.message;

    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        subject: '',
        name: '',
        email: '',
        number: '',
        message: '',
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        post('/sendmail', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    }

    return (
        <PublicLayout>
            <Head title="Contact — Felymas Consultants International" />

            <PageHero
                eyebrow="04 · Talk to us"
                title="Tell us about your project —"
                accent="we'll come back within one business day."
                intro="Short engagement, long programme, single-stage advisory or full delivery — send us a brief and we'll come back with scope, programme, and fee."
            />

            {/* Breathing room between hero and content */}
            <section className="bg-surface-0 py-16 sm:py-24 md:py-32">
                <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-12">
                    {/* Left: contact details only */}
                    <div className="lg:col-span-5">
                        <Reveal>
                            <p className="eyebrow">
                                <span className="mr-2 inline-block h-2 w-2 align-middle bg-orange-500" />
                                Get in touch
                            </p>
                            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl">
                                Reach the office directly.
                            </h2>
                            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-700">
                                Call, email, or drop in &mdash; whichever&rsquo;s easiest.
                                The map below shows our office on Harvey Brown Avenue.
                            </p>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <div className="mt-8 grid divide-y divide-ink-900/10 rounded-md border border-ink-900/10 bg-surface-0">
                                <div className="flex items-start gap-4 p-5">
                                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                                        <MapPin size={16} />
                                    </span>
                                    <div>
                                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                                            Head Office
                                        </p>
                                        <p className="mt-1 text-base leading-relaxed text-ink-900">
                                            {company.address.join(', ')}
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={`mailto:${company.email}`}
                                    className="flex items-start gap-4 p-5 transition hover:bg-surface-50"
                                >
                                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                                        <Mail size={16} />
                                    </span>
                                    <div>
                                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                                            Email
                                        </p>
                                        <p className="mt-1 text-base text-ink-900">
                                            {company.email}
                                        </p>
                                    </div>
                                </a>
                                {company.phone.map((p) => (
                                    <a
                                        key={p}
                                        href={`tel:${p.replace(/\s+/g, '')}`}
                                        className="flex items-start gap-4 p-5 transition hover:bg-surface-50"
                                    >
                                        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                                            <Phone size={16} />
                                        </span>
                                        <div>
                                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                                                Phone
                                            </p>
                                            <p className="mt-1 text-base text-ink-900">{p}</p>
                                        </div>
                                    </a>
                                ))}
                                <div className="flex items-start gap-4 p-5">
                                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                                        <Clock size={16} />
                                    </span>
                                    <div>
                                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                                            Hours
                                        </p>
                                        <p className="mt-1 text-base text-ink-900">
                                            Mon&ndash;Fri &middot; 08:00&ndash;17:00 CAT
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right: form card */}
                    <Reveal delay={0.1} className="lg:col-span-7">
                        <div className="rounded-md bg-surface-50 p-6 ring-1 ring-ink-900/10 sm:p-8 md:p-10 lg:p-12">
                            <p className="eyebrow">
                                <span className="mr-2 inline-block h-2 w-2 align-middle bg-orange-500" />
                                Send a brief
                            </p>
                            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl">
                                Let&rsquo;s start a conversation.
                            </h2>
                            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-700">
                                Fill in a few details and we&rsquo;ll come back within one
                                business day. Calls and written proposals are on us.
                            </p>

                            <form onSubmit={submit} className="mt-10 space-y-6" noValidate>
                                {(flashMessage || recentlySuccessful) && (
                                    <div className="flex items-start gap-3 rounded-md border border-orange-500/30 bg-orange-50 p-4 text-base text-ink-900">
                                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-surface-0">
                                            <Send size={12} />
                                        </span>
                                        <span>
                                            {flashMessage ||
                                                'Thank you — your message is on its way. We’ll reply within one business day.'}
                                        </span>
                                    </div>
                                )}

                                <Field
                                    label="Subject"
                                    placeholder="Enquiry about a project, advisory, etc."
                                    name="subject"
                                    value={data.subject}
                                    onChange={(v) => setData('subject', v)}
                                    error={errors.subject}
                                />
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <Field
                                        label="Your name"
                                        placeholder="Full name"
                                        name="name"
                                        value={data.name}
                                        onChange={(v) => setData('name', v)}
                                        error={errors.name}
                                    />
                                    <Field
                                        label="Phone"
                                        placeholder="+263 …"
                                        name="number"
                                        value={data.number}
                                        onChange={(v) => setData('number', v)}
                                        error={errors.number}
                                    />
                                </div>
                                <Field
                                    label="Email"
                                    placeholder="you@company.com"
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(v) => setData('email', v)}
                                    error={errors.email}
                                />
                                <Field
                                    label="Tell us about the project"
                                    placeholder="A short brief — location, scope, timing, anything we should know."
                                    name="message"
                                    value={data.message}
                                    onChange={(v) => setData('message', v)}
                                    error={errors.message}
                                    multiline
                                />

                                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                                        We reply within 1 business day
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-surface-0 shadow-[0_8px_24px_-8px_rgba(242,103,34,0.6)] transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {processing ? 'Sending…' : 'Send message'}
                                        <Send
                                            size={14}
                                            className="transition-transform duration-500 group-hover:translate-x-1"
                                        />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Map — full-width row below the form */}
            <section className="bg-surface-50 pb-24 md:pb-32">
                <div className="wrap">
                    <Reveal>
                        <p className="eyebrow">
                            <span className="mr-2 inline-block h-2 w-2 align-middle bg-orange-500" />
                            Find us
                        </p>
                        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl">
                            1 Harvey Brown Avenue, Harare.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05} as="figure" className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-md bg-ink-100 ring-1 ring-ink-900/10 md:aspect-[21/9]">
                        <iframe
                            src={GOOGLE_MAP_SRC}
                            title="Felymas Consultants International — Harare office"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-full w-full"
                        />
                    </Reveal>
                </div>
            </section>
        </PublicLayout>
    );
}

type FieldProps = {
    label: string;
    name: string;
    value: string;
    onChange: (v: string) => void;
    error?: string;
    type?: string;
    placeholder?: string;
    multiline?: boolean;
};

function Field({
    label,
    name,
    value,
    onChange,
    error,
    type = 'text',
    placeholder,
    multiline,
}: FieldProps) {
    const baseClasses =
        'block w-full rounded-md border border-ink-900/15 bg-surface-0 px-4 py-3 text-base text-ink-900 placeholder:text-ink-400 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20';

    return (
        <label className="block">
            <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-700">
                {label}
            </span>
            <span className="mt-2 block">
                {multiline ? (
                    <textarea
                        name={name}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                        rows={5}
                        className={baseClasses + ' resize-none'}
                    />
                ) : (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                        autoComplete="off"
                        className={baseClasses}
                    />
                )}
            </span>
            {error && (
                <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-orange-600">
                    {error}
                </span>
            )}
        </label>
    );
}
