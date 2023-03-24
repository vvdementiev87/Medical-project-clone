<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\GalleryTheme as GalleryThemeModel;
use App\Models\Gallery as GalleryModel;

class GalleryThemeController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return string
     */
    public function index(): string
    {
        $gallery_theme = new GalleryThemeModel();
        $result = [];
        foreach ($gallery_theme->get() as $item) {
            $result[$item->id] = [
                'id'=>$item->id,
                'title' => $item->title,
                'description' => $item->description,
                'url_preview' => $item->url_preview,
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
     * @param  int  $id
     * @return string
     */
    public function show(int $id): string
    {
        $gallery_theme = new GalleryThemeModel();
        $theme = $gallery_theme->find($id);

        $gallery = new GalleryModel();
        $gallery_images = $gallery->where('theme_id', $id)->get();
        
        $images = [];
        foreach ($gallery_images as $image) {
            $images[$image->id] = [
                'id' => $image->id,
                'url' => $image->url
            ];
        }
        $result = [
            'theme_id' =>$theme->id,
            'title' => $theme->title,
            'description' => $theme->description,
            'url_preview' => $theme->url_preview,
            'images' => $images
        ];
        return json_encode($result);
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

