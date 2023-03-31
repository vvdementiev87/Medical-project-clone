<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    use HasFactory;

    protected $table = 'events';

    protected $fillable = [
        'title',
        'description',
        'short_text',
        'image',
        'place',
        'date_start',
        'date_end',
        'is_active'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
