<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class RegisterController
{
    /**
     * @return array
     */
    protected function validator()
    {
        return [
            'last_name' => ['required', 'string', 'alpha_dash:ascii'],
            'first_name'=> ['required', 'string', 'alpha_dash:ascii'],
            'surname' => ['required', 'string', 'alpha_dash:ascii'],
            'birth_date' => ['date'],
            'avatar' => ['image', 'nullable'],
            'email'=> ['required', 'email address', 'unique'],
            'phone' => ['unique', 'numeric', 'min:11'],
            'address' => ['string'],
            'education'=> ['string', 'nullable'],
            'place_work' => ['string', 'nullable'],
            'position'=> ['string', 'nullable'],
            'category'=> ['string', 'nullable'],
            'experience'=> ['numeric', 'nullable'],
            'other_info'=> ['boolean', 'nullable'],
            'sign_for_news'=> ['required','boolean', 'accepted'],
            'password' => ['required', 'password'],
        ];
    }

    /**
     * @param  array $data
     * @return User $user
     */
    protected function create(array $data)
    {
        return User::create([
            'last_name' => $data['last_name'],
            'first_name'=> $data['first_name'],
            'surname' => $data['surname'],
            'birth_date' => $data['birth_date'],
            'avatar' => $data['image'],
            'email'=> $data['email'],
            'phone' => $data['phone'],
            'address' => $data['address'],
            'education'=> $data['education'],
            'place_work' => $data['place_work'],
            'position'=> $data['position'],
            'category'=> $data['category'],
            'experience'=> $data['experience'],
            'other_info'=> $data['other_info'],
            'sign_for_news'=> $data['sign_for_news'],
            'password' => Hash::make($data['password']),
        ]);
    }

    /**
     * @param  Request $request
     * @return JsonResponse|RedirectResponse
     */
    public function register(Request $request)
    {
        
        $request->validate($this->validator());

        if(empty($data)) $this->create($request->input());

        return $request->wantsJson()
            ? new JsonResponse([], 201)
            : redirect()->route('#');

    }
}