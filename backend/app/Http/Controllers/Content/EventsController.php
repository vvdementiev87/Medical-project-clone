<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\QueryBuilders\EventsQueryBuilder;
use App\Http\Requests\EventsOrders\CreateRequest;
use App\QueryBuilders\RegistrationOrdersQueryBuilder;
use App\QueryBuilders\EventsRegistrationQueryBuilder;

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

    public function registration( 
        CreateRequest $request, 
        RegistrationOrdersQueryBuilder $ordersQueryBuilder,
        EventsRegistrationQueryBuilder $registrationQueryBuilder
    )
    {
        //получаем данные в виде массива ['event_id' => 1, 'account_id' => 1]
        $validated = $request->validated();

        //проверяем, существует ли уже пользователь на данном событии
        if ($ordersQueryBuilder->checkAccountInEvent($validated)) {
            return response()->json([
                'message' => 'application already exists',
            ], 404);
        }
    
        //получаем данные из таблицы с количеством зарегистрированных
        $registration_field = $registrationQueryBuilder->getById($validated['event_id']);

        //проверяем, есть ли свободные места
        $check_places = $registrationQueryBuilder->checkAvailable($registration_field);

        if ($check_places['result']) {
            
            //сохраняем в таблицу с заявками
            if ($ordersQueryBuilder->save($validated)) {

                //обновляем количество зарегистрированных
                $registrationQueryBuilder->update($check_places['occupied']);

                return response()->json([
                    'message' => 'application submitted',
                ]); 
            }
        }

        return response()->json([
            'message' => 'All places are occupied',
        ], 404);
    }
}