<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\Mission;
use App\Models\Vision;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        $aboutus = About::find(1);
        $vision = Vision::find(1);
        $mission = Mission::find(1);

        return view('admin.about.index', compact('aboutus', 'vision', 'mission'));
    }

    public function create()
    {
        return view('admin.about.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|image|max:5120',
            'description' => 'required',
        ]);

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $path = $file->move(public_path('uploads'), $fileName);

        About::create([
            'description' => $request->input('description'),
            'path' => 'uploads/'.$fileName,
        ]);

        return back()->with('message', 'About added successfully');
    }

    public function show(About $about)
    {
        //
    }

    public function edit(About $about)
    {
        return view('admin.about.edit', compact('about'));
    }

    public function update(Request $request, About $about)
    {
        $about->update($request->validate([
            'description' => 'required',
        ]));

        return back()->with('message', 'About updated successfully');
    }

    public function imageCover(Request $request, About $about)
    {
        $request->validate([
            'file' => 'required|file|image|max:5120',
        ]);

        if ($about->path && file_exists(public_path($about->path))) {
            @unlink(public_path($about->path));
        }

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('uploads'), $fileName);

        $about->update(['path' => 'uploads/'.$fileName]);

        return back()->with('message', 'Image cover updated successfully');
    }

    public function destroy(About $about)
    {
        //
    }
}
