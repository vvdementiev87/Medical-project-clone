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
        $events = $eventsQueryBuilder->get();
        
        if (!empty($events)) {
            return response()->json($events);
        }
        return response()->json([
            'message' => 'Error loading events',
        ], 404);
    }

    /**
     * Display the specified resource.
     * @param  EventsQueryBuilder $eventsQueryBuilder
     * @param  int                $id
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
}