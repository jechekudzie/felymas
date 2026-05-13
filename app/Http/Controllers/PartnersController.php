<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use Illuminate\Http\Request;

class PartnersController extends Controller
{
    public function index()
    {
        $partners = Partner::all()->sortBy('name');

        return view('admin.partner.index', compact('partners'));
    }

    public function create()
    {
        return view('admin.partner.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|image',
            'name' => 'required',
            'url' => 'nullable',
        ]);

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('partners'), $fileName);

        Partner::create([
            'name' => $request->input('name'),
            'path' => 'partners/'.$fileName,
            'url' => $request->input('url'),
        ]);

        return back()->with('message', 'Partner added successfully');
    }

    public function show(Partner $partner)
    {
        return view('admin.partner.show', compact('partner'));
    }

    public function edit(Partner $partner)
    {
        return view('admin.partner.edit', compact('partner'));
    }

    public function update(Request $request, Partner $partner)
    {
        $partner->update($request->validate([
            'name' => 'required',
            'url' => 'nullable',
        ]));

        return back()->with('message', 'Partner updated successfully');
    }

    public function destroy(Partner $partner)
    {
        if ($partner->path && file_exists(public_path($partner->path))) {
            @unlink(public_path($partner->path));
        }
        $partner->delete();

        return redirect('/admin/partners')->with('message', 'Partner deleted successfully');
    }

    public function logoUpdate(Request $request, Partner $partner)
    {
        $request->validate([
            'file' => 'required|file|image',
        ]);

        if ($partner->path && file_exists(public_path($partner->path))) {
            @unlink(public_path($partner->path));
        }

        $file = $request->file('file');
        $fileName = time().$file->getClientOriginalName();
        $file->move(public_path('partners'), $fileName);

        $partner->update(['path' => 'partners/'.$fileName]);

        return back()->with('message', 'Partner logo updated successfully');
    }
}
