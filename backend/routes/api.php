<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Content\VideosController;
use App\Http\Controllers\Content\ArticlesController;
use App\Http\Controllers\Content\NewsController;
use App\Http\Controllers\Content\PostsController;
use App\Http\Controllers\Content\CommentsController;
use App\Http\Controllers\Content\GalleryThemeController;
use App\Http\Controllers\Content\EventsController;
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
    Route::get('videos/{id}', [VideosController::class, 'showVideo'])->middleware('traffic');
    Route::get('articles', [ArticlesController::class, 'index']);
    Route::get('articles/{id}', [ArticlesController::class, 'showArticle'])->middleware('traffic');;
    Route::get('news', [NewsController::class, 'index']);
    Route::get('news/{id}', [NewsController::class, 'showNews'])->middleware('traffic');;
    Route::get('gallery', [GalleryThemeController::class, 'index']);
    Route::get('gallery/{id}', [GalleryThemeController::class, 'show']);

    Route::get('conferencies', [EventsController::class, 'index']);
    Route::get('conferencies/{id}', [EventsController::class, 'show']);
});

Route::group(['prefix' => 'forum', 'as' => '',], static function () {
    Route::get('posts', [PostsController::class, 'index']);
    Route::get('/posts/{id}', [PostsController::class, 'showPost']);
    Route::post('/posts/add', [PostsController::class, 'store']);
    Route::get('/posts/delete/{id}', [PostsController::class, 'destroy']);
    Route::post('/posts/edit', [PostsController::class, 'update']);

    Route::get('/comments/{post_id}', [CommentsController::class, 'index']);
    Route::post('/comments/add', [CommentsController::class, 'store']);
    Route::get('/comments/delete/{id}', [CommentsController::class, 'destroy']);
    Route::post('/comments/edit', [CommentsController::class, 'update']);

});

Route::group(['prefix'=>'profile', 'as'=>'profile'], static function(){
    Route::post('favorites/add',[\App\Http\Controllers\Profile\FavoritesController::class, 'add']);
    Route::post('favorites',[\App\Http\Controllers\Profile\FavoritesController::class, 'show']);
    Route::post('favorites/check',[\App\Http\Controllers\Profile\FavoritesController::class, 'check']);
    Route::post('favorites/delete',[\App\Http\Controllers\Profile\FavoritesController::class, 'delete']);
    Route::get('viewed',[\App\Http\Controllers\Profile\RecentViewedController::class, 'show']);
    Route::get('recommended',[\App\Http\Controllers\Profile\RecommendationsController::class, 'show']);

});

require __DIR__.'/auth.php';
