<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class LoginController
{
    /**
     * @return array
     */
    protected function validator()
    {
        return [
            'email'=> ['required', 'email address', 'unique'],
            'password' => ['requared'],
        ];
    }

    /**
     * @param  Request $request
     * @return RedirectResponse
     */
    public function logout(Request $request)
    {
        
        Auth::logout();

        $request->session()->invalidate();
 
        $request->session()->regenerateToken();

        return redirect()->route('login');
    }

    /**
     * @param  Request $request
     * @return RedirectResponse
     */
    public function login(Request $request) 
    {
        $request->validate($this->validator());

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return redirect()->intended('dashboard');
        }
    }
}