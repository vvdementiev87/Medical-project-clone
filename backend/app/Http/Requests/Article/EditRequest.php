<?php

namespace App\Http\Requests\Article;

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
            'author' => 'required|string',
            'title' => 'required|string',
            'description' => 'required|string',
            'image_url' => 'sometimes',
            'short_text' => 'required|string',
            'text_html' => 'required',
        ];
    }
}
