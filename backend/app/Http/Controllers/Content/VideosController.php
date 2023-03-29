<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Videos as VideosModel;


class VideosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): string
    {
        $videos = new VideosModel();
        $result = [];
        foreach ($videos->get() as $item) {
            $result[$item->id] = [
                'id'=>$item->id,
                'videoYoutubeId' => $item->video_youtube_id,
                'author' => $item->author,
                'title' => $item->title,
                'description' => $item->description,
                'imageUrl' => $item->image_url,
                'textHTML' => $item->text_html
            ];
        }
        return json_encode($result);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $item = VideosModel::find($id);
        if ($item) {
            return response()->json([
                'id'=>$item->id,
                'videoYoutubeId' => $item->video_youtube_id,
                'author' => $item->author,
                'title' => $item->title,
                'description' => $item->description,
                'imageUrl' => $item->image_url,
                'textHTML' => $item->text_html
            ]);
        }
        return response()->json([
            'error' => 'Video not found',
        ], 401);
    }

}
