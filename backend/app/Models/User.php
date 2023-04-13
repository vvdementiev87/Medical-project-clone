<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Scout\Searchable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public $timestamps = false;
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
        'education',
        'education_end',
        'specialization',
        'experience',
        'company',
        'position',
        'degree',
        'academic_rank',
        'interests',
        'is_member',
        'other_organization',
        'sign_for_news',
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
     * @return  void
     */

    public function add_data_account_and_user($data): void
    {
        foreach($data as $key => $value){
            if ($key == 'email') {
                $account[$key] = $value;
            }elseif ($key != 'created_at' && $key != 'updated_at') {
                $user[$key] = $value;
            }
        }

        $password = Str::random(5);
        $accounts = array_merge($account, ['password' => Hash::make($password)]);

        $id_account = DB::table('accounts')->insertGetId(array_merge($accounts));

        $user_account_data['account_id'] = $id_account;

        $user = array_merge($user, $user_account_data);

        DB::table('users')->insert($user);

    }

    /**
     * @return BelongsToMany
     */
    public function accessGroup(): BelongsToMany
    {
        return $this->belongsToMany(
            AccessGroup::class,
            'access_group_has_users',
            'user_id',
            'group_id',
        );
    }
}
