<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Articles extends Model
{
    use HasFactory, Searchable;

    protected $table = 'articles';

    /**
     * Отдаём все статьи
     *
     * @return mixed
     */
    public static function getAll(): mixed
    {
        return \DB::table('articles')->select([
            'author',
            'title',
            'description',
            'image_url',
            'short_text',
            'text_html',
        ])->get();
    }

    /**
     * @param int $id
     * @return mixed
     */
    public static function getArticleById(int $id): mixed
    {
        return \DB::table('articles')->find($id)->get();
    }
}
