<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index()
    {
        $images = Gallery::all()->sortBy('caption');

        return view('admin.gallery.index', compact('images'));
    }

    public function create()
    {
        return view('admin.gallery.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required',
            'file.*' => 'file|image',
            'caption' => 'required',
        ]);

        $caption = $request->input('caption');
        $files = $request->file('file');
        $number = 0;

        foreach ($files as $file) {
            $fileName = $number.time().$file->getClientOriginalName();
            $file->move(public_path('galleries'), $fileName);

            Gallery::create([
                'caption' => $caption,
                'path' => 'galleries/'.$fileName,
            ]);
            $number++;
        }

        return back()->with('message', 'Gallery added successfully');
    }

    public function show(Gallery $gallery)
    {
        return view('admin.gallery.show', compact('gallery'));
    }

    public function edit(Gallery $gallery)
    {
        return view('admin.gallery.edit', compact('gallery'));
    }

    public function update(Request $request, Gallery $gallery)
    {
        $gallery->update($request->validate([
            'caption' => 'required',
        ]));

        return back()->with('message', 'Gallery updated successfully');
    }

    public function destroy(Gallery $gallery)
    {
        if ($gallery->path && file_exists(public_path($gallery->path))) {
            @unlink(public_path($gallery->path));
        }
        $gallery->delete();

        return redirect('/admin/gallery')->with('message', 'Image deleted successfully');
    }

    public function imageCover(Request $request, Gallery $gallery)
    {
        $request->validate([
            'file' => 'required|file|image',
        ]);

        if ($gallery->path && file_exists(public_path($gallery->path))) {
            @unlink(public_path($gallery->path));
        }

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('galleries'), $fileName);

        $gallery->update(['path' => 'galleries/'.$fileName]);

        return back()->with('message', 'Gallery image updated successfully');
    }
}
