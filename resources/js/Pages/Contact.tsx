import { Head, useForm, usePage } from '@inertiajs/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { type FormEvent } from 'react';
import Reveal from '@/Components/public/Reveal';
import PublicLayout from '@/Layouts/PublicLayout';
import type { CompanyInfo } from '@/types/public';

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

            <section className="bg-surface-0 pb-16 pt-40 md:pb-24 md:pt-48">
                <div className="wrap">
                    <Reveal>
                        <p className="eyebrow">Talk to us</p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink-900 md:text-6xl lg:text-7xl">
                            Tell us about your project —{' '}
                            <span className="text-orange-500">we&rsquo;ll come back within one business day.</span>
                        </h1>
                    </Reveal>
                </div>
            </section>

            <section className="bg-surface-0 pb-24 md:pb-32">
                <div className="wrap grid gap-16 md:grid-cols-12 md:gap-12 lg:gap-20">
                    {/* Studio info */}
                    <Reveal className="md:col-span-5">
                        <div className="space-y-10">
                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                                    Studio
                                </p>
                                <div className="mt-4 flex items-start gap-4">
                                    <MapPin size={20} className="mt-1 shrink-0 text-orange-500" />
                                    <div className="text-lg leading-relaxed text-ink-900">
                                        {company.address.map((line, idx) => (
                                            <span key={idx} className="block">
                                                {line}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                                    Email
                                </p>
                                <a
                                    href={`mailto:${company.email}`}
                                    className="mt-4 flex items-center gap-4 text-lg text-ink-900 transition hover:text-orange-500"
                                >
                                    <Mail size={20} className="text-orange-500" />
                                    {company.email}
                                </a>
                            </div>

                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                                    Phone
                                </p>
                                <div className="mt-4 space-y-3">
                                    {company.phone.map((p) => (
                                        <a
                                            key={p}
                                            href={`tel:${p.replace(/\s+/g, '')}`}
                                            className="flex items-center gap-4 text-lg text-ink-900 transition hover:text-orange-500"
                                        >
                                            <Phone size={20} className="text-orange-500" />
                                            {p}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                                    Office hours
                                </p>
                                <p className="mt-4 text-lg leading-relaxed text-ink-900">
                                    Mon–Fri &middot; 08:00–17:00 CAT
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Form */}
                    <Reveal delay={0.1} className="md:col-span-7">
                        <form onSubmit={submit} className="space-y-8" noValidate>
                            {(flashMessage || recentlySuccessful) && (
                                <div className="rounded-md border border-orange-500/30 bg-orange-50 p-5 text-base text-ink-900">
                                    {flashMessage ||
                                        'Thank you — your message is on its way. We&rsquo;ll be in touch within one business day.'}
                                </div>
                            )}

                            <Field
                                label="Subject"
                                name="subject"
                                value={data.subject}
                                onChange={(v) => setData('subject', v)}
                                error={errors.subject}
                            />
                            <div className="grid gap-6 md:grid-cols-2">
                                <Field
                                    label="Your name"
                                    name="name"
                                    value={data.name}
                                    onChange={(v) => setData('name', v)}
                                    error={errors.name}
                                />
                                <Field
                                    label="Phone"
                                    name="number"
                                    value={data.number}
                                    onChange={(v) => setData('number', v)}
                                    error={errors.number}
                                />
                            </div>
                            <Field
                                label="Email"
                                name="email"
                                type="email"
                                value={data.email}
                                onChange={(v) => setData('email', v)}
                                error={errors.email}
                            />
                            <Field
                                label="Tell us about the project"
                                name="message"
                                value={data.message}
                                onChange={(v) => setData('message', v)}
                                error={errors.message}
                                multiline
                            />

                            <button
                                type="submit"
                                disabled={processing}
                                className="group inline-flex items-center gap-4 rounded-full bg-orange-500 px-8 py-4 font-mono text-xs uppercase tracking-[0.22em] text-surface-0 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {processing ? 'Sending…' : 'Send message'}
                                <Send size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                            </button>
                        </form>
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
    multiline?: boolean;
};

function Field({ label, name, value, onChange, error, type = 'text', multiline }: FieldProps) {
    const baseClasses =
        'block w-full border-0 border-b border-ink-900/20 bg-transparent px-0 py-3 text-lg text-ink-900 placeholder:text-ink-400 focus:border-orange-500 focus:outline-none focus:ring-0 transition-colors';

    return (
        <label className="block">
            <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                {label}
            </span>
            {multiline ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    rows={5}
                    className={baseClasses + ' resize-none'}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    autoComplete="off"
                    className={baseClasses}
                />
            )}
            {error && (
                <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-orange-600">
                    {error}
                </span>
            )}
        </label>
    );
}
