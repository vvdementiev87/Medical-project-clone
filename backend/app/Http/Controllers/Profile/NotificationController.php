<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Profile\Notification;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function show(Request $request): JsonResponse
    {
        $result = Notification::getAll();
        return response()->json($result);
    }
    public function update(Request $request): JsonResponse
    {
        $result = Notification::setAllAsRead();
        return response()->json($result);
    }
}
