<?php

namespace App\Http\Requests\Video;

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
            'video_youtube_id' => 'required',
            'author' => 'required|string',
            'title' => 'required|string',
            'description' => 'required|string',
            'image_url' => 'sometimes',
            'text_html' => 'sometimes|string'
        ];
    }
}
