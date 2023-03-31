<?php

namespace App\Http\Requests\EventsOrders;

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
            'event_id' => ['exists:events,id', 'integer'],
            'account_id' => ['exists:accounts,id', 'integer'],
        ];
    }
}
