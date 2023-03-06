<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;

use App\Http\Controllers\Content\VideosController;
use App\Http\Controllers\Content\ArticlesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'user','middleware' => 'auth'], function() {
    Route::get('logout', [LoginController::class, 'logout'])
        ->name('account.logout');
});

Route::group(['prefix' => 'auth', 'as' => '',], static function () {
Route::post('register', [RegisterController::class, 'register'])
        ->name('account_register');
Route::post('login', [LoginController::class, 'login'])
        ->name('login');    
    });

        Route::group(['prefix' => 'content', 'as' => '',], static function () {
            Route::get('videos', [VideosController::class, 'index']);
            Route::get('articles', [ArticlesController::class, 'index']);
        });
        
