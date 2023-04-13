<?php

namespace App\QueryBuilders\Profile;


use App\Models\Profile\Notification;
use App\QueryBuilders\QueryBuilder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class NotificationsQueryBuilder extends QueryBuilder
{
    public Builder $model;

    function __construct()
    {
        $this->model = Notification::query();
    }

    function getCollection(): Collection
    {
        return $this->model->get();
    }

    function getAll(): Collection
    {
        $id = auth()->id();
        return $this->model->where('user_id', $id
        )->orderBy('created_at', 'desc')->get();
    }

     function setAllAsRead(): Collection
    {
        $id = auth()->id();
        $this->model->where('user_id', $id)->where('status','=','sent')
            ->update(['status'=>'read']);
        return $this->model->where('user_id', $id
        )->orderBy('created_at', 'desc')->get();

    }
}
