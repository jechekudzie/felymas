@extends('layouts.admin')
@section('title','AHPCZ - Cities/Locations')
@section('plugins-css')

@endsection

@section('content')
    <div class="container-fluid">
        <!-- Bread crumb and right sidebar toggle -->
        <div class="row page-titles">
            <div class="col-md-5 align-self-center">
                <a href="/admin/projects/{{$project->id}}/edit" class="btn btn-success"><i class="fa fa-arrow-left"></i> Back</a>
                <a href="/admin/project_images/{{$project->id}}/create" class="btn btn-success"><i class="fa fa-plus-circle"></i> Add
                    Project Images</a>
            </div>
            <div class="col-md-7 align-self-center text-right">
                <div class="d-flex justify-content-end align-items-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>

                        <li class="breadcrumb-item active"></li>
                    </ol>

                </div>
            </div>
        </div>
        <!-- End Bread crumb and right sidebar toggle -->

        <!-- Cities/Locations List -->
        <div class="row">
            <div class="col-12">
                @if (session('message'))
                    <div class="alert alert-success alert-rounded"><i
                                class="fa fa-check-circle"></i> {{ session('message') }}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                    </div>
                @endif
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{{$project->name}}</h4>
                        <div class="row">
                            @foreach($project->projectImages as $image)
                                <div class="col-lg-4 col-md-6">
                                    <!-- Card -->
                                    <div class="card">
                                        <img class="card-img-top img-responsive" src="{{asset($image->path)}}"
                                             alt="Card image cap">
                                        <div class="card-body">
                                            <h4 class="card-title">{{$image->name}}</h4>
                                            {{--
                                                                                        <p class="card-text">{!!substr( $image->description,0,50) !!}....</p>
                                            --}}
                                            <a href="/admin/project_images/{{$image->id}}/show" class="btn btn-primary">Delete Image</a>
                                        </div>
                                    </div>
                                    <!-- Card -->
                                </div>
                            @endforeach
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
@endsection

@section('plugins-js')

    <!-- This is data table -->
    <script src="{{asset('assets/node_modules/datatables/jquery.dataTables.min.js')}}"></script>
    <!-- start - This is for export functionality only -->
    <script src="https://cdn.datatables.net/buttons/1.2.2/js/dataTables.buttons.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.2.2/js/buttons.flash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
    <script src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min.js"></script>
    <script src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.2.2/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.2.2/js/buttons.print.min.js"></script>
    <!-- end - This is for export functionality only -->
    <script>

        $('#cities').DataTable({
            order: [],
            dom: 'Bfrtip',

            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });
    </script>
@endsection
