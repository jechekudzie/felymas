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
use Inertia\Inertia;
use Inertia\Response;

class SiteController extends Controller
{
    public function index(): Response
    {
        $sliders = Slider::orderBy('id')->get();
        $hero = $sliders->first();

        return Inertia::render('Home', [
            'hero' => $hero ? [
                'id' => $hero->id,
                'caption' => $hero->caption ?? '',
                'image' => $this->asset($hero->path),
            ] : [
                'id' => 0,
                'caption' => '',
                'image' => '/images/banner.jpg',
            ],
            'services' => Service::orderBy('id')->get()->map(fn ($s) => [
                'id' => $s->id,
                'name' => $s->name,
                'description' => $s->description ?? '',
                'image' => $this->asset($s->path),
            ]),
            'projects' => Project::orderBy('id')->get()->map(fn ($p) => [
                'id' => $p->id,
                'name' => $p->name,
                'description' => $p->description ?? '',
                'image' => $this->asset($p->path),
            ]),
            'members' => Team::orderBy('id')->get()->map(fn ($m) => [
                'id' => $m->id,
                'name' => $m->name,
                'position' => $m->position,
                'qualification' => $m->qualification ?? '',
                'description' => $m->description ?? '',
                'image' => $this->asset($m->path),
            ]),
            'partners' => Partner::orderBy('id')->get()->map(fn ($p) => [
                'id' => $p->id,
                'name' => $p->name,
                'url' => $p->url ?? '',
                'image' => $this->asset($p->path),
            ]),
        ]);
    }

    public function about(): Response
    {
        $about = About::find(1);
        $vision = Vision::find(1);
        $mission = Mission::find(1);

        return Inertia::render('About', [
            'about' => $about ? [
                'id' => $about->id,
                'description' => $about->description,
                'image' => $this->asset($about->path),
            ] : null,
            'vision' => $vision ? [
                'id' => $vision->id,
                'description' => $vision->description,
                'image' => $this->asset($vision->path),
            ] : null,
            'mission' => $mission ? [
                'id' => $mission->id,
                'description' => $mission->description,
                'image' => $this->asset($mission->path),
            ] : null,
            'partners' => Partner::orderBy('id')->get()->map(fn ($p) => [
                'id' => $p->id,
                'name' => $p->name,
                'url' => $p->url ?? '',
                'image' => $this->asset($p->path),
            ]),
            'members' => Team::orderBy('id')->get()->map(fn ($m) => [
                'id' => $m->id,
                'name' => $m->name,
                'position' => $m->position,
                'qualification' => $m->qualification ?? '',
                'description' => $m->description ?? '',
                'image' => $this->asset($m->path),
            ]),
        ]);
    }

    public function service(): Response
    {
        return Inertia::render('Services', [
            'services' => Service::orderBy('id')->get()->map(fn ($s) => [
                'id' => $s->id,
                'name' => $s->name,
                'description' => $s->description ?? '',
                'image' => $this->asset($s->path),
            ]),
        ]);
    }

    public function serviceDetails($id): Response
    {
        $service = Service::findOrFail($id);
        $others = Service::where('id', '!=', $id)->orderBy('id')->get();

        return Inertia::render('ServiceDetail', [
            'service' => [
                'id' => $service->id,
                'name' => $service->name,
                'description' => $service->description ?? '',
                'image' => $this->asset($service->path),
            ],
            'others' => $others->map(fn ($s) => [
                'id' => $s->id,
                'name' => $s->name,
                'description' => $s->description ?? '',
                'image' => $this->asset($s->path),
            ]),
        ]);
    }

    public function projectDetails($id): Response
    {
        $project = Project::with('projectImages')->findOrFail($id);
        $others = Project::where('id', '!=', $id)->orderBy('id')->get();

        return Inertia::render('ProjectDetail', [
            'project' => [
                'id' => $project->id,
                'name' => $project->name,
                'description' => $project->description ?? '',
                'image' => $this->asset($project->path),
                'images' => $project->projectImages->map(fn ($i) => [
                    'id' => $i->id,
                    'image' => $this->asset($i->path),
                ]),
            ],
            'others' => $others->map(fn ($p) => [
                'id' => $p->id,
                'name' => $p->name,
                'description' => $p->description ?? '',
                'image' => $this->asset($p->path),
            ]),
        ]);
    }

    public function ourTeam(): Response
    {
        return Inertia::render('Team', [
            'members' => Team::orderBy('id')->get()->map(fn ($m) => [
                'id' => $m->id,
                'name' => $m->name,
                'position' => $m->position,
                'qualification' => $m->qualification ?? '',
                'description' => $m->description ?? '',
                'image' => $this->asset($m->path),
            ]),
        ]);
    }

    public function blog(): Response
    {
        return Inertia::render('Blog', [
            'posts' => Blog::orderByDesc('created_at')->get()->map(fn ($b) => [
                'id' => $b->id,
                'title' => $b->title,
                'description' => $b->description ?? '',
                'image' => $this->asset($b->path),
                'publishedAt' => optional($b->created_at)->toIso8601String(),
            ]),
        ]);
    }

    public function blogDetails($id): Response
    {
        $post = Blog::findOrFail($id);
        $recent = Blog::where('id', '!=', $id)->orderByDesc('created_at')->limit(4)->get();

        return Inertia::render('BlogDetail', [
            'post' => [
                'id' => $post->id,
                'title' => $post->title,
                'description' => $post->description ?? '',
                'image' => $this->asset($post->path),
                'publishedAt' => optional($post->created_at)->toIso8601String(),
            ],
            'recent' => $recent->map(fn ($b) => [
                'id' => $b->id,
                'title' => $b->title,
                'description' => $b->description ?? '',
                'image' => $this->asset($b->path),
                'publishedAt' => optional($b->created_at)->toIso8601String(),
            ]),
        ]);
    }

    public function gallery(Request $request): Response
    {
        $images = Gallery::orderByDesc('created_at')->get();

        return Inertia::render('Gallery', [
            'images' => $images->map(fn ($g) => [
                'id' => $g->id,
                'caption' => $g->caption ?? '',
                'image' => $this->asset($g->path),
            ]),
            'fallbackProjects' => Project::orderByDesc('created_at')->get()->map(fn ($p) => [
                'id' => $p->id,
                'name' => $p->name,
                'description' => $p->description ?? '',
                'image' => $this->asset($p->path),
            ]),
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('Contact');
    }

    public function sendEmail(Request $request)
    {
        $contact = $request->validate([
            'subject' => ['required', 'string', 'max:200'],
            'name' => ['required', 'string', 'max:120'],
            'number' => ['required', 'string', 'max:40'],
            'email' => ['required', 'email', 'max:150'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        Mail::to('nigel@leadingdigital.africa')->send(new ContactForm($contact));

        return back()->with('message', 'Thank you for contacting us — we will reply within one business day.');
    }

    /**
     * Build a public URL for an asset stored under public/<path>,
     * encoding spaces and other unsafe chars per path segment.
     */
    private function asset(?string $path): ?string
    {
        if (! $path) {
            return null;
        }

        $segments = array_map('rawurlencode', explode('/', ltrim($path, '/')));

        return asset(implode('/', $segments));
    }
}
