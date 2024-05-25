<?php

use App\Http\Controllers\Users\UserController;
use App\Http\Controllers\Courses\CourseController;
use Illuminate\Support\Facades\Route;

require __DIR__.'/auth.php';

Route::middleware('auth:api')->group(function () {
    Route::get('/user', [UserController::class, 'show'])
        ->name('user.show');
});

Route::middleware(['auth:api', 'verified'])->group(function () {
    Route::patch('/user', [UserController::class, 'update'])
        ->name('user.update');

    Route::patch('/user/change-password', [UserController::class, 'changePassword'])
        ->name('user.change-password');

    Route::get('/courses', [CourseController::class, 'show_list']);

    Route::get('/courses/{course}', [CourseController::class, 'show'])
        ->name('courses.show');

    Route::patch('/course', [CourseController::class, 'update'])
        ->name('courses.update');
});
