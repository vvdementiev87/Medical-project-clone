<?php

namespace App\Http\Controllers;

use App\QueryBuilders\UserQueryBuilder;
use Illuminate\Http\JsonResponse;

class NotificationController extends Controller
{
    /**
     * @param int $id
     * @return JsonResponse
     */
    public function get(int $id): JsonResponse
    {
        $user = UserQueryBuilder::getById($id);

        if ($user) {
            return response()->json($user->unreadNotifications, 201);
        }

        return response()->json([
            'message' => 'no unread notifications',
        ], 201);
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function read(int $id): JsonResponse
    {
        $user = UserQueryBuilder::getById($id);

        if ($user->unreadNotifications()->update(['read_at' => now()])) {
            return response()->json([
                'message' => 'notifications are marked as read',
            ], 201);
        }

        return response()->json([
            'message' => 'notifications are not marked as read',
        ], 201);

    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function delete(int $id): JsonResponse
    {
        $user = UserQueryBuilder::getById($id);

        if ($user->notifications()->delete()) {
            return response()->json([
                'message' => 'notifications removed',
            ], 201);
        }

        return response()->json([
            'message' => 'notifications not removed',
        ], 201);
    }
}
