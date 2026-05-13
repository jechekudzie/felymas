@extends('layouts.admin')
@section('title','AHPCZ - Create Nationality')
@section('plugins-css')

@endsection

@section('content')
    <div class="container-fluid">
        <!-- ============================================================== -->
        <!-- Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <div class="row page-titles">
            <div class="col-md-5 align-self-center">
                <a href="/admin/project" class="btn btn-success">Back</a>


            </div>
            <div class="col-md-7 align-self-center text-right">
                <div class="d-flex justify-content-end align-items-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    </ol>
                </div>
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- End Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-2">
                            </div>
                            <div class="col-8">
                                @if($errors->any())
                                    @include('errors')
                                @endif

                                @if(!empty($message))
                                    <div class="alert alert-success alert-rounded"><i class="fa fa-check-circle"></i> {{$message}}
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                                    </div>
                                @endif
                                <h6 class="card-subtitle">Delete Image {{$image->project->name}} </h6>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-7">
                                <form action="/admin/project_images/{{$image->id}}}/destroy" method="post" class="m-t-40" novalidate>
                                    {{method_field('DELETE')}}
                                    {{csrf_field()}}
                                        <h5><span class="text-danger">Are you sure you want delete image ?</span></h5>
                                    <div class="form-group">
                                        <div class="controls">
                                            <input type="submit" name="delete"
                                                   class="btn btn-rounded btn btn-block btn-success"
                                                   value="Yes Delete">
                                        </div>

                                    </div>


                                </form>
                            </div>
                            <div class="col-3 col-md-3">
                                <!-- Card -->
                                <div class="card">
                                    <img class="card-img-top img-responsive" src="{{asset($image->path)}}" alt="Card image cap">
                                    <div class="card-body">
                                        {{--
                                                                                <h4 class="card-title">Current Slider</h4>
                                        --}}
                                    </div>
                                </div>
                                <!-- Card -->
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('plugins-js')

@endsection

