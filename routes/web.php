<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\MissionController;
use App\Http\Controllers\PartnersController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectImagesController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\SlidersController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\VisionController;
use Illuminate\Support\Facades\Route;

// Public site (React + Inertia, fed by SiteController).
Route::get('/', [SiteController::class, 'index']);
Route::get('/about', [SiteController::class, 'about']);
Route::get('/service', [SiteController::class, 'service']);
Route::get('/our_team', [SiteController::class, 'ourTeam']);
Route::get('/blog', [SiteController::class, 'blog']);
Route::get('/gallery', [SiteController::class, 'gallery']);
Route::get('/contact', [SiteController::class, 'contact']);
Route::get('/service_details/{id}', [SiteController::class, 'serviceDetails']);
Route::get('/blog_details/{id}', [SiteController::class, 'blogDetails']);
Route::get('/project_details/{id}', [SiteController::class, 'projectDetails']);
Route::post('/sendmail', [SiteController::class, 'sendEmail']);

// Admin (auth + verified) — stays on Blade until phase 4.
Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    Route::get('/', fn () => redirect('/admin/about'));

    Route::resource('about', AboutController::class);
    Route::patch('about/image_cover/{about}', [AboutController::class, 'imageCover']);

    Route::resource('vision', VisionController::class);
    Route::patch('vision/image_cover/{vision}', [VisionController::class, 'imageCover']);

    Route::resource('mission', MissionController::class);
    Route::patch('mission/image_cover/{mission}', [MissionController::class, 'imageCover']);

    Route::resource('partners', PartnersController::class);
    Route::patch('partners/logo/{partner}', [PartnersController::class, 'logoUpdate']);

    Route::resource('services', ServiceController::class);
    Route::patch('services/image_cover/{service}', [ServiceController::class, 'imageCover']);

    Route::resource('projects', ProjectsController::class);
    Route::patch('projects/image_cover/{project}', [ProjectsController::class, 'imageCover']);

    Route::resource('blogs', BlogController::class);
    Route::patch('blogs/image_cover/{blog}', [BlogController::class, 'imageCover']);

    Route::resource('sliders', SlidersController::class);
    Route::patch('sliders/image_cover/{slider}', [SlidersController::class, 'imageCover']);

    Route::resource('gallery', GalleryController::class);
    Route::patch('gallery/image_cover/{gallery}', [GalleryController::class, 'imageCover']);

    Route::get('project_images/{project}/index', [ProjectImagesController::class, 'index']);
    Route::get('project_images/{project}/create', [ProjectImagesController::class, 'create']);
    Route::get('project_images/{image}/show', [ProjectImagesController::class, 'show']);
    Route::delete('project_images/{image}/destroy', [ProjectImagesController::class, 'destroy']);
    Route::post('project_images/{project}/store', [ProjectImagesController::class, 'store']);

    Route::resource('team', TeamController::class);
    Route::patch('team/image_cover/{team}', [TeamController::class, 'imageCover']);
});

// Breeze profile (React/Inertia).
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Legacy aliases — point at admin.
Route::get('/home', fn () => redirect('/admin'))->middleware(['auth', 'verified'])->name('home');
Route::get('/dashboard', fn () => redirect('/admin'))->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
