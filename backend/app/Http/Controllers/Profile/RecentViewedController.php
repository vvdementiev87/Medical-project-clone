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
    public function show(Request $request): JsonResponse
    {
        $id = auth()->id();
        $viewed = Traffic::where('user_id', '=', $id)
            ->orderBy('updated_at', 'desc')->take(5)->get();
        if ($viewed) {
            $result = [];
            foreach ($viewed as $item){
                $arr = explode("/", $item->url);
                $type=$arr[count($arr)-2];
                $item_id=(int)$arr[count($arr)-1];

                if ($type === 'videos') {
                    $video = Videos::find($item_id);
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
                        'type' => 1,
                        'type_id' => $video->id,
                        'object' => $object
                    ];
                }
                if ($type === 'articles') {
                    $article = Articles::find($item_id);
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
                        'type' => 2,
                        'type_id' => $article->id,
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
}
