<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicationsForRegistration extends Model
{
    use HasFactory;

    protected $table = 'application_for_registration';

    protected $fillable = [
        'last_name',
        'first_name',
        'surname',
        'birth_date',
        'email',
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

}
