<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Models\Videos;
use Illuminate\Http\JsonResponse;

class VideosController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $resultData = Videos::getAll();

        if (!$resultData) {
            return response()->json([
                'message' => 'Error loading, videos are not found',
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
    public function showVideo(int $id): JsonResponse
    {
        $result = Videos::getVideoById($id);

        if (!$result) {
            return response()->json([
                'message' => 'Error loading, video is not found',
            ],
                404
            );
        }

        return response()->json(
            $result,
        );
    }
}
