<?php

namespace App\QueryBuilders;

use App\Models\Events;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Carbon\Carbon;

class EventsQueryBuilder extends QueryBuilder
{
    public Builder $model;

    function __construct()
    {
        $this->model = Events::query();
    }

    /**
     * @return Collection
     */
    function getCollection(): Collection
    {
        return $this->model->get();
    }

    /**
     * @return Collection
     */
    function getFutureEvents(): Collection
    {
        return $this->model->whereDate('date_start', '>', Carbon::now())->get();
    }

    /**
     * @return Collection
     */
    function getPastEvents(): Collection
    {
        return $this->model->whereDate('date_end', '<', Carbon::now())->get();
    }

    /**
     * @param int $id
     * @return Collection
     */
    function getById(int $id): Collection
    {
        return $this->model->where('id', $id)->get();
    }

}