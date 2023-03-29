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
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}