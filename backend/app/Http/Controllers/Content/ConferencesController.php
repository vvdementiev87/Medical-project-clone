<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\QueryBuilders\ConferencesQueryBuilder;
use App\Http\Requests\EventsOrders\CreateRequest;
use App\QueryBuilders\RegistrationOrdersQueryBuilder;
use App\QueryBuilders\EventsRegistrationQueryBuilder;

class ConferencesController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  ConferencesQueryBuilder $conferencesQueryBuilder
     * @return string
     */
    public function index(ConferencesQueryBuilder $conferencesQueryBuilder): string
    {
        $conferences = $conferencesQueryBuilder->get();
        if (!empty($conferences)) {
            return response()->json($conferences);
        }
        return response()->json([
            'message' => 'Error loading events',
        ], 404);
    }

    /**
     * Display the specified resource.
     * @param  ConferencesQueryBuilder $conferencesQueryBuilder
     * @param  int                     $id
     * @return string
     */
    public function show(ConferencesQueryBuilder $conferencesQueryBuilder, int $id): string
    {
        $event = $conferencesQueryBuilder->getById($id);

        if (!empty($event)) {
            return response()->json($event);
        }
        return response()->json([
            'message' => 'Error loading event',
        ], 404);
    }

    /**
     * Display the specified resource.
     * @param  CreateRequest                  $request
     * @param  RegistrationOrdersQueryBuilder $ordersQueryBuilder
     * @param  ConferencesQueryBuilder        $conferencesQueryBuilder
     * @return string
     */
    public function registration ( 
        CreateRequest $request, 
        RegistrationOrdersQueryBuilder $ordersQueryBuilder,
        ConferencesQueryBuilder $conferencesQueryBuilder
    ): string
    {
        //получаем данные в виде массива ['event_id' => 1, 'account_id' => 1]
        $order_data = $request->validated();

        //проверяем, существует ли уже пользователь на данном событии
        if (!$ordersQueryBuilder->checkAccountInEvent($order_data)->isEmpty()) {
            return response()->json([
                'message' => 'user already exists',
            ], 404);
        }
    
        $conference_collection = $conferencesQueryBuilder->getById($order_data['event_id']);
        $check_places = $conferencesQueryBuilder->checkAvailable($conference_collection);

        if ($check_places['result']) {
            
            //сохраняем в таблицу с заявками
            if ($ordersQueryBuilder->save($order_data)) {

                //обновляем количество зарегистрированных
                $conferencesQueryBuilder->update($check_places['occupied']);
                
                // успешный ответ
                return response()->json([
                    'message' => 'application submitted',
                ]); 
            }
        }

        return response()->json([
            'message' => 'All places are occupied',
        ], 404);
    }

    /**
     * Display the specified resource.
     * @param  CreateRequest                  $request
     * @param  RegistrationOrdersQueryBuilder $ordersQueryBuilder
     * @param  ConferencesQueryBuilder        $conferencesQueryBuilder
     * @return string
     */
    public function deregistration(
        CreateRequest $request, 
        RegistrationOrdersQueryBuilder $ordersQueryBuilder,
        ConferencesQueryBuilder $conferencesQueryBuilder
    ): string
    {
        $order_data = $request->validated();

        //проверяем, существует ли пользователь на данном событии
        if (!$ordersQueryBuilder->checkAccountInEvent($order_data)->isEmpty()) {
            $conference_collection = $conferencesQueryBuilder->getById($order_data['event_id']);
            
            $subtraction = $conferencesQueryBuilder->subtraction($conference_collection);

            if ($subtraction && $ordersQueryBuilder->delete($order_data)) {
                return response()->json([
                    'message' => 'deregistration was successful',
                ]);
            }
        }
        return response()->json([
            'message' => 'deregistration was not successful',
        ], 404);
    }
}
