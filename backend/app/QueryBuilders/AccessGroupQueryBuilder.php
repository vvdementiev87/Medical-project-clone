<?php

namespace App\QueryBuilders;

use App\Models\AccessGroup;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

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
}
