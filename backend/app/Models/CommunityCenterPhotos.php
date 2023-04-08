<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommunityCenterPhotos extends Model
{
    use HasFactory;

    protected $table = 'community_center_photos';

    protected $hidden = [
        'id',
        'community_center_id',
        'created_at',
        'updated_at'
    ];
}
