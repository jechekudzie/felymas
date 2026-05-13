<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index()
    {
        $teams = Team::all()->sortBy('name');

        return view('admin.team.index', compact('teams'));
    }

    public function create()
    {
        return view('admin.team.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|image|max:5120',
            'name' => 'required',
            'position' => 'required',
            'qualification' => 'required',
            'description' => 'nullable',
        ]);

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('teams'), $fileName);

        Team::create([
            'name' => $request->input('name'),
            'path' => 'teams/'.$fileName,
            'position' => $request->input('position'),
            'qualification' => $request->input('qualification'),
            'description' => $request->input('description'),
        ]);

        return back()->with('message', 'Team member added successfully');
    }

    public function show(Team $team)
    {
        return view('admin.team.show', compact('team'));
    }

    public function edit(Team $team)
    {
        return view('admin.team.edit', compact('team'));
    }

    public function update(Request $request, Team $team)
    {
        $team->update($request->validate([
            'name' => 'required',
            'position' => 'required',
            'qualification' => 'required',
            'description' => 'required',
        ]));

        return back()->with('message', 'Team updated successfully');
    }

    public function destroy(Team $team)
    {
        if ($team->path && file_exists(public_path($team->path))) {
            @unlink(public_path($team->path));
        }
        $team->delete();

        return redirect('/admin/team')->with('message', 'Team member deleted successfully');
    }

    public function imageCover(Request $request, Team $team)
    {
        $request->validate([
            'file' => 'required|file|image|max:5120',
        ]);

        if ($team->path && file_exists(public_path($team->path))) {
            @unlink(public_path($team->path));
        }

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('teams'), $fileName);

        $team->update(['path' => 'teams/'.$fileName]);

        return back()->with('message', 'Member profile updated successfully');
    }
}
