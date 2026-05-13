@extends('layouts.site')
@section('title','FELYMAS CONSULTANTS INTERNATIONAL')


@section('content')

    <br/>
    <br/>
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
    <!-- Blog Area Start -->
    <section class="blog-area pt-130  pb-100 indicator-style" id="our-blog">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="blog-details-left">
                        <div class="blog-part">
                            <div class="blog-img">
                                <img class="img-responsive" src="{{asset($blog->path)}}" alt="">
                            </div>
                            <div class="blog-info-2">
                                <div class="blog-meta">
                                                <span>
                                                    <i class="fa fa-user"></i>
                                                   Felymas Consultant
                                                </span>
                                    <span>
                                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                                    {{ $blog->created_at->format('d M Y - H:i:s') }}
                                                </span>
                                </div>
                                <h3>{{$blog->title}}</h3>
                                <p> {!! $blog->description !!} </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="blog-right-sidebar">
                        <div class="blog-right-sidebar-top mb-60">
                            <h3 class="leave-comment-text">Recent Posts</h3>
                            <ul>
                                @foreach($recent_posts as $post)
                                    <li><a href="/blog_details/{{$post->id}}">{{$post->title}}</a></li>
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