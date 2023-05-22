<?php

namespace App\QueryBuilders;

use App\Models\AccessGroup;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class AccessGroupQueryBuilder extends QueryBuilder
{
    public Builder $model;

    function __construct()
    {
        $this->model = AccessGroup::query();
    }
    function getCollection(): Collection
    {
        return $this->model->get();
    }
    /**
     * @param int $quantity
     * @return LengthAwarePaginator
     */
    public function getGroupWithPagination(int $quantity = 11): LengthAwarePaginator
    {
        return $this->model->paginate($quantity);
    }
}
