<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisteredUserRequest;
use App\Models\Account;
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
        $request->validated();
        $request->merge(['password' => Hash::make(request('password'))]);
        $account = Account::create(
            $request->all()
        );
        if ($account) {

            $user = $account->userOne()->create($request->all());

            event(new Registered($account));
            Auth::login($account);

            $user['email'] = $account->email;

            return response()->json([
                'user' => $user,
                'accessToken' => $account->createToken(name: 'accessToken', expiresAt: now()->modify("+1 day"))->plainTextToken
            ]);
        }
        return response()->json([
            'error' => 'User and account were not created',
        ], 404);


    }
}
