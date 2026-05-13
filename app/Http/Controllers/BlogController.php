<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all()->sortBy('title');

        return view('admin.blog.index', compact('blogs'));
    }

    public function create()
    {
        return view('admin.blog.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|image',
            'title' => 'required',
            'description' => 'required',
        ]);

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('blogs'), $fileName);

        Blog::create([
            'title' => $request->input('title'),
            'path' => 'blogs/'.$fileName,
            'description' => $request->input('description'),
        ]);

        return back()->with('message', 'Blog added successfully');
    }

    public function show(Blog $blog)
    {
        return view('admin.blog.show', compact('blog'));
    }

    public function edit(Blog $blog)
    {
        return view('admin.blog.edit', compact('blog'));
    }

    public function update(Request $request, Blog $blog)
    {
        $blog->update($request->validate([
            'title' => 'required',
            'description' => 'required',
        ]));

        return back()->with('message', 'Blog updated successfully');
    }

    public function destroy(Blog $blog)
    {
        if ($blog->path && file_exists(public_path($blog->path))) {
            @unlink(public_path($blog->path));
        }
        $blog->delete();

        return redirect('/admin/blogs')->with('message', 'Blog deleted successfully');
    }

    public function imageCover(Request $request, Blog $blog)
    {
        $request->validate([
            'file' => 'required|file|image',
        ]);

        if ($blog->path && file_exists(public_path($blog->path))) {
            @unlink(public_path($blog->path));
        }

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('blogs'), $fileName);

        $blog->update(['path' => 'blogs/'.$fileName]);

        return back()->with('message', 'Blog image cover updated successfully');
    }
}
