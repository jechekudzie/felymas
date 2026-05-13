<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Http\Request;

class SlidersController extends Controller
{
    public function index()
    {
        $sliders = Slider::all()->sortBy('caption');

        return view('admin.slider.index', compact('sliders'));
    }

    public function create()
    {
        return view('admin.slider.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|image',
            'caption' => 'required',
        ]);

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('sliders'), $fileName);

        Slider::create([
            'caption' => $request->input('caption'),
            'path' => 'sliders/'.$fileName,
        ]);

        return back()->with('message', 'Slider added successfully');
    }

    public function show(Slider $slider)
    {
        return view('admin.slider.show', compact('slider'));
    }

    public function edit(Slider $slider)
    {
        return view('admin.slider.edit', compact('slider'));
    }

    public function update(Request $request, Slider $slider)
    {
        $slider->update($request->validate([
            'caption' => 'required',
        ]));

        return back()->with('message', 'Slider updated successfully');
    }

    public function destroy(Slider $slider)
    {
        if ($slider->path && file_exists(public_path($slider->path))) {
            @unlink(public_path($slider->path));
        }
        $slider->delete();

        return redirect('/admin/sliders')->with('message', 'Slider deleted successfully');
    }

    public function imageCover(Request $request, Slider $slider)
    {
        $request->validate([
            'file' => 'required|file|image',
        ]);

        if ($slider->path && file_exists(public_path($slider->path))) {
            @unlink(public_path($slider->path));
        }

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('sliders'), $fileName);

        $slider->update(['path' => 'sliders/'.$fileName]);

        return back()->with('message', 'Slider image updated successfully');
    }
}
