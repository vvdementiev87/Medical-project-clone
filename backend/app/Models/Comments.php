<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Notifications\Notifiable;

class Comments extends Model
{
    use HasFactory, Notifiable;

    protected $table = 'comments';

    protected $fillable = [
        'post_id',
        'author_id',
        'description',
    ];

    /**
     * @return BelongsToMany
     */
    public function post(): BelongsToMany
    {
        return $this->belongsToMany(Posts::class, 'comments_has_post', 'comment_id', 'post_id');
    }
}
