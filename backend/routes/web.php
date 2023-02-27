<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'user','middleware' => 'auth'], function() {
    Route::get('logout', [LoginController::class, 'logout'])
        ->name('account.logout');
});

Route::group(['middleware' => 'guest'], function() {
    Route::get('register', [RegisterController::class, 'register'])
        ->name('account_register');
    Route::get('login', [LoginController::class, 'login'])
        ->name('login');
});
