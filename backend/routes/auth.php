<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'auth', 'as' => '',], static function () {
    Route::post('/register', [RegisteredUserController::class, 'store'])->
    name('register');

    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->name('login');

    Route::post('/user/update', [RegisteredUserController::class, 'update'])
        ->middleware(['auth', 'auth:sanctum'])->
        name('user.update');

    Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
        ->middleware(['guest', 'auth:sanctum'])
        ->name('password.email');

    Route::get('/reset-password', [NewPasswordController::class, 'index'])
        ->middleware(['auth', 'auth:sanctum'])
        ->name('password.index');

    Route::post('/reset-password', [NewPasswordController::class, 'store'])
        ->middleware(['auth', 'auth:sanctum'])
        ->name('password.store');

    Route::get('/verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['auth', 'signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware(['auth', 'throttle:6,1'])
        ->name('verification.send');

    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
        ->middleware(['auth', 'auth:sanctum'])
        ->name('logout');

});

