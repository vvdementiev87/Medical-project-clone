<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisteredUserRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisteredUserRequest $request): JsonResponse
    {
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'birth_date' => $request->birth_date,
            'category' => $request->category,
            'company' => $request->company,
            'education' => $request->education,
            'experience' => $request->experience,
            'address' => $request->address,
            'sign_for_news' => $request->sign_for_news,
            'position' => $request->position,
            'phone' => $request->phone,
            'patronym' => $request->patronym,
            'other_info' => $request->other_info,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->json(['user'=>auth()->user()]);
    }
}
