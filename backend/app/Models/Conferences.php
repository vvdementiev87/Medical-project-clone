<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conferences extends Model
{
    use HasFactory;

    protected $table = 'conferences';

    protected $fillable = [
        'title',
        'description',
        'short_text',
        'image',
        'place',
        'date_start',
        'date_end',
        'is_active',
        'all_places',
        'alredy_exist',
        'program'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
