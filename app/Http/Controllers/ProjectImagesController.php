<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectImage;
use Illuminate\Http\Request;

class ProjectImagesController extends Controller
{
    public function index(Project $project)
    {
        return view('admin.project_images.index', compact('project'));
    }

    public function create(Project $project)
    {
        return view('admin.project_images.create', compact('project'));
    }

    public function store(Request $request, Project $project)
    {
        $request->validate([
            'file' => 'required',
            'file.*' => 'file|image',
        ]);

        $files = $request->file('file');
        $number = 0;
        foreach ($files as $file) {
            $fileName = $number.time().$file->getClientOriginalName();
            $file->move(public_path('project_image'), $fileName);

            ProjectImage::create([
                'project_id' => $project->id,
                'path' => 'project_image/'.$fileName,
            ]);
            $number++;
        }

        return back()->with('message', 'ProjectImages added successfully');
    }

    public function show(ProjectImage $image)
    {
        return view('admin.project_images.show', compact('image'));
    }

    public function destroy(ProjectImage $image)
    {
        $projectId = $image->project_id;
        if ($image->path && file_exists(public_path($image->path))) {
            @unlink(public_path($image->path));
        }
        $image->delete();

        return redirect('/admin/project_images/'.$projectId.'/index')
            ->with('message', 'Image deleted successfully');
    }
}
