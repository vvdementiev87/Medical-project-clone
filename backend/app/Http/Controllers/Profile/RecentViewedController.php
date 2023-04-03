<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Articles;
use App\Models\Profile\Favorites;
use App\Models\Profile\Traffic;
use App\Models\Videos;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RecentViewedController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Request $request): JsonResponse
    {

        $result = Traffic::getAll();

        return response()->json($result);

    }
}
