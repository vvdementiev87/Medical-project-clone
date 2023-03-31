<?php

namespace App\QueryBuilders;

use App\Models\RegistrationOrders;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Carbon\Carbon;

class RegistrationOrdersQueryBuilder extends QueryBuilder
{
    public Builder $model;

    function __construct()
    {
        $this->model = RegistrationOrders::query();
    }

    /**
     * @return Collection
     */
    function getCollection(): Collection
    {
        return $this->model->get();
    }

    function save($validated): bool
    {
        $registration = new RegistrationOrders();
        if ($registration::create($validated)) {
            return true;
        }
        return false;
    }

    function checkAccountInEvent($validated)
    {
        return $this->model
            ->where('event_id', $validated['event_id'])
            ->where('account_id', $validated['account_id'])
            ->get();
    }

}