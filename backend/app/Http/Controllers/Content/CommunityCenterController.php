<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\QueryBuilders\CategoriesQueryBuilder;
use App\QueryBuilders\CommunityCenterQueryBuilder;
use App\QueryBuilders\CommunityCenterPhotosQueryBuilder;

class CommunityCenterController extends Controller
{
    /**
     * @param CommunityCenterQueryBuilder $communityCenterQueryBuilder
     * @param CategoriesQueryBuilder $categoriesQueryBuilder
     * @return string
     */
    public function index(
        CommunityCenterQueryBuilder $communityCenterQueryBuilder,
        CategoriesQueryBuilder $categoriesQueryBuilder
    ): JsonResponse
    {
        $community_center_collection = $communityCenterQueryBuilder->getCollection();

        if ($community_center_collection) {
            return response()->json($community_center_collection);
        }
        return response()->json([
            'message' => 'Error loading community centers',
        ], 404);
    }

    /**
     * @param CategoriesQueryBuilder $categoriesQueryBuilder
     * @param CommunityCenterQueryBuilder $communityCenterQueryBuilder
     * @return string
     */
    public function getCategories(
        CategoriesQueryBuilder $categoriesQueryBuilder,
        CommunityCenterQueryBuilder $communityCenterQueryBuilder
    ): JsonResponse
    {
        $categories_collection = $categoriesQueryBuilder->getCollection();
        $community_center_collection = $communityCenterQueryBuilder->getCollection();
        $result = [
            'categories' => $categories_collection,
            'community_centers' => $community_center_collection
        ];

        if ($categories_collection && $community_center_collection) {
            return response()->json($result);
        }
        return response()->json([
            'message' => 'Error loading categories',
        ], 404);
    }

    /**
     * @param int $id
     * @param CommunityCenterQueryBuilder $communityCenterQueryBuilder
     * @param CommunityCenterPhotosQueryBuilder $communityCenterPhotosQueryBuilder
     * @return string
     */
    public function show(
        int $id,
        CommunityCenterQueryBuilder $communityCenterQueryBuilder,
        CommunityCenterPhotosQueryBuilder $communityCenterPhotosQueryBuilder
    ): JsonResponse
    {
        $photos = $communityCenterPhotosQueryBuilder->getByCommunityCenterId($id);
        $community_center = $communityCenterQueryBuilder->getById($id);

        if ($community_center) {
            $community_center['photos'] = $photos;
            return response()->json($community_center);
        }
        return response()->json([
            'message' => 'Error loading community center',
        ], 404);
    }
}
