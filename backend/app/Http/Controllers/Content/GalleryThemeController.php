<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\GalleryTheme as GalleryThemeModel;
use App\Models\Gallery as GalleryModel;
use App\QueryBuilders\GalleryThemeQueryBuilder;
use App\QueryBuilders\GalleryQueryBuilder;

class GalleryThemeController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param GalleryThemeQueryBuilder
     * @return string
     */
    public function index(GalleryThemeQueryBuilder $galleryThemeQueryBuilder): string
    {
        $gallery_collection = $galleryThemeQueryBuilder->getCollection();
        
        if (!empty($gallery_collection)) {
            return response()->json($gallery_collection);
        }
        
        return response()->json([
            'message' => 'Error loading gallery themes',
        ], 404);
    }

    /**
     * Display the specified resource.
     * @param  int                     $id
     * @param GalleryThemeQueryBuilder $galleryThemeQueryBuilder
     * @param GalleryQueryBuilder      $galleryQueryBuilder
     * @return string
     */
    public function show(int $id, GalleryThemeQueryBuilder $galleryThemeQueryBuilder, GalleryQueryBuilder $galleryQueryBuilder): string
    {
        $theme = $galleryThemeQueryBuilder->getById($id);
        $gallery_images = $galleryQueryBuilder->getByThemeId($id);
        $theme['images'] = $gallery_images;

        if (!empty($theme)) {
            return response()->json($theme);
        }
        
        return response()->json([
            'message' => 'Error loading gallery items', 
        ], 404);
    }
}

