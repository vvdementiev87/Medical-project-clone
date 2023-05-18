<?php

namespace App\QueryBuilders;

use App\Models\ApplicationsForRegistration;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class ApplicationsForRegistrationQueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = ApplicationsForRegistration::query();
    }

    /**
     * @param  int  $quantity
     * @return LengthAwarePaginator
     */
    public function getApplicationWithPagination(int $quantity = 11): LengthAwarePaginator
    {
        return $this->model->paginate($quantity);
    }

    /**
     * @return Collection
     */
    public function getCollection(): Collection
    {
        return $this->model->get();
    }

    /**
     * @param int $id
     * @return array
     */
    public function getApplicationId(int $id) : array
    {
        $application = $this->model->find($id);
        return collect($application)->all();
    }

    /**
     * @param int $id
     * @return void
     */
    public function destroyApplicationId(int $id):void
    {
        $this->model->find($id)->delete();
    }


}
