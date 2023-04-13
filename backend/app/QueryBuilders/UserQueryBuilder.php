<?php

namespace App\QueryBuilders;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class UserQueryBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = User::query();
    }

    /**
     * @param  int  $quantity
     * @return LengthAwarePaginator
     */
    public function getUsersWithPagination(int $quantity = 11): LengthAwarePaginator
    {
        return $this->model->paginate($quantity);
    }

    /**
     * @return Collection
     */
    function getCollection(): Collection
    {
        return User::query()->get();
    }

    /**
     * @param int $id
     * @return User
     */
    public static function getById(int $id): User
    {
        $user = new User();
        return $user->find($id);
    }
}
