@extends('layouts.site')
@section('title','FELYMAS CONSULTANTS INTERNATIONAL')

@section('content')
    <!--========== SLIDER ==========-->
    <section id="main-slider" class="carousel">
        <div class="carousel slide">
            <div class="carousel-inner">

                @foreach($sliders as $key => $slider)
                    <div class="item @if($key ==0){{'active'}}@endif"
                         style='background-image:url("{{asset($slider->path)}}")'>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="carousel-content">
                                        {{--<p class="animation animated-item-1">some text</p>--}}
                                        <h1 class="animation animated-item-2"><strong> {{$slider->caption}} </strong><br>
                                        </h1>
                                        <br>
                                        <a class="animation animated-item-3 banner-button-1" href="#">Read More</a> <a
                                                class="animation animated-item-3 banner-button-2" href="/contact">Contact
                                            US</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
            <!--/.carousel-inner-->
        </div>
        <!--/.carousel-->
        <a class="prev hidden-xs" href="#main-slider" data-slide="prev"> <i class="fa fa-chevron-left"></i> </a> <a
                class="next hidden-xs" href="#main-slider" data-slide="next"> <i class="fa fa-chevron-right"></i> </a>
    </section>
    <!--========== #/SLIDER ==========-->

    <!--========== PURCHASED ==========-->
    <div id="purchase">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="pur_text">
                        <p style="text-transform: capitalize;"> Felymas' experience is molded around a successful
                            record in supporting clients to realize their dreams</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="pur_button"><a href="/contact">GET A QUOTE</a></div>
                </div>
            </div>
        </div>
    </div>
    <!--========== #/PURCHASED ==========-->


    <!--========== WHY CHOSE US ==========-->
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
                <div class="col-md-4 col-sm-6 col-xs-12 text-center">
                    <div class="chose_box">
                        <i class="fa fa-bank"></i>
                        <h4>Satisfaction Guarantee</h4>
                        <p>-Intimate knowledge of best practice processes and
                            procedures.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12 text-center">
                    <div class="chose_box">
                        <i class="fa fa-bolt"></i>
                        <h4>High Quality Work</h4>
                        <p>-A track record that includes some of the largest and
                            most prestigious projects.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12 text-center">
                    <div class="chose_box">
                        <i class="fa fa-bolt"></i>
                        <h4>Previous Relevant Experience</h4>
                        <p>Experience of advising on installation and
                            operation of energy efficiency technologies.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12 text-center">
                    <div class="chose_box">
                        <i class="fa fa-briefcase"></i>
                        <h4>Expert & Professional</h4>
                        <p>Proven track record in assisting clients to realize
                            their aspirations.</p>
                        <br>

                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12 text-center">
                    <div class="chose_box">
                        <i class="fa fa-clock-o"></i>
                        <h4>Risk management</h4>
                        <p>-Proven success in complex project environments
                            involving a diverse range of risk factors.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12 text-center">
                    <div class="chose_box">
                        <i class="fa fa-clock-o"></i>
                        <h4>Quick in Response</h4>
                        <p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                            blind texts.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12 text-center">
                    <div class="chose_box">
                        <i class="fa fa-clock-o"></i>
                        <h4>Professional Approch</h4>
                        <p>Proven expertise in planning, implementation,
                            monitoring and controlling upto handover of the
                            projects within approved costs and time.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {{--<section id="index1-chose">
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
                <div class="col-md-4 col-sm-6 col-xs-12 text-center">
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
                <div class="col-md-4 col-sm-6 col-xs-12 text-center">
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
                <div class="col-md-4 col-sm-6 col-xs-12 text-center">
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
                <div class="col-md-4 col-sm-6 col-xs-12 text-center">
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
    </section>--}}
    <!--========== #/WHY CHOSE US ==========-->

    <!--========== SERVICES ==========-->
    <section id="services_index" class="pb100">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center index1-heading">
                    <h2 class="text-uppercase heading">Our <span class="color_yellow bolder">Services</span></h2>
                    {{--<p class="heading mt35">Services
                        goes here</p>--}}
                </div>
            </div>

            <div class="row">
                <div style="text-align: left;" id="services_index1" class="owl-carousel">
                    @foreach($services as $service)
                        <div class="item">
                            <div class="index1-services-box text-center">
                                <div class="servc_img">
                                    <a href="/service_details/{{$service->id}}"><img src="{{asset($service->path)}}" alt="image"></a>
                                </div>
                                <div class="servc_detail">
                                    <a href="/service_details/{{$service->id}}"><h3>{{$service->name}}</h3></a>
                                </div>

                            </div>
                        </div>

                    @endforeach
                </div>
            </div>

        </div>
    </section>
    <!--========== #/SERVICES ==========-->


    <!--========== FEATURES ==========-->
    {{--<section class="index8_features">
         <div class="container">

             <div class="row">
                 <div class="col-md-12 text-center index1-heading">
                     <h2 class="text-uppercase">WHY HELP TO BUILD <span class="color_yellow bolder">YOUR DREAM</span>
                     </h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut<br>
                         et dolore magna aliqua. Ut enim ad minim veniam</p>
                 </div>
             </div>

             <div class="row">

                 <div class="col-md-4 col-sm-4 col-xs-12 text-center features8">
                     <div class="single-effect">
                         <figure class="ageent_overlay"><a href="#"><img src="images/ind_fe_1.jpg" alt="img"></a>
                             <figcaption class="view-caption">
                                 <a href="images/ind_fe_1.jpg" class="cbp-lightbox opens"> <i class="fa fa-external-link"
                                                                                              aria-hidden="true"></i></a>
                             </figcaption>
                         </figure>
                         <h3>Office Renovation</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                             et dolore magna aliqua. Ut enim ad minim veniam</p>
                     </div>
                 </div>

                 <div class="col-md-4 col-sm-4 col-xs-12 text-center features8">
                     <div class="single-effect">
                         <figure class="ageent_overlay"><a href="#"><img src="images/ind_fe_2.jpg" alt="img"></a>
                             <figcaption class="view-caption">
                                 <a href="images/ind_fe_2.jpg" class="cbp-lightbox opens"> <i class="fa fa-external-link"
                                                                                              aria-hidden="true"></i></a>
                             </figcaption>
                         </figure>
                         <h3>House Renovation</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                             et dolore magna aliqua. Ut enim ad minim veniam</p>
                     </div>
                 </div>

                 <div class="col-md-4 col-sm-4 col-xs-12 text-center features8">
                     <div class="single-effect">
                         <figure class="ageent_overlay"><a href="#"><img src="images/ind_fe_3.jpg" alt="img"></a>
                             <figcaption class="view-caption">
                                 <a href="images/ind_fe_3.jpg" class="cbp-lightbox opens"> <i class="fa fa-external-link"
                                                                                              aria-hidden="true"></i></a>
                             </figcaption>
                         </figure>
                         <h3>Construction Planning</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                             et dolore magna aliqua. Ut enim ad minim veniam</p>
                     </div>
                 </div>

             </div>
         </div>
     </section>--}}
    <!--========== #/FEATURES ==========-->

    <!--========== Our Team ==========-->
    <section id="our-agent" class="padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12 index1-heading">
                    <h2 class="text-uppercase">Our <span class="color_yellow bolder">Team</span></h2>
                    {{--<p>Team statement goes here</p>--}}
                </div>
            </div>
            <div id="our-agent-slider" class="owl-carousel">
                @foreach($members as $member)
                    <div class="item">
                        <div class="single-effect">
                            <figure class="ageent_overlay"><a href="#"><img src="{{asset($member->path)}}"
                                                                            alt="img"></a>
                               {{-- <figcaption class="view-caption"><a href="#">
                                        <i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </figcaption>--}}
                            </figure>
                        </div>
                        <div class="team_text text-center">
                            <h4>{{$member->position}}</h4>
                            <span>{{$member->name}}</span>
                            <p>{{$member->qualification}}</p>
{{--
                            <a href="#" class="link_arrow">Read More</a>
--}}
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
    <!--========== #/Our Team ==========-->


    <!--========== LATEST PROJECTS ==========-->
    <section id="project_index">
        <div class="container">
            <div class="row">
                <div class="col-md-12 index1-heading">
                    <h2 class="heading text-uppercase">Our Latest <span class="color_yellow bolder">Projects</span></h2>
                    {{--<p class="mt30 mb70 heading">Project intro goes here</p>--}}
                </div>
            </div>

            <div id="services_slider" class="owl-carousel">
                @foreach($projects as $project)
                <div class="item">
                    <div class="services">
                        <div class="image_s"><a href="/project_details/{{$project->id}}"> <img src="{{asset($project->path)}}"
                                                                alt="{{$project->name}}"></a></div>
                        <h3 class="text-uppercase"><span>{{$project->id}}</span>{{$project->name}}</h3>
{{--
                        <p>project description goes here as an intro</p>
--}}
                        <a href="/project_details/{{$project->id}}">Read More</a></div>
                </div>
                @endforeach
            </div>
        </div>

        {{-- <div id="some_facts">
             <div class="container">
                 <div class="row text-center circle-block" id="counters">
                     <div class="col-md-3 col-sm-3 wow zoomIn animated mob-circle" data-wow-duration="2s">
                         <div id="circle1">
                             <strong> <span class="counter quantity-counter1 highlight" style="display: inline-block;">5147</span>k
                             </strong>
                         </div>
                         <h4 class="circle-txt">Line Of Code</h4>
                         <a href="#" class=" btn circle-user"> <i data-toggle="tooltip" data-placement="bottom"
                                                                  title="Line Of Code" class="fa fa-code"></i> </a></div>
                     <div class="col-md-3 col-sm-3 wow zoomIn animated mob-circle" data-wow-duration="2s">
                         <div id="circle2"><strong><span class="counter quantity-counter2 highlight"
                                                         style="display: inline-block;">0</span>k</strong></div>
                         <h4 class="circle-txt">Happy User</h4>
                         <a href="#" class="btn circle-user"> <i data-toggle="tooltip" data-placement="bottom"
                                                                 title="Happy User" class="fa fa-user"></i> </a></div>
                     <div class="col-md-3 col-sm-3 wow zoomIn animated mob-circle" data-wow-duration="2s">
                         <div id="circle3"><strong><span class="counter quantity-counter3 highligh"
                                                         style="display: inline-block;">1,100</span>+</strong></div>
                         <h4 class="circle-txt">Downloads</h4>
                         <a href="#" class="btn circle-user"> <i data-toggle="tooltip" data-placement="bottom"
                                                                 title="Downloads" class="fa fa-cloud-download"></i> </a>
                     </div>
                     <div class="col-md-3 col-sm-3 wow zoomIn animated mob-circle" data-wow-duration="2s">
                         <div id="circle4"><strong><span class="counter quantity-counter4 highligh"
                                                         style="display: inline-block;">4.5</span></strong></div>
                         <h4 class="circle-txt">Responsive</h4>
                         <a href="#" class="btn circle-user"> <i data-toggle="tooltip" data-placement="bottom"
                                                                 title="Responsive" class="fa fa-star"></i> </a></div>
                 </div>
             </div>
         </div>--}}
    </section>
    <!--========== #/LATEST PROJECTS ==========-->


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


@endsection