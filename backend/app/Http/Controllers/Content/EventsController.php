<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\QueryBuilders\EventsQueryBuilder;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  EventsQueryBuilder $eventsQueryBuilder
     * @return string
     */
    public function index(EventsQueryBuilder $eventsQueryBuilder): string
    {
        $events_collection = $eventsQueryBuilder->getCollection();
        dd($events_collection);
        if (!empty($events_collection)) {
            return response()->json($events_collection);
        }
        return response()->json([
            'message' => 'Error loading events',
        ], 404);
    }

    /**
     * Display the specified resource.
     * @param  EventsQueryBuilder $eventsQueryBuilder
     * @param  int $id
     * @return string
     */
    public function show(EventsQueryBuilder $eventsQueryBuilder, int $id): string
    {
        $event = $eventsQueryBuilder->getById($id);
        if (!empty($event)) {
            return response()->json($event);
        }
        return response()->json([
            'message' => 'Error loading event',
        ], 404);
    }

    /**
     * Display a listing of the resource.
     * @param  EventsQueryBuilder $eventsQueryBuilder
     * @return string
     */
    public function getFuture(EventsQueryBuilder $eventsQueryBuilder): string
    {
        $events_collection = $eventsQueryBuilder->getFutureEvents();
        if (!empty($events_collection)) {
            return response()->json($events_collection);
        }
        return response()->json([
            'message' => 'Error loading future events',
        ], 404);
    }

    /**
     * Display a listing of the resource.
     * @param  EventsQueryBuilder $eventsQueryBuilder
     * @return string
     */
    public function getPast(EventsQueryBuilder $eventsQueryBuilder): string
    {
        $events_collection = $eventsQueryBuilder->getPastEvents();
        if (!empty($events_collection)) {
            return response()->json($events_collection);
        }

        return response()->json([
            'message' => 'Error loading past events',
        ], 404);
    }
}
