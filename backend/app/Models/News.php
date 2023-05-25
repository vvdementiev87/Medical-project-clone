<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $table = 'news';

    protected $fillable = [
        'title',
        'short_description',
        'description',
        'image_url',
    ];

    /**
     * @return mixed
     */
    public static function getAll(): mixed
    {
        return \DB::table('news')->select([
            'id',
            'title',
            'short_description',
            'description',
            'image_url',
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
            'short_description',
            'description',
            'image_url',
        ])->find($id);
    }
}
