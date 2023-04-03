<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\QueryBuilders\EventsQueryBuilder;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param EventsQueryBuilder $eventsQueryBuilder
     * @return JsonResponse
     */
    public function index(EventsQueryBuilder $eventsQueryBuilder): JsonResponse
    {
        $events = $eventsQueryBuilder->get();

        if ($events) {
            return response()->json($events);
        }
        return response()->json([
            'message' => 'Error loading events',
        ], 404);
    }

    /**
     * Display the specified resource.
     * @param EventsQueryBuilder $eventsQueryBuilder
     * @param int $id
     * @return JsonResponse
     */
    public function show(EventsQueryBuilder $eventsQueryBuilder, int $id): JsonResponse
    {
        $event = $eventsQueryBuilder->getById($id);

        if ($event) {
            return response()->json($event);
        }
        return response()->json([
            'message' => 'Error loading event',
        ], 404);
    }
}
