<?php

namespace App\QueryBuilders;

use App\Models\CommunityCenterPhotos;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class CommunityCenterPhotosQueryBuilder extends QueryBuilder
{
    public Builder $model;

    function __construct()
    {
        $this->model = CommunityCenterPhotos::query();
    }

    /**
     * @return Collection
     */
    function getCollection(): Collection
    {
        return $this->model->get();
    }

    /**
     * @param int $id
     * @return Collection
     */
    function getByCommunityCenterId(int $id): Collection
    {
        return $this->model->where('community_center_id', $id)->get();
    }
}
