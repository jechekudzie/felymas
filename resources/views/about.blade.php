@extends('layouts.site')
@section('title','FELYMAS CONSULTANTS INTERNATIONAL')


@section('content')
    <section class="breadcrumbs-area pt-200 pb-120 bg-2">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="breadcrumbs">
                        <h2 class="page-title"></h2>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="aboutus-area ptb-130" id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="about-left">
                        <img src="{{asset($about->path)}}" alt=""/>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="about-right mt-30">
                        <h3 style="color: #f26722">FELYMAS CONSULTANTS INTERNATIONAL</h3>
                        <h4>A Little Bit About <span>Felymas</span></h4>

                        {!! $about->description !!}
                        <div class="download">
                            <a href="{{asset('documents/profile.pdf')}}" target="_blank"><i
                                        class="icofont icofont-download"></i>Download
                                Our Company Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--========== PURCHASED ==========-->

    <!--========== FEATURES ==========-->
    <section class="index8_features">
        <div class="container">

            <div class="row">
                <div class="col-md-12 text-center index1-heading">
                    <h2 class="text-uppercase">OUR VISION <span class="color_yellow bolder">YOUR DREAM</span>
                    </h2>
                    {{--<p>INTRO goes here</p>--}}
                </div>
            </div>

            <div class="row">

                <div class="col-md-12 col-sm-4 col-xs-12 text-center features8">
                    <div class="single-effect">
                        <figure class="ageent_overlay"><a href="#"><img src="{{$vision->path}}" alt="img"></a>
                            <figcaption class="view-caption">
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="col-md-6 col-sm-4 col-xs-12 text-center features8">
                    <div class="single-effect">
                        {{--<figure class="ageent_overlay"><a href="#"><img src="{{$vision->path}}" alt="img"></a>
                            <figcaption class="view-caption">
                            </figcaption>
                        </figure>--}}
                        <h3>OUR VISION</h3>
                        <p style="text-align: justify-all">{!! $vision->description !!}</p>
                    </div>
                </div>

                <div class="col-md-6 col-sm-4 col-xs-12 text-center features8">
                    <div class="single-effect">
                        {{--<figure class="ageent_overlay"><a href="#"><img src="{{$mission->path}}" alt="img"></a>
                            <figcaption class="view-caption">
                            </figcaption>
                        </figure>--}}
                        <h3>OUR MISSION</h3>
                        <p style="text-align: justify-all">{!! $mission->description !!}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!--========== #/FEATURES ==========-->

    <section class="specialization-area bg-1 pt-70 pb-55" id="service">
        <div class="container">
            <div class="row">
                <div class="col-md-offset-2 col-md-10">
                    <div class="specialization-titel pb-55">
                        <h2>Our Values</h2>
                    </div>
                </div>
                <div class="col-md-offset-2 col-md-10">
                    <div class="row">
                        <!-- Specialization Single -->
                        <div class="col-md-6 col-sm-4">
                            <div class="specialization-single pb-35">
                                <div class="spcl-titel">
                                    <img src="img/icon/s1.png" alt=""/>
                                    <h4>Passion</h4>
                                </div>
                                <div class="spcl-text">
                                    <p>We are driven by passion to fulfil Clients requirements</p>
                                </div>
                            </div>
                            <div class="specialization-single">
                                <div class="spcl-titel">
                                    <img src="img/icon/s4.png" alt=""/>
                                    <h4>Reliability</h4>
                                </div>
                                <div class="spcl-text">
                                    <p>Providing the most reliable, trustworthy and effective solutions to problems</p>
                                </div>
                            </div>
                        </div>
                        <!-- Specialization Single -->
                        <!-- Specialization Single -->
                        <div class="col-md-6 col-sm-4">
                            <div class="specialization-single pb-35">
                                <div class="spcl-titel">
                                    <img src="img/icon/s2.png" alt=""/>
                                    <h4>Service Excellence</h4>
                                </div>
                                <div class="spcl-text">
                                    <p>Being more Client-focused and committed to our Clients requirements</p>
                                </div>
                            </div>
                            <div class="specialization-single">
                                <div class="spcl-titel">
                                    <img src="img/icon/s5.png" alt=""/>
                                    <h4>Transparency</h4>
                                </div>
                                <div class="spcl-text">
                                    <p>Performing our duties safely and in conformity with environmental laws and
                                        regulations</p>
                                </div>
                            </div>
                        </div>

                        <!-- Specialization Single -->
                        <!-- Specialization Single -->
                        <div class="col-md-6 col-sm-4">
                            <div class="specialization-single pb-35">
                                <div class="spcl-titel">
                                    <img src="img/icon/s3.png" alt=""/>
                                    <h4>Team Work</h4>
                                </div>
                                <div class="spcl-text">
                                    <p>We thrive on mutual respect and teamwork with key players to ensure quality
                                        service provision.</p>
                                </div>
                            </div>

                            <div class="specialization-single">
                                <div class="spcl-titel">
                                    <img src="img/icon/s6.png" alt=""/>
                                    <h4>Quality</h4>
                                </div>
                                <div class="spcl-text">
                                    <p>Provision of quality services is our top priority</p>
                                </div>
                            </div>
                        </div>

                        <div align="left" class="col-md-6 col-sm-4">
                            <div class="specialization-single">
                                <div class="spcl-titel">
                                    <img src="img/icon/s6.png" alt=""/>
                                    <h4>Best Practices</h4>
                                </div>
                                <div class="spcl-text">
                                    <p>Best practices is rooted in everything we do. We work around a consistent set of
                                        core values and disciplined operating principles. Upholding professional and
                                        safety standards is our top priority.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Specialization Single -->
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="index1-chose">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center index1-heading">
                    <h2 class="text-uppercase">BENEFITS TO <span class="color_yellow bolder">CLIENTS!!</span></h2>
                    <p>We believe that the use of Felymas Consultants as
                        Project Managers would provide the Clients with the
                        following benefits:</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-6 col-xs-12 text-center">
                    <div class="chose_box">
                        <i class="fa fa-bank"></i>
                        <h4>Proven relevant experience</h4>
                        <p>-Proven expertise in planning, implementation,
                            monitoring and controlling upto handover of the
                            projects within approved costs and time.
                            -Intimate knowledge of best practice processes and
                            procedures.
                            -A track record that includes some of the largest and
                            most prestigious projects.
                            ·-Experience of advising on installation and
                            operation of energy efficiency technologies.
                            ·-Proven track record in assisting clients to realize
                            their aspirations.
                            -Proven success in complex project environments
                            involving a diverse range of risk factors.</p>
                    </div>
                </div>
                <div class="col-md-12 col-sm-6 col-xs-12 text-center">
                    <div class="chose_box">
                        <i class="fa fa-bolt"></i>
                        <h4>Key Qualities Of Personnel</h4>
                        <p>A committed team led by a distinguished team leader
                            /Principal Project Manager -dedicated to quality
                            with attention from the top.
                            Innovative, strategic and technical Project
                            Managers.
                            Creative and lateral thinkers.
                            Experts in developing evaluation and monitoring
                            strategies and plans.
                            Good working relations with environmental,
                            statutory and utility bodies.
                            Patient implementers of sensitive projects with
                            complicated financial packages.
                            Professional administrative support operating the
                            latest telecommunications.
                        </p>
                    </div>
                </div>
                <div class="col-md-12 col-sm-6 col-xs-12 text-center">
                    <div class="chose_box">
                        <i class="fa fa-bolt"></i>
                        <h4>Ability To Meet Target Of Delivery</h4>
                        <p>
                            The resources are available to carry out
                            commissioned projects within the Consultancy by
                            allocating a dedicated team that will be consistent
                            throughout a project lifecycle.
                            The multi-skilled nature of Felymas Consultants
                            provides a thorough understanding of all the issues
                            involved in both privately and publicly funded
                            projects.
                        </p>
                    </div>
                </div>
                <div class="col-md-12 col-sm-6 col-xs-12 text-center">
                    <div class="chose_box">
                        <i class="fa fa-briefcase"></i>
                        <h4>Specialist Expertise</h4>
                        <p>Specialists in the Project Management of Fitting –
                            Out and Client Direct Works.
                            Experience in specialist construction projects.
                            Detailed working knowledge of the processes and
                            procedures associated with private and public
                            clients.
                            Wide ranging experience in renewable energy and
                            providing advice and guidance on low carbon
                            aspects of capital projects.
                            Knowledge and experience of working with the
                            Environmental Management Agency (EMA) and the
                            relevant statutory bodies.</p>
                        <br>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!--========== #/PURCHASED ==========-->


    <!--========== CLIENT ==========-->
    <div id="client">
        <div class="container">
            <div class="client-owl">
                @foreach($partners as $partner)
                    <div class="item">
                        <a href="{{$partner->url}}">
                            <div class="logo"><img src="{{$partner->path}}" class="responsive-img"
                                                   alt="{{$partner->name}}">
                            </div>
                        </a>

                    </div>
                @endforeach

            </div>
        </div>
    </div>
    <!--========== #/CLIENT ==========-->

    <div id="purchase">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="pur_text">
                        <p>Felymas' Experience Is Molded Around A Successful Record In Supporting Clients To Realize
                            Their Dreams</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="pur_button"><a href="/contact">GET A QUOTE</a></div>
                </div>
            </div>
        </div>
    </div>





    {{--<div class="index1-map">
        <div id="map"></div>
    </div>--}}
    <!--========== #/CONTACT ==========-->


@endsection