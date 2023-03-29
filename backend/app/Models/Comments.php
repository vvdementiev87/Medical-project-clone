<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Comments extends Model
{
    use HasFactory;

    protected $table = 'comments';

    protected $fillable = [
        'post_id',
        'author_id',
        'description',
    ];

    public function post(): BelongsTo
    {
        return $this->belongsTo(Posts::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
