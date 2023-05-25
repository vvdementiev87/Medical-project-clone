<?php

namespace App\QueryBuilders;

use App\Models\Articles;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class ArticleQueryBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = Articles::query();
    }

    /**
     * @return Collection
     */
    function getCollection(): Collection
    {
        return $this->model->get();
    }

    /**
     * @param int $quantity
     * @return LengthAwarePaginator
     */
    public function getArticlesWithPagination(int $quantity = 20): LengthAwarePaginator
    {
        return $this->model->paginate($quantity);
    }
}
