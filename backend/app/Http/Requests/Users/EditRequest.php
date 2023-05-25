<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;

class EditRequest extends FormRequest
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
            'last_name' => 'required|string',
            'first_name' => 'required|string',
            'surname' => 'required|string',
            'birth_date' => 'date',
            'access_group.*' => 'exists:access_group,id',
            'avatar' => 'string|nullable',
            'phone' => 'string',
            'address' => 'string',
            'education' => 'string|nullable',
            'place_work' => 'string|nullable',
            'position' => 'string|nullable',
            'experience' => 'numeric|nullable',
            'sign_for_news' => 'boolean',
        ];
    }

    /**
     * @return array
     */
    public function getAccessGroupId(): array
    {
        return (array) $this->validated('access_group');
    }

}
