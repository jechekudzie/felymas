<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all()->sortBy('name');

        return view('admin.service.index', compact('services'));
    }

    public function create()
    {
        return view('admin.service.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|image',
            'name' => 'required',
            'description' => 'required',
        ]);

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('services'), $fileName);

        Service::create([
            'name' => $request->input('name'),
            'path' => 'services/'.$fileName,
            'description' => $request->input('description'),
        ]);

        return back()->with('message', 'Service added successfully');
    }

    public function show(Service $service)
    {
        return view('admin.service.show', compact('service'));
    }

    public function edit(Service $service)
    {
        return view('admin.service.edit', compact('service'));
    }

    public function update(Request $request, Service $service)
    {
        $service->update($request->validate([
            'name' => 'required',
            'description' => 'required',
        ]));

        return back()->with('message', 'Service updated successfully');
    }

    public function destroy(Service $service)
    {
        if ($service->path && file_exists(public_path($service->path))) {
            @unlink(public_path($service->path));
        }
        $service->delete();

        return redirect('/admin/services')->with('message', 'Service deleted successfully');
    }

    public function imageCover(Request $request, Service $service)
    {
        $request->validate([
            'file' => 'required|file|image',
        ]);

        if ($service->path && file_exists(public_path($service->path))) {
            @unlink(public_path($service->path));
        }

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('services'), $fileName);

        $service->update(['path' => 'services/'.$fileName]);

        return back()->with('message', 'Service image cover updated successfully');
    }
}
