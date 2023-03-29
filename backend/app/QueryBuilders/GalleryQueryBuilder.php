<?php

namespace App\QueryBuilders;

use App\Models\Gallery;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class GalleryQueryBuilder extends QueryBuilder
{
    public Builder $model;

    function __construct()
    {
        $this->model = Gallery::query();
    }

    function getCollection(): Collection
    {
        return $this->model->get();
    }

    function getByThemeId(int $id): array
    {
        $images_collection = $this->model->where('theme_id', $id)->get();
        $images = [];
        foreach ($images_collection as $image) {
            $images[$image->id] = [
                'id' => $image->id,
                'url' => $image->url
            ];
        }
        return $images;
    }
}