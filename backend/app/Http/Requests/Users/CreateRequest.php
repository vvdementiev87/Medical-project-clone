<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
            return [
                'last_name' => 'required|string|alpha_dash:ascii',
                'first_name' => 'required|string|alpha_dash:ascii',
                'surname' => 'string|alpha_dash:ascii',
                'birth_date' => 'required|date',
                'phone' => ['required','regex:/^(\+375|80)(24|29|25|44|33)(\d{3})(\d{2})(\d{2})$/'],
                'address' => 'required|string',
                'education' => 'required|string|nullable',
                'education_end' => 'required|date',
                'specialization' => 'required|string',
                'experience' => 'required|numeric|nullable',
                'company' => 'required|string|nullable',
                'position' => 'required|string|nullable',
                'degree' => 'string|nullable',
                'academic_rank' => 'string|nullable',
                'interests' => 'required|string|max:250',
                'is_member' => 'bool|sometimes',
                'other_organization' => 'string|sometimes',
                'sign_for_news' => 'boolean',
                'has_agreed' => 'accepted',
            ];
    }

    public function getAccessGroupId(): array
    {
        return (array) $this->validated('group_id');
    }
}
