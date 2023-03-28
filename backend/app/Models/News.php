<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class News extends Model
{
    use HasFactory, Searchable;

    protected $table = 'news';

    /**
     * @return mixed
     */
    public static function getAll(): mixed
    {
        return \DB::table('news')->select([
            'id',
            'title',
            'short_description',
            'image_url',
            'started_at',
            'ending_at',
        ])->get();
    }

    /**
     * @param int $id
     * @return mixed
     */
    public static function getNewsById(int $id): mixed
    {
        return \DB::table('news')->select([
            'id',
            'title',
            'description',
            'image_url',
        ])->find($id);
    }
}
