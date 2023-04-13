<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UpdateUserRequest extends FormRequest
{
    /**
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array
     */
    public function rules(): array
    {
        // return [
        //     'last_name' => ['required', 'string', 'max:255'],
        //     'email' => ['required', 'string', 'max:255', 'unique:' . User::class],
        //     'password' => ['required', 'confirmed', Password::defaults()],
        // ];

        return [
            'last_name' => 'required|string|alpha_dash:ascii',
            'first_name' => 'required|string|alpha_dash:ascii',
            'surname' => 'string',
            'birth_date' => 'required|date',
            'phone' => ['required'],
            'address' => 'required|string',
            'education' => 'required|string',
            'education_end' => 'required|string',
            'specialization' => 'required|string',
            'experience' => 'required|string',
            'company' => 'required|string',
            'position' => 'required|string',
            'degree' => 'string|nullable',
            'academic_rank' => 'string|nullable',
            'interests' => 'string|max:250',
            'other_organization' => 'string|required_if:is_member,true|prohibited_if:is_member,false|nullable',
            'sign_for_news' => 'boolean',
        ];
    }
}
