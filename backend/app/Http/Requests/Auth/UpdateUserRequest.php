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
            'last_name' => 'required|string|alpha_dash:ascii|max:100',
            'first_name' => 'required|string|alpha_dash:ascii|max:100',
            'surname' => 'required|string|alpha_dash:ascii|max:100',
            'birth_date' => 'date',
            'avatar' => 'image|nullable',
            'phone' => 'required',//'regex:/^(\+375|80)(24|29|25|44|33)(\d{3})(\d{2})(\d{2})$/']
            'address' => 'string|max:100',
            'education' => 'string|max:100|nullable',
            'position' => 'string|max:100|nullable',
            'place_work' => 'string|max:100|nullable',
            'experience' => 'numeric|nullable',
            'category' => 'string|max:100|nullable',
            'sign_for_news' => 'boolean',
            'other_info' => 'string|max:100|nullable',
            'has_agreed' => 'in:true',
        ];
    }
}
