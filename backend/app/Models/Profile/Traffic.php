<?php

namespace App\Models\Profile;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Traffic extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'url', 'count'];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($traffic) {
            if ($traffic->count) {
                $traffic->count++;
            }
        });
    }
}
