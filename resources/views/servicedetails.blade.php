@extends('layouts.site')
@section('title','FELYMAS CONSULTANTS INTERNATIONAL')


@section('content')
    <br/>
    <br/>
    <!-- Blog Area Start -->
    <section class="blog-area pt-130  pb-100 indicator-style" id="our-blog">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="blog-details-left">
                        <div class="blog-part">
                            <div class="blog-img img-responsive">
                                <img class="img-responsive" src="{{asset($service->path)}}" alt="">
                            </div>
                            <div class="blog-info-2">

                                <h3>{{$service->name}}</h3>
                                <p style="color:black;"> {!! $service->description !!} </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="blog-right-sidebar">
                        <div class="blog-right-sidebar-top mb-60">
                            <h3 class="leave-comment-text">Our Services</h3>
                            <ul>
                                @foreach($other_services as $service)
                                    <li><a href="/service_details/{{$service->id}}">{{$service->name}}</a></li>
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