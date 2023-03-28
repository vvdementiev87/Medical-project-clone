<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Collection;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


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
        'phone',
        'address',
        'company',
        'position',
        'category',
        'experience',
        'education',
        'other_info',
        'has_agreed',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'account_id',
    ];
    protected $primaryKey = 'id';

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * @param $data
     * @return  int
     */

    public function add_data_account_and_user($data): void
    {

        $user_registration_data = $data->except('email', 'password', 'password_confirmation', 'has_agree');
        $id_user = DB::table('users')->insertGetId($user_registration_data);

        $user_account_data = (array_merge($data->only('email', 'password'),['password' => Hash::make($data->password)]));
        $user_account_data['user_id'] = $id_user;

        DB::table('accounts')->insert($user_account_data);

    }



}
