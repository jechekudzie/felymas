<!DOCTYPE HTML>
<html dir="ltr" lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

    <title>@yield('title', 'FELYMAS CONSULTANTS INTERNATIONAL')</title>

    <!--========== REQUIRED CSS ==========-->
    <!-- Latest compiled and minified CSS -->
{{-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
--}}
<!--========== REQUIRED CSS ==========-->

    <link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/font-awesome.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/owl.carousel.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/animate.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/cubeportfolio.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/bootsnav.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/settings.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/color.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}">
    <link rel="icon" href="{{asset('images/favicon.png')}}" type="image/x-icon">


    <link rel="stylesheet" type="text/css" href="{{asset('css/raes.css')}}">

    <link rel="icon" href="{{asset('images/favicon.png')}}" type="image/x-icon">
    <!--========== #/REQUIRED CSS ==========-->

</head>

<body>
<!--========== LOADER ==========-->
<div class="loader">
    <div style="color: #f26722;" class="cssload-spinner"></div>
</div>
<!--========== #/LOADER ==========-->


<!--========== BACK TO TOP ==========-->
<a class="scrollup">Top</a>
<!--========== #/BACK TO TOP ==========-->

<!--========== HEADER ==========-->
<header id="header_3">
    <div id="header_top">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="cont_office">
                        <div class="btn-group">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                Language <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="#">English</a></li>
                                <li><a href="#">Esponal</a></li>
                                <li><a href="#">Chines</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <h5 class="widget-title">Connect with us</h5>
                    <div class="social-icons">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/pg/Felymas-International-Consultants-308103273240083/about/?ref=page_internal" target="_blank"><i
                                            class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#."><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#."><i aria-hidden="true" class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!--===== HEADER BOTTOM =====-->
    <div id="header-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-2 hidden-xs hidden-sm"><a href="/" class="logo"><img
                                src="{{asset('images/logo.jpg')}}"
                                alt="logo"/></a>
                </div>
                <div class="col-md-10 col-sm-12 col-xs-12">
                    <div class="get-tuch text-left pt30">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <ul>
                            <li>
                                <h4>Phone Number</h4>
                            </li>
                            <li>
                                <p>+263 242 703013</p>
                            </li>
                        </ul>
                    </div>
                    <div class="get-tech-line">
                        <img src="{{asset('images/get-tuch-line.png')}}" alt="line"/>
                    </div>
                    <div class="get-tuch text-left pt30">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <ul>
                            <li>
                                <h4>Email Address</h4>
                            </li>
                            <li>
                                <p><a href="#">info@felymas.com</a></p>
                            </li>
                        </ul>
                    </div>
                    <div class="get-tech-line"><img src="{{asset('images/get-tuch-line.png')}}" alt="line"/></div>
                    <div class="get-tuch text-left pt30">
                        <i class="fa fa-street-view" aria-hidden="true"></i>
                        <ul>
                            <li>
                                <h4>No. 1 Harvey Brown Avenue,</h4>
                            </li>
                            <li>
                                <p>Milton Park, Harare Zimbabwe</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--===== #/HEADER BOTTOM =====-->
    <!--===== NAV-BAR =====-->

    <nav class="navbar navbar-default navbar-sticky navbar-scrollspy bootsnav" data-minus-value-desktop="70"
         data-minus-value-mobile="55" data-speed="1000">

        <div class="container">
            <!-- Start Header Navigation -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="/"><img src="{{asset('images/logo1.png')}}" class="logo" alt=""></a>
            </div>
            <!-- End Header Navigation -->

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="myNavbar">

                <ul class="nav navbar-nav">
                    <li class=""><a href="/">Home</a></li>
                    <li class=""><a href="/about">About Us</a></li>
                    <li class=""><a href="/service">Services</a></li>
                    <li class=""><a href="/our_team">Our Team</a></li>
                    <li class=""><a href="/blog">Blog</a></li>
                    <li class=""><a href="/gallery">Gallery</a></li>
                    <li class=""><a href="/contact">Contact Us</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </nav>
    <!--===== #/NAV-BAR =====-->
</header>
<!--========== #/HEADER ==========-->

@yield('content')


<!--========== FOOTER ==========-->
<footer id="index1-footer">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">

                <div class="social-icons mb30">
                    <ul>
                        <li><a href=" https://www.facebook.com/pg/Felymas-International-Consultants-308103273240083/about/?ref=page_internal" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#."><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#."><i aria-hidden="true" class="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>

            <div class="col-md-12 text-center">
                <ul class="footer_link mb50">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/team">Our Team</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/contact">Contact us</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div style="background-color: #f26722" class="index1-footer-b">
        <div class="container">

            <div class="col-md-6">
                <p style="color: #fff" class="foot-p">All rights reserved Copyright © {{date('Y')}} </p>
            </div>

            <div class="col-md-6 text-right">
                <ul style="color: #fff" class="list-inline">
                    <li><a style="color: #fff" href="https://leadingdigital.africa"
                                                     target="_blank">Designed and Developed by Leading Digital</a></li>

                </ul>
            </div>

        </div>
    </div>
</footer>
<!--========== #/FOOTER ==========-->

@yield('team-modals')


<!--========== REQUIRED JS ==========-->


{{--<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
        crossorigin="anonymous"></script>--}}
<!--========== REQUIRED JS ==========-->
<script src="{{asset('js/jquery-2.2.4.min.js')}}"></script>
<script src="{{asset('js/bootstrap.min.js')}}"></script>

<script src="{{asset('js/owl.carousel.min.js')}}"></script>
<script src="{{asset('js/fancybox.pack.js')}}"></script>
<script src="{{asset('js/bootsnav.js')}}"></script>
<script src="{{asset('js/jquery.counterup.js')}}"></script>
<script src="{{asset('js/jquery.cubeportfolio.min.js')}}"></script>
<script src="{{asset('js/themepunch/jquery.themepunch.revolution.min.js')}}"></script>
<script src="{{asset('js/themepunch/jquery.themepunch.tools.min.js')}}"></script>
<script src="{{asset('js/themepunch/revolution.extension.layeranimation.min.js')}}"></script>
<script src="{{asset('js/themepunch/revolution.extension.navigation.min.js')}}"></script>
<script src="{{asset('js/themepunch/revolution.extension.parallax.min.js')}}"></script>
<script src="{{asset('js/themepunch/revolution.extension.slideanims.min.js')}}"></script>
<script src="{{asset('js/themepunch/revolution.extension.video.min.js')}}"></script>
<script src="{{asset('js/portfolio.js')}}"></script>
<script src="{{asset('js/function.js')}}"></script>
<!--========== #/REQUIRED JS ==========-->
</body>
<!--Start of Tawk.to Script-->
<script type="text/javascript">
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/5d08c28753d10a56bd7a9f8f/default';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
</script>

<script src="/vendor/unisharp/laravel-ckeditor/ckeditor.js"></script>
<script>
    CKEDITOR.replace('article-ckeditor');
</script>

</html>

