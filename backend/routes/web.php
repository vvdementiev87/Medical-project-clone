<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AccessGroupController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\PostController as AdminPostController;
use App\Http\Controllers\Admin\CommentController as AdminCommentController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\Admin\NewsController as AdminNewsController;

Route::group(['prefix' => 'admin', 'as' => 'admin.'], static function () {
    Route::get('/', AdminController::class)->name('index');
    Route::resource('users', AdminUserController::class);
    Route::resource('accessGroup', AccessGroupController::class);
    Route::resource('posts', AdminPostController::class);
    Route::resource('comments', AdminCommentController::class);
    Route::resource('news', AdminNewsController::class);
});

require __DIR__.'/auth.php';
