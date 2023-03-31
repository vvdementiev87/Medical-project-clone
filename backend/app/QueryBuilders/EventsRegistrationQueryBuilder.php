<?php

namespace App\QueryBuilders;

use App\Models\EventsRegistration;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Carbon\Carbon;

class EventsRegistrationQueryBuilder extends QueryBuilder
{
    public Builder $model;

    function __construct()
    {
        $this->model = EventsRegistration::query();
    }

    /**
     * @return Collection
     */
    function getCollection(): Collection
    {
        return $this->model->get();
    }

    function getById(int $id): Collection
    {
        return $this->model->where('event_id', $id)->get();
    }

    function checkAvailable(Collection $registration_field): array
    {
        // $all = $registration_field->all_registration
        $result = [
            'all' => 0,
            'occupied' => 0,
        ];
        foreach ($registration_field as $item) {
            $result['all'] = $item->all_registration;
            $result['occupied'] = $item->already_registered;
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

    function update(int $value): bool
    {
        $update_value = $value + 1;
        if ($this->model->update(['already_registered' => $update_value])) {
            return true;
        }
        return false;
    }
}