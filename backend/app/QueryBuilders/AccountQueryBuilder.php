<?php

namespace App\QueryBuilders;

use App\Models\Account;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class AccountQueryBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = Account::query();
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
    public function getAccountsWithPagination(int $quantity = 10): LengthAwarePaginator
    {
        return $this->model->paginate(($quantity));
    }
}
