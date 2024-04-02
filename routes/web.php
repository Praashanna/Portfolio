<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;



Route::name('api.')->prefix('api')->group(function () {
    Route::apiResource('blogs', BlogController::class);
    Route::apiResource('categories', CategoryController::class);
    Route::any('{any}', function () {
        abort(404);
    })->where('any', '.*');
});

Route::get('/{url}', function ($url = '') {
//    $path = base_path('public/' . $url);
//    if (is_file($path)) {
//        return response()->file($path);
//    }
    return view('app');
})->where('url', '.*')->name('app');
