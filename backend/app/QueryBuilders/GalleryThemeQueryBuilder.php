<?php

namespace App\QueryBuilders;

use App\Models\GalleryTheme;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class GalleryThemeQueryBuilder extends QueryBuilder
{
    public Builder $model;

    function __construct()
    {
        $this->model = GalleryTheme::query();
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
     * @return GalleryTheme
     */
    function getById(int $id): GalleryTheme
    {
        return $this->model->find($id);
    }
}
