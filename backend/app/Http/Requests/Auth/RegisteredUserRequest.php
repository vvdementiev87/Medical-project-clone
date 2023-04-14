<?php

namespace App\Http\Requests\Auth;

use App\Models\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class RegisteredUserRequest extends FormRequest
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
        return [
            'last_name' => 'required|string|alpha_dash:ascii',
            'first_name' => 'required|string|alpha_dash:ascii',
            'surname' => 'string|alpha_dash:ascii',
            'birth_date' => 'required|date',
            'email' => 'required|email|unique:accounts,email',
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
            'interests' => 'required|string|max:250',
            'is_member' => 'required|bool',
            'other_organization' => 'string|required_if:is_member,true|prohibited_if:is_member,false|nullable',
            'sign_for_news' => 'boolean',
            'has_agreed' => 'accepted',
        ];
    }
}
