<?php

use App\Http\Controllers\Content\CommentsController;
use App\Http\Controllers\Content\PostsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AccessGroupController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\PostController as AdminPostController;
use App\Http\Controllers\Admin\CommentController as AdminCommentController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\Admin\NewsController as AdminNewsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['prefix' => 'admin', 'as' => 'admin.'], static function () {
    Route::get('/', AdminController::class)->name('index');
    Route::resource('users', AdminUserController::class);
    Route::resource('accessGroup', AccessGroupController::class);
    Route::resource('posts', AdminPostController::class);
    Route::resource('comments', AdminCommentController::class);
    Route::resource('news', AdminNewsController::class);
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

require __DIR__.'/auth.php';
