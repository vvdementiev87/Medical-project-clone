<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Mail\AcceptApplicationMail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Mail;
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
$password_list=[
    ['password'=>'vRdwfRK9', 'hash'=>'$2a$10$CwTycUXWue0Thq9StjUM0u5CpTfNMV9HwRoySnQUYMsGA9uUsq4f2'],
    ['password'=>'kNEBs7Se', 'hash'=>'$2a$10$CwTycUXWue0Thq9StjUM0uHtqVjrB.YOkiF/PUonyfdx20weDKSty'],
    ['password'=>'0Nqps8OP', 'hash'=>'$2a$10$CwTycUXWue0Thq9StjUM0u6AYR3Y6sx2SOW.FAzFbyvmGK7qPXnRS'],
    ['password'=>'UDxDYg7x', 'hash'=>'$2a$10$CwTycUXWue0Thq9StjUM0ufC2lC3xoqqlGHVNyTZRkRvte2AA26t2'],
];
        $password = $password_list[array_rand($password_list)];
        $accounts = array_merge($account, ['password' => Hash::make($password['hash'])]);

        $id_account = DB::table('accounts')->insertGetId(array_merge($accounts));

        $user_account_data['account_id'] = $id_account;

        $user = array_merge($user, $user_account_data);

        DB::table('users')->insert($user);

        Mail::to($data['email'])->send(new AcceptApplicationMail($password['password']));

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
