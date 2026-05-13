<?php

namespace App\Http\Controllers;

use App\Models\Vision;
use Illuminate\Http\Request;

class VisionController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        return view('admin.vision.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|image|max:5120',
            'description' => 'required',
        ]);

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('visions'), $fileName);

        Vision::create([
            'description' => $request->input('description'),
            'path' => 'visions/'.$fileName,
        ]);

        return back()->with('message', 'Vision added successfully');
    }

    public function show($id)
    {
        //
    }

    public function edit(Vision $vision)
    {
        return view('admin.vision.edit', compact('vision'));
    }

    public function update(Request $request, Vision $vision)
    {
        $vision->update($request->validate([
            'description' => 'required',
        ]));

        return back()->with('message', 'Vision updated successfully');
    }

    public function imageCover(Request $request, Vision $vision)
    {
        $request->validate([
            'file' => 'required|file|image|max:5120',
        ]);

        if ($vision->path && file_exists(public_path($vision->path))) {
            @unlink(public_path($vision->path));
        }

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('visions'), $fileName);

        $vision->update(['path' => 'visions/'.$fileName]);

        return back()->with('message', 'Vision image updated successfully');
    }

    public function destroy($id)
    {
        //
    }
}
