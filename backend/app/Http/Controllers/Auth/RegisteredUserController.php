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
     * @param RegisteredUserRequest $request
     * @return JsonResponse
     */
    public function store(RegisteredUserRequest $request): JsonResponse
    {

        $user = User::create(array_merge($request->all(), ['password' => Hash::make($request->password)]));

        event(new Registered($user));

        Auth::login($user);

        return response()->json([
            'user' => auth()->user(),
            'token' => $user->createToken('Token API of' . $user->last_name)->plainTextToken()
        ]);
    }
}
