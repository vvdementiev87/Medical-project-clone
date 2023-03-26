<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class GalleryTheme extends Model
{
    use HasFactory, Searchable;

    protected $table = 'gallery_theme';

    protected $fillable = [
        'title',
        'description',
        'url_preview'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
