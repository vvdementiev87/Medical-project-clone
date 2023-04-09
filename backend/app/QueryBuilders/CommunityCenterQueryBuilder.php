<?php

namespace App\QueryBuilders;

use App\Models\CommunityCenter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class CommunityCenterQueryBuilder extends QueryBuilder
{
    public Builder $model;

    function __construct()
    {
        $this->model = CommunityCenter::query();
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
    function getCollectionByCategoryId(int $id): Collection
    {
        return $this->model->where('category_id', $id)->get();
    }

    /**
     * @param int $id
     * @return array
     */
    function getById(int $id): array
    {
        $community_center = $this->model->find($id);
        $result = [
            'id' => $community_center->id,
            'name' => $community_center->name,
            'description' => $community_center->description,
            'preview_photo' => $community_center->preview_photo,
            'phone' => $community_center->phone,
            'email' => $community_center->email,
            'program_courses' => $community_center->program_courses,
            'link' => $community_center->link,
        ];
        return $result;
    }
}
