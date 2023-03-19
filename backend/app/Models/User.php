<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Collection;
use Laravel\Sanctum\HasApiTokens;
//use Laravel\Scout\Searchable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'last_name',
        'first_name',
        'surname',
        'birth_date',
        'email',
        'phone',
        'address',
        'company',
        'position',
        'category',
        'experience',
        'education',
        'other_info',
        'has_agreed',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public $timestamps = false;

    /**
     * @return Collection
     */
    public function getUsers(): Collection
    {
        return \DB::table('users')->select([
            'id',
            'last_name',
            'first_name',
            'surname',
            'birth_date',
            'avatar',
            'phone',
            'address',
            'education',
            'place_work',
            'sign_for_news',
            'position',
            'category',
            'experience',
            'created_at',
            'updated_at',
        ])->get();
    }

    /**
     * @return BelongsToMany
     */
    public function accessGroup(): BelongsToMany
    {
        return $this->belongsToMany(
            AccessGroup::class,
            'access_group_has_user',
            'user_id',
            'group_id',
            'id',
            'id',
        );
    }

    /**
     * @param  int  $id
     * @return mixed
     */
    public function getUserById(int $id): mixed
    {
        return \DB::table('users')->find($id);
    }
}
