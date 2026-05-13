<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function index()
    {
        $projects = Project::all()->sortBy('name');

        return view('admin.project.index', compact('projects'));
    }

    public function create()
    {
        return view('admin.project.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|image',
            'name' => 'required',
            'description' => 'nullable',
        ]);

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('projects'), $fileName);

        Project::create([
            'name' => $request->input('name'),
            'path' => 'projects/'.$fileName,
            'description' => $request->input('description'),
        ]);

        return back()->with('message', 'Project added successfully');
    }

    public function show(Project $project)
    {
        return view('admin.project.show', compact('project'));
    }

    public function edit(Project $project)
    {
        return view('admin.project.edit', compact('project'));
    }

    public function update(Request $request, Project $project)
    {
        $project->update($request->validate([
            'name' => 'required',
            'description' => 'required',
        ]));

        return back()->with('message', 'Project updated successfully');
    }

    public function destroy(Project $project)
    {
        if ($project->path && file_exists(public_path($project->path))) {
            @unlink(public_path($project->path));
        }
        $project->delete();

        return redirect('/admin/projects')->with('message', 'Project deleted successfully');
    }

    public function imageCover(Request $request, Project $project)
    {
        $request->validate([
            'file' => 'required|file|image',
        ]);

        if ($project->path && file_exists(public_path($project->path))) {
            @unlink(public_path($project->path));
        }

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('projects'), $fileName);

        $project->update(['path' => 'projects/'.$fileName]);

        return back()->with('message', 'Project image cover updated successfully');
    }
}
