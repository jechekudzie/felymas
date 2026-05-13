@extends('layouts.site')
@section('title','FELYMAS CONSULTANTS INTERNATIONAL')


@section('content')

    <section class="breadcrumbs-blog pt-200 pb-120 bg-2">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="breadcrumbs">
                        <h2 class="page-title"></h2>
                        <ul>
                            <li>
                                <a class="active" href=""></a>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <br/>
    <br/>
    <section class="blog-area pt-130  pb-100 indicator-style" id="our-blog">
        <div class="container">
            <div class="row">
                @foreach($blogs as $blog)
                    <div class="col-md-4 col-sm-6">
                        <!-- Blog Single -->
                        <div class="blog-single pb-30">
                            <div class="blog-img">
                                <a href="/blog_details/{{$blog->id}}"><img src="{{asset($blog->path)}}" class="img-responsive" alt=""/></a>
                                <h2>{{ $blog->created_at->format('d') }}<span>{{ $blog->created_at->format('M') }}</span></h2>
                            </div>
                            <div class="blog-content mt-20">
                                <div class="blog-cnt-top">
                                    <h5><a href="/blog_details/{{$blog->id}}">{{$blog->title}}</a></h5>
                                    <span>By Felymas</span>
                                </div>
                                <p>{!! substr($blog->description,0,40) !!}...<a href="/blog_details/{{$blog->id}}">Read More</a></p>
                            </div>
                        </div>
                        <!-- Blog Single -->
                    </div>
                @endforeach
            </div>
        </div>
    </section>

@endsection