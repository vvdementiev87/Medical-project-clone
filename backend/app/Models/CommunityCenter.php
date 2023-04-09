<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommunityCenter extends Model
{
    use HasFactory;

    protected $table = 'community_center';

    protected $fillable = [
        'id',
        'name',
        'description',
        'category_id',
        'preview_photo',
        'phone',
        'email',
        'program_courses',
        'link',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

}
