@extends('layouts.site')
@section('title','FELYMAS CONSULTANTS INTERNATIONAL')


@section('content')
    {{--
        <link href="{{asset('dist/css/style.min.css')}}" rel="stylesheet">
    --}}

    <br/>
    <br/>
    <section class="breadcrumbs-services pt-200 pb-120 bg-2">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="breadcrumbs">
                        <h2 class="page-title"></h2>
                        <ul>
                            <li>
                                {{--<a class="active" href=""></a>--}}
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <br/>
    <!--========== SERVICES ==========-->
    <section id="index1-recent">
        <div class="container">
            <div class="row">
                @foreach($services as $service)
                    <a href="/service_details/{{$service->id}}">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="media"><img src="{{$service->path}}" class="img-responsive" alt="image"/>
                            {{--<div class="media__body">
                                <h3>{{$service->name}}</h3>
                                <p><a href="/service_details/{{$service->id}}">View</a> </p>
                            </div>--}}
                        </div>
                    </div>
                    </a>
                @endforeach
            </div>
        </div>
    </section>    <!--========== #/SERVICES ==========-->




@endsection