import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Felymas — Phase 0" />
            <main className="min-h-screen bg-[#F7F6F2] text-[#0B1220]">
                <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#5B6577]">
                        Phase 0 · Inertia smoke test
                    </p>
                    <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                        Hello from Inertia.
                    </h1>
                    <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#1F2A3D]">
                        Laravel 12 · React 19 · Inertia · Tailwind v4. Wiring confirmed.
                        The bold editorial homepage lands next.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.18em]">
                        <Link
                            href="/about"
                            className="rounded-full border border-[#0B1220]/15 px-5 py-2.5 text-[#0B1220] transition hover:border-[#F26722] hover:text-[#F26722]"
                        >
                            /about (Blade)
                        </Link>
                        <Link
                            href="/service"
                            className="rounded-full border border-[#0B1220]/15 px-5 py-2.5 text-[#0B1220] transition hover:border-[#F26722] hover:text-[#F26722]"
                        >
                            /service (Blade)
                        </Link>
                        <Link
                            href="/login"
                            className="rounded-full bg-[#F26722] px-5 py-2.5 text-white transition hover:bg-[#C8501A]"
                        >
                            Admin sign in
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
