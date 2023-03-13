<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Content\VideosController;
use App\Http\Controllers\Content\ArticlesController;
use App\Http\Controllers\Content\PostsController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'content', 'as' => '',], static function () {
    Route::get('videos', [VideosController::class, 'index']);
    Route::get('articles', [ArticlesController::class, 'index']);
});

Route::group(['prefix' => 'forum', 'as' => '',], static function () {
    Route::get('posts', [PostsController::class, 'index']);
    Route::get('/posts/{id}', [PostsController::class, 'show']);
});
require __DIR__.'/auth.php';
