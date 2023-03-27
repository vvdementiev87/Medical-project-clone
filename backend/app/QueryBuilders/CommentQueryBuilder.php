<?php

namespace App\QueryBuilders;

use App\Models\Comments;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class CommentQueryBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = Comments::query();
    }

    /**
     * @param int $quantity
     * @return LengthAwarePaginator
     */

    public function getCommentWithPagination(int $quantity = 11): LengthAwarePaginator
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