<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class News extends Model
{
    use HasFactory, Searchable;

    protected $table = 'news';

    protected $fillable = [
        'title',
        'short_description',
        'description',
        'image_url',
        'started_at',
        'ending_at',
    ];
}
