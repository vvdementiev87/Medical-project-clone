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
use App\Http\Controllers\Admin\RegistrationAdminController;
use App\Models\ApplicationsForRegistration;
use App\Http\Controllers\Auth\ApplicationForRegistrationController;

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

    Route::get('all_applications',[RegistrationAdminController::class, 'show_all_applications_in_admin_panel'])
        ->name('all_applications');
    Route::get('show_application/{application}', function(ApplicationsForRegistration $application){
        return \view('admin.registration.show_application', ['application' => $application]);
    })->name('application');

    Route::get('accept_the_application/{application}',  [ApplicationForRegistrationController::class, 'acceptTheApplication'])
        ->name('accept_the_application');
    Route::get('destroy_the_application/{application}', [ApplicationForRegistrationController::class, 'destroyTheApplication'])
        ->name('destroy_the_application');

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
