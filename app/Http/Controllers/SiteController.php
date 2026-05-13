<?php

namespace App\Http\Controllers;

use App\Mail\ContactForm;
use App\Models\About;
use App\Models\Blog;
use App\Models\Gallery;
use App\Models\Mission;
use App\Models\Partner;
use App\Models\Project;
use App\Models\Service;
use App\Models\Slider;
use App\Models\Team;
use App\Models\Vision;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SiteController extends Controller
{
    public function index()
    {
        $count = 0;
        $class = '';
        $sliders = Slider::all();
        $services = Service::all();
        $members = Team::all();
        $projects = Project::all();
        $partners = Partner::all();

        return view('index', compact(
            'class', 'count', 'sliders', 'services', 'members', 'projects', 'partners'
        ));
    }

    public function about()
    {
        $about = About::find(1);
        $vision = Vision::find(1);
        $mission = Mission::find(1);
        $partners = Partner::all();

        return view('about', compact('about', 'vision', 'mission', 'partners'));
    }

    public function gallery(Request $request)
    {
        $images = Gallery::paginate(3);

        return view('gallery', compact('images'));
    }

    public function contact()
    {
        return view('contact');
    }

    public function service()
    {
        $services = Service::all();

        return view('service', compact('services'));
    }

    public function blog()
    {
        $blogs = Blog::all();

        return view('blog', compact('blogs'));
    }

    public function ourTeam()
    {
        $members = Team::all();

        return view('team', compact('members'));
    }

    public function blogDetails($id)
    {
        $blog = Blog::find($id);
        $recent_posts = Blog::all()->sortByDesc('created_at');

        return view('blogdetails', compact('blog', 'recent_posts'));
    }

    public function projectDetails($id)
    {
        $project = Project::find($id);
        $other_projects = Project::all();

        return view('projectdetails', compact('project', 'other_projects'));
    }

    public function serviceDetails($id)
    {
        $service = Service::find($id);
        $other_services = Service::all();

        return view('servicedetails', compact('service', 'other_services'));
    }

    public function sendEmail(Request $request)
    {
        $contact = $request->validate([
            'subject' => ['required'],
            'name' => ['required'],
            'number' => ['required'],
            'email' => ['required', 'email'],
            'message' => ['required'],
        ]);

        Mail::to('nigel@leadingdigital.africa')->send(new ContactForm($contact));

        return back()->with('message', 'Thank you for contacting us, we will get back to you as soon as possible.');
    }
}
