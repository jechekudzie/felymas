<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Felymas Consultants International') }}</title>
        <meta name="description" content="Felymas Consultants International — a construction and engineering consultancy delivering project management, construction, and technical advisory across Zimbabwe and South Africa.">
        <meta name="theme-color" content="#0B1220">

        <link rel="icon" type="image/png" href="/images/logo.jpg">

        <!-- Fonts: Cabinet Grotesk (Fontshare) + Inter + JetBrains Mono (Bunny Fonts). -->
        <link rel="preconnect" href="https://api.fontshare.com" crossorigin>
        <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&display=swap" rel="stylesheet">
        <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700|jetbrains-mono:400,500&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
