<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Profile\Traffic;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RecommendationsController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Request $request): JsonResponse
    {

        $result = Traffic::getPopular();

        return response()->json($result);

    }
}
