<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('assets/images/favicon.png')}}">

    <title>Felymas Consultancy International</title>
    <!-- Plugins CSS -->
@yield('plugins-css')

<!-- Custom CSS -->
    <link href="{{asset('dist/css/style.min.css')}}" rel="stylesheet">
    <!-- Dashboard 1 Page CSS -->
    <link href="{{asset('dist/css/pages/dashboard1.css')}}" rel="stylesheet">

    <!-- Felymas brand overrides on top of AdminBSB -->
    <link rel="preconnect" href="https://api.fontshare.com" crossorigin>
    <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
    <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&display=swap" rel="stylesheet">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700|jetbrains-mono:400,500&display=swap" rel="stylesheet">
    <style>
        :root {
            --fci-orange: #F26722;
            --fci-orange-dark: #C8501A;
            --fci-ink: #0B1220;
            --fci-ink-soft: #1F2A3D;
            --fci-surface: #F7F6F2;
            --fci-card: #FFFFFF;
        }
        body, .page-wrapper {
            background: var(--fci-surface) !important;
            font-family: "Inter", system-ui, sans-serif;
            color: var(--fci-ink) !important;
        }
        h1, h2, h3, h4, h5, .card-title {
            font-family: "Cabinet Grotesk", "Inter", system-ui, sans-serif !important;
            letter-spacing: -0.01em;
            color: var(--fci-ink) !important;
        }
        .topbar, .top-navbar { background: var(--fci-ink) !important; }
        .top-navbar { box-shadow: inset 0 -2px 0 var(--fci-orange) !important; }
        .topbar .navbar-brand { background: #fff !important; padding: 4px 14px !important; margin-right: 24px; }
        .topbar .navbar-brand img { height: 36px !important; width: auto !important; object-fit: contain; }
        .top-navbar .navbar-nav .nav-item.dropdown:not(.u-pro) { display: none !important; }
        .u-pro .nav-link { color: rgba(255,255,255,0.92) !important; font-family: "JetBrains Mono", monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.16em; }
        .u-pro .nav-link:hover { color: var(--fci-orange) !important; }
        .left-sidebar, .sidebar-nav, .scroll-sidebar { background: var(--fci-ink) !important; }
        .sidebar-nav ul li a {
            color: rgba(255,255,255,0.7) !important;
            font-family: "JetBrains Mono", monospace;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            border-left: 3px solid transparent;
        }
        .sidebar-nav ul li a:hover, .sidebar-nav ul li a.active, .sidebar-nav ul li.active > a {
            color: #fff !important;
            background: rgba(242,103,34,0.10) !important;
            border-left-color: var(--fci-orange) !important;
        }
        .sidebar-nav ul li a i { color: var(--fci-orange) !important; min-width: 22px; }
        .btn-success {
            background: var(--fci-orange) !important;
            border-color: var(--fci-orange) !important;
            font-family: "JetBrains Mono", monospace;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            padding: 10px 18px;
            border-radius: 999px;
        }
        .btn-success:hover, .btn-success:focus, .btn-success:active {
            background: var(--fci-orange-dark) !important;
            border-color: var(--fci-orange-dark) !important;
            color: #fff !important;
        }
        .btn-primary {
            background: var(--fci-ink) !important;
            border-color: var(--fci-ink) !important;
            font-family: "JetBrains Mono", monospace;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            padding: 10px 18px;
            border-radius: 999px;
        }
        .btn-primary:hover, .btn-primary:focus, .btn-primary:active {
            background: var(--fci-ink-soft) !important;
            border-color: var(--fci-ink-soft) !important;
        }
        .btn-danger {
            border-radius: 999px;
            font-family: "JetBrains Mono", monospace;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            padding: 10px 18px;
        }
        .card { border: 1px solid rgba(11,18,32,0.08); border-radius: 6px; box-shadow: 0 1px 0 rgba(11,18,32,0.04); background: var(--fci-card); }
        .card-title { font-weight: 700; font-size: 1.25rem; }
        .nav-tabs { border-bottom: 1px solid rgba(11,18,32,0.08) !important; }
        .nav-tabs .nav-link { color: var(--fci-ink-soft) !important; font-family: "JetBrains Mono", monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.18em; border: 0 !important; padding: 14px 18px; }
        .nav-tabs .nav-link.active { color: var(--fci-orange) !important; border-bottom: 2px solid var(--fci-orange) !important; background: transparent !important; }
        .nav-tabs .nav-link:hover { color: var(--fci-orange) !important; }
        .breadcrumb { background: transparent !important; font-family: "JetBrains Mono", monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.16em; margin: 0; padding: 0; }
        .breadcrumb a { color: var(--fci-ink-soft) !important; }
        .breadcrumb a:hover { color: var(--fci-orange) !important; }
        .alert-success { background: rgba(242,103,34,0.08) !important; color: var(--fci-ink) !important; border: 1px solid rgba(242,103,34,0.25) !important; border-radius: 6px; }
        .alert-success .fa-check-circle { color: var(--fci-orange) !important; }
        .footer { background: var(--fci-ink) !important; color: rgba(255,255,255,0.5) !important; font-family: "JetBrains Mono", monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.18em; text-align: center; padding: 20px; }
        .page-titles { background: var(--fci-card); border: 1px solid rgba(11,18,32,0.08); border-radius: 6px; padding: 18px 24px !important; margin: 0 0 24px !important; }
        .form-control { border: 1px solid rgba(11,18,32,0.15) !important; border-radius: 6px !important; font-size: 14px; }
        .form-control:focus { border-color: var(--fci-orange) !important; box-shadow: 0 0 0 3px rgba(242,103,34,0.15) !important; }
        label, .control-label { font-family: "JetBrains Mono", monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--fci-ink-soft) !important; font-weight: 600; }
        .table thead th { font-family: "JetBrains Mono", monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--fci-ink-soft); border-bottom: 2px solid var(--fci-orange) !important; }
        /* Hide the preloader entirely — markup removed, but kill anything left over in AdminBSB CSS */
        .preloader { display: none !important; }
    </style>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body class="horizontal-nav skin-megna fixed-layout">
<!-- ============================================================== -->
<!-- Main wrapper - style you can find in pages.scss -->
<!-- ============================================================== -->
<div id="main-wrapper">
    <!-- ============================================================== -->
    <!-- Topbar header - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark">
            <!-- ============================================================== -->
            <!-- Logo -->
            <!-- ============================================================== -->
            <div class="navbar-header">
                <a class="navbar-brand" href="/">
                    <!-- Logo icon --><b>
                        <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                        <!-- Dark Logo icon -->
                        <img src="{{asset('images/logo.jpg')}}" alt="homepage" class="dark-logo"/>
                        <!-- Light Logo icon -->
                        <img src="{{asset('images/logo.jpg')}}" alt="homepage" class="light-logo"/>
                    </b>
                    <!--End Logo icon -->
                    <!-- Logo text --><span>
                         <!-- dark Logo text -->
                         <img src="{{asset('images/logo.jpg')}}" alt="homepage" class="dark-logo"/>
                        <!-- Light Logo text -->
                    </span>
                </a>
            </div>

            <!-- ============================================================== -->
            <!-- End Logo -->
            <!-- ============================================================== -->
            <br/>
            <br/>
            <div class="navbar-collapse">
                <!-- ============================================================== -->
                <!-- toggle and nav items -->
                <!-- ============================================================== -->
                <ul class="navbar-nav mr-auto">
                    <!-- This is  -->
                    <li class="nav-item"><a class="nav-link nav-toggler d-block d-sm-none waves-effect waves-dark"
                                            href="javascript:void(0)"><i class="ti-menu"></i></a></li>
                    <li class="nav-item"><a class="nav-link sidebartoggler d-none waves-effect waves-dark"
                                            href="javascript:void(0)"><i class="icon-menu"></i></a></li>
                    <!-- ============================================================== -->
                    <!-- Search -->
                    <!-- ============================================================== -->

                </ul>
                <!-- ============================================================== -->
                <!-- User profile and search -->
                <!-- ============================================================== -->
                <ul class="navbar-nav my-lg-0">
                    <!-- ============================================================== -->
                    <!-- User Profile -->
                    <!-- ============================================================== -->
                    <li class="nav-item dropdown u-pro">
                        <a class="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href=""
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span
                                    class="hidden-md-down">{{auth()->user()->name}}&nbsp;<i
                                        class="fa fa-angle-down"></i></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right animated flipInY">
                            <!-- text-->
                            <a href="javascript:void(0)" class="dropdown-item"><i class="ti-user"></i> My Profile</a>
                            <!-- text-->

                            <!-- text-->
                            <div class="dropdown-divider"></div>
                            <!-- text-->
                            <a href="javascript:void(0)" class="dropdown-item"><i class="ti-settings"></i> Account
                                Setting</a>
                            <!-- text-->
                            <div class="dropdown-divider"></div>
                            <!-- text-->
                            <a href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                                 document.getElementById('logout-form').submit();"
                               class="dropdown-item"><i class="fa fa-power-off"></i> Logout</a>
                            <!-- text-->

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </div>
                    </li>
                    <!-- ============================================================== -->
                    <!-- End User Profile -->
                    <!-- ============================================================== -->
                </ul>
            </div>
        </nav>
    </header>
    <br/>
    <!-- ============================================================== -->
    <!-- End Topbar header -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
    <aside class="left-sidebar">
        <!-- Sidebar scroll-->
        <div class="scroll-sidebar">
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav">
                <ul id="sidebarnav">

                    <li><a class="waves-effect waves-dark" href="/" aria-expanded="false"><i
                                    class="fa fa-bank"></i><span class="hide-menu">Home</span> </a>

                    </li>
                    <li><a class=" waves-effect waves-dark" href="/admin/about" aria-expanded="false"><i
                                    class="fa fa-user-md"></i><span class="hide-menu">About Us</span></a>
                    </li>

                    <li><a class=" waves-effect waves-dark" href="/admin/services" aria-expanded="false"><i
                                    class="fa fa-file"></i><span class="hide-menu">Services</span>
                        </a>
                    </li>
                    <li><a class=" waves-effect waves-dark two-column" href="/admin/team"
                           aria-expanded="false"><i class="fa fa-graduation-cap"></i><span
                                    class="hide-menu">Our Team </span></a>
                    </li>


                    <li>
                        <a class="waves-effect waves-dark" href="/admin/partners" aria-expanded="false"><i
                                    class="ti-settings"></i><span class="hide-menu">Partners</span></a>
                    </li>

                    <li>
                        <a class="waves-effect waves-dark" href="/admin/projects" aria-expanded="false"><i
                                    class="ti-settings"></i><span class="hide-menu">Projects</span></a>
                    </li>
                    <li><a class="waves-effect waves-dark" href="/admin/blogs" aria-expanded="false"><i
                                    class="ti-settings"></i><span class="hide-menu">Blog</span></a>
                    </li>

                    <li><a class="waves-effect waves-dark" href="/admin/sliders" aria-expanded="false"><i
                                    class="ti-settings"></i><span class="hide-menu">Sliders</span></a>
                    </li>

                    <li><a class="waves-effect waves-dark" href="/admin/gallery" aria-expanded="false"><i
                                    class="ti-settings"></i><span class="hide-menu">Gallery</span></a>
                    </li>

                </ul>
            </nav>
            <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
    </aside>
    <!-- ============================================================== -->
    <!-- End Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Page wrapper  -->
    <!-- ============================================================== -->
    <div class="page-wrapper">
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== -->
    @yield('content')
    <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Page wrapper  -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- footer -->
    <!-- ============================================================== -->
    <footer class="footer">
        © {{ date('Y') }} Felymas Consultants International &middot; Admin
    </footer>
    <!-- ============================================================== -->
    <!-- End footer -->
    <!-- ============================================================== -->
</div>
<!-- ============================================================== -->
<!-- End Wrapper -->
<!-- ============================================================== -->
<!-- ============================================================== -->
<!-- All Jquery -->
<!-- ============================================================== -->
<script src="{{asset('assets/node_modules/jquery/jquery-3.2.1.min.js')}}"></script>
<!-- Bootstrap popper Core JavaScript -->
<script src="{{asset('assets/node_modules/popper/popper.min.js')}}"></script>
<script src="{{asset('assets/node_modules/bootstrap/dist/js/bootstrap.min.js')}}"></script>
<!-- slimscrollbar scrollbar JavaScript -->
<script src="{{asset('dist/js/perfect-scrollbar.jquery.min.js')}}"></script>
<!--Wave Effects -->
<script src="{{asset('dist/js/waves.js')}}"></script>
<!--Menu sidebar -->
<script src="{{asset('dist/js/sidebarmenu.js')}}"></script>
<!--Custom JavaScript -->
<script src="{{asset('dist/js/custom.min.js')}}"></script>
<!-- ============================================================== -->

<!-- This page plugins -->
@yield('plugins-js')

<!-- CKEditor — only initialise when the editor textarea actually exists on the page,
     and configure it so the editing iframe doesn't try to pull in AdminBSB's icon
     fonts (which would CORS-fail inside the null-origin srcdoc iframe). -->
<script src="/vendor/unisharp/laravel-ckeditor/ckeditor.js"></script>
<script>
    (function () {
        if (typeof CKEDITOR === 'undefined') return;
        var el = document.getElementById('editor');
        if (!el) return;
        CKEDITOR.replace('editor', {
            contentsCss: [],
            removePlugins: 'elementspath',
            resize_enabled: false,
            removeButtons: 'About'
        });
    })();
</script>
</body>

</html>