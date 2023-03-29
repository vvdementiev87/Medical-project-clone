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
                'favorite'=>true
            ]);

        }
        return response()->json([
            'favorite'=>false
        ]);
    }

    public function show(Request $request): JsonResponse
    {
        $favorite = Favorites::where('user_id',
            $request->input('user_id')
        )->orderBy('created_at', 'desc')->take(5)->get();

        if ($favorite) {
            $result = [];
            foreach ($favorite as $item) {
                if ($item->type === 1) {
                    $video = Videos::find($item->type_id);
                    $object = [
                        'id' => $video->id,
                        'videoYoutubeId' => $video->video_youtube_id,
                        'author' => $video->author,
                        'title' => $video->title,
                        'description' => $video->description,
                        'imageUrl' => $video->image_url,
                        'textHTML' => $video->text_html];

                    $result[] = [
                        'id' => $item->id,
                        'user_id' => $item->user_id,
                        'type' => $item->type,
                        'type_id' => $item->type_id,
                        'object' => $object
                    ];
                }
                if ($item->type === 2) {
                    $article = Articles::find($item->type_id);
                    $object = [
                        'id' => $article->id,
                        'author' => $article->author,
                        'title' => $article->title,
                        'description' => $article->description,
                        'imageUrl' => $article->image_url,
                        'shortText' => $article->short_text,
                        'textHTML' => $article->text_html
                    ];

                    $result[] = [
                        'id' => $item->id,
                        'user_id' => $item->user_id,
                        'type' => $item->type,
                        'type_id' => $item->type_id,
                        'object' => $object
                    ];
                }

            }
            return response()->json($result);
        }
        return response()->json([
            'error' => 'Favorite not added',
        ], 401);
    }

    public function delete(AddFavoriteRequest $request): JsonResponse
    {
        $request->validated();
        $favorite = Favorites::where(
            $request->all()
        )->delete();
        if ($favorite) {
            return response()->json([
                'favorite'=>false
            ]);

        }
        return response()->json([
            'error' => 'Favorite not added',
        ], 401);
    }
}
