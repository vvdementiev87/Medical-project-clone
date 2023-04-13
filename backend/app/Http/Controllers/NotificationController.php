<?php

namespace App\Http\Controllers;

use App\QueryBuilders\UserQueryBuilder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * @param int $id
     * @return string
     */
    public function get(string $id): JsonResponse
    {
        $user = UserQueryBuilder::getById((int)$id);
        if ($user) {
            return response()->json($user->notifications, 200);
        }
        return response()->json([
            'message' => 'no unread notifications',
        ], 201);
    }

    /**
     * @param int $id
     * @return string
     */
    public function read(string $id): JsonResponse
    {
        $user = UserQueryBuilder::getById((int)$id);
        if ($user->unreadNotifications()->update(['read_at' => now()])) {
            return response()->json($user->notifications, 200);
        }
        return response()->json([
            'message' => 'notifications are not marked as read',
        ], 201);

    }

    /**
     * @param int $id
     * @return string
     */
    public function delete(string $id): JsonResponse
    {
        $user = UserQueryBuilder::getById((int)$id);
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
