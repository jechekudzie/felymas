@extends('layouts.admin')
@section('title','AHPCZ - Cities/Locations')
@section('plugins-css')
    <link href="{{asset('../assets/node_modules/Magnific-Popup-master/dist/magnific-popup.css')}}" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="{{asset('dist/css/style.min.css')}}" rel="stylesheet">
    <!-- page css -->
    <link href="{{asset('dist/css/pages/user-card.css')}}" rel="stylesheet">
@endsection

@section('content')
    <div class="container-fluid">
        <!-- Bread crumb and right sidebar toggle -->
        <div class="row page-titles">
            <div class="col-md-5 align-self-center">
                <a href="/admin/gallery/create" class="btn btn-success"><i class="fa fa-plus-circle"></i> Add
                    Images</a>
            </div>
            @if (session('message'))
                <div class="alert alert-success alert-rounded"><i class="fa fa-check-circle"></i>  {{ session('message') }}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
            @endif
            <div class="col-md-7 align-self-center text-right">
                <div class="d-flex justify-content-end align-items-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>

                        <li class="breadcrumb-item active">Gallery</li>
                    </ol>

                </div>
            </div>
        </div>
        <!-- End Bread crumb and right sidebar toggle -->

        <div class="{{--row m-t-40--}}">
            <div class="col-md-12 col-lg-12">
                <h4 class="card-title">Our Gallery </h4>
            </div>

            <div class="card-columns el-element-overlay">
                @foreach($images as $image)
                    <div class="card">
                        <div class="el-card-item">
                            <div class="el-card-avatar el-overlay-1">
                                <a class="image-popup-vertical-fit img-responsive" href="{{asset($image->path)}}"> <img
                                            src="{{asset($image->path)}}" alt=""/> </a>
                            </div>
                            <div class="el-card-content">
                                <h3 class="box-title">{{$image->caption}}</h3>
                                <small><a href="/admin/gallery/{{$image->id}}">Delete image</a> </small>
                                <br/></div>
                        </div>
                    </div>
                @endforeach
            </div>

        </div>
        @endsection

        @section('plugins-js')

            <script src="{{asset('../assets/node_modules/Magnific-Popup-master/dist/jquery.magnific-popup.min.js')}}"></script>
            <script src="{{asset('../assets/node_modules/Magnific-Popup-master/dist/jquery.magnific-popup-init.js')}}"></script>

@endsection
