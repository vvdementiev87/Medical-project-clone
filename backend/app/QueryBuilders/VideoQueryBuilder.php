<?php

namespace App\QueryBuilders;

use App\Models\Videos;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

class VideoQueryBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = Videos::query();
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
    public function getVideosWithPagination(int $quantity = 20): LengthAwarePaginator
    {
        return $this->model->paginate($quantity);
    }
}
