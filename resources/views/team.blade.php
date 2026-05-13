@extends('layouts.site')
@section('title','FELYMAS CONSULTANTS INTERNATIONAL')


@section('content')
    <section class="breadcrumbs-team pt-200 pb-120 bg-2">
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

    <div class="team">
        <div class="container">


            <div class="row text-center">
                @foreach($members as $member)
                <div class="col-md-4">

                    <img class="img-rounded" alt="team-photo" src="{{$member->path}}" width="100%">

                    <div class="team-member">

                        <h4>{{$member->name}}</h4>

                        <p>{{$member->position}}</p>

                    </div>

                    {{--<p class="social">
                        <a href="#"><span class="fa fa-facebook-square"></span></a>
                        <a href="#"><span class="fa fa-twitter-square"></span></a>
                        <a href="#"><span class="fa fa-linkedin-square"></span></a>
                        <a href="#"><span class="fa fa-google-plus-square"></span></a>
                    </p>--}}

                </div> <!--col-lg-4 -->
                @endforeach
            </div>  <!-- row text-center -->

        </div>
    </div>

@endsection