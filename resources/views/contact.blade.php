@extends('layouts.site')
@section('title','FELYMAS CONSULTANTS INTERNATIONAL')


@section('content')
    <br/>
    <br/>
    <section class="breadcrumbs-contact pt-200 pb-120 bg-2">
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
    <br/>
    <br/>
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            @if (session('message'))
                <div class="alert alert-success alert-rounded"><i
                            class="fa fa-check-circle"></i> {{ session('message') }}
                    <button type="button" class="close" data-dismiss="alert"
                            aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                </div>
            @endif
        </div>
    </div>
    <!--========== CONTACT ==========-->
    <section id="index1-conatcat">
        <div class="container">
            <div class="row">
                <div class="col-md-12 index1-heading">
                    <h2 class="text-uppercase">Get in <span class="color_blue bolder">Touch</span></h2>
                    <p>We are very approachable and would love to speak to you. Feel free to call, send <br>
                        us an email, Tweet us or simply complete the enquiry form.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="row">

                        <div class="col-md-12">
                            <div class="index1_adress">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <p>
                                    <span>1 Harvey Brown Avenue</span>
                                    <span>Milton Park, Harare Zimbabwe</span>
                                </p>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="index1_adress">
                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                <p>
                                    <span><a href="#">info@felymas.com</a></span>
                                    <span><a href="#">www.felymas.com</a></span>
                                </p>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="index1_adress">
                                <i class="fa fa-phone-square" aria-hidden="true"></i>
                                <p>
                                    <span>+263 242 703013</span>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="index1_adress">
                                <i class="fa fa-mobile-phone" aria-hidden="true"></i>
                                <p>

                                    <span>+263 774 999 220</span>
                                    <span>+263 777 597050</span>
                                    <span>+263 777 597050</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-5 col-sm-6 col-xs-12">

    <form method="post" action="/sendmail" class="index1-form">
        {{csrf_field()}}

        <input type="text" class="form-control" name="subject" placeholder="subject" required/>
        @error('subject')
        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
        @enderror

        <input type="text" class="form-control" name="name" placeholder="Name" required/>
        @error('name')
        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
        @enderror
        <input type="text" class="form-control" name="number" placeholder="Number" required/>
        @error('number')
        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
        @enderror
        <input type="email" class="form-control" name="email" placeholder="Email" required/>
        @error('email')
        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
        @enderror
        <textarea name="message" id="massage" class="form-control"
                  placeholder="Message here...."></textarea>
        <input type="submit" value="Submit" class="btn btn-block pur_button form_button" name="button"/>
        @error('message')
        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
        @enderror
    </form>
</div>
<div class="col-md-3 col-sm-6 col-xs-12">
    <a style="text-align:left
;background: #1d1953;color: #fff;" class="btn btn-block btn-social btn-bitbucket">
        <i class="fa fa-facebook"></i> Follow us on facebook
    </a>
    <a style="text-align:left;background: #1d1953;color: #fff;" class="btn btn-block btn-social btn-dropbox">
        <i class="fa fa-twitter-square"></i> Follow us on twitter
    </a>
    <a style="text-align:left; background: #1d1953;color: #fff;" class="btn btn-block btn-social btn-facebook">
        <i class="fa fa-instagram"></i> Follow us on Instagram
    </a>
</div>
</div>
</div>
</section>


{{--<div class="index1-map">
<div id="map"></div>
</div>--}}
<!--========== #/CONTACT ==========-->


@endsection