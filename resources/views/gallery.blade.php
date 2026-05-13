@extends('layouts.site')
@section('title','FELYMAS CONSULTANTS INTERNATIONAL')


@section('content')



    <section id="gallery" class="index8_features">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center index1-heading">
                    <h2 class="text-uppercase">Our<span class="color_yellow bolder">Gallery</span>
                    </h2>
                </div>
            </div>

            <div class="row">
                @foreach($images as $image)
                    <div class="col-md-4 col-sm-4 col-xs-12 cbp-item text-center features8">
                        <div class="single-effect">
                            <figure class="ageent_overlay">
                                <a href="#"><img src="{{asset($image->path)}}" alt="img"/></a>
                                <figcaption class="view-caption">
                                    <a href="{{asset($image->path)}}" class="cbp-lightbox opens"> <i
                                                class="fa fa-external-link"
                                                aria-hidden="true"></i>
                                    </a>
                                </figcaption>
                            </figure>
                            <h3>{{$image->caption}}</h3>
                        </div>
                    </div>
                @endforeach
            </div>
            {{$images->links()}}
        </div>
    </section>

    <section style="display: none" >
        <div class="container">
            <div class="row">
                <div class="col-sm-5">
                    <h2 class="text-uppercase heading">Recent <span class="color_yellow bolder">Projects</span></h2>
                </div>
                <div class="col-sm-7">
                    <div id="project-filter" class="cbp-l-filters-alignRight">
                        <div data-filter="*" class="cbp-filter-item-active cbp-filter-item">ALL IMAGES</div>
                        <div data-filter=".course" class="cbp-filter-item">COURSES</div>
                        <div data-filter=".book" class="cbp-filter-item">BOOKS</div>
                        <div data-filter=".event" class="cbp-filter-item">EVENTS</div>
                        <div data-filter=".student" class="cbp-filter-item">STUDENTS</div>
                        <div data-filter=".teacher" class="cbp-filter-item">TEACHERS</div>
                    </div>
                </div>
            </div>
            <div id="projects" class="cbp">
                <div class="cbp-item course">
                    <img src="" alt="">
                    <div class="overlay">
                        <div class="centered text-center">
                            <a href="" class="cbp-lightbox opens"> <i class="fa fa-external-link" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

@endsection