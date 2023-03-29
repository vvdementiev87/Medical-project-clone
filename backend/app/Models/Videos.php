<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Videos extends Model
{
    use HasFactory, Searchable;

    protected $table = 'videos';

    /**
     * Отдаём все видео
     *
     * @return mixed
     */
    public static function getAll(): mixed
    {
        return \DB::table('videos')->select([
            'id',
            'video_youtube_id',
            'author',
            'title',
            'description',
            'image_url',
            'text_html',
        ])->get();
    }

    /**
     * @param int $id
     * @return mixed
     */
    public static function getVideoById(int $id): mixed
    {
        return \DB::table('videos')->find($id);
    }
}
