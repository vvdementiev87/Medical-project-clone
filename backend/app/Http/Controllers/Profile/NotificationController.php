<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Profile\Notification;
use App\QueryBuilders\EventsQueryBuilder;
use App\QueryBuilders\Profile\NotificationsQueryBuilder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * @param NotificationsQueryBuilder $notificationsQueryBuilder
     * @return JsonResponse
     */
    public function show(NotificationsQueryBuilder $notificationsQueryBuilder): JsonResponse
    {
        $notifications = $notificationsQueryBuilder->getAll();

        if ($notifications) {
            return response()->json($notifications);
        }
        return response()->json([
            'message' => 'Error loading notifications',
        ], 404);
    }

    /**
     * @param NotificationsQueryBuilder $notificationsQueryBuilder
     * @return JsonResponse
     */
    public function update(NotificationsQueryBuilder $notificationsQueryBuilder): JsonResponse
    {
        $notifications = $notificationsQueryBuilder->setAllAsRead();

        if ($notifications) {
            return response()->json($notifications);
        }
        return response()->json([
            'message' => 'Error loading notifications',
        ], 404);
    }
}
