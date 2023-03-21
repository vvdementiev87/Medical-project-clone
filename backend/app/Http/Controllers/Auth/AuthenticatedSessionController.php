<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * @param LoginRequest $request
     * @return JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(LoginRequest $request): JsonResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        $account = \auth()->user();
        $user = User::where('account_id', $account->id)->first();
        $user['email']= $account->email;
        return response()->json([
            'user' => $user,
            'accessToken' => $account->createToken(name: 'accessToken', expiresAt: now()->modify("+1 day"))->plainTextToken
        ]);
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->user()->currentAccessToken()->delete();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
