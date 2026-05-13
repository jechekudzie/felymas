<?php

namespace App\Http\Controllers;

use App\Models\Mission;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        return view('admin.mission.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|image|max:5120',
            'description' => 'required',
        ]);

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('missions'), $fileName);

        Mission::create([
            'description' => $request->input('description'),
            'path' => 'missions/'.$fileName,
        ]);

        return back()->with('message', 'Mission added successfully');
    }

    public function show($id)
    {
        //
    }

    public function edit(Mission $mission)
    {
        return view('admin.mission.edit', compact('mission'));
    }

    public function update(Request $request, Mission $mission)
    {
        $mission->update($request->validate([
            'description' => 'required',
        ]));

        return back()->with('message', 'Mission updated successfully');
    }

    public function imageCover(Request $request, Mission $mission)
    {
        $request->validate([
            'file' => 'required|file|image|max:5120',
        ]);

        if ($mission->path && file_exists(public_path($mission->path))) {
            @unlink(public_path($mission->path));
        }

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('missions'), $fileName);

        $mission->update(['path' => 'missions/'.$fileName]);

        return back()->with('message', 'Mission image updated successfully');
    }

    public function destroy($id)
    {
        //
    }
}
