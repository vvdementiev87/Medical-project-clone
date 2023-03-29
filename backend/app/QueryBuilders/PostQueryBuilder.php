<?php

namespace App\QueryBuilders;

use App\Models\Posts;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class PostQueryBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = Posts::query();
    }

    /**
     * @param int $quantity
     * @return LengthAwarePaginator
     */
    public function getPostsWithPagination(int $quantity = 11): LengthAwarePaginator
    {
        return $this->model->paginate($quantity);
    }

    /**
     * @return Collection
     */
    function getCollection(): Collection
    {
        return $this->model->get();
    }
}