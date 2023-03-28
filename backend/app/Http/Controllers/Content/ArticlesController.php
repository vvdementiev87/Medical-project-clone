<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Models\Articles;
use Illuminate\Http\JsonResponse;

class ArticlesController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $resultData = Articles::getAll();

        if (!$resultData) {
            return response()->json([
                'message' => 'Ошибка загрузки видео',
            ],
                404
            );
        }

        return response()->json(
            $resultData,
        );
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function showArticle(int $id): JsonResponse
    {
        $result = Articles::getArticleById($id);

        if (!$result) {
            return response()->json([
                'message' => 'Ошибка загрузки, статья не найдена',
            ],
                404
            );
        }

        return response()->json(
            $result,
        );
    }
}
