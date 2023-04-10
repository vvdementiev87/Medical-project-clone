<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Collection;

class AccessGroup extends Model
{
    use HasFactory;

    protected $table = 'access_group';
//    public $timestamps = false;

    protected $fillable = [
        'name',
    ];

    /**
     * @return BelongsToMany
     */
    public function Users(): BelongsToMany
    {
        return $this->belongsToMany(User::class,);
    }

    /**
     * @return Collection
     */
    public function getAccess_group(): Collection
    {
        return \DB::table('access_group')->select(['id', 'name'])->get();
    }
}
