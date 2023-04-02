<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\QueryBuilders\GalleryThemeQueryBuilder;
use Illuminate\Http\JsonResponse;
use App\QueryBuilders\GalleryQueryBuilder;

class GalleryThemeController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param GalleryThemeQueryBuilder $galleryThemeQueryBuilder
     * @return JsonResponse
     */
    public function index(GalleryThemeQueryBuilder $galleryThemeQueryBuilder): JsonResponse
    {
        $galleryCollection = $galleryThemeQueryBuilder->getCollection();

        if ($galleryCollection) {
            return response()->json($galleryCollection);
        }

        return response()->json([
            'message' => 'Error loading gallery themes',
        ], 404);
    }

    /**
     * Display the specified resource.
     * @param int $id
     * @param GalleryThemeQueryBuilder $galleryThemeQueryBuilder
     * @param GalleryQueryBuilder $galleryQueryBuilder
     * @return JsonResponse
     */
    public function show(int $id, GalleryThemeQueryBuilder $galleryThemeQueryBuilder, GalleryQueryBuilder $galleryQueryBuilder): JsonResponse
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

