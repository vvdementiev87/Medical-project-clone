<?php

use App\Http\Controllers\NotificationController;
use App\Http\Controllers\Profile\FavoritesController;
use App\Http\Controllers\Profile\RecentViewedController;
use App\Http\Controllers\Profile\RecommendationsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Content\VideosController;
use App\Http\Controllers\Content\ArticlesController;
use App\Http\Controllers\Content\NewsController;
use App\Http\Controllers\Content\PostsController;
use App\Http\Controllers\Content\CommentsController;
use App\Http\Controllers\Content\GalleryThemeController;
use \App\Http\Controllers\Profile\NotificationController as ProfileController;
use App\Http\Controllers\Content\ConferencesController;
use App\Http\Controllers\Content\CommunityCenterController;
use App\Http\Controllers\Admin\RegistrationAdminController;
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

Route::get('/registration', [RegistrationAdminController::class, 'store']);

Route::group(['prefix' => 'content', 'as' => '',], static function () {
    Route::get('videos', [VideosController::class, 'index']);
    Route::get('videos/{id}', [VideosController::class, 'showVideo'])->middleware('traffic');
    Route::get('articles', [ArticlesController::class, 'index']);
    Route::get('articles/{id}', [ArticlesController::class, 'showArticle'])->middleware('traffic');;
    Route::get('news', [NewsController::class, 'index']);
    Route::get('news/{id}', [NewsController::class, 'showNews'])->middleware('traffic');;
    Route::get('gallery', [GalleryThemeController::class, 'index']);
    Route::get('gallery/{id}', [GalleryThemeController::class, 'show']);

    Route::get('conferences', [ConferencesController::class, 'index']);
    Route::get('conferences/{id}', [ConferencesController::class, 'show']);
});

Route::group(['prefix' => 'conferences', 'as' => '',], static function () {
    Route::post('registration', [ConferencesController::class, 'registration']);
    Route::post('unregister', [ConferencesController::class, 'unregister']);
});

Route::group(['prefix' => 'notification', 'as' => '',], static function () {
    Route::get('get/{id}', array(NotificationController::class, 'get'));
    Route::get('read/{id}', array(NotificationController::class, 'read'));
    Route::get('delete/{id}', [NotificationController::class, 'delete']);
});

Route::group(['prefix' => 'forum', 'as' => '',], static function () {
    Route::get('posts', [PostsController::class, 'index']);
    Route::get('/posts/{id}', [PostsController::class, 'showPost']);
    Route::post('/posts/add', [PostsController::class, 'store']);
    Route::get('/posts/delete/{id}', [PostsController::class, 'destroy']);
    Route::post('/posts/edit', [PostsController::class, 'update']);

    Route::get('/{post_id}/comments', [CommentsController::class, 'index']);
    Route::post('/comments/add', [CommentsController::class, 'store']);
    Route::get('/comments/delete/{id}', [CommentsController::class, 'destroy']);
    Route::post('/comments/edit', [CommentsController::class, 'update']);
});

Route::group(['prefix' => 'community', 'as' => '',], static function () {
    Route::get('centers', [CommunityCenterController::class, 'index']);
    Route::get('centers/categories', [CommunityCenterController::class, 'getCategories']);
    Route::get('center/{id}', [CommunityCenterController::class, 'show']);
});

Route::group(['prefix'=>'profile', 'as'=>'profile'], static function(){
    Route::post('/favorites/add',[FavoritesController::class, 'add']);
    Route::post('/favorites',[FavoritesController::class, 'show']);
    Route::post('/favorites/check',[FavoritesController::class, 'check']);
    Route::post('/favorites/delete',[FavoritesController::class, 'delete']);
    Route::get('/viewed',[RecentViewedController::class, 'show']);
    Route::get('/recommended',[RecommendationsController::class, 'show']);
    Route::get('/notifications',[ProfileController::class, 'show']);
    Route::get('/notifications/mark',[ProfileController::class, 'update']);
});

require __DIR__.'/auth.php';
