<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\AddFavoriteRequest;
use App\Models\Articles;
use App\Models\Profile\Favorites;
use App\Models\Videos;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FavoritesController extends Controller
{
    /**
     * @param AddFavoriteRequest $request
     * @return JsonResponse
     */
    public function add(AddFavoriteRequest $request): JsonResponse
    {
        $request->validated();
        $favorite = Favorites::create(
            $request->all()
        );
        if ($favorite) {
            return response()->json([
                'id' => $favorite->id,
                'user_id' => $favorite->user_id,
                'type' => $favorite->type,
                'type_id' => $favorite->type_id,
            ]);

        }
        return response()->json([
            'error' => 'Favorite not added',
        ], 401);
    }

    /**
     * @param AddFavoriteRequest $request
     * @return JsonResponse
     */
    public function check(AddFavoriteRequest $request): JsonResponse
    {
        $request->validated();
        $favorite = Favorites::where($request->all())->first();
        if ($favorite) {
            return response()->json([
                'id' => $favorite->id,
                'user_id' => $favorite->user_id,
                'type' => $favorite->type,
                'type_id' => $favorite->type_id,
                'favorite' => true
            ]);

        }
        return response()->json([
            'favorite' => false
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Request $request): JsonResponse
    {
        $result = Favorites::getAll();

        return response()->json($result);
    }

    /**
     * @param AddFavoriteRequest $request
     * @return JsonResponse
     */
    public function delete(AddFavoriteRequest $request): JsonResponse
    {
        $request->validated();
        $favorite = Favorites::where(
            $request->all()
        )->delete();
        if ($favorite) {
            return response()->json([
                'favorite' => false
            ]);

        }
        return response()->json([
            'error' => 'Favorite not deleted',
        ], 401);
    }
}
