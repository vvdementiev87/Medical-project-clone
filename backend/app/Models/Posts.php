<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Posts extends Model
{
    use HasFactory;

    protected $table = 'posts';
    
    protected $fillable = [
        'author_id',
        'title',
        'description',
    ];

    public function comments(): BelongsToMany
    {
        return $this->belongsToMany(Comments::class, 'comments_has_post', 'post_id', 'comment_id')
            ->orderBy('comments.created_at', 'desc');
    }
}
