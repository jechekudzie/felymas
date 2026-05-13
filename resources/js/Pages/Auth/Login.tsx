import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Sign in — Felymas Admin" />

            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-orange-500">
                <span className="mr-2 inline-block h-2 w-2 align-middle bg-orange-500" />
                Admin sign in
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink-900 md:text-4xl">
                Welcome back.
            </h1>
            <p className="mt-3 text-base leading-relaxed text-ink-700">
                Enter your credentials to manage the Felymas content library.
            </p>

            {status && (
                <div className="mt-6 rounded-md border border-orange-500/30 bg-orange-50 p-4 text-sm leading-relaxed text-ink-900">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="mt-10 space-y-6" noValidate>
                {/* Email */}
                <label className="block">
                    <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-700">
                        Email
                    </span>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        autoFocus
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="you@felymas.com"
                        className="mt-2 block w-full rounded-md border border-ink-900/15 bg-surface-0 px-4 py-3 text-base text-ink-900 placeholder:text-ink-400 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                    {errors.email && (
                        <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-orange-600">
                            {errors.email}
                        </span>
                    )}
                </label>

                {/* Password */}
                <label className="block">
                    <span className="flex items-center justify-between font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-700">
                        <span>Password</span>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500 transition hover:text-orange-500"
                            >
                                Forgot?
                            </Link>
                        )}
                    </span>
                    <span className="relative mt-2 block">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={data.password}
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="••••••••"
                            className="block w-full rounded-md border border-ink-900/15 bg-surface-0 px-4 py-3 pr-12 text-base text-ink-900 placeholder:text-ink-400 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-ink-500 transition hover:bg-surface-50 hover:text-ink-900"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </span>
                    {errors.password && (
                        <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-orange-600">
                            {errors.password}
                        </span>
                    )}
                </label>

                {/* Remember me */}
                <label className="flex cursor-pointer items-center gap-3">
                    <input
                        type="checkbox"
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData('remember', (e.target.checked || false) as false)}
                        className="h-4 w-4 cursor-pointer rounded border-ink-900/25 text-orange-500 transition focus:ring-2 focus:ring-orange-500/30 focus:ring-offset-0"
                    />
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-700">
                        Keep me signed in
                    </span>
                </label>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={processing}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-surface-0 shadow-[0_8px_24px_-8px_rgba(242,103,34,0.6)] transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {processing ? 'Signing in…' : 'Sign in'}
                    <ArrowRight
                        size={16}
                        className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                </button>
            </form>
        </GuestLayout>
    );
}
