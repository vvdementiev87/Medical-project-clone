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
    function getCollection(): Collection
    {
        return $this->model->get();
    }

    function getById(int $id): GalleryTheme
    {
        return $this->model->find($id);
    }
}