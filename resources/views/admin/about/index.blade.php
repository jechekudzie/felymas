@extends('layouts.admin')
@section('title','Felymas')
@section('plugins-css')

@endsection

@section('content')
    <div class="container-fluid">
        <!-- Bread crumb and right sidebar toggle -->
        <div class="row page-titles">
            <div class="col-md-5 align-self-center">
                <a href="/admin" class="btn btn-success"><i class="fa fa-gear"></i> Administration Dashboard</a>
            </div>
            <div class="col-md-7 align-self-center text-right">
                <div class="d-flex justify-content-end align-items-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                    </ol>

                </div>
            </div>
        </div>
        <!-- End Bread crumb and right sidebar toggle -->

        <!-- Professions List -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body p-b-0">
                        <h4 class="card-title">About Felymas Consultancy</h4>
                    </div>
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs customtab" role="tablist">
                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#home2" role="tab"><span
                                        class="hidden-sm-up"><i class="ti-home"></i></span> <span
                                        class="hidden-xs-down">About Us</span></a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#profile2" role="tab"><span
                                        class="hidden-sm-up"><i class="ti-user"></i></span> <span
                                        class="hidden-xs-down">Our Vision</span></a></li>

                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#profile3" role="tab"><span
                                        class="hidden-sm-up"><i class="ti-user"></i></span> <span
                                        class="hidden-xs-down">Our Mission</span></a></li>
                    </ul>
                    <br/>
                    @if (session('message'))
                        <div class="alert alert-success alert-rounded col-md-6"><i
                                    class="fa fa-check-circle"></i> {{ session('message') }}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span
                                        aria-hidden="true">&times;</span></button>
                        </div>
                @endif
                <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane active" id="home2" role="tabpanel">
                            <div class="col-12">

                                <div class="card">
                                    <div class="card-body">

                                        <a href="/admin/about/create" class="btn btn-success"><i
                                                    class="fa fa-plus-circle"></i> Add about us
                                        </a>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="row">
                                                    <!-- column -->
                                                    <div class="col-lg-6 col-md-6">
                                                        <!-- Card -->
                                                        <div class="card">
                                                            <img class="card-img-top img-responsive"
                                                                 src="@if($aboutus){{asset($aboutus->path)}}@endif"
                                                                 alt="Card image cap">
                                                        </div>
                                                        <!-- Card -->
                                                    </div>
                                                    <!-- column -->
                                                    <!-- column -->
                                                    <div class="col-lg-6 col-md-6 img-responsive">
                                                        <!-- Card -->
                                                        <div class="card">
                                                            <div class="card-body">
                                                                <h4 class="card-title">Felymas About Us</h4>
                                                                <p class="card-text">@if($aboutus){!!$aboutus->description!!}@endif</p>
                                                                <a href="/admin/about/@if($aboutus){{$aboutus->id}}@endif/edit"
                                                                   class="btn btn-primary">Edit
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <!-- Card -->
                                                    </div>
                                                    <!-- column -->
                                                </div>
                                                <!-- Row -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane  p-20" id="profile2" role="tabpanel">

                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">

                                        <a href="/admin/vision/create" class="btn btn-success"><i
                                                    class="fa fa-plus-circle"></i> Vision and Mission</a>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="row">
                                                    <!-- column -->
                                                    <div class="col-lg-6 col-md-6">
                                                        <!-- Card -->
                                                        <div class="card">
                                                            <img class="card-img-top img-responsive"
                                                                 src="@if($vision){{asset($vision->path)}}@endif"
                                                                 alt="Card image cap">
                                                        </div>
                                                        <!-- Card -->
                                                    </div>
                                                    <!-- column -->
                                                    <!-- column -->
                                                    <div class="col-lg-6 col-md-6 img-responsive">
                                                        <!-- Card -->
                                                        <div class="card">
                                                            <div class="card-body">
                                                                <h4 class="card-title">Our Vision</h4>
                                                                <p class="card-text">@if($vision){!!$vision->description!!}@endif</p>
                                                                <a href="/admin/vision/@if($vision){{$vision->id}}@endif/edit"
                                                                   class="btn btn-primary">Edit
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <!-- Card -->
                                                    </div>
                                                    <!-- column -->
                                                </div>
                                                <!-- Row -->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane  p-20" id="profile3" role="tabpanel">

                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">

                                        <a href="/admin/mission/create" class="btn btn-success"><i
                                                    class="fa fa-plus-circle"></i>Our Mission</a>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div class="row">
                                            @if($mission)
                                                <div class="col-12">
                                                    <div class="row">
                                                        <!-- column -->
                                                        <div class="col-lg-6 col-md-6">
                                                            <!-- Card -->
                                                            <div class="card">
                                                                <img class="card-img-top img-responsive"
                                                                     src="{{asset($mission->path)}}"
                                                                     alt="Card image cap">
                                                            </div>
                                                            <!-- Card -->
                                                        </div>
                                                        <!-- column -->
                                                        <!-- column -->
                                                        <div class="col-lg-6 col-md-6 img-responsive">
                                                            <!-- Card -->
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <h4 class="card-title">Our Mission</h4>
                                                                    <p class="card-text">{!!$mission->description!!}</p>
                                                                    <a href="/admin/mission/{{$mission->id}}/edit"
                                                                       class="btn btn-primary">Edit
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <!-- Card -->
                                                        </div>
                                                        <!-- column -->
                                                    </div>
                                                    <!-- Row -->
                                                </div>
                                            @endif
                                        </div>

                                    </div>
                                </div>
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

                $('#professions').DataTable({
                    order: [],
                    dom: 'Bfrtip',

                    buttons: [
                        'copy', 'csv', 'excel', 'pdf', 'print'
                    ]
                });

                $('#prefixes').DataTable({
                    order: [],
                    dom: 'Bfrtip',

                    buttons: [
                        'copy', 'csv', 'excel', 'pdf', 'print'
                    ]
                });

                $('#cdpoints').DataTable({
                    order: [],
                    dom: 'Bfrtip',

                    buttons: [
                        'copy', 'csv', 'excel', 'pdf', 'print'
                    ]
                });
            </script>
@endsection
