<?php

namespace App\Http\Requests\News;

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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'min: 3', 'max: 90'],
            'short_description' => ['required', 'string', 'min: 3', 'max: 100'],
            'description' => ['required', 'string'],
            'image_url' => ['url'],
            'started_at' => ['nullable'],
            'ending_at' => ['nullable'],
        ];
    }
}
