<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/product', [ProductController::class, 'index'])->name('product');

Route::get('/course/leadership', [CourseController::class, 'leadership'])->name('course.leadership');
Route::get('/course/data', [CourseController::class, 'data'])->name('course.data');
Route::get('/course/design', [CourseController::class, 'design'])->name('course.design');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
