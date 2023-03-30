<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\News as NewsModel;
use Carbon\Carbon;


class NewsController extends Controller
{

    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
       $resultData = News::getAll();

       if (!$resultData) {
           return response()->json([
               'message' => 'Error loading, news are not found',
           ], 404);
       }

        return response()->json(
            $resultData,
        );
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function showNews(int $id): JsonResponse
    {
        $result = News::getNewsById($id);

        if (!$result) {
            return response()->json([
                'message' => 'Error loading, news is not found',
            ],
                404
            );
        }

        return response()->json(
            $result,
        );
    }
}
