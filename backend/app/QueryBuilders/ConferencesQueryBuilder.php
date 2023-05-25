<?php

namespace App\QueryBuilders;

use App\Models\Conferences;
use DateTime;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Carbon\Carbon;
use Meilisearch\Contracts\Data;

class ConferencesQueryBuilder extends QueryBuilder
{
    public Builder $model;

    function __construct()
    {
        $this->model = Conferences::query();
    }

    /**
     * @return Collection
     */
    function getCollection(): Collection
    {
        return $this->model->get();
    }

    /**
     * @return array
     */
    function get(): array
    {
        return [
            'future' => $this->getFutureConferences(),
            'past' => $this->getPastConferences(),
        ];
    }

    /**
     * @param int $quantity
     * @return LengthAwarePaginator
     */
    public function getConferencesWithPagination(int $quantity = 20): LengthAwarePaginator
    {
        return $this->model->paginate($quantity);
    }



    function getFutureConferences()
    {
        return \DB::table('conferences')->whereTime('date_start', '>', now())->get();
    }

    function getPastConferences()
    {
        return \DB::table('conferences')->whereTime('date_end', '<', now())->get();
    }

    /**
     * @param int $id
     * @return Collection
     */
    function getById(int $id): Collection
    {
        return $this->model->where('id', $id)->get();
    }

    /**
     * @param Collection $registration_field
     * @return array
     */
    function checkAvailable(Collection $registration_field): array
    {
        $result = [
            'all' => 0,
            'occupied' => 0,
        ];
        foreach ($registration_field as $item) {
            $result['all'] = $item->all_places;
            $result['occupied'] = $item->already_exist;
        }

        if ($result['all'] - $result['occupied'] > 0) {
            return [
                'result' => true,
                'occupied' => $result['occupied']
            ];
        }

        return [
            'result' => false,
        ];
    }

    /**
     * @param int $value
     * @return bool
     */
    function update(int $value): bool
    {
        $update_value = $value + 1;
        if ($this->model->update(['already_exist' => $update_value])) {
            return true;
        }
        return false;
    }

    /**
     * @param Collection $conference
     * @return bool
     */
    function subtraction(Collection $conference): bool
    {
        $already_exist = 0;

        foreach ($conference as $item) {
            $already_exist = $item->already_exist;
        }

        $already_exist--;

        if ($this->model->update(['already_exist' => $already_exist])) {
            return true;
        }

        return false;
    }
}
