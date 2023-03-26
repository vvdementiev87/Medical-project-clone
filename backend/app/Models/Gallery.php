<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Gallery extends Model
{
    use HasFactory, Searchable;

    protected $table = 'gallery';

    protected $fillable = [
        'url',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
