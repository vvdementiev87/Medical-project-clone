<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;

class LoginController
{
    /**
     * @return array
     */
    protected function validationInput()
    {
        return [
            'email' => 'required|email',
            'password' => 'required|min:6'
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
        $validator = Validator::make($request->all(), $this->validationInput());

        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()->toArray()
            ]);
       }

        $auth = $request->only('email', 'password');

        if (!Auth::attempt($auth)) {
            $request->session()->regenerate();

                return back()->withErrors([
                    'email' => 'Неверные email или пароль',
            ]);
        }

        return $request->wantsJson()
            ? new JsonResponse([], 201)
            : redirect()->intended('dashboard');;
    }
}