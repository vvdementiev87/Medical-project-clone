<?php

use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\ConferenceController;
use App\Http\Controllers\Admin\ConferenceRegistrationController;
use App\Http\Controllers\Admin\VideoController;
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

Route::group(['prefix' => 'admin', 'as' => 'admin.'], static function () {
    Route::get('/', AdminController::class)->name('index');
    Route::resource('users', AdminUserController::class);
    Route::resource('accessGroup', AccessGroupController::class);
    Route::resource('posts', AdminPostController::class);
    Route::resource('comments', AdminCommentController::class);
    Route::resource('news', AdminNewsController::class);
    Route::resource('accounts', AccountController::class);
    Route::resource('articles', ArticleController::class);
    Route::resource('videos', VideoController::class);
    Route::resource('conferences', ConferenceController::class);
    Route::resource('conferenceRegistration', ConferenceRegistrationController::class);

    Route::get('all_applications',[RegistrationAdminController::class, 'show_all_applications_in_admin_panel'])
        ->name('all_applications');
    Route::get('show_application/{application}', function(ApplicationsForRegistration $application){
        return \view('admin.registration.show_application', ['application' => $application]);
    })->name('application');

    Route::get('accept_the_application/{application}',  [ApplicationForRegistrationController::class, 'acceptTheApplication'])
        ->name('accept_the_application');
    Route::get('reject_the_application/{application}', [ApplicationForRegistrationController::class, 'rejectTheApplication'])
        ->name('reject_the_application');
});

require __DIR__.'/auth.php';
