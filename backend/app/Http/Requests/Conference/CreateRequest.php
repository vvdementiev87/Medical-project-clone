<?php

namespace App\Http\Requests\Conference;

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
            'name' => 'required|string',
            'description' => 'required|string',
            'short_text' => 'sometimes|string',
            'image' => 'sometimes',
            'place' => 'sometimes|string',
            'date_start' => 'sometimes|date',
            'date_end' => 'sometimes|date',
            'is_active' => 'boolean',
            'program' => 'sometimes|string',
            'all_places' => 'string',
        ];
    }
}
