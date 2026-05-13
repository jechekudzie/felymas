@extends('layouts.site')
@section('title','FELYMAS CONSULTANTS INTERNATIONAL')


@section('content')
    <br/>
    <br/>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

    <section class="blog-area pt-130  pb-100 indicator-style" id="our-blog">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="blog-details-left">
                        <div class="blog-part">
                            @if($project->projectImages()->exists())
                                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <!-- Indicators -->
                                    <ol class="carousel-indicators">
                                        @foreach($project->projectImages as $count =>$imageCount)
                                            <li data-target="#myCarousel" data-slide-to="{{$count}}" class="@if($count == 0){{'active'}}@endif"></li>
                                        @endforeach

                                    </ol>

                                    <!-- Wrapper for slides -->
                                    <div class="carousel-inner">
                                        @foreach($project->projectImages as $key =>$image)
                                            <div class="item @if($key == 0){{'active'}}@endif">
                                                <img class="img-responsive" src="{{asset($image->path)}}" alt="" style="width:100%;">
                                            </div>
                                        @endforeach

                                    </div>

                                    <!-- Left and right controls -->
                                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            @else
                                <div class="blog-img">
                                    <img class="img-responsive" src="{{asset($project->path)}}" alt="">
                                </div>
                            @endif


                            <div class="blog-info-2">
                                <div class="blog-meta">
                                                <span>
                                                    <i class="fa fa-user"></i>
                                                   Felymas Consultant
                                                </span>
                                    <span>
                                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                                    {{--{{ $project->created_at->format('d M Y - H:i:s') }}--}}
                                                </span>
                                </div>
                                <h3>{{$project->name}}</h3>
                                <p> {!! $project->description !!} </p>

                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-3">
                    <div class="blog-right-sidebar">
                        <div class="blog-right-sidebar-top mb-60">
                            <h3 class="leave-comment-text">Our Projects</h3>
                            <ul>
                                @foreach($other_projects as $project)
                                    <li><a href="/project_details/{{$project->id}}">{{$project->name}}</a></li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Blog Area End -->
    <!-- Blog Area Start -->
    <!-- Blog Area End -->
@endsection