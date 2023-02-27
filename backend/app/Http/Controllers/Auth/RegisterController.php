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
            'patronym' => ['required', 'string', 'alpha_dash:ascii'],
            'birth_date' => ['required', 'date'],
            'email'=> ['required', 'email address', 'unique'],
            'phone' => ['required', 'unique', 'numeric', 'min:11'],
            'address' => ['required', 'string'],
            'company' => ['required', 'string'],
            'position'=> ['required', 'string'],
            'category'=> ['required', 'string'],
            'experience'=> ['required', 'numeric'],
            'education'=> ['required', 'string'],
            'other_info'=> ['boolean'],
            'has_agreed'=> ['boolean'],
            'password' => ['password'],
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
            'patronym' => $data['patronym'],
            'birth_date' => $data['birth_date'],
            'email'=> $data['email'],
            'phone' => $data['phone'],
            'address' => $data['address'],
            'company' => $data['company'],
            'position'=> $data['position'],
            'category'=> $data['category'],
            'experience'=> $data['experience'],
            'education'=> $data['education'],
            'other_info'=> $data['other_info'],
            'has_agreed'=> $data['has_agreed'],
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