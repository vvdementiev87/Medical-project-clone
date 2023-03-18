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
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * @param RegisteredUserRequest $request
     * @return JsonResponse
     */
    public function store(RegisteredUserRequest $request): JsonResponse
    {

        $user = new User();
        $user->add_data_account_and_user($request);

        event(new Registered($user));

        Auth::login($user);

        return response()->json([
            'success' => true,
        ]);    
    }
}
